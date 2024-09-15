import React from "react";

export const TempC = ({ temp_c }: { temp_c: number }) => {
  return (
    <div className="flex">
      <h2>{temp_c}</h2>
      <div className="text-[blue]">o</div>
      <h2>C</h2>
    </div>
  );
};
