"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import './styles.css';

const ImportSubscribersForm = ({ onImport }) => {
  const [file, setFile] = useState(null);
  const router = useRouter();
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (file) {
      try {
        alert("Subscribers imported successfully!");
        router.back();
      } catch (error) {
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
