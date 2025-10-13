import { ProjectType } from "@/types";

export const PROJECTS_DATA: ProjectType[] = [
  {
    id: "ecommerce-platform",
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce platform with shopping cart, payment integration, and admin dashboard.",
    overview:
      "A comprehensive e-commerce solution featuring user authentication, product catalog with advanced filtering, shopping cart functionality, payment processing through Stripe, order management, and a complete admin dashboard for inventory management.",
    detailedDescription:
      "Built a comprehensive e-commerce solution featuring user authentication, product catalog with advanced filtering, shopping cart functionality, payment processing through Stripe, order management, and a complete admin dashboard for inventory management. The platform supports multiple payment methods, real-time inventory updates, and provides detailed analytics for business insights.",
    images_list: [
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop",
    ],
    technologies: [
      "React",
      "TypeScript",
      "Next.js",
      "Stripe API",
      "Prisma",
      "PostgreSQL",
      "Tailwind CSS",
    ],
    startDate: "2023-06-01",
    endDate: "2023-10-15",
    liveUrl: "https://ecommerce-demo.vercel.app",
    githubUrl: "https://github.com/alexchen/ecommerce-platform",
    featured: true,
    category: "Full-Stack Development",
    role: "Full-Stack Developer",
    teamSize: 3,
    challenges_list: [
      "Implementing real-time inventory management across multiple product variants",
      "Optimizing database queries for fast product search and filtering",
      "Handling complex payment flows with multiple payment methods",
    ],
    achievements_list: [
      "Achieved 95% performance score on Lighthouse",
      "Reduced page load times by 40% through code splitting and optimization",
      "Successfully processed over 1000 test transactions without errors",
    ],
  },
  {
    id: "task-management-app",
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates and team features.",
    overview:
      "Developed a modern task management solution that enables teams to collaborate effectively with real-time updates, drag-and-drop task organization, deadline tracking, file attachments, and comprehensive project analytics.",
    detailedDescription:
      "Developed a modern task management solution that enables teams to collaborate effectively with real-time updates, drag-and-drop task organization, deadline tracking, file attachments, and comprehensive project analytics. The application features a clean, intuitive interface with advanced filtering and search capabilities.",
    images_list: [
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&h=600&fit=crop",
    ],
    technologies: [
      "React",
      "Node.js",
      "Socket.io",
      "MongoDB",
      "Express",
      "Material-UI",
    ],
    startDate: "2023-02-01",
    endDate: "2023-05-30",
    liveUrl: "https://taskflow-app.netlify.app",
    githubUrl: "https://github.com/alexchen/task-management",
    featured: true,
    category: "Web Application",
    role: "Frontend Lead",
    teamSize: 4,
    challenges_list: [
      "Implementing real-time collaboration without conflicts",
      "Creating an intuitive drag-and-drop interface",
      "Optimizing performance with large datasets",
    ],
    achievements_list: [
      "Implemented real-time synchronization with 99.9% reliability",
      "Achieved sub-200ms response times for all API endpoints",
      "Successfully onboarded 50+ beta users with positive feedback",
    ],
  },
  {
    id: "weather-dashboard",
    title: "Weather Analytics Dashboard",
    description:
      "An interactive weather dashboard with data visualization and forecasting capabilities.",
    overview:
      "Created a comprehensive weather analytics platform that aggregates data from multiple weather APIs to provide detailed forecasts, historical data analysis, and interactive visualizations.",
    detailedDescription:
      "Created a comprehensive weather analytics platform that aggregates data from multiple weather APIs to provide detailed forecasts, historical data analysis, and interactive visualizations. The dashboard features customizable widgets, location-based weather tracking, and export capabilities for weather data.",
    images_list: [
      "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1561484930-998b6a7b22e8?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&h=600&fit=crop",
    ],
    technologies: [
      "React",
      "D3.js",
      "OpenWeather API",
      "Chart.js",
      "Tailwind CSS",
      "Vercel",
    ],
    startDate: "2023-11-01",
    endDate: "2024-01-15",
    liveUrl: "https://weather-analytics.vercel.app",
    githubUrl: "https://github.com/hazemAzzam/weather-dashboard",
    featured: true,
    category: "Data Visualization",
    role: "Solo Developer",
    teamSize: 1,
    challenges_list: [
      "Handling multiple API data sources with different formats",
      "Creating responsive charts that work on all screen sizes",
      "Implementing efficient data caching for better performance",
    ],
    achievements_list: [
      "Integrated 5 different weather data sources",
      "Created 12 different visualization types",
      "Achieved 98% uptime with automated monitoring",
    ],
  },
];
