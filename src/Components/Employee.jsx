import PetList from "./PetList";
import "./Employee.css";

export const Employee = ({ emp }) => {
    return (
        <article className="employee">
            <h3>
                {emp.prefix ? emp.prefix : null} {emp.firstName} {emp.lastName}
            </h3>
            <h4>{emp.title}</h4>
            <button>Show Pets</button>
            <PetList />
        </article>
    );
};

export default Employee;
