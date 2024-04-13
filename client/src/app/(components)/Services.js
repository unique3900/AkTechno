import { serviceData } from "../(Data)/serviceData";

const Services = () => {
  return (
    <div className="px-6 min-h-screen flex flex-col gap-4 items-center justify-center mt-24 lg:mt-10">
      <h2 className="text-4xl leading-10 mt-10 text-center font-bold text-red-700 ">Our Technological Services</h2>
      <p className="text-center leading-7">We offer wide range of services but here is out core technological services on offer</p>
      <div className="flex flex-col lg:flex-row gap-4 items-center mt-5">
        {serviceData?.map((item, index) => (
          <div
            className="shadow-lg px-3 py-6 rounded-md flex flex-col gap-4 items-center hover:-translate-y-2 w-96 transition-all ease-in-out duration-300" 
            key={item.id}
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-80 object-cover object-center"
            />
            <h3 className="font-bold text-xl leading-7">{item.title}</h3>
            <p className="text-justify leading-7">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
