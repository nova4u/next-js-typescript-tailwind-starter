import React from "react";
import Wrapper from "@components/Wrapper/Wrapper";

const Navbar = () => {
  return (
    <header className="bg-slate-300/50 py-4 h-20 shadow-lg shadow-blue-50 backdrop-blur-sm ">
      <Wrapper className={`flex items-center h-full`}>
        <h2 className="font-medium tracking-tighter text-slate-800 text-3xl">
          dm
        </h2>
      </Wrapper>
    </header>
  );
};

export default Navbar;
