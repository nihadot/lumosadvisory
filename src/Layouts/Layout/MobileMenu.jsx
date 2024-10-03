import React from "react";
import { mobileMenu } from "../../assets/icons";

function MobileMenu({ setMenuOpen }) {
  const handleClick = () => {
    setMenuOpen((prev) => !prev);
  };
  return (
    <div className="sm:hidden fixed left-2 top-4 h-[70px]  w-full ">
      <img
        onClick={handleClick}
        src={mobileMenu}
        alt=""
        className="!w-8 !h-8"
      />
    </div>
  );
}

export default MobileMenu;
