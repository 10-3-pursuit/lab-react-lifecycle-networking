import React from "react";
import Employee from "./Employee";
import "./EmployeeList.css";
import { useState, useEffect } from 'react';

export const EmployeeList = () => {

  const [employees, setEmployees] = useState([]); // expecting pets to be an array of objects representing individual pets. Initially, this array is empty – haven't fetched any pet data yet

  useEffect(() => { // only needs to be fetched once when useState is empty array - which is it's initial state
    fetch('https://resource-veterinarian-api-4guj.onrender.com/api/employees') // same as when fetching Employee details in regards to pets except no employee id is needed for api - only /api/employees is needed after api link. This fx will help automatically display list on page w/o user input, unlike Employee component which has a toggle button
      .then(response => response.json())
      .then(data => setEmployees(data));
  }, []) // the effect doesn't depend on any values from props or state, so it doesn't need to re-run so empty array as second arg to achieve this

  return (
    <main>
      <h2>All Staff</h2>
      <section className="employee-list">
        {/* need to .map to grab keys and need employee id for the prop because it is used for list item as well as for the pets in PetList.jsx */}
        {employees.map(employee => (
        <Employee key={employees.id} employee={employee} />
        ))}
      </section>
    </main>
  )
}

export default EmployeeList
