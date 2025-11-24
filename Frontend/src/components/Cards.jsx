import React from "react";

export default function Cards({item}) {
  return (
    <>
      <div className="mt-4 my-3">


        <div className="card  bg-base-100 lg:w-80  mx-2 shadow-xl mb-6 hover:scale-105 duration-200 dark:border dark:bg-slate-900 dark:text-white">
          <figure>
            <img
              src={item.image}
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
                {item.name}
              <div className="badge badge-secondary">{item.category}</div>
            </h2>
            <p>
              {item.title}
            </p>
            <div className="card-actions justify-between mt-4">
              <div className="badge badge-outline">${item.price}</div>
              <div className="badge badge-outline cursor-pointer  hover:text-white hover:bg-pink-500 duration-200 px-2 py-1">Buy Now</div>
            </div>
          </div>
        </div>


      </div>
    </>
  );
}
