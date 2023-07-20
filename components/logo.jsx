// Path: components/Logo.jsx
import React from "react";
import Image from "next/image";

const Logo = () => {
  return (
    <div className="logo">
      <Image src="/logo.png" alt="logo" width={50} height={50} />
    </div>
  );
};

export default Logo;