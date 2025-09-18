import React from "react";
import { motion } from "framer-motion";

const certificates = [
  {
    image: "/Ser-Basisdata.jpg",
    title: "Database Training Certificate",
  },
  {
    image: "/Ser-Strukturdata.jpg",
    title: "Data Structure Training Certificate",
  },
  {
    image: "/Ser-ReactJava.jpg",
    title: "React-Java Training Certificate",
  },
  {
    image: "/Ser-Reactback.jpg",
    title: "Advanced Front-End Training Certificate",
  },
  {
    image: "/Ser-HTML.jpg",
    title: "Web Programming Training Certificate",
  },
  {
    image: "/Ser-GIT.jpg",
    title: "GIT HUB Training Certificate",
  },
  {
    image: "/Ser-FundamentalReact.jpg",
    title: "Fundamental Front-End Training Certificate",
  },
  {
    image: "/Ser-C.jpg",
    title: "Logic and Algorithm Training Certificate",
  },
  // Tambahkan lagi sesuai jumlah sertifikat yang ada di public
];

const Certificate = () => {
  return (
    <section
      id="certificate"
      className="flex min-h-screen w-full flex-col items-center justify-center gap-16 p-6 md:px-14 md:py-24 bg-black"
    >
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-6xl font-bold text-white"
      >
        My Certificates
      </motion.h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl w-full">
        {certificates.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col items-center gap-4 rounded-2xl bg-gray-900 p-4 shadow-lg hover:scale-105 transition-transform"
          >
            <img
              src={cert.image}
              alt={cert.title}
              className="w-full h-[250px] object-cover rounded-lg"
            />
            <p className="text-white text-center text-lg font-semibold">
              {cert.title}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Certificate;
