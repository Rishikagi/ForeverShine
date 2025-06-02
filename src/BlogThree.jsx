

import Blog3 from './images/Blog3.jpg'
import React from 'react';
export default function BlogThree(){
    return(
        <div className="max-w-4xl mx-auto px-4 py-12">
    <h1 className="text-3xl font-bold mb-8">Our Blogs</h1>
    <div className="min-h-screen bg-gray-50 py-8 px-2 md:px-8">
        <img
              src={Blog3}
              alt="Blog 3"
              className="w-full h-48 md:h-72 object-cover rounded-3xl shadow-xl border-4 border-gray-100 hover:scale-105 hover:shadow-2xl transition-all duration-300"
            />

        
        </div>
        <h3>Press conference at Delhi </h3>
 <p><span>by Admin </span> <span> Dec, 19, 2023 </span></p>
 <div>
    Introduction:
A brief overview of the event: attending the award-winning program at the Eros Hotel in New Delhi.
Your excitement about receiving an award from actress Isha Deol for "Best Entrepreneur of the Year 2025."
The Event:
A description of the event itself: who was there, the atmosphere, and the significance of the program.
A bit about the program's mission or focus—what made it stand out as award-winning.
Receiving the Award:
The moment of receiving the award, the emotions, and what it meant to you personally and professionally.
Your interaction with Isha Deol and any special moments or words exchanged during the ceremony.
Reflection on Achievements:
Reflecting on how you got to this point in your entrepreneurial journey and the hard work behind the recognition.
Any personal stories or challenges you faced that make the award even more meaningful.
Looking Forward:
How this award motivates you to keep pushing forward in your business.
Any future plans or goals you have as a result of this recognition.
Conclusion:
A closing statement expressing gratitude for the opportunity and any thank-yous you'd like to share with those who helped along the way.

 </div>
         </div>
    )
}