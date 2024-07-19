"use server"
import { redirect } from "next/navigation";
import { addLecturer, editLecturer } from "../api";
import { InputLecturer } from "../api";
export const handleAdd = async (data:FormData) => {
    const lecturer:InputLecturer = {
        name: data.get('name') as string,
        email: data.get('email') as string,
        phone: data.get('phone') as string,
    }
    addLecturer(lecturer)
    redirect("/lecturers")
}


export const handleEdit = (data:FormData) => {
    const lecturer:InputLecturer = {
        name: data.get('name') as string,
        email: data.get('email') as string,
        phone: data.get('phone') as string,
    }
    const id = +(data.get('id') as string)
    editLecturer(id, lecturer)
    redirect("/lecturers")
}