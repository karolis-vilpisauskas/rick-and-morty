import React from "react";
import Logo from "./components/Logo";

function App() {
  return (
    <div className="flex flex-col w-full h-screen px-4 items-center justify-center">
      <Logo />
      <h1 className="text-4xl text-center">
        React Boilerplate with Tailwind.css and Redux
      </h1>
    </div>
  );
}

export default App;
