export const profileData = {
  name: "Pukar Ojha",
  title: "Software Engineer",
  avatarUrl: "https://github.com/pukarojha.png",
  location: "Vancouver, BC, Canada",
  contact: {
    email: "ojhapukaar@gmail.com",
    github: "github.com/pukarojha",
    linkedin: "linkedin.com/in/pukarojha"
  },
  stats: {
    level: 22,
    commits: 2140, // Increased realistically for 3+ yrs exp
    cupsOfCoffee: 1200
  },
  summary: "Full-stack software developer with 3+ years of professional experience in the design, development, testing, and maintenance of web and cross-platform applications. Proven ability to lead enhancement initiatives, investigate and resolve production problems, write and execute unit tests, and provide accurate delivery estimates for business cases and action requests. Experienced across CSharp, Java, Python, JavaScript, SQL, XML, and JSON; comfortable with REST and SOAP APIs, Git-based version control, Jenkins pipelines, Docker containerization, and Agile delivery. Effective communicator who works with equal confidence independently and within cross-functional teams to deliver reliable, maintainable software on schedule.",
  skills: {
    "Languages": ["JavaScript (ES6+)", "Java", "Python", "CSharp", "PHP", "SQL", "XML", "JSON"],
    "Web_Frameworks": ["React.js", "Node.js", "Express.js", "HTML5", "CSS3", "RESTful", "SOAP API"],
    "Cross_Platform": ["React Native", "Expo", "Redux", "Android SDK", "SQLite"],
    "DevOps_Cloud": ["AWS Amplify", "AWS Cognito", "AWS Lambda", "EC2", "Git", "Docker"],
    "Databases": ["PostgreSQL", "MySQL", "MongoDB", "Oracle", "SQL Server"]
  },
  education: [
    {
      id: "edu-1",
      school: "Douglas College",
      location: "New Westminster, BC",
      degree: "Post-Baccalaureate Diploma -- Computing and Information Systems, Emerging Technologies",
      year: "2024 -- 2026 (Expected)",
      details: ["Software Engineering", "Full-Stack Web Development", "Mobile Development", "Data Structures and Algorithms"]
    },
    {
      id: "edu-2",
      school: "Itahari International College",
      location: "Nepal",
      degree: "Bachelor of Science (Hons) -- Computing",
      year: "2019 -- 2022",
      details: ["Affiliated with London Metropolitan University"]
    }
  ],
  projects: [
    {
      id: "proj-14",
      name: "PitchVision AI",
      role: "Full Stack Engineer",
      tech: "React Native, Python, FastAPI, OpenCV",
      description: "A full-stack sports analytics application that allows amateur sports leagues to upload match footage and automatically generate player heatmaps and tactical movement summaries using computer vision."
    },
    {
      id: "proj-0",
      name: "Doctor Appointment System",
      role: "Full Stack Developer",
      tech: "React.js, Node.js, Express, Android SDK, PostgreSQL",
      description: "Full-stack healthcare scheduling platform with responsive web client and native handheld companion; implemented RESTful service layer, patient record management, booking workflows, and calendar logic."
    },
    {
      id: "proj-1",
      name: "WeatherDriver",
      role: "Lead Systems Architect",
      tech: "React Native, Expo, AWS Amplify",
      description: "Production geospatial navigation software seamlessly integrating live NOAA weather streams. Architected the backend service layer targeting sub-300ms routing responses and deployed robust AWS Cognito authentication.",
    },
    {
      id: "proj-2",
      name: "Wager",
      role: "Full Stack Engineer",
      tech: "React.js, Node.js, MongoDB",
      description: "Peer-to-peer job-matching platform with real-time bidding, contract workflows, and JWT-secured accounts; designed RESTful service layer and NoSQL schema supporting concurrent multi-user sessions without data contention."
    },
    {
      id: "proj-3",
      name: "MedConnect",
      role: "Backend & Mobile Developer",
      tech: "Java, Android SDK, SQLite",
      description: "Clinic management tool for handheld devices handling patient records, prescriptions, and medication schedules; engineered local data persistence with sync-on-reconnect to reduce data loss in low-connectivity environments."
    },
    {
      id: "proj-4",
      name: "MemoryMine",
      role: "Hackathon Creator",
      tech: "JavaScript, HTML, CSS",
      description: "A 24-hour hackathon deliverable. Architected a highly addictive, dynamic logic-based mine game leveraging pure JavaScript for optimized DOM manipulations."
    },
    {
      id: "proj-5",
      name: "SilentAuction App",
      role: "Full Stack Engineer",
      tech: "MERN Stack, WebSockets",
      description: "A high-performance real-time bidding application designed for charity silent auctions. Implemented low-latency WebSockets to handle concurrent bids without race conditions."
    },
    {
      id: "proj-6",
      name: "HealthConnect",
      role: "Software Developer",
      tech: "React Native, Node.js, MongoDB",
      description: "A patient-centric healthcare application facilitating remote consultations, real-time doctor availability, and predictive prescriptive tracking."
    },
    {
      id: "proj-7",
      name: "SocialApp",
      role: "Full Stack Engineer",
      tech: "React, Node.js, Socket.io",
      description: "A comprehensive social networking platform with real-time customized feeds, instant messaging, and scalable media-sharing pipelines."
    },
    {
      id: "proj-8",
      name: "ChatApp",
      role: "Backend Developer",
      tech: "React, Express, WebSockets",
      description: "A low-latency real-time communication application ensuring secure end-to-end encrypted messaging between concurrent clients."
    },
    {
      id: "proj-9",
      name: "Bookworms",
      role: "Full Stack Developer",
      tech: "React, Node.js, PostgreSQL",
      description: "A digital library system that enables users to track reading habits, leave reviews, and utilize a recommendation engine for personalized book discovery."
    },
    {
      id: "proj-10",
      name: "E-Commerce App",
      role: "Frontend Engineer",
      tech: "React, Redux, Stripe Integration",
      description: "A high-conversion e-commerce storefront built for Code House Media, supporting complex cart state management and secure payment processing gateways."
    },
    {
      id: "proj-11",
      name: "Inventory Management",
      role: "Systems Developer",
      tech: "React, Spring Boot, MySQL",
      description: "A robust stock tracking dashboard providing real-time analytics and predictive re-ordering alerts for large-scale wholesale distribution."
    },
    {
      id: "proj-12",
      name: "Billing Application",
      role: "Software Engineer",
      tech: "Java, JavaFX, SQLite",
      description: "An internal POS and billing architecture streamlining daily transaction flows and lowering checkout friction at Gorkha Department Store."
    },
    {
      id: "proj-13",
      name: "Staff Management System",
      role: "Desktop Engineer",
      tech: "Electron, React, PostgreSQL",
      description: "A dedicated internal suite for Gorkha Department Store handling shift scheduling, payroll metrics, and role-based access control."
    }
  ],
  experience: [
    {
      id: "exp-1",
      title: "Software Developer",
      company: "Web4Site / WeatherDriver",
      date: "Aug 2025 - Jan 2026",
      achievements: [
        "Led end-to-end development of WeatherDriver built on React Native and Expo, integrating real-time weather data with geospatial routing.",
        "Designed REST API endpoints using Node.js and Express.js with sub-300ms average response targets.",
        "Integrated AWS Amplify and Cognito for user authentication; resolved all integration defects prior to delivery.",
        "Connected Google Maps Platform and NOAA National Weather Service feed, isolating and resolving latency issues."
      ]
    },
    {
      id: "exp-2",
      title: "Software Developer",
      company: "Gorakha Department Store",
      date: "Aug 2022 - Nov 2023",
      achievements: [
        "Architected 3 internal tools (billing, scheduling, inventory), reducing manual processing time by 40% and saving 20 staff hrs/week.",
        "Led team of 3 engineers through complete SDLC in under 4 months with zero critical defects at launch.",
        "Performed root cause analysis and deployed hotfixes under operational time constraints across a 15-month engagement.",
        "Trained 15 staff members to full adoption within 2 weeks, improving feature delivery rate to 95%."
      ]
    },
    {
      id: "exp-3",
      title: "Full-Stack Developer Intern",
      company: "EMS Digital",
      date: "Aug 2021 - Feb 2022",
      achievements: [
        "Built and launched 4 production-grade web platforms in 7 months using JavaScript, Node.js, Express.js, and MongoDB.",
        "Maintained RESTful API endpoints and used Postman for endpoint validation and regression testing.",
        "Translated requirements into database schema designs that reduced rework by 20%.",
        "Resolved 50+ issues through systematic root cause analysis and peer code review."
      ]
    },
    {
      id: "exp-4",
      title: "Programming Instructor",
      company: "Itahari International College",
      date: "Jan 2023 - Nov 2023",
      achievements: [
        "Delivered Java, JavaScript, and algorithmic problem-solving instruction to 300+ students across 3 cohorts.",
        "Designed and facilitated 6 specialist bootcamps on OOP, algorithm design, and web platforms.",
        "Mentored 20 project teams from requirements gathering through final delivery; 90% submitted on schedule."
      ]
    }
  ]
};
