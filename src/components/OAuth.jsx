import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth'
import { doc, setDoc, getDoc, serverTimestamp } from 'firebase/firestore';
import React from 'react'
import {FcGoogle} from 'react-icons/fc'
import { db } from '../firebase';

export default function OAuth() {

  async function onGoogleClick(){
    try {
      const auth = getAuth();
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);

      if(!docSnap.exists()){
        await setDoc(docRef, {
          name: user.displayName,
          email: user.email,
          timestamp: serverTimestamp
        })
      }
    } catch (error) {
      
    }
  }
  return (
    <button type="button" onClick={onGoogleClick} className=' flex items-center justify-center text-center 
    w-full bg-red-700 text-white text-sm 
    px-7 py-3 uppercase font-medium
     hover:bg-red-800 shadow-sm hover:shadow-lg active:shadow-lg rounded' >
      <FcGoogle className='text-2xl mr-2 bg-white rounded-full' />
      continue with google
    </button>
  )
}
