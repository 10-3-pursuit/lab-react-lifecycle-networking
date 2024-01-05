import PetList from "./PetList";
import { useState } from "react";
import "./Employee.css";

// will be used as prop for EmployeeList.jsx
export const Employee = ( {employee} ) => { //get data by outting it here then using fetch api call
  // make fetch pets function (need to use setData useState in second .then() for data so make useStates)
  const [pets, setPets] = useState([]); // empty array for useState - expecting pets to be an array of objects representing individual pets - initially, this array is empty – since no fetched pet data yet
  const [showPets, setShowPets] = useState(false); // pets are not shown when the component first renders. When the user clicks the "Show Pets" button, showPets is set to true (using the setShowPets function), and the component will re-render to show the pets. Will be used to toggle Show Pets button
  
  const fetchPets = () => { // for button on click
    setShowPets(!showPets);
    if (!showPets);
    fetch(`https://resource-veterinarian-api-4guj.onrender.com/api/pets?employeeId=${employee.id}`)
  // example in README.md /api/pets?employeeId=vlJtFOU to get pets under that particular employee
        .then(response => response.json())
        .then(data => setPets(data));
  };
  
  return (
    <article className="employee">
      <h3>{employee.prefix ? employee.prefix : ''} {employee.firstName} {employee.lastName}{employee.postfix ? `, ${employee.postfix}` : ''}</h3>
      <h4>{employee.title}</h4>
      <button onClick={fetchPets}>Show Pets</button>
      {showPets && <PetList pets={pets} />}
      {/* used PetList as prop here */}
    </article>
  );
};

export default Employee;
