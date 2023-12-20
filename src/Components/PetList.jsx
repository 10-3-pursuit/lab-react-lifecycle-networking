import { useState, useEffect } from "react";

export const PetList = ({employeeId}) => {
  const [pets, setPets] = useState([])

    useEffect(() => {
      const getPetsData = () => {
        fetch("https://resource-veterinarian-api-4guj.onrender.com/api/pets")
        .then((res) => res.json())
        .then((data) => {
          const filteredPets = data.filter((pet) => pet.employeeId === employeeId)
          setPets(filteredPets)
        })
      }
      getPetsData()
    }, [employeeId])

    // console.log(pets)

    const matchingPets = pets.map((pet) => pet.name).join(", ")
    console.log(matchingPets)

  return (
    <aside className="pets-list">
      <p>{!matchingPets ? "No pets listed for this employee." : matchingPets}</p>
    </aside>
  );
};

export default PetList;
