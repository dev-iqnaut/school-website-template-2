import React from "react";
import SectionName from "../ui/sectionName";
import Title from "../ui/title";

const schoolCurriculum = () => {
  return (
    <section className="lg:pt-15 pt-10 lg:pb-15 pb-10">
      <div className="container">
        <div className="flex flex-col justify-center items-center">
          <SectionName className={"text-primary-foreground"}>Our </SectionName>
          <Title size={"3.5xl"} className={"mt-2.5 text-center max-w-[516px]"}>
            School Curriculum
          </Title>

          <p className={`py-10 text-lg text-black text-center`}>
            Our school Curriculum is strictly based on guidelines provided by
            the CBSE Board and is updated time to time as per the guidelines and
            instructions provided. Curriculum connects teachers and subject
            areas to look at the big picture of students learning and to design
            course and knowledge. Teachers work together to plan a progression
            on topics regardless of definition or approach. Curriculum is
            divided into three major components – Objective, Content or Subject
            Matter and learning experience. The main objective of our school
            curriculum is to provide ample opportunities to the students for
            their holistic development (Physical, Mental and Social) and to help
            them to attain excellence in learning. More focus is on construction
            rather than rote learning, and to apply knowledge and skills in real
            life. To promote physical health and well-being. Stress is led to
            unfold constitutional values, to integrate environmental education,
            to promote critical and creative thinking and to explore their
            innate potential.
          </p>
        </div>
      </div>
    </section>
  );
};

export default schoolCurriculum;
