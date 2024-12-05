import React from "react";
import { FaBook } from "react-icons/fa"; // Importing a book icon from react-icons

const Pricing = () => {
  return (
    <section className="lg:pt-15 pt-10 lg:pb-15 pb-10">
      <div className="container">
        <div className="mt-20">
          <h2 className="text-6xl font-bold text-center">
            Books List 2023-24
          </h2>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {/* Holidays */}
            

            {/* Card 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 ease-in-out">
              <div className="text-center mb-4">
                <FaBook className="text-4xl text-gray-600" />
              </div>
              <h3 className="text-xl font-bold text-center">
                1st Std Book List
              </h3>
              <div className="mt-4 text-center">
                <a
                  href="#"
                  className="text-blue-500 hover:text-blue-700 font-medium"
                >
                  Download
                </a>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 ease-in-out">
              <div className="text-center mb-4">
                <FaBook className="text-4xl text-gray-600" />
              </div>
              <h3 className="text-xl font-bold text-center">
                2nd Std Book List
              </h3>
              <div className="mt-4 text-center">
                <a
                  href="#"
                  className="text-blue-500 hover:text-blue-700 font-medium"
                >
                  Download
                </a>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 ease-in-out">
              <div className="text-center mb-4">
                <FaBook className="text-4xl text-gray-600" />
              </div>
              <h3 className="text-xl font-bold text-center">
                3rd Std Book List
              </h3>
              <div className="mt-4 text-center">
                <a
                  href="#"
                  className="text-blue-500 hover:text-blue-700 font-medium"
                >
                  Download
                </a>
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 ease-in-out">
              <div className="text-center mb-4">
                <FaBook className="text-4xl text-gray-600" />
              </div>
              <h3 className="text-xl font-bold text-center">
                4th Std Book List
              </h3>
              <div className="mt-4 text-center">
                <a
                  href="#"
                  className="text-blue-500 hover:text-blue-700 font-medium"
                >
                  Download
                </a>
              </div>
            </div>

            {/* Card 5 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 ease-in-out">
              <div className="text-center mb-4">
                <FaBook className="text-4xl text-gray-600" />
              </div>
              <h3 className="text-xl font-bold text-center">
                5th Std Book List
              </h3>
              <div className="mt-4 text-center">
                <a
                  href="#"
                  className="text-blue-500 hover:text-blue-700 font-medium"
                >
                  Download
                </a>
              </div>
            </div>

            {/* Card 6 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 ease-in-out">
              <div className="text-center mb-4">
                <FaBook className="text-4xl text-gray-600" />
              </div>
              <h3 className="text-xl font-bold text-center">
                6th Std Book List
              </h3>
              <div className="mt-4 text-center">
                <a
                  href="#"
                  className="text-blue-500 hover:text-blue-700 font-medium"
                >
                  Download
                </a>
              </div>
            </div>

            {/* Card 7 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 ease-in-out">
              <div className="text-center mb-4">
                <FaBook className="text-4xl text-gray-600" />
              </div>
              <h3 className="text-xl font-bold text-center">
                7th Std Book List
              </h3>
              <div className="mt-4 text-center">
                <a
                  href="#"
                  className="text-blue-500 hover:text-blue-700 font-medium"
                >
                  Download
                </a>
              </div>
            </div>

            {/* Card 8 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 ease-in-out">
              <div className="text-center mb-4">
                <FaBook className="text-4xl text-gray-600" />
              </div>
              <h3 className="text-xl font-bold text-center">
                8th Std Book List
              </h3>
              <div className="mt-4 text-center">
                <a
                  href="#"
                  className="text-blue-500 hover:text-blue-700 font-medium"
                >
                  Download
                </a>
              </div>
            </div>

            {/* Card 9 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 ease-in-out">
              <div className="text-center mb-4">
                <FaBook className="text-4xl text-gray-600" />
              </div>
              <h3 className="text-xl font-bold text-center">
                9th Std Book List
              </h3>
              <div className="mt-4 text-center">
                <a
                  href="#"
                  className="text-blue-500 hover:text-blue-700 font-medium"
                >
                  Download
                </a>
              </div>
            </div>

            {/* Card 10 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 ease-in-out">
              <div className="text-center mb-4">
                <FaBook className="text-4xl text-gray-600" />
              </div>
              <h3 className="text-xl font-bold text-center">
                10th Std Book List
              </h3>
              <div className="mt-4 text-center">
                <a
                  href="#"
                  className="text-blue-500 hover:text-blue-700 font-medium"
                >
                  Download
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
