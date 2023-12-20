import React from "react";
import Employee from "./Employee";
import "./EmployeeList.css";
import { useEffect, useState } from "react";

export const EmployeeList = () => {

  const [employees,setEmployees] = useState([]);

  const getEmplyeeData = () =>{
    console.log("Get Employee Data ran:");
    fetch(`https://resource-veterinarian-api-4guj.onrender.com/api/employees`)
    .then((res) => res.json())
    .then((data) =>{
      setEmployees(data)
    })
  }


  useEffect(() =>{
    getEmplyeeData();
  },[]);
  
  return (
    <main>
      <h2>All Staff</h2>
      <section className="employee-list">
      {employees.map((employee)=>(
        <Employee
          employee ={employee} 
        />
        ))}
        </section>
        </main>
  );
};

export default EmployeeList;
