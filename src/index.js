import React from "react";
import ReactDOM from "react-dom";
import ItemList from "./components/itemList";
import "./styles.css";

const items = [
  {
    id: 1,
    name: "A",
    isFolder: true,
    values: [
      {
        id: 2,
        name: "A.1",
        isFolder: true,
        values: [
          {
            id: 3,
            name: "A.1.1",
            isFolder: false,
            values: []
          },
          {
            id: 4,
            name: "A.1.2",
            isFolder: true,
            values: []
          }
        ]
      },
      {
        id: 4,
        name: "A.2",
        values: [],
        isFolder: true
      }
    ]
  }
];

function DirectoryApp() {
  return (
    <ul>
      {items.map((i, index) => (
        <ItemList item={i} key={index} />
      ))}
    </ul>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<DirectoryApp />, rootElement);
