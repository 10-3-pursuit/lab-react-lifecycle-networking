import { useState } from "react";
import PetList from "./PetList";
import "./Employee.css";

export const Employee = ({ employeeData }) => {
  const [showPets, setShowPets] = useState(false)
  const firstName = employeeData.firstName
  const lastName = employeeData.lastName
  const prefix = employeeData.prefix
  const postfix = employeeData.postfix

  let fullName = firstName + ' ' + lastName

  if (prefix) {
    fullName = prefix + ' ' + fullName
  }

  if (postfix) {
    fullName += ', ' + postfix
  }

  return (
    <article className="employee">
      <h3>{fullName}</h3>
      <h4>{employeeData.title}</h4>
      <button onClick={() => setShowPets(!showPets)}>Show Pets</button>
      {showPets && <PetList employeeId={employeeData.id} />}
    </article>
  );
};

export default Employee;

