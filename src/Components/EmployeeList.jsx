import React from "react";
import Employee from "./Employee";
import "./EmployeeList.css";
import { useState, useEffect } from "react";

export const EmployeeList = () => {
  const [employees, setEmployess] = useState([])

  useEffect(() => {
    fetch("https://resource-veterinarian-api-4guj.onrender.com/api/employees")
      .then((results) => results.json())
      .then((data) => {
        console.log("Fetched data:", data);
        setEmployess(data);
      })
      .catch((error) => {
        console.error("Error fetching employees:", error);
      });
  }, []);


  return (
    <main>
      <h2>All Staff</h2>
      <section className="employee-list">
        {employees.map((employee) => (
          <Employee key={employee.id} employee={employee} />
        ))}
      </section>
    </main>
  );
};

export default EmployeeList;
