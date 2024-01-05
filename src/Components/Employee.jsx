import PetList from "./PetList";
import "./Employee.css";
import { useState, useEffect } from "react";

export const Employee = ({employee}) => {
  const [petNames, setPetNames] = useState(false)

  const togglePets = () =>{
    setPetNames(!petNames)
  }
  return (
    <article className="employee">
            <h3>
            prefix={employee.prefix}
            firstName={employee.firstName}
            lastName={employee.lastName}
            postfix={employee.postfix}
            </h3>
            <h4>
            title={employee.title}
            </h4>
            <button onClick= {togglePets}>Pets Name</button>
            { petNames && <PetList employeeID={employee.id}/>}
    </article>
  );
};

export default Employee;
