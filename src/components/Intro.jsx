import { motion } from 'framer-motion'

const softEase = [0.22, 1, 0.36, 1]

export default function Intro() {
  return (
    <section id="about" className="mx-auto w-full max-w-[1440px] px-5 py-8 sm:px-8 sm:py-12 lg:px-[42px] lg:py-10" aria-labelledby="approach-heading">
      <motion.div
        className="flex min-h-[260px] flex-col items-center justify-center bg-atelier-light px-6 py-14 text-center sm:min-h-[300px] sm:px-12 lg:min-h-[320px] lg:px-20 lg:py-16"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.45 }}
        transition={{ duration: 0.75, ease: softEase }}
      >
        <p className="mb-5 text-[12px] font-medium uppercase tracking-[0.04em] text-atelier-ink/60 sm:mb-6">
          The Atelier Approach
        </p>
        <h2 id="approach-heading" className="m-0 font-editorial text-[36px] leading-[1.06] tracking-[-0.04em] text-atelier-ink sm:text-[44px] lg:text-[48px]">
          Less noise. More intention.
        </h2>
        <p className="mt-5 max-w-[560px] text-[15px] leading-[1.5] tracking-[-0.01em] text-atelier-ink/65 sm:mt-6 sm:text-[16px] lg:max-w-[520px]">
          Personalised beauty services in a warm, quietly luxurious studio where every detail has a purpose.
        </p>
      </motion.div>
    </section>
  )
}
