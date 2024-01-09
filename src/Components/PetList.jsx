import { useState, useEffect } from "react";

export const PetList = ({employeeId}) => {
  const [pets, setPets] = useState([])

  useEffect(() => {
    fetch(`https://resource-veterinarian-api-4guj.onrender.com/api/pets?employeeId=${employeeId}`)
    .then(results => results.json())
    .then(data => setPets(data))
  },[employeeId])

  return (
    <aside className="pets-list">
      {pets.length > 0 ? (
        <ul>
        {pets.map((pet) => (
          <li key={pet.id}>{pet.name}</li>
      ))}
        </ul>) : 
      (<p>No pets listed for this employee.</p>)}
    </aside>
  );
};

export default PetList;
