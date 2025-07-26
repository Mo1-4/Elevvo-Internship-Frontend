import React from "react";
import { motion } from "framer-motion";

function Features() {
  return (
    <>
      <section className="features " id="features">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2>Features</h2>
          <div className="features-list">
            <div className="feature">
              <span className="feature-icon">🗂️</span>
              <h3>Organize Tasks</h3>
              <p>Easily categorize and prioritize your daily tasks.</p>
            </div>
            <div className="feature">
              <span className="feature-icon">⏰</span>
              <h3>Reminders</h3>
              <p>Set reminders so you never miss a deadline.</p>
            </div>
            <div className="feature">
              <span className="feature-icon">📊</span>
              <h3>Track Progress</h3>
              <p>Visualize your productivity with insightful stats.</p>
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
}

export default Features;
