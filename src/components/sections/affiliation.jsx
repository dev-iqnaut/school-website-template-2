import React from "react";

const Affiliation = () => {
  return (
    <section className="py-12 px-6 border border-gray-300 rounded-lg">
      <div className="container mx-auto">
        {/* Header Section */}
        <div className="text-center">
          {/* <h2 className="text-3xl font-semibold mb-4">Affiliation Details</h2>
          <p className="text-lg font-medium text-gray-700">
            Important Details of School
          </p> */}
        </div>

        {/* Complete Details Section */}
        <div className="mt-12">
          <h3 className="text-4xl font-semibold mb-6 text-center text-[#00756f]">
            Complete details:
          </h3>

          {/* 2 Columns Section with Border in the Middle */}
          <div className="py-12 px-6">
            {/* Container for centering the content */}
            <div className="container mx-auto flex justify-center">
              {/* Table Structure for Affiliation Details */}
              <div className="w-full max-w-2xl">
                {/* Table Header */}
                <div className="text-center mb-6">
                  <h2 className="text-3xl font-semibold mb-4">
                    Affiliation Details
                  </h2>
                  <p className="text-lg font-medium text-gray-700">
                    Important Details of School
                  </p>
                </div>

                {/* Table for Affiliation Info with Borders */}
                <div className="table w-full border-t-2 border-b-2 border-gray-300">
                  <div className="table-row-group">
                    {/* Affiliation no. Row */}
                    <div className="table-row">
                      <div className="table-cell text-center py-2 px-4 font-medium text-lg">
                        Affiliation no.
                      </div>
                      <div className="table-cell text-center py-2 px-4 text-lg">
                        143008
                      </div>
                    </div>
                    {/* Status Row */}
                    <div className="table-row">
                      <div className="table-cell text-center py-2 px-4 font-medium text-lg">
                        Status
                      </div>
                      <div className="table-cell text-center py-2 px-4 text-lg">
                        Secondary School
                      </div>
                    </div>
                    {/* Period Row */}
                    <div className="table-row">
                      <div className="table-cell text-center py-2 px-4 font-medium text-lg">
                        Period
                      </div>
                      <div className="table-cell text-center py-2 px-4 text-lg">
                        From 1/04/2022 to 31/03/2027
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Fields Section with Border in the Middle */}
          <div className="py-12 px-6">
  {/* Container for centering the content */}
  <div className="container mx-auto flex justify-center">
    {/* Table Structure */}
    <div className="w-full">
      {/* Table Header */}
      <div className="text-center mb-6">
        <h2 className="text-3xl font-semibold mb-4">Additional Details</h2>
      </div>

      {/* Add top border below the Additional Details section */}
      {/* <div className="border-t-2 border-gray-300 mb-6"></div> */}

      {/* Table */}
      <div className="table w-full border-2 border-gray-300 rounded-lg">
        <div className="table-row-group">
          {/* First Row */}
          <div className="table-row border-b border-gray-300">
            <div className="table-cell py-4 text-lg text-center font-medium">
              <a href="#transfer-certificate" className="text-blue-600 hover:text-blue-800">
                Transfer Certificate Sample
              </a>
            </div>
            <div className="table-cell py-4 text-lg text-center font-medium border-l border-gray-300">
              <a href="#school-managing-committee" className="text-blue-600 hover:text-blue-800">
                Managing Committee Details
              </a>
            </div>
          </div>
          {/* Second Row */}
          <div className="table-row border-b border-gray-300">
            <div className="table-cell py-4 text-lg text-center font-medium">
              <a href="#teacher-details" className="text-blue-600 hover:text-blue-800">
                Teacher Details
              </a>
            </div>
            <div className="table-cell py-4 text-lg text-center font-medium border-l border-gray-300">
              <a href="#students-classwise" className="text-blue-600 hover:text-blue-800">
                Students Classwise
              </a>
            </div>
          </div>
          {/* Third Row */}
          <div className="table-row border-b border-gray-300">
            <div className="table-cell py-4 text-lg text-center font-medium">
              <a href="#infrastructure-details" className="text-blue-600 hover:text-blue-800">
                Infrastructure Details
              </a>
            </div>
            <div className="table-cell py-4 text-lg text-center font-medium border-l border-gray-300">
              <a href="#school-old-circulars" className="text-blue-600 hover:text-blue-800">
                School Old Circulars
              </a>
            </div>
          </div>
          {/* Fourth Row */}
          <div className="table-row">
            <div className="table-cell py-4 text-lg text-center font-medium">
              <a href="#holiday-list" className="text-blue-600 hover:text-blue-800">
                Holiday List
              </a>
            </div>
            <div className="table-cell py-4 text-lg text-center font-medium border-l border-gray-300">
              <a href="#books-list" className="text-blue-600 hover:text-blue-800">
                Books List
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

        </div>
      </div>
    </section>
  );
};

export default Affiliation;
