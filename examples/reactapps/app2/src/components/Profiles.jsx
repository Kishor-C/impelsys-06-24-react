/*
 this file will have following components
 1. ProfileRegistration
 2. ProfileLogin
 3. ProfileSuccess
 4. AddContacts
 5. EditContacts
 6. ViewContact & DeleteContact
 and etc
*/
import { useState } from "react";
import { Link, Routes, Route, useNavigate, useParams } from "react-router-dom";
// ContactApp is the only component that is added to the root component
// this component will have entire page structure
export function ContactApp() {
  return (
    <>
      <Routes>
        <Route path="" element={<ProfileLogin />}></Route>
        <Route path="/signup" element={<ProfileRegistration />}></Route>
        <Route path="/signin" element={<ProfileLogin />}></Route>
        <Route path="/dashboard/:id/*" element={<ProfileSuccess />}></Route>
      </Routes>
    </>
  );
}
// Dasboard component that will have sub routes and reads path parameters
export function ProfileSuccess() {
  let { id } = useParams();
  let fakeProfile = {
    name: "Fake User",
    dob: "2001-12-22",
    email: "fake@g",
    phone: 9980023,
    imageURL:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALoAAACUCAMAAAATdsOFAAAAMFBMVEXk5ueutLepr7LS1tjn6eq5vsHFycvh4+Te4OLQ09W8wcPr7e7a3d7BxsizubvN0NKXgi4zAAAEVElEQVR4nO2cXZejIAxAFYMon///3y7admunUwskmsw53pfdM093MhECBLru4uLi4uLiQh4Axkx+mNOYSYOfTP4Rt1QJ0Pl51L160utx9uLtwU3Jxmz7ilLRJiPa3ZnQfyYYxy34Gfsz3D+CHzqRkQeT3hLlzb2XmDbg9TfxVd56ae4uxQLxlSQr450tFc+BH0XFXZebZ3ctJ+GnojTfuFsp7qbSfHHndr4B1eaLu4Sw13yhG0b+cQbG+pivJO64g28Tz3hmdVM1LG5Rmte8OV0Wd95pdWo3z+6c5i5i1HvN96WCR5n3/cDmDsXV4gfYJlUYkOZ8YYe2eXSDGpnMPTZf+j5OPOoJbd6rgUX92/q/CJ4Ptb162aBYvtOBIOhMGYMoXzbqgSHs6PnoDkcNRhF0nmRHFY0bdYYVx0ykPp8edhhJzDnW140bAe/Y89WJBhgOdSJzhqUSmXq81C/1GhhynWqE0de4Xg4EmkKAY7c6EdUwDJvV2J2vhzrHXjWROoM5kJjzrJL2mjDKYTkPI1lrqJnBnGgfxnCoG4pJien8lGBkV4nFHHHu+IRnp7fr8PvrgcmcYJf6/J2Mh/ufPUvqADu0swUdvVQ6f233BFB77Iq1+Q6z4FDnr49emBBfKqv48qU2mzMd3m1oTRmm094X2syZG3nuNKlzS9+YGsxZyvRfGGqHmSinnbqu/FWCzPOKqa8YZ5jaMT7hinsdZPTEboGy3nsVhXXeL4AvCLwKktL8P5BHmi83ZLSXeUVmkZ93PlcV+auWHcD5T02+1juhEX8AzqSg43IH7xbr/G/UIU3SxVcAjJ/TGOxCGNPsJ+l3BzdAdjVTxpj1/3+HbOuegPhcWYNrjB9yruic7euV05ztUeesmYf8B5B4ZRaW9M7O4XFF9sewePtZtPk38JMgf3DLvV67WH+dTJVaRpvBSLDP3kOIsaZwzOGPln2wzHO/rrF++QXGiW2vtDOD/Z4jO/K5ivQMqQNmGHEXNW6ht/PJ8mCSbUyUt9Dr8cQ62MFI1VFyw07nLD+g+379uxZlT1iugtkryRHy4eBVyDIYHiHeHz5YOk/VevSrfDzufMYR3CvZR3eHfK9QtU3UyDE9SURN39/cyV93gN0nSEjdI+3lNoc5MqqGsgfPEbWoFUK4KwlEfYHlkL1Mcbp5rzTJ9ER2KaPKPRLE3VE1wNa6o0sazG17HNi4U9wpbURp1Ckfwe1phDuqu+rUmejdHVHQkN0MaHVvrgnKT+UOozHdcS1GNLSVBMCb6HfaFk4cs+gbLSfbJG2veJqafvm/0RVVHXb0+ylUqOorV9xD+hNVWf+KCXpffV3MNT8sdQB12S5jeLlT9cADy8roI1XVb/tDZIdQUYVRvLdDSM2zm4xro1+pOTjgWUp/pnwfcpKV6hVLDiGV15PyGkzSVHojFA+P52ylVxBLzWleOSKl1NxYJY3ihPGDMObyUgCkUWx+cXEhiX/21UCtIhkRiAAAAABJRU5ErkJggg==",
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-4">
          <img src={fakeProfile.imageURL} width="100" height="100" />
          <p>Name:{fakeProfile.name}</p>
          <p>Birthday:{fakeProfile.dob}</p>
          <p>Phone: {fakeProfile.phone}</p>
          <p>Id: {id}</p>
          <p>Email: {fakeProfile.email}</p>
        </div>
        <div className="col-8">
          <h3>Sub Routes</h3>
        </div>
      </div>
    </div>
  );
}

// View Contacts Component
export function ViewContacts() {
  // fake list - later we are going to change this code a bit when we access DB
  let fakeContacts = [
    { id: 1, name: "Virat", phone: 9988998899 },
    { id: 2, name: "Rohit", phone: 8877998899 },
    { id: 3, name: "Sachin", phone: 7788998899 },
    { id: 4, name: "Dhoni", phone: 6666998899 },
    { id: 5, name: "Yuvraj", phone: 66558998899 },
  ];
  // display the list in a table that will have name, phone, delete button-danger
  return (
    <div className="w-50">
      <h2 className="text-primary">List of Contacts</h2>
      <hr />
      <input
        type="text"
        placeholder="Filter by name"
        className="w-50 form-control form-control-lg"
      ></input>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Phone</th>
            <th>X</th>
          </tr>
        </thead>
        <tbody>
          {fakeContacts.map((value, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{value.name}</td>
              <td>{value.phone}</td>
              <td>
                <button className="btn btn-danger">Delete {value.id}</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
// Login Component
export function ProfileLogin() {
  // create a form that renders email and password to login
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let nav = useNavigate();
  let handleLogin = (e) => {
    e.preventDefault();
    let randomId = parseInt(Math.random() * 123445);
    nav(`/dashboard/${randomId}`); // matches to the /dasboard/:id/*
  };
  return (
    <div className="w-25">
      <h3 className="text-primary">Login Form</h3>
      <hr />
      <p className="text-danger">'*' means mandatory fields</p>
      <form onSubmit={handleLogin}>
        <label>Email</label>
        <span className="text-danger"> * </span>
        <input
          required
          type="email"
          placeholder="Enter Email"
          className="form-control form-control-lg"
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <label>Password</label>
        <span className="text-danger"> * </span>
        <input
          required
          type="password"
          placeholder="Enter Password"
          className="form-control form-control-lg"
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <input
          type="submit"
          value="Sign in"
          className="btn btn-primary btn-lg"
        />
        <br />
        <br />
        <div>
          <Link to="/signup" className="btn btn-info btn-lg w-100">
            Sign Up
          </Link>
        </div>
      </form>
    </div>
  );
}
// Registration Component
export function ProfileRegistration() {
  let [id, setId] = useState("");
  let [name, setName] = useState("");
  let [password, setPassword] = useState("");
  let [email, setEmail] = useState("");
  let [phone, setPhone] = useState("");
  let [dob, setDob] = useState("");
  let icons = [
    "data:image/jpeg;base64,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",
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pny7AAAAYFBMVEVIWpb///9dbaFDVpRFWJX6+/3EyNpLXZiCjbQzSY6rsctBVJO5vtN4hK5zf6vr7PM6T5AsRIvM0N7j5e3x8vakq8dSY5uZocFjcaMiPYjW2eVpd6bc3+mOl7qHkrezuNBtdYtMAAADrklEQVR4nO3dWXeiQBCGYSINiq3YyCKu/P9/OZnMnLlIBqur2Ko533uVGzz9xChLNyT6uGTRKir2H1F1XXoUI2VcEqXF0qMYq+s5ermlBzFW7hJtzNKDGCubR9ulxzBapl16BGO2WXoAYwaM1oDRGjBaA0ZrwGgNGK0BozVgtKYKE1uXZUWR/a0o/vzsPrOxx6UKNZjYFVmTP+suPf8rTQ9dt68vz92xbewnLn7/GjowNrtun4dHeaqSj28lSVJV1aksy8ft3L7XKMAYd93W5U/Gfzrat6+0PMYV+c0Hoh9jbPw6eUq0Y6zJH/4U1ZjYtQcORTPGRs+SZ9GLsc3e93OvHmM3KduiFWM3ZzZFKybeSiw6MSZLJRadmIL5lawZk71kFo0Y2wgtGjHuth5MduHvYLRibMM9iFGMKfhHMWoxtmUd9OvGZLX8jdGGMY3oOEYnxr2q1WCM7QZYlGHiVrzD1IdxrwEff2UYY+shFmWYxv88JqlO36tyTZdn47vfoUyV1s/dMf9R8/7l58XY3Ocj83i1jbHO/oyY1pgZs/OwXGIbE3MXPc2KMeZCW+5OvAJ2XsyW3mXuBqxMnhdDH5h1kewv7KtZMXFD7f+rfMiS8ZnfGeqbOW2GLBmf953ZUIfMl0Fr+WfGELuZatiNCbowZf7+4ItIF+ZGzI0T6cKcmxVh0u2g+1+AkQYMI2CkAcMIGGnAMAJGGjCMgJEGDCNgpAHDCBgi85+Zla8ciend9HfkXSdTYO67vp7UpabeLb+iHvcxPsYY2fpLuoqYn50EI1yASfa4rwhz3sx+Z9N0mAP1XRcSpqOuqoeEqan5joAwCTkTFRCmIieiA8KU1G4mJMytXRHmTM5EB4RJyfnOgDAd+SDGcDBJvSJMRS94CAdzotc7hYPxWPAQDua2WRHmTK3QDApDPyI3HMxhRRiP3Uw4mOpJL0ULBnMiTwACwpTkCUBAmIfH2u1wMB7PyA4G4/PA71AwCX02ExDG5xn5E2CiV7fvibqv4dG34X5/91iKOsH8jHFZT8WWmmzq3TTzWfCMaUBpwDACRhowjICRBgwjYKQBwwgYacAwAkYaMIyAkQYMI2CkAcMIGGnAMAJGGjCMgJEGDCNgpAHDCBhpwDACRhowjICRBgwjYKQBwwgYacAwAkYaMIyAkQYMI2CkAcMIGGnAMAJGGjCMNtF2rKHSTYwxbdQO+mWwmhhjj5HH3dxjNTHG1ZHPrakjNTHm+ogS+X+v4jYtxkTJLxKYTjvh4S4yAAAAAElFTkSuQmCC",
    "data:image/png;base64,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",
  ];
  // event handler for form submit - <form onSubmit={handleSubmit}>
  let handleSubmit = (e) => {
    e.preventDefault();
    // data must be submitted to the server and next component must be loaded
    alert("form submission is pending");
  };
  return (
    <div className="w-25">
      <h3 className="text-primary">Profile Registration</h3>

      <hr />
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="number"
            placeholder="Enter Id"
            className="form-control form-control-lg"
            onChange={(e) => setId(e.target.value)}
          ></input>
        </div>
        <br />
        <div>
          <input
            type="text"
            placeholder="Enter Name"
            className="form-control form-control-lg"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <br />
        <div>
          <input
            type="password"
            placeholder="Enter Password"
            className="form-control form-control-lg"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <br />
        <div>
          <input
            type="email"
            placeholder="Enter Email"
            className="form-control form-control-lg"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <br />
        <div>
          <input
            type="number"
            placeholder="Enter Phone no"
            className="form-control form-control-lg"
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <br />
        <div>
          <h5>Select Birthday</h5>
          <input
            type="date"
            className="form-control form-control-lg"
            onChange={(e) => setDob(e.target.value)}
          />
        </div>
        <br />
        <div>
          <input
            type="submit"
            className="btn btn-primary btn-lg"
            value="Sign Up"
          ></input>
        </div>
      </form>
      <div>
        <label>Already have an account click on Sign in</label>
        <div>
          <Link to="/signin" className="btn btn-info btn-lg w-100">
            Sign in
          </Link>
        </div>
      </div>
      <div>
        {icons.map((value, index) => (
          <img key={index} src={value} width="25" height="25" className="p-1" />
        ))}
      </div>
    </div>
  );
}
