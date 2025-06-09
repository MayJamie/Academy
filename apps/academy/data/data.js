// apps/academy/data/data.js
// Data for courses, tutors and events respectively as seen on the pages :3

export const courses = [
  { title: "Biology", tutor: "Ms. Ria Seecharan", level: "Form 5" },
  { title: "Biology", tutor: "Mr. Yuva Roopchansingh", level: "Form 4" },

  { title: "Physics", tutor: "Ms. Ria Seecharan", level: "Form 5" },
  { title: "Physics", tutor: "Ms. Ria Seecharan", level: "Form 4" },
  // { title: "Physics", tutor: "Ms. Ria Seecharan", level: "Form 3 (NO)" },


  { title: "Chemistry", tutor: "Ms. Ria Seecharan", level: "Form 5" },
  { title: "Chemistry", tutor: "Ms. Ria Seecharan", level: "Form 4" },

  { title: "Add Maths", tutor: "Ms. Janelle Mohammed", level: "Form 5" },
  { title: "Add Maths", tutor: "Ms. Janelle Mohammed", level: "Form 4" },

  { title: "Maths", tutor: "Ms. Janelle Mohammed", level: "Joint Forms 4 and 5"},

  { title: "English A", tutor: "Ms. Priya Siewsankar", level: "Form 5" },
  { title: "English A", tutor: "Ms. Priya Siewsankar", level: "Form 4" },

  // { title: "English B", tutor: "Ms. Priya Siewsankar", level: "Form 5" },
  // { title: "English B", tutor: "Ms. Priya Siewsankar", level: "Form 4" },

  { title: "Economics", tutor: "Ms. Nikki Arjoon", level: "Joint Forms 4 and 5" },
  { title: "Principles of Business", tutor: "Ms. Nikki Arjoon", level: "Joint Forms 4 and 5" },

  { title: "Principles of Accounting", tutor: "Ms. Nikki Arjoon", level: "Form 5" },
  { title: "Principles of Accounting", tutor: "Ms. Jenelle Jeffrey", level: "Form 4" },

  // { title: "HSB", tutor: "Ms. Ria Seecharan", level: "Joint Forms 4 and 5" }

  { title: "Information Technology", tutor: "Ms. Stacy Ramparas", level: "Joint Forms 4 and 5" },

  // Add more courses as needed.
];

export const tutors = [
  { name: "Ms. Ria Seecharan", bio: "Biography of Ria Seecharan", courses: ["Biology", "Physics", "Chemistry"] },

  { name: "Mr. Yuva Roopchansingh", bio: "Biography of Yuva Roopchansingh", courses: ["Biology"], image: "/images/tutors/Yuva_Roopchansingh.png" },

  { name: "Ms. Janelle Mohammed", bio: "Biography of Janelle Mohammed", courses: ["Add Maths", "Maths"], image: "/images/tutors/Janelle_Mohammed.png"},

  { name: "Ms. Priya Siewsankar", bio: "Biography of Priya Siewsankar", courses: ["English A"], image: "/images/tutors/Priya_Siewsankar.png"},

  { name: "Ms. Nikki Arjoon", bio: "Biography of Nikki Arjoon", courses: ["Economics", "Principles of Business", "Principles of Accounting"], image: "/images/tutors/Nikki_Arjoon.png" },

  { name: "Ms. Jenelle Jeffrey", bio: "Biography of Jenelle Jeffrey", courses: ["Principles of Accounting"], image: "/images/tutors/Jenelle_Jeffrey.png"},

  { name: "Ms. Stacy Ramparas", bio: "Biography of Stacy Ramparas", courses: ["Information Technology"], image: "" },

  // Add more tutors as needed.
];

export const events = [
  /*{
    title: "Webinar: Are you worried about CSEC and CAPE exams?",
    description:
      "Learn how to manage Exam Stress & Anxiety by attending this free event!",
    date: "26th March, 2025",
    time: "6:30 PM",
    type: "Webinar",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSevojFJAlnTTfiVBXS-tgub-yyk4uJLrGpMq_JBgXYkVgcagg/viewform",
    image: "/images/webinar-promo.jpg",
  },*/
  
  /*
  {
    title: "Webinar: Data Analytics in Education",
    description:
      "Join our webinar to learn about the benefits of a data-driven approach and data analytics to education, the learning process, and studying.",
    date: "30th April, 2025",
    time: "6:00 PM",
    type: "Webinar",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSeWvWH0yA76H-lj-hWHBe8i0rF1P4r5q-w9mWE2bxNHzjIBUA/viewform",
    image: "/images/Data Analytics Webinar Promo.png",
  }
  */

];

export const articles = [
  {
    title: "Article: AI Can Transform Teaching",
    description: "Is Artificial Intelligence a friend or foe? Explore how artificial intelligence is changing the landscape of teaching and learning.",
    link: "https://www.tv6tnt.com/news/7pmnews/ai-can-transform-teaching/article_9d00e0a2-7ab0-11ee-948a-9f3b9fb01ba8.html",
  },
  // Add more articles as needed.
];

export const videos = [
  {
    title: "Webinar: Are you worried about CSEC and CAPE Exams?",
    src: "https://www.youtube.com/watch?v=GuskcKJz2E0&ab_channel=I%27deffect",
    type: "video/mp4"
  },
  {
    title: "Video: Business Breakfast with I'dEffect Limited",
    src: "https://drive.google.com/file/d/1M6vWq7ctSSeSktuffxTXRotRM1YWPD8z/preview",
    type: "video/mp4"
  },
  {
    title: "Video: Morning Brew with I'dEffect Limited",
    src: "https://drive.google.com/file/d/1M46cbnzULXzK6YLbhKtWoImkgRh411VU/preview",
    type: "video/mp4"
  },
  {
    title: "Video: Tech Tip with I'dEffect Limited",
    src: "https://drive.google.com/file/d/1LzLDsTJWveSCzCxmcK8cWxgIgu0klCoO/preview",
    type: "video/mp4"
  }
  // Add more videos as needed.
];

export const adverts = [
  {
    title: "Build Your Portfolio with I'dEffect Academy",
    description: "Join our Information Technology classes this July to learn indispensable skills for your exams and future career!",
    bannerimage: "/images/IT-Advertisment-Banner.png",
    image: "/images/IT-Advertisment.png",
    link: "/register"
  },
  // Add more ads as needed.
];