import { motion } from "framer-motion";
import Navigation from "../components/Navigation";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-green-100">
      <Navigation />
      <div className="max-w-4xl mx-auto p-8">
        <motion.h1
          className="text-4xl font-bold mb-6 text-blue-800"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Cats
        </motion.h1>
        <motion.p
          className="text-lg mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Cats have been cherished companions to humans for thousands of years. Their grace, independence, and affectionate nature have made them one of the most popular pets worldwide.
        </motion.p>
        <motion.p
          className="text-lg mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          Domesticated cats are believed to have originated from wildcats in the Near East about 10,000 years ago. Today, there are over 70 cat breeds recognized by various cat registries.
        </motion.p>
        <motion.p
          className="text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          Whether they're curled up in a sunny spot or playfully chasing a toy, cats continue to captivate us with their mysterious and lovable ways.
        </motion.p>
      </div>
    </div>
  );
};

export default About;
