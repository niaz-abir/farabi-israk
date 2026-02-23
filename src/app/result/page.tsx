import React from "react";
import { FaFilePdf } from "react-icons/fa";

const resultsData = [
  {
    id: 1,
    name: "Diploma in Computer Engineering",
    title: "Final Semester Result – Spring 2025",
    date: "June 25, 2025",
    pdfLink: "#",
  },
  {
    id: 2,
    name: "Diploma in Nursing Science",
    title: "Mid Term Result – Spring 2025",
    date: "June 18, 2025",
    pdfLink: "#",
  },
  {
    id: 3,
    name: "Diploma in Civil Engineering",
    title: "Final Examination Result – Fall 2024",
    date: "January 15, 2025",
    pdfLink: "#",
  },
  {
    id: 4,
    name: "Diploma in Electrical Engineering",
    title: "Improvement Exam Result – 2024",
    date: "December 20, 2024",
    pdfLink: "#",
  },
  {
    id: 5,
    name: "Diploma in Mechanical Engineering",
    title: "Semester Result – Fall 2024",
    date: "January 05, 2025",
    pdfLink: "#",
  },
  {
    id: 6,
    name: "Diploma in Textile Engineering",
    title: "Final Result – 2024",
    date: "December 28, 2024",
    pdfLink: "#",
  },
  {
    id: 7,
    name: "Diploma in Architecture",
    title: "Semester Result – Spring 2025",
    date: "June 10, 2025",
    pdfLink: "#",
  },
  {
    id: 8,
    name: "Diploma in Electronics Engineering",
    title: "Board Examination Result – 2024",
    date: "January 02, 2025",
    pdfLink: "#",
  },
];

const ResultPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-14">
          <h1 className="text-4xl font-bold text-black mb-4">
            Academic Results
          </h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Find the latest examination results published by the institution.
            Students are advised to download the official PDF for complete
            details.
          </p>
        </div>

        {/* Result Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {resultsData.map((result) => (
            <div
              key={result.id}
              className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition duration-300 p-6 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-lg font-semibold text-black mb-2">
                  {result.name}
                </h3>
                <p className="text-gray-700 mb-4">{result.title}</p>
              </div>

              <div className="flex items-center justify-between mt-4">
                <span className="text-sm text-gray-500">
                  Published: {result.date}
                </span>

                <a
                  href={result.pdfLink}
                  className="flex items-center gap-2 text-red-600 font-medium hover:underline"
                >
                  <FaFilePdf />
                  View PDF
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResultPage;
