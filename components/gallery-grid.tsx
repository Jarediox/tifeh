"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { X } from "lucide-react";

export default function GalleryGrid() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    "/images/30 Fun Pool Party Ideas for Summer 2025 (1).jpeg",
    "/images/download (2).jpeg",
    "/images/The Summer Of Broken Rules.jpeg",
    "/images/30 Fun Pool Party Ideas for Summer 2025 (1).jpeg",
    "/images/download (2).jpeg",
    "/images/The Summer Of Broken Rules.jpeg",
  ];

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <motion.div
            key={index}
            className="relative aspect-square overflow-hidden rounded-lg cursor-pointer"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            onClick={() => setSelectedImage(image)}
          >
            <Image
              src={image || "/placeholder.svg"}
              alt={`Gallery image ${index + 1}`}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-4 left-4 text-white font-semibold">
                Event {index + 1}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <motion.div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <button
            className="absolute top-4 right-4 text-white bg-black/50 p-2 rounded-full"
            onClick={() => setSelectedImage(null)}
          >
            <X className="h-6 w-6" />
          </button>

          <motion.div
            className="relative w-full max-w-4xl max-h-[80vh]"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Image
              src={selectedImage || "/placeholder.svg"}
              alt="Enlarged gallery image"
              width={1200}
              height={800}
              className="w-full h-auto object-cover"
            />
          </motion.div>
        </motion.div>
      )}
    </>
  );
}
