import type { NextPage } from "next";
import Navbar from "@components/Navbar/Navbar";
import Wrapper from "@components/Wrapper/Wrapper";

const Home: NextPage = () => {
  return (
    <>
      <Navbar />
      <Wrapper className="mt-10">
        <h2 className="text-slate-800 font-sans text-4xl text-center ">
          Starter v1
        </h2>
      </Wrapper>
    </>
  );
};

export default Home;
