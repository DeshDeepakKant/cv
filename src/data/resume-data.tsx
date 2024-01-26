import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";
import { SiLeetcode, SiCodeforces, SiCodechef } from "react-icons/si";

export const RESUME_DATA = {
  name: "Desh Deepak Kant",
  initials: "DDK",
  location: "Prayagraj, Uttar Pradesh, India",
  locationLink: "https://www.google.com/maps/place/prayagraj",
  about:
    "CS Undergrad & Passionate Competitive Programmer",
  summary:
    "Passionate with a strong proficiency in Competitive Programming and a solid grasp of Data Structures and Algorithms. Enthusiastic about problem-solving and actively participates in coding contests and hackathons to continually enhance skills. Eager to apply expertise in application development, particularly in Flutter for mobile platforms, and adept at web development Seeking opportunities to contribute innovative solutions and grow in a dynamic and challenging environment",
  avatarUrl: "",
  contact: {
    email: "deshdeepakkant@gmail.com",
    tel: "+91 7607506542",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/deshdeepakkant",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/desh-deepak-kant-75b858201",
        icon: LinkedInIcon,
      },
      {
        name: "LeetCode",
        url: "https://leetcode.com/Sita_Ram",
        icon: SiLeetcode,
      },
      {
        name: "Codeforces",
        url: "https://codeforces.com/desh_deepak_kant",
        icon: SiCodeforces,
      },
      {
        name: "Codechef",
        url: "https://codechef.com/deshdeepakkant",
        icon: SiCodechef,
      },
    ],
  },
  education: [
    {
      school: "Indian Institute of Information Technology Agartala, Tripura",
      degree: "Bachelor of Technology, Computer Science & Engineering",
      start: "2022",
      end: "2026",
    },
    {
      school: "Sunbeam English School, Varanasi, Uttar Pradesh",
      degree: "Intermediate (+2) - PCM - CBSE",
      start: "2021",
      end: "2020",
    },
    {
      school: "Central Hindu Boys School (BHU), Varanasi, Uttar Pradesh",
      degree: "High School (X) - CBSE",
      start: "2019",
      end: "2018",
    },
  ],
  work: [
  ],
  achievement: [
    {
      title: "Google Code Jam '23: Rank - 4339",
      year: "2023",
    },
    {
      title: "Qualified Meta Hacker Cup 2023 Round - 1",
      year: "2023",
    },
    {
      title: "2nd position in CP Titans 3.0",
      year: "2023",
    },
    {
      title: "Codeforces Rating: Pupil - 1275",
      year: "2023",
    },
    {
      title: "Codechef Rating: 2⭐- 1513",
      year: "2023",
    },
    {
      title: "Solved 500+ complex CP problems in major Online Judges",
      year: "Since 2022",
    },
    {
      title: "Qualified JEE Mains 2022: AIR-35760",
      year: "2022",
    },
    {
      title: "Qualified NTSE Stage 1",
      year: "2019",
    },
  ],
  skills: [
    "C++",
    "C",
    "JavaScript",
    "Python",
    "Dart",
    "Android SDK",
    "Flutter",
  ],
  projects: [
    {
      title: "Minesweeper",
      techStack: ["C++"],
      description: "A simple minesweeper game built in C++",
      link: {
        label: "GitHub",
        href: "https://github.com/DeshDeepakKant/minesweeper",
      },
    },
    {
      title: "Sudoku Solver",
      techStack: ["C++"],
      description: "An implementation in C++ in form of a sudoku solver program",
      link: {
        label: "GitHub",
        href: "https://github.com/DeshDeepakKant/sudoku_solver",
      },
    },
    {
      title: "Calculator",
      techStack: ["Flutter", "Dart"],
      description: "A calculator application created using Flutter",
      link: {
        label: "GitHub",
        href: "https://github.com/DeshDeepakKant/minesweeper",
      },
    },
  ],
} as const;
