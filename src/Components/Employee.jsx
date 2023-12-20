import PetList from "./PetList";
import "./Employee.css";
import { useState,useEffect } from "react";

export const Employee = () => {
  const [list, setList] = useState([])
  const [pets, setPets] = useState([])
  const [selectedId, setSelectedId] = useState(null)
  const [showPets, setShowPets] = useState(false)


  useEffect(() => {
    fetch(`https://resource-veterinarian-api-4guj.onrender.com/api/employees`)
      .then(res => res.json())
      .then(data => {
        setList(data);
        console.log(data);
      });
  }, []);

  useEffect(() => {
    if ( showPets && selectedId) {
      fetch(`https://resource-veterinarian-api-4guj.onrender.com/api/pets`)
      .then(res => res.json())
      .then(data => {
        // console.log(data)
        const filteredPets = data.filter(pet => pet.employeeId === selectedId)
        setPets(filteredPets)
      })
    }
  }, [showPets, selectedId])
  
  
  const handleShowPets = (id) => {
    if (selectedId === id && showPets) {
      setShowPets(false)
    } else {
      setSelectedId(id)
      setShowPets(true)
    }
  }

  const handleClosePets = () => {
    setShowPets(false)
  }

  return (
    <article className="employee">
        {list.map((empl,id) => (
          <li key={id} className="employee-li">
            <h3>{empl.prefix === 'Dr.' ? `Dr. ${empl.firstName} ${empl.lastName}` : empl.postfix === `CVPM` ? `${empl.firstName} ${empl.lastName}, ${empl.postfix}` : `${empl.firstName} ${empl.lastName}`}</h3>
            <h4>{empl.title}</h4>
            <button onClick={() => handleShowPets(empl.id)}>Show Pets</button>
            {showPets && selectedId === empl.id && (
              <PetList pets={pets} onClose={handleClosePets}/>
            )}
          </li>
        ))}
    </article>
  );
};

export default Employee;
