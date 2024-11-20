import React from "react";
import ProfileImage from "../../assets/image/profile.jpg";

const Header = () => {
  return (
    <header className="bg-indigo-200 h-[150px] rounded-3xl flex flex-row items-center p-12">
      <img
        src={ProfileImage}
        alt="Profile"
        className="w-32 h-32 rounded-full object-cover "
      />
      <div className="ml-60 text-center">
        <h1 className="text-2xl font-semibold mb-4 ">Raheleh madadi</h1>
        <h2>Front-End Developer</h2>
      </div>
    </header>
  );
};

export default Header;
