import React from "react";
import Employee from "./Employee";
import "./EmployeeList.css";
import { useState, useEffect } from "react";

export const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetch(`https://resource-veterinarian-api-4guj.onrender.com/api/employees`)
      .then((res) => res.json())
      .then((data) => setEmployees(data));
  });

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
