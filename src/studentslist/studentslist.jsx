import { useState } from "react";

function Stdlist({students,setstudents,setEditIndex}){
    const handleDelite = (id) =>{
        setstudents(students.filter((_,i)=>(i!==id)))
    }

    return(
        <table className="table table-striped table-bordered table-hover">
            <thead className="table-dark">
                <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>email</th>
                    <th>action</th>
                </tr>
            </thead>
                <tbody>
                {students.map((s,i)=>(
                    <tr key={i}>
                        <td>{s.number}</td>
                        <td>{s.name}</td>
                        <td>{s.email}</td>
                        <td>
                            <button className="btn btn-danger" onClick={()=>handleDelite(i)}>
                                delete
                            </button>
                            <button className="btn btn-warning" onClick={()=>setEditIndex(i)}>
                                update
                            </button>
                        </td>
                    </tr>))}
                </tbody>
        </table>
    )
}


export default Stdlist