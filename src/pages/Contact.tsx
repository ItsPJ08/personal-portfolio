import { useState } from 'react';
import type { FormEvent } from 'react';
import { sendEmail } from '../data/contact';
import { GITHUB_URL, LINKEDIN_URL } from '../data/social';
import { ArrowRightIcon, GithubIcon, LinkedinIcon } from '../components/Icons';

type Status = 'idle' | 'sending' | 'success' | 'error';

export default function Contact() {
  const [title, setTitle] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<Status>('idle');

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('sending');

    try {
      await sendEmail({
        title: title,
        name: name,
        message,
      });
      setStatus('success');
      setTitle('');
      setName('');
      setMessage('');
    } catch (error) {
      console.error('FAILED...', error);
      setStatus('error');
    }
  };

  return (
    <section className="page">
      <div className="container contact">
        <div>
          <p className="eyebrow">Contact</p>
          <h1 className="section__title">Let's work together</h1>
          <p className="section__lead">
            Have a question, an opportunity, or just want to say hi? Send me a message and I'll get
            back to you soon.
          </p>
          <div className="contact__links">
            <a className="card card--hover contact__link" href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
              <LinkedinIcon /> Connect on LinkedIn
            </a>
            <a className="card card--hover contact__link" href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
              <GithubIcon /> Browse my GitHub
            </a>
          </div>
        </div>

        <form className="card contact__form" onSubmit={handleSubmit}>
          <div className="field">
            <label className="field__label" htmlFor="name">Your email</label>
            <input
              className="field__input"
              id="name"
              type="email"
              placeholder="you@example.com"
              value={name}
              onChange={(event) => setName(event.target.value)}
              required
            />
          </div>

          <div className="field">
            <label className="field__label" htmlFor="title">Subject</label>
            <input
              className="field__input"
              id="title"
              type="text"
              placeholder="What's this about?"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              required
            />
          </div>

          <div className="field">
            <label className="field__label" htmlFor="message">Message</label>
            <textarea
              className="field__input"
              id="message"
              placeholder="Write your message..."
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              rows={6}
              required
            />
          </div>

          <button className="btn btn--primary" type="submit" disabled={status === 'sending'}>
            {status === 'sending' ? 'Sending...' : <>Send message <ArrowRightIcon className="btn__icon" /></>}
          </button>

          {status === 'success' && (
            <p className="contact__status contact__status--success" role="status">
              Message sent! I'll get back to you soon.
            </p>
          )}
          {status === 'error' && (
            <p className="contact__status contact__status--error" role="alert">
              Something went wrong. Please try again.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
