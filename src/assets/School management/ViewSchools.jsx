import React, { useState } from 'react';
import { FiDownload, FiUpload, FiCheckCircle, FiXCircle, FiFile } from 'react-icons/fi';
import { TailSpin } from 'react-loader-spinner'; 
const ViewSchool = () => {
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
      "https://51e7f1b18edd.ngrok-free.app/api/v1/superadmin/schools/template-download",
      {
        method: "GET",
        headers: {
          // Add any auth headers if needed
          // 'Authorization': `Bearer ${token}`,
          'ngrok-skip-browser-warning': 'true' // Skip ngrok warning page
        }
      }
    );

    console.log("Response Status:", response.status);
    console.log("Response Status Text:", response.statusText); 

    if (!response.ok) {
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

  
  return (
    <div className="max-w-2xl mx-auto p-2 bg-white rounded-lg border-2 border-cyan-400 shadow-lg shadow-cyan-400/50">
      <h1 className="text-2xl font-bold text-yellow-600 mb-6 flex items-center">
        <FiFile className="mr-2" /> School Data Management
      </h1>
      
      {/* Download Section */}
      <div className="mb-2grid grid-cols-2 p-6 bg-gray-50 rounded-lg border border-gray-200">
        <h2 className="text-xl font-semibold mb-4 flex items-center">
          <FiDownload className="mr-2 text-blue-500" /> Download Template
        </h2>
        <p className="text-blue-900 mb-4">
          This is the Excel file for all the schools present in the system
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

      
      
    
      
      {/* Help Text */}
      
    </div>
  );
};

export default ViewSchool;