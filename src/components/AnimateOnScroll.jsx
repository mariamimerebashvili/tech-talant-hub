import { useEffect, useRef, useState } from 'react';

function AnimateOnScroll({
  children,
  className = '',
  delay = 0,
  as: Tag = 'div',
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -48px 0px' },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`animate-on-scroll${visible ? ' animate-on-scroll--visible' : ''}${className ? ` ${className}` : ''}`}
      style={{ '--animate-delay': `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}

export default AnimateOnScroll;
