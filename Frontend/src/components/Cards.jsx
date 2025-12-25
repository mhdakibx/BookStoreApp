import React from "react";

export default function Cards({ item }) {
  return (
    <>
      <div className="mt-4 my-3">

        <div className="card bg-base-100 lg:w-80 mx-2 shadow-xl mb-6 hover:scale-105 duration-200 dark:border dark:bg-slate-900 dark:text-white 
                        h-96 flex flex-col"> 
          {/* FIXED CARD HEIGHT */}

          {/* FIXED IMAGE AREA */}
          <figure className="h-40 w-full overflow-hidden">
            <img
              src={item.image}
              className="w-full h-full object-cover"
              alt="Book"
            />
          </figure>

          <div className="card-body flex flex-col flex-1">
            
            {/* TITLE */}
            <h2 className="card-title line-clamp-2">
              {item.name}
              <div className="badge badge-secondary">{item.category}</div>
            </h2>

            {/* DESCRIPTION */}
            <p className="text-sm line-clamp-3">
              {item.title}
            </p>

            {/* FOOTER FIXED BOTTOM */}
            <div className="card-actions justify-between mt-auto">
              <div className="badge badge-outline">${item.price}</div>
              <div className="badge badge-outline cursor-pointer hover:text-white hover:bg-pink-500 duration-200 px-2 py-1">
                Buy Now
              </div>
            </div>
          </div>

        </div>

      </div>
    </>
  );
}
