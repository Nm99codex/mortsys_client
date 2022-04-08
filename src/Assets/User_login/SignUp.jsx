import React from 'react'
import { useHistory } from 'react-router-dom'
import SignUp2 from './SignUp2'

function SignUp() {

    const history = useHistory();
    const backtoLogin = () => {
        history.push('/signIn')
    }

    const history2 = useHistory();
    const signuptwo =()=> {
        history2.push('/signUp2')
    }
    return (
        <>
            <div className='container mt-8'>
                <div className='h-auto flex justify-items-start'>
                    <img className='w-64 h-full' src='https://goglobiliti.com/assets/images/globiliti-logo2x.png' />  
                    <div className='mt-5 ml-16 text-sm text-[#192451] h-4 font-bold'>
                        Create School Account
                    </div>
                </div>
                <div className='flex'>
                    <div className='mt-20 w-2/4 pr-32'>
                        <div className='text-3xl text-[#192451] font-semibold pb-8'>Welcome to Globiliti!</div>
                        <div className='text-lg text-gray-500 font-normal pb-8'>Create your school account</div>
                        <div class="">
                            <form class="bg-white rounded pt-3 pb-8 mb-4">
                                <div class="mb-4">
                                    <label class="block text-[#192451] text-lg font-bold mb-2" for="Name">
                                        What's your full Name?
                                    </label>
                                    <div className='border-b border-black bg-slate-100'>
                                        <input class="appearance-none py-2   border-none text-gray-700 leading-tight focus:outline-none bg-slate-100" id="Name" type="text" placeholder="John Doe" />
                                    </div>
                                </div>
                                <div class="mb-4">
                                    <label class="block text-[#192451] text-lg font-bold mb-2" for="emailId">
                                        Email
                                    </label>
                                    <div className='border-b border-black'>
                                        <input class="appearance-none py-2 border-none text-gray-700 leading-tight focus:outline-none" id="emailId" type="email" placeholder="Email" />
                                    </div>
                                </div>
                                <div class="mb-6">
                                    <label class="block text-[#192451] text-lg font-bold mb-2" for="password">
                                        Password
                                    </label>
                                    <div className='border-b border-black'>
                                        <input class="appearance-none py-2   border-none text-gray-700 leading-tight focus:outline-none" id="password" type="password" placeholder="Password" />
                                    </div>
                                    <div className='text-gray-400 text-xs'>Password must be 8 characters or longer</div>
                                </div>
                                <div class="flex items-center justify-between">
                                    <button class="bg-[#192451] text-white font-semibold py-2 px-8 rounded-sm focus:outline-none focus:shadow-outline" type="button" onClick={signuptwo} >
                                        CREATE ACCOUNT
                                    </button>
                                </div>
                                <button className='pt-8 text-black font-semibold' onClick={backtoLogin}>
                                    Back to Login
                                </button>
                            </form>
                        </div>
                    </div>
                    <div className='w-2/4 h-auto mt-10'>
                        <img src="https://goglobiliti.com/assets/images/onboarding-1.png" alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignUp