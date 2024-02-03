import Uni from "../assets/image/Uni.jpeg";
import Digiport from "../assets/image/Dport.jpeg";
import Netflix from "../assets/image/Netflix.jpeg";
import Notion from "../assets/image/notion.png";
const Html = () => {
  return (
    <>
      <div className="h-full bg-gray-100 px-2 flex justify-center">
        <div className=" w-4/5"><br /> <br />
          <div>
            <p className="text-center text-base sm:text-2xl font-sans font-extrabold">
               💻A Few Html,Css,Sass,Tailwindcss Project
            </p>
            <p className="text-center  text-sm sm:text-lg  font-light">
              Happy to share my Though with you 😊
            </p>
          </div>
          {/* top title ends  */}
          <div className="flex justify-evenly  h-72 mt-10 ">
            <div className="mt-6">
              <div className="max-w-sm p-6 rounded-lg   dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                  <h5 className="  text-base sm:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Noteworthy Design
                  </h5>
                </a>
                <p className="mb-3 text-xs   sm:text-base  dark:text-gray-400">
                  Explore my HTML and Sass-powered landing page, a sleek
                  showcase of modern design.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center px-3 py-2 text-xs sm:text-sm  font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Read more
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
            </div>
            {/* left box ends here  */}
            <div className="w-48 h-32 overflow-y-scroll sm:w-96 sm:h-60 mt-16 sm:mt-6 rounded-xl shadow-xl border shadow-blue-50 sm:overflow-y-scroll md:overflow-y-scroll">
              <img src={Uni} alt="" className="px-3 py-3  rounded-xl"/>
            </div>
          </div>
          {/* first row ends here  */}
          <div className="">
            {/* left box ends here  */}

            {/* 2nd status  */}
            <div className="flex justify-evenly   h-72 sm:mt-32 ">
              <div className="w-56 h-36   overflow-y-scroll sm:w-96 sm:h-60   rounded-xl shadow-xl border shadow-blue-50 sm:overflow-y-scroll md:overflow-y-scroll">
                <img src={Digiport} alt=""  className="px-3 py-3  rounded-xl"/>
              </div>
              <div className=" ">
                <div className="max-w-sm  px-6  dark:bg-gray-800 dark:border-gray-700">
                  <a href="#">
                    <h5 className="  text-base sm:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      Portfolio With React.js
                    </h5>
                  </a>
                  <p className="mb-3 text-xs   sm:text-base text-gray-700 dark:text-gray-400">
                    Here is the portfolio design with react js.impliment here
                    some dynamamic word
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center px-3 py-2 text-xs sm:text-sm  font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Read more
                    <svg
                      className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            {/* secound row card ends here  */}
            <div className="flex justify-evenly  h-72   sm:mt-32 ">
              <div className=" ">
                <div className="max-w-sm p-6 rounded-lg  dark:bg-gray-800 dark:border-gray-700">
                  <a href="#">
                    <h5 className="  text-base sm:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      Netflix Project with React.js
                    </h5>
                  </a>
                  <p className="mb-3 text-xs   sm:text-base text-gray-700 dark:text-gray-400">
                    Here is clone of netflix website,tried to Work here api and
                    so on...
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center px-3 py-2 text-xs sm:text-sm  font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Read more
                    <svg
                      className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </a>
                </div>
              </div>
              {/* left box ends here  */}
              <div className="w-56 h-36   overflow-y-scroll sm:w-96 sm:h-60   rounded-xl shadow-xl border shadow-blue-50 sm:overflow-y-scroll md:overflow-y-scroll">
                <img src={Netflix} alt=""  className="px-3 py-3  rounded-xl"/>
              </div>
            </div>
            {/* third row ends here  */}
            <div className="flex justify-evenly  h-72  sm:mt-32 ">
              <div className="w-52 h-40 overflow-y-scroll sm:w-96 sm:h-60 mt-12 sm:mt-2 rounded-xl shadow-xl border shadow-blue-50 sm:overflow-y-scroll md:overflow-y-scroll">
                <img src={Notion} alt="" className=" "/>
              </div>
              <div className=" ">
                <div className="max-w-sm px-6 rounded-lg     dark:border-gray-700">
                  <a href="#">
                    <h5 className="mb-2 text-base sm:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      Clone Notion Log in Page
                    </h5>
                  </a>
                  <p className="mb-3 text-xs sm:text-base  dark:text-gray-400">
                    I just tried my level best to clone Notion sign up page with
                    Html and Css
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center px-3 py-2 text-xs sm:text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Read more
                    <svg
                      className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </a>
                </div>
              </div>
              {/* left box ends here  */}
            </div>
            {/* fourth ends here  */}
            <br /> 
          </div>
        </div> 
      </div>
    </>
  );
};
export default Html;
