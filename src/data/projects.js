/**
 * Titles: Brand-style name : product line (Title Case after colon where noted).
 * Images: Unsplash; replace with /public assets when ready.
 * Tags: nine per project for even card layout.
 */
export const projects = [
  /* —— Spotlight —— */
  {
    id: 1,
    title: "Cursor : AI Powered Code Editor",
    date: "Jan 2026 - Mar 2026",
    description:
      "An AI-powered code editor with intelligent generation, automated workflows, and SaaS-ready infrastructure. Built on CodeMirror 6 with Next.js and TypeScript—syntax highlighting, folding, and minimap. Features AI suggestions, quick edits, an agent with file tools and live doc scraping (Firecrawl), in-browser runs via WebContainers, real-time sync with Convex, background jobs with Inngest, Clerk auth, billing, and Sentry monitoring.",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80",
    tags: [
      "Next.js",
      "TypeScript",
      "CodeMirror 6",
      "Convex",
      "WebContainers",
      "Inngest",
      "Clerk",
      "Firecrawl",
      "Sentry",
    ],
    category: "NEXT",
    github: "https://github.com/pradyotsrivastava",
    webapp: "https://github.com/pradyotsrivastava",
  },
  {
    id: 2,
    title: "ElevenLabs : AI Voice Platform",
    date: "Nov 2025 - Dec 2025",
    description:
      "A voice AI platform for text-to-speech, voice cloning, and subscription access. Next.js and TypeScript with a type-safe tRPC backend, realistic speech with waveform playback, voice library with uploads and in-browser recording, TTS history, and audio playback. Includes auth, usage-metered billing, Cloudflare R2 storage, and Sentry error monitoring.",
    image:
      "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&w=1200&q=80",
    tags: [
      "Next.js",
      "TypeScript",
      "tRPC",
      "TTS",
      "Waveform UI",
      "Cloudflare R2",
      "Clerk",
      "Sentry",
      "SaaS Billing",
    ],
    category: "NEXT",
    github: "https://github.com/pradyotsrivastava",
    webapp: "https://github.com/pradyotsrivastava",
  },
  {
    id: 3,
    title: "Docs : Collaborative Docs Editors",
    date: "Mar 2025 - May 2025",
    description:
      "A real-time collaborative document editor (Google Docs–style), offering shared editing with version control and live synchronization for teams. Commenting, cloud storage, auto-save, secure sharing, and change tracking—built for distributed teams.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
    tags: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Convex",
      "Material UI",
      "Socket.io",
      "Redux",
      "Real-time CRDT",
      "Collaboration",
    ],
    category: "NEXT",
    github: "https://github.com/pradyotsrivastava/next-google-docs",
    webapp: "https://github.com/pradyotsrivastava/next-google-docs",
  },
  {
    id: 4,
    title: "Chit Chat : Messenger",
    date: "May 2024 - Jun 2024",
    description:
      "A WhatsApp-style messenger: direct and group chats, media and file sharing, typing and online status, and real-time delivery over sockets. Built with E2E-minded patterns, push notifications, multimedia messages, and sync-friendly state on the MERN stack.",
    image:
      "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?auto=format&fit=crop&w=1200&q=80",
    tags: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Material UI",
      "Socket.io",
      "Redux",
      "WebSocket",
      "File Sharing",
    ],
    category: "MERN",
    github: "https://github.com/pradyotsrivastava/Chit-Chat-SocialMedia",
    webapp: "https://github.com/pradyotsrivastava/Chit-Chat-SocialMedia",
  },
  {
    id: 5,
    title: "Shoppers : Ecom Store",
    date: "Apr 2024 - May 2024",
    description:
      "E-commerce on the MERN stack with Tailwind, Redux, Cloudinary, and Postman—auth, catalog, cart, and checkout.",
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=80",
    tags: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Tailwind CSS",
      "Redux",
      "Cloudinary",
      "Postman",
      "REST API",
    ],
    category: "MERN",
    github: "https://shoppers-mern-ecom.vercel.app/",
    webapp: "https://github.com/pradyotsrivastava/shoppers-mern",
  },

  {
    id: 6,
    title: "Vyanjan : Food Ordering",
    date: "Oct 2023 - Nov 2023",
    description:
      "Food ordering on the MERN stack with Cloudinary, Postman, and Axios—JWT auth, menu management, and order tracking.",
    image:
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=1200&q=80",
    tags: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Redux",
      "Axios",
      "JWT",
      "Cloudinary",
      "REST API",
    ],
    category: "MERN",
    github: "https://github.com/pradyotsrivastava/Vyanjan",
    webapp: "https://github.com/pradyotsrivastava/Vyanjan",
  },
  {
    id: 7,
    title: "Dev Connect : Developer Social",
    date: "Jun 2025 - Jul 2025",
    description:
      "A developer social network on the MERN stack with Tailwind, Redux, and Cloudinary—auth, profiles, posts, comments, and collaboration.",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80",
    tags: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Tailwind CSS",
      "Redux",
      "Cloudinary",
      "JWT",
      "REST API",
    ],
    category: "MERN",
    github: "https://github.com/pradyotsrivastava/dev-connect",
    webapp: "https://dev-connect-mern.vercel.app/",
  },
  {
    id: 8,
    title: "SMM : Social Media Management",
    date: "Jun 2024 - Dec 2024",
    description:
      "Real-time social media management—plan, schedule, and publish across channels with collaboration, versioning, and comment workflows.",
    image:
      "https://images.unsplash.com/photo-1611926653458-09294b3142bf?auto=format&fit=crop&w=1200&q=80",
    tags: [
      "React",
      "Node.js",
      "Express",
      "Spring Boot",
      "Spring MVC",
      "Microservices",
      "API Gateway",
      "Docker",
      "Scheduling",
    ],
    category: "MERN",
    github: "https://github.com/pradyotsrivastava/social-media-microservices",
    webapp: "https://github.com/pradyotsrivastava/social-media-microservices",
  },
  {
    id: 9,
    title: "Quizzer : Quiz Spring Boot REST APIs",
    date: "Jul 2024 - Aug 2024",
    description:
      "Quiz APIs with Java, Spring Boot, Spring MVC, JPA, Hibernate, and PostgreSQL—CRUD questions, submissions, scoring, Lombok, clean modules.",
    image:
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1200&q=80",
    tags: [
      "Java",
      "Spring Boot",
      "Spring MVC",
      "PostgreSQL",
      "Hibernate",
      "JPA",
      "Lombok",
      "Maven",
      "REST API",
    ],
    category: "JAVA",
    github: "https://github.com/pradyotsrivastava/quiz-app-spring-postgresql",
    webapp: "https://github.com/pradyotsrivastava/quiz-app-spring-postgresql",
  },
  {
    id: 10,
    title: "Jobify : Job Board",
    date: "Sep 2024 - Oct 2024",
    description:
      "Job portal with Java, Spring Boot, Spring MVC, and MongoDB—REST APIs for listings, applications, and profiles; Maven, Swagger-UI, modular architecture.",
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=80",
    tags: [
      "Java",
      "Spring Boot",
      "Spring MVC",
      "MongoDB",
      "Maven",
      "Swagger",
      "JWT",
      "REST API",
      "Postman",
    ],
    category: "JAVA",
    github: "https://github.com/pradyotsrivastava/job-portal-spring-boot-mongo",
    webapp: "https://github.com/pradyotsrivastava/job-portal-spring-boot-mongo",
  },
  {
    id: 11,
    title: "Glitter : Social feed",
    date: "Jan 2023 - Mar 2023",
    description:
      "A Twitter-style social app with Next.js, TypeScript, and Tailwind—posts, likes, follows, and real-time engagement with Prisma and NextAuth.",
    image:
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=1200&q=80",
    tags: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Prisma",
      "MongoDB",
      "NextAuth",
      "React",
      "OAuth",
      "REST API",
    ],
    category: "NEXT",
    github: "https://github.com/pradyotsrivastava/twitter_clone",
    webapp: "https://github.com/pradyotsrivastava/twitter_clone",
  },
  {
    id: 12,
    title: "Sigma : Design Canvas",
    date: "Jun 2023 - Jul 2023",
    description:
      "A collaborative design tool built with Next.js, TypeScript, Tailwind CSS, Fabric.js, and Liveblocks. Create and edit vector graphics in real time with a minimalist UI—live cursors, multiplayer editing, and a smooth Figma-like experience.",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=1200&q=80",
    tags: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Fabric.js",
      "Liveblocks",
      "Canvas API",
      "React",
      "Real-time",
      "Multiplayer",
    ],
    category: "NEXT",
    github: "https://sigma-next-figma.vercel.app/",
    webapp: "https://github.com/pradyotsrivastava/sigma-next-figma",
  },
];
