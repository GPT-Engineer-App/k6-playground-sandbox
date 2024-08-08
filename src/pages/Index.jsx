import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Cat, Heart } from "lucide-react";
import { motion } from "framer-motion";
import Navigation from "../components/Navigation";

const Index = () => {
  const [likes, setLikes] = useState(0);

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-pink-100">
      <Navigation />
      <div className="max-w-4xl mx-auto p-8">
        <motion.h1 
          className="text-5xl font-bold mb-6 flex items-center justify-center text-purple-800"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Cat className="mr-2" /> Purrfect Companions
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg"
            alt="A cute cat"
            className="mx-auto object-cover w-full h-[500px] rounded-lg mb-8 shadow-lg"
          />
        </motion.div>
        <motion.p 
          className="text-xl text-gray-700 mb-8 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Discover the enchanting world of cats - graceful, mysterious, and utterly adorable. 
          These beloved companions have captured hearts for millennia with their playful antics and soothing purrs.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Card className="bg-white/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-purple-700">Feline Features</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside">
                <li>Whiskers that sense their surroundings</li>
                <li>Night vision six times better than humans</li>
                <li>Ability to jump up to six times their length</li>
                <li>Unique nose print, like human fingerprints</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-white/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-purple-700">Cat Curiosities</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside">
                <li>Spend 70% of their lives sleeping</li>
                <li>Can make over 100 different vocal sounds</li>
                <li>Have been worshipped as gods in ancient cultures</li>
                <li>Can run at speeds up to 30 mph</li>
              </ul>
            </CardContent>
          </Card>
        </div>
        <div className="flex justify-center">
          <Button 
            onClick={() => setLikes(likes + 1)}
            className="bg-pink-500 hover:bg-pink-600 text-white"
          >
            <Heart className="mr-2" /> Like Cats ({likes})
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
