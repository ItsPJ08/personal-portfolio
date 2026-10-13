import digitalnest from '../assets/digitalnest.jpg';
import graduation from '../assets/graduation.jpg';
import googleCert from '../assets/GoogleCert.png';

export type ExperienceItem = {
  image?: string;
  // Use 'contain' for logos so they aren't cropped
  imageFit?: 'cover' | 'contain';
  company: string;
  role: string;
  startDate?: string;
  endDate: string;
  bullets: string[];
};


export const experience: ExperienceItem[] = [
  {
    image: digitalnest,
    imageFit: 'contain',
    company: 'Digital Nest',
    role: 'Associate Software Developer',
    startDate: 'August 2026',
    endDate: 'Present',
    bullets: ['Build and maintain full-stack web applications for local businesses around Gilroy, Watsonville, and Salinas, as well as for internal Digital Nest projects, working with React, JavaScript, Node.js, WordPress, and SQL. I turn client requirements into responsive, easy-to-use interfaces and take features from implementation through testing and debugging. Day to day, I work closely with designers, fellow developers, and stakeholders to ship solutions that span both the frontend and backend.'],
  },
  {
    image: graduation,
    company: 'CSU Monterey Bay',
    role: 'Computer Science Graduate | Software Engineering Focus',
    startDate: 'September 2024',
    endDate: 'August 2026',
    bullets: ['Built and learned my foundation of Computer Science during my time at Monterey Bay. I learned how to build Web Applications, Mobile Applications and the overall Software Engineering lifecycle. Also enjoyed learning about the cybersecurity and networking side of this field as well.'],

  },
  {
    image: googleCert,
    company: 'Google',
    role: 'Google Cybersecurity Professional Certificate',
    endDate: 'Completed April 2026',
    bullets: ['Completed the nine-course Google Cybersecurity Professional Certificate through Coursera. Learned the fundamentals of cybersecurity such as managing security risks, network security, identifying assets, threats, and vulnerabilities, and incident detection and response. Gained hands-on experience with Linux, SQL, Python automation, SIEM tools, and Intrusion Detection Systems (IDS).'],
  },

  
  
];
