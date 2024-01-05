import { useState, useEffect } from "react";

export const PetList = ({employeeId, showPets}) => {
  const [petsList, setPetsList] = useState([]); 

  //fetch request 
  const getPets = () => {
    fetch(`https://resource-veterinarian-api-4guj.onrender.com/api/pets`)
        .then((response) => response.json())
        .then((data) => { 
        
        const filteredPets = data.filter((pet) => pet.employeeId === employeeId);

        setPetsList(filteredPets);
        })
        .catch((error) => console.error("Error fetching pets:", error));
      }
  
    useEffect(() => {
      getPets();
    }, [employeeId]);

      // Method 1
    // const petsString = () => {
    //   if (pets.length) {
    //     return pets.map((pet) => pet.name).join(", ");
    //   } else {
    //     return `No pets listed for this employee`;
    //   }
    // };

      // Method 2
    // const petsString = () => {
    //   if (showPet) {
    //     if (pets.length) {
    //       return pets.map((pet) => pet.name).join(", ");
    //     } else {
    //       return `No pets listed for this employee`;
    //     }
    //   } else {
    //   return " ";
    //   }
    // };

    
  return (
    <aside className="pets-list">
      {/* method 1 */}
      {/* {<p>{showPet && petsString()}</p>} */}
      {/* method 2 */}
      {/* {<p>{petsString()}</p>} */}
      {/* method 3 */}
      {showPets && (petsList.length > 0 ? petsList.map((pet) => pet.name).join(", ") : <p>No pets listed for this employee.</p>)}
      
    </aside>
  );
};

export default PetList;
