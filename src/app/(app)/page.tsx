import EditorSidebar from "@/features/logo-maker/EditorSidebar";
import IconEditor from "@/features/logo-maker/IconEditor";
import React from "react";

function MainPage() {
  return (
    <div className="flex h-full w-full flex-col overflow-hidden md:flex-row">
      <EditorSidebar />
      <IconEditor />
    </div>
  );
}

export default MainPage;
