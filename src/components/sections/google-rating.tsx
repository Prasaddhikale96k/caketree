"use client";

import { Card } from "@/components/ui/card";
import { StarRating } from "@/components/ui/star-rating";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function GoogleRatingSection() {
  return (
    <motion.div variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="md:col-span-1 lg:col-span-1">
        <Card className="h-full flex flex-col justify-center items-center p-8 text-center">
            <h3 className="text-2xl font-bold">4.7 / 5</h3>
            <StarRating rating={4.7} starClassName="w-6 h-6" className="my-2" />
            <p className="text-muted-foreground font-semibold">Google Rating</p>
        </Card>
    </motion.div>
  );
}
