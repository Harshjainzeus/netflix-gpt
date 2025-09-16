import React, { useRef, useState } from 'react'
import { checkValidation } from '../utils/checkValidation'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { auth } from '../utils/firebase'
import { useDispatch } from 'react-redux'
import { addUser } from '../utils/store/userSlice'
const LoginForm = () => {

  const [isSignUp, setIsSignUp] = useState(false)
  const email = useRef(null);
  const name = useRef(null);
  const password = useRef(null);
  const [error, setError] = useState('')
  const dispatch = useDispatch()

  const handleClick = () => {
    setIsSignUp(!isSignUp)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const error = checkValidation(email.current.value,password.current.value);
    if(error.length > 0){
      setError(error);
      return;
    }
    if(isSignUp){
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed up 
    setError('')
    updateProfile(userCredential.user, {
      displayName: name.current.value , photoURL: "https://images.pexels.com/photos/14653174/pexels-photo-14653174.jpeg?_gl=1*35rget*_ga*MTIxOTU1MTc1LjE3NTUxNzU1NzU.*_ga_8JE65Q40S6*czE3NTUxNzU1NzQkbzEkZzAkdDE3NTUxNzU1NzQkajYwJGwwJGgw"
    }).then(() => {
      const {uid, email,displayName} = auth.currentUser;
      dispatch(addUser({uid, email,displayName}))
      // Profile updated!
      // ...
    })

    // ...
  })
  .catch((error) => {
    // const errorCode = error.code;
    const errorMessage = error.message;
    setError(errorMessage);    // ..
  });
      
    }else{
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        // Signed up 
        const {uid, email,displayName} = userCredential.user;
        // dispatch(addUser({uid, email,displayName}))
        setError('')
        // ...
      })
      .catch((error) => {
        // const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorMessage);    // ..
      });
    }
  }

  return (
    <div className=''>
    <div className=''>
      <img className='h-screen object-cover w-full' src="https://assets.nflxext.com/ffe/siteui/vlv3/258d0f77-2241-4282-b613-8354a7675d1a/web/IN-en-20250721-TRIFECTA-perspective_cadc8408-df6e-4313-a05d-daa9dcac139f_small.jpg
" alt="" />
    </div>
    <div className='mx-auto right-0 left-0 absolute md:w-3/12 w-3/5 h-2/3 z-100 bg-black shadow-2xl opacity-80 px-3 top-0 bottom-0 my-auto'>
    <form onSubmit={handleSubmit}>
      <h1 className='text-2xl font-bold text-white text-center mt-3'>Sign In</h1>
      <input ref={email} type="text" placeholder='Email' className='w-full h-10 p-2 my-4 mx-0.5 border-2 border-gray-600 text-white rounded-lg'/>
      {isSignUp && <input ref={name} type="text" placeholder='Name' className='w-full h-10 p-2 my-4 mx-0.5 border-2 border-gray-600 text-white rounded-lg'/>}

      <input ref={password} type="password" placeholder='Password' className='w-full h-10 p-2 my-4 mx-0.5 border-2 border-gray-600 text-white rounded-lg'/>
      {error.length > 0 && <p className='text-red-600 text-sm'>{error}</p>}

      <button className='w-full h-10 text-white bg-red-600 p-2 my-6' type='submit'>{isSignUp ? 'Sign Up' : 'Sign In'}</button>
      <p className='text-white text-sm'>Don't have an account? <span className='text-red-600' onClick={handleClick}>{isSignUp ? 'Sign In' : 'Sign Up'}</span></p>
    </form>
    </div>
    </div>
  )
}

export default LoginForm