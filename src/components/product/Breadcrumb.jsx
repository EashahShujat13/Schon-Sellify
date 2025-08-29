import React from 'react'
import bgImg from '../../assets/img/breadcrumb4.jpeg';
import { useNavigate } from 'react-router';
function Breadcrumb() {
  const navigate = useNavigate();
  
  return (
    <div>
      <div>
       <div
      className="bg-cover bg-center  bg-no-repeat h-[40vh] flex flex-col justify-center items-center text-black px-4"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <h1 className="uppercase font-bold text-5xl text-[#383838] text-center">Chairs</h1>

      <ul className="flex gap-4 mt-4 text-xl font-bold text-gray-700 cursor-pointer">
        <li onClick={()=>{navigate('/')}} className=' hover:text-red-950'>Home  &nbsp; › &nbsp;</li>
        <li onClick={()=>{navigate('/aboutus')}} className=' hover:text-red-950'>About Us  &nbsp; › &nbsp; </li>
        
      </ul>
    </div>
    </div>
    </div>
  )
}

export default Breadcrumb ; 
