import { FaRegCalendarAlt } from "react-icons/fa";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import * as db from "../../Database";

export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  const navigate = useNavigate();
  const assignments = db.assignments;

  const assignment = assignments.find((a) => a._id === aid);

  // Set up state for editable fields, ensuring course has a fallback value
  const [assignmentData, setAssignmentData] = useState({
    title: assignment ? assignment._id : "Assignment",
    description: assignment ? "The assignment is available online" : "",
    points: assignment ? 100 : 0,
    dueDate: "May 13, 2024, 11:59 PM",
    availableFrom: "May 6, 2024, 12:00 PM",
    availableUntil: "",
    course: cid || "default-course", // Fallback to "default-course" if cid is undefined
  });

  // Define the type for fields you expect to update
  type AssignmentField = "title" | "description" | "points" | "dueDate" | "availableFrom" | "availableUntil" | "course";

  // Handle input change for each field with explicit types
  const handleInputChange = (field: AssignmentField, value: string | number) => {
    setAssignmentData(prevData => ({
      ...prevData,
      [field]: value,
    }));
  };

  // Function to handle saving the assignment
  const handleSave = () => {
    // Ensure _id is generated and course has a valid string
    assignments.push({
      _id: `A${assignments.length + 1}`, // Generate a new ID based on the array length
      ...assignmentData,
    });
    // Navigate back to the assignments screen
    navigate(`/Kanbas/Courses/${cid}/Assignments`);
  };

  // Function to handle canceling the edit
  const handleCancel = () => {
    // Navigate back to the assignments screen without saving
    navigate(`/Kanbas/Courses/${cid}/Assignments`);
  };

  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name">Assignment Name</label><br /><br />
      <input
        id="wd-name"
        className="form-control"
        value={assignmentData.title}
        onChange={(e) => handleInputChange("title", e.target.value)}
      /><br /><br />

      <textarea
        id="wd-description"
        className="form-control"
        cols={45}
        rows={9}
        value={assignmentData.description}
        onChange={(e) => handleInputChange("description", e.target.value)}
      /><br /><br />

      <div className="row justify-content-end">
        <div className="col-md-9 d-flex align-items-top mb-3">
          <label htmlFor="wd-points" className="me-3">Points</label>
          <input
            id="wd-points"
            className="form-control"
            value={assignmentData.points}
            onChange={(e) => handleInputChange("points", Number(e.target.value))}
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
                  onChange={(e) => handleInputChange("dueDate", e.target.value)}
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
                    onChange={(e) => handleInputChange("availableFrom", e.target.value)}
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
                    value={assignmentData.availableUntil}
                    onChange={(e) => handleInputChange("availableUntil", e.target.value)}
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
        <button onClick={handleCancel} className="btn btn-secondary me-2">
          Cancel
        </button>
        <button onClick={handleSave} className="btn btn-danger">
          Save
        </button>
      </div>
    </div>
  );
}



