"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

interface EventProps {
  id: number;
  title: string;
  date: string;
  location: string;
  image: string;
  category: string;
}

interface EventCardProps {
  event: EventProps;
  index: number;
}

export default function EventCard({ event, index }: EventCardProps) {
  const router = useRouter();
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
    >
      <Card className="bg-white/10 backdrop-blur-md border-purple-500/20 overflow-hidden h-full">
        <CardContent className="p-0">
          <div className="relative">
            <div className="aspect-[4/3] relative overflow-hidden">
              <Image
                src={event.image || "/placeholder.svg"}
                alt={event.title}
                fill
                className="object-cover transition-transform duration-500 hover:scale-110"
              />
              <div className="absolute top-4 right-4 bg-yellow-400 text-black font-semibold px-3 py-1 rounded-full text-sm">
                {event.category}
              </div>
            </div>

            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-3">
                {event.title}
              </h3>

              <div className="space-y-3 mb-4">
                <div className="flex items-center text-gray-300">
                  <Calendar className="h-4 w-4 mr-2 text-yellow-400" />
                  <span>{event.date}</span>
                </div>

                <div className="flex items-center text-gray-300">
                  <MapPin className="h-4 w-4 mr-2 text-yellow-400" />
                  <span>{event.location}</span>
                </div>
              </div>

              <Button
                variant="outline"
                className="w-full border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black bg-transparent"
                onClick={() => router.push("/tickects")}
              >
                Get Tickets
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
