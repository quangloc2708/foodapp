import { getApp, getApps, initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: 'AIzaSyAImoytFY1WU2CufcFWihQ1su6EkhBBCh0',
    authDomain: 'foodapp-3d123.firebaseapp.com',
    databaseURL: 'https://foodapp-3d123-default-rtdb.firebaseio.com',
    projectId: 'foodapp-3d123',
    storageBucket: 'foodapp-3d123.appspot.com',
    messagingSenderId: '638080201254',
    appId: '1:638080201254:web:150e329b28db307d306ce7',
    measurementId: 'G-LCTRTQV3CW',
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
const fireStore = getFirestore(app);
const storage = getStorage(app);

export { app, fireStore, storage };
