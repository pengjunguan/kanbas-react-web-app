import { SlMagnifier } from "react-icons/sl";
export default function AssignmentsControls() {
    return (
        <div id="wd-assignments" className="d-flex align-items-center">
        <div className="input-group me-3" style={{ width: '300px' }}>
            <div className="input-group-text bg-white border-end-0">
                <SlMagnifier />
            </div>
            <input
                id="wd-search-assignment"
                type="text"
                placeholder="Search..."
                className="form-control border-start-0"
            />
        </div>
            <button
                id="wd-add-assignment-group"
                className="btn btn-outline-secondary me-1"
            >
                + Group
            </button>
            <button
                id="wd-add-assignment"
                className="btn btn-danger"
            >
                + Assignment
            </button>
        </div>
    );
};