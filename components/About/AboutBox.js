import React from "react";
import { useDarkMode } from "../ContextFiles/DarkModeContext";
import { useLanguage } from "../ContextFiles/LanguageContext";
import Timeline from "../Timeline";
import { MdOutlineWork } from "react-icons/md";
import Stepper from "../Stepper";
const AboutBox = () => {
  const { darkMode } = useDarkMode();
  const { language } = useLanguage();

  return (
    <div className="max-w-[1440px] mx-auto">
      <section className="relative py-8 md:py-32 overflow-hidden px-4 sm:px-10">
        <h1 className="font-heading text-5xl xs:text-6xl  mb-4 bg-gradient-to-br from- to-magenta text-transparent bg-clip-text font-serif italic font-bold  text-center pb-5 md:pb-0">
          About us
        </h1>

        <div className="grid lg:grid-cols-2 gap-x-5">
          <div className="">
            <div>
              <img src="./images/abouttaxi.jpg" alt="" className="rounded-xl lg:h-[400px] xl:h-full" />
            </div>
              <div class="grid gap-14 md:grid-cols-2 md:gap-5 mt-20 md:mt-24 lg:mt-16">
                <div class="rounded-xl bg-white px-2 text-center shadow-xl pb-6">
                  <div class="mx-auto flex h-16 w-16 -translate-y-10 transform items-center justify-center rounded-full  bg-gradient-to-bl from-white to-gray-300 shadow-lg shadow-purple/50"><MdOutlineWork className="text-3xl"/> </div>
                  <h1 class="text-darken  text-xl font-medium pb-3">
                    Work Experience
                  </h1>
                  <p class="px-4 font-bold text-3xl text-purple">
                    5 years+
                  </p>
                </div>
                <div class="rounded-xl bg-white px-2 text-center shadow-xl pb-6">
                  <div class="mx-auto flex h-16 w-16 -translate-y-10 transform items-center justify-center rounded-full  bg-gradient-to-bl from-white to-gray-300 shadow-lg shadow-purple/50"><MdOutlineWork className="text-3xl"/> </div>
                  <h1 class="text-darken  text-xl font-medium pb-3">
                    Customer Satisfication
                  </h1>
                  <p class="px-4 font-bold text-3xl text-purple">
                    99.9%
                  </p>
                </div>
              </div>
          </div>

          <div>
            <div>
              <div className="mt-10 lg:mt-0">
                <h1 className="text-purple font-bold pb-5 hidden lg:flex">
                  Why Choose Us
                </h1>
                <p className=" text-3xl md:text-4xl  font-bold text-slate-800">
                  We will Keep Free Items{" "}
                  <span className="lg:flex lg:pt-1 xl:pt-2">
                    <span className="text-purple">Damage Free</span>{" "}
                  </span>
                </p>
                <p className="pt-5 sm:pt-14 md:pt-5 xl:pt-10 xl:pr-10 text-slate-700">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Doloribus nesciunt minima sunt eligendi in at. Fugit a
                  explicabo natus praesentium unde suscipit, at laboriosam
                  consequuntur, autem iste, eaque nisi amet?
                </p>
              </div>
            </div>
            <Timeline />
            {/* <Stepper/> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutBox;
