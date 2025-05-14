import * as XLSX from "xlsx";
import { saveAs } from "file-saver";

const exportToExcel = (data:any, fileName = "export.xlsx") => {
  const ws = XLSX.utils.json_to_sheet(data);

  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "Sheet1");

  const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
  const dataBlob = new Blob([excelBuffer], { type: "application/octet-stream" });

  saveAs(dataBlob, fileName);
};

export default exportToExcel;