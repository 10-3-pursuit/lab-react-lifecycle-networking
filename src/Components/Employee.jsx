import PetList from "./PetList";
import "./Employee.css";
import { useEffect, useState } from "react";


export const Employee = ({employee}) => {

  const [formatedName,setFormatedName] = useState("");
  const [showPets,setShowPets] = useState(false);

  const formatName = (employee)=>{
    let formattedName = `${employee.firstName} ${employee.lastName}`;
    if (employee.prefix === 'Dr.') {
      formattedName = `Dr. ${formattedName}`;
    } 
    if (employee.postfix === 'CVPM') {
      formattedName = `${formattedName}, CVPM`;
    }
    setFormatedName(formattedName);
  };

useEffect (()=>{
  formatName(employee);
}, [employee])


  return (
        <article className="employee" key={employee.id}>
          <h3>{formatedName}</h3>
          <h4>{employee.title}</h4>
          <button onClick={()=>setShowPets(!showPets)}>Show Pets</button>
          {showPets && <PetList employeeId ={employee.id} />}
        </article>
  );
};

export default Employee;
