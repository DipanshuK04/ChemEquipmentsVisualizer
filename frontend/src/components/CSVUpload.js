import axios from "axios";
import { useState } from "react";

function CSVUpload({ onDataReceived }) {
  const [file, setFile] = useState(null);

  const handleUpload = async () => {
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    const response = await axios.post(
      "http://127.0.0.1:8000/api/upload/",
      formData
    );

    onDataReceived(response.data);
  };

  return (
    <div
      style={{
        width: "100%",
        padding: "16px",
        boxSizing: "border-box",
        display: "flex",
        alignItems: "center",
        gap: "12px",
      }}
    >
      <input
        type="file"
        accept=".csv"
        onChange={(e) => setFile(e.target.files[0])}
        style={{ flex: 1 }}
      />

      <button
        onClick={handleUpload}
        style={{
          padding: "6px 14px",
          fontSize: "14px",
          cursor: "pointer",
        }}
      >
        Upload CSV
      </button>
    </div>
  );
}

export default CSVUpload;
