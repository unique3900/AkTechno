import Link from "next/link"
import Ctacounter from "./Ctacounter"

const Cta1 = () => {
  return (
    <div className="relative h-screen lg:h-[85vh]  flex flex-col lg:flex-row w-full px-6 gap-2 mt-10 lg:mt-0">
      {/* Left */}
      <div className="relative flex flex-col gap-4 justify-center items-center w-full lg:w-3/5 bg-white px-2 ">
        {/* <img
          src="/bg/vector-shape.png"
          className="hidden lg:flex w-[100vw] h-screen absolute top-8 -left-6 opacity-25"
          alt="Vector Shape"
        /> */}
        <div className="flex flex-col justify-center items-center gap-4 z-10 ">
          <span className="text-4xl lg:text-6xl font-bold text-red-700 text-center leading-10">
            Moving on the path of success
          </span>
          <p className="text-sm lg:text-lg text-center leading-7">
            AK Techno Tech is always there for your complete technological needs from hardware purchase, design, app development, website development and digital marketing.
          </p>
        </div>

        <div className="flex flex-row items-center gap-4 z-10">
          <Link
            href={"/contact"}
            className="border-2 bg-red-600 px-3 py-3 cursor-pointer text-white hover:bg-black  transition-all ease-in duration-300"
          >
            Contact Us
          </Link>
        </div>
      </div>
      {/* Right */}
      <div className="flex flex-col gap-4 justify-center items-center w-full lg:w-1/2 rounded-md">
        <img
          src="/bg/cta-graph.png"
          alt="Virtual Reality"
          className="h-full object-contain"
        />
      </div>

      <div className="absolute w-11/12 py-4 px-6  bg-gradient-to-tr from-red-400 to-red-600 bottom-1 left-[50%] translate-x-[-50%] rounded-md shadow-lg">
        <Ctacounter/>
      </div>
    </div>
  )
}

export default Cta1