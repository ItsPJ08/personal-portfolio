import digitalnest from '../assets/digitalnest.jpg';
import graduation from '../assets/graduation.jpg';
import googleCert from '../assets/GoogleCert.png';

export type ExperienceItem = {
  image?: string; 
  company: string;
  role: string;
  startDate?: string;
  endDate: string;
  bullets: string[];
};


export const experience: ExperienceItem[] = [
  {
    image: digitalnest,
    company: 'Digital Nest',
    role: 'Associate Software Developer',
    startDate: 'August 2026',
    endDate: 'Present',
    bullets: ['Developed web applications for clients around the Gilroy, Watsonville, and Salinas areas. Worked with a team of developers to create and maintain web applications using tools like React, HTML, CSS, JavaScript, TypeScript and backend technologies like Node.js, Express, etc. Also worked with clients to understand their needs and provide solutions. '],
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
