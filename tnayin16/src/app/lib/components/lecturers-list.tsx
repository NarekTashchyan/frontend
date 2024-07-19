import { ILecturer } from "../api";
import Image from "next/image";

interface IProps {
    lecturers: ILecturer[];
}

export const LecturerList = ({ lecturers }: IProps) => {
    return (
        <>
            <div className="columns">
                {lecturers.map((lecturer) => (
                    <>
                        <div key={lecturer.id} className="column">
                            <h3>{lecturer.name}</h3>
                            <p>{lecturer.email}</p>
                            <p>{lecturer.phone}</p>
                            <a href={"http://localhost:3000/lecturers/edit/" + lecturer.id}>EDIT</a>
                        </div>
                    </>
                ))}
            </div>
        </>
    );
};