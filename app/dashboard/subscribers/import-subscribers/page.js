"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Papa from 'papaparse';
import ExcelJS from 'exceljs';
import './styles.css';

const ImportSubscribersForm = ({ onImport }) => {
  const [file, setFile] = useState(null);
  const router = useRouter();

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleFileRead = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = async (e) => {
        const data = e.target.result;
        if (file.type === 'text/csv') {
          Papa.parse(data, {
            header: true,
            complete: (results) => resolve(results.data),
            error: (error) => reject(error),
          });
        } else {
          try {
            const workbook = new ExcelJS.Workbook();
            await workbook.xlsx.load(data);
            const worksheet = workbook.worksheets[0];
            const json = worksheet.getSheetValues().slice(1); // Remove header row
            resolve(json);
          } catch (error) {
            reject(error);
          }
        }
      };
      if (file.type === 'text/csv') {
        reader.readAsText(file);
      } else {
        reader.readAsArrayBuffer(file);
      }
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (file) {
      try {
        const jsonData = await handleFileRead(file);
        console.log(jsonData); // Replace this with the desired onImport call or further processing
        alert("Subscribers imported successfully!");
        router.back();
      } catch (error) {
        console.error("Error importing subscribers:", error);
        alert("There was an error importing the subscribers.");
      }
    } else {
      alert("Please select a file");
    }
  };

  const handleCancel = () => {
    router.back();
  };

  return (
    <div className="container">
      <h1 className="heading">Import Subscribers</h1>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="upload-csv" className="label">Upload Email List CSV or Excel</label>
          <input
            type="file"
            id="upload-csv"
            className="file-input"
            accept=".csv, .xls, .xlsx"
            onChange={handleFileChange}
          />
        </div>

        <div className="actions">
          <button type="button" className="button cancel" onClick={handleCancel}>Cancel</button>
          <button type="submit" className="button import">Import Subscribers</button>
        </div>
      </form>
    </div>
  );
};

export default ImportSubscribersForm;
