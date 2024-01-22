import PetList from "./PetList";
import "./Employee.css";
import {useState} from "react";



export const Employee = ({employee}) => {
  const [showPets, setShowPets] = useState(false);
const eventHandler = () => {
setShowPets(!showPets)
}

  return (
    <article className="employee">
      <h3>{employee.prefix && `${employee.prefix} `}{employee.firstName} {employee.lastName}{employee.postfix && `, ${employee.postfix}`}</h3>
      <h4>{employee.title}</h4>
      <button onClick={eventHandler}>{showPets ? "Hide Pets" : "Show Pets"}</button>
      {showPets && <PetList id = {employee.id} />}
    </article>
  );
};

export default Employee;
