"use client";

import Link from "next/link";

const NavbarElement = (props: {
  styles: string | null;
  text: string;
  link: string;
}) => {
  return (
    <div
      className={
        "items-end flex flex-none flex-wrap font-mono ml-6 mt-6 mr-0 mb-0 " + props.styles
      }
    >
    <Link href={props.link}>{props.text}</Link>
    </div>
  );
};

export default NavbarElement;
