
import * as admin from 'firebase-admin';
import { config } from 'dotenv';
config({ path: '.env.local' });


const hasFirebaseAdminConfig = 
    process.env.FIREBASE_PROJECT_ID &&
    process.env.FIREBASE_CLIENT_EMAIL &&
    process.env.FIREBASE_PRIVATE_KEY;

if (hasFirebaseAdminConfig && !admin.apps.length) {
    try {
        admin.initializeApp({
            credential: admin.credential.cert({
                projectId: process.env.FIREBASE_PROJECT_ID,
                clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
                privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
            }),
        });
    } catch (error) {
        console.error('Firebase admin initialization error', error);
    }
}


export const db = admin.apps.length ? admin.firestore() : ({} as admin.firestore.Firestore);
export const auth = admin.apps.length ? admin.auth() : ({} as admin.auth.Auth);
