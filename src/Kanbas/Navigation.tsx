/* import { Link } from "react-router-dom";
export default function KanbasNavigation() {
  return (
    <div id="wd-kanbas-navigation">
      <a href="https://www.northeastern.edu/" id="wd-neu-link" target="_blank">Northeastern</a><br/>
      <Link to="/Kanbas/Account" id="wd-account-link">Account</Link><br/>
      <Link to="/Kanbas/Dashboard" id="wd-dashboard-link">Dashboard</Link><br/>
      <Link to="/Kanbas/Courses" id="wd-course-link">Courses</Link><br/>
      <Link to="/Kanbas/Calendar" id="wd-calendar-link">Calendar</Link><br/>
      <Link to="/Kanbas/Inbox" id="wd-inbox-link">Inbox</Link><br/>
      <Link to="/Labs" id="wd-labs-link">Labs</Link><br/>
    </div>
);} */
import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";
import { IoSettingsOutline } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";

export default function KanbasNavigation() {
  const { pathname } = useLocation();
  const links = [
    { label: "Dashboard", path: "/Kanbas/Dashboard", icon: AiOutlineDashboard },
    { label: "Courses",   path: "/Kanbas/Dashboard", icon: LiaBookSolid },
    { label: "Calendar",  path: "/Kanbas/Calendar",  icon: IoCalendarOutline },
    { label: "Inbox",     path: "/Kanbas/Inbox",     icon: FaInbox },
    { label: "Labs",      path: "/Labs",             icon: LiaCogSolid },
  ];

  return (
    <div id="wd-kanbas-navigation" style={{ width: 120 }} 
         className="list-group rounded-0 position-fixed bottom-0 top-0 d-none d-md-block bg-black z-2">
      <a id="wd-neu-link" target="_blank" 
        href="https://www.northeastern.edu/"
        rel="noopener noreferrer" 
        className="list-group-item bg-black border-0 text-center">
        <img src="/images/NEU.png" width="75px" alt="Northeastern University Logo" /></a><br />
        <Link to="/Kanbas/Account" className={`list-group-item text-center border-0 bg-black
            ${pathname.includes("Account") ? "bg-white text-danger" : "bg-black text-white"}`}>
            <FaRegCircleUser className={`fs-1 ${pathname.includes("Account") ? "text-danger" : "text-white"}`} />
            <br />
          Account
        </Link>
        {links.map((link, i) => (
          <Link key={i} to={link.path} className={`list-group-item bg-black text-center border-0
                ${pathname.includes(link.label) ? "text-danger bg-white" : "text-white bg-black"}`}>
            {link.icon({ className: "fs-1 text-danger"})}
            <br />
            {link.label}
          </Link>
        ))}
    </div>
);}
