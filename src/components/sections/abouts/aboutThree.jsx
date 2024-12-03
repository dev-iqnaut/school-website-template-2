import React from "react";
import ManagingCommittee from "./ManagingCommittee";

const committeeData = [
  { name: "John Doe", designation: "President" },
  { name: "Jane Smith", designation: "Secretary" },
  { name: "Alice Johnson", designation: "Treasurer" },
  { name: "Michael Brown", designation: "Member" },
];

const vision =
  "IQnaut High School (IHS) strives to drive India's progress by making quality education both accessible and affordable for every child. Our vision is to empower the nation through education and establish IHS as one of India's leading school networks, shaping a brighter future for all.";

const mission = [
  "To Provide world-class infrastructure designed to foster collaborative and effective learning experiences.",
  "To Create a happy, open, and secure environment where every stakeholder is valued, cared for, and respected.",
  "To Deliver a rigorous curriculum that combines engaging teaching methods with practical, real-world applications, emphasizing both knowledge and skills.",
  "To Support learners at every level with high expectations and consistent progress tracking to help them excel.",
  "To Offer abundant opportunities for students and teachers to grow their confidence, knowledge, and skills beyond academics.",
  "To Achieve the 3E’s—Extraordinary Education, Extraordinary Exposure, and Extraordinary Experience—to empower students to compete and thrive globally.",
];

const aboutThree = () => (
  <div>
    <ManagingCommittee
      committeeData={committeeData}
      vision={vision}
      mission={mission}
    />
  </div>
);

export default aboutThree;
