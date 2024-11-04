import { useParams, useNavigate } from "react-router-dom";
import AssignmentsControls from "./AssignmentsControls";
import { BsGripVertical } from "react-icons/bs";
import AssignControlButtons from "./AssignControlButtons";
import { PiNotePencil } from "react-icons/pi";
import { useDispatch, useSelector } from "react-redux";
import { FaTrash } from "react-icons/fa6";
import LessonControlButtons from "./AssignmentsControlButtons";
import { deleteAssignment } from "./reducer";
import AssignmentEdit from "./AssignmentEdit";

export default function Assignments() {
  const { cid } = useParams();
  const navigate = useNavigate();
  const assignments = useSelector(
    (state: any) => state.assignmentReducer
  ).assignments.filter((assignment: any) => assignment.course === cid);
  const dispatch = useDispatch();

  // 修改 handleRemoveAssignment 函数以接收作业的 ID
  const handleRemoveAssignment = (assignmentId: any) => {
    dispatch(deleteAssignment(assignmentId));
  };

  return (
    <div id="wd-assignments">
      <AssignmentsControls onAddAssignmentClick={() => navigate(`/Kanbas/Courses/${cid}/Assignments/new`)} />
      <ul id="wd-assignment-list" className="list-group rounded-0">
        <li
          id="wd-assignments-title"
          className="wd-module list-group-item p-0 fs-5 d-flex justify-content-between align-items-center bg-light"
        >
          <div className="d-flex">
            <BsGripVertical className="me-2 fs-3" />
            <div className="fw-bold" style={{ color: 'black', fontSize: '1.15em' }}>ASSIGNMENTS</div>
          </div>
          <div className="d-flex align-items-center">
            <AssignControlButtons />
          </div>
        </li>

        {assignments.map((assignment: any, index: any) => (
          <li
            key={assignment._id}
            id={`wd-assignment-${index + 1}`}
            style={{ borderLeft: "5px solid green", paddingLeft: "10px" }}
            className="list-group-item wd-assignment-list-item d-flex align-items-center"
          >
            <BsGripVertical className="me-1 fs-3 align-middle" />
            <PiNotePencil className="me-3 fs-3 align-middle text-success" />
            <div>
              <a
                id={`wd-assignment-link-${index + 1}`}
                className="wd-assignment-link fw-bold"
                href={`#/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}
                style={{ color: 'black', textDecoration: 'none', fontSize: '1.1em' }}
              >
                {assignment.title}
              </a>
              <br />
              <span id={`wd-assignment-${index + 1}-details`} style={{ fontSize: '1em' }}>
                <span style={{ color: 'red' }}>Multiple Modules</span> |{" "}
                <span>
                  <b>Not available until</b> {assignment.availableFromDate}
                </span>{" "}
                | <br />
                <span>
                  <b>Due</b> {assignment.dueDate}
                </span>{" "}
                | <span>{assignment.points}</span>
              </span>
            </div>
            <div className="ms-auto">
              <FaTrash
                className="text-danger me-2 mb-1"
                data-bs-toggle="modal"
                data-bs-target={`#deleteModal-${assignment._id}`} // 为每个作业设置唯一的模态框ID
                style={{ fontSize: '1.1em' }}
              />
              <LessonControlButtons />
            </div>
            <AssignmentEdit 
              assignmentId={assignment._id} // 传递作业的 ID
              removeAssignment={() => handleRemoveAssignment(assignment._id)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
