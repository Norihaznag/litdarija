// data/data.js
import { createSlug } from "../utils/slug";

// Categories, levels, and price ranges
export const categories = ["Finance", "Web Development", "Construction", "Design", "Business", "Languages", "Agriculture", "Healthcare"];
export const levels = ["Beginner", "Intermediate", "Advanced"];
export const priceRanges = ["All Prices", "Under 200 MAD", "200-250 MAD", "Over 250 MAD"];

export const featuredCourses = [
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


export const allcategories = [
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

// Courses data
export const allCourses = [
  {
    id: 1,
    title: "Financial Literacy Basics",
    slug: createSlug("Financial Literacy Basics", "Karim Alaoui", 1),
    description: "Learn the fundamentals of personal finance management and financial planning.",
    instructor: "Karim Alaoui",
    category: "Finance",
    level: "Beginner",
    rating: 4.8,
    students: 1245,
    duration: "6 weeks",
    price: 199,
    image: "/api/placeholder/320/180"
  },
  {
    id: 2,
    title: "Investment Strategies",
    slug: createSlug("Investment Strategies", "Leila Haddioui", 2),
    description: "Master various investment techniques for long-term wealth building.",
    instructor: "Leila Haddioui",
    category: "Finance",
    level: "Intermediate",
    rating: 4.6,
    students: 892,
    duration: "8 weeks",
    price: 249,
    image: "/api/placeholder/320/180"
  },
  {
    id: 3,
    title: "Full Stack Web Development",
    slug: createSlug("Full Stack Web Development", "Yasmine Benkiran", 3),
    description: "Comprehensive course covering frontend and backend web development.",
    instructor: "Yasmine Benkiran",
    category: "Web Development",
    level: "Intermediate",
    rating: 4.9,
    students: 876,
    duration: "12 weeks",
    price: 299,
    image: "/api/placeholder/320/180"
  },
  {
    id: 4,
    title: "Frontend Development with React",
    slug: createSlug("Frontend Development with React", "Hassan Ouahbi", 4),
    description: "Learn to build modern, responsive user interfaces with React.",
    instructor: "Hassan Ouahbi",
    category: "Web Development",
    level: "Beginner",
    rating: 4.7,
    students: 1023,
    duration: "8 weeks",
    price: 249,
    image: "/api/placeholder/320/180"
  },
  {
    id: 5,
    title: "Construction Management",
    slug: createSlug("Construction Management", "Omar Benjelloun", 5),
    description: "Master the principles of managing construction projects efficiently.",
    instructor: "Omar Benjelloun",
    category: "Construction",
    level: "Advanced",
    rating: 4.7,
    students: 524,
    duration: "10 weeks",
    price: 279,
    image: "/api/placeholder/320/180"
  },
  {
    id: 6,
    title: "UI/UX Design Fundamentals",
    slug: createSlug("UI/UX Design Fundamentals", "Nadia Elmaleh", 6),
    description: "Learn the principles of creating user-friendly digital experiences.",
    instructor: "Nadia Elmaleh",
    category: "Design",
    level: "Beginner",
    rating: 4.9,
    students: 1156,
    duration: "6 weeks",
    price: 229,
    image: "/api/placeholder/320/180"
  },
  {
    id: 7,
    title: "Business Leadership",
    slug: createSlug("Business Leadership", "Tarik Idrissi", 7),
    description: "Develop essential leadership skills for managing teams and organizations.",
    instructor: "Tarik Idrissi",
    category: "Business",
    level: "Intermediate",
    rating: 4.8,
    students: 785,
    duration: "8 weeks",
    price: 269,
    image: "/api/placeholder/320/180"
  },
  {
    id: 8,
    title: "Darija for Beginners",
    slug: createSlug("Darija for Beginners", "Samira Tazi", 8),
    description: "Learn the basics of Moroccan Darija for everyday communication.",
    instructor: "Samira Tazi",
    category: "Languages",
    level: "Beginner",
    rating: 4.9,
    students: 1342,
    duration: "4 weeks",
    price: 179,
    image: "/api/placeholder/320/180"
  },
  {
    id: 9,
    title: "Sustainable Agriculture",
    slug: createSlug("Sustainable Agriculture", "Youssef Amrani", 9),
    description: "Learn modern farming techniques that promote sustainability.",
    instructor: "Youssef Amrani",
    category: "Agriculture",
    level: "Intermediate",
    rating: 4.6,
    students: 438,
    duration: "8 weeks",
    price: 219,
    image: "/api/placeholder/320/180"
  },
  {
    id: 10,
    title: "First Aid & Emergency Response",
    slug: createSlug("First Aid & Emergency Response", "Dr. Amina Boutaleb", 10),
    description: "Essential knowledge for handling medical emergencies.",
    instructor: "Dr. Amina Boutaleb",
    category: "Healthcare",
    level: "Beginner",
    rating: 4.8,
    students: 892,
    duration: "3 weeks",
    price: 159,
    image: "/api/placeholder/320/180"
  },
  {
    id: 11,
    title: "Backend Development with Node.js",
    slug: createSlug("Backend Development with Node.js", "Mehdi Elouazzani", 11),
    description: "Build scalable server-side applications using Node.js and Express.",
    instructor: "Mehdi Elouazzani",
    category: "Web Development",
    level: "Intermediate",
    rating: 4.7,
    students: 765,
    duration: "9 weeks",
    price: 269,
    image: "/api/placeholder/320/180"
  },
  {
    id: 12,
    title: "Digital Marketing Fundamentals",
    slug: createSlug("Digital Marketing Fundamentals", "Sofia Bennani", 12),
    description: "Learn the basics of promoting products and services online.",
    instructor: "Sofia Bennani",
    category: "Business",
    level: "Beginner",
    rating: 4.8,
    students: 1087,
    duration: "5 weeks",
    price: 199,
    image: "/api/placeholder/320/180"
  }
];