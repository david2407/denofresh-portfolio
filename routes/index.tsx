import { Footer } from "../components/Footer.tsx";
import Mint from "../islands/Mint.tsx";

export default function Home() {
  return (
    <main>
      <section class="text-gray-400 body-font">
        <div class="container px-5 pt-12 mx-auto flex flex-col">
          <div class="lg:w-4/6 mx-auto">
            <div class="flex flex-col sm:flex-row mt-10  bg-gradient-to-b from-[#1e3b8ac5] to-[#1e3b8a3f] text-[#fff] backdrop-blur-lg border-[1px] border-solid border-white border-opacity-20 rounded-2xl shadow-[rgba(0,0,0,0.70)] shadow-2xl">
              <div class="sm:w-1/3 text-center sm:pr-8 sm:py-8 py-4 rounded-l-2xl sm:bg-[#b4b4b433]">
                <div class="w-28 h-28 rounded-full inline-flex items-center justify-center  ">
                  <img
                    alt="content"
                    class="object-cover object-center rounded-full w-28 h-28"
                    src="profile.jpeg"
                  />
                </div>
                <div class="flex flex-col items-center text-center justify-center">
                  <h2 class="font-bold title-font mt-4 text-3xl text-white">
                    DAVID CORTES
                  </h2>
                  <div class="w-12 h-1 rounded mt-2 mb-4 anim"></div>
                  <p class="text-base text-gray-300">Software Developer</p>
                </div>
              </div>
              <div class="sm:w-2/3 sm:px-8 px-4 sm:py-8 py-4 sm:border-l border-solid border-white border-opacity-20  mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                <p class="leading-normal mt-3 mb-4">
                  I am a developer who has always been focused on web
                  technologies, what has helped me to gain knowledge in a wide
                  range of tools, technologies and languages. I'm coupled with
                  the opportunity to make lifting requirements of many web
                  applications, and dene the development architecture of these.
                  It has given me the experience to make a prole with a big
                  variety of skills.
                </p>
                <Mint
                  address="0x2953399124F0cBB46d2CbACD8A89cF0599974963"
                  id="28868293704924423786108933622408740998705747173761726793052095567437093666916"
                />
                <a
                  class="text-[#bae6fd] hover:text-[#0ea5e9] inline-flex items-center mr-3 p-2 border-0 focus:outline-none transition-colors duration-500"
                  href="resume.pdf"
                  download
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 mr-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 8.25H7.5a2.25 2.25 0 00-2.25 2.25v9a2.25 2.25 0 002.25 2.25h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25H15M9 12l3 3m0 0l3-3m-3 3V2.25"
                    />
                  </svg>
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="text-gray-400 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="lg:w-4/6 mx-auto">
            <div class="flex flex-wrap -m-4">
              <div class="p-4 w-full md:w-1/3">
                <div class="h-full overflow-hidden bg-gradient-to-b from-[#1e3b8ac5] to-[#1e3b8a3f] text-[#fff] backdrop-blur-lg border-[1px] border-solid border-white border-opacity-20 rounded-2xl shadow-[rgba(0,0,0,0.70)] shadow-2xl">
                  <div class="p-6">
                    <h1 class="title-font text-xl font-bold text-white mb-3">
                      Skills
                    </h1>
                    <div class="w-12 h-1 rounded mt-2 mb-4 anim"></div>
                    <ul class="leading-normal mt-3 mb-3">
                      <li class="pb-1 pt-6 hover:text-white flex">
                        Communication
                      </li>
                      <li class="py-3 hover:text-white flex">Process Design</li>
                      <li class="py-3 hover:text-white flex">
                        Problem Solving
                      </li>
                    </ul>
                    
                    <h1 class="title-font text-xl font-bold text-white mb-3">
                      Dev Skills
                    </h1>
                    <div class="w-12 h-1 rounded mt-2 mb-4 anim"></div>
                    <ul class="leading-normal mt-3 mb-3">
                      <li class="pb-1 pt-6 hover:text-white flex">NodeJs</li>
                      <li class="py-3 hover:text-white flex">ReactJs</li>
                      <li class="py-3 hover:text-white flex">HTML, CSS</li>
                      <li class="py-3 hover:text-white flex">Javascript</li>

                      <li class="py-3 hover:text-white flex">Git</li>
                      <li class="py-3 hover:text-white flex">NextJs</li>
                      <li class="py-3 hover:text-white flex">ExpressJs</li>
                      <li class="py-3 hover:text-white flex">
                        Mobile development
                      </li>
                      <li class="py-3 hover:text-white flex">AWS</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="p-4 w-full md:w-2/3 ">
                <div class="h-full overflow-hidden bg-gradient-to-b from-[#1e3b8ac5] to-[#1e3b8a3f] text-[#fff] backdrop-blur-lg border-[1px] border-solid border-white border-opacity-20 rounded-2xl shadow-[rgba(0,0,0,0.70)] shadow-2xl">
                  <div class="p-6">
                    <h1 class="title-font text-xl font-bold mb-3">
                      Experience
                    </h1>
                    <div class="w-12 h-1 rounded mt-2 mb-4 anim"></div>
                    <article class="text-gray-200 body-font overflow-hidden">
                      <div class="container px-5 py-2 mx-auto">
                        <div class="-my-8 divide-y-1 divide-[rgba(255,255,255,0.5)]">
                          <div class="py-8 flex flex-wrap md:flex-nowrap">
                            <div class="md:w-52 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                              <span class="font-semibold title-font text-white">
                                TITA MEDIA
                              </span>
                              <span class="mt-1 text-gray-200 text-sm">
                                2021 -2022
                              </span>
                            </div>
                            <div class="md:flex-grow">
                              <h2 class="text-2xl font-medium text-white title-font mb-2">
                                Fullstack Developer
                              </h2>
                              <p class="leading-normal mt-3">
                                Vtex IO implementation and javascript fullstack
                                developer with React, Nodejs, Aws services and
                                DynamoDB
                              </p>
                            </div>
                          </div>

                          <div class="py-8 flex border-t-2 border-gray-800 flex-wrap md:flex-nowrap">
                            <div class="md:w-52 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                              <span class="font-semibold title-font text-white">
                              TELEPERFORMANCE
                              </span>
                              <span class="mt-1 text-gray-200 text-sm">
                              2021 -2021
                              </span>
                            </div>
                            <div class="md:flex-grow">
                              <h2 class="text-2xl font-medium text-white title-font mb-2">
                              FrontEnd Developer
                              </h2>
                              <p class="leading-normal mt-3">
                                Vtex IO implementation and javascript fullstack
                                developer with React, Nodejs, Aws services and
                                DynamoDB
                              </p>
                            </div>
                          </div>
                          <div class="py-8 flex border-t-2 border-gray-800 flex-wrap md:flex-nowrap">
                            <div class="md:w-52 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                              <span class="font-semibold title-font text-white">
                              BANCOLOMBIA
                              </span>
                              <span class="mt-1 text-gray-200 text-sm">
                              2018 -2021
                              </span>
                            </div>
                            <div class="md:flex-grow">
                              <h2 class="text-2xl font-medium text-white title-font mb-2">
                                Fullstack Developer
                              </h2>
                              <p class="leading-normal mt-3">
                                Vtex IO implementation and javascript fullstack
                                developer with React, Nodejs, Aws services and
                                DynamoDB
                              </p>
                            </div>
                          </div>
                          <div class="py-8 flex border-t-2 border-gray-800 flex-wrap md:flex-nowrap">
                            <div class="md:w-52 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                              <span class="font-semibold title-font text-white">
                              SIBO AVANCE
                              </span>
                              <span class="mt-1 text-gray-200 text-sm">
                              2015 -2018
                              </span>
                            </div>
                            <div class="md:flex-grow">
                              <h2 class="text-2xl font-medium text-white title-font mb-2">
                                Software Developer
                              </h2>
                              <p class="leading-normal mt-3">
                                Vtex IO implementation and javascript fullstack
                                developer with React, Nodejs, Aws services and
                                DynamoDB
                              </p>
                            </div>
                          </div>
                          <div class="py-8 flex border-t-2 border-gray-800 flex-wrap md:flex-nowrap">
                            <div class="md:w-52 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                              <span class="font-semibold title-font text-white">
                              APPSFABRIC
                              </span>
                              <span class="mt-1 text-gray-200 text-sm">
                              2013 -2015
                              </span>
                            </div>
                            <div class="md:flex-grow">
                              <h2 class="text-2xl font-medium text-white title-font mb-2">
                                Software Developer
                              </h2>
                              <p class="leading-normal mt-3">
                                Vtex IO implementation and javascript fullstack
                                developer with React, Nodejs, Aws services and
                                DynamoDB
                              </p>
                            </div>
                          </div>
                          <div class="py-8 flex border-t-2 border-gray-800 flex-wrap md:flex-nowrap">
                            <div class="md:w-52 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                              <span class="font-semibold title-font text-white">
                              EVENTOS Y SISTEMAS
                              </span>
                              <span class="mt-1 text-gray-200 text-sm">
                              2012 -2013
                              </span>
                            </div>
                            <div class="md:flex-grow">
                              <h2 class="text-2xl font-medium text-white title-font mb-2">
                                Fullstack Developer
                              </h2>
                              <p class="leading-normal mt-3">
                                Vtex IO implementation and javascript fullstack
                                developer with React, Nodejs, Aws services and
                                DynamoDB
                              </p>
                            </div>
                          </div>


                
                        </div>
                      </div>
                    </article>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
