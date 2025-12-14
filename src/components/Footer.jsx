import React from 'react'
import logo from '/logo.png';
import map from '../assets/Vector (1).png';
import email from '../assets/Vector (2).png';
import phone from '../assets/Vector (3).png';
import fly from '../assets/Vector (4).png';
import { Link } from 'react-router-dom';
import { FaTwitter, FaInstagram, FaFacebook, FaSnapchat } from 'react-icons/fa';
import pic1 from '../assets/18 →  → 1.jpg.png'
import pic2 from '../assets/18 →  → 2.jpg.png'
import pic3 from '../assets/18 →  → 3.jpg.png'
import pic4 from '../assets/18 →  → 4.jpg.png'



function Footer() {
    return (
        <div>
            <div className="xl:flex justify-around items-center bg-[#F7F7F8] py-6 hidden">
                <div className="flex flex-col gap-2 w-96">
                    <div>
                        <img src={logo} alt="SwiftBites Logo" className="w-36 mx-auto" />
                        <h3 className='text-[#777777] font-medium'>SwiftBites is the biggest market of grocery products. Get your daily needs from our store.</h3>
                    </div>
                    <div className="flex items-center space-x-5 text-sm">
                        <img src={map} alt="" />
                        <h3 className='text-[#777777] font-medium'>51 Green St.Huntington ohaio beach ontario, NY 11746 KY 4783, USA.</h3>
                    </div>
                    <div className="flex space-x-5 items-center">
                        <img src={email} alt="" />
                        <h3 className='text-[#777777] font-medium'>swiftbliss@gmail.com</h3>
                    </div>
                    <div className="flex space-x-5 items-center">
                        <img src={phone} alt="" />
                        <h5 className='text-[#777777] font-medium'>+91 123 4567890</h5>
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <h5 className='text-black font-semibold text-lg '>Company</h5>
                    <Link to="/" className='text-[#777777] font-medium mt-9'>Home</Link>
                    <Link to="/about" className='text-[#777777] font-medium'>About Us</Link>
                    <Link to="/blog" className='text-[#777777] font-medium'>Blog</Link>
                    <Link to="/about" className='text-[#777777] font-medium'>Terms & Conditions</Link>
                    <Link to="/about" className='text-[#777777] font-medium'>Contact Us</Link>
                    <Link to="/about" className='text-[#777777] font-medium'>Support Center</Link>
                </div>
                <div className="flex flex-col gap-2">
                    <h5 className='text-black font-semibold text-lg '>Categories</h5>
                    <h2 to="/about" className='text-[#777777] font-medium mt-9'>Dairy & Bakery</h2>
                    <h2 to="/about" className='text-[#777777] font-medium'> Fruits & Vegetable</h2>
                    <h2 to="/about" className='text-[#777777] font-medium'>Snack & Spice</h2>
                    <h2 to="/about" className='text-[#777777] font-medium'>Juice & Drinks</h2>
                    <h2 to="/about" className='text-[#777777] font-medium'>Chicken & Meat</h2>
                    <h2 to="/about" className='text-[#777777] font-medium'>Fast Food</h2>
                </div>
                <div className="flex flex-col gap-4">
                    <h5 className='text-black font-semibold text-lg '>Subscribe Our Newsletter</h5>
                    <div className="relative flex items-center w-full max-w-md">
                        <input type="text" placeholder="Search here..." className="w-full px-4 py-2 border  rounded-md focus:outline-none focus:ring-2 focus:ring-[#F53E32] focus:border-transparent" />
                        <button type="submit" className="absolute right-2 p-1 text-gray-500 hover:text-[#F53E32] transition-colors"><img src={fly} alt="Search" className="w-5 h-5" /></button>
                    </div>
                    <div className='flex space-x-4'>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className='border p-2 border-[#E1DFDF] rounded-md hover:text-[#F53]' ><FaTwitter size={20} /></a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className='border p-2 border-[#E1DFDF] rounded-md hover:text-[#F53]' ><FaInstagram size={20} /></a>
                        <a href="https://web.facebook.com/davex1011/" target="_blank" rel="noopener noreferrer" className='border p-2 border-[#E1DFDF] rounded-md hover:text-[#F53]' ><FaFacebook size={20} /></a>
                        <a href="https://www.snapchat.com/@davex.101" target="_blank" rel="noopener noreferrer" className='border p-2 border-[#E1DFDF] rounded-md hover:text-[#F53]' ><FaSnapchat size={20} /></a>
                    </div>
                    <div className="flex space-x-6">
                        <img src={pic1} alt="" />
                        <img src={pic2} alt="" />
                        <img src={pic3} alt="" />
                        <img src={pic4} alt="" />
                    </div>
                </div>
            </div>
            <div className="xl:hidden mx-auto flex bg-[#F7F7F8] flex-col gap-4">
                <img src={logo} alt="SwiftBites Logo" className="w-36 mx-auto" />
                <h5 className='text-black font-semibold text-lg mx-auto'>Subscribe Our Newsletter</h5>
                <div className="relative flex items-center w-full max-w-md mx-auto">
                    <input type="text" placeholder="Search here..." className="w-full px-4 py-2 border  rounded-md focus:outline-none focus:ring-2 focus:ring-[#F53E32] focus:border-transparent" />
                    <button type="submit" className="absolute right-2 p-1 text-gray-500 hover:text-[#F53E32] transition-colors"><img src={fly} alt="Search" className="w-5 h-5" /></button>
                </div>
                <div className='flex space-x-4 mx-auto'>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className='border p-2 border-[#E1DFDF] rounded-md hover:text-[#F53]' ><FaTwitter size={20} /></a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className='border p-2 border-[#E1DFDF] rounded-md hover:text-[#F53]' ><FaInstagram size={20} /></a>
                    <a href="https://web.facebook.com/davex1011/" target="_blank" rel="noopener noreferrer" className='border p-2 border-[#E1DFDF] rounded-md hover:text-[#F53]' ><FaFacebook size={20} /></a>
                    <a href="https://www.snapchat.com/@davex.101" target="_blank" rel="noopener noreferrer" className='border p-2 border-[#E1DFDF] rounded-md hover:text-[#F53]' ><FaSnapchat size={20} /></a>
                </div>
                <div className="flex space-x-6 mx-auto">
                    <img src={pic1} alt="" />
                    <img src={pic2} alt="" />
                    <img src={pic3} alt="" />
                    <img src={pic4} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Footer
