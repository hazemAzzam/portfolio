export const PROJECTS_DATA: any[] = [
  {
    id: "ecommerce-platform",
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce platform with shopping cart, payment integration, and admin dashboard.",
    detailedDescription:
      "Built a comprehensive e-commerce solution featuring user authentication, product catalog with advanced filtering, shopping cart functionality, payment processing through Stripe, order management, and a complete admin dashboard for inventory management. The platform supports multiple payment methods, real-time inventory updates, and provides detailed analytics for business insights.",
    images: [
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
    challenges: [
      "Implementing real-time inventory management across multiple product variants",
      "Optimizing database queries for fast product search and filtering",
      "Handling complex payment flows with multiple payment methods",
    ],
    achievements: [
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
    detailedDescription:
      "Developed a modern task management solution that enables teams to collaborate effectively with real-time updates, drag-and-drop task organization, deadline tracking, file attachments, and comprehensive project analytics. The application features a clean, intuitive interface with advanced filtering and search capabilities.",
    images: [
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
    challenges: [
      "Implementing real-time collaboration without conflicts",
      "Creating an intuitive drag-and-drop interface",
      "Optimizing performance with large datasets",
    ],
    achievements: [
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
    detailedDescription:
      "Created a comprehensive weather analytics platform that aggregates data from multiple weather APIs to provide detailed forecasts, historical data analysis, and interactive visualizations. The dashboard features customizable widgets, location-based weather tracking, and export capabilities for weather data.",
    images: [
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
    featured: true,
    category: "Data Visualization",
    role: "Solo Developer",
    teamSize: 1,
    challenges: [
      "Handling multiple API data sources with different formats",
      "Creating responsive charts that work on all screen sizes",
      "Implementing efficient data caching for better performance",
    ],
    achievements: [
      "Integrated 5 different weather data sources",
      "Created 12 different visualization types",
      "Achieved 98% uptime with automated monitoring",
    ],
  },
  {
    id: "portfolio-generator",
    title: "Portfolio Generator",
    description:
      "A tool for developers to create beautiful portfolio websites using templates and customization options.",
    detailedDescription:
      "Built a comprehensive portfolio generation platform that allows developers to create professional portfolio websites through an intuitive drag-and-drop interface. Features include multiple templates, custom theming, project showcase management, and one-click deployment integration.",
    images: [
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop",
    ],
    technologies: [
      "React",
      "TypeScript",
      "Styled Components",
      "Firebase",
      "Netlify",
    ],
    startDate: "2023-08-01",
    endDate: "2023-09-30",
    githubUrl: "https://github.com/alexchen/portfolio-generator",
    featured: false,
    category: "Developer Tools",
    role: "Full-Stack Developer",
    teamSize: 2,
    challenges: [
      "Creating a flexible template system",
      "Implementing real-time preview functionality",
    ],
    achievements: [
      "Generated 200+ portfolios for beta users",
      "Achieved 4.8/5 user satisfaction rating",
    ],
  },
  {
    id: "recipe-finder",
    title: "Recipe Finder",
    description:
      "A recipe discovery app with ingredient-based search and meal planning features.",
    detailedDescription:
      "Developed a smart recipe discovery application that helps users find recipes based on available ingredients, dietary restrictions, and personal preferences. Includes features like meal planning, shopping list generation, and nutritional information display.",
    images: [
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=800&h=600&fit=crop",
    ],
    technologies: ["Vue.js", "Nuxt.js", "Spoonacular API", "Vuetify", "PWA"],
    startDate: "2023-03-15",
    endDate: "2023-04-30",
    liveUrl: "https://recipe-finder-app.netlify.app",
    featured: false,
    category: "Mobile App",
    role: "Frontend Developer",
    teamSize: 3,
    challenges: [
      "Optimizing API calls to reduce costs",
      "Creating an intuitive ingredient selection interface",
    ],
    achievements: [
      "Implemented offline functionality for saved recipes",
      "Achieved 4.6/5 rating on app stores",
    ],
  },
  {
    id: "code-snippet-manager",
    title: "Code Snippet Manager",
    description:
      "A tool for developers to organize and share code snippets with syntax highlighting and tagging.",
    detailedDescription:
      "Created a comprehensive code snippet management tool that allows developers to store, organize, and share code snippets with advanced features like syntax highlighting, tagging system, search functionality, and team collaboration capabilities.",
    images: [
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop",
    ],
    technologies: [
      "React",
      "Monaco Editor",
      "Node.js",
      "PostgreSQL",
      "Express",
    ],
    startDate: "2023-07-01",
    githubUrl: "https://github.com/alexchen/snippet-manager",
    featured: false,
    category: "Developer Tools",
    role: "Solo Developer",
    teamSize: 1,
    challenges: [
      "Implementing syntax highlighting for 20+ languages",
      "Creating efficient search algorithms",
    ],
    achievements: [
      "Supports over 25 programming languages",
      "Used by 100+ developers in beta testing",
    ],
  },
];
