import CoursesService from "./CoursesService";
import {Course} from "../models/Course";

export default class CoursesServiceRest implements CoursesService{
    constructor(private url: any) {
    }

    async add(course: Course): Promise<void> {
        const response = await fetch(this.url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(course)
        })
        return await response.json();
    }

    async remove(id: number): Promise<void> {
        await fetch(this.getUrlById(id), {
            method: 'DELETE'
        })
    }

    async update(id: number, course: Course): Promise<void> {
        const response = await fetch(this.getUrlById(id), {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(course)
        })
        return await response.json();
    }

    async get(): Promise<Course[]> {
        const response = await fetch(this.url);
        const course = await response.json();
        return course.map((courses: Course) => {
            courses.openingDate = new Date(courses.openingDate);
            return courses;
        });
    }

    async exists(id: number): Promise<boolean> {
        let result;
        try {
            await fetch(this.getUrlById(id));
            result = true;
        } catch (err) {
            console.log(err);
            result = false;
        }
        return result;
    }

    private getUrlById(id: number) {
        return `${this.url}/${id}`;
    }
}

export class getCourses {
}