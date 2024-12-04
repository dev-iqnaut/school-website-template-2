import React from "react";

const principalMessage = () => {
  return (
    <div className="flex flex-col items-center justify-center p-6 md:p-12 bg-gray-50 min-h-screen">
      {/* Principal's Message */}
      <h1 className="text-4xl md:text-5xl font-bold text-gray-800 text-center mb-8">
        Principal's Message
      </h1>

      {/* Image Section */}
      <div className="w-full md:w-2/3 h-96 bg-gray-200 rounded-lg shadow-md mb-8 flex items-center justify-center">
        {/* Replace src with the actual image path */}
        <img
          src="https://www.highereducationdigest.com/wp-content/uploads/2020/01/Pallavi-DPS--550x330.jpg"
          alt="Principal's Image"
          className="h-full w-full object-cover rounded-lg"
        />
      </div>

      {/* Lorem Ipsum Section */}
      <p className="text-center text-gray-600 md:w-2/3 leading-relaxed">
        IQnaut Public School is one of the Most Prestigious schools in Nagpur.
        The school started in the year 2024 with mere 37 students on roll and
        now it caters for approximate 2000 students who are being benefitted.
        When the flowers blossom the efforts and dedication of the gardeners
        cannot be overlooked. So we salute the minds and hands who have worked
        together tirelessly for the upliftment of the institution. They are the
        esteemed management, dedicated staff and parents. Students are our real
        treasure and teachers are our real assets. Parents play an equal role in
        our institution as they are our partners in education and help in
        shaping the career of the students. We believe that ‘TEAM WORK MAKES THE
        DREAM WORK’. Our dream is to see each and every student of our school
        reach the maximum height, march tirelessly in all the fields of life and
        be the real achievers. So, the school focuses on the all round
        development of the students and provide them the best education to make
        them self-sufficient and excel in academic and non-academic fields, to
        be responsible students and responsible citizens in future. To impart
        them value education integrated with the academic curriculum. Equal
        importance is given to co-curriculum activities and students are
        encouraged for active and experimental learning, all the activities are
        integrated with sports, Arts or ITC, to develop innovative and creative
        ideas. Students are also encouraged to participate in inter-school,
        State level and National level competitions, they are awarded prizes,
        trophies, medals and certificates for the same. They are motivated to
        participate in social services and religious gatherings to develop the
        feeling of Sarv Dharam Sambhav and humanity. They are provided constant
        support and guidance to explore themselves and be studded with virtues
        and their overall personality is attired with basic qualities of
        truthfulness, devotion, dedication and honesty when they finally leave
        the institution. The school has maintained the legacy of hundred percent
        result in AISSE since its inception. I pray to Almighty that the same
        legacy is maintained in future also. I wish success, name and fame to
        each and every student of IQnaut. This website will certainly help the
        students and the parents to maintain the bond of oneness by working
        together and striving for excellence to march ahead through the years to
        come.
      </p>
    </div>
  );
};

export default principalMessage;
