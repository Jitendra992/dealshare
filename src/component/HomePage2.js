import React from 'react'
import { IoLocationSharp } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { LuLayoutDashboard } from "react-icons/lu";
import { AiOutlineUser } from "react-icons/ai";
import { LiaShoppingBagSolid } from "react-icons/lia";
import "../App.css";


const HomePage2 = () => {
    return (<>
        <div className='lg:w-full lg:h-full  '>
            <div className=' flex lg:flex-row flex-col  gap-2 lg:px-20 lg:py-5  shadow-lg bg-white px-5  '>
                <div className='lg:w-[20%] w-[30%] py-5 hidden lg:block'>
                    <img src='https://prod-web-static.dealshare.in/_next/static/media/dsFullLogo.38b04a09.svg'></img>
                </div>
                <div className='lg:w-[10%] py-1'>
                    <p className='text-lg font-bold'><IoLocationSharp className='inline-block' /> Delivering to</p>
                    <p className='py-2 text-gray-400'>Gaytri Nagar Naubasta Lucknow</p>
                </div>

                <div className=' lg:w-[55%] w-full relative'>
                    <CiSearch className='absolute text-xl lg:top-4 top-4 gap-1 left-2 text-gray-600 ' />
                    <input className=' py-3 px-6 lg:px-0  lg:w-full w-[90vw] border border-[#423d3d] lg:rounded-2xl rounded-xl lg:p-3   lg:placeholder:px-5 outline-none' type='Search' placeholder='  Search for "sugar"'></input>
                </div>

                <div className='lg:flex hidden  lg:text-2xl lg:mt-5 lg:gap-5 gap-2 lg:ml-5 mt-5  '>
                    <LuLayoutDashboard />
                    <AiOutlineUser />
                    <LiaShoppingBagSolid />
                </div>
            </div>

          
        </div>



    </>
    )

}

export default HomePage2