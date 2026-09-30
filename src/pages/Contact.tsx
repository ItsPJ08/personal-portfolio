import { useState } from 'react';
import type { FormEvent } from 'react';
import { sendEmail } from '../data/contact';

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
    <div className="contentcontact">
      <h1 className="contentcontact__title"><b>Contact</b></h1>
      <hr className="linebreak"></hr>
      <form className="contentcontact__form" onSubmit={handleSubmit}>
        <label className="contentcontact__label" htmlFor="name">
          Your Email:
        </label>
        <input
          className="contentcontact__input"
          id="name"
          type="email"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
        />

        <label className="contentcontact__label" htmlFor="title">
          Title of email:
        </label>
        <input
          className="contentcontact__input"
          id="title"
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          required
        />

        <label className="contentcontact__label" htmlFor="message">
          Message
        </label>
        <textarea
          className="contentcontact__textarea"
          id="message"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          rows={6}
          required
        />

        <button className="contentcontact__button" type="submit" disabled={status === 'sending'}>
          {status === 'sending' ? 'Sending...' : 'Send'}
        </button>

        {status === 'success' && (
          <p className="contentcontact__status contentcontact__status--success">
            Message sent! I'll get back to you soon.
          </p>
        )}
        {status === 'error' && (
          <p className="contentcontact__status contentcontact__status--error">
            Something went wrong. Please try again.
          </p>
        )}
      </form>
    </div>
  );
}
