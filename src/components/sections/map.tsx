import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function MapSection() {
  const embedMapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3748.877735398254!2d73.83446007588302!3d20.013473081403595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddebabd9313491%3A0x4426ce2903b573e!2sThe%20Cake%20Tree!5e0!3m2!1sen!2sin!4v1727788574685!5m2!1sen!2sin";

  return (
    <motion.div variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="md:col-span-1 lg:col-span-1">
      <Card id="map" className="h-full overflow-hidden">
          <iframe
            src={embedMapUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="min-h-[300px]"
          ></iframe>
      </Card>
    </motion.div>
  );
}