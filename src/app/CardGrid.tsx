"use client";
import React from "react";
import Card from "./Card";
import { cn } from "./cn";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";

const DynamicLeafletMap = dynamic(() => import("./LeafletMap"), {
  ssr: false,
});

const CardGrid = () => {
  const [selected, setSelected] = React.useState(-1);
  const [enableHover, setEnableHover] = React.useState(false);

  const CONTENT = [
    {
      content: (
        <button
          className={cn(
            "opacity-100 -rotate-6 group-hover/card:rotate-6 group-hover/card:scale-125 scale-100 w-full h-full cursor-pointer rounded-full flex overflow-hidden hover:-translate-y-0.5 transition-transform duration-400 ease-in-out"
          )}
          onClick={() => {
            setEnableHover((prev) => !prev);
            setSelected((prev) => (prev !== -1 ? -1 : 0));
          }}
        >
          <Image
            src={enableHover ? "/lamp-on.png" : "/lamp-off.png"}
            alt="lamp"
            width={80}
            height={80}
            className="w-full"
          />
        </button>
      ),
      className: "bg-blue-400",
    },
    {
      title: (
        <div className="flex flex-col md:gap-2 md:group-hover/card:-translate-y-20 transition-transform duration-300 ease-in-out">
          <h2 className="md:text-2xl text-lg font-bold font-mono">
            Half Marathon
          </h2>
          <p className="text-sm opacity-90 text-center">02:17</p>
        </div>
      ),
      content: (
        <Image
          src="/footwear.png"
          alt="lamp"
          width={480}
          height={480}
          className="w-[120%] -rotate-6 group-hover/card:rotate-6 scale-75 group-hover/card:scale-100 group-hover/card:translate-y-1/3 transition-transform duration-500 ease-in-out absolute left-1/2 -translate-x-1/2 bottom-1/4 translate-y-1/2 -z-0"
        />
      ),

      image: "/images/image1.jpg",
      className: "bg-pink-400 col-span-1 md:row-span-2 row-span-1",
    },
    {
      title: "Doros Doru-Lucian",
      content: (
        <div className="flex flex-col">
          <Image
            src="/portrait-face.png"
            alt="lamp"
            width={480}
            height={480}
            className="h-full w-auto -rotate-3 group-hover/card:rotate-3 scale-90 group-hover/card:scale-100 transition-transform duration-500 ease-in-out absolute left-4 bottom-1/2 translate-y-1/2 -z-0"
          />
          {"Software Developer"}
        </div>
      ),
      image: "/images/image2.jpg",
      className:
        "bg-red-400 col-span-2 md:row-end-auto row-end-1 md:min-h-auto min-h-64 pl-12 md:pl-20 ",
    },
    {
      title: "Title 3",
      content: (
        <iframe
          scrolling="no"
          className="absolute -top-[100%] bottom-[100%] -left-[100%] right-[100%] w-[300%] h-[300%] transform-gpu overflow-hidden pointer-events-none sm:scale-x-[27%] sm:scale-y-[28%] scale-[34%] rounded-4xl transition-transform duration-300 ease-in-out group-hover/card:scale-[33.73%] text-[4px]"
          src="https://home.nasium.coach/"
        />
      ),

      link: {
        label: "Nasium",
        href: "https://home.nasium.coach/",
      },
      className: "bg-indigo-400 row-span-2 md:min-h-auto min-h-72",
    },
    {
      // title: "Title 4",
      content: (
        <iframe
          scrolling="no"
          className="absolute -top-1/2 bottom-1/2 -left-1/2 right-1/2 w-[200%] h-[200%] overflow-hidden pointer-events-none sm:scale-[43%] scale-[50%] rounded-4xl transition-transform duration-300 ease-in-out group-hover/card:scale-[51%]"
          src="https://factoryicon.org/"
        />
      ),
      link: {
        label: "Factory Icon",
        href: "https://factoryicon.org/",
      },
      className: "bg-emerald-400 row-span-2",
    },

    {
      //   title: "Title 5",
      content: <DynamicLeafletMap />,
      image: "/images/image2.jpg",
      className: "bg-lime-300 md:min-h-auto min-h-48",
    },
    {
      content: (
        <p className="text-2xl font-bold font-mono text-center">
          {'"Perfect is the enemy of great"'}
        </p>
      ),
      description: "Description 3",
      image: "/images/image2.jpg",
      className: "bg-sky-400 md:row-span-3",
    },
    {
      // title: "Title 7",
      content: (
        <iframe
          scrolling="no"
          className="absolute -top-1/2 bottom-1/2 -left-1/2 right-1/2 w-[200%] h-[200%] overflow-hidden pointer-events-none transform-gpu sm:scale-y-[42%] sm:scale-x-[44%] scale-[50%] rounded-4xl transition-transform duration-300 ease-in-out group-hover/card:scale-[51%]"
          src="https://talaria.email/"
        />
      ),
      link: {
        label: "Talaria",
        href: "https://talaria.email/",
      },
      className: "bg-yellow-400 col-span-2 row-span-2 min-h-80",
    },
    {
      content: (
        <Image
          src="/pencil.png"
          alt="lamp"
          width={480}
          height={480}
          className="scale-75 rotate-12 group-hover/card:rotate-0 group-hover/card:scale-100 duration-700 ease-in-out"
        />
      ),
      link: {
        label: "Blog",
        href: "https://home.nasium.coach/",
      },
      className: "bg-rose-400 row-span-1 md:row-span-2 md:min-h-auto min-h-60",
    },
    {
      content: (
        <div className="grid grid-cols-2 md:gap-4 gap-4 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <Link
            className="p-2 md:p-4 hover:bg-white rounded-full aspect-square transition-transform duration-300 ease-in-out hover:-translate-y-0.5"
            href="https://github.com/doruletzz"
            target="_blank"
          >
            <Image src="/github.svg" alt="github" width={28} height={28} />
          </Link>
          <Link
            className="p-2 md:p-4 hover:bg-white rounded-full aspect-square transition-transform duration-300 ease-in-out hover:-translate-y-0.5"
            href="https://github.com/doruletzz"
            target="_blank"
          >
            <Image src="/linkedin.svg" alt="github" width={28} height={28} />
          </Link>{" "}
          <Link
            className="p-2 md:p-4 hover:bg-white rounded-full aspect-square transition-transform duration-300 ease-in-out hover:-translate-y-0.5"
            href="https://github.com/doruletzz"
            target="_blank"
          >
            <Image src="/x.svg" alt="github" width={28} height={28} />
          </Link>{" "}
          <Link
            className="p-2 md:p-4 hover:bg-white rounded-full aspect-square transition-transform duration-300 ease-in-out hover:-translate-y-0.5"
            href="https://github.com/doruletzz"
            target="_blank"
          >
            <Image src="/mail.svg" alt="github" width={28} height={28} />
          </Link>
        </div>
      ),
      image: "/images/image2.jpg",
      className: "bg-orange-400 min-h-48",
    },
  ];
  return (
    <>
      <div className="grid lg:grid-cols-5 sm:grid-cols-3 grid-cols-2 md:grid-rows-4 font-[family-name:var(--font-geist-sans)] w-full h-full min-h-screen gap-2 sm:gap-4 sm:p-4 p-2">
        {CONTENT.map((item, index) => (
          <Card
            style={{ animationDelay: `${index * 0.1}s` }}
            onMouseEnter={() => enableHover && setSelected(index)}
            onMouseLeave={() => setSelected(-1)}
            key={index}
            className={cn(
              item.className,
              selected !== -1 &&
                selected !== index &&
                "saturate-50 opacity-25 blur-[3px]"
            )}
          >
            <Card.Title>{item.title}</Card.Title>
            <Card.Content>{item.content}</Card.Content>
            {item.link && (
              <Card.Link href={item.link.href}>{item.link.label}</Card.Link>
            )}
          </Card>
        ))}
      </div>
    </>
  );
};

export default CardGrid;
