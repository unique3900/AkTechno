import Link from "next/link";

const Hero = () => {
  return (
    <div className="h-screen lg:h-[85vh]  flex flex-col lg:flex-row w-full px-6 gap-2">
      {/* Left */}
      <div className="relative flex flex-col gap-4 justify-center items-center w-full lg:w-3/5 bg-white px-2 ">
        <img
          src="/bg/hero-bg.png"
          className="hidden lg:flex w-[100vw] h-screen absolute top-0 -left-6 opacity-25"
          alt="Vector Shape"
        />
        <div className="flex flex-col items-center gap-4 z-[1000]">
          <h1 className="text-2xl  text-red-700 leading-7">AK Techno Tech</h1>
          <h3 className="text-4xl lg:text-6xl font-bold text-red-700 text-center leading-10">
            Got Any Idea For Your Business?
          </h3>
          <p className="text-sm lg:text-lg text-center leading-7">
            AK Techno Tech is always there for your complete technological needs from hardware purchase, design, app development, website development and digital marketing.
          </p>
        </div>

        <div className="flex flex-row items-center gap-4">
          <Link
            href={"/hire"}
            className="bg-red-600 px-3 py-3 cursor-pointer text-white rounded-md outline-none border-none hover:bg-black transition-all ease-in duration-300"
          >
            Book Service
          </Link>
          <Link
            href={"/contact"}
            className="border-2 border-red-600 px-3 py-3 cursor-pointer text-black rounded-md hover:bg-black hover:text-white transition-all ease-in duration-300"
          >
            Contact Us
          </Link>
        </div>
      </div>
      {/* Right */}
      <div className="flex flex-col gap-4 justify-center items-center w-full lg:w-1/2 rounded-md">
        <img
          src="/bg/hero-graph.avif"
          alt="Virtual Reality"
          className="h-full object-contain"
        />
      </div>
    </div>
  );
};

export default Hero;
