import PetList from "./PetList";
import "./Employee.css";
import { useState } from "react";

export const Employee = ({ emp }) => {
    const [petsButtonClicked, setPetsButtonClicked] = useState(false);
    const showPets = () => {
        setPetsButtonClicked(!petsButtonClicked);
    };

    return (
        <article className="employee">
            <h3>
                {emp.prefix && emp.prefix} {emp.firstName} {emp.lastName}{" "}
                {emp.postfix && `, ${emp.postfix}`}
            </h3>
            <h4>{emp.title}</h4>
            <button onClick={showPets}>Show Pets</button>
            {petsButtonClicked && <PetList emp={emp} />}
        </article>
    );
};

export default Employee;
