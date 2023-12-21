
import { useEffect, useState } from "react";

import React from "react";
import NavBar from "./Components/NavBar";
import EmployeeList from "./Components/EmployeeList";

function App () {

console.log("useEffect Ran");


  return (
    <>
      <NavBar />
      <EmployeeList />
    </>
  );
};

export default App;
