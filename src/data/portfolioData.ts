import type {
  PersonalInfo,
  SkillItem,
  LearningItem,
  ProjectItem,
  ProjectPlaceholder,
  ResumeConfig,
  InterestItem,
  JourneyStep,
  CareerStage,
  CertificationItem,
  AchievementItem,
  ExperienceItem,
} from '../types';

export type {
  PersonalInfo,
  SkillItem,
  LearningItem,
  ProjectItem,
  ProjectPlaceholder,
  ResumeConfig,
  InterestItem,
  JourneyStep,
  CareerStage,
  CertificationItem,
  AchievementItem,
  ExperienceItem,
};

/**
 * ============================================================================
 * CENTRAL PORTFOLIO CONFIGURATION & DATA REPOSITORY
 * Naga Balaji Singh Bondili — B.Tech CSE (AI) Student Portfolio
 * ============================================================================
 * 
 * Update your information in the designated blocks below:
 *  1. PERSONAL_INFO  -> Name, Contact, College, Location, Photo
 *  2. SKILLS         -> C, Java, DSA, and other technical proficiencies
 *  3. LEARNING       -> Current focus (HTML, CSS, Web Dev)
 *  4. PROJECTS       -> Real projects showcase (empty array = Coming Soon state)
 *  5. RESUME         -> Resume PDF URL & metadata (empty string = Coming Soon)
 *  6. OPTIONAL_SECTIONS -> Certifications, Achievements, Internships, Experience
 * ============================================================================
 */

/* ============================================================================
 * 1. PERSONAL_INFO
 * ============================================================================
 */
export const PERSONAL_INFO: PersonalInfo = {
  name: 'Naga Balaji Singh Bondili',
  headline: 'B.Tech CSE (AI) Student | Aspiring Software Developer',
  course: 'B.Tech',
  branch: 'Computer Science and Engineering – Artificial Intelligence (CSE-AI)',
  year: '2nd Year',
  college: 'Sri Mittapalli College Of Engineering',
  location: 'Guntur, Andhra Pradesh, India',
  careerGoal: 'Software Developer',
  email: 'nagabalajisingh3@gmail.com',
  phone: '+91 9392102234',
  phoneRaw: '+919392102234',
  linkedInUrl: 'https://www.linkedin.com/in/naga-balaji-singh-b98026375/',

  /**
   * 📸 PROFILE PHOTO CONFIGURATION
   * - Points directly to your uploaded photo: '/balaji linkedin.png' (or '/profile.png')
   * - You can drop 'balaji linkedin.png' into the /public folder via File Explorer,
   *   or click the avatar card in the live preview to select your exact photo directly.
   */
  profilePhotoUrl: '/balaji linkedin.png',

  supportingText:
    'Passionate about programming, problem solving, and building a strong foundation in computer science. Currently developing my skills in C, Java, Data Structures and Algorithms, HTML, and CSS.',

  aboutText: [
    'I am Naga Balaji Singh Bondili, a 2nd-year B.Tech student specializing in Computer Science and Engineering with Artificial Intelligence at Sri Mittapalli College Of Engineering.',
    'I am interested in software development and enjoy learning programming concepts, problem solving, and data structures. I have experience with C programming, Java, and Data Structures and Algorithms, and I am currently expanding my web development skills by learning HTML and CSS.',
    'My goal is to continuously improve my technical knowledge, build meaningful projects, and grow into a skilled Software Developer.',
  ],
};

// Backwards-compatible alias
export const personalInfo = PERSONAL_INFO;

/* ============================================================================
 * 2. SKILLS (Technical Proficiencies)
 * ============================================================================
 */
export const SKILLS: SkillItem[] = [
  {
    id: 'c-programming',
    name: 'C Programming',
    category: 'core',
    iconName: 'Terminal',
    description:
      'Building a strong foundation in computational logic, memory architecture, and procedural programming.',
    keyConcepts: [
      'Pointers & Dynamic Memory Allocation',
      'Control Flow, Loops & Conditionals',
      'Modular Functions & Scope',
      'Structures, Unions & File I/O',
    ],
    learningFocus:
      'System-level fundamentals, computational memory models, and algorithmic efficiency.',
  },
  {
    id: 'java',
    name: 'Java',
    category: 'language',
    iconName: 'Coffee',
    description:
      'Developing structured, object-oriented software logic with clean class architectures.',
    keyConcepts: [
      'OOP Principles (Encapsulation, Inheritance, Polymorphism, Abstraction)',
      'Classes, Objects & Interfaces',
      'Exception Handling & Robust Code Design',
      'Java Collections Framework Basics',
    ],
    learningFocus:
      'Writing reusable, modular code and understanding scalable object hierarchies.',
  },
  {
    id: 'dsa',
    name: 'Data Structures & Algorithms',
    category: 'algorithmic',
    iconName: 'Cpu',
    description:
      'Sharpening analytical thinking through fundamental data structures and algorithmic patterns.',
    keyConcepts: [
      'Arrays & Strings Manipulation',
      'Linked Lists, Stacks & Queues',
      'Recursion & Divide-and-Conquer',
      'Sorting & Searching Algorithms',
    ],
    learningFocus:
      'Analyzing asymptotic time and space complexity (Big-O) to write optimized solutions.',
  },
];

export const technicalSkills = SKILLS;

/* ============================================================================
 * 3. LEARNING (Currently In Progress)
 * ============================================================================
 */
export const LEARNING: LearningItem[] = [
  {
    id: 'html',
    name: 'HTML',
    status: 'In Progress',
    iconName: 'FileCode2',
    description:
      'Learning the fundamentals of creating structured web pages and semantic markup.',
    topics: [
      'Semantic tags & accessibility standards',
      'Document structure & SEO metadata',
      'Forms, inputs & modern validation',
      'Responsive media elements & linking',
    ],
  },
  {
    id: 'css',
    name: 'CSS',
    status: 'In Progress',
    iconName: 'Palette',
    description:
      'Learning how to design responsive, aesthetic, and user-friendly web layouts.',
    topics: [
      'Modern Flexbox & CSS Grid systems',
      'Responsive design & media queries',
      'Modern color theory & typography scales',
      'Smooth transitions & clean UI styling',
    ],
  },
];

export const currentlyLearning = LEARNING;

/* ============================================================================
 * 4. PROJECTS SYSTEM (Future-Ready)
 * ============================================================================
 * 
 * 💡 HOW TO ADD A PROJECT IN THE FUTURE:
 * When you complete a project, add an entry to the `PROJECTS` array below:
 * 
 * {
 *   title: "Campus AI Attendance System",
 *   description: "Automated student attendance tracking with Java and computer vision.",
 *   image: "/assets/projects/attendance.jpg", // (Optional: screenshot path or external link)
 *   technologies: ["Java", "OpenCV", "CSS"],
 *   github: "https://github.com/username/project", // (Optional: hidden if empty)
 *   liveDemo: "https://project-demo.com",         // (Optional: hidden if empty)
 *   details: "Full architectural breakdown..."    // (Optional)
 * }
 * 
 * ⚡ NOTE:
 * - Currently this array is EMPTY ([]).
 * - When empty, the site automatically renders the polished "Projects Coming Soon" state.
 * - As soon as you add one or more projects, it automatically switches to displaying real project cards!
 */
export const PROJECTS: ProjectItem[] = [];

// Backwards-compatible alias
export const projects = PROJECTS;

/**
 * Placeholder Cards for the "Coming Soon" state:
 * Displayed automatically when PROJECTS array is empty.
 */
export const PROJECT_PLACEHOLDERS: ProjectPlaceholder[] = [
  {
    number: '01',
    title: 'Project 01',
    status: 'Coming Soon',
    description:
      'A foundational software application focusing on data structures, algorithmic efficiency, and clean code principles.',
    plannedTech: ['Java', 'Algorithms', 'Logic'],
    focusArea: 'Core Software Engineering',
  },
  {
    number: '02',
    title: 'Project 02',
    status: 'Coming Soon',
    description:
      'An interactive web interface designed using semantic HTML and responsive CSS styling with clean UX practices.',
    plannedTech: ['HTML5', 'CSS3', 'Responsive UI'],
    focusArea: 'Frontend Web Development',
  },
  {
    number: '03',
    title: 'Project 03',
    status: 'Coming Soon',
    description:
      'A practical utility application exploring the intersection of computer science fundamentals and real-world problem solving.',
    plannedTech: ['Problem Solving', 'Data Modeling', 'UI'],
    focusArea: 'Applied Computing & AI',
  },
];

/* ============================================================================
 * 5. RESUME SYSTEM (Future-Ready)
 * ============================================================================
 * 
 * 💡 HOW TO ACTIVATE THE RESUME IN THE FUTURE:
 * 1. Place your PDF file in `/public/assets/resume.pdf` (or any public URL/Drive link).
 * 2. Set `RESUME_URL = "/assets/resume.pdf"` (or your URL).
 * 
 * Once set:
 * - "Resume Coming Soon" automatically becomes "View Resume"
 * - A "Download Resume" button appears automatically
 * - Clicking opens or downloads the PDF seamlessly
 * - When empty (""), the site stays in the graceful "Resume Coming Soon" state.
 */
export const RESUME_URL: string = ''; // e.g. "/assets/resume.pdf" or external link

export const RESUME_CONFIG: ResumeConfig = {
  resumeUrl: RESUME_URL,
  fileName: 'Naga_Balaji_Singh_Resume.pdf',
  lastUpdated: 'Target: 2026 Academic Year',
  tagline: 'Academic & Technical Credentials',
};

/* ============================================================================
 * 6. INTERESTS BEYOND CODING
 * ============================================================================
 */
export const PERSONAL_INTERESTS: InterestItem[] = [
  {
    id: 'cricket',
    title: 'Cricket',
    emoji: '🏏',
    description: 'Enjoy playing cricket and following the sport.',
    tag: 'Team Sport & Strategy',
    details:
      'Appreciates tactical gameplay, team coordination, strategy under pressure, and active fitness.',
  },
  {
    id: 'movies',
    title: 'Movies',
    emoji: '🎬',
    description: 'Enjoy watching movies across different genres.',
    tag: 'Storytelling & Cinema',
    details:
      'Enjoys engaging storytelling, world-building, cinematic pacing, and creative direction.',
  },
  {
    id: 'anime',
    title: 'Anime',
    emoji: '🎌',
    description: 'Enjoy exploring anime series and stories.',
    tag: 'Imagination & Narrative',
    details:
      'Drawn to intricate plotlines, persistent protagonist journeys, creative animation, and thematic depth.',
  },
];

export const personalInterests = PERSONAL_INTERESTS;

/* ============================================================================
 * 7. LEARNING JOURNEY TIMELINE
 * ============================================================================
 */
export const LEARNING_JOURNEY_STEPS: JourneyStep[] = [
  {
    step: '01',
    title: 'Programming Fundamentals',
    subtitle: 'C Programming',
    status: 'Completed',
    description:
      'Built core programming instincts, logic gates, memory concepts, and structured code formulation.',
  },
  {
    step: '02',
    title: 'Object-Oriented Programming',
    subtitle: 'Java',
    status: 'In Progress',
    description:
      'Transitioning from procedural logic to modular, class-based object modeling and design patterns.',
  },
  {
    step: '03',
    title: 'Problem Solving',
    subtitle: 'Data Structures & Algorithms',
    status: 'In Progress',
    description:
      'Strengthening algorithmic problem solving, recursion, time complexities, and foundational data structures.',
  },
  {
    step: '04',
    title: 'Web Development',
    subtitle: 'HTML & CSS — Currently Learning',
    status: 'In Progress',
    description:
      'Acquiring frontend fundamentals to transform algorithms and software ideas into visual web applications.',
  },
  {
    step: '05',
    title: 'Future Projects',
    subtitle: 'Coming Soon',
    status: 'Coming Soon',
    description:
      'Upcoming projects integrating backend logic with modern responsive user interfaces.',
  },
];

export const learningJourneySteps = LEARNING_JOURNEY_STEPS;

/* ============================================================================
 * 8. CAREER GOAL LIFECYCLE
 * ============================================================================
 */
export const CAREER_STAGES: CareerStage[] = [
  {
    stage: '01',
    label: 'Learn',
    description:
      'Deepening core computer science principles, algorithms, and fundamental technologies.',
    iconName: 'BookOpen',
  },
  {
    stage: '02',
    label: 'Build',
    description:
      'Translating theoretical knowledge into practical, well-structured software applications.',
    iconName: 'Code2',
  },
  {
    stage: '03',
    label: 'Improve',
    description:
      'Refining code quality, practicing algorithmic problem solving, and adopting modern industry practices.',
    iconName: 'TrendingUp',
  },
  {
    stage: '04',
    label: 'Contribute',
    description:
      'Collaborating on real-world engineering teams and building impactful digital solutions.',
    iconName: 'Sparkles',
  },
];

export const careerStages = CAREER_STAGES;

/* ============================================================================
 * 9. OPTIONAL FUTURE SECTIONS (Certifications, Achievements, Internships)
 * ============================================================================
 * 
 * 💡 When Naga Balaji completes internships, earns certificates, or wins awards,
 * populate the respective arrays below. If kept empty ([]), they will not
 * display fake content, keeping the portfolio completely truthful and clean.
 */
export const CERTIFICATIONS: CertificationItem[] = [
  // Example future entry:
  // {
  //   title: "Java Fundamentals",
  //   issuer: "Oracle / Coursera",
  //   date: "2026",
  //   credentialUrl: "https://...",
  //   skills: ["Java", "OOP"]
  // }
];

export const ACHIEVEMENTS: AchievementItem[] = [];

export const INTERNSHIPS: ExperienceItem[] = [];

export const EXPERIENCES: ExperienceItem[] = [];
