import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi'
import { ImLab } from 'react-icons/im'
import { AiFillHome } from 'react-icons/ai'
import { BsFillPlusCircleFill } from 'react-icons/bs'
import { FcSettings } from 'react-icons/fc'
import { FaInbox } from 'react-icons/fa'
import { AiOutlineTeam } from 'react-icons/ai'
import { GoSignOut } from 'react-icons/go'

import logo from './images/logo.png';

function SidePanel() {
    return (
        <>
            <div className='h-full'>

                <div className="flex justify-between text-[#C2C6D9] p-3 bg-[#131A34]">
                    <div className='w-40 h-auto'>
                        <img className='w-full h-auto pt-2 pb-2' src={logo} />
                    </div>
                    <div className='my-auto'>
                        <GiHamburgerMenu className='text-[#7E849F]' />
                    </div>
                </div>

                <div className='text-[#C2C6D9] text-lg'>
                    <div className='pl-5'>
                        <div className='mb-3 text-[#C2C6D9] bg-[#323C61] py-2 flex'>
                            <span className='items-center'>
                                <AiFillHome className='inline mr-2 align-middle' />
                            </span>
                            <div className='pt-1'>
                                Home
                            </div>
                        </div>
                        <div className='mb-3 text-[#C2C6D9] flex'>
                            <span>
                                <ImLab className='inline mr-2' />
                            </span>
                            <div className='pt-1'>
                                My Pilots
                            </div>
                        </div>
                        <div className='mb-3 text-[#C2C6D9]'>
                            <span>
                                <FaInbox className='inline mr-2' />
                            </span>
                            Inbox
                        </div>
                        <div className='mb-3 text-[#C2C6D9] pb-5'>
                            <span>
                                <AiOutlineTeam className='inline mr-2' /> My Team
                            </span>
                        </div>
                    </div>
                    <div className='text-[#C2C6D9] bg-[#C2C6D9]'>
                        <hr />
                    </div>

                    <div className='py-5 px-6'>
                        <div className='flex justify-between items-center pb-4'>
                            <div className='text-md'>
                                Add Team Members
                            </div>
                            <BsFillPlusCircleFill className="" />
                        </div>

                        <div className='flex gap-1 justify-start items-center pb-3'>
                            <div className='pr-2'>
                                <img src="https://www.pngfind.com/pngs/m/610-6104451_image-placeholder-png-user-profile-placeholder-image-png.png" className='w-[30px] h-[30px]  rounded-full' />
                            </div>
                            <div className='flex flex-col mt-1'>
                                <div className='p-0 m-0 leading-4'>
                                    Patricia M.
                                </div>
                                <div className='text-[13px] text-[#7E849F]  leading-5'>
                                    Teacher
                                </div>
                            </div>
                        </div>

                        <div className='flex gap-1 justify-start items-center pb-3 gap-y-0'>
                            <div className='pr-2'>
                                <img src="https://www.pngfind.com/pngs/m/610-6104451_image-placeholder-png-user-profile-placeholder-image-png.png" className='w-[30px] h-[30px]  rounded-full' />
                            </div>
                            <div className='flex flex-col mt-1'>
                                <div className='p-0 m-0 leading-4'>
                                    Liu Yangdong                            </div>
                                <div className='text-[13px] text-[#7E849F]  leading-5'>
                                    Principal
                                </div>
                            </div>
                        </div>

                        <div className='flex gap-1 justify-start items-center pb-3'>
                            <div className='pr-2'>
                                <img src="https://www.pngfind.com/pngs/m/610-6104451_image-placeholder-png-user-profile-placeholder-image-png.png" className='w-[30px] h-[30px]  rounded-full' />
                            </div>
                            <div className='flex flex-col mt-1'>
                                <div className='p-0 m-0 leading-4 '>
                                    Paul Literi                           </div>
                                <div className='text-[13px] text-[#7E849F]  leading-5'>
                                    Counselor
                                </div>
                            </div>
                        </div>

                        <div className='flex gap-1 justify-start items-center pb-3'>
                            <div className='pr-2'>
                                <img src="https://www.pngfind.com/pngs/m/610-6104451_image-placeholder-png-user-profile-placeholder-image-png.png" className='w-[30px] h-[30px]  rounded-full' />
                            </div>
                            <div className='flex flex-col mt-1'>
                                <div className='p-0 m-0 leading-4'>
                                    Chen Ying                          </div>
                                <div className='text-[13px] text-[#7E849F]  leading-5'>
                                    Counselor
                                </div>
                            </div>
                        </div>

                        <div className='flex gap-1 justify-start items-center pb-3'>
                            <div className='pr-2'>
                                <img src="https://www.pngfind.com/pngs/m/610-6104451_image-placeholder-png-user-profile-placeholder-image-png.png" className='w-[30px] h-[30px]  rounded-full' />
                            </div>
                            <div className='flex flex-col mt-1'>
                                <div className='p-0 m-0 leading-4'>
                                    Justin S.                          </div>
                                <div className='text-[13px] text-[#7E849F]  leading-5'>
                                    Teacher
                                </div>
                            </div>
                        </div>

                        <div className='flex gap-1 justify-start items-center pb-3'>
                            <div className='pr-2'>
                                <img src="https://www.pngfind.com/pngs/m/610-6104451_image-placeholder-png-user-profile-placeholder-image-png.png" className='w-[30px] h-[30px]  rounded-full' />
                            </div>
                            <div className='flex flex-col mt-1'>
                                <div className='p-0 m-0 leading-4'>
                                    Heather Wong                         </div>
                                <div className='text-[13px] text-[#7E849F]  leading-5'>
                                    Teacher
                                </div>
                            </div>
                        </div>

                        <div className='flex gap-1 justify-start items-center pb-3'>
                            <div className='pr-2'>
                                <img src="https://www.pngfind.com/pngs/m/610-6104451_image-placeholder-png-user-profile-placeholder-image-png.png" className='w-[30px] h-[30px]  rounded-full' />
                            </div>
                            <div className='flex flex-col mt-1'>
                                <div className='p-0 m-0 leading-4'>
                                    Chris J.                       </div>
                                <div className='text-[13px] text-[#7E849F]  leading-5'>
                                    Teacher
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className=''>
                        <div className='text-[#C2C6D9] bg-[#C2C6D9]'>
                            <hr />
                        </div>

                        <footer className='p-5 mt-40'>
                            <div className='flex justify-start items-center pb-3'>
                                <div className='pr-3'>
                                    <FcSettings className=' text-[#7E849F]  ' />
                                </div>
                                <div className='text-[20px]'> Settings</div>
                            </div>

                            <div className='flex justify-start items-center'>
                                <div className='pr-3'>
                                    <GoSignOut className=' text-[#7E849F]  ' />
                                </div>
                                <div className='text-[20px]'> Sign Out</div>
                            </div>

                        </footer>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SidePanel