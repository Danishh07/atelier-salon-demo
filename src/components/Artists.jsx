import { motion } from 'framer-motion'

const artists = [
  {
    number: '01',
    name: 'Mara Ellis',
    role: 'Founder · Creative Director',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=90',
  },
  {
    number: '02',
    name: 'Noa Bennett',
    role: 'Colourist · Blonding',
    image: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=1200&q=90',
  },
  {
    number: '03',
    name: 'Sana Reed',
    role: 'Stylist · Cut & Texture',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1200&q=90',
  },
]

const softEase = [0.22, 1, 0.36, 1]

const profileVariants = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0 },
}

export default function Artists() {
  return (
    <section className="mx-auto w-full max-w-[1440px] px-5 pb-14 pt-8 sm:px-8 sm:pb-20 sm:pt-12 lg:px-[42px] lg:pb-16 lg:pt-6" aria-labelledby="artists-heading">
      <p className="text-[12px] font-medium uppercase tracking-[0.04em] text-atelier-gold">The people behind the work</p>
      <h2 id="artists-heading" className="mt-4 max-w-[700px] font-editorial text-[36px] leading-[1.06] tracking-[-0.04em] text-atelier-cream sm:mt-5 sm:text-[44px] lg:text-[48px]">
        Good hair starts with good listening.
      </h2>
      <motion.div
        className="mt-8 grid gap-5 md:grid-cols-3 md:gap-4 lg:mt-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ delayChildren: 0.06, staggerChildren: 0.12 }}
      >
        {artists.map((artist) => (
          <motion.article key={artist.number} variants={profileVariants} transition={{ duration: 0.7, ease: softEase }} className="group overflow-hidden bg-[#f7f3ea]">
            <div className="relative aspect-[4/5] overflow-hidden bg-[#29241e] md:aspect-[1.25/1]">
              <motion.img
                src={artist.image}
                alt={`${artist.name}, ${artist.role}`}
                className="h-full w-full object-cover object-center"
                whileHover={{ scale: 1.035 }}
                transition={{ duration: 0.55, ease: softEase }}
              />
            </div>
            <div className="px-5 py-5 sm:px-6 sm:py-6 lg:px-5 lg:py-5">
              <p className="text-[11px] font-medium tracking-[-0.015em] text-atelier-gold">{artist.number}</p>
              <h3 className="mt-2.5 font-editorial text-[24px] leading-none tracking-[-0.04em] text-atelier-ink sm:text-[26px] lg:text-[28px]">{artist.name}</h3>
              <p className="mt-2 text-[11px] font-medium uppercase tracking-[0.02em] text-atelier-ink/55 lg:text-[12px]">{artist.role}</p>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  )
}
