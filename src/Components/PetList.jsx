
import { useEffect, useState } from "react";


export const PetList = ({id}) => {
  const [pets, setPets] = useState([])
  useEffect(() => {
    fetch(`https://resource-veterinarian-api-4guj.onrender.com/api/pets?employeeId=${id}`).then(response => response.json()).then(data => setPets(data))
  }, [])
  return (
    <aside className="pets-list">
      {pets.length > 0 ? pets.map(pet => pet.name).join(", ") : <p>No pets listed for this employee.</p>}
    </aside>
  );
};

export default PetList;
