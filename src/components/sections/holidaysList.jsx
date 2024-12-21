import React from "react";
import SectionName from "../ui/sectionName";
import Title from "../ui/title";


const holidaysList = () => {
  return (
    <section className="lg:pt-15 pt-10 lg:pb-15 pb-10">
      <div className="container">
        <div className="flex flex-col justify-center items-center">
          <SectionName className="text-primary-foreground">
            Our
          </SectionName>
          <Title size="3.5xl" className="mt-2.5 text-center max-w-[516px]">
            Holidays List
          </Title>

          <div className="flex justify-center items-center w-full">
            <iframe
              src="https://docs.google.com/document/d/e/2PACX-1vR8o6f9r5h1em6tntYsX3ABhwq8qI18MSt12Csk1muL46Plaqk0q7AKSBVWfYIbffdpKYn1LQXpxFJE/pub?embedded=true"
              className="w-full md:w-[1000px] md:h-[700px] h-[400px]"
              style={{ border: "none" }}
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};


export default holidaysList;
