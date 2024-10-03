import { Link } from "react-router-dom";
export default function Profile() {
  return (
    <div id="wd-profile-screen">
      <h3>Profile</h3>
      <input id="wd-username" value="alice" placeholder="username" className="form-control"/><br/>
      <input id="wd-password" value="123" placeholder="password"
             type="password" className="form-control"/><br/>
      <input id="wd-firstname" value="Alice" placeholder="First Name" className="form-control"/><br/>
      <input id="wd-lastname" value="Wonderland" placeholder="Last Name" className="form-control"/><br/>
      <input id="wd-dob" type="date" className="form-control"/><br/>
      <input id="wd-email" value="alice@wonderland" type="email" className="form-control"/><br/>
      <input id="wd-user" value="User" type="user" className="form-control"/><br/>
      <br/>
      <Link id="wd-signup-btn" to="/Kanbas/Account/Signin" className="btn btn-danger w-100">Sign out</Link>
    </div>
);}
