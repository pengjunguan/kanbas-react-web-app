import { FaRegCalendarAlt } from "react-icons/fa";
import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import * as db from "../../Database";  

export default function AssignmentEditor() {
  const { cid, aid } = useParams(); 
  const assignments = db.assignments;
  
 
  const assignment = assignments.find((a) => a._id === aid);

  const [assignmentData] = useState({
    title: assignment ? "A1":"",
    description: assignment ? "The assignment is available online" : "",
    points: assignment ? 100 : 0,
    dueDate: "May 13, 2024, 11:59 PM",
    availableFrom: "May 6, 2024, 12:00 PM",
  });

  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name">Assignment Name</label><br /><br />
      <input
        id="wd-name"
        className="form-control"
        value={assignmentData.title}
      /><br /><br />

      <textarea
        id="wd-description"
        className="form-control"
        cols={45}
        rows={9}
        value={assignmentData.description}
      /><br /><br />

      <div className="row justify-content-end">
        <div className="col-md-9 d-flex align-items-top mb-3">
          <label htmlFor="wd-points" className="me-3">Points</label>
          <input
            id="wd-points"
            className="form-control"
            value={assignmentData.points}
            style={{ width: "100%" }} 
          />
        </div>

        <div className="col-md-9 d-flex align-items-top mb-3">
          <label htmlFor="wd-assign-to" className="me-3">Assign</label>
          <div className="border rounded p-3" style={{ width: "100%" }}>
            <div className="mb-3">
              <label htmlFor="wd-assign-to" className="form-label"><b>Assign to</b></label>
              <input
                id="wd-assign-to"
                className="form-control"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="wd-due-date" className="form-label"><b>Due</b></label>
              <div className="input-group">
                <input
                  id="wd-due-date"
                  type="text"
                  className="form-control"
                  value={assignmentData.dueDate}
                />
                <span className="input-group-text">
                  <FaRegCalendarAlt />
                </span>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6">
                <label htmlFor="wd-available-from" className="form-label"><b>Available from</b></label>
                <div className="input-group">
                  <input
                    id="wd-available-from"
                    type="text"
                    className="form-control"
                    value={assignmentData.availableFrom}
                  />
                  <span className="input-group-text">
                    <FaRegCalendarAlt />
                  </span>
                </div>
              </div>
              <div className="col-md-6">
                <label htmlFor="wd-available-until" className="form-label"><b>Until</b></label>
                <div className="input-group">
                  <input
                    id="wd-available-until"
                    type="text"
                    className="form-control"
                  />
                  <span className="input-group-text">
                    <FaRegCalendarAlt />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr />
      <div className="d-flex justify-content-end mt-3">
        <Link to={`/Kanbas/Courses/${cid}/Assignments`} className="btn btn-secondary me-2">
          Cancel
        </Link>
        <Link to={`/Kanbas/Courses/${cid}/Assignments`} className="btn btn-danger">
          Save
        </Link>
      </div>
    </div>
  );
}


