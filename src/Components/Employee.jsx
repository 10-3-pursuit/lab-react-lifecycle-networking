import PetList from "./PetList";
import "./Employee.css";

export const Employee = ({employee}) => {
  return (
    <article className="employee">
      <li>
        <h3>Staff Member Name: {employee.firstName} {employee.lastName}</h3>
        <h4>Staff Member Title {employee.title}</h4>
        <button>Show Pets</button>
        <PetList />
      </li>
    </article>
  );
};

export default Employee;
