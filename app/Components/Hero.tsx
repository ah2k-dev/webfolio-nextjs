import React from "react";
import Image from "next/image";
import Position from "./Position";

const Hero = ({
  scrollContainer,
}: Readonly<{
  scrollContainer: React.RefObject<HTMLDivElement>;
}>) => {
  return (
    <section className="parallax">
      <div className="bg-animation">
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
        <div id="stars4"></div>
      </div>
      {/* <div className="parallax__content absolute top-[10%] sm:top-[16%] lg:top-[24%] w-full mx-auto lg:pl-[38vh] lg:pr-[30vh] xl:pl-96 xl:pr-72 2xl:px-40 3xl:px-60 flex flex-col lg:flex-row items-start z-10">
        <div className="flex-1 lg:mb-0">
          <h1 className="font-medium text-white text-[40px] xs:text-[50px] sm:text-[68px] md:text-[80px] lg:text-[100px] 2xl:text-[180px] leading-[110px] 2xl:leading-[160px]">
            Ahmed Hassan
          </h1>
          <Position />
        </div>
        <div className="flex-1 flex justify-start lg:justify-end mt-4 sm:mt-14 ml-8 xs:ml-[-4vh] sm:ml-[-17vh] md:ml-[-26vh] lg:mt-10 2xl:mt-0">
          <div className="font-bold text-[20px] sm:text-[30px] md:text-[36px] 2xl:text-[46px] sm:leading-[40px] md:leading-[50px] 2xl:leading-[60px] streaky-glow max-w-sm 2xl:max-w-lg text-white text-left">
            I love crafting <br /> captivating experiences for the digital world
            to savor.
          </div>
        </div>
      </div> */}

      {/* <Image
        src="/assets/parallax/1Stars.svg"
        alt=""
        className="parallax__stars"
        width={200}
        height={200}
      /> */}
      <Image
        src="/assets/parallax/2Planets.svg"
        alt=""
        className="parallax__planets"
        width={400}
        height={400}
      />
      <Image
        src="/assets/parallax/3Mountain.svg"
        alt=""
        className="parallax__mountain1"
        height={200}
        width={200}
      />
      <Image
        src="/assets/parallax/4Mountain.svg"
        alt=""
        className="parallax__mountain2"
        height={200}
        width={200}
      />
      <Image
        src="/assets/parallax/5Crater.svg"
        alt=""
        className="parallax__crater"
        height={200}
        width={200}
      />
      {/* <Image
        src="/assets/parallax/6Sun.svg"
        alt=""
        className="parallax__sun"
        height={200}
        width={200}
      /> */}

      {/* <SpacemanCanvas scrollContainer={scrollContainer} /> */}
    </section>
  );
};

export default Hero;
