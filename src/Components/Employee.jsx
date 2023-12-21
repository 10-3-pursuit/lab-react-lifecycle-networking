import PetList from "./PetList";
import "./Employee.css";
import { useEffect, useState } from "react";

export const Employee = (props) => {
  const [displayPets, setDisplayPets] = useState(false);

  const handleSubmit = () => {
    setDisplayPets(!displayPets);
  };

  return (
    <article className="employee">
      <h3>
        {props.vet.prefix} {props.vet.firstName + " "}
        {props.vet.postfix && props.vet.lastName + ", " + props.vet.postfix}
      </h3>
      <h4>{props.vet.title}</h4>
      <button onClick={handleSubmit}>Show Pets</button>
      {console.log(displayPets)}
      {displayPets && <PetList vetId={props.vet.id} />}
    </article>
  );
};

export default Employee;
