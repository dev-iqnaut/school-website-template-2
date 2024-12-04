import { ChevronRight } from "lucide-react";
import React from "react";
import SectionName from "../ui/sectionName";
import Title from "../ui/title";

function teachersTraining() {
  const blogPosts = [
    {
      title: "Capacity Building Programme on Art Integration – One Day",
      date: "December 25, 2023",
      image:
        "https://i0.wp.com/www.sghps.ac.in/wp-content/uploads/2024/09/Teachers-training-2024-25.jpg?w=1120&ssl=1",
      excerpt:
        "Capacity Building programme on ‘Art Integration – One Day’ was organized for teachers by Mrs. Bharti Bijwe Resource Person of CBSE CoE Pune, Chairperson Sahodaya Complex and Principal of Sandipani School Hazaripahad, Nagpur. 60 staff members attended the workshop and updated themselves. It was an interactive session. Activities based on the topic were also conducted in a well organised manner. The main motto for conducting such types of training sessions is to provide a platform to the teachers to update themselves and make them more knowledgeable.",
      comments: "No Comments",
      category: "Workshop",
      readMoreLink: "#",
    },
    {
      title: "Training details of session 2023-24",
      date: "December 20, 2023",
      image:
        "https://i0.wp.com/www.sghps.ac.in/wp-content/uploads/2023/12/Building-Learning-Awareness2-2023-2024-scaled.webp?resize=1536%2C1152&ssl=1",
      excerpt:
        "In-house session on NEP 2020 (National Education Policy 2020) was organized on 15th June 2023 in Sri Guru Harkrishan Public School, Bezonbagh, Nagpur. The resource person for the In-house session was Mrs. Padmaja Marathe. All the details of the National Education Policy were explained by the resource person in detail. All the activities were carried out in a well organized manner. It was an interactive session.  In all, many teachers attended the training programme and updated their knowledge.",
      comments: "2 Comments",
      category: "Events",
      readMoreLink: "#",
    },
    {
      title: "Training details of session 2022-23",
      date: "December 15, 2023",
      image:
        "https://i0.wp.com/www.sghps.ac.in/wp-content/uploads/2023/04/teachersTraining.jpg?w=720&ssl=1",
      excerpt:
        "The teaching staff of Sri Guru Harkrishan Public School have completed the mentioned hours of compulsory training.  Through this mandatory trainings all the teachers have enhanced their different skills.",
      comments: "5 Comments",
      category: "Academic",
      readMoreLink: "#",
    },
    {
      title: "Workshop",
      date: "December 10, 2023",
      image:
        "https://i0.wp.com/www.sghps.ac.in/wp-content/uploads/2023/06/DSC04037-min.webp?w=1556&ssl=1",
      excerpt:
        "In-house session on Building Learning Environment and integrating withInclusive Education was organized in Sri Guru Harkrishan Public School,Bezonbagh, Nagpur. The resource person for the In-house",
      comments: "3 Comments",
      category: "Culture",
      readMoreLink: "#",
    },
    {
      title: "Teacher Training Program",
      date: "December 5, 2023",
      image:
        "https://i0.wp.com/www.sghps.ac.in/wp-content/uploads/2023/06/DSC04011-min.webp?w=1556&ssl=1",
      excerpt:
        "A comprehensive teacher training program was conducted to enhance teaching methodologies and introduce innovative educational technologies. The workshop focused on integrating digital tools in classroom teaching and creating engaging learning experiences.",
      comments: "1 Comment",
      category: "Professional Development",
      readMoreLink: "#",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="lg:pt-15 pt-10 lg:pb-15 pb-10">
      <div className="container">
        <div className="flex flex-col justify-center items-center">
          <SectionName className={"text-primary-foreground"}>
            Our{" "}
          </SectionName>
          <Title size={"3.5xl"} className={"mt-2.5 text-center max-w-[516px]"}>
            Teachers Training
          </Title>
          
        </div>
      </div>
    </section>

      {/* Blog Posts Section */}
      <div className="container mx-auto px-4 py-16">
        {blogPosts.map((post, index) => (
          <div
            key={index}
            className={`flex flex-col ${
              index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
            } items-center gap-8 mb-16`}
          >
            <div className="lg:w-1/2">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-[400px] object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="lg:w-1/2">
              <div className="flex items-center gap-4 mb-4">
                <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">
                  {post.category}
                </span>
                <span className="text-gray-500 text-sm">{post.date}</span>
                <span className="text-gray-500 text-sm">• {post.comments}</span>
              </div>
              <h2 className="text-3xl font-bold mb-4 text-gray-800">
                {post.title}
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                {post.excerpt}
              </p>
              <a
                href={post.readMoreLink}
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold"
              >
                Read More
                <ChevronRight className="w-4 h-4 ml-1" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default teachersTraining;
