import React from "react";

function Title({ title }: { title: string }) {
  return <div className="text-2xl font-medium mb-4">{title}</div>;
}

export default Title;
