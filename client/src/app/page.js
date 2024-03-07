"use client";

import { Provider } from "react-redux";
import Cta1 from "./components/Cta1";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Team from "./components/Team";
import { store } from "./Redux/store";

const page = () => {
  return (
    <div className="">
      <Provider store={store}>
        <Hero />
        <Services />
        <Team />
        <Cta1 />
      </Provider>
    </div>
  );
};

export default page;
