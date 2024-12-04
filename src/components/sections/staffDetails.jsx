import React from "react";
import SectionName from "../ui/sectionName";
import Title from "../ui/title";

const staffDetails = () => {
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
            are fully qualified, very experienced and extremely dedicated to
            their roles – many have been with us since it opened in 2010. We
            truly value continuity of care and know how important consistency is
            in a young child’s life – which is why we our team is only made of
            of all permanent part-time and full-time educators. We employee
            regular permanent float educators which enables us to refrain from
            using “casual” or “agency” educators. This means that your child
            will always know and be familiar with every educator in the service!
          </p>
        </div>
      </div>
      <div className="container">
        <div className="flex flex-col justify-center items-center pt-5">
          {/* <SectionName className={"text-primary-foreground"}>
            Great{" "}
          </SectionName> */}
          <Title size={"3.5xl"} className={"mt-2.5 text-center max-w-[516px]"}>
            Early Childhood educators
          </Title>
          <p className={`pt-5`}>
            IMAGES
          </p>
        </div>
      </div>
    </section>
  );
};

export default staffDetails;
