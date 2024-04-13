"use client";

import { Provider } from "react-redux";
import Cta1 from "./(components)/Cta1";
import Hero from "./(components)/Hero";
import Services from "./(components)/Services";
import Team from "./(components)/Team";
import { store } from "./Redux/store";
import Ctacounter from "./(components)/Ctacounter";

const page = () => {
  return (
    <div className="px-20">
      <Provider store={store}>
        <Hero />
        <Services />
        <Team />
        <Cta1 />
        <Ctacounter/>
      </Provider>
    </div>
  );
};

export default page;
