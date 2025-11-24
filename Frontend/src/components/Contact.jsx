import React from "react";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <>
      <div className="w-full min-h-screen flex justify-center items-center px-4 py-10">
        <div className="max-w-6xl w-full flex flex-col md:flex-row gap-8 justify-center items-center">

          {/* Contact Info Box (Same Size) */}
          <div className="
            flex-1 
            flex flex-col justify-center items-center text-center
            bg-white/40 dark:bg-slate-800/40 
            backdrop-blur-lg 
            shadow-xl 
            rounded-2xl 
            p-8 md:p-10 
            border border-white/20 dark:border-slate-700/50
            transform transition duration-300 hover:scale-105 hover:shadow-2xl
          ">
            <h1 className="text-3xl md:text-4xl font-extrabold mb-6 tracking-wide">
              Contact <span className="text-pink-600">READORA</span>
            </h1>

            <div className="space-y-4">
              <a
                href="mailto:readora.team@gmail.com"
                className="block text-lg font-medium text-blue-700 hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-300 transition"
              >
                📧 <span className="underline">readora.team@gmail.com</span>
              </a>

              <a
                href="tel:+8801234567890"
                className="block text-lg font-medium text-green-700 hover:text-green-900 dark:text-green-400 dark:hover:text-green-300 transition"
              >
                📞 +880 1234 567 890
              </a>

              <p className="text-md md:text-lg font-medium">
                📍 Chittagong, Bangladesh
              </p>
            </div>

            <div className="mt-6">
              <Link to="/">
                <button className="
                  bg-pink-600 
                  text-white 
                  px-6 py-2 
                  text-lg 
                  rounded-xl 
                  hover:bg-pink-700 
                  hover:scale-105 
                  shadow-md 
                  transition-all 
                  duration-300
                ">
                  Back
                </button>
              </Link>
            </div>
          </div>

          {/* Google Map Box (Smaller than Contact Box) */}
          <div className="
            flex-1 
            flex flex-col justify-center items-center text-center
            w-full max-w-sm
            bg-white/40 dark:bg-slate-800/40 
            backdrop-blur-lg 
            shadow-xl 
            rounded-2xl 
            p-6 
            border border-white/20 dark:border-slate-700/50
            transform transition duration-300 hover:scale-105 hover:shadow-2xl
          ">
            <h2 className="text-xl md:text-2xl font-semibold mb-4">Our Location</h2>
            <div className="w-full h-52 rounded-xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3670.6301878879796!2d91.80217787501782!3d22.367915285293803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30acd8a5d3fdb6b5%3A0xd702a50f4506d1a1!2sChittagong%20Polytechnic%20Institute!5e0!3m2!1sen!2sus!4v1701315000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default Contact;
