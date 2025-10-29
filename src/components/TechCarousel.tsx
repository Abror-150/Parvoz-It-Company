import { useEffect, useRef } from 'react';

const TechCarousel = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const technologies = [
    { name: 'React', icon: '⚛️' },
    { name: 'Node.js', icon: '🟢' },
    { name: 'TypeScript', icon: '📘' },
    { name: 'Flutter', icon: '💙' },
    { name: 'Next.js', icon: '▲' },
    { name: 'MongoDB', icon: '🍃' },
    { name: 'PostgreSQL', icon: '🐘' },
    { name: 'AWS', icon: '☁️' },
    { name: 'Docker', icon: '🐳' },
    { name: 'Firebase', icon: '🔥' },
    { name: 'Tailwind', icon: '🎨' },
    { name: 'Figma', icon: '🎯' },
  ];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollAmount = 0;
    const scrollStep = 1;
    const scrollInterval = setInterval(() => {
      scrollAmount += scrollStep;
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
        scrollContainer.scrollLeft = 0;
        scrollAmount = 0;
      } else {
        scrollContainer.scrollLeft = scrollAmount;
      }
    }, 30);

    return () => clearInterval(scrollInterval);
  }, []);

  return (
    <div className="relative overflow-hidden">
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-hidden"
        style={{ scrollBehavior: 'auto' }}
      >
        {[...technologies, ...technologies].map((tech, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-32 h-32 glass rounded-2xl flex flex-col items-center justify-center gap-3 hover:scale-110 transition-transform"
          >
            <span className="text-5xl">{tech.icon}</span>
            <span className="text-sm font-semibold">{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechCarousel;
