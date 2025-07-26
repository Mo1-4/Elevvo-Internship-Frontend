import user1 from "../assets/user1.png";
import user2 from "../assets/user2.png";
import user3 from "../assets/user3.png";

import { motion } from "framer-motion";

function Reviews() {
  return (
    <>
      <section className="reviews " id="reviews">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2>What Users Say</h2>
          <div className="reviews-list">
            <blockquote>
              <img className="review-img" src={user1} alt="user review" />
              <p>
                "TaskFlow has transformed the way I work. Highly recommended!"
              </p>
              <footer>- Alex P.</footer>
            </blockquote>

            <blockquote>
              <img className="review-img" src={user2} alt="user review" />
              <p>"Simple, clean, and effective. My go-to task manager."</p>
              <footer>- Jamie L.</footer>
            </blockquote>

            <blockquote>
              <img className="review-img" src={user3} alt="user review" />
              <p>"The reminders keep me on track every day. Love it!"</p>
              <footer>- Morgan S.</footer>
            </blockquote>
          </div>
        </motion.div>
      </section>
    </>
  );
}

export default Reviews;
