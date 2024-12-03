import React from "react";

const Pricing = () => {
  return (
    <section className="lg:pt-15 pt-10 lg:pb-15 pb-10">
      <div className="container flex">
        <div className=" mt-20">
          <h2 className="text-6xl font-semibold mb-6">TC Sample</h2>
          <h2 className="text-4xl font-semibold mb-6">Withdrawals</h2>

          <ul className="list-disc w-2/3">
            <li className="text-lg mb-6">
              Before withdrawing a student from the school the guardian should
              send an application at least three days in advance. Leaving
              certificate will be issued only after all the dues to the school
              have been paid in full.
            </li>
            <li className="text-lg mb-6">
              Irregular attendance, habitual idleness and neglect of homework,
              disobedience and disrespect to members of the school, staff, bad
              moral influence or communicable diseases harmful to other students
              will result in removal of the student from the school.
            </li>
            <li className="text-lg mb-6">
              Notwithstanding anything in this prospectus the Principal may at
              her/his absolute discretion require any parent at any time to take
              his/her ward out of the school.
            </li>
          </ul>
        </div>
        <div className="">
          <img
            src="https://th.bing.com/th/id/R.ee33def50dfa613249475129f9c74101?rik=jhIyRpGPlT8NqQ&riu=http%3a%2f%2fwww.greenfieldschoolblr.edu.in%2fimages%2fcbse-tc-template.jpg&ehk=6vwVnQ%2bPAlflji4Gyfcey9j12IaChF0F6C9pH2rq%2fgU%3d&risl=&pid=ImgRaw&r=0"
            alt="school tc"
          />
        </div>
      </div>
    </section>
  );
};

export default Pricing;
