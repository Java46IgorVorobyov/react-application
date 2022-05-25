import CoursesServiceArray from "../service/CoursesServiceArray";
import AuthServiceClient from "../service/AuthServiceClient";
import CoursesServiceRest from "../service/CoursesServiceRest";

export const coursesService = new CoursesServiceArray();

export const authService = new AuthServiceClient();

export const URL = 'http://localhost:3500/courses';

export const courseProvider = new CoursesServiceRest(URL);
