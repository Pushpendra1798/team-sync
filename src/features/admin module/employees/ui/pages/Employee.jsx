import React from "react";
import { useEmployee } from "../../hooks/useEmployees";

const Employee = () => {
    let { data, isPending } = useEmployee();
    if (isPending) return <h1>Loading...</h1>;
    console.log(data.employees);
    
    return (
        <div>
            {data.employees.map((elem) => (
                <h1>{elem.name}</h1>
            ))}
        </div>
    );
};

export default Employee;
