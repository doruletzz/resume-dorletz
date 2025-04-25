import React, { ComponentPropsWithoutRef } from "react";
import { cn } from "./cn"; // Assuming cn is a utility for merging class names
import Link from "next/link";
import Image from "next/image";

type CardProps = {
  className?: string;
  children: React.ReactNode;
};

type CardSubComponentProps = {
  children: React.ReactNode;
  className?: string; // Added className prop for sub-components
};

const Card = ({
  children,
  className,
  ...otherProps
}: CardProps & ComponentPropsWithoutRef<"div">) => {
  //   const [isHovered, setIsHovered] = React.useState(false);
  return (
    <div
      className={cn(
        "overflow-hidden group/card relative animate-fade-in flex flex-col sm:shadow-none shadow-2xl hover:shadow-xl gap-0 justify-center items-center p-4 rounded-4xl hover:-translate-y-1 transition-[transform_background_opacity] duration-1000 ease-in-out",
        // "group-hover:bg-neutral-200",
        className
      )}
      {...otherProps} // Pass otherProps down to the div
    >
      {children}
    </div>
  );
};

const CardTitle = ({ children, className }: CardSubComponentProps) => {
  return <h2 className={cn("text-2xl font-bold font-mono z-10", className)}>{children}</h2>;
};

const CardContent = ({ children, className }: CardSubComponentProps) => {
  return (
    <div className={cn("text-base text-gray-700", className)}>{children}</div>
  );
};

const CardLink = ({
  href,
  children,
  className,
}: CardSubComponentProps & { href: string }) => {
  return (
    <Link
      href={href}
      target="_blank"
      className={cn(
        "hover:-translate-y-0.5 transition-transform duration-400 absolute p-4 rounded-full shadow-sm bottom-4 left-4 text-sm bg-white flex overflow-hidden whitespace-nowrap",
        className
      )}
    >
      <span className="text-gray-950 group-hover/card:mr-2 group-hover/card:max-w-[5rem] transition-[width_transform] duration-700 max-w-[0.01px] text-ellipsis overflow-hidden">
        {children}
      </span>
      <Image
        alt="arrow"
        src="/arrow-up-right.svg"
        width={20}
        height={20}
        className=""
      />
    </Link>
  );
};

Card.Title = CardTitle;
Card.Content = CardContent;
Card.Link = CardLink;

export default Card;
