import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { Send, Brain, Sparkles, Loader2, MessageSquare, CornerDownRight, Radio, LogIn, Download, MoreHorizontal, Edit2, Heart, Users, Trash2 } from 'lucide-react';
import { auth, db, collection, addDoc, onSnapshot, query, orderBy, serverTimestamp, doc, updateDoc, deleteDoc, signInWithPopup, getRedirectResult, GoogleAuthProvider } from '../lib/firebase';
import ReactMarkdown from 'react-markdown';
import { formatDistanceToNow } from 'date-fns';

interface Comment {
  id: string;
  content: string;
  authorId: string;
  authorName: string;
  createdAt: any;
}

interface Idea {
  id: string;
  content: string;
  authorId: string;
  authorName: string;
  createdAt: any;
  keyPoints?: string;
  comments?: Comment[];
}

export function Space() {
  const [activeTab, setActiveTab] = useState<'ideas' | 'chat'>('ideas');
  const [liveMessages, setLiveMessages] = useState<Comment[]>([]);
  const [newLiveMessage, setNewLiveMessage] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const [ideas, setIdeas] = useState<Idea[]>([]);
  const [newIdea, setNewIdea] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [user, setUser] = useState<any>(null);
  const [authLoading, setAuthLoading] = useState(true);
  const [extractingId, setExtractingId] = useState<string | null>(null);
  
  const [commentingOn, setCommentingOn] = useState<string | null>(null);
  const [newComment, setNewComment] = useState('');
  const [commentsMap, setCommentsMap] = useState<Record<string, Comment[]>>({});

  const [editingPostId, setEditingPostId] = useState<string | null>(null);
  const [editContent, setEditContent] = useState('');
  const [openMenuId, setOpenMenuId] = useState<string | null>(null);

  // Close menu when clicking outside (simple approach: close on any scroll or document click)
  useEffect(() => {
    const closeMenu = () => setOpenMenuId(null);
    document.addEventListener('click', closeMenu);
    return () => document.removeEventListener('click', closeMenu);
  }, []);

  useEffect(() => {
    const checkRedirectResult = async () => {
      try {
        await getRedirectResult(auth);
      } catch (error: any) {
        console.error("Redirect auth error:", error);
      }
    };
    checkRedirectResult();

    const unsubscribeAuth = auth.onAuthStateChanged((u) => {
      setUser(u);
      setAuthLoading(false);
    });

    return () => unsubscribeAuth();
  }, []);

  const handleSignIn = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
    } catch (error: any) {
      console.error("Authentication failed:", error);
      alert("Sign in failed: " + (error.message || "Please check if popups are allowed or if this domain is authorized in Firebase."));
    }
  };

  useEffect(() => {
    if (!user) return;

    const q = query(collection(db, 'posts'), orderBy('createdAt', 'desc'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const fetchedIdeas = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as Idea[];
      setIdeas(fetchedIdeas);
      
      // Fetch comments for each post
      fetchedIdeas.forEach(idea => {
        const commentsQ = query(collection(db, 'posts', idea.id, 'comments'), orderBy('createdAt', 'asc'));
        onSnapshot(commentsQ, (commentSnapshot) => {
          const fetchedComments = commentSnapshot.docs.map(cDoc => ({
            id: cDoc.id,
            ...cDoc.data()
          })) as Comment[];
          setCommentsMap(prev => ({ ...prev, [idea.id]: fetchedComments }));
        });
      });
    });

    // Fetch live chat messages
    const chatQ = query(collection(db, 'messages'), orderBy('createdAt', 'asc'));
    const unsubscribeChat = onSnapshot(chatQ, (snapshot) => {
      const msgs = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as Comment[];
      setLiveMessages(msgs);
      setTimeout(() => messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' }), 100);
    });

    return () => {
      unsubscribe();
      unsubscribeChat();
    };
  }, [user]);

  const handleSubmitLiveMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newLiveMessage.trim() || !user) return;
    
    try {
      await addDoc(collection(db, 'messages'), {
        content: newLiveMessage,
        authorId: user.uid,
        authorName: user.displayName || ('Seeker_' + user.uid.substring(0, 4)),
        createdAt: serverTimestamp()
      });
      setNewLiveMessage('');
    } catch (error) {
      console.error("Error adding message: ", error);
    }
  };

  const handleSubmitIdea = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newIdea.trim() || !user) return;
    
    setIsSubmitting(true);
    try {
      await addDoc(collection(db, 'posts'), {
        content: newIdea,
        authorId: user.uid,
        authorName: user.displayName || ('Seeker_' + user.uid.substring(0, 4)),
        createdAt: serverTimestamp()
      });
      setNewIdea('');
    } catch (error) {
      console.error("Error adding document: ", error);
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const handleSubmitComment = async (ideaId: string) => {
    if (!newComment.trim() || !user) return;
    
    try {
      await addDoc(collection(db, 'posts', ideaId, 'comments'), {
        content: newComment,
        authorId: user.uid,
        authorName: user.displayName || ('Seeker_' + user.uid.substring(0, 4)),
        createdAt: serverTimestamp()
      });
      setNewComment('');
      setCommentingOn(null);
    } catch (error) {
      console.error("Error adding comment: ", error);
    }
  };

  const extractKeyPoints = async (idea: Idea) => {
    setExtractingId(idea.id);
    try {
      // First, get the comments as well
      const ideaComments = commentsMap[idea.id] || [];
      const commentsText = ideaComments.map(c => c.content).join('\n');
      
      const fullContent = `Idea: ${idea.content}\n\nDiscussion:\n${commentsText}`;

      const response = await fetch('/api/extract', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content: fullContent })
      });
      
      const data = await response.json();
      
      if (data.keyPoints) {
        await updateDoc(doc(db, 'posts', idea.id), {
          keyPoints: data.keyPoints
        });
      }
    } catch (error) {
      console.error("Error extracting key points: ", error);
    } finally {
      setExtractingId(null);
    }
  };

  const handleSaveEdit = async (ideaId: string) => {
    if (!editContent.trim() || !user) return;
    try {
      await updateDoc(doc(db, 'posts', ideaId), {
        content: editContent
      });
      setEditingPostId(null);
    } catch (error) {
      console.error("Error updating idea: ", error);
    }
  };

  const handleDeletePost = async (ideaId: string) => {
    if (!user) return;
    if (window.confirm("Are you sure you want to delete this post?")) {
      try {
        await deleteDoc(doc(db, 'posts', ideaId));
        setOpenMenuId(null);
      } catch (error) {
        console.error("Error deleting idea: ", error);
      }
    }
  };

  const handleLike = (e: React.MouseEvent) => {
    e.stopPropagation();
    alert("Liked!");
    setOpenMenuId(null);
  };

  const handleCollab = (e: React.MouseEvent) => {
    e.stopPropagation();
    alert("Collab requested with Satya Supervision!");
    setOpenMenuId(null);
  };

  const handleDownload = (idea: Idea) => {
    if (!idea.keyPoints) return;
    const blob = new Blob([idea.keyPoints], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Study_Materials_${idea.id}.md`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  if (authLoading) {
    return (
      <div className="pt-32 pb-20 px-6 max-w-4xl mx-auto min-h-screen flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-gold-500" />
      </div>
    );
  }

  if (!user) {
    return (
      <div className="pt-32 pb-20 px-6 max-w-4xl mx-auto min-h-screen flex flex-col items-center justify-center">
        <Brain className="w-16 h-16 text-gold-400 mb-6" />
        <h1 className="text-3xl md:text-5xl font-serif text-white mb-6 text-center">Join The SPACE</h1>
        <p className="text-white/60 mb-8 max-w-md mx-auto text-center font-light">
          Connect with the community, share ideas, and access AI-synthesized study materials. Please sign in to participate.
        </p>
        <button
          onClick={handleSignIn}
          className="flex items-center gap-3 px-8 py-4 bg-gold-500 text-black font-semibold rounded-lg hover:bg-gold-400 transition-colors uppercase tracking-widest text-sm"
        >
          <LogIn className="w-5 h-5" />
          Sign In with Google
        </button>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-20 px-6 max-w-4xl mx-auto min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-serif text-gold-400 mb-4 tracking-tight flex items-center gap-4">
          <Brain className="w-10 h-10" /> The SPACE
        </h1>
        <p className="text-white/60 text-lg font-light">
          Share ideas, discuss, and synthesize collective wisdom into actionable study materials.
        </p>
      </motion.div>

      {/* Tabs */}
      <div className="flex gap-4 mb-10 border-b border-white/10 pb-4 overflow-x-auto scrollbar-hide">
        <button
          onClick={() => setActiveTab('ideas')}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors font-medium text-sm whitespace-nowrap ${activeTab === 'ideas' ? 'bg-white/10 text-white' : 'text-white/50 hover:text-white/80'}`}
        >
          <Brain className="w-4 h-4" />
          Ideas Feed
        </button>
        <button
          onClick={() => setActiveTab('chat')}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors font-medium text-sm whitespace-nowrap ${activeTab === 'chat' ? 'bg-white/10 text-white' : 'text-white/50 hover:text-white/80'}`}
        >
          <Radio className="w-4 h-4" />
          Live Discussion
        </button>
      </div>

      {activeTab === 'ideas' && (
        <>
          {/* Input Area */}
          <motion.form 
            onSubmit={handleSubmitIdea}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mb-16 p-1 rounded-2xl bg-gradient-to-b from-white/10 to-transparent"
          >
            <div className="bg-black/80 rounded-xl p-6 border border-white/5">
              <textarea
                value={newIdea}
                onChange={(e) => setNewIdea(e.target.value)}
                placeholder="Share an insight, hypothesis, or idea..."
                className="w-full bg-transparent text-white placeholder-white/30 resize-none outline-none min-h-[120px] font-light"
              />
              <div className="flex justify-end mt-4">
                <button
                  type="submit"
                  disabled={isSubmitting || !newIdea.trim()}
                  className="flex items-center gap-2 px-6 py-3 bg-gold-500 text-black font-medium rounded-lg hover:bg-gold-400 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  {isSubmitting ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
                  Publish
                </button>
              </div>
            </div>
          </motion.form>

          {/* Ideas Feed */}
          <div className="space-y-8">
        {ideas.map((idea, index) => (
          <motion.div
            key={idea.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="rounded-2xl border border-white/10 bg-white/[0.02] overflow-hidden"
          >
            <div className="p-8">
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gold-500/20 flex items-center justify-center text-gold-400 text-xs font-bold">
                    {idea.authorName.split('_')[1]}
                  </div>
                  <div>
                    <div className="text-white/80 text-sm font-medium">{idea.authorName}</div>
                    <div className="text-white/40 text-xs">
                      {idea.createdAt ? formatDistanceToNow(idea.createdAt.toDate(), { addSuffix: true }) : 'just now'}
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 relative">
                  {!idea.keyPoints && (
                    <button
                      onClick={() => extractKeyPoints(idea)}
                      disabled={extractingId === idea.id}
                      className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-xs text-white/70 transition-colors disabled:opacity-50"
                    >
                      {extractingId === idea.id ? (
                        <Loader2 className="w-3 h-3 animate-spin" />
                      ) : (
                        <Sparkles className="w-3 h-3 text-gold-400" />
                      )}
                      Synthesize Materials
                    </button>
                  )}
                  
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setOpenMenuId(openMenuId === idea.id ? null : idea.id);
                    }}
                    className="p-2 text-white/50 hover:text-white/80 transition-colors rounded-lg hover:bg-white/5"
                  >
                    <MoreHorizontal className="w-5 h-5" />
                  </button>

                  {openMenuId === idea.id && (
                    <div className="absolute right-0 top-full mt-2 w-64 bg-gray-900 border border-white/10 rounded-xl shadow-xl overflow-hidden z-10 py-1">
                      {idea.authorId === user?.uid && (
                        <>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setEditingPostId(idea.id);
                              setEditContent(idea.content);
                              setOpenMenuId(null);
                            }}
                            className="w-full text-left px-4 py-3 flex items-center gap-3 text-sm text-white/80 hover:bg-white/5 transition-colors"
                          >
                            <Edit2 className="w-4 h-4" /> Edit Post
                          </button>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleDeletePost(idea.id);
                            }}
                            className="w-full text-left px-4 py-3 flex items-center gap-3 text-sm text-red-400 hover:bg-white/5 transition-colors"
                          >
                            <Trash2 className="w-4 h-4" /> Delete Post
                          </button>
                        </>
                      )}
                      <button
                        onClick={handleLike}
                        className="w-full text-left px-4 py-3 flex items-center gap-3 text-sm text-white/80 hover:bg-white/5 transition-colors"
                      >
                        <Heart className="w-4 h-4" /> Like
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setCommentingOn(commentingOn === idea.id ? null : idea.id);
                          setOpenMenuId(null);
                        }}
                        className="w-full text-left px-4 py-3 flex items-center gap-3 text-sm text-white/80 hover:bg-white/5 transition-colors"
                      >
                        <MessageSquare className="w-4 h-4" /> Comment
                      </button>
                      <button
                        onClick={handleCollab}
                        className="w-full text-left px-4 py-3 flex items-center gap-3 text-sm text-white/80 hover:bg-white/5 transition-colors"
                      >
                        <Users className="w-4 h-4" /> Collab with Satya Supervision
                      </button>
                    </div>
                  )}
                </div>
              </div>
              
              {editingPostId === idea.id ? (
                <div className="mb-6">
                  <textarea
                    value={editContent}
                    onChange={(e) => setEditContent(e.target.value)}
                    className="w-full bg-white/5 text-white placeholder-white/30 resize-none outline-none min-h-[120px] font-light rounded-xl p-4 border border-white/10 focus:border-gold-500/50"
                  />
                  <div className="flex justify-end gap-2 mt-3">
                    <button
                      onClick={() => setEditingPostId(null)}
                      className="px-4 py-2 rounded-lg text-sm font-medium text-white/60 hover:text-white transition-colors"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={() => handleSaveEdit(idea.id)}
                      className="px-4 py-2 bg-gold-500 text-black rounded-lg text-sm font-medium hover:bg-gold-400 transition-colors"
                    >
                      Save Changes
                    </button>
                  </div>
                </div>
              ) : (
                <div className="text-white/90 font-light leading-relaxed mb-6 whitespace-pre-wrap">
                  {idea.content}
                </div>
              )}

              {/* Action Bar */}
              <div className="flex gap-4 border-t border-white/10 pt-4 mt-6">
                 <button 
                  onClick={() => setCommentingOn(commentingOn === idea.id ? null : idea.id)}
                  className="flex items-center gap-2 text-white/50 hover:text-white/80 text-sm transition-colors"
                >
                  <MessageSquare className="w-4 h-4" /> 
                  Discuss ({(commentsMap[idea.id] || []).length})
                 </button>
              </div>

              {/* Comments Section */}
              {commentingOn === idea.id && (
                <div className="mt-6 space-y-4">
                  {(commentsMap[idea.id] || []).map(comment => (
                    <div key={comment.id} className="flex gap-3 pl-4 border-l border-white/10">
                      <CornerDownRight className="w-4 h-4 text-white/20 mt-1 shrink-0" />
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-white/70 text-xs font-medium">{comment.authorName}</span>
                          <span className="text-white/30 text-[10px]">
                            {comment.createdAt ? formatDistanceToNow(comment.createdAt.toDate(), { addSuffix: true }) : 'just now'}
                          </span>
                        </div>
                        <div className="text-white/60 text-sm font-light">
                          {comment.content}
                        </div>
                      </div>
                    </div>
                  ))}
                  
                  <div className="flex gap-3 pl-4 border-l border-white/10 pt-2">
                    <CornerDownRight className="w-4 h-4 text-white/20 mt-3 shrink-0" />
                    <div className="flex-1 flex gap-2">
                      <input
                        type="text"
                        value={newComment}
                        onChange={(e) => setNewComment(e.target.value)}
                        placeholder="Add to the discussion..."
                        className="flex-1 bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm text-white placeholder-white/30 outline-none focus:border-gold-500/50"
                        onKeyDown={(e) => {
                          if (e.key === 'Enter') handleSubmitComment(idea.id);
                        }}
                      />
                      <button 
                        onClick={() => handleSubmitComment(idea.id)}
                        disabled={!newComment.trim()}
                        className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg text-sm transition-colors disabled:opacity-50"
                      >
                        Send
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* AI Synthesized Key Points */}
            {idea.keyPoints && (
              <div className="bg-gold-500/5 border-t border-gold-500/20 p-6 md:p-8">
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-gold-400" />
                    <h4 className="text-gold-400 font-medium text-sm tracking-widest uppercase">Synthesized Study Materials</h4>
                  </div>
                  <button 
                    onClick={() => handleDownload(idea)}
                    className="flex items-center gap-2 px-3 py-1.5 bg-gold-500/10 hover:bg-gold-500/20 border border-gold-500/30 rounded-lg text-xs text-gold-300 transition-colors"
                  >
                    <Download className="w-3 h-3" />
                    Download
                  </button>
                </div>
                <div className="prose prose-invert prose-sm max-w-none prose-p:font-light prose-li:font-light">
                  <ReactMarkdown>{idea.keyPoints}</ReactMarkdown>
                </div>
              </div>
            )}
          </motion.div>
        ))}
        
        {ideas.length === 0 && !isSubmitting && (
          <div className="text-center py-20 text-white/30 font-light">
            The SPACE is empty. Be the first to share an insight.
          </div>
        )}
      </div>
      </>)}

      {activeTab === 'chat' && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col h-[600px] bg-black/40 border border-white/10 rounded-2xl overflow-hidden backdrop-blur-md"
        >
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {liveMessages.map((msg, i) => {
              const isMe = user?.uid === msg.authorId;
              return (
                <div key={msg.id} className={`flex flex-col ${isMe ? 'items-end' : 'items-start'}`}>
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-white/70 text-xs font-medium">{isMe ? 'You' : msg.authorName}</span>
                    <span className="text-white/30 text-[10px]">
                      {msg.createdAt ? formatDistanceToNow(msg.createdAt.toDate(), { addSuffix: true }) : 'just now'}
                    </span>
                  </div>
                  <div className={`px-4 py-2 rounded-2xl max-w-[80%] text-sm font-light ${isMe ? 'bg-gold-500/20 text-gold-100 border border-gold-500/30 rounded-tr-sm' : 'bg-white/10 text-white border border-white/5 rounded-tl-sm'}`}>
                    {msg.content}
                  </div>
                </div>
              );
            })}
            <div ref={messagesEndRef} />
            {liveMessages.length === 0 && (
              <div className="text-center py-20 text-white/30 font-light h-full flex items-center justify-center">
                Welcome to the live discussion. Say hello!
              </div>
            )}
          </div>
          
          <form onSubmit={handleSubmitLiveMessage} className="p-4 bg-black/60 border-t border-white/10">
            <div className="flex gap-2">
              <input
                type="text"
                value={newLiveMessage}
                onChange={(e) => setNewLiveMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-white/30 outline-none focus:border-gold-500/50 transition-colors"
              />
              <button
                type="submit"
                disabled={!newLiveMessage.trim()}
                className="px-6 py-3 bg-gold-500 text-black font-medium rounded-lg hover:bg-gold-400 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </form>
        </motion.div>
      )}
    </div>
  );
}
