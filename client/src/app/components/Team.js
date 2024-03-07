import { teamData } from "../Data/teamData";


const Team = () => {
  return (
    <div className="px-6 py-6 lg:py-0 min-h-screen flex flex-col gap-4 items-center justify-center mt-10 lg:-mt-10 bg-gradient-to-tr from-red-400 to-red-600">
       <h2 className="text-4xl leading-10 mt-10 text-center font-bold text-white ">Our Team</h2>
      <p className="text-center text-white leading-7">Meet our highly dedicated team members</p>

      <div className="flex flex-col lg:flex-row gap-4 items-center mt-5">
        {teamData?.map((item, index) => (
          <div
            className="shadow-white shadow-md px-3 py-6 rounded-md flex flex-col gap-4 items-center hover:-translate-y-2 w-96 transition-all ease-in-out duration-300 bg-white h-[65vh]"  
            key={index}
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-80 h-[70%] object-contain object-center"
            />
            <h3 className="font-bold text-xl leading-7">{item.name}</h3>
            <p className="text-justify leading-7">{item.role}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Team