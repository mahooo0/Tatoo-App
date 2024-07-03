// pages/api/getCollection.js

import { useParams } from 'next/navigation';
import { db } from '../../../lib/firebase';
import { collection, getDocs, doc, setDoc, addDoc } from 'firebase/firestore';
import { error } from 'console';

export default async function getCollection(req, res) {
  switch (req.method) {
    case 'GET':
      try {
        const querySnapshot = await getDocs(collection(db, 'tatoos'));
        const data = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        res.status(200).json(data);
      } catch (error) {
        res.status(500).json({ error: 'Failed to fetch collection' });
      }
      break;
    case 'POST':
        try {
           
           
            let {master ,img_url,style}= req.body
            console.log(master,img_url,style);
            if(style.length>3&&master.length>3&&img_url.length>0){
                const docRef = await addDoc(collection(db, 'tatoos'), req.body);
      
                res.status(201).json({ id: docRef.id }); // Отправляем успешный ответ с id нового документа
            
            }else{
                res.status(404).json({error:"something went wrong"})
            }
           
          } catch (error) {
            console.error('Error adding document: ', error);
            res.status(500).json({ error: 'Failed to add document' });
          }
      break;
 
    default:
      res.setHeader('Allow', ['GET', 'POST', ]);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
