import React from 'react';

interface HeroProps {
  title: string;
  description: string;
  breadcrumb?: { label: string; href: string }[];
}

const Hero: React.FC<HeroProps> = ({ title, description, breadcrumb }) => {
  return (
    <section className="bg-slate-800 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {breadcrumb && (
          <nav className="mb-6">
            <div className="flex items-center space-x-2 text-sm">
              {breadcrumb.map((item, index) => (
                <React.Fragment key={index}>
                  <a 
                    href={item.href} 
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {item.label}
                  </a>
                  {index < breadcrumb.length - 1 && (
                    <span className="text-gray-500">{'>'}</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </nav>
        )}
        
        <h1 className="text-4xl md:text-5xl font-bold mb-6">{title}</h1>
        <p className="text-lg text-gray-300 max-w-4xl leading-relaxed">
          {description}
        </p>
      </div>
    </section>
  );
};

export default Hero;