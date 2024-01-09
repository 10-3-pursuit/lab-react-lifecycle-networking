import PetList from "./PetList";
import "./Employee.css";
import { useState } from "react";


export const Employee = ({ employee }) => {
  const [petlist, setPetlist] = useState(false);

  const togglePets = () =>{
    setPetlist(!petlist)
  }
  return (
    <article className="employee">
      <h3>{employee.prefix} {employee.firstName} {employee.lastName}, {employee.postfix}</h3>
      <h4>{employee.title}</h4>
      <button onClick={togglePets}>Show Pets</button>
      {petlist && <PetList employeeID={employee.id} />}
      </article>
  );
};

export default Employee;
