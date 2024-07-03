// pages/api/getCollection.js

import { useParams } from 'next/navigation';
import { db } from '../../../lib/firebase';
import { doc, setDoc, deleteDoc, getDoc } from 'firebase/firestore';

export default async function getCollection(req, res) {
  switch (req.method) {
    case 'GET':
      try {
        const { id } = req.query;
        if (!id) {
          res.status(400).json({ error: 'ID is required' });
          return;
        }
        const docRef = doc(db, 'Masters', id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          res.status(200).json(docSnap.data());
        } else {
          res.status(404).json({ error: 'Document not found' });
        }
      } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve document' });
      }
      break;
    case 'PUT':
      try {
        const { id } = req.query;
        const docRef = doc(db, 'Masters', id);
        let { name, desc, img_url, styles } = req.body;
        if (name.length > 3 && desc.length > 3 && img_url.length > 0 && styles.length > 0) {
          await setDoc(docRef, req.body);
          res.status(200).json({ message: 'Document updated successfully' });
        } else if (name === undefined || desc === undefined) {
          res.status(400).json({ error: 'Body is empty' });
        } else {
          res.status(404).json({ error: 'Something went wrong' });
        }
      } catch (error) {
        res.status(500).json({ error: 'Failed to update document' });
      }
      break;
    case 'DELETE':
      try {
        const { id } = req.query;
        const docRef = doc(db, 'styles', id);
        await deleteDoc(docRef);
        res.status(200).json({ message: 'Document deleted successfully' });
      } catch (error) {
        res.status(500).json({ error: 'Failed to delete document' });
      }
      break;
    default:
      res.setHeader('Allow', ['GET', 'PUT', 'DELETE']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
