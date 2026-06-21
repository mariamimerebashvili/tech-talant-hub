import { useState } from 'react';
import AnimateOnScroll from '../components/AnimateOnScroll';

function ContactUs() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="form-page">
      <div className="form-page__inner container">
        <AnimateOnScroll>
          <header className="form-page__header">
            <h1 className="form-page__title">Contact Us</h1>
            <p className="form-page__subtitle">
              Have questions? We&apos;d love to hear from you.
            </p>
          </header>
        </AnimateOnScroll>

        <AnimateOnScroll delay={150}>
          {submitted ? (
            <div className="form-page__success form-page__success--pop">
              <span className="form-page__success-icon" aria-hidden="true">✓</span>
              <p>Thank you for reaching out! We&apos;ll get back to you soon.</p>
            </div>
          ) : (
            <form className="form-card" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="contact-name">Full Name</label>
                <input id="contact-name" type="text" required placeholder="Jane Smith" />
              </div>
              <div className="form-group">
                <label htmlFor="contact-email">Email</label>
                <input id="contact-email" type="email" required placeholder="jane@email.com" />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  rows={5}
                  required
                  placeholder="How can we help you?"
                />
              </div>
              <button type="submit" className="btn btn--primary form-card__submit">
                Send Message
              </button>
            </form>
          )}
        </AnimateOnScroll>
      </div>
    </main>
  );
}

export default ContactUs;
