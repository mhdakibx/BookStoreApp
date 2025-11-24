import React from 'react'
import List from "../../public/list.json"
import Cards from './Cards'
import {Link} from "react-router-dom"
function Course() {
    
  return (
    <>
        <div className="container max-w-screen-2xl mx-auto px-4 md:px-20">

            <div className="mt-28 items-center justify-center text-center">
                <h1 className="text-2xl md:text-4xl">WE' delighted to have you <span className="text-pink-500">Hare!</span></h1>

                <p className="mt-12 px-10">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur in nisi praesentium amet delectus quidem dicta optio sequi dolore similique labore sapiente doloribus minus nulla quisquam, voluptatum porro eius! Est!</p>

                <Link to="/">
                
                <button className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300 mt-6">Back</button>

                </Link>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3">
                {
                    List.map((item)=>(
                        <Cards key={item.id} item={item}/>
                    ))
                }
            </div>


        </div>
    </>
  )
}

export default Course