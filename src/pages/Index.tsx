import { Button } from "@/components/ui/button";
import { ServiceCard } from "@/components/ui/service-card";
import { DesignIcon } from "@/components/icons/design-icon";
import { WebIcon } from "@/components/icons/web-icon";
import { GameIcon } from "@/components/icons/game-icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-primary bg-clip-text text-transparent animate-pulse-glow">
              Clinton Benjamin
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-4 animate-slide-in-left">
              Creative Technologist from Port Harcourt, Nigeria
            </p>
            <p className="text-lg text-accent mb-8 animate-slide-in-right">
              Graphics Designer • Web Developer • Game Programmer
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
              <Button variant="hero" size="lg" className="text-lg px-8 py-4">
                View My Work
              </Button>
              <Button variant="contact" size="lg" className="text-lg px-8 py-4">
                Get In Touch
              </Button>
            </div>
          </div>
        </div>
        
        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-4 h-4 bg-accent rounded-full animate-float opacity-60" />
        <div className="absolute bottom-20 right-10 w-6 h-6 bg-primary rounded-full animate-float opacity-40" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-20 w-3 h-3 bg-secondary rounded-full animate-float opacity-50" style={{ animationDelay: '2s' }} />
      </section>

      {/* Services Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              My Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Delivering high-quality digital solutions with affordable pricing and reliable delivery
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="animate-slide-in-left">
              <ServiceCard
                icon={<DesignIcon />}
                title="Graphics Design"
                description="Creative visual solutions that bring your brand to life with stunning graphics and layouts."
                features={[
                  "Logo & Brand Identity",
                  "Print & Digital Design",
                  "Social Media Graphics",
                  "UI/UX Design"
                ]}
              />
            </div>
            
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <ServiceCard
                icon={<WebIcon />}
                title="Web Development"
                description="Modern, responsive websites and web applications built with cutting-edge technologies."
                features={[
                  "Responsive Web Design",
                  "E-commerce Solutions",
                  "Custom Web Apps",
                  "CMS Development"
                ]}
              />
            </div>
            
            <div className="animate-slide-in-right">
              <ServiceCard
                icon={<GameIcon />}
                title="Game Programming"
                description="Interactive gaming experiences from concept to completion with engaging gameplay mechanics."
                features={[
                  "2D/3D Game Development",
                  "Mobile Games",
                  "Game Mechanics",
                  "Interactive Media"
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-card/50">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h2 className="text-4xl font-bold mb-8 text-foreground">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-left animate-slide-in-left">
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                I'm a passionate creative technologist based in Port Harcourt, Rivers State, Nigeria. 
                With expertise spanning graphics design, web development, and game programming, 
                I bring ideas to life through innovative digital solutions.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                My commitment to affordable pricing and reliable delivery ensures that quality 
                digital services are accessible to businesses of all sizes across Nigeria and beyond.
              </p>
              <div className="space-y-2 text-accent">
                <p className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-accent rounded-full" />
                  Fast & Reliable Delivery
                </p>
                <p className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-accent rounded-full" />
                  Affordable Pricing
                </p>
                <p className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-accent rounded-full" />
                  Local Nigerian Expertise
                </p>
              </div>
            </div>
            
            <div className="gradient-card p-8 rounded-lg animate-slide-in-right">
              <div className="text-2xl font-bold text-accent mb-4">Based in</div>
              <div className="text-xl text-foreground mb-2">Port Harcourt</div>
              <div className="text-lg text-muted-foreground mb-6">Rivers State, Nigeria</div>
              <div className="text-sm text-muted-foreground">
                Ready to deliver exceptional digital solutions across Nigeria and globally
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h2 className="text-4xl font-bold mb-8 text-foreground">Let's Work Together</h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Ready to bring your project to life? Contact me for affordable, high-quality digital solutions.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="gradient-card p-8 rounded-lg animate-slide-in-left hover-glow transition-smooth">
              <div className="text-accent text-4xl mb-4">📧</div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">Email</h3>
              <p className="text-muted-foreground">clintonbenjamin208@gmail.com</p>
            </div>
            
            <div className="gradient-card p-8 rounded-lg animate-slide-in-right hover-glow transition-smooth">
              <div className="text-accent text-4xl mb-4">📱</div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">Phone</h3>
              <p className="text-muted-foreground">08051047303</p>
            </div>
          </div>
          
          <Button variant="hero" size="lg" className="text-lg px-12 py-4 animate-pulse-glow">
            Start Your Project Today
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border/50">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-muted-foreground">
            © 2024 Clinton Benjamin. Crafting digital excellence from Port Harcourt, Nigeria.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
