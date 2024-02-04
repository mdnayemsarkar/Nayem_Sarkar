import Youtube from "../assets/image/Yt.png";
import React from "../assets/image/React.png";
import audio from "../assets/image/audio.png";
import Tblog from "../assets/image/Travelblog.png";
import Travel from "../assets/image/Travel.png";
import Kmba from "../assets/image/kmba.png"
import Dust from "../assets/image/Dustbin.png"
import Game from "../assets/image/Game.png"
import Landing from "../assets/image/landingpg.png";
import { useEffect } from "react";
import gsap from "gsap";

const Teach = () => {
  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power1.out" } });
    const elements = [
      ".animate-this1",
      ".animate-this2",
      ".animate-this3",
      ".animate-this4",
      ".animate-this5",
      ".animate-this6",
    ];
    elements.forEach((element, index) => {
      tl.from(element, { opacity: 0, x: -50, duration: 1 }, index * 0.5).to(
        element,
        { opacity: 1, x: 0, duration: 1 }, // Change y to x here
        "-=0.5"
      );
    });

    // Trigger the animations when the component mounts
    tl.play();
  }, []);

  return (
    <>
      <div className="h-full font-sans mt-60 sm:mt-24  " id="Project">
        <div className="text-center text-lg sm:text-3xl   font-extrabold flex justify-center">
          <img src={Youtube} alt="" className=" h-6 pr-1 sm:h-10 sm:pr-4" />
          Youtube - Teaching - Passion
        </div>
        <div className="flex justify-center">
          <p className="text-sm  w-3/5 sm:w-full sm:text-lg mt-2  font-sans font-light text-center">
            Never Thought I'll will enjoy teaching this much and want to be a
            teacher
          </p>
        </div>

        {/* courses section  */}
        <div className="flex pl-10 sm:pl-32 mt-16 w-64">
          <div className="h-7 w-1 bg-green-400"></div>
          <div className="pl-0 sm:pl-3 text-base sm:text-xl text-green-500  font-sans font-bold">
            Courses :
          </div>
        </div>
        {/* card  */}
        <div className="relative flex flex-col justify-center items-center   px-8 sm:flex sm:flex-row sm:justify-evenly mt-10">
          <div className="relative animate-this1 h-72 w-80 rounded-xl shadow-xl shadow-blue-50">
            <a href="https://single-pg-lnding.vercel.app/">
              {" "}
              <img
                src={audio}
                alt=""
                className="h-14 absolute top-1/3  left-32"
              />
            </a>

            <div className="h-52 w-full rounded-xl px-3 py-3">
              <img
                src={Landing}
                alt=""
                className="bg-black h-full rounded-xl "
              />
            </div>
            <div className=" font-sans font-extrabold text-gray-700  pl-4">
              Landing Page Design
            </div>
            <div className="flex justify-between mt-4 px-4">
              <a
                href="https://l.facebook.com/l.php?u=https%3A%2F%2Fyoutube.com%2Fplaylist%3Flist%3DPLUU_WNDVUs0diMlX4BIfxc4c4ALD945KN%26si%3D1J4GFaVn26QjF8cg%26fbclid%3DIwAR2APwv4yHDR9gknZKg15WG6JLXPAuqGFhJolu-pEJOtzJel4cJp4Mn5o38&h=AT2Ei53bucC4noPHhCRLm47yp2HV_OesLe54bp5NvzoKcPWujY0gxdiUDAcam_UTy0nD66Aej6tRYg7mGH1sA9rUfB_GLQ2WmJfFDgGQQAXS8PLv-_tqTvKOAQyThT5-4RNP2g"
                className="text-sm text-green-400  cursor-pointer"
              >
                Playlist
              </a>
              <a
                href="https://single-pg-lnding.vercel.app/"
                className="text-sm text-blue-500  "
              >
                Live link..
              </a>
            </div>
          </div>
          {/* secound Card*/}
          <div className=" animate-this1 h-72 w-80 rounded-xl shadow-xl shadow-blue-50">
            <div className="h-52 w-full rounded-xl px-3 py-3">
              {" "}
              <a href=" ">
                {" "}
                <img
                  src={audio}
                  alt=""
                  className="h-14 absolute top-1/3  left-32"
                />
              </a>
              <img
                src={Game}
                alt=""
                className="bg-black h-full w-full rounded-xl"
              />
            </div>
            <div className=" font-sans font-extrabold text-gray-700  pl-4">
              Landing Page Design
            </div>
            <div className="flex justify-between mt-4 px-4">
              <a className="text-sm text-green-400 cursor-pointer ">Playlist</a>
              <a
                href=" https://landingpage-design.vercel.app/"
                className="text-sm text-blue-500  "download={false}
              >
                Live link..
              </a>
            </div>
          </div>
          {/* third  */}
          <div className=" animate-this1 h-72 w-80 rounded-xl shadow-xl shadow-blue-50">
            <div className="h-52 w-full rounded-xl px-3 py-3">
              {" "}
              <a href="https://digital-website-one.vercel.app/">
                {" "}
                <img
                  src={audio}
                  alt=""
                  className="h-14 absolute top-1/3  left-32"
                />
              </a>
              <img
                src={Tblog}
                alt=""
                className="bg-black h-full w-full rounded-xl"
              />
            </div>
            <div className=" font-sans font-extrabold text-gray-700  pl-4">
              Landing Page Design
            </div>
            <div className="flex justify-between mt-4 px-4 ">
              <a
                href="https://l.facebook.com/l.php?u=https%3A%2F%2Fyoutube.com%2Fplaylist%3Flist%3DPLUU_WNDVUs0diMlX4BIfxc4c4ALD945KN%26si%3D1J4GFaVn26QjF8cg%26fbclid%3DIwAR2APwv4yHDR9gknZKg15WG6JLXPAuqGFhJolu-pEJOtzJel4cJp4Mn5o38&h=AT2Ei53bucC4noPHhCRLm47yp2HV_OesLe54bp5NvzoKcPWujY0gxdiUDAcam_UTy0nD66Aej6tRYg7mGH1sA9rUfB_GLQ2WmJfFDgGQQAXS8PLv-_tqTvKOAQyThT5-4RNP2g"
                className="text-sm text-green-400 cursor-pointer "
              >
                Playlist
              </a>
              <a
                href="https://digital-website-one.vercel.app/"
                className="text-sm text-blue-500  "
              >
                Live link..
              </a>
            </div>
          </div>
        </div>
        {/* React Project here */}
        <div className="text-center text-lg sm:text-3xl font-sans  font-extrabold flex justify-center mt-28">
          <img src={React} alt="" className="h-6 pr-1 sm:h-10 sm:pr-4" />A Few
          React Project Here..
        </div>
        <div className="flex justify-center">
          {" "}
          <p className="text-sm w-3/5 sm:w-full pl-3 sm:text-lg mt-2 font-light text-center">
            Never Thought I'll will enjoy teaching this much and want to be a
            teacher
          </p>
        </div>
        <div className="flex pl-10 sm:pl-32 mt-16  w-96">
          <div className="h-7 w-1 bg-green-500  "></div>
          <div className="pl-3 text-xl text-green-500   font-bold">
            Practice React Project:
          </div>
        </div>
        {/* card  */}
        <div className="flex flex-col justify-center items-center gap-3 px-8 sm:px-28 sm:grid sm:grid-cols-3 sm:justify-evenly mt-10 ">
          {/* first card  */}
          <div className=" animate-this1 h-72 w-80 rounded-xl shadow-xl shadow-blue-50">
            <div className="h-52 w-full rounded-xl px-3 py-3">
              {" "}
              <a href="https://reactweb-iota.vercel.app/#">
                {" "}
                <img
                  src={audio}
                  alt=""
                  className="h-14 absolute top-1/3  left-32"
                />
              </a>
              <img
                src={Travel}
                alt=""
                className="bg-black h-full w-full rounded-xl"
              />
            </div>
            <div className=" font-sans font-extrabold text-gray-700  pl-4">
              Travel Page Design
            </div>
            <div className="flex justify-between mt-4 px-4">
              <a className="text-sm text-green-400 cursor-pointer ">Playlist</a>
              <a
                href="https://reactweb-iota.vercel.app/#"
                className="text-sm text-blue-500  "
              >
                Live link..
              </a>
            </div>
          </div>
          {/* third  */}
          <div className=" animate-this1 h-72 w-80 rounded-xl shadow-xl shadow-blue-50">
            <div className="h-52 w-full rounded-xl px-3 py-3">
              {" "}
              <a href="https://digital-website-one.vercel.app/">
                {" "}
                <img
                  src={audio}
                  alt=""
                  className="h-14 absolute top-1/3  left-32"
                />
              </a>
              <img
                src={Tblog}
                alt=""
                className="bg-black h-full w-full rounded-xl"
              />
            </div>
            <div className=" font-sans font-extrabold text-gray-700  pl-4">
              Landing Page Design
            </div>
            <div className="flex justify-between mt-4 px-4 ">
              <a
                href="https://l.facebook.com/l.php?u=https%3A%2F%2Fyoutube.com%2Fplaylist%3Flist%3DPLUU_WNDVUs0diMlX4BIfxc4c4ALD945KN%26si%3D1J4GFaVn26QjF8cg%26fbclid%3DIwAR2APwv4yHDR9gknZKg15WG6JLXPAuqGFhJolu-pEJOtzJel4cJp4Mn5o38&h=AT2Ei53bucC4noPHhCRLm47yp2HV_OesLe54bp5NvzoKcPWujY0gxdiUDAcam_UTy0nD66Aej6tRYg7mGH1sA9rUfB_GLQ2WmJfFDgGQQAXS8PLv-_tqTvKOAQyThT5-4RNP2g"
                className="text-sm text-green-400 cursor-pointer "
              >
                Playlist
              </a>
              <a
                href="https://digital-website-one.vercel.app/"
                className="text-sm text-blue-500  "
              >
                Live link..
              </a>
            </div>
          </div>
          {/*3rd card */}
          <div className=" animate-this1 h-72 w-80 rounded-xl shadow-xl shadow-blue-50">
            <div className="h-52 w-full rounded-xl px-3 py-3">
              {" "}
              <a href="https://mbksk-scl.vercel.app/">
                {" "}
                <img
                  src={audio}
                  alt=""
                  className="h-14 absolute top-1/3  left-32"
                />
              </a>
              <img
                src={Kmba}
                alt=""
                className="bg-black h-full w-full rounded-xl"
              />
            </div>
            <div className=" font-sans font-extrabold text-gray-700  pl-4">
              School Page Design
            </div>
            <div className="flex justify-between mt-4 px-4 ">
              <a
                href="https://l.facebook.com/l.php?u=https%3A%2F%2Fyoutube.com%2Fplaylist%3Flist%3DPLUU_WNDVUs0diMlX4BIfxc4c4ALD945KN%26si%3D1J4GFaVn26QjF8cg%26fbclid%3DIwAR2APwv4yHDR9gknZKg15WG6JLXPAuqGFhJolu-pEJOtzJel4cJp4Mn5o38&h=AT2Ei53bucC4noPHhCRLm47yp2HV_OesLe54bp5NvzoKcPWujY0gxdiUDAcam_UTy0nD66Aej6tRYg7mGH1sA9rUfB_GLQ2WmJfFDgGQQAXS8PLv-_tqTvKOAQyThT5-4RNP2g"
                className="text-sm text-green-400 cursor-pointer "
              >
                Playlist
              </a>
              <a
                href="https://mbksk-scl.vercel.app//"
                className="text-sm text-blue-500  "
              >
                Live link..
              </a>
            </div>
          </div>
          {/* 4th card  */}
          <div className=" animate-this1 h-72 w-80 rounded-xl shadow-xl shadow-blue-50">
            <div className="h-52 w-full rounded-xl px-3 py-3">
              {" "}
              <a href="https://soft-horse-076568.netlify.app/">
                {" "}
                <img
                  src={audio}
                  alt=""
                  className="h-14 absolute top-1/3  left-32"
                />
              </a>
              <img
                src={Dust}
                alt=""
                className="bg-black h-full w-full rounded-xl"
              />
            </div>
            <div className=" font-sans font-extrabold text-gray-700  pl-4">
              Landing Page Design
            </div>
            <div className="flex justify-between mt-4 px-4 ">
              <a
                href="https://l.facebook.com/l.php?u=https%3A%2F%2Fyoutube.com%2Fplaylist%3Flist%3DPLUU_WNDVUs0diMlX4BIfxc4c4ALD945KN%26si%3D1J4GFaVn26QjF8cg%26fbclid%3DIwAR2APwv4yHDR9gknZKg15WG6JLXPAuqGFhJolu-pEJOtzJel4cJp4Mn5o38&h=AT2Ei53bucC4noPHhCRLm47yp2HV_OesLe54bp5NvzoKcPWujY0gxdiUDAcam_UTy0nD66Aej6tRYg7mGH1sA9rUfB_GLQ2WmJfFDgGQQAXS8PLv-_tqTvKOAQyThT5-4RNP2g"
                className="text-sm text-green-400 cursor-pointer "
              >
                Playlist
              </a>
              <a
                href="https://soft-horse-076568.netlify.app/"
                className="text-sm text-blue-500  "
              >
                Live link..
              </a>
            </div>
          </div>
          {/* sub card ends  */}
        </div>

        {/* card ends here  */}
        <div className="text-center h-56">
          <a href="https://www.youtube.com/channel/UCEnteSXoLRM0h_mfcgJuhhw">
            <button className="bg-blue-600 text-white font-sans text-base text-center h-12 w-40 mt-28 rounded-lg ">
              Watch more 👉
            </button>
          </a>
        </div>
      </div>
    </>
  );
};
export default Teach;
