import walkthroughVideo from '../assets/presentation .webm';

export default function Walkthrough() {
  return (
    <div className="contentwalkthrough">
      <h1 className="contentwalkthrough__title"><b>Walkthrough</b></h1>
      <hr className="linebreak"></hr>
      <div className="contentwalkthrough__flex">
        <div className="contentwalkthrough__card">
          <h3 className="contentwalkthrough__heading">GroupMeet Overview</h3>
          <p className="contentwalkthrough__description">
            Welcome to my walkthrough of GroupMeet, a collaborative project completed as the final project for our Software Engineering course. Our team built and deployed the application while working within a defined technology stack and deployment environment.
          </p>
          <p className="contentwalkthrough__description">
            One of my biggest challenges was implementing the OAuth authentication system and connecting the backend authentication flow with the frontend. This required coordinating authentication between the two layers and ensuring users could securely access the application's features.
          </p>
          <p className="contentwalkthrough__description">
            Throughout the project, our team collaborated closely to divide responsibilities, integrate our work, troubleshoot issues, and meet the project requirements within a limited timeframe. We successfully completed the project and were proud of the application we were able to build together.
          </p>
          <p className="contentwalkthrough__note">
            <b>Note:</b> In this walkthrough, the authentication token from a previous session is still valid because it was not cleared before recording. As a result, the sign-up flow appears as a simple one-click action rather than displaying the full authentication process.
          </p>
        </div>
        <div className="contentwalkthrough__video-wrap">
          <video className="contentwalkthrough__video" controls preload="metadata" playsInline>
            <source src={`${walkthroughVideo}#t=0.1`} type="video/webm" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
}
