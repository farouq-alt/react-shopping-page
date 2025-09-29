import { useRef, useEffect } from "react";

function StudInfo({students,setstudents,editIndex,setEditIndex}){
    const number=useRef()
    const name = useRef()
    const email = useRef()

    // when editIndex changes, fill form
    useEffect(()=>{
        if(editIndex !== null){
            number.current.value = students[editIndex].number
            name.current.value = students[editIndex].name
            email.current.value = students[editIndex].email
        }
    },[editIndex,students])

    const handleSubmit = ()=>{
        const studentData={
            number:number.current.value,
            name:name.current.value,
            email:email.current.value
        };

        if(editIndex !== null){
            // modify existing student
            const updated=[...students]
            updated[editIndex]=studentData
            setstudents(updated)
            setEditIndex(null) // reset
        }else{
            // add new student
            setstudents([...students,studentData])
        }

        number.current.value="";
        name.current.value="";
        email.current.value="";
    }

    return(
        <div>
            <input type="number" className="form-control" ref={number} placeholder="enter student id"/>
            <input type="text" className="form-control" ref={name} placeholder="enter student name"/>
            <input type="email" className="form-control" ref={email} placeholder="enter student email"/>
            <button className="btn btn-primary mt-2" onClick={handleSubmit}>
                {editIndex !== null ? "Update" : "Add"}
            </button>
        </div>
    )
}

export default StudInfo



