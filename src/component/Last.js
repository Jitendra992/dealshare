import React from 'react'
import { MdEmail } from "react-icons/md";
import { FaYoutube } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { LuLayoutDashboard } from "react-icons/lu";
import { BsHandbag } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";


const Last = () => {
  return (<> 
    <div className='h-[70vh] lg:block hidden w-full  bg-[#F4F4F4]' >
    <div className='w-[90%] h-full ml-20 pt-12'>
    <div className='w-full h-[50%] flex justify-between'>
    <div className='w-[20%] h-full flex justify-center '>
    <img src='https://prod-web-static.dealshare.in/_next/static/media/dsFullLogo.38b04a09.svg'/>
    </div>
    <div className='w-[60%] flex gap-10 h-full'>
    <div className='w-[50%] h-full'>
    <p className='font-semibold'>Categories</p>
    <div className='h-[85%] w-full flex pt-3  mt-2'>
      <div className='w-1/2 text-xs'>
      <p className='mt-2'>Grocery</p>
      <p className='mt-2'>Beverages</p>
      <p className='mt-2'>Personal Care</p>
      <p className='mt-2'>Stationery & Toys</p>
      <p className='mt-2'>Cleaning Aids</p>
      <p className='mt-2'>Dairy, Frozen, Bakery</p>
      </div>
      <div className='w-1/2 text-xs'>
      <p className='mt-2'>Snacks & Packed Food</p>
      <p className='mt-2'>Cleaning & Home Care</p>
      <p className='mt-2'>Home & Kitchen</p>
      <p className='mt-2'>Appliances & Electronics</p>
      <p className='mt-2'>Fashion</p>
      <p className='mt-2'>Fruits & Veggies</p>
      </div>
    </div>
    </div>
    <div className='w-[25%] h-full'>
    <p className='font-semibold'>Product</p>
    <p className='mt-5 text-xs'>About Us</p>
    <p className='mt-3 text-xs'>Careers</p>
    <p className='w-full h-[0.5px] mt-3 bg-gray-400'></p>
    <p className= ' flex gap-2 mt-2 text-xs underline' ><MdEmail className='mt-1 texl-xl' />support@dealshare.in</p>
    </div>
    <div className='w-[15%]  h-full'>
      <p className='font-semibold'>We Deliver To</p>
      <p className='mt-5 text-xs'>Rajasthan</p>
      <p className='mt-2 text-xs'>West Bengal</p>
      <p className='mt-2 text-xs'>Delhi & NCR</p>
      <p className='mt-2 text-xs'>Uttar Pradesh</p>
    </div>
    </div>
    </div>
    <p className='w-full h-[1px] mt-2 bg-gray-600'></p>
    <div className='h-[15%] flex justify-between w-full mt-8 '>
    <div className='h-full w-[30%] mt-3'>
     <p className='text-black mt-2 font-semibold'>Download App For Better Experience</p>
     <div className='flex mt-1'>
      <img src='https://prod-web-static.dealshare.in/_next/static/media/appstore.e105c0eb.svg'/>
      <img src='https://prod-web-static.dealshare.in/_next/static/media/playstore.7f46eff4.svg'/>
     </div>
    

    </div>
    <div className='h-full w-[40%] mt-3'>
    <p className='text-black mt-2 font-semibold'>Reach Out Here</p>
    <ul className='flex justify-between mt-1 text-sm '>
      <li ><FaXTwitter className='inline-block'/>X (formerly twitter)</li>
      <li><FaLinkedin className='inline-block' />Linkedin</li>
      <li><FaFacebook  className='inline-block'/>Facebook</li>
      <li><GrInstagram className='inline-block' /> Instagram</li>
      <li><FaYoutube  className='inline-block'/>Youtube</li>
    </ul>
   </div>
   </div>
    <p className='w-full h-[1px] mt-14 bg-gray-600'></p>
    <div className='flex justify-between mt-6'>
      <p className='text-xs'>© Copyright | All Rights Reserved by DealShare</p>
      <p className='text-xs'>Privacy Policy</p>
      
    </div>
    </div>
    </div>
       
        <div className='h-[10vh] lg:hidden  flex justify-evenly items-center w-full bg-white'>
        <div className='mt-2'>
           <img className='pl-1' src='https://prod-web-static.dealshare.in/_next/static/media/dsLogo.266f84ad.svg'/>
           <p className='text-xs text-green-500 font-bold'>Home</p> 
        </div>
        <div className='mt-2'>
           <LuLayoutDashboard className='text-2xl ml-4' />
           <p className=' text-xs font-bold'>Categories</p> 
        </div>
        <div className='mt-2'>
           <BsHandbag className='text-2xl left-2' />
           <p className='text-xs font-bold'>Bag</p> 
        </div>
        <div className='mt-2'>
           <CgProfile className='text-2xl ml-4'/>
           <p className='text-xs font-bold pl-3'>Profile</p> 
        </div>
        
        
        </div>

    </>
  )
}

export default Last