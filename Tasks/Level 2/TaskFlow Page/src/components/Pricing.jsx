import { motion } from "framer-motion";

function Pricing() {
  return (
    <>
      <section className="pricing" id="pricing">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2>Pricing</h2>
          <div className="pricing-options">
            <div className="pricing-card">
              <h3>Free</h3>
              <p className="price">$0</p>
              <ul>
                <li>Basic Task Management</li>
                <li>Reminders</li>
                <li>Community Support</li>
              </ul>
              <button>Choose Free</button>
            </div>
            <div className="pricing-card pro">
              <h3>Pro</h3>
              <p className="price">$5/mo</p>
              <ul>
                <li>All Free Features</li>
                <li>Advanced Analytics</li>
                <li>Custom Themes</li>
              </ul>
              <button>Choose Pro</button>
            </div>
            <div className="pricing-card team">
              <h3>Team</h3>
              <p className="price">$15/mo</p>
              <ul>
                <li>All Pro Features</li>
                <li>Team Collaboration</li>
                <li>Priority Support</li>
              </ul>
              <button>Choose Team</button>
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
}

export default Pricing;
