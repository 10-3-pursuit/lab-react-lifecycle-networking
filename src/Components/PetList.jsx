import { useState, useEffect } from "react";

export const PetList = ({ id, showPet }) => {
  let employeeId = id;
  // console.log(showPet);
  const [pets, setPets] = useState([]);
  // create the fetch
  const getPetList = () => {
    fetch("https://resource-veterinarian-api-4guj.onrender.com/api/pets")
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        const filteredPetsArray = data.filter(
          (pet) => pet.employeeId === employeeId
        );
        setPets(filteredPetsArray);
      })
      .catch((err) => console.log("error"));
  };

  useEffect(() => {
    // call the function and remember to include a dependency in order to prevent an infinite loop
    // this useEffect is dependent on the employeeId
    getPetList();
  }, [employeeId]);

  // Method 1
  // const petsString = () => {
  //     if (pets.length) {
  //       return pets.map((pet) => pet.name).join(", ");
  //     } else {
  //       return `No pets listed for this employee`;
  //     }
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
  //     return " ";
  //   }
  // };

  return (
    <aside className="pets-list">
      {/* method 1 */}
      {/* {<p>{petsString()}</p>} */}

      {/* method 2 */}
      {/* {<p>{showPet && petsString()}</p>} */}

      {/* method 3 */}
      {showPet &&
        (pets.length > 0 ? (
          pets.map((pet) => pet.name).join(", ")
        ) : (
          <p>No pets listed for this employee.</p>
        ))}
    </aside>
  );
};

export default PetList;
