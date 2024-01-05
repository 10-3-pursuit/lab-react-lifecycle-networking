import React, { useEffect, useState } from "react";
import Employee from "./Employee";
import "./EmployeeList.css";

export const EmployeeList = () => {
const [employeesList, setEmployeesList] = useState([]); 

//fetch request 
const getEmployees = () => {
fetch(`https://resource-veterinarian-api-4guj.onrender.com/api/employees`)
      .then((response) => response.json())
      .then((data) => {
        setEmployeesList(data);
      })
      .catch((error) => console.error(error));
    }

    useEffect(() => {
      getEmployees();
    }, []);

  return (
    <main>
      <h2>All Staff</h2>
      <section className="employee-list">
        {employeesList.map((employee) => 
          <Employee key={employee.id} employee={employee}/>
        )}
      </section>
    </main>
  );
};

export default EmployeeList;
