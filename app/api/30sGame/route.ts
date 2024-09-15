export const dynamic = "force-static";
import useFetchBaseUrl from "@/hooks/useFetchBaseUrl";
import * as XLSX from "xlsx";
import fs from "fs";

type Res = { turnNum: string; openNum: string };

export async function GET() {
  const res = await useFetchBaseUrl();
  const data = await res.data;
  const { t } = data;

  const excelData: Res = {
    turnNum: t.turnNum,
    openNum: t.openNum,
  };

  const filePath = "output.xlsx";
  let workbook;
  let worksheet;

  if (fs.existsSync(filePath)) {
    const fileBuffer = fs.readFileSync(filePath);
    workbook = XLSX.read(fileBuffer, { type: "buffer" });
    worksheet = workbook.Sheets[workbook.SheetNames[0]];
  } else {
    workbook = XLSX.utils.book_new();
    worksheet = XLSX.utils.aoa_to_sheet([["Phiên", "Điểm"]]);
    XLSX.utils.book_append_sheet(workbook, worksheet, "My Sheet");
  }

  const worksheetData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

  worksheetData.push([excelData.turnNum, excelData.openNum]);

  const newWorksheet = XLSX.utils.aoa_to_sheet(worksheetData as unknown[][]);
  workbook.Sheets[workbook.SheetNames[0]] = newWorksheet;

  const newFileBuffer = XLSX.write(workbook, {
    type: "buffer",
    bookType: "xlsx",
  });
  fs.writeFileSync(filePath, newFileBuffer);

  console.log("File saved successfully!");

  return Response.json({ data });
}
