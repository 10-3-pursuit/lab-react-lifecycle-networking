import PetList from "./PetList";
import { useState } from "react";
import "./Employee.css";

export const Employee = ({employee}) => {
  const [pets, setPets] = useState(false)
  const firstName = employee.firstName
  const lastName = employee.lastName
  const prefix = employee.prefix
  const postfix = employee.postfix

  let fullName = firstName + " " + lastName

  if (prefix) {
    fullName = prefix + " " + fullName
  }

  if (postfix) {
    fullName = fullName += ", " + postfix
  }

  return (
    <article className="employee">
      <h3>{fullName}</h3>
      <h4>{employee.title}</h4>
      <button onClick={() => setPets(!pets)}>Show Pets</button>
      {pets && <PetList employeeId={employee.id}/>}
    </article>
  );
};

export default Employee;
