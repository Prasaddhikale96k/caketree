import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";

const FloatingIcon = ({ className, children, delay }: { className?: string, children: React.ReactNode, delay?: string }) => (
  <div
    className={`absolute hidden lg:block animate-float ${className}`}
    style={{ animationDelay: delay }}
  >
    {children}
  </div>
);

const CakeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="hsl(var(--primary))" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="opacity-50">
        <path d="M16 16.33a2.47 2.47 0 0 0-2.4-2.73h-3.2a2.47 2.47 0 0 0-2.4 2.73c0 1.43.2 2.58.55 3.55.44 1.2.92 2.12 1.35 2.5.42.38 1.12.62 1.85.62s1.43-.24 1.85-.62c.43-.38.9-1.3 1.35-2.5.35-.97.55-2.12.55-3.55Z"/>
        <path d="M17.43 13.63a4.5 4.5 0 0 0-9.86 0"/><path d="M12 2v4"/><path d="m18.36 5.64 1.42-1.42"/><path d="m4.22 4.22 1.42 1.42"/>
    </svg>
)

export default function HeroSection() {
  const videoUrl = "https://videos.pexels.com/video-files/3119255/3119255-hd_1920_1080_25fps.mp4";

  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center text-center text-white overflow-hidden">
      <div className="absolute inset-0 z-[-1]">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-40"
          src={videoUrl}
        />
         <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <FloatingIcon className="top-[15%] left-[10%]" delay="0s"><CakeIcon/></FloatingIcon>
      <FloatingIcon className="top-[60%] left-[5%]" delay="2s"><CakeIcon/></FloatingIcon>
      <FloatingIcon className="top-[20%] right-[8%]" delay="4s"><CakeIcon/></FloatingIcon>
      <FloatingIcon className="bottom-[10%] right-[12%]" delay="6s"><CakeIcon/></FloatingIcon>
      

      <div className="relative z-10 p-4 space-y-6">
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight drop-shadow-lg text-white animate-fade-in-up text-balance">
          The Cake Tree – Taste That Blooms!
        </h1>
        <p className="text-lg md:text-xl text-primary-foreground/80 font-medium tracking-wider animate-fade-in-up [animation-delay:0.2s]">
          Fresh Cakes • Café Ambiance • Jatra Hotel, Nashik
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <Button
            size="lg"
            className="animate-soft-zoom-in [animation-delay:0.4s] transition-transform hover:scale-105"
            asChild
          >
            <a href="#menu">View Menu <MoveRight className="ml-2"/></a>
          </Button>
          <Button
            size="lg"
            variant="secondary"
            className="animate-soft-zoom-in [animation-delay:0.5s] transition-transform hover:scale-105"
            asChild
          >
            <a href="#map">Find Us on Map</a>
          </Button>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}