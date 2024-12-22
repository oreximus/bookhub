import React from "react";
import bookLogo from "../assets/books.png";

const Header = () => {
  return (
    <>
      <div className="bg-gray-200 p-2 flex flex-row gap-2 items-center">
        <div className="w-[8rem]">
          <img src={bookLogo} />
        </div>
        <div className="text-3xl font-bold">BookHub</div>
      </div>
    </>
  );
};

export default Header;
