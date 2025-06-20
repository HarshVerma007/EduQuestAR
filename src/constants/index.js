import {
  // mobile,
  // backend,
  // creator,
  // web,
  // javascript,
  // typescript,
  // html,
  // css,
  // reactjs,
  // redux,
  // tailwind,
  // nodejs,
  // mongodb,
  // git,
  // figma,
  // docker,

  explore,
  download,
  marker,
  setup,
  camera,
  learning,
  skeleton1,
  heart,
  solar,
  // threejs,
  shooter,
  portal,
  mind,
} from "../assets";

// export const navLinks = [
//   {
//     id: "about",
//     title: "About",
//   },
//   {
//     id: "work",
//     title: "Work",
//   },
//   {
//     id: "contact",
//     title: "Contact",
//   },
// ];

const services = [
  // {
  //   title: "",
  //   icon: web,
  // },
  // {
  //   title: "",
  //   icon: mobile,
  // },
  // {
  //   title: "",
  //   icon: backend,
  // },
  // {
  //   title: "",
  //   icon: creator,
  // },
];

const technologies = [
  // {
  //   name: "HTML 5",
  //   icon: html,
  // },
  // {
  //   name: "CSS 3",
  //   icon: css,
  // },
  // {
  //   name: "JavaScript",
  //   icon: javascript,
  // },
  // {
  //   name: "TypeScript",
  //   icon: typescript,
  // },
  // {
  //   name: "React JS",
  //   icon: reactjs,
  // },
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
  // {
  //   name: "Tailwind CSS",
  //   icon: tailwind,
  // },
  // {
  //   name: "Node JS",
  //   icon: nodejs,
  // },
  // {
  //   name: "MongoDB",
  //   icon: mongodb,
  // },
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  // {
  //   name: "git",
  //   icon: git,
  // },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "*Explore and Discover*",
    // company_name: "explore",
    icon: explore,
    iconBg: "#383E56",
    date: "Step-1",
    points: [
      "Open our user-friendly website and seamlessly navigate to the section showcasing our learning apps",
    ],
  },
  {
    title: "*Download and Install*",
 
    icon: download,
    iconBg: "#E6DEDD",
    date: "Step-2",
    points: [
      " Choose the app that aligns with the topic you want to explore in AR, effortlessly download, and install it on your device",
    ],
  },
  {
    title: "*For Marker-Based Projects*",
    icon: marker,
    iconBg: "#383E56",
    date: "Step-3",
    points: [
      "If engaging in a marker-based project, conveniently download the marker associated with the topic. ",
    ],
  },
  {
    title: "*Setup for Augmented Reality*",
    icon: setup,
    iconBg: "#E6DEDD",
    date: "Step-4",
    points: [
      "Open the app and position it toward the horizontally placed marker. Ensure your device is held vertically for optimal engagement.",
    ],
  },
  {
    title: "*Camera Permission*",
    icon: camera,
    iconBg: "#E6DEDD",
    date: "Step-5",
    points: [
      "Grant permission to your device camera, allowing the magic of augmented reality to unfold before your eyes.",
    ],
  },
  {
    title: "*Dive into Learning*",
    icon: learning,
    iconBg: "#E6DEDD",
    date: "Step-6",
    points: [
      "With a simple setup, you're all set to dive into an immersive learning experience, where education meets the future!",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      
      "Utilizing both marker-based and marker-less AR technologies, offering a versatile and adaptive learning experience.",

  },
  {
    testimonial:
      
      "Integration of interactive AR components featuring captivating animations, ensuring a dynamic and engaging educational experience.",    

  },
  {
    testimonial:
      
      "Incorporating game-based learning elements to make education enjoyable, motivating kids to actively participate and learn through play.",

  },
  {
    testimonial:
      
      "Seamlessly blending virtual content with the real-world environment, allowing kids to walk around and augment their surroundings for an immersive and interactive learning adventure.",

  },
  {
    testimonial:
      
      "Simplifying the app download process, ensuring users can quickly and easily access the learning application without unnecessary complexities.",
  },
  {
    testimonial:
      
      "Offering an innovative UI/UX design within the app to maximize efficiency, ensuring a smooth and user-friendly learning experience.",
  },
  
 
];

const projects = [
  {
    name: "Skeleton",
    description:
      "An innovative heart education app that utilizes augmented reality to project a beating heart onto a marker. The app highlights various parts of the heart, offering a visually immersive experience and providing educational insights into the anatomy of this vital organ.",
    tags: [
      // {
      //   name: "react",
      //   color: "blue-text-gradient",
      // },
      // {
      //   name: "mongodb",
      //   color: "green-text-gradient",
      // },
      // {
      //   name: "tailwind",
      //   color: "pink-text-gradient",
      // },
    ],
    image: skeleton1,
    source_code_link: "src/assets/skeleton.apk",
  },
  {
    name: " Human Heart",
    description:
      "An innovative heart education app that utilizes augmented reality to project a beating heart onto a marker. The app highlights various parts of the heart, offering a visually immersive experience and providing educational insights into the anatomy of this vital organ..",
    tags: [
      // {
      //   name: "react",
      //   color: "blue-text-gradient",
      // },
      // {
      //   name: "restapi",
      //   color: "green-text-gradient",
      // },
      // {
      //   name: "scss",
      //   color: "pink-text-gradient",
      // },
    ],
    image: heart,
    source_code_link: "src/assets/HeartWithScale.apk",
  },
  {
    name: "Solar Sytsem",
    description:
      "An augmented reality app showcasing the solar system, featuring dynamic animations of the sun and planets revolving on their axes while orbiting the sun. The app incorporates special effects for an engaging and immersive experience.",
    tags: [
      // {
      //   name: "nextjs",
      //   color: "blue-text-gradient",
      // },
      // {
      //   name: "supabase",
      //   color: "green-text-gradient",
      // },
      // {
      //   name: "css",
      //   color: "pink-text-gradient",
      // },
    ],
    image: solar,
    source_code_link: "src/assets/SOLARSYSTEM.apk",
  },
  {
    name: "Ar Shooter",
    description:
      "Embark on an interactive learning adventure with our AR app! Dive into a vibrant world, Explore the augmented reality environment, tapping on spheres to uncover the alphabet in a fun  way. creating an immersive learning experience that turns mastering the ABCs into an exciting journey.",
    tags: [
      // {
      //   name: "nextjs",
      //   color: "blue-text-gradient",
      // },
      // {
      //   name: "supabase",
      //   color: "green-text-gradient",
      // },
      // {
      //   name: "css",
      //   color: "pink-text-gradient",
      // },
    ],
    image: shooter,
    source_code_link: "src/assets/LoonShoot.apk",
  },
  {
    name: "Ar Portal",
    description:
      "Step into an AR portal and find yourself in a Victorian room, where lace curtains flutter and gas lamps illuminate intricately carved furniture. Uncover the secrets of a bygone era as you explore a world where history meets immersive technology.",
    tags: [
      // {
      //   name: "nextjs",
      //   color: "blue-text-gradient",
      // },
      // {
      //   name: "supabase",
      //   color: "green-text-gradient",
      // },
      // {
      //   name: "css",
      //   color: "pink-text-gradient",
      // },
    ],
    image: portal,
    source_code_link: "https://github.com/",
  },
  {
    name: "Human Mind",
    description:
      "An augmented reality app showcasing the solar system, featuring dynamic animations of the sun and planets revolving on their axes while orbiting the sun. The app incorporates special effects for an engaging and immersive experience.",
    tags: [
      // {
      //   name: "nextjs",
      //   color: "blue-text-gradient",
      // },
      // {
      //   name: "supabase",
      //   color: "green-text-gradient",
      // },
      // {
      //   name: "css",
      //   color: "pink-text-gradient",
      // },
    ],
    image: mind,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
