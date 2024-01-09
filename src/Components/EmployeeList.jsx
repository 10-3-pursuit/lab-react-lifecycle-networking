import Employee from "./Employee";
import "./EmployeeList.css";
import { useState, useEffect } from "react";

export const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetch("https://resource-veterinarian-api-4guj.onrender.com/api/employees")
      .then(results => results.json())
      .then((data) => {
        setEmployees(data);
      });
    }, [])

  if (employees.length === 0){
    return <h4>No employees</h4>
  }
  return (
    <main>
      <h2>All Staff</h2>
      <section className="employee-list">
        {employees.map((employee) => (
          <Employee key={employee.id} employee ={employee} />
        ))}
      </section>
    </main>
  );
};

export default EmployeeList;
