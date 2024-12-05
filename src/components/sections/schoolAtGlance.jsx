import React from "react";
import SectionName from "../ui/sectionName";
import Title from "../ui/title";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import maths from "@/assets/images/Mathslab-e1671422978160.webp";
import physics from "@/assets/images/Physics-min.webp";
import chemistry from "@/assets/images/Chemistry-min.webp";
import biology from "@/assets/images/Bio-Lab-min.webp";
import library from "@/assets/images/Library-1.webp";
import dance from "@/assets/images/DSC0729.webp";
import music from "@/assets/images/music-room.webp";
import yoga from "@/assets/images/DSC0715.webp";
import art from "@/assets/images/Art-Craft-1.webp";

const SchoolAtGlance = () => {
  const sections = [
    {
      title: "Mathematics Laboratory",
      image: maths,
      text: "Mathematics Laboratory is a place where students can learn and explore mathematical concepts and verify mathematical facts and theorems through a variety of activities using different materials.",
      endingText: "Mathematics is like a poetry of logical ideas.",
    },
    {
      title: "Physics Lab",
      image: physics,
      text: "Physics is the scientific study of matter and energy and how they interact with each other. Our laboratory is equipped with all the necessary tools for high school activities.",
      endingText: "Physics: where ideas become reality.",
    },
    {
      title: "Chemistry Lab",
      image: chemistry,
      text: "Our Chemistry Lab is well-equipped for conducting experiments and understanding concepts in a hands-on manner. It inspires students to explore chemistry beyond textbooks.",
      endingText: "Chemistry is all about making the right reactions.",
    },
    {
      title: "Biology Lab",
      image: biology,
      text: "The Biology Lab helps students analyze and experiment with biological concepts and principles. It's a safe and engaging space for discovery.",
      endingText: "Biology: the science of life.",
    },
    {
      title: "Library",
      image: library,
      text: "Our library fosters intellectual and cultural growth with a vast collection of over 2500 books, including reference books, encyclopedias, and magazines.",
      endingText: "Excellence is not an act, but a habit in our standards.",
    },
  ];

  const rooms = [
    {
      title: "Dance Room",
      image: dance,
      description:
        "Dance is a performing art blended into the school curriculum to foster creativity and expression.",
      color: "bg-red-100",
      textColor: "text-red-500",
    },
    {
      title: "Music Room",
      image: music,
      description:
        "Music promotes brain development, lowers stress, and enhances overall well-being.",
      color: "bg-blue-100",
      textColor: "text-blue-500",
    },
    {
      title: "Yoga Room",
      image: yoga,
      description:
        "Yoga improves memory, reduces stress, and contributes to holistic development.",
      color: "bg-orange-100",
      textColor: "text-orange-500",
    },
    {
      title: "Art & Craft Room",
      image: art,
      description:
        "Art and Craft activities develop creativity and imagination, integrated with main subjects.",
      color: "bg-green-100",
      textColor: "text-green-500",
    },
  ];

  return (
    <section className="lg:pt-15 pt-10 lg:pb-15 pb-10">
      <div className="container">
        <div className="flex flex-col justify-center items-center">
          <Title size="3.5xl" className="mt-2.5 text-center max-w-[516px]">
            Our School At A Glance
          </Title>
        </div>

        {/* New Section with Image and Table List */}
        <div className="flex justify-center items-center my-16">
          <div className="flex justify-between items-center w-full max-w-screen-lg">
            {/* Left side - Small Image */}
            <div className="w-2/4 flex mt-14 justify-center items-center">
              <img
                src={
                  "https://i0.wp.com/www.sghps.ac.in/wp-content/uploads/2022/10/24-COLLAGE.jpg?fit=684%2C513&ssl=1"
                } // Replace with any image you want to use
                alt="Maths Lab"
                className="w-full h-full object-cover rounded shadow-lg"
              />
            </div>

            {/* Right side - Table List */}
            <div className="w-1/2 flex justify-center items-center mt-16">
              <div className="w-full max-w-screen-lg overflow-x-auto">
                {/* Table Container with Fixed Height, Scrollable, and Limited Width */}
                <div className="max-h-[400px] overflow-y-auto border w-full mx-auto">
                  <table className="table-auto w-full text-center border-collapse">
                    <thead>
                      <tr>
                        <th className="px-4 py-2 text-lg text-gray-800">
                          Category
                        </th>
                        <th className="px-4 py-2 text-lg text-gray-800">
                          Value
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border px-4 py-2 text-gray-700">
                          Total No. of Sites of School
                        </td>
                        <td className="border px-4 py-2 text-gray-700">1</td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2 text-gray-700">
                          Total No. of Playgrounds
                        </td>
                        <td className="border px-4 py-2 text-gray-700">1</td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2 text-gray-700">
                          Number of Building Blocks
                        </td>
                        <td className="border px-4 py-2 text-gray-700">1</td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2 text-gray-700">
                          Total No. of Rooms
                        </td>
                        <td className="border px-4 py-2 text-gray-700">78</td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2 text-gray-700">
                          Small Sized Rooms
                        </td>
                        <td className="border px-4 py-2 text-gray-700">14</td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2 text-gray-700">
                          Medium Sized Rooms
                        </td>
                        <td className="border px-4 py-2 text-gray-700">6</td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2 text-gray-700">
                          Large Sized Rooms
                        </td>
                        <td className="border px-4 py-2 text-gray-700">58</td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2 text-gray-700">
                          No. of Libraries
                        </td>
                        <td className="border px-4 py-2 text-gray-700">2</td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2 text-gray-700">
                          No. of Labs
                        </td>
                        <td className="border px-4 py-2 text-gray-700">6</td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2 text-gray-700">
                          No. of Art & Craft Rooms
                        </td>
                        <td className="border px-4 py-2 text-gray-700">1</td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2 text-gray-700">
                          No. of Music/Dance Rooms
                        </td>
                        <td className="border px-4 py-2 text-gray-700">1</td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2 text-gray-700">
                          No. of Activity Rooms
                        </td>
                        <td className="border px-4 py-2 text-gray-700">1</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content Sections */}
        <div className="container mx-auto px-4 py-16">
          {sections.map((section, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } items-center gap-8 mb-16`}
            >
              <div className="lg:w-1/2">
                <img
                  src={section.image}
                  alt={`Section ${index + 1}`}
                  className="w-full h-[400px] object-cover rounded-lg shadow-lg"
                />
              </div>
              <div className="lg:w-1/2">
                <h2 className="text-3xl font-bold mb-4 text-gray-800">
                  {section.title}
                </h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  {section.text}
                </p>
                <p className="text-lg font-semibold text-gray-800 italic">
                  {section.endingText}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Rooms Section */}
        <div className="bg-gray-50 py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-5xl font-bold text-center mb-4">Rooms</h2>
            <p className="text-2xl text-center text-gray-600 mb-16">
              Dedicated spaces for extracurricular learning.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {rooms.map((room, index) => (
                <div
                  key={index}
                  className={`${room.color} rounded-3xl p-6 transition-transform hover:scale-105`}
                >
                  <div className="aspect-w-16 aspect-h-9 mb-6">
                    <img
                      src={room.image}
                      alt={room.title}
                      className="w-full h-48 object-cover rounded-xl"
                    />
                  </div>
                  <h3 className={`text-2xl font-bold mb-3 ${room.textColor}`}>
                    {room.title}
                  </h3>
                  <p className="text-gray-700">{room.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SchoolAtGlance;
