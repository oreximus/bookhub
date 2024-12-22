import React from "react";
import bookLogo from "../assets/books.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <Link to="/" className="bg-gray-200 p-2 flex flex-row gap-2 items-center">
        <div className="w-[8rem]">
          <img src={bookLogo} />
        </div>
        <div className="text-3xl font-bold text-black">BookHub</div>
      </Link>
    </>
  );
};

export default Header;
