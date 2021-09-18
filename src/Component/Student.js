import React from 'react'
import { useQuery, gql } from "@apollo/client";



const GET_Employee = gql`
query employee {
    employee{
        name,
        email,
        department,
        salary
    }


    students{
        name,
        age
    }
}
`;

function Student() {
    const { loading, error, data } = useQuery(GET_Employee);
    if (loading) {
        return <p>Loading ... 🚀🚀</p>
    }
    if (error) {
        return <p>Error :</p>
    }
    const { employee , students} = data;
    console.log(employee , students)
    return (
        <div>
           <table border="1" >
               {
                   employee.map((emp)=>(
                       <tr>
                           <td>{emp.name}</td>
                           <td>{emp.email}</td>
                           <td>{emp.department}</td>
                           <td>{emp.salary}</td>
                       </tr>
                   ))
               }
           </table>
           <table>
               {
                   students.map((std)=>(
                       <tr>
                           <td>{std.name}</td>
                           <td>{std.age}</td>
                       </tr>
                   ))
               }
           </table>
        </div>
    )
}

export default Student
