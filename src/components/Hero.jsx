import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div id="home" className="flex px-16 min-h-screen w-full items-center justify-center py-28 md:px-32">
      <div className="flex flex-col items-center justify-center gap-10 text-white">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="w-[300px] h-[300px] rounded-full overflow-hidden shadow-2xl shadow-indigo-600">
            <img
              src="dwi.jpg"
              alt="profile"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex max-w-[600px] flex-col items-center justify-center gap-3 text-center"
        >
          <h1 className="bg-gradient-to-r from-pink-400 to-pink-700 bg-clip-text text-transparent opacity-80 text-3xl font-semibold transition-all duration-300 hover:opacity-100"
>
            Dwi Wahyu Susilowati  
          </h1>
          <h3 className="bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent opacity-80 text-2xl font-light md:text-3xl">
            FullStack Web Developer
          </h3>
          <p className="md:text-base text-pretty text-sm text-gray-400">
            Hi, I'm Dwi Wahyu Susilowati, a full-stack web developer passionate about building modern and efficient
            applications. I specialize in creating responsive front-ends using React.js, and robust
            back-ends with Java Spring Boot and Node.js, leveraging databases like PostgreSQL and MySQL.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
