"use client";
import useScrollAndMousePosition from "@/hooks/useScrollAndMousePos";
import { HouseLine } from "@phosphor-icons/react";
import useMousePositionStore from "@/store/useMousePositionStore";
import Image from "next/image";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Home() {
  useScrollAndMousePosition();
  const { scrollPos } = useMousePositionStore();

  return (
    <div className=" flex flex-col justify-center relative h-fit bg-blue-950">
      <HeaderButton />
      <div className="text-5xl lg:mx-40 md:text-7xl md:mx-20 align-self-center  mb-20 text-center mt-20 font-bold font-sans text-white">
        Il tuo vantaggio competitivo: assumermi significa garantire il tuo
        successo digitale!
      </div>

      <div
        className=" mb-40 flex-1 relative w-full max-w-[300px] sm:max-w-[400px] lg:max-w-[500px] aspect-square mx-auto"
        style={{
          transform: `translateY(-${scrollPos / 3}px)`,
          opacity: 1 - scrollPos / 800,
          transition: "transform 0.1s ease-out", // Smooth transition
        }}
      >
        <Image
          src="/home.svg"
          alt="Picture of the author"
          fill
          className="object-contain"
        />
      </div>

      <a
        href="mailto:simon.muscas@gmail.com?subject=Inquiry&body=Hello, I would like to discuss..."
        className=" flex-1 md:text-xl  md:mx-auto mx-6 flex justify-center items-center font-sans hover:shadow-sm shadow-md shadow-gray-500 hover:bg-fuchsia-800 hover:text-white transition-all cursor-pointer bg-gray-100 text-gray-800 border-solid border-[1px] border-gray-200 rounded-3xl  px-14   md:px-32 shadow-color  py-3 my-2 font-semibold"
      >
        {" "}
        <div className="">Join the demo</div>
      </a>
      <div
        style={{
          opacity: 0 + scrollPos / 1500,
        }}
        className=" relative flex-1 w-full max-w-[300px] sm:max-w-[500px] lg:max-w-[700px] aspect-square mx-auto"
      >
        <Image
          src="/charts.png"
          className="rounded-2xl mx-auto my-40"
          alt="Picture of the author"
          fill
        />
      </div>
      <div className="text-4xl mb-40 mt-64 mx-auto font-sans text-white font-bold">
        {" "}
        FAQ{" "}
      </div>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger className="">
            Why should you hire me?
          </AccordionTrigger>
          <AccordionContent>
            I’m a skilled full-stack web developer and UX engineer with a focus
            on the MERN stack. I combine technical expertise with a strong
            understanding of user experience, ensuring that the applications I
            build are not only functional but also intuitive and user-friendly.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger className="">
            What sets me apart from other developers?
          </AccordionTrigger>
          <AccordionContent>
            I bring a unique perspective thanks to my background in
            Human-Computer Interaction, focusing on UX/UI. I excel at
            collaborating with designers to create cohesive, visually appealing,
            and practical solutions. My ability to translate ideas into seamless
            digital experiences makes me a strong asset to any team.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger className="">
            How do I approach challenges in development?
          </AccordionTrigger>
          <AccordionContent>
            I tackle challenges with a combination of analytical thinking and
            creativity. Whether it’s writing clean, reusable code or
            troubleshooting complex features, I thrive on finding efficient
            solutions. My commitment to learning and adapting ensures I stay
            up-to-date with the latest technologies and best practices.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4">
          <AccordionTrigger className="">
            How do I collaborate with a team?
          </AccordionTrigger>
          <AccordionContent>
            Collaboration is at the heart of my work. I actively contribute to
            brainstorming sessions, provide constructive feedback, and align
            closely with both developers and designers to deliver cohesive
            products. My communication skills ensure a smooth workflow, and I
            value teamwork as a key to success.
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <HeaderButton />
      <div className="mb-10"> </div>
    </div>
  );
}

function HeaderButton() {
  return (
    <div className="flex justify-center px-10 w-full h-fit">
      <div className="bg-gray-200 md:mx-20 py-2 px-4 flex items-center rounded-3xl w-full mt-8 shadow-md">
        <HouseLine size={40} weight={"fill"} color={"#172554"} />
        <a
          href="mailto:simon.muscas@gmail.com?subject=Join%20Demo&body=Hello,%20I%20am%20interested%20in%20joining%20the%20demo."
          className="ml-4 md:max-w-xs sm:ml-auto flex-1 justify-center font-sans hover:shadow-lg hover:bg-fuchsia-800 hover:text-white transition-all cursor-pointer bg-gray-100 text-gray-800 border-solid border-[1px] border-gray-200 rounded-3xl shadow-md px-6 flex items-center py-3 my-2 font-semibold"
        >
          <div className="">Join the demo</div>
        </a>
      </div>
    </div>
  );
}
