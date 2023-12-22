import { useEffect, useState } from "react";

export const PetList = (props) => {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    fetch("https://resource-veterinarian-api-4guj.onrender.com/api/pets").then(
      (res) => res.json().then((data) => setPets(data))
    );
  }, []);

  const filteredPets = pets.filter((pet) => pet.employeeId === props.vetId);

  return (
    <aside className="pets-list">
      {pets.map(
        (pet) =>
          pet.employeeId === props.vetId && <p key={pet.id}>{pet.name}</p>
      )}
      {filteredPets.length === 0 && <p>No pets lised for this employee</p>}
    </aside>
  );
};

export default PetList;
