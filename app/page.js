// app/page.js (Updated homepage)
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import SearchBar from "./components/SearchBar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Newsletter from "./components/Newsletter";
import Image from "next/image";

// Static data with slug mapping
const categories = [
  {
    name: "Finance",
    slug: "finance",
    icon: "💰",
    description: "Accounting, Investment, Banking",
    courseCount: 12,
  },
  {
    name: "Web Development",
    slug: "web-development",
    icon: "💻",
    description: "Frontend, Backend, Full Stack",
    courseCount: 18,
  },
  {
    name: "Construction",
    slug: "construction",
    icon: "🏗️",
    description: "Architecture, Civil Engineering, Safety",
    courseCount: 8,
  },
  {
    name: "Design",
    slug: "design",
    icon: "🎨",
    description: "UI/UX, Graphic Design, Branding",
    courseCount: 15,
  },
  {
    name: "Business",
    slug: "business",
    icon: "📊",
    description: "Entrepreneurship, Marketing, Management",
    courseCount: 10,
  },
  {
    name: "Languages",
    slug: "languages",
    icon: "🗣️",
    description: "Communication, Translation, Grammar",
    courseCount: 7,
  },
  {
    name: "Agriculture",
    slug: "agriculture",
    icon: "🌱",
    description: "Farming, Irrigation, Sustainability",
    courseCount: 6,
  },
  {
    name: "Healthcare",
    slug: "healthcare",
    icon: "⚕️",
    description: "First Aid, Nutrition, Public Health",
    courseCount: 9,
  },
];

const featuredCourses = [
  {
    title: "Financial Literacy basics",
    instructor: "Karim Alaoui",
    level: "Beginner",
    rating: 4.8,
    students: 1245,
    image: "/api/placeholder/320/180",
  },
  {
    title: "Full Stack Web Development",
    instructor: "Yasmine Benkiran",
    level: "Intermediate",
    rating: 4.9,
    students: 876,
    image: "/api/placeholder/320/180",
  },
  {
    title: "Construction Management",
    instructor: "Omar Benjelloun",
    level: "Advanced",
    rating: 4.7,
    students: 524,
    image: "/api/placeholder/320/180",
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Top Navigation Bar */}

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-emerald-600 to-emerald-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Learn new skills in Moroccan Darija
              </h1>
              <p className="text-lg md:text-xl mb-6">
                High-quality courses in finance, web development, construction,
                and more - all in your language!
              </p>

              {/* Client Component for Search */}
              <SearchBar />
            </div>
            <div className="md:w-1/2 flex justify-center">
              <Image
                src="/images/main.png"
                alt="Students learning"
                className="rounded-lg shadow-lg"
                width={500}
                height={300}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Browse Courses by Category
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <Link
                key={index}
                href={`/categories/${category.slug}`}
                className="bg-gray-50 hover:bg-gray-100 rounded-lg p-6 transition duration-200 cursor-pointer border border-gray-200 hover:border-emerald-200 hover:shadow-md group"
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-200">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800 group-hover:text-emerald-700">
                  {category.name}
                </h3>
                <p className="text-gray-600 mb-3">{category.description}</p>
                <div className="text-emerald-600 font-semibold">
                  {category.courseCount} courses
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800">
              Featured Courses
            </h2>
            <a
              href="#"
              className="text-emerald-600 hover:text-emerald-700 font-semibold flex items-center"
            >
              View all courses
              <ChevronDown className="ml-1 h-5 w-5 transform rotate-270" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCourses.map((course, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-200"
              >
                <Image
                  src="/images/litdarija.png"
                  alt={course.title}
                  className="w-full h-48 object-cover"
                  width={320}
                  height={180}
                 
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-800">
                    {course.title}
                  </h3>
                  <p className="text-gray-600 mb-4">By {course.instructor}</p>
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-emerald-100 text-emerald-800 text-sm px-3 py-1 rounded-full">
                      {course.level}
                    </span>
                    <div className="flex items-center">
                      <span className="text-yellow-500 mr-1">★</span>
                      <span className="font-medium">{course.rating}</span>
                      <span className="text-gray-500 text-sm ml-1">
                        ({course.students})
                      </span>
                    </div>
                  </div>
                  <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-2 rounded-md font-medium transition duration-200">
                    Enroll Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section - Client Component for Form handling */}
      <Newsletter />

      {/* Footer */}
    </div>
  );
}
