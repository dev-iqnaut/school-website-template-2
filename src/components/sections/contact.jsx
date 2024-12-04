import React from "react";

const contact = () => {
  return (
    <div className="flex flex-col md:flex-row lg:ml-[10%] items-center justify-center h-screen p-6 md:p-12 bg-gray-50">
      {/* Left: Google Map */}
      <div className="w-4/4 md:w-1/3 h-[640px] md:h-[720px]">
        <iframe
          title="Google Map"
          className="w-full h-full rounded-md shadow-md"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.570936070096!2d72.81811637438913!3d19.118484647090023!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b63f8f5a97b1%3A0x771e6f8a63015eeb!2sAndheri%20West%2C%20Mumbai%2C%20Maharashtra%20400053!5e0!3m2!1sen!2sin!4v1701104832319!5m2!1sen!2sin"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>

      {/* Right: Contact Information */}
      <div className="w-full md:w-1/3 flex flex-col justify-center text-center md:text-left px-6 mt-6 md:mt-0 md:px-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Contact Us</h2>
        <p className="text-gray-600 mb-4">
          <span className="font-bold block">Address:</span>
          IQnaut Public School <br />
          Bezonbagh, Nagpur- 440014 , Maharashtra.
        </p>
        <p className="text-gray-600 mb-4">
          <span className="font-bold block">Phone:</span>
          (+91) 0712-256-1288 , 
          (+91) 70200 24865
        </p>
        <p className="text-gray-600">
          <span className="font-bold block">Email:</span>
          care@iqnaut.com
        </p>
      </div>
    </div>
  );
};

export default contact;
