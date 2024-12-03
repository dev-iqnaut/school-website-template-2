import React from "react";


const Pricing = () => {
  return (
    <section className="lg:pt-15 pt-10 lg:pb-15 pb-10">
      <div className="container">
        <div className="">
          <h2 className="text-3xl font-semibold mb-6">Fees</h2>
          <p className="mb-6">
            Considering the needs of the middle class the school has kept
            moderate fees schedule from Nursery to X with the intention that
            even the lowest rung from the society could get the benefits of CBSE
            education. The fees structure was decided and passed by the School
            Managing Committee. It was put forth in the Parent-Teacher
            Association Committee. All the members of PTA gave their consent and
            fees structure was implemented.
          </p>
          <h2 className="text-3xl font-semibold mb-6">Scholarship</h2>
          <p className="mb-6">
            Since school is basically run by the Minority Institution the
            efforts are always made to give the benefits of various govt.
            Scholarship for minority students .As a result several students from
            the school are getting scholarship from Central as well as from the
            start Govt.
          </p>
          <h2 className="text-3xl font-semibold mb-6">Detailed Fee Structure</h2>
          <ul className="list-disc pl-5">
            <li className="underline cursor-pointer">Nursery, KG-I, KG-II</li>
            <li className="underline cursor-pointer">Class 1</li>
            <li className="underline cursor-pointer">Class 2 to 5</li>
            <li className="underline cursor-pointer">Class 6 to 8</li>
            <li className="underline cursor-pointer">Class 9 to 10</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
