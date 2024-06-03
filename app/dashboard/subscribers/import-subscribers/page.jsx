"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import './styles.css';

const ImportSubscribersForm = () => {
  const [file, setFile] = useState(null);
  const router = useRouter();

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (file) {
      alert("Subscribers imported successfully!");
    } else {
      alert ("Please select a file")
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
          <label htmlFor="upload-csv" className="label">Upload Email List CSV</label>
          <input
            type="file"
            id="upload-csv"
            className="file-input"
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
