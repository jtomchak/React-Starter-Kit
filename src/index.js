import React from "react";
import ReactDOM from "react-dom";

const titles = ["cookies are good", "Star Wars is ok", "Eggnog is amazing"];

var MyTitle = props => {
  const style = { color: props.color };
  return (
    <div>
      <h1 style={style}>{props.title}</h1>
    </div>
  );
};

const MyFirstComponent = () => {
  const listItems = titles.map(title => (
    <li style={{ color: "peru" }}>{title}</li>
  ));
  return <ul>{listItems}</ul>;
};

ReactDOM.render(<MyFirstComponent />, document.getElementById("root"));
