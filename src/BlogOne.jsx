import Blog1 from './images/Blog1.jpg'
import Blog2 from './images/Blog2.jpg'
import Blog3 from './images/Blog3.jpg'
import React from 'react';
export default function BlogOne(){
    return(
        <div className="max-w-4xl mx-auto px-4 py-12">
    <h1 className="text-3xl font-bold mb-8">Our Blogs</h1>
    <div className="min-h-screen bg-gray-50 py-8 px-2 md:px-8">
        <img
              src={Blog1}
              alt="Blog 1"
              className="w-full h-48 md:h-72 object-cover rounded-3xl shadow-xl border-4 border-gray-100 hover:scale-105 hover:shadow-2xl transition-all duration-300"
            />

        
        </div>
        <h3>SANDEEP WITH ISHA DEOL </h3>
 <p><span>by Admin </span> <span> Feb, 24, 2025 </span>

That's fantastic news! It must have been a special moment for Sandeep to be recognized with an award by ISHA DEOL . Can you share more about the award or what it was for? </p>
         </div>
    )
}