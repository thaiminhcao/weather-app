"use client";
import React, { useEffect } from "react";
import OpenExcelButton from "./ButtonExcel";

const Game30s = () => {
  const fetchData = async () => {
    try {
      await fetch("/api/30sGame");
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
    const intervalId = setInterval(fetchData, 30500);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="flex">
      <div>Game30s</div>
      <OpenExcelButton />
    </div>
  );
};

export default Game30s;
