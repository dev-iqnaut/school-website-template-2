import React from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { LoadingSpinner } from './LoadingSpinner';
import { ErrorMessage } from './ErrorMessage';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

// Import worker from the correct package
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url,
).toString();

// Using a reliable sample PDF from Mozilla's PDF.js examples
const samplePDF = 'https://raw.githubusercontent.com/mozilla/pdf.js/ba2edeae/web/compressed.tracemonkey-pldi-09.pdf';

function PDFViewer() {
  const [numPages, setNumPages] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setLoading(false);
    setError(null);
  }

  function onDocumentLoadError(err) {
    console.error('PDF loading error:', err);
    setError('Failed to load PDF. Please try again later.');
    setLoading(false);
  }

  return (
    <div className="h-screen overflow-y-auto bg-gray-50" style={{ scrollbarGutter: 'stable' }}>
      {error ? (
        <div className="h-screen flex items-center justify-center p-4">
          <ErrorMessage message={error} />
        </div>
      ) : (
        <>
          {loading && (
            <div className="h-screen flex items-center justify-center">
              <LoadingSpinner size="lg" />
            </div>
          )}
          <Document
            file={samplePDF}
            onLoadSuccess={onDocumentLoadSuccess}
            onLoadError={onDocumentLoadError}
            loading={<LoadingSpinner size="md" />}
            className="flex flex-col items-center py-8"
          >
            {numPages &&
              Array.from(new Array(numPages), (_, index) => (
                <div key={`page_${index + 1}`} className="mb-8 shadow-lg">
                  <Page
                    pageNumber={index + 1}
                    className="bg-white"
                    width={600}
                    loading={
                      <div className="flex items-center justify-center h-[800px] bg-white">
                        <LoadingSpinner size="md" />
                      </div>
                    }
                  />
                </div>
              ))}
          </Document>
        </>
      )}
    </div>
  );
}

export { PDFViewer };