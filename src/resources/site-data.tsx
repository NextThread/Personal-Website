const siteData = {
  meta: {
    baseURL: "https://umutbayraktar.vercel.app",
    keywords: [
      "Umut Bayraktar",
      "Codeshare",
      "Full-stack developer",
      "AI Systems Researcher",
      "Content Creator",
      "Community Management",
      "Social Media Management",
      "Next.js",
      "Discord bots",
      "Digital marketplace",
    ],
  },
  person: {
    firstName: "Anurag",
    lastName: "Roy",
    name: "Anurag Roy",
    role: "Software Engineer · Competitive Programmer · DSA & Development Mentor",
    avatar: "/images/avatar.jpg",
    email: "anuragroy.codes@gmail.com",
    phone: "+91 87878 39762",
    website: "https://anuragcodes.vercel.app",
    timezone: "Asia/Kolkata",
    address: "Agartala, India",
    languages: ["English", "Bengali", "Hindi"],
    biography:
      "Professional software developer, AI systems researcher, and content creator with 6+ years of experience in full-stack development, community management, and social media.",
  },
  hero: {
    headline:
      "Software Engineer · Competitive Programmer · DSA & Development Mentor",
    subline: (
      <>
        Software Engineer building scalable applications, SaaS platforms, and
        AI-powered products. Competitive Programmer with multiple top global
        rankings in coding competitions and hackathons, mentoring thousands of
        developers in software engineering, problem solving, and career growth.
      </>
    ),
    featured: {
      label: "Codeshare Marketplace",
      href: "https://codeshare.me",
      badge: "Digital commerce platform",
    },
    ctaPrimary: {
      label: "Explore Codeshare",
      href: "https://codeshare.me",
    },
    ctaSecondary: {
      label: "Watch Beatra in action",
      href: "https://beatra.app",
    },
    stats: [
      { value: "44K+", label: "Followers across Instagram, YouTube & TikTok" },
      { value: "15K+", label: "Developers inside Codeshare" },
      { value: "1.2M+", label: "Beatra users across Discord servers" },
      { value: "6+", label: "Years in community & social media management" },
    ],
  },
  newsletter: {
    display: false,
    title: "Build log",
    description:
      "Shipping notes from Codeshare, Beatra, and creator studio automations.",
  },
  social: [
    { name: "Whatsapp", icon: "whatsapp", link: "https://wa.me/918787839762" },
    {
      name: "Instagram",
      icon: "instagram",
      link: "https://instagram.com/roy.unfazed",
    },
    // { name: "YouTube", icon: "youtube", link: "https://youtube.com/@umutxyp" },
    // { name: "TikTok", icon: "tiktok", link: "https://tiktok.com/@umutxyp" },
    // { name: "umutxyp", icon: "discord", link: "https://discord.gg/FnU3Whr9ef" },
    { name: "GitHub", icon: "github", link: "https://github.com/NextThread" },
    // { name: "LinkedIn", icon: "linkedin", link: "https://linkedin.com/in/umutxyp" },
    { name: "Twitter", icon: "twitter", link: "https://x.com/DegenOnChain" },
    // { name: "Telegram", icon: "telegram", link: "https://t.me/umutxyp" },
    // { name: "Facebook", icon: "facebook", link: "https://facebook.com/umutxyp" },
  ],
  about: {
    introTitle: "Who I am",
    introDescription:
      "I am a Software Engineer, Competitive Programmer, Startup Founder, and Mentor passionate about building scalable applications, SaaS platforms, and AI-powered products. I have experience developing high-performance backend systems, cloud-native infrastructure, and production-ready software used by thousands of users. As an active open-source contributor, I have contributed to projects including Deno, Node.js, and AWS. Alongside engineering, I have mentored 3,000+ students and professionals in Data Structures, Algorithms, and Software Development, helping them strengthen problem-solving skills, crack technical interviews, and accelerate their careers. My work combines software engineering, competitive programming, product development, and technical leadership to build impactful technology at scale.",
    experiences: [
      {
        company: "ChartPulse AI",
        timeframe: "Jan 2025 - Present",
        role: "Founder",
        achievements: [
          "Founded and built an AI-powered trading intelligence platform that analyzes charts, detects market patterns, and generates actionable trading insights for crypto and financial markets.",
          "Architected the complete product stack, including AI-driven chart analysis, authentication, subscriptions, payments, analytics, and cloud infrastructure.",
          "Scaled the platform to thousands of monthly visitors and paying customers through product-led growth, SEO, and community-driven distribution.",
          "Developed automated market analysis workflows capable of processing large volumes of chart and market data in real time.",
          "Led product strategy, engineering, infrastructure, and growth initiatives while continuously shipping new features based on trader feedback.",
        ],
        images: [],
        // link: "https://www.chartpulse.live",
      },
      {
        company: "Alphawave",
        timeframe: "Feb 2024 - Mar 2025",
        role: "Senior Backend & DevOps Engineer",
        achievements: [
          "Architected and developed a scalable microservices-based backend using Node.js, Express, PostgreSQL, and Redis, serving 10K+ monthly active users.",
          "Designed system architecture with REST APIs, JWT authentication, RBAC authorization, and optimized database indexing, reducing query latency by 40%.",
          "Containerized applications using Docker and orchestrated services with Docker Compose to ensure consistent staging and production environments.",
          "Built and maintained CI/CD pipelines with GitHub Actions, enabling automated testing, code quality checks, and zero-downtime deployments.",
          "Provisioned and managed AWS infrastructure including EC2, S3, RDS, and IAM, reducing operational overhead by 35%.",
          "Implemented Nginx as a reverse proxy with SSL termination and load balancing to improve security, reliability, and availability.",
          "Integrated centralized logging, monitoring, and observability solutions using PM2 and cloud-based tooling for proactive issue detection.",
          "Optimized backend performance through Redis caching strategies, reducing average API response times from 800ms to 200ms.",
          "Designed secure payment processing and authentication workflows following OWASP security best practices.",
          "Led backend architecture decisions and collaborated closely with product and frontend teams to deliver scalable production-ready releases.",
        ],
        images: [],
        // link: "https://beatra.app",
      },
      {
        company: "Qredo",
        timeframe: "Jun 2024 - Dec 2024",
        role: "Software Engineer",
        achievements: [
          "Worked on a key enhancement for the network client within the real-time communication domain by transitioning the synchronization mechanism to improve performance and efficiency.",
          "Refactored critical sections of the codebase to enhance synchronization between sender and receiver endpoints in real-time communication streams.",
          "Ensured the new implementation was thoroughly tested, debugged, and production-ready.",
          "Collaborated closely with the engineering team to integrate changes smoothly while maintaining reliability and stability in real-time operations.",
        ],
        images: [],
        // link: "",
      },
      {
        company: "Deno",
        timeframe: "Sep 2023 - Oct 2023",
        role: "Open Source Developer",
        achievements: [
          "Contributed a production fix to the Deno runtime by resolving an issue where removeEventListener incorrectly removed listeners with differing capture configurations.",
          "Improved event-handling consistency and standards compliance, enhancing reliability within a widely used JavaScript and TypeScript runtime.",
          "Collaborated with maintainers through code reviews, testing, and validation to ensure correctness and stability of the implementation.",
        ],
        images: [],
        // link: "https://viptransfertr.com",
      },
      {
        company: "Node.js",
        timeframe: "Aug 2023 - Sep 2023",
        role: "Open Source Developer",
        achievements: [
          "Contributed to codebase modernization efforts by removing legacy components, including DownloadToggle, DarkModeToggle, and NewHeader, improving maintainability and reducing technical debt.",
          "Participated in architectural improvements that enhanced long-term project stability, scalability, and developer experience.",
          "Collaborated with maintainers through the open-source review process to ensure smooth integration and code quality standards.",
        ],
        images: [],
        // link: "https://dnzgeridonusum.com",
      },
      {
        company: "AWS",
        timeframe: "Jul 2023 - Aug 2023",
        role: "Open Source Developer",
        achievements: [
          "Contributed to the AWS CDK pacmak project by integrating *.tsbuildinfo into the generated .npmignore configuration.",
          "Improved package generation and build artifact management, resulting in cleaner package outputs and more efficient development workflows.",
          "Collaborated with maintainers to ensure compatibility, reliability, and consistency across generated packages and release processes.",
        ],
        images: [],
        // link: "https://sylon.app",
      },
      {
        company: "Mercari",
        timeframe: "May 2023 - Oct 2023",
        role: "Software Engineer Intern",
        achievements: [
          "Developed AI-powered automation tools using GPT-4, Python, and JavaScript to streamline internal marketplace and operational workflows.",
          "Built browser-based productivity solutions and backend automation services that reduced repetitive manual tasks by 30%.",
          "Designed and implemented intelligent workflows for data processing, content handling, and operational efficiency across internal teams.",
          "Collaborated with cross-functional engineering and product teams to integrate AI capabilities into existing tools and business processes.",
          "Improved team productivity and workflow efficiency through automation-driven solutions and rapid experimentation with emerging AI technologies.",
        ],
        images: [],
        // link: "https://mcstat.org",
      },
      {
        company: "10x Academy",
        timeframe: "Jun 2022 - Jul 2024",
        role: "DSA & Development Mentor",
        achievements: [
          "Mentored 3,000+ students and working professionals in Data Structures & Algorithms, Competitive Programming, and Software Development through 1:1 mentoring, group programs, workshops, and doubt-solving sessions.",
          "Guided learners in strengthening problem-solving skills, system design fundamentals, and interview preparation for leading technology companies.",
          "Debugged, reviewed, and optimized dozens of student projects and assignments, improving code quality, performance, and maintainability.",
          "Authored 40+ technical articles, learning resources, and DSA problem sets covering algorithms, software engineering, and competitive programming concepts.",
          "Helped aspiring developers accelerate their learning journey through structured mentorship, personalized guidance, and career-focused coaching.",
        ],
        images: [],
        // link: "https://mcstat.org",
      },
      {
        company: "Blackbird.AI",
        timeframe: "Mar 2022 - May 2022",
        role: "Software Engineer Intern",
        achievements: [
          "Contributed to multiple client-facing projects involving Harrison.AI, Baraja, and Morse Micro, supporting product development and optimization initiatives.",
          "Participated in code validation, sprint planning, retrospectives, and cross-functional collaboration to improve development processes and product quality.",
          "Designed and proposed an A/B testing framework, defining experimentation methodologies, success metrics, and data-driven optimization strategies.",
          "Leveraged analytics, user behavior insights, and experimentation techniques to identify improvement opportunities and enhance product outcomes.",
          "Collaborated with engineering and product teams to evaluate features, validate hypotheses, and support data-informed decision-making.",
        ],

        images: [],
        // link: "https://mcstat.org",
      },
      {
        company: "Coding Ninjas",
        timeframe: "Feb 2022 - May 2022",
        role: "Teaching Assistant",
        achievements: [
          "Mentored 1,000+ students in Data Structures, Algorithms, Competitive Programming, and technical interview preparation.",
          "Provided one-on-one guidance, debugging support, code reviews, and doubt resolution to help students strengthen their problem-solving skills.",
          "Assisted learners in improving coding interview performance through structured practice, mock interviews, and algorithmic problem-solving techniques.",
          "Guided students in building strong foundations in software development and computer science fundamentals.",
          "Helped aspiring engineers achieve their academic, competitive programming, and career goals through personalized mentorship and continuous support.",
        ],

        images: [],
        // link: "https://mcstat.org",
      },
    ],
    studies: [
{
name: "Bachelor of Technology (B.Tech) in Computer Science & Engineering",
description:
"ICFAI University, Tripura • CGPA: 9.0/10. Coursework: Data Structures & Algorithms, Operating Systems, Database Management Systems, Computer Networks, Object-Oriented Programming, Software Engineering, Distributed Systems, Machine Learning, Artificial Intelligence, and Cloud Computing.",
},
],
    technical: [
      {
  title: "Frontend Development",
  description: "95% proficiency",
  images: [],
  tags: [
    { name: "React.js", icon: "react" },
    { name: "Next.js", icon: "nextjs" },
    { name: "JavaScript", icon: "javascript" },
    { name: "TypeScript", icon: "typescript" },
    { name: "Tailwind CSS", icon: "css" },
    { name: "HTML5", icon: "html" },
    { name: "CSS3", icon: "css" },
  ],
},
{
  title: "Backend Development",
  description: "95% proficiency",
  images: [],
  tags: [
    { name: "Node.js", icon: "nodejs" },
    { name: "Express.js", icon: "javascript" },
    { name: "NestJS", icon: "typescript" },
    { name: "Python", icon: "code" },
    { name: "Java", icon: "code" },
    { name: "Socket.IO", icon: "javascript" },
  ],
},
{
  title: "Database & Data",
  description: "90% proficiency",
  images: [],
  tags: [
    { name: "PostgreSQL", icon: "database" },
    { name: "MongoDB", icon: "database" },
    { name: "Redis", icon: "database" },
    { name: "MySQL", icon: "database" },
  ],
},
{
  title: "AI & Machine Learning",
  description: "90% proficiency",
  images: [],
  tags: [
    { name: "OpenAI GPT-4", icon: "code" },
    { name: "GPT-4o", icon: "code" },
    { name: "Claude", icon: "code" },
    { name: "Gemini", icon: "code" },
    { name: "LangChain", icon: "code" },
    { name: "RAG", icon: "database" },
    { name: "Prompt Engineering", icon: "code" },
    { name: "AI Agents", icon: "code" },
    { name: "Vector Databases", icon: "database" },
  ],
},
{
  title: "Cloud & DevOps",
  description: "85% proficiency",
  images: [],
  tags: [
    { name: "AWS", icon: "cloud" },
    { name: "Docker", icon: "code" },
    { name: "GitHub Actions", icon: "github" },
    { name: "Nginx", icon: "code" },
    { name: "Linux", icon: "terminal" },
    { name: "Git", icon: "github" },
    { name: "Vercel", icon: "vercel" },
  ],
},
{
  title: "Open Source & Technical Content",
  description: "95% proficiency",
  images: [],
  tags: [
    { name: "GitHub", icon: "github" },
    { name: "Dev.to", icon: "code" },
    { name: "Hashnode", icon: "code" },
  ],
},
    ],
  },
  gallery: [
    "/images/projects/codeshare.png",
    "/images/projects/beatra.png",
    "/images/projects/viptransfertr.png",
    "/images/projects/dnzgeridonusum.png",
    "/images/projects/umutxyp.jpg",
  ],
  github: {
    username: "NextThread",
    highlight: [
      "Nautilus_trader",
      "nodejs.org",
      "jsii",
      // "VipTransferTR",
      // "DNZGeriDonusum",
      // "CreatorStudioAutomation",
    ],
    description:
      "Open-sourcing Discord bots, automation pipelines, and production-ready SaaS starters used inside Codeshare.",
  },
};

export default siteData;
