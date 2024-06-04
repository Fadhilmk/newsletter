// pages/api/submit-email.js
import { db } from '../../../firebase';
import { collection, addDoc } from 'firebase/firestore';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { email } = req.body;
        try {
            const docRef = await addDoc(collection(db, 'emails'), { email, timestamp: new Date() });
            res.status(200).json({ id: docRef.id });
        } catch (error) {
            res.status(500).json({ error: 'Error adding document: ' + error.message });
        }
    } else {
        res.status(405).json({ error: 'Method not allowed' });
    }
}
