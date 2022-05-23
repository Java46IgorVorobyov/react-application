import React from "react";
import {useDispatch} from "react-redux";
import {addCourse} from "../../redux/actions";
import CourseForm from "../forms/CourseForm";
import {Course} from "../../models/Course";

const AddCourse: React.FC = () => {
    const dispatch = useDispatch();
    function onSubmit(course: Course) {
        dispatch(addCourse(course));
    }
    return <CourseForm submitFn={onSubmit}/>
}
export default AddCourse;