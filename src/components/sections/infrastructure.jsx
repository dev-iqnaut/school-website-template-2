import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import Title from "../ui/title";

import maths from "@/assets/images/Mathslab-e1671422978160.webp"
import physics from "@/assets/images/Physics-min.webp"
import chemistry from "@/assets/images/Chemistry-min.webp"
import biology from "@/assets/images/Bio-Lab-min.webp"
import library from "@/assets/images/Library-1.webp"
import dance from "@/assets/images/DSC0729.webp"
import music from "@/assets/images/music-room.webp"
import yoga from "@/assets/images/DSC0715.webp"
import art from "@/assets/images/Art-Craft-1.webp"
import learn from "@/assets/images/Learn.png"
import repeat from "@/assets/images/Repeat.png"
import study from "@/assets/images/Study.png"
import teach from "@/assets/images/Teach.png"

function infrastructure() {

  const sections = [
    {
      title: "Mathematics Laboratory",
      image: maths,
      text: "Mathematics Laboratory is a place where students can learn and explore mathematical concepts and verify mathematical facts and theorems through a variety of activities using different materials. These activities may be carried out by the teacher or the student to explore, to learn , to stimulate interest and develop favorable attitude towards mathematics.",
      endingText: 'Mathematics is like a poetry of logical ideas',
    },
    {
      title: 'Physics Lab',
      image: physics,
      text: 'Physics is the scientific study of matter and energy and how they interact with each other. This energy can take the form of motion, light, electricity, radiation, gravity. Just about anything, honestly. Physics deals with matter on scales ranging from sub-atomic particles (i.e. the particles that make up the atom and the particles that make up those particles) to stars and even entire galaxies.',
      endingText: 'We have a physics laboratory equipped with all the equipment required for the lab activity till high school. ',
    },
    {
      title: 'Chemistry Lab',
      image: chemistry,
      text: 'The Chemistry Laboratory conducts fundamental studies of highway materials to understand both failure mechanisms and superior performance. This laboratory has all the necessary equipment for preparation of samples and standards for various analyses of liquid and solid samples. Various activities are carried out by the teacher or the student to explore, to learn , to stimulate interest and develop favourable attitude towards Chemistry.',
      endingText: 'Chemistry is good when you make love with it. Chemistry is bad when you make crack with it.',
    },
    {
      title: 'Biology Lab',
      image: biology,
      text: 'A Biology laboratory is a room where biological studies, analyzes and experiments are carried out. Biological Science Laboratory Apparatus is essential for meeting our basic needs and it enriches the quality of life in numerous ways by providing new solutions to problems in health and materials and energy usage. Students also learn about lab safety and explore various topics.',
      endingText: '',
    },
    {
      title: 'Library',
      image: library,
      text: 'The school library exists to provide a range of learning opportunities for both large and small groups as well as individuals with a focus on intellectual content, information literacy, and the learner. In addition to classroom visits with collaborating teachers, the school library also serves as a place for students to do independent work, use computers, equipment and research materials; to host special events such as author visits and book clubs; and for tutoring and testing.The school library media center program is a collaborative venture in which school library media specialists, teachers, and administrators work together to provide opportunities for the school, cultural, and educational growth of students. Activities that are part of the school library media origami can take place in the school library media center, the laboratory classroom, through the school, and via the school library’s online resources.Our school library contains all kind of books, including reference books, encyclopedias, Magazines. We have a collection of 2500 books.',
      endingText: 'Excellence is not an act, but a habit in our quality standards.',
    },
  ];

  const rooms = [
    {
      title: 'Dance Room',
      image: dance,
      description: 'Dance is a form of performing art and is blended in various activities of school curriculum.',
      color: 'bg-red-100',
      textColor: 'text-red-500',
    },
    {
      title: 'Music Room',
      image: music,
      description: 'Music leads to better brain development and even lowers stress levels.',
      color: 'bg-blue-100',
      textColor: 'text-blue-500',
    },
    {
      title: 'Yoga Room',
      image: yoga,
      description: 'Yoga helps to improve memory function, academic performance, reduces stress level and helps in overall development of students.',
      color: 'bg-orange-100',
      textColor: 'text-orange-500',
    },
    {
      title: 'Art & Craft Room',
      image: art,
      description: 'Art and Craft activities are integrated with the main subjects to develop the creativity and imaginated power of the students.',
      color: 'bg-green-100',
      textColor: 'text-green-500',
    },
  ];

  return (
    <section className="lg:pt-15 pt-10 lg:pb-15 pb-10">
      <div className="container">
        <div className="flex flex-col justify-center items-center">
          <Title size="3.5xl" className="mt-2.5 text-center max-w-[516px]">
            Our School's Infrastructure
          </Title>
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
}

export default infrastructure;