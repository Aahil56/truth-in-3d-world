
import { ArrowRight } from "lucide-react";

const StepCard = ({ number, title, description }: { 
  number: number, 
  title: string, 
  description: string 
}) => (
  <div className="relative">
    <div className="glass-panel p-6 ml-12">
      <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
    <div className="absolute left-0 top-6 w-10 h-10 bg-truth-light rounded-full flex items-center justify-center text-white font-bold animate-glow">
      {number}
    </div>
    {number < 4 && (
      <div className="absolute left-5 top-16 text-truth-light">
        <ArrowRight className="transform rotate-90 mt-4" />
      </div>
    )}
  </div>
);

const HowItWorks = () => {
  const steps = [
    {
      title: "Input Content",
      description: "Simply paste the URL or text content you want to verify into our platform."
    },
    {
      title: "AI Analysis",
      description: "Our algorithms analyze the content, checking against our database and trusted sources."
    },
    {
      title: "Verification Results",
      description: "Receive a detailed report with credibility score, identified issues, and source verification."
    },
    {
      title: "Make Informed Decisions",
      description: "Use our insights to determine the reliability of the information before sharing or acting on it."
    }
  ];

  return (
    <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 glow-text">
            How It Works
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Verifying information has never been simpler
          </p>
        </div>
        
        <div className="space-y-12">
          {steps.map((step, index) => (
            <StepCard 
              key={index}
              number={index + 1}
              title={step.title}
              description={step.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
