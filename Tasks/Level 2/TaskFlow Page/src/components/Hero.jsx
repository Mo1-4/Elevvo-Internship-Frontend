import React from "react";
import { motion } from "framer-motion";

function Hero() {
  return (
    <>
    
      <header className="hero m-0">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h1 className="app-title">⭐ TaskFlow ⭐</h1>
          <p className="tagline" >Organize your tasks, boost your productivity.</p>
          <button className="cta-btn">Get Started</button>
        </motion.div>
      </header>
    </>
  );
}

export default Hero;
