import Employee from "./Employee";
import "./EmployeeList.css";
import { useState, useEffect } from "react";

export const EmployeeList = () => {
  // create state
  const [employees, setEmployees] = useState([]);

  // create the fetch
  const getEmployeeList = () => {
    fetch("https://resource-veterinarian-api-4guj.onrender.com/api/employees")
      .then((response) => response.json())
      .then((data) => {
        setEmployees(data);
      })
      .catch((err) => console.log("error"));
  };

  // console.log(employee);

  useEffect(() => {
    // call the function and remember to include a dependency in order to prevent an infinite loop
    // in this case we only want the page to render once so therefore the dependency will be an []
    getEmployeeList();
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
