// pages/api/getCollection.js


import { db } from '../../../lib/firebase';
import { doc, setDoc,  deleteDoc } from 'firebase/firestore';

export default async function getCollection(req, res) {
  switch (req.method) {
    case 'PUT':
      try {
        const { id } = req.query;
        const docRef = doc(db, 'tatoos', id);
        let {master ,img_url,style}= req.body
        if(style.length>3&&master.length>3&&img_url.length>0){
          await setDoc(docRef, req.body);
          res.status(200).json({ message: 'Document updated successfully' });
        }else if(name===undefined||desc===undefined){
          res.status(400).json({ error: 'body is empty' });
        }else{
          res.status(404).json({ error: 'something went wrong ' });
        }
        
      } catch (error) {
        res.status(500).json({ error: 'Failed to update document' });
      }
      break;
    case 'DELETE':
      try {
        const { id } = req.query;
        const docRef = doc(db, 'tatoos', id);
        await deleteDoc(docRef);
        res.status(200).json({ message: 'Document deleted successfully' });
      } catch (error) {
        res.status(500).json({ error: 'Failed to delete document' });
      }
      break;
    default:
      res.setHeader('Allow', [ 'PUT', 'DELETE']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
