"use client";
import AnimatedCounter from "@/components/animated-counter";
import HeroCarousel from "@/components/hero-carousel";
import Navbar from "@/components/navbar";
import {
  Users,
  Star,
  Calendar,
  MapPin,
  Clock,
  Play,
  Phone,
  Instagram,
  Twitter,
  Facebook,
  Camera,
  Mail,
  Music,
} from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import EventCard from "@/components/event-card";
import GalleryGrid from "@/components/gallery-grid";
import TestimonialSlider from "@/components/testimonial-slider";

export default function Home() {
  const stats = [
    { value: 50, label: "Events Hosted", icon: Calendar },
    { value: 10000, label: "Happy Attendees", icon: Users },
    { value: 25, label: "Partner Venues", icon: MapPin },
    { value: 4.9, label: "Average Rating", icon: Star, decimal: true },
  ];

  const eventFeatures = [
    { title: "Heat and Beats", desc: "Non-stop music that'll keep you moving" },
    {
      title: "Water-Fueled Fun",
      desc: "Cool vibes and crazy energy all day long",
    },
    { title: "Dope Mixes", desc: "The hottest tracks as the town comes alive" },
    {
      title: "Unforgettable Moments",
      desc: "Water fights, dance-offs, and pure excitement",
    },
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: "Wet Party Extravaganza",
      date: "July 30, 2024",
      location: "Magboro, Ogun State",
      image: "/images/ba.png",
      category: "Party",
    },
    {
      id: 2,
      title: "Summer Dance Festival",
      date: "August 15, 2024",
      location: "Lagos Island",
      image:
        "/images/WhatsApp-Image-2025-07-10-at-22.18.55_0fe84f1d-600x497.jpg",
      category: "Festival",
    },
    {
      id: 3,
      title: "Beach Rave Night",
      date: "September 5, 2024",
      location: "Elegushi Beach",
      image:
        "/images/WhatsApp-Image-2025-07-10-at-22.18.55_0fe84f1d-600x497.jpg",
      category: "Rave",
    },
  ];

  const socialMedia = [
    { icon: Instagram, label: "Instagram" },
    { icon: Twitter, label: "Twitter" },
    { icon: Facebook, label: "Facebook" },
  ];

  const contactInfo = [
    { icon: Phone, title: "Call Us", info: "+234 XXX XXX XXXX" },
    { icon: Mail, title: "Email", info: "info@dabeastentertainment.com.ng" },
    { icon: MapPin, title: "Location", info: "Lagos State, Nigeria" },
  ];

  return (
    <div>
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 overflow-hidden">
        <Navbar />
        {/* <div className="h-[90px] sm:h-[100px]"></div> */}
        <section
          id="home"
          className="relative min-h-screen overflow-auto p-2 sm:p-2 lg:p-2"
        >
          <HeroCarousel />
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black/30 relative overflow-hidden">
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-yellow-400/5 to-purple-500/5"
            animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
            transition={{
              duration: 20,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          />
          <div className="container mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <motion.div
                    className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 200 }}
                  >
                    <stat.icon className="h-8 w-8 text-black" />
                  </motion.div>
                  <AnimatedCounter
                    value={stat.value}
                    duration={2}
                    className="text-3xl sm:text-4xl font-bold text-white"
                    decimal={stat.decimal}
                  />
                  <p className="text-gray-300 text-sm sm:text-base mt-2">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        {/* about the party */}
        <section id="about" className="py-16 px-4 relative">
          <motion.div
            className="absolute top-0 right-0 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Number.POSITIVE_INFINITY,
            }}
          />

          <div className="container mx-auto">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                About This Wet Party
              </h2>
              <div className="w-24 h-1 bg-yellow-400 mx-auto mb-8"></div>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <motion.div
                className="space-y-6"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Card className="bg-white/10 backdrop-blur-md border-purple-500/20 overflow-hidden">
                    <CardContent className="p-8">
                      <h3 className="text-2xl font-bold text-yellow-400 mb-4">
                        What to Expect
                      </h3>
                      <div className="space-y-4 text-gray-300">
                        {eventFeatures.map((item, index) => (
                          <motion.div
                            key={index}
                            className="flex items-start space-x-3"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.2 }}
                            viewport={{ once: true }}
                          >
                            <motion.div
                              className="w-2 h-2 bg-yellow-400 rounded-full mt-2"
                              animate={{ scale: [1, 1.5, 1] }}
                              transition={{
                                duration: 2,
                                repeat: Number.POSITIVE_INFINITY,
                              }}
                            />
                            <p>
                              <span className="text-white font-semibold">
                                {item.title}:
                              </span>{" "}
                              {item.desc}
                            </p>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Card className="bg-gradient-to-r from-yellow-400/20 to-orange-500/20 backdrop-blur-md border-yellow-400/30">
                    <CardContent className="p-8">
                      <div className="flex items-center space-x-4 mb-4">
                        <motion.div
                          animate={{ rotate: [0, 360] }}
                          transition={{
                            duration: 20,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "linear",
                          }}
                        >
                          <MapPin className="h-6 w-6 text-yellow-400" />
                        </motion.div>
                        <h3 className="text-xl font-bold text-white">
                          Event Location
                        </h3>
                      </div>
                      <p className="text-gray-300 text-lg">
                        Magboro, Ogun State
                      </p>

                      <div className="mt-4 flex items-center space-x-4">
                        <motion.div
                          animate={{ rotate: [0, 360] }}
                          transition={{
                            duration: 20,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "linear",
                          }}
                        >
                          <Clock className="h-6 w-6 text-yellow-400" />
                        </motion.div>
                        <div>
                          <h3 className="text-xl font-bold text-white">
                            Event Time
                          </h3>
                          <p className="text-gray-300 text-lg">
                            July 30, 2024 • 6:00 PM
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>

              <motion.div
                className="relative"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-purple-500/20 rounded-3xl blur-xl"
                  animate={{
                    scale: [1, 1.05, 1],
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                  }}
                />
                <motion.div
                  whileHover={{ scale: 1.03, rotate: 1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Card className="relative bg-white/10 backdrop-blur-md border-purple-500/20 overflow-hidden">
                    <CardContent className="p-0">
                      <div className="aspect-video bg-gradient-to-br from-purple-600 to-blue-600 relative">
                        <Image
                          src="/images/WhatsApp-Image-2025-07-10-at-22.18.55_0fe84f1d-600x497.jpg"
                          alt="Wet Party Event"
                          fill
                          className="object-cover opacity-80"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <motion.div
                            whileHover={{ scale: 1.2 }}
                            className="w-20 h-20 rounded-full bg-yellow-400/80 flex items-center justify-center cursor-pointer"
                          >
                            <Play className="h-10 w-10 text-black ml-1" />
                          </motion.div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Upcoming Events Section */}
        <section
          id="events"
          className="py-16 px-4 bg-black/30 relative overflow-hidden"
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-blue-500/5"
            animate={{
              backgroundPosition: ["0% 0%", "100% 100%"],
            }}
            transition={{
              duration: 20,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          />

          <div className="container mx-auto">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Upcoming Events
              </h2>
              <div className="w-24 h-1 bg-yellow-400 mx-auto mb-8"></div>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {upcomingEvents.map((event, index) => (
                <EventCard key={event.id} event={event} index={index} />
              ))}
            </div>

            <motion.div
              className="text-center mt-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
            >
              <Button
                size="lg"
                className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold"
              >
                View All Events
              </Button>
            </motion.div>
          </div>
        </section>

        {/* About Artist Section */}
        <section id="artist" className="py-16 px-4 relative overflow-hidden">
          <motion.div
            className="absolute top-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
              x: [0, 50, 0],
            }}
            transition={{
              duration: 10,
              repeat: Number.POSITIVE_INFINITY,
            }}
          />

          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <motion.div
                className="relative order-2 md:order-1"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-purple-500/20 rounded-3xl blur-xl"
                  animate={{
                    scale: [1, 1.05, 1],
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                  }}
                />
                <motion.div
                  whileHover={{ scale: 1.03, rotate: -1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Card className="relative bg-white/10 backdrop-blur-md border-purple-500/20 overflow-hidden">
                    <CardContent className="p-0">
                      <Image
                        src="/images/WhatsApp-Image-2025-07-10-at-22.18.55_0fe84f1d-600x497.jpg"
                        alt="Emybomboy - DaBeast Entertainment"
                        width={500}
                        height={600}
                        className="w-full h-auto object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                      <div className="absolute bottom-0 left-0 p-6">
                        <motion.div
                          className="flex space-x-3"
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                        >
                          {socialMedia.map((social, i) => (
                            <motion.div
                              key={social.label}
                              whileHover={{ scale: 1.2, y: -5 }}
                              className="w-10 h-10 rounded-full bg-yellow-400/80 flex items-center justify-center cursor-pointer"
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: i * 0.1 + 0.5 }}
                            >
                              <social.icon className="h-5 w-5 text-black" />
                            </motion.div>
                          ))}
                        </motion.div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>

              <motion.div
                className="space-y-6 order-1 md:order-2"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div>
                  <motion.h2
                    className="text-4xl md:text-5xl font-bold text-white mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                  >
                    Meet
                    <motion.span
                      className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500"
                      animate={{
                        backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
                      }}
                      transition={{
                        duration: 5,
                        repeat: Number.POSITIVE_INFINITY,
                      }}
                    >
                      {" "}
                      Emybomboy
                    </motion.span>
                  </motion.h2>
                  <motion.div
                    className="w-24 h-1 bg-yellow-400 mb-8"
                    initial={{ width: 0 }}
                    whileInView={{ width: 96 }}
                    transition={{ delay: 0.3 }}
                    viewport={{ once: true }}
                  />
                </div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Card className="bg-white/10 backdrop-blur-md border-purple-500/20">
                    <CardContent className="p-8">
                      <motion.p
                        className="text-gray-300 text-lg leading-relaxed mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        viewport={{ once: true }}
                      >
                        Meet{" "}
                        <span className="text-yellow-400 font-semibold">
                          Emybomboy
                        </span>
                        , a fast-rising dancer with unique creativity and energy
                        that sets every stage on fire with his magic legs. Born
                        and raised in{" "}
                        <span className="text-white font-semibold">
                          Ikorodu, Lagos State
                        </span>
                        , Emybomboy has always had a deep passion for dancing,
                        music, and entertainment.
                      </motion.p>
                      <motion.p
                        className="text-gray-300 text-lg leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        viewport={{ once: true }}
                      >
                        His love for dance and music began at an early age, and
                        this journey has shaped him into an entertainer who
                        always gives his best with a pure heart.
                      </motion.p>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold text-lg px-8 py-4">
                    <Phone className="mr-2 h-5 w-5" />
                    WhatsApp Me
                  </Button>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section
          id="gallery"
          className="py-16 px-4 bg-black/30 relative overflow-hidden"
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5"
            animate={{
              backgroundPosition: ["0% 0%", "100% 100%"],
            }}
            transition={{
              duration: 20,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          />

          <div className="container mx-auto">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Event Gallery
              </h2>
              <div className="w-24 h-1 bg-yellow-400 mx-auto mb-8"></div>
            </motion.div>

            <GalleryGrid />

            <motion.div
              className="text-center mt-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
            >
              <Button
                size="lg"
                variant="outline"
                className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black bg-transparent"
              >
                <Camera className="mr-2 h-5 w-5" />
                View Full Gallery
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 px-4 relative overflow-hidden">
          <motion.div
            className="absolute top-0 right-0 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Number.POSITIVE_INFINITY,
            }}
          />

          <div className="container mx-auto">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                What People Say
              </h2>
              <div className="w-24 h-1 bg-yellow-400 mx-auto mb-8"></div>
            </motion.div>

            <TestimonialSlider />
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="py-16 px-6 sm:px-8 lg:px-10 bg-black/30 relative overflow-hidden"
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-yellow-400/5"
            animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
            transition={{
              duration: 20,
              repeat: 3,
              repeatType: "reverse",
            }}
          />
          <div className="container mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-[clamp(2rem,5vw,3rem)] font-bold text-white mb-4">
                Get In Touch
              </h2>
              <div className="w-24 h-1 bg-yellow-400 mx-auto mb-12"></div>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <Card className="bg-white/10 backdrop-blur-md border-purple-500/20 min-h-[200px] h-full">
                    <CardContent className="p-8 text-center">
                      <motion.div
                        whileHover={{ y: -5 }}
                        transition={{ type: "spring", stiffness: 200 }}
                      >
                        <item.icon
                          className="h-12 w-12 text-yellow-400 mx-auto mb-4"
                          aria-hidden="true"
                        />
                      </motion.div>
                      <h3 className="text-xl font-bold text-white mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-200 text-sm sm:text-base truncate">
                        {item.info}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="mt-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="flex justify-center space-x-6">
                {socialMedia.map((social, index) => (
                  <motion.a
                    key={social.label}
                    // href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 + 0.9, duration: 0.3 }}
                  >
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black bg-transparent p-3 sm:p-4 focus:ring-2 focus:ring-yellow-300"
                      aria-label={`Follow us on ${social.label}`}
                    >
                      <social.icon className="h-5 w-5" aria-hidden="true" />
                    </Button>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-black/50 backdrop-blur-md border-t border-purple-500/20 py-8 px-4">
          <div className="container mx-auto text-center">
            <motion.div
              className="flex items-center justify-center space-x-2 mb-4"
              whileHover={{ scale: 1.05 }}
            >
              <Music className="h-6 w-6 text-yellow-400" />
              <span className="text-xl font-bold text-white">
                DaBeast Entertainment
              </span>
            </motion.div>
            <p className="text-gray-400">
              © 2024 DaBeast Entertainment. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
