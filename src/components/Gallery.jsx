import { motion } from 'framer-motion'

const softEase = [0.22, 1, 0.36, 1]

const galleryItems = [
  {
    id: 'cut-texture',
    label: 'CUT / TEXTURE',
    src: 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?auto=format&fit=crop&w=1200&q=90',
    alt: 'Hair cutting and texture styling',
    aspect: 'aspect-[3/4]',
  },
  {
    id: 'colour-light',
    label: 'COLOUR / LIGHT',
    src: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=1200&q=90',
    alt: 'Hair colour and beauty treatment',
    aspect: 'aspect-[2/3]',
  },
  {
    id: 'the-studio',
    label: 'THE STUDIO',
    src: 'https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?auto=format&fit=crop&w=1200&q=90',
    alt: 'Atelier salon studio interior',
    aspect: 'aspect-[3/4]',
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: softEase },
  },
}

export default function Gallery() {
  return (
    <section
      className="bg-atelier-light py-12 sm:py-16 lg:py-14"
      aria-labelledby="gallery-heading"
    >
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-[42px]">
        {/* Eyebrow */}
        <p
          id="gallery-heading"
          className="mb-8 text-[12px] font-medium uppercase tracking-[0.04em] text-atelier-ink/50 sm:mb-10 lg:mb-12"
        >
          Selected Work · 2026
        </p>

        {/* Gallery grid */}
        <motion.div
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {galleryItems.map((item) => (
            <motion.figure key={item.id} variants={itemVariants} className="m-0">
              <div
                className={`${item.aspect} w-full overflow-hidden`}
              >
                <motion.img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  className="h-full w-full object-cover"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.6, ease: softEase }}
                />
              </div>
              <figcaption className="mt-4 text-[11px] font-medium uppercase tracking-[0.02em] text-atelier-ink/55">
                {item.label}
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
