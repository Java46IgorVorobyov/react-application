import AuthServiceClient from "../service/AuthServiceClient";
import CoursesServiceRest from "../service/CoursesServiceRest";
import AuthServiceJwt from "../service/AuthServiceJwt";
import CoursesServiceFirebase from "../service/CoursesServiceFirebase";
import courseData from "../config/courseData.json"
import AuthServiceFirebase from "../service/AuthServiceFirebase";

export const coursesService = new CoursesServiceFirebase(courseData.minId, courseData.maxId);
export const authService = new AuthServiceFirebase();
// export const coursesService = new CoursesServiceRest('http://localhost:3500/courses');
// export const authService = new AuthServiceJwt('http://localhost:3500/login');
