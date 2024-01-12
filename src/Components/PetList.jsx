import { useEffect, useState } from "react";

export const PetList = ({ emp }) => {
    const [pets, setPets] = useState([]);

    useEffect(() => {
        fetch(
            `https://resource-veterinarian-api-4guj.onrender.com/api/pets?employeeId=${emp.id}`
        )
            .then((res) => res.json())
            .then((data) => setPets(data))
            .catch((error) => console.error(error));
    }, []);

    return (
        <aside className="pets-list">
            {pets.length
                ? pets.reduce(
                      (acc, curr) => (acc ? acc + ", " + curr.name : curr.name),
                      ""
                  )
                : "No pets found."}
        </aside>
    );
};

export default PetList;
