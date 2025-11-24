import React from "react";


export const Team = () => {
  const teamMembers = [
    {
      img: "../../public/image.png",
      name: "Mohammad Akib",
      role: "CSt-61",
    },
    {
      img: "../../public/image.png",
      name: "CSt-61 Member",
      role: "Design Team Lead",
    },
    {
      img: "../../public/image.png",
      name: "CSt-61 Member",
      role: "CSt-61",
    },
    {
      img: "../../public/image.png",
      name: "CSt-61 Member",
      role: "CSt-61",
    },
    {
      img: "../../public/image.png",
      name: "CSt-61 Member",
      role: "CSt-61",
    },
    {
      img: "../../public/image.png",
      name: "CSt-61 Member",
      role: "Backend Developer",
    },
    {
      img: "../../public/image.png",
      name: "CSt-61 Member",
      role: "Designer UI/UX",
    },
    {
      img: "../../public/image.png",
      name: "CSt-61 Member",
      role: "Frontend Developer",
    },
  ];

  return (
    <div className="px-4 py-16 mx-auto w-full max-w-full md:w-full lg:px-8 lg:py-20 my-10">
      <div className="mx-auto mb-10 lg:max-w-xl sm:text-center">
        <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400 dark:text-white">
          <span className="text-bold text-4xl  dark:text-white">READORA</span> 
        </p>
        <p className="text-base text-gray-700 md:text-lg  dark:text-white">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium.
        </p>
      </div>

      <div className="grid gap-10 sm:grid-cols-4 lg:grid-cols-4 w-full">
        {teamMembers.map((member, i) => (
          <div className="flex flex-col items-center" key={i}>
            <img
              className="object-cover w-20 h-20 mb-2 rounded-full shadow"
              src={member.img}
              alt={member.name}
            />
            <div className="flex flex-col items-center">
              <p className="text-lg font-bold">{member.name}</p>
              <p className="text-sm text-gray-800">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Team;