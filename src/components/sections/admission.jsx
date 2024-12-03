import React from "react";

const admission = () => {
  const ages = [
    "1.5+",
    "2.5+",
    "3.5+",
    "4.5+",
    "5+",
    "6+",
    "7+",
    "8+",
    "9+",
    "10+",
    "11+",
    "12+",
    "13+",
    "14+",
    "15+",
    "16+",
  ];

  const grades = [
    "PLAYGROUND",
    "PRE-KG",
    "KG1",
    "KG2",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
  ];
  return (
    <section className="py-12 px-6 bg-gray-50">
      <div className="container mx-auto">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-semibold text-[#00756f] mb-4">
            Admission Details
          </h2>
          <p className="text-lg font-medium text-gray-700">
            Everything you need to know about admissions at our school
          </p>
        </div>

        {/* School Visit Section */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-[#00756f] mb-4">
            School Visit
          </h3>
          <p className="text-lg text-gray-700">
            You are most welcome to visit the school for an informal discussion,
            with or without your child. This can be done by fixing a prior
            appointment with the Principal.
          </p>
        </div>

        {/* Admissions During the Year Section */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-[#00756f] mb-4">
            Admissions during the year
          </h3>
          <p className="text-lg text-gray-700">
            Parents may register at any time during the year for admission in
            the current year and will be interviewed whenever there is a
            vacancy.
          </p>
        </div>

        {/* Inter-Branch Transfers Section */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-[#00756f] mb-4">
            Inter-Branch Transfers
          </h3>
          <p className="text-lg text-gray-700">
            Students may avail transfer from one branch of IHS to another.
            Transfer will be accepted, subject to availability of seat(s) and
            the discretion of the Management.
          </p>
        </div>

        {/* Interview Section */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-[#00756f] mb-4">
            Interview
          </h3>
          <p className="text-lg text-gray-700">
            A formal interview will be conducted by the Principal to know the
            child's educational development, use of language, social skills,
            academic enthusiasm and extra-curricular interests. The aim of the
            interview is to find out what the student knows, understands, and
            enjoys.
          </p>
        </div>

        {/* Admission Rules Section */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-[#00756f] mb-4">
            Admission Rules
          </h3>
          <ul className="list-decimal list-inside text-lg text-gray-700">
            <li className="mb-4">
              On being offered a seat, parents will be given two weeks to pay
              the prescribed fee to secure the same. Parents further need to
              fill and submit a few forms and declarations that would be given
              along with the admission acceptance letter. Before allowing the
              student to take up his/her place, a transfer certificate should be
              lodged with the admissions office from the previous school of the
              student.
            </li>
            <li className="mb-4">
              The school admits students subject to the availability of vacancy
              and fitness of the student to the class for which admission is
              sought and without any other distinction.
            </li>
            <li>
              New candidates must be introduced personally by their parents or
              guardians who will be responsible, to the principal for the
              candidate’s conduct, payment of fees, and other contributions, if
              any.
            </li>
          </ul>
        </div>

        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-[#00756f] mb-4">
            Application Documentation
          </h3>
          <p className="text-lg text-gray-700">
            The admission process is followed by submission of application
            document in Admission Office. Students:
          </p>
          <ul className="list-decimal list-inside text-lg text-gray-700">
            <h3 className="text-xl font-semibold my-2">Students:</h3>
            <li>3 recent color photos.</li>
            <li>
              Birth certificate of student or a copy of a foreign passport of
              the student and parent(s).
            </li>
            <li>
              Academic records for the past two years(submitted during
              Pre-registration)
            </li>
            <li>
              Transfer Certificate from the previous school. If for any reason
              the Transfer Certificate cannot be produced at the time of
              admission, it must be produced on or before the commencement of
              the academic session.
            </li>
            <li>Transport/Lunch and Boarding requisition forms</li>
            <li>Health Record</li>
            <li>Permission Form</li>
            <h3 className="text-xl font-semibold my-2">Family:</h3>
            <li>Residential address proof</li>
            <li>Permission to contact current/previous school.</li>
          </ul>
        </div>

        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-[#00756f] mb-4">
            Eligibility Criteria
          </h3>
          <ul className="list-decimal list-inside text-lg text-gray-700">
            <li className="mb-4">
              A student seeking admission to any class in IQnaut should satisfy
              the requirements of age limits (minimum and maximum) as determined
              by the local State/U.T Government.
              <section className="py-12 px-6 bg-gray-50">
                <div className="container mx-auto">
                  <h2 className="text-3xl font-semibold text-[#00756f] text-center mb-6">
                    Age and Grade Table
                  </h2>

                  {/* Table Section */}
                  <div className="overflow-x-auto">
                    <table className="min-w-full border-collapse border border-gray-300">
                      <thead>
                        <tr>
                          <th className="px-4 py-2 border border-gray-300 text-center bg-[#00756f] text-white">
                            Age
                          </th>
                          {ages.map((age, index) => (
                            <th
                              key={index}
                              className="px-4 py-2 border border-gray-300 text-center"
                            >
                              {age}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="px-4 py-2 border border-gray-300 text-center bg-[#00756f] text-white">
                            Grade
                          </td>
                          {grades.map((grade, index) => (
                            <td
                              key={index}
                              className="px-4 py-2 border border-gray-300 text-center"
                            >
                              {grade}
                            </td>
                          ))}
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default admission;
