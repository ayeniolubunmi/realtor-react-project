import { getAuth, updateProfile} from 'firebase/auth'
import React, { useState } from 'react'
import { useNavigate } from 'react-router';
import { db } from '../firebase';
import { toast } from 'react-toastify';
import { updateDoc, doc } from 'firebase/firestore';

export default function Profile() {
  const auth = getAuth();
  const navigate = useNavigate()
  const [changeDetail, setChanegDetail] = useState(false);
  const [formData, setFormData] = useState({
    name:auth.currentUser.name,
    email:auth.currentUser.email,
  })
  const {name,email} = formData
  function onLogOut(){
    auth.signOut();
    navigate('/')
  }
  function onChange(e){
    setFormData((prevState)=>({
      ...prevState,
      [e.target.id] : e.target.value,
    }))
  }
 async function onSubmit(){
    try {
      if(auth.currentUser.displayName !== name){
        await updateProfile(auth.currentUser, {
          displayName: name
        })
      }
      const docRef = doc(db,"users", auth.currentUser.uid)
      await updateDoc(docRef, {
        name:name,
      })
    } catch (error) {
      toast.error("Could not update the profile")
    }
  }
  return (
    <>
      <section className='flex justify-center items-center flex-col max-w-6xl mx-auto'>
        <h1 className='text-3xl text-center font-bold mt-6'> My profile</h1>
        <div className='mt-6 md:w-[40%] px-3'>
          <form>
            <input 
            className='w-full px-4 py-2 text-xl bg-white text-gray-400 border-gray-700 rounded' 
            type="text" id='name' name="name" value={name}/>
            <input 
            className='w-full mt-6 px-4 py-2 text-xl bg-white text-gray-400 border-gray-700 rounded' 
            type="email" 
            id='email' 
            name="email" 
            disabled = {!changeDetail}
            onChange={onChange}
            value={email} />
            <div className='flex justify-between whitespace-nowrap text-sm sm:text-lg mt-6'>
              <p onClick={()=>{
                changeDetail && onSubmit();
                setChanegDetail((prevState)=> !prevState)}} className='flex items-center'>Do you want to change your name ?          
            <span 
              className='text-red-600
               hover:text-red-700 ml-3 
              transition duration-200 ease-in-out 
              font-semibold cursor-pointer'>{changeDetail ? "Apply change" : "Edit"}</span>
              </p>
              <p onClick={onLogOut} className='text-blue-600
               hover:text-blue-800 ml-3 
              transition duration-200 ease-in-out 
              font-semibold cursor-pointer capitalize'>
                sign out
              </p>
            </div>
          </form>
        </div>
      </section>
    </>
  )
}
