import SocialLinks from './SocialLinks';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p>© {new Date().getFullYear()} Prabjot Pannu</p>
        <SocialLinks className="footer__social" />
      </div>
    </footer>
  );
}
