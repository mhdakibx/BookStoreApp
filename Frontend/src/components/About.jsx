import React from 'react'
import { Link } from 'react-router-dom'

function About() {
  return (
    <>
      <div className="w-full min-h-screen flex justify-center items-center px-4 py-8 bg-gray-100 dark:bg-slate-900">
        
        <div className="max-w-2xl w-full bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6 md:p-8 text-center flex flex-col items-center">
          
          {/* Heading */}
          <h1 className="text-3xl md:text-4xl font-extrabold text-pink-600 mb-5">
            About READORA
          </h1>

          {/* Description */}
          <p className="text-sm md:text-md text-gray-700 dark:text-gray-300 mb-5 leading-relaxed">
            READORA is a dedicated team focused on delivering high-quality solutions in web development and modern applications. We strive for creativity, efficiency, and user-friendly designs to bring the best experience to our users.
          </p>

          {/* Key Features / Services */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5 w-full">
            <div className="bg-pink-50 dark:bg-pink-900/30 rounded-xl p-3 shadow hover:shadow-md transition">
              <h2 className="font-semibold text-lg mb-1">Innovative Solutions</h2>
              <p className="text-sm text-gray-600 dark:text-gray-200">We craft creative and efficient solutions for your projects.</p>
            </div>
            <div className="bg-pink-50 dark:bg-pink-900/30 rounded-xl p-3 shadow hover:shadow-md transition">
              <h2 className="font-semibold text-lg mb-1">User-Friendly Design</h2>
              <p className="text-sm text-gray-600 dark:text-gray-200">Our designs focus on simplicity and excellent user experience.</p>
            </div>
            <div className="bg-pink-50 dark:bg-pink-900/30 rounded-xl p-3 shadow hover:shadow-md transition">
              <h2 className="font-semibold text-lg mb-1">Responsive Layouts</h2>
              <p className="text-sm text-gray-600 dark:text-gray-200">All our pages are fully responsive for mobile and desktop.</p>
            </div>
            <div className="bg-pink-50 dark:bg-pink-900/30 rounded-xl p-3 shadow hover:shadow-md transition">
              <h2 className="font-semibold text-lg mb-1">Support & Teamwork</h2>
              <p className="text-sm text-gray-600 dark:text-gray-200">We provide support and collaborate to deliver the best results.</p>
            </div>
          </div>

          {/* Back Button */}
          <Link to="/">
            <button className="bg-pink-600 text-white px-5 py-2 rounded-xl hover:bg-pink-700 hover:scale-105 transition duration-300">
              Back
            </button>
          </Link>

        </div>
      </div>
    </>
  )
}

export default About
