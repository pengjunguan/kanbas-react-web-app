import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import PeopleDetails from "./Details";
import { useSelector } from "react-redux";
import { findUsersForCourse } from "../client";

//import * as db from "../../Database"; 

export default function PeopleTable({ users = [] }: { users?: any[] }) {

  //const { cid } = useParams(); 
  //const { users, enrollments } = db; 
  const { cid } = useParams(); 
  const [students, setStudents] = useState<any[]>([]); 

  const currentUser = useSelector((state: any) => state.accountReducer.currentUser); // 获取当前用户
  const isAdmin = currentUser?.role === "ADMIN"; 
  const isFacultyOrStudentOrTA =
    currentUser?.role === "FACULTY" || currentUser?.role === "STUDENT" || currentUser?.role === "TA";
  
    useEffect(() => {
      const fetchStudents = async () => {
        if (cid && (isFacultyOrStudentOrTA || isAdmin)) {
          const users = await findUsersForCourse(cid);
          setStudents(users);
        }
      };
      fetchStudents();
    }, [cid, isFacultyOrStudentOrTA, isAdmin]);
    
    const displayedUsers = students; 
    

    return (
      <div id="wd-people-table">
        <PeopleDetails />
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>Login ID</th>
              <th>Section</th>
              <th>Role</th>
              <th>Last Activity</th>
              <th>Total Activity</th>
            </tr>
          </thead>
          <tbody>
            {displayedUsers.map((user: any) => (
              <tr key={user._id}>
                <td className="wd-full-name text-nowrap">
                  <Link
                    to={`/Kanbas/Account/Users/${user._id}`}
                    className="text-decoration-none"
                  >
                    <FaUserCircle className="me-2 fs-1 text-secondary" />
                    <span className="wd-first-name">{user.firstName}</span>{" "}
                    <span className="wd-last-name">{user.lastName}</span>
                  </Link>
                </td>
                <td className="wd-login-id">{user.loginId}</td>
                <td className="wd-section">{user.section}</td>
                <td className="wd-role">{user.role}</td>
                <td className="wd-last-activity">{user.lastActivity}</td>
                <td className="wd-total-activity">{user.totalActivity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }