import React, { useContext, useEffect, useState } from 'react'
import { assets } from '../assets/assets'
import { AppContext } from '../context/AppContext'

const RecruiterLogin = () => {
    const [state, setState] = useState('Login')
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const [image , setImage] = useState(false)
    const [isNextDataSubmitted, setIsNextDataSubmitted] = useState(false)
    const {setShowRecruiter} = useContext(AppContext)

    const onSubmitHandler = async (e) => 
    {
        e.preventDefault()
        if(state==='Sign Up' && !isNextDataSubmitted)
        {
            setIsNextDataSubmitted(true)
        }
    }

    useEffect (() => {
        document.body.style.overflow='hidden';

        return () => {
            document.body.style.overflow='unset';

        }
    },[])
    
    return (
    <div className='absolute top-0 bottom-0 right-0 left-0 z-10 backdrop-blur-sm bg-black/30 flex justify-center items-center'>
        <form onSubmit={onSubmitHandler} className='relative bg-white p-10 rounded-xl text-slate-500'>
            <h1 className='text-center text-2xl text-neutral-700 font-medium'>Recruiter {state}</h1>
            <p className='text-sm text-center'>Welcome Back!!! Please Sign up</p>

            {
                state === "Sign Up" && isNextDataSubmitted 
                ? <>
                <div className='flex items-center gap-4 my-10'>
                    <label htmlFor="image">
                        <img className="w-16 rounded-full" src={image ? URL.createObjectURL(image) : assets.upload_area} alt="" />
                        <input onChange={e => setImage(e.target.files[0])}  type="file" hidden id='image'/>
                    </label>
                    <p>Upload company <br />Logo</p>

                </div>
                
                </>
                : 
            <>
            {state !== 'Login' && (
                <div className='border px-4 py-2 flex items-center gap-2 rounded-full mt-5'>
                    <img src={assets.person_icon} alt="" />
                    <input className='outline-none text-sm' type="text" placeholder='Company name' value={name} required onChange={e => setName(e.target.value)}/>
                </div>
            )}
                
                <div className='border px-4 py-2 flex items-center gap-2 rounded-full mt-5'>
                    <img src={assets.email_icon} alt="" />
                    <input className='outline-none text-sm' type="email" placeholder='Email' value={email} required onChange={e => setEmail(e.target.value)}/>
                </div>

                <div className='border px-4 py-2 flex items-center gap-2 rounded-full mt-5'>
                    <img src={assets.lock_icon} alt="" />
                    <input className='outline-none text-sm' type="password" placeholder='Password' value={password} required onChange={e => setPassword(e.target.value)}/>
                </div>
              {state === 'Login' && <p className='text-sm text-blue-600 mt-4 cursor-pointer'>Forgot password?</p>}  
            </>

        }

        
            <button type='submit' className='bg-blue-600 w-full text-white rounded-full py-2 mt-4 '>
                {state === 'Login' ? 'login' : isNextDataSubmitted ?'Create Account' : 'Next'}
            </button>
            
            {
                state === 'Login' 
                ? <p className='mt-5 text-center'>Don't have an Account?  <span className='text-blue-600 cursor-pointer' onClick={() => setState('Sign Up')}>Sign Up</span></p> 
                : <p className='mt-5 text-center'>Already have an Account? <span className='text-blue-600 cursor-pointer' onClick={() => setState('Login')}>Login</span></p> 
            }
            
            <img onClick={e => setShowRecruiter(false)} src={assets.cross_icon} className='absolute top-5 right-5 cursor-pointer'  alt=""  />

        </form>
      
    </div>
  )
}

export default RecruiterLogin
