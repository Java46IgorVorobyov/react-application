import React from 'react';
import {Course, createCourse} from "../../models/Course";
import courseData from "../../config/courseData.json";
import {Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField} from "@mui/material";
import {getRandomNumber} from "../../util/random";

type Props = {
    submitFn: (course: Course) => void;
}

const CourseForm: React.FC<Props> = ({submitFn}) => {
    const {courses, minHours, maxHours} = courseData;
    const initialCourse: Course = createCourse(getRandomNumber(100000, 999999), '', 'Yosef', 10, 5000, new Date());
    const [course, setCourse] = React.useState(initialCourse);

    function getCourseItems(courses: string[]): React.ReactNode {
        return courses.map((course) => <MenuItem value={course} key={course}>{course}</MenuItem>);
    }

    function onSubmit(event: any) {
        event.preventDefault();
        console.log(course);
        submitFn(course);
    }

    function handlerCourse(event: any) {
        const courseCopy = {...course};
        courseCopy.name = event.target.value;
        setCourse(courseCopy);
    }

    function handlerHours(event: any) {
        const courseCopy = {...course};
        courseCopy.hours = +event.target.value;
        setCourse(courseCopy);
    }

    return <form onSubmit={onSubmit}>
        <Grid container>
            <Grid item xs={12} sm={6}>
                <FormControl fullWidth required>
                    <InputLabel id="course-select-label">Course Name</InputLabel>
                    <Select
                        labelId="course-select-label"
                        id="demo-simple-select"
                        label="Course Name"
                        value={course.name}
                        onChange={handlerCourse}
                    >
                        <MenuItem value="">None</MenuItem>
                        {getCourseItems(courses)}
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField type="number" label="Hours" fullWidth required value={course.hours || ''}
                           inputProps={{
                               min: `${minHours}-01-01`,
                               max: `${maxHours}-01-31`,
                           }} onChange={handlerHours}/>
            </Grid>
            <Grid item xs={4}>
                <Button type="submit">Submit</Button>
            </Grid>
            <Grid item xs={4}>
                <Button type="reset">Reset</Button>
            </Grid>
        </Grid>
    </form>
}

export default CourseForm;

