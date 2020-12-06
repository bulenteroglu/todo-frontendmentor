import React from "react";
import Content from "./components/Content";
import Header from "./components/Header";

export default function App() {
  return (
    <div className='h-screen'>
      <Header />
      <div className='mx-auto container absolute top-0'>
        <div className='flex justify-center w-screen'>
          <Content />
        </div>
      </div>
    </div>
  );
}
