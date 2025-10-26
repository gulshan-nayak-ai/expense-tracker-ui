import React from 'react';
import CARD_2PINK from "../../assets/images/CARD2.png"
import { LuTrendingUpDown } from 'react-icons/lu';

const AuthLayout = ({children}) => {
  return (
    <div className='flex'>
      <div className='w-screen h-screen md:w-[60vw] px-12 pt-8 pb-12'>
        <h2 className='text-lg font-medium text-black'> Expense Tracker</h2>
        {children}
      </div>

      <div className='hidden md:block w-[40vw] h-screen bg-pink-200 bg-auth-bg-img bg-cover bg-no-repeat bg-center overflow-hidden p-8 relative'>
        <div className='w-48 h-48 rounded-[40px] bg-pink-500 absolute -top-7 -left-5'/>
        <div className='w-48 h-56 rounded-[40px] border-[20px] border-teal-300 absolute top-[30px] -right-10'/>
        <div className='w-48 h-48 rounded-[40px] bg-amber-400 absolute -bottom-7 -left-1'/>
        <div className='relative grid grid-cols-1 z-50'>
          <StatsInfoCard
          icon = {<LuTrendingUpDown/>}
          label = "Track your Income and expense"
          value = "95,0000"
          color= "bg-primary"
          />
        </div>

        <img src={CARD_2PINK} className='w-64 lg:w-[90%] absolute bottom-10 shadow-lg shadow-pink-400'></img>
      </div>
    </div>
  )
}

export default AuthLayout;

const StatsInfoCard = ({icon, label, value, color} ) =>{

  return <div className='flex gap-6 bg-white p-4 rounded-xl shadow-md shadow-pink-400 border border-gray-100'>
    <div className='w-12 h-12 flex items-center justify-center text-[26px] text-white ${color} rounded-full drop-shadow-xl'>
    {icon}
    </div>

    <div> 
      <h6 className='text-xs text-gray-500 mb-1'>{label}</h6>
      <spam className='text-[20px] '> Rs {value} </spam>


    </div>
  </div>

}
