import EditorHeader from "@/features/logo-maker/EditorHeader";
import React, { ReactNode } from "react";

function AppLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col overflow-auto md:h-screen md:overflow-hidden">
      <EditorHeader />
      {children}
    </div>
  );
}

export default AppLayout;
