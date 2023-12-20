import { useState, useEffect } from "react";

export const PetList = ({ employeeId }) => {
  const [pets, setPets] = useState([])

  useEffect(() => {
    fetch(`https://resource-veterinarian-api-4guj.onrender.com/api/pets?employeeId=${employeeId}`)
      .then(res => res.json())
      .then(data => setPets(data))
  },[employeeId])
  return (
    <aside className="pets-list">
      {pets.length > 0 ? (
        <p>{pets.map(pet => pet.name).join(', ')}</p>
      ) : (
        <p>No pets listed for this employee.</p>
      )}
    </aside>
  );
};

export default PetList;
