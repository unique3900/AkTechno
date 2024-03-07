"use client";

import CountUp from "react-countup";
import { FaUserFriends } from "react-icons/fa";
import { FaOpencart ,FaRegFaceSmile} from "react-icons/fa6";

const Ctacounter = () => {
  return (
    <div className="flex justify-around gap-4 items-center">
      <div className="flex flex-col gap-2 items-center">
        <span className="text-2xl lg:text-3xl font-bold text-white flex items-center gap-2"><span className="hidden lg:flex"><FaUserFriends size={34}/></span>Clients</span>
        <CountUp
          start={300}
          end={400}
          duration={2.75}
          separator=" "
          className="text-white text-3xl font-bold"
       />
      </div>

      <div className="flex flex-col gap-2 items-center">
        <span className="text-2xl lg:text-3xl font-bold text-white flex items-center gap-2"><span className="hidden lg:flex"><FaOpencart size={34}/></span>Projects</span>
        <CountUp
          start={150}
          end={287}
          duration={2.75}
          separator=" "
          className="text-white text-3xl font-bold"
        />
      </div>

      <div className="flex flex-col gap-2 items-center">
        <span className="text-2xl lg:text-3xl font-bold text-white flex items-center gap-2"><span className="hidden lg:flex"><FaRegFaceSmile size={34}/></span>Satistaction </span>
        <CountUp
          start={50}
          end={100}
          suffix="%"
          duration={2.75}
          separator=" "
          className="text-white text-3xl font-bold"
        />
      </div>
    </div>
  );
};

export default Ctacounter;
