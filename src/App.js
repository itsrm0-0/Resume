import React from "react";
import Header from "./components/header";
import Main from "./components/main";

function App() {
  return (
    <div className="max-w-[1024px] min-h-screen mx-auto p-3 bg-indigo-50">
      <Header />
      <Main />
    </div>
  );
}

export default App;
