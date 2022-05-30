import {Course} from "../models/Course";
import {combineReducers} from "redux";
import {clientDataReducer, coursesReducer} from "./reducers";
import {configureStore} from "@reduxjs/toolkit";
import {ClientData} from "../models/ClientData";

export type StateType = {
    courses: Course[],
    clientData: ClientData,
}

const reducer = combineReducers<StateType>({
    courses: coursesReducer as any,
    clientData: clientDataReducer as any,
})

export const store = configureStore({reducer});
export const coursesSelector = (state: StateType): Course[] => state.courses;