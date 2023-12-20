import PetList from "./PetList";
import "./Employee.css";

export const Employee = ({employee}) => {

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
        <button>Show Pets</button>
        <PetList />
      </li>
    </article>
  );
};

export default Employee;
