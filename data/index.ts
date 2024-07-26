export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#projects" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a Social Media Network",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "3D Developer Portfolio",
    des: "Built and Deployed an Amazing 3D Developer Portfolio in React with Three.js.",
    img: "/3disland.png",
    iconLists: ["/re.svg", "/vite.svg", "/javascript.svg", "/three.svg"],
    link: "https://welldiusprimex-3d-developer-portfolio.vercel.app/",
  },
  {
    id: 2,
    title: "Netflix - Streaming service App",
    des: "Recreated the Netflix website. using React JS, Firebase, Styled Components and Redux.",
    img: "/netflix.png",
    iconLists: ["/re.svg", "/firebase.svg", "/redux.svg", "/styled.svg"],
    link: "https://disneyplus-clone-f47ae.web.app",
  },
  {
    id: 3,
    title: "Thread - Social Media Application",
    des: "Threads, Next.js 13 app that skyrocketed to 100 million sign-ups in less than 5 days, and dethroned giants like Twitter, ChatGPT, and TikTok to become the fastest-growing app ever!",
    img: "/p10.png",
    iconLists: [
      "/next.svg",
      "/tail.svg",
      "/ts.svg",
      "/re.svg",
      "/c.svg",
      "/mongodb.svg",
    ],
    link: "https://socialmediaapp-beige.vercel.app/",
  },
  {
    id: 4,
    title: "Animated Apple Iphone 3D Website",
    des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://welldiusprimex-apple-iphone-website-clone-2024.vercel.app/",
  },
];

export const testimonials = [
  {
    quote:
      "Allwell is good at what he does. His integrity and work ethic make him stand out.",
    name: "Aisha Usman",
    title: "Lecturer - University of Lagos",
    img: "/aisha.jpeg",
  },
  {
    quote:
      "Passion and Precision are the two words I can use to describe the way you deliver projects.You're doing great.",
    name: "Stephen Okafor",
    title: "Software Developer - CWG Plc.",
    img: "/stephen.jpeg",
  },
  {
    quote:
      "Working with Allwell has been one of the best decisions I made in achieving my goals. His expertise, creativity, and dedication is unmatched.I highly recommend him for all intending clients.",
    name: "Precious Ekomabasi Iden",
    title: "Staff - PIE Enterprise",
    img: "/precious.jpeg",
  },
  {
    quote:
      "An individual that embodies intelligence, his knowledge cut across not only on one field but cut across so many other things. Allwell is a role model, he  has inspired so many young people to reach their potentials.",
    name: "Lucky Nwokocha Chibuzor",
    title: "Staff - Sims Nigeria Limited",
    img: "/lucky.jpeg",
  },
];

export const companies = [
  {
    id: 1,
    name: "google",
    img: "/google.svg",
    nameImg: "/googlename.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Google Ambassador",
    desc: "Attended Google events as a Google representative and helped Google to better understand my campus' culture,building relationships on campus with faculty and student groups.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Quality Assurance Analyst - Evolutics Technology Services",
    desc: "Executed tests to verify product functionality, Documented findings and reported defects,Reviewed products for defects and errors.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Lecturer - University of Lagos",
    desc: "Served on department and university committees to contribute to the overall advancement of the academic institution.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Freelance Front-end Developer - Welldiness_LMPG",
    desc: "Developing and maintaining web applications using React.js and other related technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/WelldiusPrimeX/",
  },
  {
    id: 2,
    img: "/facebookw.svg",
    link: "https://www.facebook.com/allwell.nwogu/",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/allwell-nwogu-6a32a1102/",
  },
];
