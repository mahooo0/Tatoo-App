// pages/api/getCollection.js

import { useParams } from 'next/navigation';
import { db } from '../../../lib/firebase';
import { collection, getDocs, doc, setDoc, addDoc } from 'firebase/firestore';

export default async function getCollection(req, res) {
  switch (req.method) {
    case 'GET':
      try {
        const querySnapshot = await getDocs(collection(db, 'styles'));
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
           
            // Добавление нового документа в коллекцию 'styles'
            
            let {name,desc}=req.body
            if(name.length>3&&desc.length>3){
              const docRef = await addDoc(collection(db, 'styles'), req.body);
              res.status(201).json({ id: docRef.id });
            }else if(name===undefined||desc===undefined){
              res.status(400).json({ error: 'body is empty' });
            }else{
              res.status(404).json({ error: 'something went wrong ' });
            }
             // Отправляем успешный ответ с id нового документа
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
