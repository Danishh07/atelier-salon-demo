import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const softEase = [0.22, 1, 0.36, 1]

export default function BookingCTA() {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] })
  const imageY = useTransform(scrollYProgress, [0, 1], ['-5%', '5%'])

  return (
    <section
      id="booking"
      ref={sectionRef}
      className="relative min-h-[420px] overflow-hidden sm:min-h-[500px] lg:min-h-[540px]"
      aria-labelledby="booking-heading"
    >
      {/* Parallax background image */}
      <motion.img
        src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1800&q=90"
        alt=""
        aria-hidden="true"
        className="absolute -inset-y-[8%] inset-x-0 h-[116%] w-full object-cover object-center"
        style={{ y: imageY }}
        initial={{ scale: 1.06 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1.1, ease: softEase }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-atelier-black/55" aria-hidden="true" />

      {/* Content */}
      <div className="relative flex min-h-[420px] items-center justify-center sm:min-h-[500px] lg:min-h-[540px]">
        <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-[42px]">
          <div className="flex flex-col items-center text-center">
            <motion.h2
              id="booking-heading"
              className="m-0 font-editorial text-[42px] leading-[1.04] tracking-[-0.04em] text-atelier-cream sm:text-[56px] lg:text-[64px]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: softEase }}
            >
              Make time for yourself.
            </motion.h2>

            <motion.a
              href="#booking"
              className="mt-8 inline-block rounded-full bg-atelier-gold px-7 py-3.5 text-[12px] font-medium uppercase leading-none text-atelier-ink transition-colors duration-300 hover:bg-atelier-cream focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-atelier-cream sm:mt-10"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, ease: softEase, delay: 0.25 }}
            >
              Book an Appointment
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  )
}
