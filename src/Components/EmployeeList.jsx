import React from "react";
import { useState, useEffect } from "react";
import Employee from "./Employee";
import "./EmployeeList.css";

export const EmployeeList = () => {
  const [employees, setEmployees] = useState([])

  const getData = () => {
    fetch(`https://resource-veterinarian-api-4guj.onrender.com/api/employees`)
      .then((res) => res.json())
      .then((data) => {
        setEmployees(data)
        // console.log(data)
      });
  };

  useEffect(() => {
    getData()
  }, [])

  return (
    <main>
      <h2>All Staff</h2>
      <section className="employee-list">
        <ul>
        {employees.map((employee) => (
          <Employee key={employee.id} employee={employee} />
        ))}
        </ul>
      </section>
    </main>
  );
};

export default EmployeeList;
