import { motion } from 'framer-motion'

const softEase = [0.22, 1, 0.36, 1]

const textReveal = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
}

export default function Hero() {
  return (
    <section
      className="mx-auto w-full max-w-[1440px] px-5 pb-12 pt-12 sm:px-8 sm:pb-14 sm:pt-14 lg:px-[42px] lg:pb-16 lg:pt-12"
      aria-labelledby="hero-title"
    >
      <div className="grid items-stretch gap-8 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1fr)] lg:gap-10">
        {/* Hero Content */}
        <motion.div
          className="flex max-w-[560px] flex-col justify-center"
          initial="hidden"
          animate="visible"
          transition={{
            staggerChildren: 0.11,
            delayChildren: 0.16,
          }}
        >
          {/* Eyebrow */}
          <motion.p
            variants={textReveal}
            transition={{
              duration: 0.65,
              ease: softEase,
            }}
            className="mb-5 text-[12px] font-medium uppercase tracking-[0.05em] text-atelier-gold sm:mb-6"
          >
            A quiet place for beauty
          </motion.p>

          {/* Main Heading */}
          <motion.h1
            id="hero-title"
            variants={textReveal}
            transition={{
              duration: 0.75,
              ease: softEase,
            }}
            className="m-0 font-editorial text-[48px] leading-[1.02] tracking-[-0.045em] text-atelier-cream sm:text-[60px] lg:text-[76px]"
          >
            Your hair,
            <br />
            beautifully
            <br />
            considered.
          </motion.h1>

          {/* Supporting Copy */}
          <motion.p
            variants={textReveal}
            transition={{
              duration: 0.65,
              ease: softEase,
            }}
            className="mt-6 max-w-[500px] text-[16px] leading-[1.55] tracking-[-0.01em] text-atelier-muted sm:mt-7 sm:text-[17px] lg:max-w-[500px]"
          >
            A private studio for considered cuts, colour and ritual-led care.
            Designed around you, never a trend.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={textReveal}
            transition={{
              duration: 0.65,
              ease: softEase,
            }}
            className="mt-7 flex flex-wrap items-center gap-3.5 sm:mt-8"
          >
            <a
              href="#booking"
              className="inline-flex min-h-[46px] items-center justify-center rounded-full bg-atelier-gold px-6 py-3 text-[13px] font-medium leading-none text-atelier-ink transition-colors duration-300 hover:bg-atelier-cream focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-atelier-gold"
            >
              BOOK AN APPOINTMENT
            </a>

            <a
              href="#services"
              className="inline-flex min-h-[46px] items-center justify-center rounded-full border border-atelier-cream/35 px-6 py-3 text-[13px] font-medium leading-none text-atelier-cream transition-colors duration-300 hover:border-atelier-gold hover:text-atelier-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-atelier-gold"
            >
              EXPLORE SERVICES
            </a>
          </motion.div>
        </motion.div>

        {/* Hero Image */}
        <motion.figure
          className="relative m-0 min-h-[280px] overflow-hidden bg-[#29241e] sm:min-h-[380px] lg:min-h-0 lg:aspect-[1.6/1]"
          initial={{
            opacity: 0,
            scale: 0.985,
            clipPath: 'inset(0 8% 0 0)',
          }}
          animate={{
            opacity: 1,
            scale: 1,
            clipPath: 'inset(0 0% 0 0)',
          }}
          transition={{
            duration: 0.9,
            ease: softEase,
            delay: 0.2,
          }}
        >
          <motion.img
            src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1800&q=90"
            alt="A client enjoying a quiet salon appointment"
            className="absolute inset-0 h-full w-full object-cover object-center opacity-75"
            initial={{ scale: 1.08 }}
            animate={{ scale: 1 }}
            transition={{
              duration: 1.1,
              ease: softEase,
              delay: 0.28,
            }}
          />

          {/* Image Overlay */}
          <div
            className="absolute inset-0 bg-atelier-black/40"
            aria-hidden="true"
          />

          {/* Image Caption */}
          <figcaption className="absolute bottom-6 left-6 text-atelier-cream sm:bottom-7 sm:left-7 lg:bottom-8 lg:left-8">
            <p className="mb-2 text-[11px] uppercase tracking-[0.03em] text-atelier-gold sm:text-[12px]">
              The Atelier Experience
            </p>

            <p className="font-editorial text-xl leading-none tracking-[-0.04em] sm:text-2xl">
              Cut · Colour · Care
            </p>
          </figcaption>
        </motion.figure>
      </div>
    </section>
  )
}