export const profile = {
  name: 'Gokulanand M',
  role: 'AI & Machine Learning Student | Full Stack Developer',
  heroTitle: 'AI & Machine Learning Engineer',
  college: 'Sri Eshwar College of Engineering',
  degree: 'B.E. Artificial Intelligence and Machine Learning',
  cgpa: '7.41',
  email: 'gokulanand.m2024aiml@sece.ac.in',
  phone: '+91 9865938335',
  phoneHref: 'tel:+919865938335',
  location: 'Tamil Nadu, India',
  linkedin: 'https://www.linkedin.com/in/gokulanand-m',
  github: 'https://github.com/gokulanand',
  resume: '/Gokulanand_M_Resume.pdf',
  photo: '/images/gokulanand-m-profile.jpeg',
  photoAlt: 'Portrait of Gokulanand M',
  intro:
    'Passionate AI & ML student focused on building intelligent solutions using Machine Learning, Web Development, and Computer Vision.',
  about:
    'I am pursuing Artificial Intelligence and Machine Learning at Sri Eshwar College of Engineering, building a strong foundation in intelligent systems, full-stack engineering, and practical problem solving.',
  objective:
    'My goal is to grow into an AI/ML engineer who builds useful, reliable products that combine data, automation, and clean user experiences.',
};

export const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Achievements', href: '#achievements' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
];

export const skillCategories = [
  {
    title: 'Programming Languages',
    accent: 'cyan',
    skills: ['C', 'C++', 'Python', 'JavaScript', 'HTML', 'CSS'],
  },
  {
    title: 'Frameworks & Technologies',
    accent: 'violet',
    skills: ['React', 'TypeScript', 'Tailwind CSS', 'Flask', 'Machine Learning'],
  },
  {
    title: 'Tools',
    accent: 'emerald',
    skills: ['VS Code', 'Canva', 'MS Word', 'PowerPoint'],
  },
  {
    title: 'Soft Skills',
    accent: 'amber',
    skills: ['Communication', 'Problem Solving', 'Critical Thinking', 'Time Management'],
  },
];

export const projects = [
  {
    id: 1,
    title: 'Online Learning System',
    description:
      'Developed a Smart Online Learning and Progress Tracking System that integrates free educational resources from multiple platforms and provides centralized learning. Features include progress tracking, assessments, and personalized course recommendations.',
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Flask'],
    image: '/images/online-learning-system.png',
    github: 'https://github.com/gokulanand/online-learning-system',
    liveDemo: 'https://online-learning-demo.vercel.app',
  },
  {
    id: 2,
    title: 'Automated Attendance System',
    description:
      'Developed an AI-powered attendance system that detects and recognizes multiple students from classroom images to automate attendance management.',
    techStack: ['Python', 'FaceNet', 'MTCNN', 'OpenCV', 'Flask'],
    image: '/images/automated-attendance-system.png',
    github: 'https://github.com/gokulanand/automated-attendance-system',
    liveDemo: 'https://attendance-system-demo.vercel.app',
  },
  {
    id: 3,
    title: 'Damage Detection System',
    description:
      'Built a Machine Learning-based damage detection platform that identifies and classifies vehicle damage from uploaded images using image processing and predictive models.',
    techStack: ['Python', 'Flask', 'Machine Learning'],
    image: '/images/damage-detection-system.png',
    github: 'https://github.com/gokulanand/damage-detection-system',
    liveDemo: 'https://damage-detection-demo.vercel.app',
  },
  {
    id: 4,
    title: 'AgroConnect Weather Forecasting',
    description:
      'Developed a weather forecasting website with real-time weather updates and user-friendly dashboard for farmers and users.',
    techStack: ['JavaScript', 'HTML', 'CSS'],
    image: '/images/agroconnect-weather.png',
    github: 'https://github.com/gokulanand/agroconnect-weather',
    liveDemo: 'https://agroconnect-weather.vercel.app',
  },
];

export const achievements = [
  {
    id: 1,
    label: 'SkillRack Problems',
    value: 500,
    suffix: '+',
    detail: 'Solved 500+ SkillRack problems',
  },
  {
    id: 2,
    label: 'SkillRack Certificates',
    value: 3,
    suffix: '',
    detail: 'Earned 3 SkillRack certificates',
  },
  {
    id: 3,
    label: 'LeetCode Problems',
    value: 50,
    suffix: '+',
    detail: 'Solved 50+ LeetCode problems',
  },
  {
    id: 4,
    label: 'Paper Presentation',
    value: 1,
    suffix: '',
    detail: 'Participated at Karpagam College of Engineering',
  },
];

export const certifications = [
  {
    id: 1,
    title: 'Complete Guide to C Programming',
    provider: 'Programming Certification',
    year: '2024',
  },
  {
    id: 2,
    title: 'Foundations Course',
    provider: 'Foundational Learning',
    year: '2024',
  },
  {
    id: 3,
    title: 'Design Thinking',
    provider: 'NPTEL',
    year: '2026',
  },
];

export const education = [
  {
    id: 1,
    institution: 'Sri Eshwar College of Engineering',
    degree: 'B.E Artificial Intelligence and Machine Learning',
    period: '2024 - 2028',
    score: 'CGPA: 7.41',
  },
  {
    id: 2,
    institution: 'Veveaham Matric Hr. Sec School',
    degree: 'HSC',
    period: 'Higher Secondary',
    score: '85.83%',
  },
  {
    id: 3,
    institution: 'Swamy Vivekananda Vidhyalaya Matric Hr. Sec School',
    degree: 'SSLC',
    period: 'Secondary School',
    score: '83.8%',
  },
];
