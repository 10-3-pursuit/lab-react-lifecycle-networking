import { useEffect,useState } from "react";

export const PetList = ({employeeId}) => {
  const [petNames, setPetNames] = useState([""]);
  const getPetData = () => {
    fetch(`https://resource-veterinarian-api-4guj.onrender.com/api/pets?employeeId=${employeeId}`)
      .then((res) => res.json())
      .then((data) => {
        const names = data.map((pet) => pet.name).join(", ");
        setPetNames(names || "No pets listed for this employee.");
      })
  };

  useEffect (()=>{
    getPetData();
  }, [employeeId])


  return (
    <aside className="pets-list">
      <p>{petNames}</p>
    </aside>
  );
};

export default PetList;
