import React from "react";

const facilitiesOverview = [
  {
    id: 1,
    title: "Smart Classrooms",
    description:
      "Our classrooms are designed to support interactive learning. Equipped with multimedia projectors, proper lighting, and comfortable seating, they provide an ideal environment for focused academic engagement.",
    image:
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    title: "Central Library",
    description:
      "The library houses a wide range of academic books, reference materials, journals, and digital resources. It encourages self-study, research activities, and knowledge enhancement for students.",
    image:
      "https://images.unsplash.com/photo-1549383028-df014fa3a325?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    title: "Practical Laboratories",
    description:
      "Modern laboratories provide hands-on practical experience aligned with the curriculum. Students gain real-world skills using updated equipment under expert supervision.",
    image:
      "https://images.unsplash.com/photo-1602052577122-f73b9710adba?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const studentActivities = [
  {
    id: 1,
    title: "Cultural Programs",
    image:
      "https://images.unsplash.com/photo-1734542380831-1b843c852c5e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    title: "Academic Seminars",
    image: "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b",
  },
  {
    id: 3,
    title: "Sports & Recreation",
    image: "https://images.unsplash.com/photo-1492724441997-5dc865305da7",
  },
  {
    id: 4,
    title: "Student Clubs & Events",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b",
  },
];

const StudentFacilities = () => {
  return (
    <div className=" text-black">
      {/* Hero Section */}
      <section className="py-24 text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Student Facilities
        </h1>
        <p className="text-black max-w-4xl mx-auto leading-relaxed">
          We believe that quality education goes beyond classrooms. Our
          institution provides modern facilities and an engaging campus life
          that support academic excellence, personal growth, and professional
          development.
        </p>
      </section>

      {/* Facilities Overview */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <h2 className="text-3xl font-semibold mb-14 text-center">
          Facilities Overview
        </h2>

        <div className="space-y-20">
          {facilitiesOverview.map((facility, index) => (
            <div
              key={facility.id}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${
                index % 2 !== 0 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Image */}
              <div>
                <img
                  src={facility.image}
                  alt={facility.title}
                  className="rounded-2xl shadow-lg w-full h-[350px] object-cover"
                />
              </div>

              {/* Content */}
              <div>
                <h3 className="text-2xl font-semibold mb-4">
                  {facility.title}
                </h3>
                <p className="text-black leading-relaxed text-lg">
                  {facility.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-gray-700 max-w-6xl mx-auto"></div>

      {/* Student Activities */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <h2 className="text-3xl font-semibold mb-6 text-center">
          Student Activities & Engagement
        </h2>

        <p className="text-black text-center max-w-4xl mx-auto mb-14">
          Students actively participate in cultural, academic, and recreational
          activities that help develop leadership skills, teamwork, creativity,
          and confidence beyond academic learning.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {studentActivities.map((activity) => (
            <div
              key={activity.id}
              className="group rounded-2xl overflow-hidden shadow-lg "
            >
              <img
                src={activity.image}
                alt={activity.title}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />

              <div className="p-4 text-center">
                <h4 className="font-semibold text-lg">{activity.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className=" py-20 text-center px-4">
        <h2 className="text-3xl font-semibold mb-4">
          A Campus That Supports Your Growth
        </h2>
        <p className="text-black max-w-3xl mx-auto mb-8">
          From modern learning spaces to vibrant student life, our facilities
          are designed to ensure a supportive, engaging, and career-focused
          educational experience.
        </p>

        <button className="px-10 py-4 bg-blue-600 rounded-lg text-lg font-semibold hover:bg-blue-700 transition">
          Explore Our Campus
        </button>
      </section>
    </div>
  );
};

export default StudentFacilities;
