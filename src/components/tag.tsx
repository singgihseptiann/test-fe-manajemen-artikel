import React from "react";

interface TagProps {
  label: string;
  color?: string;
}

const Tag: React.FC<TagProps> = ({ label, color = "bg-blue-200" }) => {
  return (
    <div
      className={`rounded-2xl border ${color} p-2 text-center text-sm text-blue-900`}
    >
      {label}
    </div>
  );
};

export default Tag;
