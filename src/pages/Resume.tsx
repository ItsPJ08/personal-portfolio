import { ArrowUpRightIcon, DownloadIcon } from '../components/Icons';

const RESUME_URL = '/Prabjot-Pannu-Resume.pdf';

export default function Resume() {
  return (
    <section className="page">
      <div className="container">
        <div className="page__head">
          <p className="eyebrow">Resume</p>
          <h1 className="section__title">My resume</h1>
          <div className="resume__actions">
            <a className="btn btn--primary" href={RESUME_URL} download="Prabjot-Pannu-Resume.pdf">
              <DownloadIcon className="btn__icon" /> Download PDF
            </a>
            <a
              className="btn btn--secondary"
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Open in new tab <ArrowUpRightIcon className="btn__icon" />
            </a>
          </div>
        </div>
        <iframe className="resume__viewer" src={RESUME_URL} title="Prabjot Pannu Resume" />
      </div>
    </section>
  );
}
