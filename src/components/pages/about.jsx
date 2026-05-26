import React from "react";
import Image from "../atoms/Image";
import Button from "../atoms/Button";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  
  const teamMembers = [
    {
      name: "John Doe",
      role: "Founder & Editor",
      image: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
      name: "Jane Smith",
      role: "Senior Writer",
      image: "https://randomuser.me/api/portraits/women/1.jpg",
    },
  ];

  return (
    <main className="w-full overflow-hidden bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[40vh] bg-blue-600">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              About Our Blog
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              Discover our story and mission to bring you the best content
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Mission Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-gray-600 mb-4">
              We're passionate about delivering high-quality content that informs,
              inspires, and connects our community of readers.
            </p>
            <p className="text-gray-600 mb-6">
              Founded in 2025, we've been committed to sharing meaningful stories
              and insights that matter to our readers.
            </p>
            <Button
              onClick={() => navigate("/")}
              className="bg-blue-600 text-white hover:bg-blue-700 rounded-lg px-6 py-3 text-base font-semibold shadow-md transition-all duration-300"
            >
              Explore Our Blog
            </Button>
          </div>
          <div className="rounded-lg overflow-hidden shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c"
              alt="Team collaboration"
              className="w-full h-[400px] object-cover"
            />
          </div>
        </div>

        {/* Team Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Meet Our Team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-blue-100"
                />
                <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                <p className="text-blue-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 bg-white p-8 rounded-xl shadow-lg">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">1000+</div>
            <div className="text-gray-600">Articles Published</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">50K+</div>
            <div className="text-gray-600">Monthly Readers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">100+</div>
            <div className="text-gray-600">Contributors</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">5+</div>
            <div className="text-gray-600">Years Online</div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="w-full py-6 text-center text-gray-600 bg-gray-100 border-t mt-16">
        <div className="max-w-7xl mx-auto px-4">
          &copy; {new Date().getFullYear()} Blog Project. All rights reserved.
        </div>
      </footer>
    </main>
  );
};

export default About;
