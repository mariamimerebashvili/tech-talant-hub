import { useState } from 'react';
import AnimateOnScroll from '../components/AnimateOnScroll';

function RequestDemo() {
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
            <h1 className="form-page__title">Request a Demo</h1>
            <p className="form-page__subtitle">
              See how Tech Talent Hub can help you build your dream team.
            </p>
          </header>
        </AnimateOnScroll>

        <AnimateOnScroll delay={150}>
          {submitted ? (
            <div className="form-page__success form-page__success--pop">
              <span className="form-page__success-icon" aria-hidden="true">✓</span>
              <p>Thank you! Our team will reach out to schedule your demo shortly.</p>
            </div>
          ) : (
            <form className="form-card" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input id="name" type="text" required placeholder="John Doe" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Work Email</label>
                <input id="email" type="email" required placeholder="john@company.com" />
              </div>
              <div className="form-group">
                <label htmlFor="company">Company</label>
                <input id="company" type="text" required placeholder="Your Company" />
              </div>
              <button type="submit" className="btn btn--primary form-card__submit">
                Request Demo
              </button>
            </form>
          )}
        </AnimateOnScroll>
      </div>
    </main>
  );
}

export default RequestDemo;
