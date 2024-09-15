import React from "react";
import * as XLSX from "xlsx";

const OpenExcelButton = () => {
  const handleOpenFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null;
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result;
        if (result) {
          const data = new Uint8Array(result as ArrayBuffer);
          const workbook = XLSX.read(data, { type: "array" });
          const sheetName = workbook.SheetNames[0];
          const worksheet = workbook.Sheets[sheetName];
          const jsonData = XLSX.utils.sheet_to_json(worksheet);
          console.log(jsonData);
        }
      };
      reader.readAsArrayBuffer(file);
    }
  };

  const handleButtonClick = () => {
    const fileInput = document.getElementById("fileInput") as HTMLInputElement;
    fileInput.click();
  };

  return (
    <div>
      <input
        type="file"
        accept=".xlsx, .xls"
        onChange={handleOpenFile}
        style={{ display: "none" }}
        id="fileInput"
      />
      <button
        onClick={handleButtonClick}
        className="border-solid border-l-pink-900"
      >
        Open Excel File
      </button>
    </div>
  );
};

export default OpenExcelButton;
