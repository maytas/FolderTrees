import React, { useState, useRef, useEffect } from "react";
import NameWithIcon from "./nameWithIcon";
import NewButtons from "./NewButtons";

const ItemList = (props) => {
  let { item } = props;
  const inputFolder = useRef(null);
  const inputFile = useRef(null);
  const [isAddingFolder, setAddingFolder] = useState(false);
  const [isAddingFile, setAddingFile] = useState(false);
  const [isFolderOpen, setFolderOpen] = useState(false);

  useEffect(() => {
    if (isAddingFolder) {
      inputFolder.current.focus();
    }
    if (isAddingFile) {
      inputFile.current.focus();
    }
  }, [isAddingFolder, isAddingFile]);

  //Open and close the folder
  const displayItem = (i, e) => {
    e.stopPropagation();
    if (!(e.target.type === "text")) {
      setFolderOpen(!isFolderOpen);
    }
  };

  //Invoke while adding new folder
  const addFolder = (e) => {
    e.stopPropagation();
    setAddingFolder(true);
    setAddingFile(false);
  };

  //Invoke while adding new file
  const addFile = (e) => {
    e.stopPropagation();
    setAddingFile(true);
    setAddingFolder(false);
  };

  // create folder or file with the given name
  const saveFolderOrFile = (isFolder, isFile, e) => {
    e.stopPropagation();
    setFolderOpen(true);
    if (e.keyCode === 13 || e.type === "blur") {
      if (isFile) {
        if (inputFile.current.value) {
          item.values.push({
            id: inputFile.current.value + item.id,
            name: inputFile.current.value,
            isFolder: false
          });
          setAddingFile(false);
        } else {
          setAddingFile(false);
        }
      }
      if (isFolder) {
        if (inputFolder.current.value) {
          item.values.push({
            id: inputFolder.current.value + item.values.length,
            name: inputFolder.current.value,
            values: [],
            isFolder: true
          });
          setAddingFolder(false);
        } else {
          setAddingFolder(false);
        }
      }
    }
  };

  // create list items recursively
  let children = null;
  if (item && item.values && item.values.length) {
    children = (
      <ul>
        {item.values.map((i, index) => (
          <ItemList item={i} key={index} />
        ))}
      </ul>
    );
  }
  return (
    <div
      onClick={(e) => {
        displayItem(item, e);
      }}
      className="listHeader"
    >
      <NameWithIcon item={item} isFolderOpen={isFolderOpen} />
      {isFolderOpen && item.isFolder && (
        <NewButtons addFolder={addFolder} addFile={addFile} />
      )}
      {isFolderOpen && isAddingFolder ? (
        <input
          type="text"
          className="form-control input"
          placeholder="Folder Name"
          ref={inputFolder}
          onKeyUp={(e) => {
            saveFolderOrFile(true, false, e);
          }}
          onBlur={(e) => {
            saveFolderOrFile(true, false, e);
          }}
        />
      ) : (
        ""
      )}

      {isFolderOpen && isAddingFile ? (
        <input
          type="text"
          className="form-control input"
          placeholder="File Name"
          ref={inputFile}
          onKeyUp={(e) => {
            saveFolderOrFile(false, true, e);
          }}
          onBlur={(e) => {
            saveFolderOrFile(false, true, e);
          }}
        />
      ) : (
        ""
      )}
      {isFolderOpen && children}
    </div>
  );
};

export default ItemList;
