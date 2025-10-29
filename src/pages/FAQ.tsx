import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { useLanguage } from '@/contexts/LanguageContext';

const FAQ = () => {
  const { t } = useLanguage();

  const faqs = [
    {
      question: 'What services does Parvoz IT offer?',
      answer: 'We offer comprehensive technology solutions including web development, mobile app development, UI/UX design, IT consulting, digital marketing, and team augmentation services. Our team specializes in creating custom solutions tailored to your business needs.',
    },
    {
      question: 'How long does a typical project take?',
      answer: 'Project timelines vary depending on complexity and scope. A simple website might take 4-6 weeks, while a complex web application or mobile app could take 3-6 months. We provide detailed timeline estimates during our initial consultation and keep you updated throughout the development process.',
    },
    {
      question: 'What technologies do you work with?',
      answer: 'We work with cutting-edge technologies including React, Next.js, Node.js for web development; React Native and Flutter for mobile apps; and various cloud platforms like AWS and Google Cloud. We choose the best technology stack based on your project requirements.',
    },
    {
      question: 'Do you provide ongoing support after project completion?',
      answer: 'Yes! We offer comprehensive maintenance and support packages to ensure your application continues to run smoothly. This includes bug fixes, security updates, feature enhancements, and technical support. We believe in building long-term partnerships with our clients.',
    },
    {
      question: 'What is your development process?',
      answer: 'Our process includes four main phases: Discovery (understanding your needs), Planning (creating a strategic roadmap), Development (building your solution with regular updates), and Launch (deployment and ongoing support). We follow agile methodologies for flexibility and transparency.',
    },
    {
      question: 'How much does a project cost?',
      answer: 'Project costs vary based on scope, complexity, and timeline. We provide customized quotes after understanding your specific requirements. We offer flexible pricing models including fixed-price projects, time and materials, and dedicated team options. Contact us for a detailed estimate.',
    },
    {
      question: 'Do you work with startups or only established companies?',
      answer: 'We work with businesses of all sizes, from early-stage startups to established enterprises. We understand the unique challenges startups face and offer flexible engagement models and pricing to support growing businesses.',
    },
    {
      question: 'Can you help redesign an existing application?',
      answer: 'Absolutely! We specialize in both building new applications and modernizing existing ones. Whether you need a complete redesign, performance optimization, or adding new features, our team can help transform your application.',
    },
    {
      question: 'What makes Parvoz IT different from other tech companies?',
      answer: 'We combine technical excellence with a client-first approach. Our team stays current with latest technologies, we communicate transparently throughout projects, and we focus on delivering solutions that drive real business value. Plus, we offer multilingual support and understand diverse market needs.',
    },
    {
      question: 'How do you ensure project quality?',
      answer: 'We follow strict quality assurance processes including code reviews, automated testing, security audits, and performance optimization. Every project goes through multiple testing phases before launch, and we use industry best practices for all development work.',
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">{t('faq.title')}</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Find answers to common questions about our services, process, and how we can help your business succeed.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto animate-slide-up">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="glass rounded-2xl px-6 border-0"
              >
                <AccordionTrigger className="text-left font-semibold text-lg hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="max-w-2xl mx-auto p-12 rounded-3xl gradient-dark">
            <h2 className="text-3xl font-bold mb-4 text-white">Still have questions?</h2>
            <p className="text-white/80 mb-8">
              We're here to help! Contact us and our team will get back to you as soon as possible.
            </p>
            <a href="/contact">
              <button className="px-8 py-4 bg-white text-primary rounded-xl font-semibold hover:bg-white/90 transition-colors">
                Contact Us
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
