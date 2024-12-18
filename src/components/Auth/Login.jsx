import React, { useState } from 'react'

const Login = ({handleLogin}) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()
        handleLogin(email, password)
        setEmail("")
        setPassword("")
    }

    return (
        <div className='flex h-screen w-screen items-center justify-center bg-gradient-to-r from-purple-600 to-indigo-600'>
            <div className='border-2 rounded-xl border-emerald-600 p-16 sm:p-20 bg-white shadow-lg'>
                <form 
                    onSubmit={(e) => { submitHandler(e) }}
                    className='flex flex-col items-center justify-center space-y-6'
                >
                    <h2 className='text-3xl font-bold text-white mb-6'>Welcome Back</h2>
                    
                    <input 
                        value={email}
                        onChange={(e) => { setEmail(e.target.value) }}
                        required 
                        className='outline-none bg-transparent border-2 border-emerald-600 font-medium text-white text-lg py-3 px-6 rounded-full placeholder:text-gray-400 focus:ring-2 focus:ring-emerald-600 transition duration-300' 
                        type="email" 
                        placeholder='Enter your email' 
                    />
                    
                    <input
                        value={password}
                        onChange={(e) => { setPassword(e.target.value) }}
                        required 
                        className='outline-none bg-transparent border-2 border-emerald-600 font-medium text-white text-lg py-3 px-6 rounded-full mt-3 placeholder:text-gray-400 focus:ring-2 focus:ring-emerald-600 transition duration-300' 
                        type="password" 
                        placeholder='Enter password' 
                    />

                    <button className='mt-6 text-white font-semibold bg-emerald-600 text-lg py-3 px-8 w-full rounded-full hover:bg-emerald-700 focus:outline-none transition duration-300'>
                        Log In
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Login
