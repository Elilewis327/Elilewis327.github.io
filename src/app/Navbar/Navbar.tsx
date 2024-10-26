"use client";

//@ts-ignore
import NavbarElement from "/src/app/Navbar/NavbarElement.tsx"; //@ts-ignore

const FullSizeNav = () => {

  return (
    <div className="collapse:inline-flex w-screen sticky top-0 border-b-2 border-black pb-4 mb-4 hidden bg-inherit">
      <NavbarElement
        styles="font-bold text-3xl"
        link="/"
        text="Eli Lewis"
      ></NavbarElement>
      <NavbarElement
        styles="text-xl"
        link="/Projects"
        text="Projects"
      ></NavbarElement>
      <NavbarElement styles="text-xl" link="/Blog" text="Blog"></NavbarElement>
      <NavbarElement
        styles="text-xl"
        link="/Interests"
        text="Interests"
      ></NavbarElement>
      <NavbarElement
        styles="text-xl mr-6"
        link="https://github.com/Elilewis327"
        text="Github"
      ></NavbarElement>
      <div
        className="flex align-end items-end ml-auto mt-6 mr-6 hover:cursor-pointer"
        onClick={ () => document.documentElement.classList.toggle('dark')}
      >
        <svg className="size-10" stroke="currentColor" fill="currentColor"
          strokeWidth="0" viewBox="0 0 24 24" height="24" width="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path fill="none" d="M0 0h24v24H0z"></path>
          <path d="M12 22c5.52 0 10-4.48 10-10S17.52 2 12 2 2 6.48 2 12s4.48 10 10 10zm1-17.93c3.94.49 7 3.85 7 7.93s-3.05 7.44-7 7.93V4.07z"></path>
        </svg>
      </div>
    </div>
  );
};

export default FullSizeNav;
