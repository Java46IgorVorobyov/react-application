import {Course} from "../models/Course";
import {PayloadAction} from "@reduxjs/toolkit";
import {ClientData} from "../models/ClientData";
import {coursesService} from "../config/service-config";

export const SET_COURSES_ACTION = '/courses/set';

export const AUTH_ACTION = 'auth';

export function setCourses(courses: Course[]): PayloadAction<Course[]> {
    return {payload: courses, type: SET_COURSES_ACTION};
}

export function addCourse(course: Course): (dispatch: any) => void {
    return async (dispatch) => {
        await coursesService.add(course);
        const courses: Course[] = await coursesService.get();
        dispatch(setCourses(courses));
    }
}

export function removeCourse(id: number): (dispatch: any) => void {
    return async (dispatch) => {
        await coursesService.remove(id);
        const courses: Course[] = await coursesService.get();
        dispatch(setCourses(courses));
    }
}

export function updateCourse(course: Course): (dispatch: any) => void {
    return async (dispatch) => {
        await coursesService.update(course.id, course);
        const courses: Course[] = await coursesService.get();
        dispatch(setCourses(courses));
    }
}

export function authAction(clientData: ClientData): PayloadAction<ClientData> {
    return {payload: clientData, type: AUTH_ACTION};
}

export function getCourses(): (dispatch: any) => void {
    return async (dispatch) => {
        const courses: Course[] = await coursesService.get();
        dispatch(setCourses(courses));
    }
}