import React from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import { VscSettings } from 'react-icons/vsc'
import { FaUserAlt } from 'react-icons/fa'
import { ImAttachment } from 'react-icons/im'
import { BsPlusCircleDotted } from 'react-icons/bs'
import { BsFillClockFill } from 'react-icons/bs'
import { AiOutlineCheck } from 'react-icons/ai'
import { ImCross } from 'react-icons/im'


function ImpactBoard() {

    const LearningTools = [
        {
            name: "Paragon One",
            image: "https://th.bing.com/th/id/OIP.XmQsj0TuBwagvSIDNNF64QAAAA?w=202&h=115&c=7&r=0&o=5&dpr=1.25&pid=1.7",
            subtitle: "Creative thinking, +3 more"
        },
        {
            name: "Classcraft",
            image: "https://files.classcraft.com/classcraft-assets/images/logo_icon.png",
            subtitle: "Writing composition, +1 more"
        },
        {
            name: "ReadToMe",
            image: "https://th.bing.com/th/id/OIP.LXsAnwWD7VwA21YzWQuHwAHaGD?w=211&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7",
            subtitle: "Experimental Learning, +2 more"
        },
        {
            name: "Discovery Education",
            image: "https://th.bing.com/th/id/OIP.FnNKUU8Y27JltLj1pg5YbwHaHa?w=175&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7",
            subtitle: "Creative thinking, +10 more"
        }
    ]

    return (
        <>
            <div className='flex justify-between pl-10 gap-8'>

                <div className='w-full pb-4'>
                    <div className='flex justify-between items-center'>
                        <div className='text-[18px] font-bold text-[#131A34]'>
                            Impact Campaigns
                        </div>
                        <div className='flex gap-4'>
                            <AiOutlinePlus />
                            <VscSettings />
                        </div>
                    </div>

                    <div className='bg-white px-3 py-4 shadow-md rounded-md my-4'>
                        <div className='font-semibold pb-2'>
                            Reading Comprehension
                        </div>
                        <div className='inline text-[13px] text-white px-3 pt-1 pb-2 bg-[#E9374F] rounded-2xl'>
                            High
                        </div>
                        <div className='w-4/5 py-6 flex justify-between items-center'>
                            <div className='flex gap-2 items-center' >
                                <FaUserAlt className='text-[#A2A2A6]' />
                                <div className='text-[#A2A2A6] text-[13px] font-medium'>Students</div>
                            </div>
                            <div className='flex gap-2 items-center' >
                                <ImAttachment className='text-[#A2A2A6]' />
                                <div className='text-[#A2A2A6] text-[13px] font-medium'>3 Tools</div>
                            </div>
                        </div>

                        <div className=' flex justify-between items-center'>
                            <div className='flex gap-2 items-center' >
                                <BsPlusCircleDotted className='w-[30px] h-[30px] text-[#A2A2A6]' />
                            </div>
                            <div className='flex gap-2 items-center' >
                                <div className='text-[#A2A2A6] text-[13px] font-medium'>29 Sept – 10 Oct</div>
                            </div>
                        </div>
                    </div>

                    <div className='bg-white px-3 py-4 shadow-md rounded-md my-4'>
                        <div className='font-semibold pb-2'>
                            Career Development
                        </div>
                        <div className='inline text-[13px] text-white px-3 pt-1 pb-2 bg-[#FD612B] rounded-2xl'>
                            Medium
                        </div>
                        <div className='w-4/5 py-6 flex justify-between items-center'>
                            <div className='flex gap-2 items-center' >
                                <FaUserAlt className='text-[#A2A2A6]' />
                                <div className='text-[#A2A2A6] text-[13px] font-medium'>Students</div>
                            </div>
                            <div className='flex gap-2 items-center' >
                                <ImAttachment className='text-[#A2A2A6]' />
                                <div className='text-[#A2A2A6] text-[13px] font-medium'>0 Tools</div>
                            </div>
                        </div>

                        <div className='flex justify-between items-center'>
                            <div className='flex gap-2 items-center' >
                                <BsPlusCircleDotted className='w-[30px] h-[30px] text-[#A2A2A6]' />
                            </div>
                            <div className='flex gap-2 items-center' >
                                <div className='text-[#A2A2A6] text-[13px] font-medium'>29 Sept – 10 Nov</div>
                            </div>
                        </div>

                    </div>
                    <div className='flex gap-2 items-center justify-center' >
                        <AiOutlinePlus className='w-[20px] h-[20px] text-[#A2A2A6] font-bold' />
                        <div className='text-[#A2A2A6] text-[14px] font-bold'>Start New Campaign</div>
                    </div>
                </div>


                {/* NOTE: LEARNING TOOLS */}
                <div className='w-full pb-4'>
                    <div className='flex justify-between items-center'>
                        <div className='text-[18px] font-bold text-[#131A34]'>
                            Learning Tools                        </div>
                        <div className='flex gap-4'>
                            <AiOutlinePlus />
                            <VscSettings />
                        </div>
                    </div>

                    {LearningTools.map((props) => (
                        <div className='bg-white px-3 py-4 shadow-md rounded-md my-4'>
                            <div className='flex items-center gap-3'>
                                <div>
                                    <img src={props.image} className='w-[50px] h-[50px]' alt="" />
                                </div>
                                <div>
                                    <div className='text-[16px] font-semibold'>
                                        {props.name}
                                    </div>
                                    <div className=' text-[#919194] text-[13px]'>
                                        {props.subtitle}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}

                    <div className='flex gap-2 items-center justify-center' >
                        <AiOutlinePlus className='w-[20px] h-[20px] text-[#A2A2A6] font-bold' />
                        <div className='text-[#A2A2A6] text-[14px] font-bold'>Add new Tool</div>
                    </div>
                </div>

                {/* NOTE: Tool Pilots */}

                <div className='w-full pb-4'>
                    <div className='flex justify-between items-center'>
                        <div className='text-[18px] font-bold text-[#131A34]'>
                            Tool Pilots                      </div>
                        <div className='flex gap-4'>
                            <AiOutlinePlus />
                            <VscSettings />
                        </div>
                    </div>


                    <div className='bg-white px-3 py-4 shadow-md rounded-t-md mt-4'>
                        <div className='font-semibold pb-2'>
                            ReadToMe: Houde Pilot 1
                        </div>
                        <div className='inline text-[13px] text-white px-3 pt-1 pb-2 bg-[#1DBC8E] rounded-2xl'>
                            In Progress
                        </div>
                        <div className='py-6 flex justify-between items-center'>
                            <div className='flex gap-2 items-center' >
                                <BsFillClockFill className='text-[#A2A2A6]' />
                                <div className='text-[#A2A2A6] text-[13px] font-medium'>Fall 2020</div>
                            </div>
                            <div className='flex gap-2 items-center' >
                                <AiOutlineCheck className='text-[#A2A2A6]' />
                                <div className='text-[#A2A2A6] text-[13px] font-medium'>Student Pod</div>
                            </div>
                        </div>

                        <div className=' flex justify-between items-center'>
                            <div className='flex gap-2 items-center' >
                                <FaUserAlt className='w-[30px] h-[30px] text-[#A2A2A6]' />
                            </div>
                            <div className='flex gap-2 items-center' >
                                <div className='text-[#A2A2A6] text-[16px] font-extrabold'>¥50k/year</div>
                            </div>
                        </div>

                    </div>

                    <div className='bg-[#ECECEC] shadow-lg p-4 rounded-b-md'>
                        <div className=' flex-nowrap justify-start gap-1'>
                            <div className=' inline-block text-[13px] p-[3px] text-[#919194] bg-[#FFFFFF] m-1 rounded-md shadow-md'>
                                words-per-minute
                            </div>
                            <div className=' inline-block text-[13px] p-[3px] text-[#919194] bg-[#FFFFFF] m-1  rounded-md shadow-md'>
                                text completition                            </div>
                            <div className=' inline-block text-[13px] p-[3px] text-[#919194] bg-[#FFFFFF] m-1 rounded-md shadow-md'>
                                comprehension&nbsp;response                            </div>
                            <div className=' inline-block text-[13px] p-[3px] text-[#919194] bg-[#FFFFFF] m-1 rounded-md shadow-md'>
                                pronounciation accuracy                         </div>
                        </div>
                    </div>


                    <div className='bg-white px-3 py-4 shadow-md rounded-t-md mt-4'>
                        <div className='font-semibold pb-2'>
                            Paragon One: Houde Pilot 2
                        </div>
                        <div className='inline text-[13px] text-white px-3 pt-1 pb-2 bg-[#FD9A00] rounded-2xl'>
                            Awaiting Approval                        </div>
                        <div className='py-6 flex justify-between items-center'>
                            <div className='flex gap-2 items-center' >
                                <BsFillClockFill className='text-[#A2A2A6]' />
                                <div className='text-[#A2A2A6] text-[13px] font-medium'>Fall 2020</div>
                            </div>
                            <div className='flex gap-2 items-center' >
                                <ImCross className='text-[#A2A2A6]' />
                                <div className='text-[#A2A2A6] text-[13px] font-medium'>Student Pod</div>
                            </div>
                        </div>

                        <div className=' flex justify-between items-center'>
                            <div className='flex gap-2 items-center' >
                                <FaUserAlt className='w-[30px] h-[30px] text-[#A2A2A6]' />
                            </div>
                            <div className='flex gap-2 items-center' >
                                <div className='text-[#A2A2A6] text-[16px] font-extrabold'>¥50k/year</div>
                            </div>
                        </div>

                    </div>

                    <div className='bg-[#ECECEC] shadow-lg p-4 rounded-b-md'>
                        <div className=' flex-nowrap justify-start gap-1'>
                            <div className=' inline-block text-[13px] p-[3px] text-[#919194] bg-[#FFFFFF] m-1 rounded-md shadow-md'>
                                Early&nbsp;Career&nbsp;Prep
                            </div>
                            <div className=' inline-block text-[13px] p-[3px] text-[#919194] bg-[#FFFFFF] m-1  rounded-md shadow-md'>
                                College&nbsp;Prep                           </div>
                            <div className=' inline-block text-[13px] p-[3px] text-[#919194] bg-[#FFFFFF] m-1 rounded-md shadow-md'>
                                Experiential&nbsp;Learning                         </div>
                        </div>
                    </div>

                    <div className='bg-white px-3 py-4 shadow-md rounded-t-md mt-4'>
                        <div className='font-semibold pb-2'>
                            Paragon One: Houde Pilot 2
                        </div>
                        <div className='inline text-[13px] text-white px-3 pt-1 pb-2 bg-[#FD612B] rounded-2xl'>
                            Awaiting Approval                        </div>
                        <div className='py-6 flex justify-between items-center'>
                            <div className='flex gap-2 items-center' >
                                <BsFillClockFill className='text-[#A2A2A6]' />
                                <div className='text-[#A2A2A6] text-[13px] font-medium'>Fall 2020</div>
                            </div>
                            <div className='flex gap-2 items-center' >
                                <ImCross className='text-[#A2A2A6]' />
                                <div className='text-[#A2A2A6] text-[13px] font-medium'>Student Pod</div>
                            </div>
                        </div>

                        <div className=' flex justify-between items-center'>
                            <div className='flex gap-2 items-center' >
                                <FaUserAlt className='w-[30px] h-[30px] text-[#A2A2A6]' />
                            </div>
                            <div className='flex gap-2 items-center' >
                                <div className='text-[#A2A2A6] text-[16px] font-extrabold'>¥50k/year</div>
                            </div>
                        </div>

                    </div>

                    <div className='bg-[#ECECEC] shadow-lg p-4 rounded-b-md'>
                        <div className=' flex-nowrap justify-start gap-1'>
                            <div className=' inline-block text-[13px] p-[3px] text-[#919194] bg-[#FFFFFF] m-1 rounded-md shadow-md'>
                                Early&nbsp;Career&nbsp;Prep
                            </div>
                            <div className=' inline-block text-[13px] p-[3px] text-[#919194] bg-[#FFFFFF] m-1  rounded-md shadow-md'>
                                College&nbsp;Prep                           </div>
                            <div className=' inline-block text-[13px] p-[3px] text-[#919194] bg-[#FFFFFF] m-1 rounded-md shadow-md'>
                                Experiential&nbsp;Learning                         </div>
                        </div>
                    </div>
                </div>

                {/* NOTE: Design Learning Pods */}

                <div className='w-full pb-4 bg-[#E3E3E3]'>
                    <div className='flex  pb-3 justify-between items-center bg-[#ECECEC]'>
                        <div className='text-[18px] font-bold text-[#131A34] bg-[#ECECEC]'>
                            Design Learning Pods                    </div>
                        <div className='flex gap-4 pr-2 bg-[#ECECEC]'>
                            <VscSettings />
                        </div>
                    </div>

                    <div className='pt-3 mt-3 mb-0 pb-3 bg-[#E3E3E3]'>
                        <div className='flex gap-2 items-center justify-center' >
                            <div className='text-[#A2A2A6] text-[14px] font-bold'>
                                <div className='flex gap-2 items-center justify-center' >
                                    <AiOutlinePlus className='w-[20px] h-[20px] text-[#A2A2A6] font-bold' />
                                    <div className='text-[#A2A2A6] text-[14px] font-bold'>
                                        Add new Tool
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ImpactBoard