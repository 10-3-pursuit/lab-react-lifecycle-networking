import PetList from "./PetList";
import "./Employee.css";
import { useState } from "react";

export const Employee = ({employee}) => {

  const [showPets, setShowPets] = useState(false)

  function toggleShowPets(){
    setShowPets(!showPets)
  }

  function calculateName(employee){
    if(!employee.prefix && !employee.postfix){
      return `${employee.firstName} ${employee.lastName}`
    } else if(!employee.postfix){
      return `${employee.prefix} ${employee.firstName} ${employee.lastName}`
    } else if(!employee.prefix){
      return `${employee.firstName} ${employee.lastName}, ${employee.postfix}`
    } else{
      return `${employee.prefix} ${employee.firstName} ${employee.lastName}, ${employee.postfix}`
    }
  }

  const name = calculateName(employee)

  return (
    <article className="employee">
      <li>
        <h3>{name}</h3>
        <h4>{employee.title}</h4>
        <button onClick={toggleShowPets}>Show Pets</button>
        {showPets && <PetList employeeId={employee.id} />}
      </li>
    </article>
  );
};

export default Employee;
