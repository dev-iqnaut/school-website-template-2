import React, { useState } from "react";
import { Document, Page } from "react-pdf"; // Importing the necessary components from react-pdf

// Use path relative to the public folder
const pdfUrl = '/assets/pdf/AmericanSlang.pdf'; // File located in public/assets/pdf/

const mandatoryDisclosure = () => {
  const [numPages, setNumPages] = useState(null); // Total pages in the PDF
  const [pageNumber, setPageNumber] = useState(1); // Current page number

  // Handle document load success
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  // Handle document load error
  function onDocumentLoadError(error) {
    console.error("Error loading PDF:", error);
  }

  return (
    <section className="lg:pt-15 pt-10 lg:pb-15 pb-10">
      <div className="container">
        <div className="mt-20">
          <h2 className="text-6xl font-semibold text-center">Mandatory Disclosure</h2>
          
          {/* PDF Viewer */}
          <div className="mt-10">
            <div 
              className="pdf-container" 
              style={{ maxWidth: "100%", height: "80vh", overflowY: "auto", position: "relative" }}
            >
              {/* Document Rendering without a Worker */}
              <Document
                file={pdfUrl} // Use the PDF file URL from the public folder
                onLoadSuccess={onDocumentLoadSuccess}
                onLoadError={onDocumentLoadError} // Enhanced error logging
              >
                <Page pageNumber={pageNumber} />
              </Document>
            </div>

            {/* Pagination Controls */}
            <div className="pagination-controls text-center mt-4">
              <button
                onClick={() => setPageNumber(Math.max(pageNumber - 1, 1))}
                disabled={pageNumber <= 1}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
              >
                Prev
              </button>
              <span className="mx-4">Page {pageNumber} of {numPages}</span>
              <button
                onClick={() => setPageNumber(Math.min(pageNumber + 1, numPages))}
                disabled={pageNumber >= numPages}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default mandatoryDisclosure;
