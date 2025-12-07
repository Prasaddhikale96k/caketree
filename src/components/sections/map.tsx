import { Button } from "@/components/ui/button";

export default function MapSection() {
  const mapLink = "https://maps.app.goo.gl/HMCsbUqzRrSDXMVj9"; 
  const embedMapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3748.877735398254!2d73.83446007588302!3d20.013473081403595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddebabd9313491%3A0x4426ce2903b573e!2sThe%20Cake%20Tree!5e0!3m2!1sen!2sin!4v1727788574685!5m2!1sen!2sin";

  return (
    <section id="map" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-accent">Find Your Way to Us</h2>
          <p className="text-muted-foreground mt-2 max-w-2xl mx-auto text-balance">
            We are conveniently located at Shop no.4, Vaishnavi park-A, Behind Jatra Hotel, Nandur Naka Road, Adgaon, Nashik.
          </p>
        </div>

        <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-stone-200/50 dark:shadow-stone-900/50 animate-soft-zoom-in">
          <div className="relative h-[400px] md:h-[600px] w-full">
            <iframe
              src={embedMapUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <div className="text-center mt-8">
            <Button size="lg" asChild className="transition-transform hover:scale-105 animate-fade-in-up [animation-delay:0.2s]">
                <a href={mapLink} target="_blank" rel="noopener noreferrer">
                    Open in Google Maps
                </a>
            </Button>
        </div>
      </div>
    </section>
  );
}
