import React, { useEffect, useState } from "react";
import Content from "./components/Content";
import Header from "./components/Header";

export default function App() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    if (dark) {
      document.querySelector("html")?.classList.add("dark");
    } else {
      document.querySelector("html")?.classList.remove("dark");
    }
  }, [dark]);

  return (
    <div className='h-screen font-sans'>
      <Header dark={dark} />
      <div className='mx-auto container absolute top-0'>
        <div className='flex justify-center w-screen '>
          <Content dark={dark} setDark={setDark} />
        </div>
      </div>
    </div>
  );
}
