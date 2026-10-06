import { motion } from 'framer-motion'

const services = [
  { number: '01', title: 'Cut & Style', description: 'Precision cuts shaped around you.' },
  { number: '02', title: 'Colour', description: 'Dimensional colour, thoughtfully placed.' },
  { number: '03', title: 'Care Rituals', description: 'Restorative treatments for healthy hair.' },
]

const softEase = [0.22, 1, 0.36, 1]

const cardVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
}

export default function Services() {
  return (
    <section id="services" className="mx-auto w-full max-w-[1440px] px-5 pb-12 pt-6 sm:px-8 sm:pb-16 sm:pt-8 lg:px-[42px] lg:pb-14 lg:pt-4" aria-labelledby="services-heading">
      <p id="services-heading" className="mb-5 text-[12px] font-medium uppercase tracking-[0.04em] text-atelier-gold sm:mb-6">
        Signature Services
      </p>
      <motion.div
        className="grid gap-4 md:grid-cols-3 lg:gap-5"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        transition={{ delayChildren: 0.05, staggerChildren: 0.1 }}
      >
        {services.map((service) => (
          <motion.article
            key={service.number}
            variants={cardVariants}
            transition={{ duration: 0.65, ease: softEase }}
            whileHover={{ y: -4, borderColor: 'rgba(214, 173, 122, 0.58)' }}
            className="group flex min-h-[200px] flex-col border border-atelier-cream/15 p-6 transition-colors duration-300 sm:min-h-[220px] sm:p-7 lg:min-h-[240px] lg:p-8"
          >
            <p className="m-0 text-[12px] font-medium tracking-[-0.015em] text-atelier-gold">{service.number}</p>
            <h3 className="mt-auto font-editorial text-[28px] leading-[1.04] tracking-[-0.04em] text-atelier-cream sm:text-[30px] lg:text-[34px]">
              {service.title}
            </h3>
            <p className="mt-3 text-[14px] leading-[1.45] tracking-[-0.01em] text-atelier-muted sm:text-[15px] lg:mt-3">
              {service.description}
            </p>
          </motion.article>
        ))}
      </motion.div>
    </section>
  )
}
