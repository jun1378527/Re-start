let undoStack = [];
let redoStack = [];
let isUndoRedo = false;
const editor = document.getElementById("editor");

editor.addEventListener("input", function (event) {
  if (!isUndoRedo) {
    setTimeout(() => {
      if (
        undoStack.length === 0 ||
        undoStack[undoStack.length - 1] !== editor.value
      ) {
        undoStack.push(editor.value);
        redoStack = [];
      }
    }, 0);
  }
});

function undo() {
  if (undoStack.length > 1) {
    isUndoRedo = true;
    const currentState = undoStack.pop();
    redoStack.push(currentState);
    const previousState = undoStack[undoStack.length - 1];
    editor.value = previousState;
    setTimeout(() => {
      isUndoRedo = false;
    }, 0);
  }
}

function redo() {
  if (redoStack.length > 0) {
    isUndoRedo = true;
    const redoState = redoStack.pop();
    undoStack.push(redoState);
    editor.value = redoState;
    setTimeout(() => {
      isUndoRedo = false;
    }, 0);
  }
}
