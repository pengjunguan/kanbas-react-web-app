import { IoEllipsisVertical } from "react-icons/io5";
import { BsPlus } from "react-icons/bs";

export default function AssignControlButtons() {
  return (
    <div className="d-flex align-items-center">
      <div
        className="me-3 border border-grey rounded-pill p-2 m-2"
        style={{
          padding: "5px 20px", 
          borderRadius: "20px", 
          border: "1px solid #ddd", 
          backgroundColor: "#f9f9f9",
        }}
      >
        40% of Total
      </div>
      <BsPlus />
      <IoEllipsisVertical className="fs-4 me-2" />
    </div>
  );
}