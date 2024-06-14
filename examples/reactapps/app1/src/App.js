import logo from "./logo.svg";
import "./App.css";
import { Welcome, Comment, Simple, MyButton } from "./components/Hello";

function App() {
  let comment1 = {
    username: "Virat Kohli",
    imageUrl:
      "data:image/webp;base64,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",
    text: "Hello, I am a cricker",
    date: "2024-06-14",
  };

  return (
    <div className="container-fluid">
      <h2>React app with RTK!</h2>
      <MyButton name="Like" type="btn btn-success" />
      <MyButton name="DisLike" type="btn btn-danger" />

      <Simple message="Learning React" />

      <Comment comment={comment1} />
      <Welcome username="Kishor" emailId="kishor@g" />
      <Welcome username="Ajay" emailId="ajay@g" />
      <Welcome />
    </div>
  );
}

export default App;
