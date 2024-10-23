"use client";

//@ts-ignore
import NavbarElement from "/src/app/Navbar/NavbarElement.tsx";

const FullSizeNav = () => {
  return (
    <div className="inline-flex w-screen sticky border-b-2 border-black pb-6">
      <NavbarElement
        styles="font-bold text-4xl ml-4 mt-4"
        link="/"
        text="Eli Lewis"
      ></NavbarElement>
      
      <div
        className="flex align-end items-end ml-auto mr-4 mt-4 hover:cursor-pointer"
        onClick={() => {
          console.log("dark mode!");
        }}
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
