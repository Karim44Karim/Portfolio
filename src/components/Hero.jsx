// Hero.jsx
import { motion } from "framer-motion";
import profilePicture from '../assets/Karim Radwan.jpg'
export default function Hero() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.6 }}
      className="flex flex-col items-center justify-center h-screen"
    >
      <img src={profilePicture} alt="Me" className="w-32 h-32 rounded-full mb-6 shadow-lg object-cover" />
      <h1 className="text-4xl font-bold">Hi, I'm Karim</h1>
      <p className="text-lg mt-2">Front-End React Developer</p>
    </motion.div>
  );
}
