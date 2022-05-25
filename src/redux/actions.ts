import {Course} from "../models/Course";
import {PayloadAction} from "@reduxjs/toolkit";
import {ClientData} from "../models/ClientData";
import {courseProvider, coursesService} from "../config/service-config";

export const SET_COURSES_ACTION = '/courses/set';

export const AUTH_ACTION = 'auth';

export function setCourses(courses: Course[]): PayloadAction<Course[]> {
    return {payload: courses, type: SET_COURSES_ACTION};
}

export function addCourse(course: Course): (dispatch: any) => void {
    return async (dispatch) => {
        await courseProvider.add(course);
        const courses: Course[] = await courseProvider.get();
        dispatch(setCourses(courses));
    }
}

export function removeCourse(id: number): (dispatch: any) => void {
    return async (dispatch) => {
        await courseProvider.remove(id);
        const courses: Course[] = await courseProvider.get();
        dispatch(setCourses(courses));
    }
}

export function updateCourse(course: Course): (dispatch: any) => void {
    return async (dispatch) => {
        await courseProvider.update(course.id, course);
        const courses: Course[] = await courseProvider.get();
        dispatch(setCourses(courses));
    }
}

export function authAction(clientData: ClientData): PayloadAction<ClientData> {
    return {payload: clientData, type: AUTH_ACTION};
}

export function getCourses(): (dispatch: any) => void {
    return async (dispatch) => {
        const courses: Course[] = await courseProvider.get();
        dispatch(setCourses(courses));
    }
}