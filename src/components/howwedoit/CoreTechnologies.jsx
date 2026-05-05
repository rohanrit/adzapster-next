'use client'

import { motion } from 'framer-motion'

export default function CoreTechnologies() {
  return (
    <section className="section">
      <div className="container relative z-10">
        <div className="robolabs-core-tech">
          <motion.p
            className="text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Our core technologies
          </motion.p>
          <motion.div
            className="robolabs-logo-strip"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <img src="https://framerusercontent.com/images/m2Ee8qVNaUq1p30JNXzf87wtGZ4.png" alt="Technology 1" />
            <img src="https://framerusercontent.com/images/n3QeCgxiERZtWGL7E7mRbFJGPU.png" alt="Technology 2" />
            <img src="https://framerusercontent.com/images/Bcly3ML9TcmNxDC5rKCRKuvqODI.png" alt="Technology 3" />
            <img src="https://framerusercontent.com/images/o3i1Dnx2WxItzPkcePIqvEQOFU.png" alt="Technology 4" />
            <img src="https://framerusercontent.com/images/aEfuAatqNA9OPAwEZa6f4GuCgU.png" alt="Technology 5" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
