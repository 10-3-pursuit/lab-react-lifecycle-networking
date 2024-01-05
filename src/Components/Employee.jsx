import PetList from "./PetList";
import "./Employee.css";
import { useState } from "react";

export const Employee = ({ employee }) => {
  const [pets, setPets] = useState(false);

  const handleClick = () => {
    setPets(!pets);
  };

  const { prefix, firstName, lastName, postfix, title, id } = employee;

  let fullName = firstName + " " + lastName;

  prefix && (fullName = prefix + " " + fullName);
  postfix && (fullName = fullName + ", " + postfix);

  return (
    <article className="employee">
      <h3>{fullName}</h3>
      <h4>{title}</h4>
      <button onClick={handleClick}>Show Pets</button>
      <div>{pets && <PetList employeeId={id} />}</div>
    </article>
  );
};

export default Employee;
