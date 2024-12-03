import React from "react";
import EditorContent from "./EditorContent";

function IconEditor() {
  return (
    <div className="relative flex w-full items-center justify-center bg-muted-foreground/10 p-5 bg-grid-small-black/[0.4] dark:bg-black">
      <EditorContent />
    </div>
  );
}

export default IconEditor;
