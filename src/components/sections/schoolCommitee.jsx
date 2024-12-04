import React from "react";
import SectionName from "../ui/sectionName";
import Title from "../ui/title";


const schoolCommitee = () => {
  return (
    <section className="lg:pt-15 pt-10 lg:pb-15 pb-10">
     <div className="container">
        <div className="flex flex-col justify-center items-center">
          <SectionName className={"text-primary-foreground"}>
            Our
          </SectionName>
          <Title size={"3.5xl"} className={"mt-2.5 text-center max-w-[516px]"}>
            School Commitee
          </Title>
          <p className={`py-40 text-xl`}>
            PDF HERE
          </p>
        </div>
      </div>
    </section>
  );
};

export default schoolCommitee;
