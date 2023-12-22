import React, { useEffect, useState } from "react";
import Employee from "./Employee";
import "./EmployeeList.css";

export const EmployeeList = () => {
  const [vets, setVets] = useState([]);

  // start by extracting data from the api
  const getVetData = () => {
    fetch(`https://resource-veterinarian-api-4guj.onrender.com/api/employees`)
      .then((res) => res.json())
      .then((data) => setVets(data));
  };

  useEffect(() => {
    getVetData();
  }, []);

  return (
    <main>
      <h2>All Staff</h2>
      <section className="employee-list">
        {vets.map((vet) => (
          <Employee key={vet.id} vet={vet} />
        ))}
      </section>
    </main>
  );
};

export default EmployeeList;
