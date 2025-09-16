import { motion } from "framer-motion";
const ScrollReveal = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-2xl font-bold">Hello World</h2>
    </motion.div>
  );
};

const Project = () => {
  const projectData = [
  {
  image: "masak.png",
  title: "MasakApa Hari Ini",
  description:
    "Aplikasi resep masakan interaktif yang menampilkan 50 resep dari berbagai daerah di Indonesia, dilengkapi dengan fitur favorit dan pencarian.",
  technologies: ["React", "Tailwind CSS", "Vite"],
  link: "https://masakapa-hari-ini.vercel.app/",
},


    {
  image: "ReactLanjutan.png",
  title: "Masion Belle Salon",
  description:
    "Platform salon modern dengan fiturmanajemen layanan,search,dibangun menggunakan React di frontend dan Express.js di backend.",
  technologies: ["React", "Express.js", "Node.js", "Tailwind CSS", "PostgreSQL"],
  link: "https://masion-belle-salon.vercel.app/",
},
{
  image: "knit.png",
  title: "Knit and Keep",
  description:
    "Sistem penjualan berbasis web untuk usaha thrifting dengan fitur lengkap termasuk payment gateway dan integrasi API alamat. Aplikasi ini dibangun dengan React untuk frontend serta Java Spring Boot dan PostgreSQL untuk backend.",
  technologies: ["React", "Java Spring Boot", "PostgreSQL", "Tailwind CSS", "Payment Gateway", "API Alamat"],
  link: "https://github.com/dwiwahyu06/KNIT-AND-KEEP",
  features: {
    admin: [
      "Manajemen transaksi",
      "Manajemen barang"
    ],
    user: [
      "Register & Login",
      "Search produk",
      "Integrasi maps alamat",
      "Transaksi & pembayaran",
      "Profile",
      "Keranjang & checkout"
    ]
  }
},

  ];

  const ScrollReveal = ({ children }) => (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {children}
    </motion.div>
  );

  const ProjectCard = ({ project }) => (
    <ScrollReveal>
      <div className="project-card flex flex-col items-center gap-8 p-4 md:flex-row md:gap-24">
        <img
          src={project.image}
          alt={project.title}
          className="w-full cursor-pointer rounded-2xl transition-all duration-300 hover:scale-105 md:w-[300px]"
        />

        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-3">
            <div className="text-xl font-semibold">{project.title}</div>
            <p className="mt-2 text-sm text-gray-400">{project.description}</p>
          </div>

          <div className="flex flex-wrap gap-5">
            {project.technologies.map((tech, index) => (
              <span key={index} className="rounded-lg bg-black p-3">
                {tech}
              </span>
            ))}
          </div>

          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 w-fit rounded-lg bg-white px-4 py-2 text-sm font-semibold text-black hover:bg-gray-300 transition-all duration-300"
          >
            Lihat Project
          </a>
        </div>
      </div>
    </ScrollReveal>
  );

  return (
    <div id="project" className="flex min-h-screen w-full flex-col items-center justify-center gap-16 p-4 md:px-14 md:py-24">
      <ScrollReveal>
        <h1 className="text-4xl font-light text-white md:text-6xl">My Projects</h1>
      </ScrollReveal>
      <div className="flex w-full max-w-[1000px] flex-col gap-16 text-white">
        {projectData.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Project;
