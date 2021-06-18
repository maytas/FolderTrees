import React from "react";

const NewButtons = (props) => {
  const { addFile, addFolder } = props;
  return (
    <div>
      <button
        onClick={(e) => {
          addFolder(e);
        }}
        className="btn btn-light btn-xs"
      >
        New Folder
      </button>{" "}
      <button
        onClick={(e) => {
          addFile(e);
        }}
        className="btn btn-light btn-xs"
      >
        New File
      </button>
    </div>
  );
};

export default NewButtons;
