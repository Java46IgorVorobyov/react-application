import CoursesService from "./CoursesService";
import {Course} from "../models/Course";
import {courses} from "../config/service-config";
import {getRandomNumber} from "../util/random";

export default class CoursesServiceArray implements CoursesService {
    add(course: Course): void {
        const id = getRandomNumber(100000, 999999);
        course.id = id;
        courses.push(course);
    }

    get(): Course[] {
        //TODO
        return [];
    }

    remove(id: number): void {
        //TODO
    }

    update(id: number, course: Course): void {
       // return courses;
    }

}