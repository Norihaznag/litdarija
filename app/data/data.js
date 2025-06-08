// data/data.js
import { createSlug } from "../utils/slug";

// Categories, levels, and price ranges
export const categories = ["Finance", "Web Development", "Construction", "Design", "Business", "Languages", "Agriculture", "Healthcare"];
export const levels = ["Beginner", "Intermediate", "Advanced"];
export const priceRanges = ["All Prices", "Under 200 MAD", "200-250 MAD", "Over 250 MAD"];

export const coursedata = {
  id: 3,
  title: "Full Stack Web Development",
  description: "Comprehensive course covering frontend and backend web development. Learn to build complete web applications from scratch using modern technologies and best practices. Perfect for those looking to become professional web developers or enhance their existing skills.",
  longDescription: "This comprehensive course will take you from the basics of web development to building complex, full-stack applications. You'll learn both front-end and back-end technologies, working with HTML, CSS, JavaScript, React for the frontend, and Node.js, Express, and MongoDB for the backend. By the end of this course, you'll be able to build complete web applications independently and have a portfolio of projects to showcase your skills.",
  instructor: {
    name: "Yasmine Benkiran",
    bio: "Full Stack Developer with 10+ years of experience. Yasmine has worked with major tech companies and has taught over 10,000 students online. She specializes in React, Node.js, and modern JavaScript development.",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b1f5?w=150&h=150&fit=crop&crop=face"
  },
  category: "Web Development",
  level: "Intermediate",
  language: "Darija",
  rating: 4.9,
  students: 876,
  reviews: 124,
  lastUpdated: "March 2025",
  duration: "12 weeks",
  lessonsCount: 48,
  hoursCount: 72,
  price: 299,
  discountPrice: 249,
  image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=450&fit=crop",
  whatYouWillLearn: [
    "Build complete web applications from scratch",
    "Master HTML, CSS, and JavaScript fundamentals",
    "Create responsive user interfaces with React",
    "Develop backend APIs with Node.js and Express",
    "Work with databases like MongoDB",
    "Deploy your applications to production environments",
    "Implement user authentication and authorization",
    "Connect frontend and backend with REST APIs"
  ],
  requirements: [
    "Basic computer skills",
    "Understanding of how websites work",
    "No prior programming experience required, but helpful"
  ],
  curriculum: [
    {
      title: "Introduction to Web Development",
      lessons: [
        { title: "Course Overview", duration: "15 min", type: "video", isPreview: true },
        { title: "Setting Up Your Development Environment", duration: "25 min", type: "video", isPreview: true },
        { title: "Understanding Web Technologies", duration: "40 min", type: "video" },
        { title: "Your First Web Page", duration: "60 min", type: "practice" }
      ]
    },
    {
      title: "HTML & CSS Fundamentals",
      lessons: [
        { title: "HTML Structure and Tags", duration: "45 min", type: "video" },
        { title: "CSS Styling Basics", duration: "50 min", type: "video" },
        { title: "Responsive Design Principles", duration: "55 min", type: "video" },
        { title: "Building a Responsive Landing Page", duration: "120 min", type: "practice" },
        { title: "HTML & CSS Assessment", duration: "30 min", type: "quiz" }
      ]
    },
    {
      title: "JavaScript Essentials",
      lessons: [
        { title: "JavaScript Syntax and Variables", duration: "40 min", type: "video" },
        { title: "Functions and Control Flow", duration: "55 min", type: "video" },
        { title: "DOM Manipulation", duration: "60 min", type: "video" },
        { title: "Building Interactive Web Pages", duration: "90 min", type: "practice" },
        { title: "JavaScript Basics Assessment", duration: "30 min", type: "quiz" }
      ]
    },
    {
      title: "Frontend Development with React",
      lessons: [
        { title: "Introduction to React", duration: "40 min", type: "video" },
        { title: "Components and Props", duration: "50 min", type: "video" },
        { title: "State and Lifecycle", duration: "60 min", type: "video" },
        { title: "Building a React Application", duration: "180 min", type: "practice" }
      ]
    },
    {
      title: "Backend Development with Node.js",
      lessons: [
        { title: "Introduction to Node.js", duration: "45 min", type: "video" },
        { title: "Express.js Framework", duration: "50 min", type: "video" },
        { title: "RESTful API Design", duration: "60 min", type: "video" },
        { title: "Building a Backend API", duration: "150 min", type: "practice" }
      ]
    }
  ],
  reviews: [
    {
      name: "Ahmed Tazi",
      rating: 5,
      date: "April 12, 2025",
      comment: "This course completely changed my career. I went from knowing almost nothing about web development to building my own full-stack applications. The explanations are clear and the projects are challenging but achievable.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face"
    },
    {
      name: "Fatima Ouazzani",
      rating: 5,
      date: "March 28, 2025",
      comment: "I love how the course is taught in Darija, which makes technical concepts much easier to understand. The instructor is very knowledgeable and explains everything in detail. Highly recommended!",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop&crop=face"
    },
    {
      name: "Karim El Fassi",
      rating: 4,
      date: "March 15, 2025",
      comment: "Great content and very well-structured. I would have liked a bit more focus on advanced React concepts, but overall it's an excellent course for beginners and intermediate developers.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face"
    }
  ]
};
export const courseData = {
  id: 3,
  title: "Full Stack Web Development",
  description: "Comprehensive course covering frontend and backend web development.",
  instructor: {
    name: "Yasmine Benkiran",
    image: "/api/placeholder/150/150"
  },
  category: "Web Development",
  level: "Intermediate",
  language: "Darija",
  progress: 15, // Percentage complete
  curriculum: [
    {
      title: "Introduction to Web Development",
      lessons: [
        { 
          id: "1-1",
          title: "Course Overview", 
          duration: "15 min", 
          type: "video",
          completed: true,
          videoUrl: "#", // Would be a real URL in production
          description: "In this lesson, we'll go through what you'll learn in this course and how to get the most out of it.",
          resources: [
            { title: "Course Syllabus", type: "pdf", url: "#" },
            { title: "Development Environment Setup Guide", type: "doc", url: "#" }
          ]
        },
        { 
          id: "1-2",
          title: "Setting Up Your Development Environment", 
          duration: "25 min", 
          type: "video",
          completed: true,
          videoUrl: "#",
          description: "Learn how to set up your development environment with VS Code, Git, and Node.js."
        },
        { 
          id: "1-3",
          title: "Understanding Web Technologies", 
          duration: "40 min", 
          type: "video",
          completed: false,
          videoUrl: "#",
          description: "An overview of key web technologies: HTML, CSS, JavaScript, and how they work together."
        },
        { 
          id: "1-4",
          title: "Your First Web Page", 
          duration: "60 min", 
          type: "practice",
          completed: false,
          description: "Build your first web page using HTML and CSS, applying what you've learned so far.",
          instructions: "Create a simple personal profile page with your name, a short bio, and a few links. Use basic HTML elements and CSS styling.",
          codeTemplate: "<!DOCTYPE html>\n<html>\n<head>\n  <title>My Profile</title>\n  <style>\n    /* Add your CSS here */\n  </style>\n</head>\n<body>\n  <!-- Add your HTML here -->\n</body>\n</html>",
          submission: {
            type: "code",
            status: "not_started" // could be "not_started", "in_progress", "submitted", "graded"
          }
        }
      ]
    },
    {
      title: "HTML & CSS Fundamentals",
      lessons: [
        { 
          id: "2-1",
          title: "HTML Structure and Tags", 
          duration: "45 min", 
          type: "video",
          completed: false,
          videoUrl: "#",
          description: "Deep dive into HTML structure, semantic markup, and common tags."
        },
        { 
          id: "2-2",
          title: "CSS Styling Basics", 
          duration: "50 min", 
          type: "video",
          completed: false,
          videoUrl: "#",
          description: "Learn CSS fundamentals including selectors, properties, and the box model."
        },
        { 
          id: "2-3",
          title: "Responsive Design Principles", 
          duration: "55 min", 
          type: "video",
          completed: false,
          videoUrl: "#",
          description: "Master responsive design techniques including media queries and flexible layouts."
        },
        { 
          id: "2-4",
          title: "Building a Responsive Landing Page", 
          duration: "120 min", 
          type: "practice",
          completed: false,
          description: "Apply responsive design principles to build a landing page that works on all devices.",
          instructions: "Create a landing page for a fictional product or service using HTML and CSS. Ensure it's responsive across mobile, tablet, and desktop views.",
          submission: {
            type: "code",
            status: "not_started"
          }
        },
        { 
          id: "2-5",
          title: "HTML & CSS Assessment", 
          duration: "30 min", 
          type: "quiz",
          completed: false,
          description: "Test your knowledge of HTML and CSS fundamentals.",
          questions: [
            {
              question: "Which HTML element is used to define the main content area of a document?",
              options: ["<body>", "<main>", "<content>", "<section>"],
              answer: 1
            },
            // More questions would be here
          ]
        }
      ]
    },
    {
      title: "JavaScript Essentials",
      lessons: [
        { 
          id: "3-1",
          title: "JavaScript Syntax and Variables", 
          duration: "40 min", 
          type: "video",
          completed: false,
          videoUrl: "#",
          description: "Introduction to JavaScript syntax, data types, and variable declarations."
        },
        // More lessons for this section
      ]
    },
    {
      title: "Frontend Development with React",
      lessons: [
        { 
          id: "4-1",
          title: "Introduction to React", 
          duration: "40 min", 
          type: "video",
          completed: false,
          videoUrl: "#",
          description: "Learn the fundamentals of React and why it's a popular framework."
        },
        // More lessons for this section
      ]
    },
    {
      title: "Backend Development with Node.js",
      lessons: [
        { 
          id: "5-1",
          title: "Introduction to Node.js", 
          duration: "45 min", 
          type: "video",
          completed: false,
          videoUrl: "#",
          description: "Get started with Node.js and understand server-side JavaScript."
        },
        // More lessons for this section
      ]
    }
  ]
};


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