"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "Alex Johnson",
    role: "Event Attendee",
    content:
      "The Wet Party was absolutely incredible! The energy was off the charts and Emybomboy's performance was mind-blowing. Can't wait for the next event!",
    avatar:
      "/images/WhatsApp-Image-2025-07-10-at-22.18.55_0fe84f1d-600x497.jpg",
  },
  {
    id: 2,
    name: "Sarah Williams",
    role: "Regular Patron",
    content:
      "I've been to many events, but DaBeast Entertainment always delivers something special. The music, the atmosphere, the people - everything was perfect!",
    avatar:
      "/images/WhatsApp-Image-2025-07-10-at-22.18.55_0fe84f1d-600x497.jpg",
  },
  {
    id: 3,
    name: "Michael Thompson",
    role: "Music Producer",
    content:
      "As someone in the industry, I can say that the production quality and organization of these events is top-notch. Emybomboy knows how to create an unforgettable experience.",
    avatar:
      "/images/WhatsApp-Image-2025-07-10-at-22.18.55_0fe84f1d-600x497.jpg",
  },
];

export default function TestimonialSlider() {
  const [current, setCurrent] = useState(0);

  const nextTestimonial = () => {
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative max-w-4xl mx-auto">
      <AnimatePresence mode="wait">
        {testimonials.map(
          (testimonial, index) =>
            index === current && (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="px-4"
              >
                <Card className="bg-white/10 backdrop-blur-md border-purple-500/20">
                  <CardContent className="p-8 md:p-12">
                    <div className="flex flex-col items-center text-center">
                      <Quote className="h-12 w-12 text-yellow-400 mb-6 rotate-180" />

                      <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
                        &quot;{testimonial.content}&quot;
                      </p>

                      <div className="flex flex-col items-center">
                        <div className="w-16 h-16 rounded-full overflow-hidden mb-4 border-2 border-yellow-400">
                          <Image
                            src={testimonial.avatar || "/placeholder.svg"}
                            alt={testimonial.name}
                            height={160}
                            width={160}
                            // objectFit="100%"
                            className="object-cover transition-transform duration-500 hover:scale-110 w-16 h-16"
                          />
                        </div>
                        <h4 className="text-xl font-bold text-white">
                          {testimonial.name}
                        </h4>
                        <p className="text-yellow-400">{testimonial.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
        )}
      </AnimatePresence>

      <div className="flex justify-center mt-8 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === current ? "bg-yellow-400 w-8" : "bg-white/50"
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>

      <button
        onClick={prevTestimonial}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full p-2 z-10 backdrop-blur-sm"
        aria-label="Previous testimonial"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      <button
        onClick={nextTestimonial}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full p-2 z-10 backdrop-blur-sm"
        aria-label="Next testimonial"
      >
        <ChevronRight className="h-6 w-6" />
      </button>
    </div>
  );
}
