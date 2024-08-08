import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navigation from "../components/Navigation";

const catBreeds = [
  { name: "Siamese", origin: "Thailand", temperament: "Vocal, intelligent, social" },
  { name: "Maine Coon", origin: "United States", temperament: "Gentle, friendly, playful" },
  { name: "Persian", origin: "Iran", temperament: "Sweet, quiet, docile" },
  { name: "Bengal", origin: "United States", temperament: "Active, energetic, playful" },
  { name: "Sphynx", origin: "Canada", temperament: "Lively, mischievous, devoted" },
];

const Breeds = () => {
  const [selectedBreed, setSelectedBreed] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-100 to-orange-100">
      <Navigation />
      <div className="max-w-4xl mx-auto p-8">
        <motion.h1
          className="text-4xl font-bold mb-6 text-orange-800"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Cat Breeds
        </motion.h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
          {catBreeds.map((breed, index) => (
            <motion.div
              key={breed.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.3 }}
            >
              <Button
                onClick={() => setSelectedBreed(breed)}
                className="w-full bg-orange-500 hover:bg-orange-600 text-white"
              >
                {breed.name}
              </Button>
            </motion.div>
          ))}
        </div>
        {selectedBreed && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="bg-white/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-orange-700">{selectedBreed.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p><strong>Origin:</strong> {selectedBreed.origin}</p>
                <p><strong>Temperament:</strong> {selectedBreed.temperament}</p>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Breeds;
