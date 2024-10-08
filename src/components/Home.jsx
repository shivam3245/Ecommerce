import React from "react";
import img from "../assets/img/hero.png";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div className=" min-h-screen flex flex-col justify-center lg:flex-row items-center lg:justify-between lg:px-32 px-5 pt-24 lg:pt-10 bg-gradient-to-r from-gray-400 to-red-300 bg-fixed bg-center bg-cover" >
      {/* content section  */}
      <div className=" space-y-4">
        <h1 className=" text-5xl font-semibold leading-tight text-white w-full lg:w-3/4">
          Discovering and Defining Your Own Fashion!
        </h1>
        <p className=" w-full lg:w-3/4 text-white font-medium">
          Each item is a carefully chosen masterpiece, promising not just
          fashion but a reflection of your unique style.
        </p>

        <button className=" bg-ExtraDarkColor text-white px-4 py-2 font-medium active:bg-amber-800">
          <Link to="shop" spy={true} smooth={true} duration={500}>
            Shop now
          </Link>
        </button>
      </div>

      {/* img section */}
      <div className=" bg-black p-5 rounded-tr-[290px] rounded-tl-3xl rounded-br-3xl mt-10">
        <img className=" -ml-5 -mb-5" width={780} src={img} alt="img" />
      </div>
    </div>
  );
};

export default Home;
