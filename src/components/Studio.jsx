import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const softEase = [0.22, 1, 0.36, 1]

export default function Studio() {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] })
  const imageY = useTransform(scrollYProgress, [0, 1], ['-5%', '5%'])

  return (
    <section id="studio" ref={sectionRef} className="mx-auto w-full max-w-[1440px] px-5 py-8 sm:px-8 sm:py-12 lg:px-[42px] lg:py-10" aria-labelledby="studio-heading">
      <div className="bg-atelier-light p-6 sm:p-9 lg:p-10">
        <p className="mb-5 text-[12px] font-medium uppercase tracking-[0.04em] text-atelier-ink/60 sm:mb-6">
          The Studio
        </p>
        <div className="grid overflow-hidden lg:grid-cols-[minmax(0,0.76fr)_minmax(0,1fr)]">
          <motion.figure
            className="relative m-0 min-h-[300px] overflow-hidden bg-[#29241e] sm:min-h-[390px] lg:min-h-[380px]"
            initial={{ opacity: 0, clipPath: 'inset(0 10% 0 0)' }}
            whileInView={{ opacity: 1, clipPath: 'inset(0 0% 0 0)' }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.85, ease: softEase }}
          >
            <motion.img
              src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1400&q=90"
              alt="Warm, softly lit Atelier studio interior"
              className="absolute -inset-y-[8%] inset-x-0 h-[116%] w-full object-cover object-center"
              style={{ y: imageY }}
              initial={{ scale: 1.08 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 1.05, ease: softEase }}
            />
            <div className="absolute inset-0 bg-atelier-black/20" aria-hidden="true" />
          </motion.figure>
          <motion.div
            className="flex min-h-[300px] flex-col justify-center bg-[#f7f3ea] px-7 py-10 sm:min-h-[390px] sm:px-12 sm:py-14 lg:min-h-[380px] lg:px-14 lg:py-12"
            initial={{ opacity: 0, x: 18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.75, ease: softEase, delay: 0.12 }}
          >
            <h2 id="studio-heading" className="m-0 max-w-[470px] font-editorial text-[36px] leading-[1.06] tracking-[-0.04em] text-atelier-ink sm:text-[44px] lg:text-[48px]">
              A studio built around the ritual.
            </h2>
            <p className="mt-6 max-w-[470px] text-[15px] leading-[1.5] tracking-[-0.01em] text-atelier-ink/65 sm:text-[16px] lg:mt-6">
              Warm light, thoughtful details and enough space to slow down. Atelier is designed to make an appointment feel less like an appointment and more like time for yourself.
            </p>
            <a href="#studio" className="mt-7 w-fit text-[12px] font-medium uppercase tracking-[0.04em] text-atelier-ink transition-colors duration-300 hover:text-atelier-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-atelier-ink lg:mt-8">
              Discover the studio →
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
