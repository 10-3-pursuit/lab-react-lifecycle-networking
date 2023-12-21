import PetList from "./PetList";
import "./Employee.css";


// id: "z7GIN_i",
//     firstName: "Leah",
//     lastName: "Ayers",
//     prefix: "Dr.",
//     postfix: "",
//     title: "Medical Director"

export const Employee = ({employee}) => {
  return (
    <article className="employee">
      <h3>{employee.prefix && `${employee.prefix} `}{employee.firstName} {employee.lastName}{employee.postfix && `, ${employee.postfix}`}</h3>
      <h4>{employee.title}</h4>
      <button>Show Pets</button>
      <PetList />
    </article>
  );
};

export default Employee;
