import React from "react";

export const Card = ({ data }: { data: string | string[] }) => {
  return Array.isArray(data) ? (
    <div className="rounded-xl border-solid border-2 border-[#dfe0eb] flex">
      {data.map((item, index) => (
        <div key={index}>{item}</div>
      ))}
    </div>
  ) : (
    <></>
  );
};
