import React, { useState, useRef } from "react";
import CanvasDraw from "react-canvas-draw";
import UndoIcon from "@material-ui/icons/Undo";
import EraserIcon from "@material-ui/icons/Edit";

const colorPalette = [
  "#C62828",
  "#6A1B9A",
  "#6200EA",
  "#1E88E5",
  "#388E3C",
  "#FFEB3B",
  "#F57C00",
  "#795548",
  "#212121"
];

const ColorButton = ({ color, onClick }) => (
  <button
    style={{ ...styles.colorButton, backgroundColor: color }}
    onClick={onClick}
  />
);

const Reflection = () => {
  const [brushColor, setBrushColor] = useState("#212121");
  const [brushRadius, setBrushRadius] = useState(5);

  const canvasRef = useRef(null);

  return (
    <div style={styles.content}>
      <CanvasDraw
        ref={canvasRef}
        brushColor={brushColor}
        brushRadius={brushRadius}
        hideGrid
        style={styles.canvas}
        canvasWidth={780}
        canvasHeight={530}
      />
      <div style={styles.colorPalette}>
        {colorPalette.map(color => (
          <ColorButton
            key={color}
            color={color}
            onClick={() => {
              setBrushRadius(5);
              setBrushColor(color);
            }}
          />
        ))}
        <button
          style={{ ...styles.actionButton, ...styles.undoButton }}
          onClick={() => canvasRef && canvasRef.current.undo()}
        >
          <UndoIcon style={styles.actionIcon} />
        </button>
      </div>
    </div>
  );
};

const styles = {
  content: {
    width: 777,
    height: 630
  },
  canvas: {
    padding: 0,
    borderColor: "#ccc",
    borderWidth: 1,
    borderStyle: "solid"
  },
  colorPalette: {
    marginTop: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  colorButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    border: "none",
    backgroundColor: "black",
    marginRight: 20,
    outline: "none"
  },
  actionButtons: {
    display: "flex",
    flexDirection: "row",
    margin: 5,
    justifyContent: "flex-end"
  },
  actionButton: {
    border: "none",
    width: 50,
    height: 50,
    borderRadius: 25,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 5,
    outline: "none"
  },
  undoButton: {
    backgroundColor: "#1E88E5"
  },
  eraserButton: {
    backgroundColor: "#6A1B9A"
  },
  actionIcon: {
    width: 40,
    height: 40,
    color: "white"
  }
};

export default Reflection;
