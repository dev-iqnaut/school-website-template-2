import React from "react";

const Affiliation = () => {
  return (
    <section className="py-12 px-6 border border-gray-300 rounded-lg">
      <div className="container mx-auto">
        {/* Header Section */}
        <div className="text-center">
          <h2 className="text-3xl font-semibold mb-4">Affiliation Details</h2>
          <p className="text-lg font-medium text-gray-700">Important Details of School</p>
        </div>

        {/* Complete Details Section */}
        <div className="mt-12">
          <h3 className="text-4xl font-semibold mb-6 text-center text-[#00756f]">Complete details:</h3>

          {/* 2 Columns Section with Border in the Middle */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 py-4 border-t border-b border-gray-300">
            
            {/* Left Column (Affiliation No, Status, Period) */}
            <div className="space-y-4 border-r border-gray-300 pr-6">
              <div className="flex justify-between items-center py-2">
                <span className="font-medium text-lg">Affiliation no.</span>
                <span className="font-medium text-lg">143008</span>
              </div>

              <div className="flex justify-between items-center py-2">
                <span className="font-medium text-lg">Status</span>
                <span className="font-medium text-lg">Secondary School</span>
              </div>

              <div className="flex justify-between items-center py-2">
                <span className="font-medium text-lg">Period</span>
                <span className="font-medium text-lg">From 1/04/2022 to 31/03/2027</span>
              </div>
            </div>

            {/* Right Column (Holiday List, Books List) */}
            <div className="space-y-4 pl-6">
              <div className="flex justify-between items-center py-2">
                {/* <span className="font-medium text-lg">Holiday List</span> */}
                <a href="#holiday-list" className="text-blue-600 hover:text-blue-800">
                  Holiday List
                </a>
              </div>

              <div className="flex justify-between items-center py-2">
                {/* <span className="font-medium text-lg">Books List: Std I - X</span> */}
                <a href="#books-list" className="text-blue-600 hover:text-blue-800">
                  Books List
                </a>
              </div>
            </div>
          </div>

          {/* Additional Fields Section with Border in the Middle */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-6 py-4 border-t border-b border-gray-300">
            
            {/* Left Column (Additional Fields) */}
            <div className="space-y-4 border-r border-gray-300 pr-6">
              <div className="font-medium text-lg">
                <a href="#transfer-certificate" className="text-blue-600 hover:text-blue-800">
                  Transfer Certificate Sample
                </a>
              </div>
              <div className="font-medium text-lg">
                <a href="#teacher-details" className="text-blue-600 hover:text-blue-800">
                  Teacher Details
                </a>
              </div>
              <div className="font-medium text-lg">
                <a href="#infrastructure-details" className="text-blue-600 hover:text-blue-800">
                  Infrastructure Details
                </a>
              </div>
            </div>

            {/* Right Column (Additional Fields) */}
            <div className="space-y-4 pl-6">
              <div className="font-medium text-lg">
                <a href="#school-managing-committee" className="text-blue-600 hover:text-blue-800">
                  Managing Committee Details
                </a>
              </div>
              <div className="font-medium text-lg">
                <a href="#students-classwise" className="text-blue-600 hover:text-blue-800">
                  Students Classwise
                </a>
              </div>
              <div className="font-medium text-lg">
                <a href="#school-old-circulars" className="text-blue-600 hover:text-blue-800">
                  School Old Circulars
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Affiliation;
