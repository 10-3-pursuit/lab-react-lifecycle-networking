import { useState, useEffect } from "react";


const PetList = ({ employeeID }) => {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    fetch(`https://resource-veterinarian-api-4guj.onrender.com/api/pets?employeeId=${employeeID}`)
      .then((results) => results.json())
      .then((data) => setPets(data));
  }, [employeeID]);

  return (
    <aside className="pets-list">
      {pets.length === 0 ? (
        <p>No pets listed for this employee.</p>
      ) : (
        <p>Pets: {pets.map((pet) => pet.name).join(", ")}</p>
      )}
    </aside>
  );
};

export default PetList;
