import {useState} from 'react';
import StudInfo from './studentinout.jsx';
import Stdlist from './studentslist.jsx' 

function App(){
    const [students,setstudents]=useState([])
    const [editIndex,setEditIndex] = useState(null) // index of student to edit

    return(
    <div className="container">
        <StudInfo 
          students={students} 
          setstudents={setstudents}
          editIndex={editIndex}
          setEditIndex={setEditIndex}
        />
        <Stdlist 
          students={students} 
          setstudents={setstudents}
          setEditIndex={setEditIndex}
        />
    </div>
)   
}


export default App