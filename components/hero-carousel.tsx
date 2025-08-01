// "use client";

// import { useState, useEffect, useRef } from "react";
// import Image from "next/image";
// import {
//   motion,
//   AnimatePresence,
//   useMotionValue,
//   useTransform,
// } from "framer-motion";
// import { Button } from "@/components/ui/button";
// import {
//   ChevronLeft,
//   ChevronRight,
//   Calendar,
//   Play,
//   Volume2,
//   VolumeX,
//   MapPin,
//   Users,
//   Ticket,
// } from "lucide-react";

// const slides = [
//   {
//     id: 1,
//     title: "Get Ready for the Ultimate",
//     highlight: "Wet Party Experience",
//     subtitle:
//       "Dive into the wildest water party of the season with non-stop beats, crazy energy, and unforgettable moments",
//     date: "July 30, 2024",
//     time: "6:00 PM",
//     location: "Magboro, Ogun State",
//     capacity: "5000+ People",
//     price: "₦5,000",
//     image: "/images/30 Fun Pool Party Ideas for Summer 2025 (1).jpeg",
//     video: "/placeholder.mp4",
//     color: "from-blue-600/90 via-purple-700/90 to-indigo-800/90",
//     accent: "yellow",
//     features: [
//       "Water Fights",
//       "Live DJ Sets",
//       "Dance Competitions",
//       "Food & Drinks",
//     ],
//   },
//   {
//     id: 2,
//     title: "Experience the Magic of",
//     highlight: "Emybomboy Live",
//     subtitle:
//       "Watch Nigeria's rising dance sensation set the stage on fire with his unique creativity and explosive energy",
//     date: "July 30, 2024",
//     time: "8:00 PM",
//     location: "Main Stage",
//     capacity: "VIP Access",
//     price: "₦10,000",
//     image: "/images/download (2).jpeg",
//     video: "/placeholder.mp4",
//     color: "from-purple-600/90 via-pink-700/90 to-red-800/90",
//     accent: "pink",
//     features: [
//       "Exclusive Performance",
//       "Meet & Greet",
//       "Photo Session",
//       "VIP Lounge",
//     ],
//   },
//   {
//     id: 3,
//     title: "Join the Hottest",
//     highlight: "Summer Festival",
//     subtitle:
//       "Connect with thousands of party lovers in an epic celebration of music, dance, and pure entertainment",
//     date: "All Weekend",
//     time: "24/7 Fun",
//     location: "Multiple Venues",
//     capacity: "Unlimited",
//     price: "₦3,000",
//     image: "/images/The Summer Of Broken Rules.jpeg",
//     video: "/placeholder.mp4",
//     color: "from-orange-600/90 via-yellow-700/90 to-red-800/90",
//     accent: "orange",
//     features: [
//       "Multiple Stages",
//       "Food Courts",
//       "Art Installations",
//       "Camping Area",
//     ],
//   },
// ];

// export default function HeroCarousel() {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [isPlaying, setIsPlaying] = useState(true);
//   const [isMuted, setIsMuted] = useState(true);
//   const [progress, setProgress] = useState(0);
//   const intervalRef = useRef<NodeJS.Timeout | null>(null);
//   const progressRef = useRef<NodeJS.Timeout | null>(null);

//   const slideDirection = useMotionValue(0);
//   const slideOpacity = useTransform(slideDirection, [-1, 0, 1], [0.3, 1, 0.3]);

//   const SLIDE_DURATION = 8000; // 8 seconds per slide

//   const startProgress = () => {
//     setProgress(0);
//     let currentProgress = 0;

//     progressRef.current = setInterval(() => {
//       currentProgress += 100 / (SLIDE_DURATION / 100);
//       setProgress(currentProgress);

//       if (currentProgress >= 100) {
//         clearInterval(progressRef.current!);
//       }
//     }, 100);
//   };

//   const stopProgress = () => {
//     if (progressRef.current) {
//       clearInterval(progressRef.current);
//     }
//   };

//   const nextSlide = () => {
//     slideDirection.set(1);
//     setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
//     setTimeout(() => slideDirection.set(0), 300);
//     startProgress();
//   };

//   const prevSlide = () => {
//     slideDirection.set(-1);
//     setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
//     setTimeout(() => slideDirection.set(0), 300);
//     startProgress();
//   };

//   const goToSlide = (index: number) => {
//     if (index !== currentSlide) {
//       slideDirection.set(index > currentSlide ? 1 : -1);
//       setCurrentSlide(index);
//       setTimeout(() => slideDirection.set(0), 300);
//       startProgress();
//     }
//   };

//   const togglePlayPause = () => {
//     setIsPlaying(!isPlaying);
//     if (isPlaying) {
//       if (intervalRef.current) clearInterval(intervalRef.current);
//       stopProgress();
//     } else {
//       startAutoPlay();
//       startProgress();
//     }
//   };

//   const startAutoPlay = () => {
//     if (intervalRef.current) clearInterval(intervalRef.current);
//     intervalRef.current = setInterval(() => {
//       nextSlide();
//     }, SLIDE_DURATION);
//   };

//   useEffect(() => {
//     if (isPlaying) {
//       startAutoPlay();
//       startProgress();
//     }

//     return () => {
//       if (intervalRef.current) clearInterval(intervalRef.current);
//       if (progressRef.current) clearInterval(progressRef.current);
//     };
//   }, [isPlaying]);

//   const currentSlideData = slides[currentSlide];

//   return (
//     <div className="absolute inset-0 w-full h-full overflow-hidden">
//       {/* Background Slides */}
//       <AnimatePresence mode="wait">
//         <motion.div
//           key={currentSlideData.id}
//           className="absolute inset-0 w-full h-full"
//           initial={{ scale: 1.1, opacity: 0 }}
//           animate={{ scale: 1, opacity: 1 }}
//           exit={{ scale: 0.9, opacity: 0 }}
//           transition={{ duration: 1.2, ease: "easeInOut" }}
//         >
//           <div className="relative w-full h-full">
//             <Image
//               src={currentSlideData.image || "/placeholder.svg"}
//               alt={currentSlideData.title}
//               fill
//               className="object-cover"
//               priority
//             />

//             {/* Animated Overlay */}
//             <motion.div
//               className={`absolute inset-0 bg-gradient-to-br ${currentSlideData.color}`}
//               initial={{ opacity: 0.7 }}
//               animate={{ opacity: 0.8 }}
//               transition={{ duration: 1 }}
//             />

//             {/* Animated Particles */}
//             <div className="absolute inset-0 overflow-hidden">
//               {[...Array(20)].map((_, i) => (
//                 <motion.div
//                   key={i}
//                   className={`absolute w-2 h-2 bg-${currentSlideData.accent}-400/30 rounded-full`}
//                   style={{
//                     left: `${Math.random() * 100}%`,
//                     top: `${Math.random() * 100}%`,
//                   }}
//                   animate={{
//                     y: [0, -100, 0],
//                     opacity: [0, 1, 0],
//                     scale: [0, 1, 0],
//                   }}
//                   transition={{
//                     duration: Math.random() * 3 + 2,
//                     repeat: Number.POSITIVE_INFINITY,
//                     delay: Math.random() * 2,
//                   }}
//                 />
//               ))}
//             </div>
//           </div>
//         </motion.div>
//       </AnimatePresence>

//       {/* Main Content */}
//       <div className="relative inset-0 flex items-center justify-center z-20 pt-20 pb-24">
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-7xl mx-auto">
//             {/* Left Content */}
//             <motion.div
//               className="space-y-4 sm:space-y-6 lg:space-y-8"
//               style={{ opacity: slideOpacity }}
//             >
//               <AnimatePresence mode="wait">
//                 <motion.div
//                   key={currentSlideData.id}
//                   initial={{ opacity: 0, y: 50, x: -50 }}
//                   animate={{ opacity: 1, y: 0, x: 0 }}
//                   exit={{ opacity: 0, y: -50, x: 50 }}
//                   transition={{ duration: 0.8, ease: "easeOut" }}
//                   className="space-y-4 sm:space-y-6"
//                 >
//                   {/* Event Badge */}
//                   <motion.div
//                     initial={{ scale: 0, rotate: -10 }}
//                     animate={{ scale: 1, rotate: 0 }}
//                     transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
//                     className="inline-block"
//                   >
//                     <div
//                       className={`bg-${currentSlideData.accent}-400 text-black px-3 sm:px-4 lg:px-6 py-1 sm:py-2 rounded-full font-bold text-xs sm:text-sm uppercase tracking-wider shadow-lg`}
//                     >
//                       🎉 Live Event
//                     </div>
//                   </motion.div>

//                   {/* Main Title */}
//                   <div className="space-y-1 sm:space-y-2">
//                     <motion.h1
//                       className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-black text-white leading-tight break-words"
//                       initial={{ opacity: 0, y: 30 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       transition={{ delay: 0.4, duration: 0.8 }}
//                     >
//                       {currentSlideData.title}
//                     </motion.h1>
//                     <motion.h1
//                       className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-black bg-gradient-to-r from-${currentSlideData.accent}-400 to-${currentSlideData.accent}-600 bg-clip-text text-transparent leading-tight break-words`}
//                       initial={{ opacity: 0, y: 30 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       transition={{ delay: 0.6, duration: 0.8 }}
//                     >
//                       {currentSlideData.highlight}
//                     </motion.h1>
//                   </div>

//                   {/* Subtitle */}
//                   <motion.p
//                     className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 leading-relaxed max-w-2xl"
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ delay: 0.8, duration: 0.8 }}
//                   >
//                     {currentSlideData.subtitle}
//                   </motion.p>

//                   {/* Event Details Grid */}
//                   <motion.div
//                     className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4"
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ delay: 1, duration: 0.8 }}
//                   >
//                     <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 sm:p-4 border border-white/20">
//                       <div className="flex items-center space-x-2 mb-2">
//                         <Calendar
//                           className={`h-4 w-4 sm:h-5 sm:w-5 text-${currentSlideData.accent}-400`}
//                         />
//                         <span className="text-white font-semibold text-xs sm:text-sm">
//                           Date & Time
//                         </span>
//                       </div>
//                       <p className="text-gray-300 text-xs sm:text-sm">
//                         {currentSlideData.date}
//                       </p>
//                       <p className="text-gray-300 text-xs sm:text-sm">
//                         {currentSlideData.time}
//                       </p>
//                     </div>

//                     <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 sm:p-4 border border-white/20">
//                       <div className="flex items-center space-x-2 mb-2">
//                         <MapPin
//                           className={`h-4 w-4 sm:h-5 sm:w-5 text-${currentSlideData.accent}-400`}
//                         />
//                         <span className="text-white font-semibold text-xs sm:text-sm">
//                           Location
//                         </span>
//                       </div>
//                       <p className="text-gray-300 text-xs sm:text-sm break-words">
//                         {currentSlideData.location}
//                       </p>
//                     </div>

//                     <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 sm:p-4 border border-white/20">
//                       <div className="flex items-center space-x-2 mb-2">
//                         <Users
//                           className={`h-4 w-4 sm:h-5 sm:w-5 text-${currentSlideData.accent}-400`}
//                         />
//                         <span className="text-white font-semibold text-xs sm:text-sm">
//                           Capacity
//                         </span>
//                       </div>
//                       <p className="text-gray-300 text-xs sm:text-sm">
//                         {currentSlideData.capacity}
//                       </p>
//                     </div>

//                     <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 sm:p-4 border border-white/20">
//                       <div className="flex items-center space-x-2 mb-2">
//                         <Ticket
//                           className={`h-4 w-4 sm:h-5 sm:w-5 text-${currentSlideData.accent}-400`}
//                         />
//                         <span className="text-white font-semibold text-xs sm:text-sm">
//                           Price
//                         </span>
//                       </div>
//                       <p
//                         className={`text-${currentSlideData.accent}-400 font-bold text-sm sm:text-base lg:text-lg`}
//                       >
//                         {currentSlideData.price}
//                       </p>
//                     </div>
//                   </motion.div>

//                   {/* Action Buttons */}
//                   <motion.div
//                     className="flex flex-col sm:flex-row gap-3 sm:gap-4"
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ delay: 1.2, duration: 0.8 }}
//                   >
//                     <motion.div
//                       whileHover={{ scale: 1.05 }}
//                       whileTap={{ scale: 0.95 }}
//                     >
//                       <Button
//                         size="lg"
//                         className={`bg-${currentSlideData.accent}-400 hover:bg-${currentSlideData.accent}-500 text-black font-bold text-sm sm:text-base lg:text-lg px-4 sm:px-6 lg:px-8 py-3 sm:py-4 rounded-full shadow-2xl w-full sm:w-auto`}
//                       >
//                         <Ticket className="mr-2 h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6" />
//                         Get Tickets Now
//                       </Button>
//                     </motion.div>

//                     <motion.div
//                       whileHover={{ scale: 1.05 }}
//                       whileTap={{ scale: 0.95 }}
//                     >
//                       <Button
//                         size="lg"
//                         variant="outline"
//                         className="border-2 border-white text-white hover:bg-white hover:text-black text-sm sm:text-base lg:text-lg px-4 sm:px-6 lg:px-8 py-3 sm:py-4 rounded-full bg-transparent backdrop-blur-sm w-full sm:w-auto"
//                       >
//                         <Play className="mr-2 h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6" />
//                         Watch Trailer
//                       </Button>
//                     </motion.div>
//                   </motion.div>
//                 </motion.div>
//               </AnimatePresence>
//             </motion.div>

//             {/* Right Content - Features */}
//             <motion.div
//               className="space-y-4 sm:space-y-6 lg:order-last"
//               style={{ opacity: slideOpacity }}
//             >
//               <AnimatePresence mode="wait">
//                 <motion.div
//                   key={`features-${currentSlideData.id}`}
//                   initial={{ opacity: 0, x: 50 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   exit={{ opacity: 0, x: -50 }}
//                   transition={{ duration: 0.8, ease: "easeOut" }}
//                   className="space-y-3 sm:space-y-4"
//                 >
//                   <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-4 sm:mb-6">
//                     What&apos;s Included
//                   </h3>
//                   {currentSlideData.features.map((feature, index) => (
//                     <motion.div
//                       key={feature}
//                       className="flex items-center space-x-3 sm:space-x-4 bg-white/10 backdrop-blur-md rounded-xl p-3 sm:p-4 border border-white/20"
//                       initial={{ opacity: 0, x: 30 }}
//                       animate={{ opacity: 1, x: 0 }}
//                       transition={{ delay: 0.2 * index + 0.5 }}
//                       whileHover={{ scale: 1.02, x: 10 }}
//                     >
//                       <div
//                         className={`w-2 h-2 sm:w-3 sm:h-3 bg-${currentSlideData.accent}-400 rounded-full flex-shrink-0`}
//                       />
//                       <span className="text-white font-medium text-sm sm:text-base break-words">
//                         {feature}
//                       </span>
//                     </motion.div>
//                   ))}
//                 </motion.div>
//               </AnimatePresence>
//             </motion.div>
//           </div>
//         </div>
//       </div>

//       {/* Advanced Navigation */}
//       <div className="absolute bottom-4 sm:bottom-6 lg:bottom-8 left-0 right-0 z-30">
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex items-center justify-between">
//             {/* Progress Indicators */}
//             <div className="flex space-x-2 sm:space-x-3">
//               {slides.map((slide, index) => (
//                 <motion.button
//                   key={slide.id}
//                   onClick={() => goToSlide(index)}
//                   className="relative group"
//                   whileHover={{ scale: 1.1 }}
//                   whileTap={{ scale: 0.9 }}
//                 >
//                   <div
//                     className={`w-8 sm:w-12 lg:w-16 h-1.5 sm:h-2 rounded-full ${
//                       index === currentSlide ? "bg-white" : "bg-white/30"
//                     } transition-all duration-300`}
//                   >
//                     {index === currentSlide && (
//                       <motion.div
//                         className={`h-full bg-${currentSlideData.accent}-400 rounded-full`}
//                         initial={{ width: "0%" }}
//                         animate={{ width: `${progress}%` }}
//                         transition={{ duration: 0.1 }}
//                       />
//                     )}
//                   </div>
//                   <span className="absolute -top-6 sm:-top-8 left-1/2 transform -translate-x-1/2 text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
//                     {slide.title.split(" ").slice(0, 2).join(" ")}
//                   </span>
//                 </motion.button>
//               ))}
//             </div>

//             {/* Control Buttons */}
//             <div className="flex items-center space-x-2 sm:space-x-4">
//               <motion.button
//                 onClick={togglePlayPause}
//                 className="bg-white/20 hover:bg-white/30 text-white rounded-full p-2 sm:p-3 backdrop-blur-sm transition-all"
//                 whileHover={{ scale: 1.1 }}
//                 whileTap={{ scale: 0.9 }}
//               >
//                 {isPlaying ? (
//                   <div className="w-3 h-3 sm:w-4 sm:h-4 flex space-x-1">
//                     <div className="w-0.5 sm:w-1 h-full bg-white"></div>
//                     <div className="w-0.5 sm:w-1 h-full bg-white"></div>
//                   </div>
//                 ) : (
//                   <Play className="h-3 w-3 sm:h-4 sm:w-4 ml-0.5" />
//                 )}
//               </motion.button>

//               <motion.button
//                 onClick={() => setIsMuted(!isMuted)}
//                 className="bg-white/20 hover:bg-white/30 text-white rounded-full p-2 sm:p-3 backdrop-blur-sm transition-all"
//                 whileHover={{ scale: 1.1 }}
//                 whileTap={{ scale: 0.9 }}
//               >
//                 {isMuted ? (
//                   <VolumeX className="h-3 w-3 sm:h-4 sm:w-4" />
//                 ) : (
//                   <Volume2 className="h-3 w-3 sm:h-4 sm:w-4" />
//                 )}
//               </motion.button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Navigation Arrows */}
//       <motion.button
//         onClick={prevSlide}
//         className="absolute left-2 sm:left-4 lg:left-6 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white rounded-full p-2 sm:p-3 lg:p-4 z-30 backdrop-blur-sm border border-white/20 transition-all"
//         whileHover={{ scale: 1.1, x: -5 }}
//         whileTap={{ scale: 0.9 }}
//       >
//         <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6" />
//       </motion.button>

//       <motion.button
//         onClick={nextSlide}
//         className="absolute right-2 sm:right-4 lg:right-6 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white rounded-full p-2 sm:p-3 lg:p-4 z-30 backdrop-blur-sm border border-white/20 transition-all"
//         whileHover={{ scale: 1.1, x: 5 }}
//         whileTap={{ scale: 0.9 }}
//       >
//         <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6" />
//       </motion.button>

//       {/* Slide Counter */}
//       <div className="absolute top-4 sm:top-6 lg:top-8 right-4 sm:right-6 lg:right-8 z-30">
//         <div className="bg-black/30 backdrop-blur-md rounded-full px-3 sm:px-4 py-1 sm:py-2 border border-white/20">
//           <span className="text-white font-medium text-xs sm:text-sm">
//             {String(currentSlide + 1).padStart(2, "0")} /{" "}
//             {String(slides.length).padStart(2, "0")}
//           </span>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";

import { useState, useEffect, useRef, useMemo, useCallback } from "react";
import Image from "next/image";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  ChevronLeft,
  ChevronRight,
  Calendar,
  Play,
  Volume2,
  VolumeX,
  MapPin,
  Users,
  Ticket,
} from "lucide-react";

const slides = [
  {
    id: 1,
    title: "Get Ready for the Ultimate",
    highlight: "Wet Party Experience",
    subtitle:
      "Dive into the wildest water party of the season with non-stop beats, crazy energy, and unforgettable moments",
    date: "July 30, 2024",
    time: "6:00 PM",
    location: "Magboro, Ogun State",
    capacity: "5000+ People",
    price: "₦5,000",
    image: "/images/30-fun-pool-party-ideas.jpg",
    video: "/placeholder.mp4",
    color: "from-blue-600/95 via-purple-700/95 to-indigo-800/95",
    accent: "yellow",
    features: [
      "Water Fights",
      "Live DJ Sets",
      "Dance Competitions",
      "Food & Drinks",
    ],
  },
  {
    id: 2,
    title: "Experience the Magic of",
    highlight: "Emybomboy Live",
    subtitle:
      "Watch Nigeria's rising dance sensation set the stage on fire with his unique creativity and explosive energy",
    date: "July 30, 2024",
    time: "8:00 PM",
    location: "Main Stage",
    capacity: "VIP Access",
    price: "₦10,000",
    image: "/images/emybomboy-live.jpg",
    video: "/placeholder.mp4",
    color: "from-purple-600/95 via-pink-700/95 to-red-800/95",
    accent: "pink",
    features: [
      "Exclusive Performance",
      "Meet & Greet",
      "Photo Session",
      "VIP Lounge",
    ],
  },
  {
    id: 3,
    title: "Join the Hottest",
    highlight: "Summer Festival",
    subtitle:
      "Connect with thousands of party lovers in an epic celebration of music, dance, and pure entertainment",
    date: "All Weekend",
    time: "24/7 Fun",
    location: "Multiple Venues",
    capacity: "Unlimited",
    price: "₦3,000",
    image: "/images/summer-festival.jpg",
    video: "/placeholder.mp4",
    color: "from-orange-600/95 via-yellow-700/95 to-red-800/95",
    accent: "orange",
    features: [
      "Multiple Stages",
      "Food Courts",
      "Art Installations",
      "Camping Area",
    ],
  },
];

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const progressRef = useRef<NodeJS.Timeout | null>(null);

  const slideDirection = useMotionValue(0);
  const slideOpacity = useTransform(slideDirection, [-1, 0, 1], [0.3, 1, 0.3]);

  const SLIDE_DURATION = 8000; // 8 seconds per slide

  const memoizedSlides = useMemo(() => slides, []);

  const startProgress = useCallback(() => {
    setProgress(0);
    let currentProgress = 0;

    progressRef.current = setInterval(() => {
      currentProgress += 100 / (SLIDE_DURATION / 200);
      setProgress(currentProgress);

      if (currentProgress >= 100) {
        clearInterval(progressRef.current!);
      }
    }, 200);
  }, [SLIDE_DURATION]);

  const stopProgress = () => {
    if (progressRef.current) {
      clearInterval(progressRef.current);
    }
  };

  const nextSlide = useCallback(() => {
    slideDirection.set(1);
    setCurrentSlide((prev) =>
      prev === memoizedSlides.length - 1 ? 0 : prev + 1
    );
    setTimeout(() => slideDirection.set(0), 300);
    startProgress();
  }, [memoizedSlides.length, slideDirection, startProgress]);

  const prevSlide = () => {
    slideDirection.set(-1);
    setCurrentSlide((prev) =>
      prev === 0 ? memoizedSlides.length - 1 : prev - 1
    );
    setTimeout(() => slideDirection.set(0), 300);
    startProgress();
  };

  const goToSlide = (index: number) => {
    if (index !== currentSlide) {
      slideDirection.set(index > currentSlide ? 1 : -1);
      setCurrentSlide(index);
      setTimeout(() => slideDirection.set(0), 300);
      startProgress();
    }
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
    if (isPlaying) {
      if (intervalRef.current) clearInterval(intervalRef.current);
      stopProgress();
    } else {
      startAutoPlay();
      startProgress();
    }
  };

  const startAutoPlay = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      nextSlide();
    }, SLIDE_DURATION);
  }, [SLIDE_DURATION, nextSlide]);

  useEffect(() => {
    if (isPlaying) {
      startAutoPlay();
      startProgress();
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (progressRef.current) clearInterval(progressRef.current);
    };
  }, [isPlaying, startAutoPlay, startProgress]);

  const currentSlideData = memoizedSlides[currentSlide];

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      {/* Background Slides */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlideData.id}
          className="absolute inset-0 w-full h-full"
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        >
          <div className="relative w-full h-full">
            <Image
              src={currentSlideData.image || "/placeholder.svg"}
              alt={currentSlideData.title}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <motion.div
              className={`absolute inset-0 bg-gradient-to-br ${currentSlideData.color}`}
              initial={{ opacity: 0.8 }}
              animate={{ opacity: 0.9 }}
              transition={{ duration: 1 }}
            />
            <div className="absolute inset-0 overflow-hidden">
              {[...Array(10)].map((_, i) => (
                <motion.div
                  key={i}
                  className={`absolute w-2 h-2 bg-${currentSlideData.accent}-400/30 rounded-full`}
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    y: [0, -50, 0],
                    opacity: [0, 0.8, 0],
                    scale: [0, 0.8, 0],
                  }}
                  transition={{
                    duration: Math.random() * 2 + 1,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: Math.random() * 1,
                  }}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Main Content */}
      <div className="relative inset-0 flex items-center justify-center z-20 pt-20 pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-7xl mx-auto">
            {/* Left Content */}
            <motion.div
              className="space-y-4 sm:space-y-6 lg:space-y-8"
              style={{ opacity: slideOpacity }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlideData.id}
                  initial={{ opacity: 0, y: 50, x: -50 }}
                  animate={{ opacity: 1, y: 0, x: 0 }}
                  exit={{ opacity: 0, y: -50, x: 50 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="space-y-4 sm:space-y-6"
                >
                  <motion.div
                    initial={{ scale: 0, rotate: -10 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                    className="inline-block"
                  >
                    <div
                      className={`bg-${currentSlideData.accent}-400 text-black px-3 sm:px-4 lg:px-6 py-1 sm:py-2 rounded-full font-bold text-xs sm:text-sm uppercase tracking-wider shadow-lg`}
                    >
                      🎉 Live Event
                    </div>
                  </motion.div>

                  <div className="space-y-1 sm:space-y-2">
                    <motion.h1
                      className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black text-white leading-tight"
                      style={{ fontSize: "clamp(1.5rem, 5vw, 3rem)" }}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4, duration: 0.8 }}
                    >
                      {currentSlideData.title}
                    </motion.h1>
                    <motion.h1
                      className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black bg-gradient-to-r from-${currentSlideData.accent}-400 to-${currentSlideData.accent}-600 bg-clip-text text-transparent leading-tight`}
                      style={{ fontSize: "clamp(1.5rem, 5vw, 3rem)" }}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6, duration: 0.8 }}
                    >
                      {currentSlideData.highlight}
                    </motion.h1>
                  </div>

                  <motion.p
                    className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-100 leading-relaxed max-w-2xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                  >
                    {currentSlideData.subtitle}
                  </motion.p>

                  <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 0.8 }}
                  >
                    <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 sm:p-5 border border-white/20">
                      <div className="flex items-center space-x-2 mb-2">
                        <Calendar
                          className={`h-5 w-5 text-${currentSlideData.accent}-400`}
                        />
                        <span className="text-white font-semibold text-sm">
                          Date & Time
                        </span>
                      </div>
                      <p className="text-gray-100 text-xs sm:text-sm">
                        {currentSlideData.date}
                      </p>
                      <p className="text-gray-100 text-xs sm:text-sm">
                        {currentSlideData.time}
                      </p>
                    </div>

                    <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 sm:p-5 border border-white/20">
                      <div className="flex items-center space-x-2 mb-2">
                        <MapPin
                          className={`h-5 w-5 text-${currentSlideData.accent}-400`}
                        />
                        <span className="text-white font-semibold text-sm">
                          Location
                        </span>
                      </div>
                      <p className="text-gray-100 text-xs sm:text-sm truncate">
                        {currentSlideData.location}
                      </p>
                    </div>

                    <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 sm:p-5 border border-white/20">
                      <div className="flex items-center space-x-2 mb-2">
                        <Users
                          className={`h-5 w-5 text-${currentSlideData.accent}-400`}
                        />
                        <span className="text-white font-semibold text-sm">
                          Capacity
                        </span>
                      </div>
                      <p className="text-gray-100 text-xs sm:text-sm">
                        {currentSlideData.capacity}
                      </p>
                    </div>

                    <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 sm:p-5 border border-white/20">
                      <div className="flex items-center space-x-2 mb-2">
                        <Ticket
                          className={`h-5 w-5 text-${currentSlideData.accent}-400`}
                        />
                        <span className="text-white font-semibold text-sm">
                          Price
                        </span>
                      </div>
                      <p
                        className={`text-${currentSlideData.accent}-400 font-bold text-sm sm:text-base`}
                      >
                        {currentSlideData.price}
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                    className="flex flex-col sm:flex-row gap-3 sm:gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2, duration: 0.8 }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button
                        size="lg"
                        className={`bg-${currentSlideData.accent}-400 hover:bg-${currentSlideData.accent}-500 text-black font-bold text-sm sm:text-base px-6 py-4 rounded-full shadow-xl focus:ring-2 focus:ring-${currentSlideData.accent}-300 w-full sm:w-auto`}
                      >
                        <Ticket className="mr-2 h-5 w-5" />
                        Get Tickets Now
                      </Button>
                    </motion.div>

                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button
                        size="lg"
                        variant="outline"
                        className="border-2 border-white text-white hover:bg-white hover:text-black text-sm sm:text-base px-6 py-4 rounded-full bg-transparent backdrop-blur-sm focus:ring-2 focus:ring-white w-full sm:w-auto"
                      >
                        <Play className="mr-2 h-5 w-5" />
                        Watch Trailer
                      </Button>
                    </motion.div>
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </motion.div>

            {/* Right Content - Features */}
            <motion.div
              className="space-y-4 sm:space-y-6 lg:order-last"
              style={{ opacity: slideOpacity }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={`features-${currentSlideData.id}`}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="space-y-4 sm:space-y-5"
                >
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-4 sm:mb-6">
                    What&apos;s Included
                  </h3>
                  {currentSlideData.features.map((feature, index) => (
                    <motion.div
                      key={feature}
                      className="flex items-center space-x-3 sm:space-x-4 bg-white/10 backdrop-blur-md rounded-xl p-4 sm:p-5 border border-white/20 hover:bg-white/20 transition-colors"
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 * index + 0.5 }}
                      whileHover={{ scale: 1.02 }}
                    >
                      <div
                        className={`w-3 h-3 bg-${currentSlideData.accent}-400 rounded-full flex-shrink-0`}
                      />
                      <span className="text-white font-medium text-sm sm:text-base">
                        {feature}
                      </span>
                    </motion.div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Advanced Navigation */}
      <div className="absolute bottom-6 sm:bottom-8 lg:bottom-10 left-0 right-0 z-30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex space-x-2 sm:space-x-3">
              {memoizedSlides.map((slide, index) => (
                <motion.button
                  key={slide.id}
                  onClick={() => goToSlide(index)}
                  className="relative group focus:outline-none focus:ring-2 focus:ring-white"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <div
                    className={`w-10 sm:w-14 lg:w-16 h-1.5 sm:h-2 rounded-full ${
                      index === currentSlide ? "bg-white" : "bg-white/30"
                    } transition-all duration-300`}
                  >
                    {index === currentSlide && (
                      <motion.div
                        className={`h-full bg-${currentSlideData.accent}-400 rounded-full`}
                        initial={{ width: "0%" }}
                        animate={{ width: `${progress}%` }}
                        transition={{ duration: 0.1 }}
                      />
                    )}
                  </div>
                  <span className="absolute -top-8 sm:-top-10 left-1/2 transform -translate-x-1/2 text-xs sm:text-sm text-white opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    {slide.title.split(" ").slice(0, 2).join(" ")}
                  </span>
                </motion.button>
              ))}
            </div>

            <div className="flex items-center space-x-3 sm:space-x-4">
              <motion.button
                onClick={togglePlayPause}
                className="bg-white/20 hover:bg-white/30 text-white rounded-full p-3 sm:p-4 backdrop-blur-sm transition-all focus:ring-2 focus:ring-white"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {isPlaying ? (
                  <div className="w-4 h-4 flex space-x-1">
                    <div className="w-1 h-full bg-white"></div>
                    <div className="w-1 h-full bg-white"></div>
                  </div>
                ) : (
                  <Play className="h-4 w-4 ml-0.5" />
                )}
              </motion.button>

              <motion.button
                onClick={() => setIsMuted(!isMuted)}
                className="bg-white/20 hover:bg-white/30 text-white rounded-full p-3 sm:p-4 backdrop-blur-sm transition-all focus:ring-2 focus:ring-white"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {isMuted ? (
                  <VolumeX className="h-4 w-4" />
                ) : (
                  <Volume2 className="h-4 w-4" />
                )}
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <motion.button
        onClick={prevSlide}
        className="absolute left-4 sm:left-6 lg:left-8 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white rounded-full p-3 sm:p-4 lg:p-5 z-30 backdrop-blur-sm border border-white/20 transition-all focus:ring-2 focus:ring-white"
        whileHover={{ scale: 1.1, x: -5 }}
        whileTap={{ scale: 0.9 }}
      >
        <ChevronLeft className="h-5 w-5 sm:h-6" />
      </motion.button>

      <motion.button
        onClick={nextSlide}
        className="absolute right-4 sm:right-6 lg:right-8 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white rounded-full p-3 sm:p-4 lg:p-5 z-30 backdrop-blur-sm border border-white/20 transition-all focus:ring-2 focus:ring-white"
        whileHover={{ scale: 1.1, x: 5 }}
        whileTap={{ scale: 0.9 }}
      >
        <ChevronRight className="h-5 sm:h-6 w-6" />
      </motion.button>

      {/* Slide Counter */}
      <div className="absolute top-4 sm:top-6 lg:top-8 right-4 sm:right-6 lg:right-8 z-30">
        <div className="bg-black/30 backdrop-blur-md rounded-full px-3 sm:px-4 py-1 sm:py-2 border border-white/20">
          <span className="text-white font-medium text-xs sm:text-sm">
            {String(currentSlide + 1).padStart(2, "0")} /{" "}
            {String(memoizedSlides.length).padStart(2, "0")}
          </span>
        </div>
      </div>
    </div>
  );
}
