import React from 'react'

const Links = () => {
  return (
    <div className=' text-white bg-orange-400 p-10 flex justify-around items-stretch items-center'>
        <div>
            <h1 className='font-semibold text-md mb-2'>About Shopmart</h1>
            <ul>
                <li><a href="#"className="hover:underline">Careers</a></li>
                <li><a href="#"className="hover:underline">Affiliate Program</a></li>
                <li><a href="#"className="hover:underline">Privacy Policy</a></li>
                <li><a href="#"className="hover:underline">Terms & conditions</a></li>
            </ul>
        </div>
        <div>
            <h1 className='font-semibold text-md mb-2'>Connect With Us</h1>
            <ul>
                <li><a href="#"className="hover:underline">Twitter</a></li>
                <li><a href="#"className="hover:underline">Facebook</a></li>
                <li><a href="#"className="hover:underline">Instagram</a></li>
                <li><a href="#"className="hover:underline">Pintrest</a></li>
            </ul>
        </div>
        <div>
            <h1 className='font-semibold text-md mb-2'>Help Desk</h1>
            <ul>
                <li> <a href="#" className="hover:underline">Payments</a></li>
                <li> <a href="#" className="hover:underline">Shipping</a></li>
                <li> <a href="#"className="hover:underline">Cancellation & Returns</a></li>
                <li> <a href="#"className="hover:underline">FAQ</a></li>
            </ul>
        </div>
        <div>
        <h2 className="font-semibold text-md mb-2">Customer Service</h2>
         <p> Email: support@shopmart.com<br /> 
         Phone: +1 (123) 456-7890<br /> 
         Business Hours: Mon - Fri: 9:00 AM - 6:00 PM </p>
         <p>&copy; 2024 Shopmart. All rights reserved.</p>
          </div>
    
             
        
    </div>
  )
}

export default Links