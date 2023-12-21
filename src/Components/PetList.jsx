import { useEffect, useState } from "react";

export const PetList = (props) => {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    fetch("https://resource-veterinarian-api-4guj.onrender.com/api/pets").then(
      (res) => res.json().then((data) => setPets(data))
    );
  }, []);

  return (
    <aside className="pets-list">
      {props.displayPets ? (
        <p>No pets listed for this employee.</p>
      ) : pets.some((pet) => pet.employeeId === props.vetId) ? (
        pets
          .filter((pet) => pet.employeeId === props.vetId)
          .map((pet) => <p key={pet.id}>{pet.name}</p>)
      ) : (
        <p>No pets listed for this employee.</p>
      )}
    </aside>
  );
};

export default PetList;
