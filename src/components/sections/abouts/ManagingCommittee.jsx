import React from "react";

const ManagingCommittee = ({ committeeData = [], vision = "", mission = [] }) => {
  return (
    <section className="bg-dark text-light py-12 px-6">
      <div className="container mx-auto">
        {/* Managing Committee Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Committee Table */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Managing Committee Members</h2>
            <h3 className="text-xl font-semibold mb-4">“IQnaut Educational Society”</h3>
            <table className="w-full border-collapse border border-gray-700 text-left">
              <thead>
                <tr>
                  <th className="px-4 py-2 border border-gray-700 text-center">Sr No</th>
                  <th className="px-4 py-2 border border-gray-700 text-center">Member</th>
                  <th className="px-4 py-2 border border-gray-700 text-center">Designation</th>
                </tr>
              </thead>
              <tbody>
                {committeeData.length > 0 ? (
                  committeeData.map((member, index) => (
                    <tr key={index} className="border-t border-gray-700">
                      <td className="px-4 py-2 text-center border-r border-gray-700">{index + 1}</td>
                      <td className="px-4 py-2 text-center border-r border-gray-700">{member.name}</td>
                      <td className="px-4 py-2 text-center">{member.designation}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="3" className="text-center py-4">
                      No committee members available.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Photo Placeholder */}
          <div className="flex justify-center items-center border border-gray-700 bg-gray-300 text-gray-500 text-xl font-semibold">
            Photo
          </div>
        </div>

        {/* Vision and Mission Sections (One Below Another) */}
        <div className="mt-12">
          {/* Vision Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Vision</h3>
            <p className="p-4 rounded">{vision}</p>
          </div>

          {/* Mission Section */}
          <div className="mt-8">
            <h3 className="text-xl font-bold mb-4">Mission</h3>
            <div className="p-4 rounded">
              <ul className="list-disc list-inside">
                {mission.length > 0 ? (
                  mission.map((point, index) => (
                    <li key={index} className="mb-2">
                      {point}
                    </li>
                  ))
                ) : (
                  <li>No mission details available.</li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManagingCommittee;

// Example Usage:
const committeeData = [
  { name: "John Doe", designation: "President" },
  { name: "Jane Smith", designation: "Secretary" },
  { name: "Alice Johnson", designation: "Treasurer" },
  { name: "Michael Brown", designation: "Member" },
];

const vision =
  "IQnaut High School (IHS) strives to drive India's progress by making quality education both accessible and affordable for every child. Our vision is to empower the nation through education and establish IHS as one of India's leading school networks, shaping a brighter future for all.";

const mission = [
  "To Provide world-class infrastructure designed to foster collaborative and effective learning experiences.",
  "To Create a happy, open, and secure environment where every stakeholder is valued, cared for, and respected.",
  "To Deliver a rigorous curriculum that combines engaging teaching methods with practical, real-world applications, emphasizing both knowledge and skills.",
  "To Support learners at every level with high expectations and consistent progress tracking to help them excel.",
  "To Offer abundant opportunities for students and teachers to grow their confidence, knowledge, and skills beyond academics.",
  "To Achieve the 3E’s—Extraordinary Education, Extraordinary Exposure, and Extraordinary Experience—to empower students to compete and thrive globally.",
];

export const App = () => (
  <ManagingCommittee committeeData={committeeData} vision={vision} mission={mission} />
);
