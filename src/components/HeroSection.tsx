
import { Button } from "@/components/ui/button";
import { Shield, ArrowRight } from "lucide-react";
import DetectionPanel from "@/components/DetectionPanel";

const HeroSection = () => {
  return (
    <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Left Content */}
        <div className="max-w-2xl">
          <div className="mb-8 inline-flex items-center px-4 py-2 rounded-full bg-blue-100/10 text-blue-400 backdrop-blur-sm border border-blue-400/20">
            <Shield size={18} className="mr-2" />
            <span>Hack the Hoax Challenge</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
            <span className="block text-white">Detect</span>
            <span className="block text-white">Misinformation</span>
            <span className="block text-blue-400">in Real-Time</span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-10 max-w-lg">
            Our AI-powered platform helps journalists and broadcasters identify
            false information as it happens, enhancing media integrity and
            public trust.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Button className="truth-button flex items-center gap-2 text-lg px-8 py-6">
              Explore Dashboard <ArrowRight size={18} />
            </Button>
            <Button 
              variant="outline" 
              className="border-truth-light text-truth-light hover:bg-truth-light/10 text-lg px-8 py-6"
            >
              Learn More
            </Button>
          </div>
        </div>
        
        {/* Right Content - Interactive Detection Panel */}
        <div className="lg:block">
          <DetectionPanel />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
