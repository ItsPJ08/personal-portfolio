import digitalnest from '../assets/digitalnest.jpg';
import graduation from '../assets/graduation.jpg';

export type ExperienceItem = {
  image?: string; 
  company: string;
  role: string;
  startDate: string;
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
    bullets: ['Developed web applications for clients around the Gilroy, Watsonville, and Salinas areas. Worked with a team of developers to create and maintain web applications using tools like React, HTML, CSS, and JavaScript.'],
  },
  {
    image: graduation,
    company: 'CSU Monterey Bay',
    role: 'Computer Science Graduate | Software Engineering Focus',
    startDate: 'September 2024',
    endDate: 'August 2026',
    bullets: ['Built and learned my foundation of Computer Science during my time at Monterey Bay. I learned how to build Web Applications, Mobile Applications and the overall Software Engineering lifecycle. Also enjoyed learning about the cybersecurity and networking side of this field as well.'],

  },

  
  
];
