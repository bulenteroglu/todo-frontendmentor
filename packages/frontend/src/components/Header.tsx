import React from "react";

const bgDesktopLight = require("../../assets/bg-desktop-light.jpg");
const bgDesktopDark = require("../../assets/bg-desktop-dark.jpg");

export default function Header({ dark }: { dark: boolean }) {
  return (
    <div>
      <img src={dark ? bgDesktopDark : bgDesktopLight} alt='bg-desktop' />
    </div>
  );
}
