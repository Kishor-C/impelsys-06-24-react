import React, { useState } from "react";

export function MyButton(props) {
  let [counter, setCounter] = useState(0);
  let handleClick = () => {
    setCounter(counter + 1);
  };
  return (
    <div>
      <button className={props.type} onClick={handleClick}>
        {props.name} {counter}
      </button>
    </div>
  );
}

export class Simple extends React.Component {
  // <Simple message = "some text" />
  render() {
    let message = this.props.message;
    return (
      <div>
        <h2>Simple component using class</h2>
        <h3>Message: {message}</h3>
      </div>
    );
  }
}

export function Avatar(props) {
  return (
    <div>
      <img
        className="RoundImage"
        src={props.imageUrl}
        width={props.width}
        height={props.height}
      ></img>
    </div>
  );
}
export function Comment(props) {
  let { username, imageUrl, text, date } = props.comment;
  return (
    <div className="card" style={{ width: "18rem" }}>
      <div style={{ textAlign: "center" }}>
        <Avatar imageUrl={imageUrl} width="100" height="100" />
      </div>
      <div className="card-body">
        <h5 class="card-title">Username: {username}</h5>
        <p className="card-text">Comment: {text}</p>
        <p className="card-text">Date: {date}</p>
        <button className="btn btn-primary">Like</button>
      </div>
    </div>
  );
}

export function Welcome(props) {
  let username = props.username; // <Welcome username = 'data' />
  let email = props.emailId; // <Welcome emailId = 'data' ..... />
  //   return (
  //     <div>
  //       <h3>
  //         Welcome {username}, your mail id is {email}
  //       </h3>
  //     </div>
  //   );
  return username == undefined ? (
    <div>
      <h3>Welcome Guest!</h3>
    </div>
  ) : (
    <div>
      <h3>
        Welcome {username}, your mail id is {email}
      </h3>
    </div>
  );
}
