const RESUME_URL = '/Prabjot-Pannu-Resume-copy.pdf';

export default function Resume() {
  return (
    <div className="contentresume">
      <h1 className="contentresume__title"><b>Resume</b></h1>
      <div className="contentresume__actions">
        <a
          className="contentresume__button"
          href={RESUME_URL}
          download="Prabjot-Pannu-Resume.pdf"
        >
          Download PDF
        </a>
        <a
          className="contentresume__button"
          href={RESUME_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          Open in new tab
        </a>
      </div>
      <iframe
        className="contentresume__viewer"
        src={RESUME_URL}
        title="Prabjot Pannu Resume"
      />
    </div>
  );
}
