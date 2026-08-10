import { motion } from 'framer-motion'
import { 
  SiMongodb, 
  SiExpress, 
  SiReact, 
  SiNodedotjs,
  SiWordpress,
  SiShopify,
  SiAuth0,
  SiJsonwebtokens,
  SiTailwindcss,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiGit,
  SiGithub
} from 'react-icons/si'
import { 
  FaServer, 
  FaDatabase, 
  FaCode, 
  FaShoppingCart, 
  FaPaintBrush,
  FaRocket,
  FaCloud,
  FaShieldAlt
} from 'react-icons/fa'
import { 
  MdEmail, 
  MdOutlineDeveloperMode,
  MdStorage,
  MdSecurity
} from 'react-icons/md'
import { TbBrandReact, TbApi } from 'react-icons/tb'
import { GrNode } from 'react-icons/gr'
import { BsLightning, BsGear } from 'react-icons/bs'

const stack = [
  {
    color: '#4fa94f',
    title: 'MongoDB · Express · React · Node',
    desc: 'Custom full-stack applications',
    icon: SiMongodb,
    icon2: SiExpress,
    icon3: SiReact,
    icon4: SiNodedotjs,
    bgColor: 'rgba(79, 169, 79, 0.1)',
    beamColor: 'rgba(79, 169, 79, 0.15)',
    glowColor: 'rgba(79, 169, 79, 0.3)',
  },
  {
    color: '#5c9dff',
    title: 'WordPress',
    desc: 'Custom themes, plugins & site builds',
    icon: SiWordpress,
    bgColor: 'rgba(92, 157, 255, 0.1)',
    beamColor: 'rgba(92, 157, 255, 0.15)',
    glowColor: 'rgba(92, 157, 255, 0.3)',
  },
  {
    color: '#95d66b',
    title: 'Shopify',
    desc: 'Storefronts, Liquid theming & apps',
    icon: SiShopify,
    bgColor: 'rgba(149, 214, 107, 0.1)',
    beamColor: 'rgba(149, 214, 107, 0.15)',
    glowColor: 'rgba(149, 214, 107, 0.3)',
  },
  {
    color: '#f2a65a',
    title: 'REST APIs & Auth',
    desc: 'JWT, third-party integrations',
    icon: TbApi,
    icon2: SiJsonwebtokens,
    bgColor: 'rgba(242, 166, 90, 0.1)',
    beamColor: 'rgba(242, 166, 90, 0.15)',
    glowColor: 'rgba(242, 166, 90, 0.3)',
  },
]

// Background tech icons for beams
const bgTechIcons = [
  { icon: SiReact, color: '#61dafb', size: 30, x: '5%', y: '10%', delay: 0 },
  { icon: SiNodedotjs, color: '#339933', size: 28, x: '85%', y: '15%', delay: 0.5 },
  { icon: SiMongodb, color: '#4fa94f', size: 26, x: '10%', y: '70%', delay: 1 },
  { icon: SiExpress, color: '#b8bec7', size: 24, x: '90%', y: '80%', delay: 1.5 },
  { icon: SiWordpress, color: '#5c9dff', size: 28, x: '50%', y: '5%', delay: 0.8 },
  { icon: SiShopify, color: '#95d66b', size: 26, x: '45%', y: '90%', delay: 1.2 },
  { icon: SiJavascript, color: '#f7df1e', size: 22, x: '75%', y: '45%', delay: 0.3 },
  { icon: SiHtml5, color: '#e34f26', size: 22, x: '20%', y: '45%', delay: 0.7 },
  { icon: SiCss, color: '#1572b6', size: 22, x: '60%', y: '50%', delay: 1.1 },
  { icon: SiTailwindcss, color: '#06b6d4', size: 24, x: '30%', y: '25%', delay: 0.4 },
  { icon: SiGit, color: '#f05032', size: 20, x: '70%', y: '70%', delay: 0.9 },
  { icon: SiGithub, color: '#ffffff', size: 22, x: '15%', y: '85%', delay: 1.3 },
]

// Container variants for stagger animation
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
}

// Stack item variants
const stackVariants = {
  hidden: { opacity: 0, x: 50, rotateY: 30 },
  show: { 
    opacity: 1, 
    x: 0, 
    rotateY: 0,
    transition: { 
      duration: 0.6, 
      ease: "easeOut",
      type: "spring",
      stiffness: 300,
      damping: 25
    }
  },
}

// Floating icon variants
const floatIconVariants = {
  animate: (i) => ({
    y: [0, -15 - i * 3, 0],
    rotate: [0, 10 - i * 2, 0],
    scale: [1, 1.1, 1],
    transition: {
      duration: 4 + i * 0.5,
      repeat: Infinity,
      ease: "easeInOut",
      delay: i * 0.2,
    }
  })
}

// Background beam animation variants
const beamVariants = {
  animate: (i) => ({
    x: [0, 100 + i * 50, 0],
    y: [0, -50 - i * 20, 0],
    scale: [1, 1.2, 1],
    opacity: [0.3, 0.6, 0.3],
    transition: {
      duration: 8 + i * 2,
      repeat: Infinity,
      ease: "easeInOut",
      delay: i * 0.5,
    }
  })
}

// Background tech icon variants
const bgIconVariants = {
  animate: (i) => ({
    y: [0, -30 - i * 10, 0],
    x: [0, 20 + i * 5, 0],
    rotate: [0, 360],
    scale: [1, 1.2, 1],
    opacity: [0.1, 0.3, 0.1],
    transition: {
      duration: 15 + i * 3,
      repeat: Infinity,
      ease: "linear",
      delay: i * 0.3,
    }
  })
}

export default function About() {
  return (
    <section className="section-custom container position-relative overflow-hidden" id="about">
      {/* Background Beams */}
      <div className="beams-container">
        {stack.map((s, index) => (
          <motion.div
            key={index}
            className="color-beam"
            custom={index}
            variants={beamVariants}
            animate="animate"
            style={{
              position: 'absolute',
              width: '300px',
              height: '300px',
              borderRadius: '50%',
              filter: 'blur(80px)',
              background: s.beamColor || s.bgColor,
              pointerEvents: 'none',
              zIndex: 0,
              left: `${10 + index * 25}%`,
              top: `${20 + index * 15}%`,
            }}
          />
        ))}
      </div>

      {/* Background Tech Icons */}
      <div className="bg-tech-icons">
        {bgTechIcons.map((icon, index) => (
          <motion.div
            key={index}
            custom={index}
            variants={bgIconVariants}
            animate="animate"
            style={{
              position: 'absolute',
              left: icon.x,
              top: icon.y,
              opacity: 0.1,
              pointerEvents: 'none',
              zIndex: 0,
            }}
          >
            <icon.icon size={icon.size} color={icon.color} />
          </motion.div>
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
          // 01 — about
        </motion.span>
        <motion.h2
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          One developer, three platforms.
        </motion.h2>
      </motion.div>

      <div className="row g-5 about-grid position-relative" style={{ zIndex: 1 }}>
        <motion.div
          className="col-lg-6"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ 
            duration: 0.7, 
            ease: "easeOut",
            type: "spring",
            stiffness: 200,
            damping: 20
          }}
          whileHover={{ x: 10 }}
        >
          <motion.div className="d-flex flex-column gap-4">
            <motion.p
              whileHover={{ 
                scale: 1.02,
                color: '#eaf0fa',
                transition: { duration: 0.2 }
              }}
            >
              I work across the MERN stack building custom web applications — from
              authentication and dashboards to REST APIs and database design — while also
              delivering WordPress sites and Shopify stores for clients who need a fast,
              manageable online presence.
            </motion.p>
            
            <motion.p
              whileHover={{ 
                scale: 1.02,
                color: '#eaf0fa',
                transition: { duration: 0.2 }
              }}
            >
              Whether it's a custom-built React application or a client-managed
              WordPress/Shopify store, my focus stays the same: clean code, solid performance,
              and a smooth handover.
            </motion.p>

            <motion.a
              href="mailto:webtechwebapps@gmail.com"
              className="btn-line mt-2 d-inline-flex align-items-center gap-2"
              whileHover={{ 
                scale: 1.05,
                borderColor: '#4fd1c5',
                color: '#4fd1c5',
                x: 10,
                boxShadow: '0 10px 30px rgba(79, 209, 197, 0.2)',
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.span
                animate={{ 
                  rotate: [0, -10, 10, -10, 0],
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              >
                <MdEmail size={18} />
              </motion.span>
              webtechwebapps@gmail.com
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          className="col-lg-6 d-flex flex-column gap-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          {stack.map((s, index) => (
            <motion.div
              key={s.title}
              className="stack-item position-relative"
              variants={stackVariants}
              whileHover={{ 
                scale: 1.05,
                boxShadow: `0 10px 40px ${s.glowColor}`,
                borderColor: s.color,
                transition: { duration: 0.3 }
              }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '14px',
                background: 'var(--surface)',
                border: '1px solid var(--line)',
                borderRadius: '10px',
                padding: '14px 16px',
                cursor: 'pointer',
                overflow: 'hidden',
                position: 'relative',
              }}
            >
              {/* Background glow effect */}
              <motion.div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: `radial-gradient(circle at 0% 50%, ${s.bgColor}, transparent 70%)`,
                  opacity: 0,
                }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              />

              {/* Animated beam inside item */}
              <motion.div
                style={{
                  position: 'absolute',
                  width: '200%',
                  height: '200%',
                  background: `conic-gradient(from 0deg, transparent, ${s.color}20, transparent, ${s.color}20, transparent)`,
                  opacity: 0,
                  top: '-50%',
                  left: '-50%',
                }}
                whileHover={{ 
                  opacity: 0.3,
                  rotate: 360,
                  transition: { duration: 3, ease: "linear" }
                }}
              />

              <motion.div
                className="stack-bar"
                style={{ 
                  background: s.color,
                  width: '6px',
                  height: '32px',
                  borderRadius: '4px',
                  flexShrink: 0,
                  position: 'relative',
                  zIndex: 1,
                }}
                whileHover={{ 
                  height: '40px',
                  boxShadow: `0 0 20px ${s.color}`,
                  transition: { duration: 0.3 }
                }}
              />

              {/* Icons */}
              <div className="d-flex gap-2" style={{ position: 'relative', zIndex: 1 }}>
                {s.icon && (
                  <motion.div
                    custom={index}
                    variants={floatIconVariants}
                    animate="animate"
                    whileHover={{ 
                      scale: 1.8,
                      rotate: 360,
                      transition: { duration: 0.5 }
                    }}
                  >
                    <s.icon size={24} color={s.color} />
                  </motion.div>
                )}
                {s.icon2 && (
                  <motion.div
                    custom={index + 1}
                    variants={floatIconVariants}
                    animate="animate"
                    whileHover={{ 
                      scale: 1.8,
                      rotate: 360,
                      transition: { duration: 0.5 }
                    }}
                  >
                    <s.icon2 size={24} color={s.color} />
                  </motion.div>
                )}
                {s.icon3 && (
                  <motion.div
                    custom={index + 2}
                    variants={floatIconVariants}
                    animate="animate"
                    whileHover={{ 
                      scale: 1.8,
                      rotate: 360,
                      transition: { duration: 0.5 }
                    }}
                  >
                    <s.icon3 size={24} color={s.color} />
                  </motion.div>
                )}
                {s.icon4 && (
                  <motion.div
                    custom={index + 3}
                    variants={floatIconVariants}
                    animate="animate"
                    whileHover={{ 
                      scale: 1.8,
                      rotate: 360,
                      transition: { duration: 0.5 }
                    }}
                  >
                    <s.icon4 size={24} color={s.color} />
                  </motion.div>
                )}
              </div>

              <div style={{ position: 'relative', zIndex: 1, flex: 1 }}>
                <motion.h4 
                  style={{ fontSize: '14.5px', marginBottom: '2px' }}
                  whileHover={{ color: s.color }}
                >
                  {s.title}
                </motion.h4>
                <motion.span 
                  style={{ 
                    fontSize: '12.5px', 
                    color: 'var(--muted)',
                    fontFamily: 'JetBrains Mono, monospace',
                  }}
                  whileHover={{ color: '#eaf0fa' }}
                >
                  {s.desc}
                </motion.span>
              </div>

              {/* Arrow indicator */}
              <motion.div
                style={{
                  position: 'relative',
                  zIndex: 1,
                  opacity: 0,
                  color: s.color,
                }}
                whileHover={{ 
                  opacity: 1,
                  x: 5,
                  transition: { duration: 0.3 }
                }}
              >
                <FaRocket size={14} />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style>{`
        .beams-container {
          position: absolute;
          inset: 0;
          overflow: hidden;
          pointer-events: none;
          z-index: 0;
        }

        .color-beam {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.5;
        }

        .bg-tech-icons {
          position: absolute;
          inset: 0;
          overflow: hidden;
          pointer-events: none;
          z-index: 0;
        }

        .stack-item {
          transition: all 0.3s ease;
          cursor: pointer;
          position: relative;
          overflow: hidden;
        }

        .stack-item:hover {
          transform: translateX(5px);
        }

        .btn-line {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 13px 24px;
          border-radius: 9px;
          font-size: 14.5px;
          font-weight: 600;
          cursor: pointer;
          border: 1px solid var(--line);
          color: var(--text);
          background: transparent;
          transition: all 0.3s ease;
          text-decoration: none;
        }

        .btn-line:hover {
          border-color: var(--accent);
          color: var(--accent);
        }

        .about-grid p {
          color: var(--muted);
          margin-bottom: 16px;
          font-size: 15.5px;
          line-height: 1.8;
          transition: all 0.3s ease;
        }

        .sec-head h2 {
          transition: all 0.3s ease;
        }

        @media (max-width: 880px) {
          .color-beam {
            filter: blur(40px);
            width: 150px !important;
            height: 150px !important;
          }
          .bg-tech-icons {
            opacity: 0.3;
          }
        }
      `}</style>
    </section>
  )
}