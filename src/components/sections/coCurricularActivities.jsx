import React from "react";
import SectionName from "../ui/sectionName";
// import Title from "../ui/title";
import blogData from "./coCurricular"; // Import data from an external file

const coCurricularActivities = () => {
  const { mainHeading, blogs } = blogData;
  return (
    <section className="lg:pt-15 pt-10 lg:pb-15 pb-10">
      <div className="container">
        <div className="flex flex-col justify-center items-center">
          {/* <SectionName className={"text-primary-foreground"}>
            Great{" "}
          </SectionName> */}

          <div className="min-h-screen bg-gray-100 py-8">
            {/* Page Heading */}
            <h1 className="text-5xl font-extrabold text-center mb-12 text-gray-800">
              {mainHeading}
            </h1>

            {/* Blog Grid */}
            <div className="max-w-screen-xl mx-auto px-6 sm:px-12 lg:px-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogs.map((blog, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transform transition-transform duration-300"
                  >
                    {/* Blog Image */}
                    <img
                      src={blog.image}
                      alt={blog.headline}
                      className="w-full h-56 object-cover"
                    />
                    <div className="p-6">
                      {/* Blog Headline */}
                      <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                        {blog.headline}
                      </h2>
                      {/* Blog Date */}
                      <p className="text-sm text-gray-500 mb-4">{blog.date}</p>
                      {/* Blog Paragraph */}
                      <p className="text-gray-600 mb-6 line-clamp-3">
                        {blog.paragraph}
                      </p>
                      {/* Read More Button */}
                      <button className="text-white bg-blue-500 px-4 py-2 rounded-full hover:bg-blue-600 transition-colors">
                        Read More &rarr;
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default coCurricularActivities;
