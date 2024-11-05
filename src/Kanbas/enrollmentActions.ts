import { enrollCourse, unenrollCourse } from './EnrollmentReducer'; // 确保路径正确

export const enrollInCourse = (userId: string, courseId: string) => enrollCourse({ userId, courseId });

export const unenrollFromCourse = (userId: string, courseId: string) => unenrollCourse({ userId, courseId });

  