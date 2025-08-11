import React, { useState } from 'react';
import { FiDownload, FiUpload, FiCheckCircle, FiXCircle, FiFile } from 'react-icons/fi';
import { TailSpin } from 'react-loader-spinner'; 
const FileSubmission = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState({ message: '', isError: false, show: false });
  const [isLoading, setIsLoading] = useState(false);
  const [downloadProgress, setDownloadProgress] = useState(0);

  // Download Excel template from backend
  const downloadTemplate = async () => {
  try {
    setIsLoading(true);
    setDownloadProgress(0);

    const response = await fetch(
      "https://c794ee12659f.ngrok-free.app/api/v1/superadmin/schools/template-download",
      {
        method: "GET",
        headers: {
        
          'ngrok-skip-browser-warning': 'true' // Skip ngrok warning page
        }
      }
    );

    console.log("Response Status:", response.status); // ADDED
    console.log("Response Status Text:", response.statusText); // ADDED

    if (!response.ok) {
      console.error(`Download failed: ${response.status} - ${response.statusText}`);
      const errorText = await response.text();
      console.error("Response body:", errorText);
      throw new Error(`Failed to download template: ${response.status} - ${response.statusText}`);
    }

    // Convert response to blob
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    // Update progress to 100% once blob is ready
    setDownloadProgress(100);

    // Extract filename from Content-Disposition header
    const contentDisposition = response.headers.get('Content-Disposition');
    let filename = "school_template.xlsx"; // Default fallback
    
    if (contentDisposition) {
      const filenameRegex = /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/;
      const matches = filenameRegex.exec(contentDisposition);
      if (matches != null && matches[1]) {
        filename = matches[1].replace(/['"]/g, '');
        console.log(`Extracted filename: ${filename}`);
      } else {
        console.log('Could not extract filename, using default');
      }
    } else {
      console.log('No Content-Disposition header, using default filename');
    }

    // Create and trigger download
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    a.style.display = 'none'; // Hide the element
    
    document.body.appendChild(a);
    a.click();
    
    // Cleanup
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);

    // Success message
    setUploadStatus({
      message: `Template "${filename}" downloaded successfully!`,
      isError: false,
      show: true,
    });

    console.log(`Successfully downloaded: ${filename}`);

  } catch (error) {
    console.error('Download error:', error);
    
    // Error message
    setUploadStatus({
      message: `Download failed: ${error.message}`,
      isError: true,
      show: true,
    });
  } finally {
    // Reset progress
     setIsLoading(false);
    setTimeout(() => setDownloadProgress(0), 2000);
  }
};

  // Handle file upload to backend
  const handleFileUpload = async () => {
    if (!selectedFile) {
      setUploadStatus({
        message: 'Please select a file first',
        isError: true,
        show: true
      });
      return;
    }

    setIsLoading(true);
    
    const formData = new FormData();
    formData.append('excelFile', selectedFile);

    try {
      const response = await fetch('https://51e7f1b18edd.ngrok-free.app/api/v1/superadmin/schools/template-download', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) throw new Error('Upload failed');

      const result = await response.json();
      
      setUploadStatus({
        message: `Success! ${result.importedCount} records imported`,
        isError: false,
        show: true
      });

    } catch (error) {
      setUploadStatus({
        message: `Upload failed: ${error.message}`,
        isError: true,
        show: true
      });
    } finally {
      setIsLoading(false);
      
      // Hide message after 5 seconds
      setTimeout(() => setUploadStatus({ ...uploadStatus, show: false }), 5000);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-2 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-blue-600 mb-6 flex items-center">
        <FiFile className="mr-2" /> School Data Management
      </h1>
      
      {/* Download Section */}
      <div className="mb-2grid grid-cols-2 p-6 bg-gray-50 rounded-lg border border-gray-200">
        <h2 className="text-xl font-semibold mb-4 flex items-center">
          <FiDownload className="mr-2 text-blue-500" /> Download Template
        </h2>
        <p className="text-gray-600 mb-4">
          Get our Excel template to ensure your data is properly formatted.
        </p>
        
        <button
          onClick={downloadTemplate}

          disabled={isLoading}
          className={`flex items-center px-4 py-2 rounded-md text-white ${
            isLoading ? 'bg-blue-300' : 'bg-blue-500 hover:bg-blue-600'
          }`}
        >
          
          {isLoading && downloadProgress > 0 ? (
            <>
              <TailSpin width={20} height={20} color="#fff" className="mr-2" />
              Downloading... {downloadProgress}%
            </>
          ) : (
            <>
              <FiDownload className="mr-2" />
              Download Excel Template
            </>
          )}
        </button>
      </div>
      
      {/* Upload Section */}
      <div className="p-6 bg-gray-50 rounded-lg border border-gray-200">
        <h2 className="text-xl font-semibold mb-4 flex items-center">
          <FiUpload className="mr-2 text-green-500" /> Import Data
        </h2>
        
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Select Excel file (.xlsx)
          </label>
          <div className="flex items-center">
            <label className="cursor-pointer bg-white border border-gray-300 rounded-md px-4 py-2 hover:bg-gray-50">
              <span className="text-sm font-medium text-gray-700">Choose File</span>
              <input
                type="file"
                accept=".xlsx, .xls"
                onChange={(e) => setSelectedFile(e.target.files[0])}
                className="hidden"
              />
            </label>
            {selectedFile && (
              <span className="ml-3 text-sm text-gray-700">
                {selectedFile.name} ({Math.round(selectedFile.size / 1024)} KB)
              </span>
            )}
          </div>
        </div>
        
        <button
          onClick={handleFileUpload}
          disabled={!selectedFile || isLoading}
          className={`flex items-center px-4 py-2 rounded-md text-white ${
            !selectedFile || isLoading
              ? 'bg-gray-300 cursor-not-allowed'
              : 'bg-green-500 hover:bg-green-600'
          }`}
        >
          {isLoading ? (
            <>
              <TailSpin width={20} height={20} color="#fff" className="mr-2" />
              Uploading...
            </>
          ) : (
            <>
              <FiUpload className="mr-2" />
              Upload Button
            </>
          )}
        </button>
      </div>
      
      {/* Status Message */}
      {uploadStatus.show && (
        <div
          className={`mt-6 p-4 rounded-md border ${
            uploadStatus.isError
              ? 'bg-red-50 border-red-200 text-red-700'
              : 'bg-green-50 border-green-200 text-green-700'
          }`}
        >
          <div className="flex items-center">
            {uploadStatus.isError ? (
              <FiXCircle className="mr-2" />
            ) : (
              <FiCheckCircle className="mr-2" />
            )}
            <span>{uploadStatus.message}</span>
          </div>
        </div>
      )}
      
      {/* Help Text */}
      <div className="mt-6 text-sm text-gray-500">
        <p>Need help? Ensure your Excel file:</p>
        <ul className="list-disc pl-5 mt-1">
          <li>Matches the template format</li>
          <li>Has no empty required fields</li>
        </ul>
      </div>
    </div>
  );
};

export default FileSubmission;