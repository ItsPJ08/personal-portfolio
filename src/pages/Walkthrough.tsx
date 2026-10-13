import walkthroughVideo from '../assets/presentation .webm';

export default function Walkthrough() {
  return (
    <section className="page">
      <div className="container">
        <div className="page__head">
          <p className="eyebrow">Project demo</p>
          <h1 className="section__title">GroupMeet walkthrough</h1>
        </div>
        <div className="walkthrough">
          <div className="card walkthrough__card">
            <h2 className="walkthrough__heading">Overview</h2>
            <p className="walkthrough__text">
              Welcome to my walkthrough of GroupMeet, a collaborative project completed as the final project for our Software Engineering course. Our team built and deployed the application while working within a defined technology stack and deployment environment.
            </p>
            <p className="walkthrough__text">
              One of my biggest challenges was implementing the OAuth authentication system and connecting the backend authentication flow with the frontend. This required coordinating authentication between the two layers and ensuring users could securely access the application's features.
            </p>
            <p className="walkthrough__text">
              Throughout the project, our team collaborated closely to divide responsibilities, integrate our work, troubleshoot issues, and meet the project requirements within a limited timeframe. We successfully completed the project and were proud of the application we were able to build together.
            </p>
            <p className="walkthrough__note">
              <b>Note:</b> In this walkthrough, the authentication token from a previous session is still valid because it was not cleared before recording. As a result, the sign-up flow appears as a simple one-click action rather than displaying the full authentication process.
            </p>
          </div>
          <video className="walkthrough__video" controls preload="metadata" playsInline>
            <source src={`${walkthroughVideo}#t=0.1`} type="video/webm" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
}
