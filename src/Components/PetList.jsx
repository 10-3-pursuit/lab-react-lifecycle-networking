import { useEffect, useState } from "react";

export const PetList = ({employeeID}) => {
  const [pets, setPets] = useState([])

  useEffect(()=>{
    fetch(`https://resource-veterinarian-api-4guj.onrender.com/api/pets?employeeId=${employeeID}`)
    .then(results=> results.json())
    .then(data=> setPets(data))
  },[])

  if(pets.length === 0){
   return (
    <aside className="pets-list">
      <p>No pets listed for this employee.</p>
    </aside>
   )  
  }

  return (
    <aside className="pets-list">
      <p>
      {pets.map((pet,i)=>{
        if(i === pets.length - 1){
          return <span key={pet.id}>{pet.name}</span>
        }else{
          return <span key={pet.id}>{pet.name},</span>
        }
      })}
      </p>
    </aside>
  );
};

export default PetList;
