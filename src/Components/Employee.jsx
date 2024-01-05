import PetList from "./PetList";
import "./Employee.css";
import { useState } from "react";

export const Employee = ({ employee }) => {
  const { prefix, firstName, lastName, postfix, title, id } = employee;
  const [showPet, setShowPet] = useState(false);

  // const handleClick =()=> {

  // }

  const pre = `${prefix}`;
  const post = `${postfix}`;
  const normalName = `${firstName} ${lastName}`;
  let fullName = `${pre} ${normalName} ${post}`;

  if (post) {
    fullName = `${pre} ${normalName}, ${post}`;
  }

  return (
    <article className="employee">
      <h3>{fullName}</h3>
      <h4>{title}</h4>
      <button onClick={() => setShowPet(!showPet)}>Show Pets</button>
      <PetList showPet={showPet} id={id} />
    </article>
  );
};

export default Employee;
