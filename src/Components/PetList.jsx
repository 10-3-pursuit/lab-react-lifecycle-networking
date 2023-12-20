import { useEffect } from "react";
import { useState } from "react";

export const PetList = ({employeeId}) => {
  const [petData, setPetData] = useState([])

  useEffect(() => {
    fetch(`https://resource-veterinarian-api-4guj.onrender.com/api/pets`)
      .then((res)=> res.json())
      .then((data)=> setPetData(data))
  },[])

  const employeePets = petData.filter((pet) => pet.employeeId === employeeId)

  const petNames = employeePets.map((pet) => pet.name).join(", ")

  if (employeePets.length === 0){
  return (
    <aside className="pets-list">
      <p>No pets listed for this employee.</p>
    </aside>
   );
  }

  return (
    <aside className="pets-list">
      <p>{petNames}</p>
    </aside>
  );
};

export default PetList;
