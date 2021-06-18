import React from "react";

const NameWithIcon = ({ item, isFolderOpen }) => {
  return (
    <React.Fragment>
      {item.isFolder ? (
        isFolderOpen ? (
          <span className="glyphicon glyphicon-folder-open" />
        ) : (
          <span className="glyphicon glyphicon-folder-close" />
        )
      ) : (
        <span className="glyphicon glyphicon-file"></span>
      )}
      <span>{" " + item.name}</span>
    </React.Fragment>
  );
};

export default NameWithIcon;
