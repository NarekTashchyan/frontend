import { NavLink } from "../lib/components/nav-link"
import { LecturerList } from "../lib/components/lecturers-list"
import { getAllLecturers } from "../lib/api"

export default function Page(){
    const lecturersList = getAllLecturers()
    return(
        <div>
           <LecturerList lecturers={lecturersList}></LecturerList> 
        </div>
    )
}