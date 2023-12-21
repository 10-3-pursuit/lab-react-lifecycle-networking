import React, { useEffect, useState } from "react";
import Employee from "./Employee";
import "./EmployeeList.css";

export const EmployeeList = () => {
    const [staff, setStaff] = useState([]);

    useEffect(() => {
        fetch(
            "https://resource-veterinarian-api-4guj.onrender.com/api/employees"
        )
            .then((res) => res.json())
            .then((data) => setStaff(data));
    }, []);

    return (
        <main>
            <h2>All Staff</h2>
            <section className="employee-list">
                {staff.map((employee) => (
                    <li key={employee.id}>
                        <Employee emp={employee} />
                    </li>
                ))}
            </section>
        </main>
    );
};

export default EmployeeList;
