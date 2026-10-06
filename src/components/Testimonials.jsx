import { motion } from 'framer-motion'

const softEase = [0.22, 1, 0.36, 1]

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: softEase },
  },
}

export default function Testimonials() {
  return (
    <section
      aria-labelledby="testimonials-heading"
      className="py-20 sm:py-28 lg:py-24"
    >
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-[42px]">
        <motion.div
          className="flex flex-col items-center text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {/* Decorative gold line */}
          <motion.span
            variants={fadeUp}
            className="mb-10 block h-[1px] w-10 bg-atelier-gold/60"
            aria-hidden="true"
          />

          {/* Quote */}
          <motion.blockquote
            variants={fadeUp}
            className="max-w-[800px]"
          >
            <p
              id="testimonials-heading"
              className="font-editorial text-[28px] leading-[1.14] tracking-[-0.035em] text-atelier-cream sm:text-[36px] lg:text-[42px]"
            >
              &ldquo;I left feeling like the best version of myself—nothing
              overdone, just exactly right.&rdquo;
            </p>
          </motion.blockquote>

          {/* Attribution */}
          <motion.cite
            variants={fadeUp}
            className="mt-8 block text-[12px] font-medium not-italic uppercase tracking-[0.06em] text-atelier-gold lg:mt-10"
          >
            Amelia R. · Cut + Colour
          </motion.cite>
        </motion.div>
      </div>
    </section>
  )
}
