import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, onSnapshot, query, orderBy, serverTimestamp, doc, updateDoc, deleteDoc } from 'firebase/firestore';
import { getAuth, signInWithPopup, signInWithRedirect, getRedirectResult, GoogleAuthProvider } from 'firebase/auth';
import config from '../../firebase-applet-config.json';

const app = initializeApp(config);
const auth = getAuth(app);

// Use the dynamically provisioned database instance (not default)
const db = getFirestore(app, config.firestoreDatabaseId);

export { app, auth, db, collection, addDoc, onSnapshot, query, orderBy, serverTimestamp, doc, updateDoc, deleteDoc, signInWithPopup, signInWithRedirect, getRedirectResult, GoogleAuthProvider };
