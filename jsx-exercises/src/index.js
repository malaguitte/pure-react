import React from "react";
import ReactDOM from "react-dom";

function MyThing() {
  return (
    <div className="book">
      <div className="title">
        The Title
      </div>
      <div className="author">
        The Author
      </div>
      <ul className="stats">
        <li className="rating">
          5 stars
        </li>
        <li className="isbn">
          12-345678-910
        </li>
      </ul>
    </div>
  )
}

// Same as MyThing above
// function MyThing2() {
//   return (
//     React.createElement(
//       "div",
//       { className: "book" },
//       React.createElement("div", { className:"title" }, "The Title"),
//       React.createElement("div", { className:"author" }, "The Author"),
//       React.createElement("ul", { className:"stats" }, 
//         React.createElement("li", { className:"rating" }, "5 stars"),
//         React.createElement("li", { className:"isbn" }, "12-345678-910")  
//       )
//     )
//   )
// }

function Greeting() {
  const username = "Anderson";
  return (
    <span>
      { username ? `Hello, ${username}!` : "Not logged in" }
    </span>
  )
}

function Table() {
  return (
    <table>
      <tbody>
        <tr>
          <Data />
        </tr>
      </tbody>
    </table>
  )
}

function Data() {
  return (
    <>
      <td>Property 1</td>
      <td>Property 2</td>
      <td>Property 3</td>
    </>
  );
}

ReactDOM.render(
  <>
    <MyThing />
    <Greeting />
    <Table />
  </>,
  document.getElementById("root")
);