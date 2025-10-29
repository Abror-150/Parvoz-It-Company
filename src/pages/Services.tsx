import { Code, Smartphone, Palette, LineChart, Megaphone, Users, CheckCircle } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';

const Services = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: Code,
      title: t('services.web'),
      description: 'We create responsive, scalable, and secure web applications using cutting-edge technologies like React, Next.js, and Node.js.',
      features: [
        'Custom Web Applications',
        'E-commerce Solutions',
        'Progressive Web Apps (PWA)',
        'API Development & Integration',
        'Content Management Systems',
      ],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Smartphone,
      title: t('services.mobile'),
      description: 'Native and cross-platform mobile applications for iOS and Android, built with React Native and Flutter.',
      features: [
        'iOS & Android Development',
        'Cross-Platform Solutions',
        'App Store Deployment',
        'Push Notifications',
        'Offline Functionality',
      ],
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Palette,
      title: t('services.uiux'),
      description: 'User-centered design approach focusing on creating intuitive, beautiful interfaces that users love.',
      features: [
        'User Research & Testing',
        'Wireframing & Prototyping',
        'Visual Design',
        'Design Systems',
        'Accessibility Design',
      ],
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: LineChart,
      title: t('services.consulting'),
      description: 'Strategic IT consulting to help your business make informed technology decisions and optimize processes.',
      features: [
        'Technology Strategy',
        'Digital Transformation',
        'Cloud Migration',
        'Security Audits',
        'Process Optimization',
      ],
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: Megaphone,
      title: t('services.marketing'),
      description: 'Comprehensive digital marketing strategies to increase your online presence and drive business growth.',
      features: [
        'SEO Optimization',
        'Social Media Marketing',
        'Content Marketing',
        'Email Campaigns',
        'Analytics & Reporting',
      ],
      color: 'from-yellow-500 to-orange-500',
    },
    {
      icon: Users,
      title: 'Team Augmentation',
      description: 'Extend your development team with our skilled professionals to accelerate your project delivery.',
      features: [
        'Skilled Developers',
        'Flexible Engagement',
        'Quick Onboarding',
        'Seamless Integration',
        'Dedicated Support',
      ],
      color: 'from-indigo-500 to-purple-500',
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">{t('services.title')}</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive technology solutions tailored to your business needs. We combine expertise, innovation, and dedication to deliver exceptional results.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="p-8 glass hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-slide-up group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <service.icon className="h-8 w-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>

              <div className="space-y-3">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Process Section */}
        <div className="mt-24">
          <h2 className="text-4xl font-bold text-center mb-12">Our Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Discovery', desc: 'Understanding your needs and goals' },
              { step: '02', title: 'Planning', desc: 'Creating a strategic roadmap' },
              { step: '03', title: 'Development', desc: 'Building your solution' },
              { step: '04', title: 'Launch', desc: 'Deployment and ongoing support' },
            ].map((item, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-2xl bg-card border border-border hover:border-primary transition-all"
              >
                <div className="text-5xl font-bold text-gradient mb-4">{item.step}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
