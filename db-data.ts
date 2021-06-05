export const USERS: any = [
  {
    id: 1,
    email: 'george.bluth@reqres.in',
    first_name: 'George',
    last_name: 'Bluth',
    avatar: 'https://reqres.in/img/faces/1-image.jpg',
  },
  {
    id: 2,
    email: 'janet.weaver@reqres.in',
    first_name: 'Janet',
    last_name: 'Weaver',
    avatar: 'https://reqres.in/img/faces/2-image.jpg',
  },
  {
    id: 3,
    email: 'emma.wong@reqres.in',
    first_name: 'Emma',
    last_name: 'Wong',
    avatar: 'https://reqres.in/img/faces/3-image.jpg',
  },
  {
    id: 4,
    email: 'eve.holt@reqres.in',
    first_name: 'Eve',
    last_name: 'Holt',
    avatar: 'https://reqres.in/img/faces/4-image.jpg',
  },
  {
    id: 5,
    email: 'charles.morris@reqres.in',
    first_name: 'Charles',
    last_name: 'Morris',
    avatar: 'https://reqres.in/img/faces/5-image.jpg',
  },
  {
    id: 6,
    email: 'tracey.ramos@reqres.in',
    first_name: 'Tracey',
    last_name: 'Ramos',
    avatar: 'https://reqres.in/img/faces/6-image.jpg',
  },
];

// export function findAllCourses() {
//   return <any[]>Object.values(COURSES);
// }

// export function findCourseById(courseId: number) {
//   return COURSES[courseId];
// }

// export function findLessonsForCourse(courseId: number) {
//   return Object.values(LESSONS).filter((lesson) => lesson.courseId == courseId);
// }

// export function authenticate(email: string, password: string) {
//   const user: any = Object.values(USERS).find((user) => user.email === email);

//   if (user && user.password == password) {
//     return user;
//   } else {
//     return undefined;
//   }
// }
