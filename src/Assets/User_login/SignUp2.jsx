import React from 'react'

function SignUp2() {
    return (
        <>
            <div className='container mt-8'>
                <div className='h-auto flex justify-items-start'>
                    <img className='w-64 h-full' src='https://goglobiliti.com/assets/images/globiliti-logo2x.png' />
                    <div className='mt-5 ml-16 text-sm text-[#192451] h-4'>
                        <span className="text-[#919194] pr-3">
                            Create School Account  
                        </span>
                        &gt;
                        <span className="pl-3 font-bold">
                            Account Setup
                        </span>
                    </div>
                </div>
                <div className='flex'>
                    <div className='mt-20 w-2/4 pr-32'>
                        <div className='text-3xl text-[#192451] font-semibold pb-6'>Let’s set up your account, John</div>
                        <div class="">
                            <form class="bg-white rounded pt-3 pb-8 mb-4">
                                <div class="mb-4">
                                    <label class="block text-[#192451] text-lg font-bold mb-2" for="schoolName">
                                        What's your school name?
                                    </label>
                                    <div className='border-b border-black bg-slate-100'>
                                        <input class="appearance-none py-2   border-none text-gray-700 leading-tight focus:outline-none bg-slate-100" id="schoolName" required="true" type="text" placeholder="John Doe" />
                                    </div>
                                </div>
                                <div class="mb-4">
                                    <label class="block text-[#192451] text-lg font-bold mb-2" for="phoneNo">
                                        Phone Number
                                    </label>
                                    <div className='border-b border-black'>
                                        <input class="appearance-none py-2 border-none text-gray-700 leading-tight focus:outline-none" id="phoneNo" type="number" placeholder="123456789" />
                                    </div>
                                </div>
                                <div class="mb-6">
                                    <label class="block text-[#192451] text-lg font-bold mb-2" for="password">
                                        Pin Code
                                    </label>
                                    <div className='border-b border-black'>
                                        <input class="appearance-none py-2   border-none text-gray-700 leading-tight focus:outline-none" id="pincode" type="number" placeholder="PINCODE" />
                                    </div>
                                    
                                </div>
                                <div class="flex items-center justify-between">
                                    <button class="bg-[#192451] text-white font-semibold py-2 px-8 rounded-sm focus:outline-none focus:shadow-outline" type="button" onClick={() => (window.location = "./SignUp2.jsx")}>
                                        Continue
                                    </button>
                                </div>
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

export default SignUp2