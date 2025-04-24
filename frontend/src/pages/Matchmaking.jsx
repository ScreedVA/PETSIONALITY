import React from 'react'
import Img1 from "../assets/images/other/1.png";
import pse1 from "../assets/images/pse/1.jpeg";
import pse2 from "../assets/images/pse/2.jpeg";
import pse3 from "../assets/images/pse/3.jpeg";
import pi1 from "../assets/images/other/5.jpg";
import pi2 from "../assets/images/other/7.jpg";


const Matchmaking = () => {
  return (  
    <div className="flex ">
     <div className="w-1/2 bg-[#E8DEDB] pl-10 sm:pt-30 pt-32 pb-60 xl:px-28 p-6">
       <div className="flex item-start gap-6">
         <img
         src={Img1}
         alt="Jane Smith"
         className="w-24 h-24 object-cover rounded-full"
         />
        
         <div>
          <h4 className="text-xl ">out Jane Smith:</h4>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever  </p>   
         </div>
        </div>
        <div className='rounded-lg bg-[#90C6BE] p-2 mt-7 font-semibold'>
          <h1>Experiences</h1>
        </div>
         
        <div className='rounded-lg bg-white p-2 font-semibold'>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever  </p>
          <div className='flex gap-2 mt-2'>
           <img src={pse1} className="w-24 h-24 object-cover rounded-lg"/> 
           <img src={pse2} className="w-24 h-24 object-cover rounded-lg"/>
           <img src={pse3} className="w-24 h-24 object-cover rounded-lg"/>
          </div>
        
        </div> 

        <div className='rounded-lg bg-[#90C6BE] p-2 mt-3 font-semibold'>
          <h1>Reviews</h1>
        </div>
         
        <div className='rounded-lg bg-white p-2'>
         <div className="flex item-start gap-4 p-1 max-w-2xl">
           <img
           src={pi1}
           alt="Jane Smith"
           className="w-10 h-10 object-cover rounded-full"
           />
           <div>
             <p className='text-sm text-gray-800 leading-snug'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.  
             <span className="text-blue-600 hover:underline"> Read more</span> 
             </p>   
           </div>
          </div>
          <div className="flex item-start gap-4 p-1 max-w-2xl">
           <img
           src={pi2}
           alt="Jane Smith"
           className="w-10 h-10 object-cover rounded-full"
           />
           <div>
             <p className='text-sm text-gray-800 leading-snug'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.  
             <span className="text-blue-600 hover:underline"> Read more</span> 
             </p>   
           </div>
          </div>
        </div>
        <div className='flex'> 
         <div className='w-1/2 pr-1'>
           <div className='rounded-lg bg-[#90C6BE] p-2 mt-3 font-semibold gap-4'>
            <h1>Available date</h1>
           </div>
          </div>
          <div className='w-1/2 pl-1'>
            <div className=' rounded-lg bg-[#90C6BE] p-2 mt-3 font-semibold gap-4'>
             <h1>location</h1>
            </div>
            <div className="p-2 rounded-xl bg-white h-60 ">
             <iframe
              className="w-full h-full"
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d109883.5203628609!2d13.391113982924862!3d52.51342616930006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sde!4v1745313337765!5m2!1sen!2sde"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </div>
      </div>
     <div className="w-1/2  bg-[#FCF9F8] ">Right Side</div>
    </div>
  )
}

export default Matchmaking
