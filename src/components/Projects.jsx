import { motion } from 'framer-motion'
import { 
  SiReact, 
  SiNodedotjs, 
  SiMongodb, 
  SiExpress,
  SiWordpress,
  SiShopify,
  SiJavascript,
  SiPhp,
  SiTailwindcss
} from 'react-icons/si'
import { 
  FaCode, 
  FaServer, 
  FaDatabase, 
  FaShoppingCart,
  FaPaintBrush,
  FaRocket,
  FaCloud,
  FaShieldAlt,
  FaGithub,
  FaExternalLinkAlt,
  FaPlug
} from 'react-icons/fa'
import { 
  MdDevices, 
  MdSecurity, 
  MdSettings,
  MdOutlineSpeed
} from 'react-icons/md'
import { TbApi, TbBrandReact } from 'react-icons/tb'
import { GrNode } from 'react-icons/gr'
import { BsLightning, BsGear, BsBoxes, BsCloud } from 'react-icons/bs'

const projects = [
  {
    tab: 'index.jsx',
    dot: '#4fa94f',
    title: 'Task Management Dashboard',
    desc: 'Full-stack MERN app with JWT auth, drag-and-drop task boards and real-time updates.',
    tags: ['React', 'Node', 'MongoDB', 'Express'],
    icon: SiReact,
    icon2: SiNodedotjs,
    icon3: SiMongodb,
    icon4: SiExpress,
    color: '#4fa94f',
    bgColor: 'rgba(79, 169, 79, 0.1)',
    delay: 0,
  },
  {
    tab: 'store.liquid',
    dot: '#95d66b',
    title: 'Shopify Fashion Storefront',
    desc: 'Custom Liquid theme with a tailored product filter, upsell sections and fast checkout.',
    tags: ['Shopify', 'Liquid', 'JS'],
    icon: SiShopify,
    icon2: FaShoppingCart,
    icon3: SiJavascript,
    color: '#95d66b',
    bgColor: 'rgba(149, 214, 107, 0.1)',
    delay: 0.1,
  },
  {
    tab: 'functions.php',
    dot: '#5c9dff',
    title: 'WordPress Business Site',
    desc: 'Custom theme built on a client brief, with an editable homepage and booking form.',
    tags: ['WordPress', 'PHP', 'ACF'],
    icon: SiWordpress,
    icon2: SiPhp,
    color: '#5c9dff',
    bgColor: 'rgba(92, 157, 255, 0.1)',
    delay: 0.2,
  },
  {
    tab: 'api.js',
    dot: '#4fa94f',
    title: 'Booking Platform API',
    desc: 'REST API handling scheduling, availability and payment status for a service business.',
    tags: ['Node', 'Express', 'MongoDB'],
    icon: TbApi,
    icon2: SiNodedotjs,
    icon3: SiExpress,
    icon4: SiMongodb,
    color: '#4fa94f',
    bgColor: 'rgba(79, 169, 79, 0.1)',
    delay: 0.3,
  },
  {
    tab: 'cart.liquid',
    dot: '#95d66b',
    title: 'Shopify App Integration',
    desc: 'Connected a Shopify store to a third-party inventory tool via custom API middleware.',
    tags: ['Shopify', 'REST API'],
    icon: SiShopify,
    icon2: FaPlug,
    color: '#95d66b',
    bgColor: 'rgba(149, 214, 107, 0.1)',
    delay: 0.4,
  },
  {
    tab: 'theme.php',
    dot: '#5c9dff',
    title: 'WordPress Migration & Speed-up',
    desc: 'Rebuilt an outdated WordPress site, improving load speed and mobile responsiveness.',
    tags: ['WordPress', 'Performance'],
    icon: SiWordpress,
    icon2: MdOutlineSpeed,
    color: '#5c9dff',
    bgColor: 'rgba(92, 157, 255, 0.1)',
    delay: 0.5,
  },
]

const grid = {
  hidden: {},
  show: { 
    transition: { 
      staggerChildren: 0.12,
      delayChildren: 0.2,
    } 
  },
}

const card = {
  hidden: { opacity: 0, y: 50, scale: 0.9, rotateY: 15 },
  show: { 
    opacity: 1, 
    y: 0, 
    scale: 1, 
    rotateY: 0,
    transition: { 
      duration: 0.6, 
      ease: "easeOut",
      type: "spring",
      stiffness: 200,
      damping: 20
    }
  },
}

const floatIconVariants = {
  animate: (i) => ({
    y: [0, -8 - i * 2, 0],
    rotate: [0, 8 - i * 2, 0],
    transition: {
      duration: 3 + i * 0.5,
      repeat: Infinity,
      ease: "easeInOut",
      delay: i * 0.2,
    }
  })
}

const beamVariants = {
  animate: (i) => ({
    x: [0, 150 + i * 40, 0],
    y: [0, -80 - i * 20, 0],
    scale: [1, 1.4, 1],
    opacity: [0.2, 0.5, 0.2],
    transition: {
      duration: 10 + i * 2,
      repeat: Infinity,
      ease: "easeInOut",
      delay: i * 0.5,
    }
  })
}

export default function Projects() {
  return (
    <section className="section-custom container position-relative overflow-hidden" id="projects">
      <div className="projects-beams">
        {projects.map((p, index) => (
          <motion.div
            key={index}
            className="project-beam"
            custom={index}
            variants={beamVariants}
            animate="animate"
            style={{
              position: 'absolute',
              width: '180px',
              height: '180px',
              borderRadius: '50%',
              filter: 'blur(50px)',
              background: p.bgColor,
              pointerEvents: 'none',
              zIndex: 0,
              left: `${10 + index * 15}%`,
              top: `${20 + index * 10}%`,
            }}
          />
        ))}
      </div>

      <motion.div
        className="sec-head position-relative"
        style={{ zIndex: 1 }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
      >
        <motion.span 
          className="sec-tag"
          whileHover={{ 
            scale: 1.05,
            color: '#4fd1c5',
            transition: { duration: 0.2 }
          }}
        >
          // 03 — projects
        </motion.span>
        <motion.h2
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          Selected work.
        </motion.h2>
        <motion.p
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          A snapshot of the type of projects I build across each platform. Replace these with
          your real case studies, links and screenshots.
        </motion.p>
      </motion.div>

      <motion.div
        className="row g-4 position-relative"
        style={{ zIndex: 1 }}
        variants={grid}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
      >
        {projects.map((p) => (
          <motion.div className="col-md-6 col-lg-4" key={p.title} variants={card}>
            <motion.div
              className="proj-card position-relative"
              whileHover={{ 
                y: -10,
                scale: 1.03,
                boxShadow: `0 20px 60px ${p.bgColor}`,
                borderColor: p.color,
                transition: { duration: 0.3 }
              }}
              style={{
                background: 'var(--surface)',
                border: '1px solid var(--line)',
                borderRadius: '14px',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                position: 'relative',
                cursor: 'pointer',
              }}
            >
              <motion.div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: `radial-gradient(circle at 50% 50%, ${p.bgColor}, transparent 70%)`,
                  opacity: 0,
                  zIndex: 0,
                }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              />

              <motion.div
                style={{
                  position: 'absolute',
                  inset: '-2px',
                  borderRadius: '14px',
                  background: `conic-gradient(from 0deg, transparent, ${p.color}, transparent, ${p.color}, transparent)`,
                  opacity: 0,
                  zIndex: -1,
                }}
                whileHover={{ 
                  opacity: 0.5,
                  rotate: 360,
                  transition: { duration: 3, ease: "linear", repeat: Infinity }
                }}
              />

              <div className="proj-tab" style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '12px 16px',
                background: 'var(--surface-2)',
                borderBottom: '1px solid var(--line)',
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: '12px',
                color: 'var(--muted)',
                position: 'relative',
                zIndex: 1,
              }}>
                <span>{p.tab}</span>
                <motion.span 
                  className="dot" 
                  style={{ 
                    background: p.dot,
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    display: 'inline-block',
                  }}
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: p.delay,
                  }}
                />
              </div>

              <div className="proj-body" style={{
                padding: '22px',
                position: 'relative',
                zIndex: 1,
                flex: 1,
              }}>
                <motion.div
                  style={{
                    display: 'flex',
                    gap: '8px',
                    marginBottom: '12px',
                    flexWrap: 'wrap',
                  }}
                >
                  {p.icon && (
                    <motion.div
                      custom={0}
                      variants={floatIconVariants}
                      animate="animate"
                      whileHover={{ 
                        scale: 1.8,
                        rotate: 360,
                        transition: { duration: 0.5 }
                      }}
                    >
                      <p.icon size={22} color={p.color} />
                    </motion.div>
                  )}
                  {p.icon2 && (
                    <motion.div
                      custom={1}
                      variants={floatIconVariants}
                      animate="animate"
                      whileHover={{ 
                        scale: 1.8,
                        rotate: 360,
                        transition: { duration: 0.5 }
                      }}
                    >
                      <p.icon2 size={20} color={p.color} />
                    </motion.div>
                  )}
                  {p.icon3 && (
                    <motion.div
                      custom={2}
                      variants={floatIconVariants}
                      animate="animate"
                      whileHover={{ 
                        scale: 1.8,
                        rotate: 360,
                        transition: { duration: 0.5 }
                      }}
                    >
                      <p.icon3 size={20} color={p.color} />
                    </motion.div>
                  )}
                  {p.icon4 && (
                    <motion.div
                      custom={3}
                      variants={floatIconVariants}
                      animate="animate"
                      whileHover={{ 
                        scale: 1.8,
                        rotate: 360,
                        transition: { duration: 0.5 }
                      }}
                    >
                      <p.icon4 size={20} color={p.color} />
                    </motion.div>
                  )}
                </motion.div>

                <motion.h3 
                  style={{ 
                    fontSize: '17px',
                    marginBottom: '8px',
                  }}
                  whileHover={{ color: p.color }}
                >
                  {p.title}
                </motion.h3>

                <motion.p 
                  style={{ 
                    color: 'var(--muted)',
                    fontSize: '13.5px',
                    marginBottom: '16px',
                    lineHeight: '1.6',
                  }}
                  whileHover={{ color: '#eaf0fa' }}
                >
                  {p.desc}
                </motion.p>

                <div className="proj-tags" style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '8px',
                }}>
                  {p.tags.map((t) => (
                    <motion.span 
                      key={t}
                      style={{
                        fontFamily: 'JetBrains Mono, monospace',
                        fontSize: '11px',
                        padding: '4px 9px',
                        borderRadius: '6px',
                        background: 'var(--surface-2)',
                        color: 'var(--muted)',
                        border: '1px solid var(--line)',
                      }}
                      whileHover={{
                        color: p.color,
                        borderColor: p.color,
                        scale: 1.05,
                        transition: { duration: 0.2 }
                      }}
                    >
                      {t}
                    </motion.span>
                  ))}
                </div>

                <motion.div
                  style={{
                    position: 'absolute',
                    bottom: '16px',
                    right: '16px',
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    background: p.color,
                    boxShadow: `0 0 20px ${p.color}`,
                    zIndex: 1,
                  }}
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: p.delay,
                  }}
                />
              </div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      <style>{`
        .projects-beams {
          position: absolute;
          inset: 0;
          overflow: hidden;
          pointer-events: none;
          z-index: 0;
        }

        .project-beam {
          position: absolute;
          border-radius: 50%;
          filter: blur(50px);
          opacity: 0.5;
        }

        .proj-card {
          transition: all 0.3s ease;
          cursor: pointer;
          position: relative;
          overflow: hidden;
        }

        .proj-card:hover {
          transform: translateY(-10px);
        }

        .proj-tab {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 12px 16px;
          background: var(--surface-2);
          border-bottom: 1px solid var(--line);
          font-family: 'JetBrains Mono', monospace;
          font-size: 12px;
          color: var(--muted);
          position: relative;
          z-index: 1;
        }

        .proj-body {
          padding: 22px;
          position: relative;
          z-index: 1;
          flex: 1;
        }

        .proj-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .proj-tags span {
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          padding: 4px 9px;
          border-radius: 6px;
          background: var(--surface-2);
          color: var(--muted);
          border: 1px solid var(--line);
          transition: all 0.2s ease;
        }

        .proj-tags span:hover {
          color: var(--accent);
          border-color: var(--accent);
          transform: scale(1.05);
        }

        .sec-head h2 {
          transition: all 0.3s ease;
        }

        .sec-head p {
          transition: all 0.3s ease;
        }

        @media (max-width: 880px) {
          .project-beam {
            filter: blur(30px);
            width: 100px !important;
            height: 100px !important;
          }
        }
      `}</style>
    </section>
  )
}