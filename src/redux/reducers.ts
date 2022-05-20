import {Reducer} from "react";
import {Course} from "../models/Course";
import {PayloadAction} from "@reduxjs/toolkit";
import {coursesService} from "../config/service-config";
import {ADD_COURSE_ACTION, AUTH_ACTION, REMOVE_COURSE_ACTION, UPDATE_COURSE_ACTION} from "./actions";
import {ClientData, emptyClientData} from "../models/ClientData";

export const coursesReducer: Reducer<Course[], PayloadAction<Course | number>> = (courses = [], action) => {
    switch (action.type) {
        case ADD_COURSE_ACTION:
            coursesService.add(action.payload as Course);
            break;
        case REMOVE_COURSE_ACTION:
            coursesService.remove(action.payload as number);
            break;
        case UPDATE_COURSE_ACTION:
            const course: Course = action.payload as Course;
            coursesService.update(course.id, course);
            break;
        default:
            return courses;
    }
    return coursesService.get();
}

export const clientDataReducer: Reducer<ClientData, PayloadAction<ClientData>> = (clientData = emptyClientData, action): ClientData => {
    return action.type === AUTH_ACTION ? action.payload : clientData;
}