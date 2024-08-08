import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "../components/Navigation";

const catImages = [
  "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Cat_November_2010-1a.jpg/1200px-Cat_November_2010-1a.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Kittyply_edit1.jpg/1200px-Kittyply_edit1.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Sleeping_cat_on_her_back.jpg/1200px-Sleeping_cat_on_her_back.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Gato_enervado_pola_presencia_dun_can.jpg/1200px-Gato_enervado_pola_presencia_dun_can.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Orange_tabby_cat_sitting_on_fallen_leaves-Hisashi-01A.jpg/1200px-Orange_tabby_cat_sitting_on_fallen_leaves-Hisashi-01A.jpg",
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-100 to-teal-100">
      <Navigation />
      <div className="max-w-6xl mx-auto p-8">
        <motion.h1
          className="text-4xl font-bold mb-6 text-teal-800"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Cat Gallery
        </motion.h1>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {catImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.3 }}
            >
              <Card
                className="cursor-pointer overflow-hidden"
                onClick={() => setSelectedImage(image)}
              >
                <CardContent className="p-0">
                  <img src={image} alt={`Cat ${index + 1}`} className="w-full h-48 object-cover" />
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <img src={selectedImage} alt="Selected cat" className="max-w-full max-h-full object-contain" />
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Gallery;
