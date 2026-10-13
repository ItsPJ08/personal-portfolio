import { GITHUB_URL, LINKEDIN_URL } from '../data/social';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function SocialLinks({ className = '' }: { className?: string }) {
  return (
    <div className={className}>
      <a
        className="icon-btn"
        href={LINKEDIN_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
      >
        <LinkedinIcon />
      </a>
      <a
        className="icon-btn"
        href={GITHUB_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
      >
        <GithubIcon />
      </a>
    </div>
  );
}
