// enrollmentReducer.ts
interface Enrollment {
    user: string;
    course: string;
  }
  
  interface EnrollmentState {
    enrollments: Enrollment[];
  }
  
  interface EnrollmentAction {
    type: string;
    payload: string; // 用于表示课程 ID
    userId: string;  // 用于表示用户 ID
  }
  
  const initialState: EnrollmentState = {
    enrollments: [],
  };
  
  export default function enrollmentReducer(
    state = initialState,
    action: EnrollmentAction
  ): EnrollmentState {
    switch (action.type) {
      case "ENROLL_COURSE":
        return {
          ...state,
          enrollments: [
            ...state.enrollments,
            { user: action.userId, course: action.payload },
          ],
        };
  
      case "UNENROLL_COURSE":
        return {
          ...state,
          enrollments: state.enrollments.filter(
            (enrollment) =>
              enrollment.course !== action.payload || enrollment.user !== action.userId
          ),
        };
  
      default:
        return state;
    }
  }
  