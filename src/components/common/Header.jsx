import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { signOut, onAuthStateChanged } from 'firebase/auth'
import { auth } from '../../utils/firebase'
import { useDispatch } from 'react-redux'
import { addUser, removeUser } from '../../utils/store/userSlice'
import { useNavigate } from 'react-router-dom'
import { Supported_language } from '../../utils/constants/language'
import { changeLanguage } from '../../utils/store/appSlice'
import SearchBar from './SearchBar'
import useWindowSize from '../../hooks/useWindowSize'

const Header = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const windowSize = useWindowSize()
  const language = useSelector((state) => state.app.language)
  console.log('headerrender')
  const handleSignOut = () => {
    signOut(auth).then(() => {
      console.log("Sign-out successful.");
    }).catch((error) => {
      // An error happened.
      console.log(error);
    });
    
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        // ...
        const {uid, email,displayName} = user;
        dispatch(addUser({uid, email,displayName}))
        navigate("/browse")

      } else {
        // User is signed out
        // ...
        dispatch(removeUser())
        navigate("/login")
      }
      
    });
    return () => {
      unsubscribe();
    }
},[dispatch,navigate])
  return (
    <div className='absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-black z-10 flex flex-col md:justify-between md:flex-row'>
      <div className=" h-auto w-44 " onClick={()=>navigate("/browse")}>
        <img src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-07-24/consent/87b6a5c0-0104-4e96-a291-092c11350111/019808e2-d1e7-7c0f-ad43-c485b7d9a221/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png
" alt="" />
      </div>
      

      {user && windowSize === "lg" && <>
      <SearchBar/>
      <div className='text-white flex items-center gap-2 mx-2'>
        <select onChange={(e)=>dispatch(changeLanguage(e.target.value))} value={language}>
            {Supported_language.map((language)=>{
                return <option key={language.value} value={language.value}>{language.name}</option>
            })}
        </select>
         <div>{user?.email}</div>
         <button onClick={handleSignOut} className='bg-red-600 p-2'> Sign Out </button>
      </div>
      </>}
    </div>
  )
}

export default Header