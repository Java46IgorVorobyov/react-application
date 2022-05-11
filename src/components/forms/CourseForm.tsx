import React from 'react';
import {Course, createCourse} from "../../models/Course";
import courseData from "../../config/courseData.json";
import {Box, Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField} from "@mui/material";
import {getRandomNumber} from "../../util/random";

type Props = {
    submitFn: (course: Course) => void;
}

const CourseForm: React.FC<Props> = ({submitFn}) => {
    const {courses, minHours, maxHours, minYear, maxYear, minCost, maxCost} = courseData;
    const initialCourse: Course = createCourse(getRandomNumber(100000, 999999), '', '', 0, 0, new Date());
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
        setCourse({...courseCopy});
    }

    function handlerLecturer(event: any) {
        const courseCopy = {...course};
        courseCopy.lecturer = event.target.value;
        setCourse(courseCopy);
    }

    function handlerOpeningDate(event: any) {
        const courseCopy = {...course};
        courseCopy.openingDate = new Date(event.target.value);
        setCourse(courseCopy);
    }

    function handlerCost(event: any) {
        const courseCopy = {...course};
        courseCopy.cost = +event.target.value;
        setCourse(courseCopy);
    }

    return <form onSubmit={onSubmit}>
        <Grid container spacing={3} display={"flex"} justifyContent={"center"} p={2}>
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
                <FormControl fullWidth required>
                    <InputLabel id="lecturer-label">Lecturer</InputLabel>
                    <Select
                        labelId="lecturer-label"
                        id="demo-simple-select"
                        label="Lecturer"
                        value={course.lecturer}
                        onChange={handlerLecturer}
                    >
                        <MenuItem value="">None</MenuItem>
                        {getCourseItems(courseData.lectors)}
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField type="number" label="Hours" fullWidth required
                           inputProps={{
                               min: `${minHours}`,
                               max: `${maxHours}`,
                           }} onChange={handlerHours}/>
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField type="number" label="Duration" required fullWidth value={course.cost || ''}
                           inputProps={{
                               min: `${minCost}`,
                               max: `${maxCost}`,
                           }} onChange={handlerCost}/>
            </Grid>
            <Grid container item xs={12} sm={6} justifyContent={"center"}>
                <TextField type="date" label="Opening Date" required fullWidth
                           inputProps={{
                               min: `${minYear}-01-01`,
                               max: `${maxYear}-12-31`,
                           }} onChange={handlerOpeningDate} InputLabelProps={{shrink: true}}/>
            </Grid>
            {/*<Grid item xs={6}>*/}
            {/*    <Button type="submit">Submit</Button>*/}
            {/*    <Button type="reset">Reset</Button>*/}
            {/*</Grid>*/}

            {/*<Grid item xs={6}>*/}
            {/*    <Button type="reset">Reset</Button>*/}
            {/*</Grid>*/}
        </Grid>
        <Grid container item justifyContent={"center"}>
            <Button type="submit">Submit</Button>
            <Button type="reset">Reset</Button>
        </Grid>
    </form>
}

export default CourseForm;

