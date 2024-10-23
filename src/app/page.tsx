"use client";

//@ts-ignore
import Home from "/src/app/Home/page.tsx"; //@ts-ignore
import FullSizeNav from "/src/app/Navbar/Navbar.tsx"; //@ts-ignore
import MiniNav from "/src/app/Navbar/MiniNav.tsx"; //@ts-ignore

const Page = () => {
  return (
    <div>
      <div className="hidden collapse:block">
        <FullSizeNav />
      </div>
      <div className="block collapse:hidden">
        <MiniNav />
      </div>

      <Home />
    </div>
  );
};

export default Page;
