import { useNavigate } from 'react-router-dom';
import AnimateOnScroll from '../components/AnimateOnScroll';

const stats = [
  { value: '500+', label: 'Developers' },
  { value: '120+', label: 'Companies' },
  { value: '30+', label: 'Cities' },
];

const features = [
  {
    icon: '🚀',
    title: 'Fast Hiring',
    description:
      'Connect with pre-vetted tech professionals and fill roles in days, not months.',
  },
  {
    icon: '💻',
    title: 'Verified Experts',
    description:
      'Every expert is skill-tested and reviewed so you hire with confidence.',
  },
  {
    icon: '🌍',
    title: 'Remote Friendly',
    description:
      'Build distributed teams across time zones with seamless collaboration.',
  },
];

function Home() {
  const navigate = useNavigate();

  return (
    <main className="home">
      <section className="hero">
        <div className="hero__inner container">
          <div className="hero__content">
            <h1 className="hero__title animate-in animate-in--up">
              Build Your Dream Team with Top Tech Talents
            </h1>
            <p className="hero__description animate-in animate-in--up animate-in--delay-1">
              Find experienced developers, designers, and IT consultants ready
              to help your business grow.
            </p>
            <button
              type="button"
              className="btn btn--primary hero__cta animate-in animate-in--up animate-in--delay-2"
              onClick={() => navigate('/experts')}
            >
              Explore Experts
            </button>
          </div>
          <div className="hero__visual animate-in animate-in--right animate-in--delay-1">
            <div className="hero__glow" aria-hidden="true" />
            <img
              src="/hero-banner.png"
              alt="Tech Talent Hub launching soon — hire the best IT talents"
              className="hero__image hero__image--float"
            />
          </div>
        </div>
      </section>

      <section className="stats">
        <div className="stats__inner container">
          {stats.map((stat, index) => (
            <AnimateOnScroll key={stat.label} delay={index * 120}>
              <div className="stat-card">
                <span className="stat-card__value">{stat.value}</span>
                <span className="stat-card__label">{stat.label}</span>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </section>

      <section className="features">
        <div className="features__inner container">
          <AnimateOnScroll>
            <h2 className="section-title">Why Choose Tech Talent Hub</h2>
          </AnimateOnScroll>
          <div className="features__grid">
            {features.map((feature, index) => (
              <AnimateOnScroll key={feature.title} delay={index * 150}>
                <div className="feature-card">
                  <span className="feature-card__icon">{feature.icon}</span>
                  <h3 className="feature-card__title">{feature.title}</h3>
                  <p className="feature-card__description">
                    {feature.description}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
