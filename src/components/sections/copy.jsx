import React from "react";
import SectionName from "../ui/sectionName";
import Title from "../ui/title";


const name = () => {
  return (
    <section className="lg:pt-15 pt-10 lg:pb-15 pb-10">
      <div className="container">
        <div className="flex flex-col justify-center items-center">
          <SectionName className={"text-primary-foreground"}>
            Great{" "}
          </SectionName>
          <Title size={"3.5xl"} className={"mt-2.5 text-center max-w-[516px]"}>
            Out Wonderfull Staff
          </Title>
          <p className={`pt-5 text-xl`}>
            
          </p>
        </div>
      </div>
    </section>
  );
};

export default name;

