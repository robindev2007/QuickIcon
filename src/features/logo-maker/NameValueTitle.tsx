import React from "react";

function NameValueTitle({ name, value }: { name: string; value?: string }) {
  return (
    <div className="flex justify-between text-xs font-medium">
      <p>{name}</p>
      <span>{value}</span>
    </div>
  );
}

export default NameValueTitle;
