import { useState, useEffect } from "react";

export const PetList = ({ employeeId }) => {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    fetch(
      `https://resource-veterinarian-api-4guj.onrender.com/api/pets?employeeId=${employeeId}`
    )
      .then((res) => res.json())
      .then((data) => setPets(data));
  }, []);

  return (
    <aside className="pets-list">
      <p>
        {pets.length === 0
          ? `No pets listed for this employee.`
          : pets
              .filter((pet) => pet.employeeId === employeeId)
              .map((pet) => pet.name)
              .join(", ")}
      </p>
    </aside>
  );
};

export default PetList;
