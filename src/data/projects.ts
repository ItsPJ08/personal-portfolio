import github from '../assets/github.png';

export type Project = {
  title: string;
  description: string;
  tags: string[];
  image?: string;
  github?: string;
};


export const projects: Project[] = [
  {
    title: 'GroupMeet',
    description: 'A collaborative software engineering project designed to help users connect, organize, and manage group activities. The application provides a platform for users to create and join groups, communicate with others, and coordinate events in one place.',
    tags: ['React Native, Spring Boot, Supabase, Heroku Deployment'],
    image: github,
    github: 'https://github.com/krnagy-csu/CST-438-Fall-25-Project-3-Backend',
  },
{
  title: 'TheMovieWiki',
  description: 'An IMDb-style movie site built with Node.js, Express, HTML, and CSS. Users can search thousands of movies and view details for each one, powered by the TMDb API.',
  tags: ['Node.js, Express, HTML, CSS, and JavaScript.'],
  image: github,
  github: 'https://github.com/krnagy-csu/Cst336Final',
},

{
  title: 'Ottertune',
  description: 'A Spotify-based Python application for searching songs, liking tracks, and creating or deleting playlists, built with the Spotipy library.',
  tags: ['Python, Flask, HTML, CSS'],
  image: github,
  github: 'https://github.com/vincentmpalma/Ottertune',
}
  
];
