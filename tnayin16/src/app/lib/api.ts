import DataBase from 'better-sqlite3';

export interface ILecturer {
    id: number;
    name: string;
    email: string;
    phone: string;
}

export type InputLecturer = Omit<ILecturer, 'id'>
const db = new DataBase("lecturers.db");

db.exec(`
    CREATE TABLE IF NOT EXISTS lecturers (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        email TEXT NOT NULL,
        phone TEXT NOT NULL
    )
`);

export const addLecturer = (lecturer: InputLecturer) => {
    try {
        db.prepare(`
            INSERT INTO lecturers (name, email, phone)
            VALUES (@name, @email, @phone)
        `).run(lecturer);
    } catch (error) {
        console.error("Error adding lecturer:", error);
    }
}

export const getAllLecturers = (): ILecturer[] => {
    return db.prepare(`
            SELECT * FROM lecturers
        `).all() as ILecturer[];
}


export const editLecturer = (id: number, lecturer: InputLecturer) => {
    console.log(id)
    return db.prepare(`
            UPDATE lecturers SET name = @name, email = @email, phone = @phone
            WHERE id = @id
            `).run({ id, ...lecturer });
} 
