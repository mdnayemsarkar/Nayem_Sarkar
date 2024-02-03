import Youtube from "../assets/image/youtube.png";
import React from "../assets/image/React.png";
// import lp from "../assets/video/updated11.mp4";
// import gp from "../assets/video/GP.mp4";
// import btn from "../assets/video/BTN.mp4";
// import Scl from "../assets/video/scl.mp4";
// import Tvl from "../assets/video/Tvl.mp4";
// import Tvll from "../assets/video/Travel.mp4";
// import Dust from "../assets/video/Dust.mp4";
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
        <div className=" flex flex-col justify-center items-center gap-3 px-8 sm:flex sm:flex-row sm:justify-evenly mt-10">
          <div className=" animate-this1 h-72 w-80 rounded-xl shadow-xl shadow-blue-50">
            <div className="h-52 w-full rounded-xl px-3 py-3">
              <img src="" alt="" className="bg-black h-full rounded-xl" />
            </div>
            <div className=" font-sans font-extrabold text-gray-700  pl-4">
              Landing Page Design
            </div>
            <div className="flex justify-between mt-4 px-4">
              <p className="text-sm text-green-400  ">Playlist</p>
              <a
                href="https://l.facebook.com/l.php?u=https%3A%2F%2Fyoutube.com%2Fplaylist%3Flist%3DPLUU_WNDVUs0diMlX4BIfxc4c4ALD945KN%26si%3D1J4GFaVn26QjF8cg%26fbclid%3DIwAR2APwv4yHDR9gknZKg15WG6JLXPAuqGFhJolu-pEJOtzJel4cJp4Mn5o38&h=AT2Ei53bucC4noPHhCRLm47yp2HV_OesLe54bp5NvzoKcPWujY0gxdiUDAcam_UTy0nD66Aej6tRYg7mGH1sA9rUfB_GLQ2WmJfFDgGQQAXS8PLv-_tqTvKOAQyThT5-4RNP2g"
                className="text-sm text-blue-500  "
              >
                CLick Here..
              </a>
            </div>
          </div>
          {/* secound Card*/}
          <div className=" animate-this1 h-72 w-80 rounded-xl shadow-xl shadow-blue-50">
            <div className="h-52 w-full rounded-xl px-3 py-3">
              <img src="" alt="" className="bg-black h-full rounded-xl" />
            </div>
            <div className=" font-sans font-extrabold text-gray-700  pl-4">
              Landing Page Design
            </div>
            <div className="flex justify-between mt-4 px-4">
              <p className="text-sm text-green-400  ">Playlist</p>
              <a
                href="https://l.facebook.com/l.php?u=https%3A%2F%2Fyoutube.com%2Fplaylist%3Flist%3DPLUU_WNDVUs0diMlX4BIfxc4c4ALD945KN%26si%3D1J4GFaVn26QjF8cg%26fbclid%3DIwAR2APwv4yHDR9gknZKg15WG6JLXPAuqGFhJolu-pEJOtzJel4cJp4Mn5o38&h=AT2Ei53bucC4noPHhCRLm47yp2HV_OesLe54bp5NvzoKcPWujY0gxdiUDAcam_UTy0nD66Aej6tRYg7mGH1sA9rUfB_GLQ2WmJfFDgGQQAXS8PLv-_tqTvKOAQyThT5-4RNP2g"
                className="text-sm text-blue-500  "
              >
                CLick Here..
              </a>
            </div>
          </div>
          {/* third  */}
          <div className=" animate-this1 h-72 w-80 rounded-xl shadow-xl shadow-blue-50">
            <div className="h-52 w-full rounded-xl px-3 py-3">
             <img src="" alt="" className="bg-black h-full rounded-xl"/>
            </div>
            <div className=" font-sans font-extrabold text-gray-700  pl-4">
              Landing Page Design
            </div>
            <div className="flex justify-between mt-4 px-4">
              <p className="text-sm text-green-400  ">Playlist</p>
              <a
                href="https://l.facebook.com/l.php?u=https%3A%2F%2Fyoutube.com%2Fplaylist%3Flist%3DPLUU_WNDVUs0diMlX4BIfxc4c4ALD945KN%26si%3D1J4GFaVn26QjF8cg%26fbclid%3DIwAR2APwv4yHDR9gknZKg15WG6JLXPAuqGFhJolu-pEJOtzJel4cJp4Mn5o38&h=AT2Ei53bucC4noPHhCRLm47yp2HV_OesLe54bp5NvzoKcPWujY0gxdiUDAcam_UTy0nD66Aej6tRYg7mGH1sA9rUfB_GLQ2WmJfFDgGQQAXS8PLv-_tqTvKOAQyThT5-4RNP2g"
                className="text-sm text-blue-500  "
              >
                CLick Here..
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
        <div className=" animate-this1 h-72 w-80 rounded-xl shadow-xl shadow-blue-50">
            <div className="h-52 w-full rounded-xl px-3 py-3">
             <img src="" alt="" className="bg-black h-full rounded-xl"/>
            </div>
            <div className=" font-sans font-extrabold text-gray-700  pl-4">
              Landing Page Design
            </div>
            <div className="flex justify-between mt-4 px-4">
              <p className="text-sm text-green-400  ">Playlist</p>
              <a
                href="https://l.facebook.com/l.php?u=https%3A%2F%2Fyoutube.com%2Fplaylist%3Flist%3DPLUU_WNDVUs0diMlX4BIfxc4c4ALD945KN%26si%3D1J4GFaVn26QjF8cg%26fbclid%3DIwAR2APwv4yHDR9gknZKg15WG6JLXPAuqGFhJolu-pEJOtzJel4cJp4Mn5o38&h=AT2Ei53bucC4noPHhCRLm47yp2HV_OesLe54bp5NvzoKcPWujY0gxdiUDAcam_UTy0nD66Aej6tRYg7mGH1sA9rUfB_GLQ2WmJfFDgGQQAXS8PLv-_tqTvKOAQyThT5-4RNP2g"
                className="text-sm text-blue-500  "
              >
                CLick Here..
              </a>
            </div>
          </div>
          {/* sub card  */}
          <div className=" animate-this1 h-72 w-80 rounded-xl shadow-xl shadow-blue-50">
            <div className="h-52 w-full rounded-xl px-3 py-3">
             <img src="" alt="" className="bg-black h-full rounded-xl"/>
            </div>
            <div className=" font-sans font-extrabold text-gray-700  pl-4">
              Landing Page Design
            </div>
            <div className="flex justify-between mt-4 px-4">
              <p className="text-sm text-green-400  ">Playlist</p>
              <a
                href="https://l.facebook.com/l.php?u=https%3A%2F%2Fyoutube.com%2Fplaylist%3Flist%3DPLUU_WNDVUs0diMlX4BIfxc4c4ALD945KN%26si%3D1J4GFaVn26QjF8cg%26fbclid%3DIwAR2APwv4yHDR9gknZKg15WG6JLXPAuqGFhJolu-pEJOtzJel4cJp4Mn5o38&h=AT2Ei53bucC4noPHhCRLm47yp2HV_OesLe54bp5NvzoKcPWujY0gxdiUDAcam_UTy0nD66Aej6tRYg7mGH1sA9rUfB_GLQ2WmJfFDgGQQAXS8PLv-_tqTvKOAQyThT5-4RNP2g"
                className="text-sm text-blue-500  "
              >
                CLick Here..
              </a>
            </div>
          </div>
          {/* sub card */}
          <div className=" animate-this1 h-72 w-80 rounded-xl shadow-xl shadow-blue-50">
            <div className="h-52 w-full rounded-xl px-3 py-3">
             <img src="" alt="" className="bg-black h-full rounded-xl"/>
            </div>
            <div className=" font-sans font-extrabold text-gray-700  pl-4">
              Landing Page Design
            </div>
            <div className="flex justify-between mt-4 px-4">
              <p className="text-sm text-green-400  ">Playlist</p>
              <a
                href="https://l.facebook.com/l.php?u=https%3A%2F%2Fyoutube.com%2Fplaylist%3Flist%3DPLUU_WNDVUs0diMlX4BIfxc4c4ALD945KN%26si%3D1J4GFaVn26QjF8cg%26fbclid%3DIwAR2APwv4yHDR9gknZKg15WG6JLXPAuqGFhJolu-pEJOtzJel4cJp4Mn5o38&h=AT2Ei53bucC4noPHhCRLm47yp2HV_OesLe54bp5NvzoKcPWujY0gxdiUDAcam_UTy0nD66Aej6tRYg7mGH1sA9rUfB_GLQ2WmJfFDgGQQAXS8PLv-_tqTvKOAQyThT5-4RNP2g"
                className="text-sm text-blue-500  "
              >
                CLick Here..
              </a>
            </div>
          </div>
          {/* sub card  */}
          <div className=" animate-this1 h-72 w-80 rounded-xl shadow-xl shadow-blue-50">
            <div className="h-52 w-full rounded-xl px-3 py-3">
             <img src="" alt="" className="bg-black h-full rounded-xl"/>
            </div>
            <div className=" font-sans font-extrabold text-gray-700  pl-4">
              Landing Page Design
            </div>
            <div className="flex justify-between mt-4 px-4">
              <p className="text-sm text-green-400  ">Playlist</p>
              <a
                href="https://l.facebook.com/l.php?u=https%3A%2F%2Fyoutube.com%2Fplaylist%3Flist%3DPLUU_WNDVUs0diMlX4BIfxc4c4ALD945KN%26si%3D1J4GFaVn26QjF8cg%26fbclid%3DIwAR2APwv4yHDR9gknZKg15WG6JLXPAuqGFhJolu-pEJOtzJel4cJp4Mn5o38&h=AT2Ei53bucC4noPHhCRLm47yp2HV_OesLe54bp5NvzoKcPWujY0gxdiUDAcam_UTy0nD66Aej6tRYg7mGH1sA9rUfB_GLQ2WmJfFDgGQQAXS8PLv-_tqTvKOAQyThT5-4RNP2g"
                className="text-sm text-blue-500  "
              >
                CLick Here..
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
