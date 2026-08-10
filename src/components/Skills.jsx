import { motion } from 'framer-motion'
import { 
  SiReact, 
  SiNodedotjs, 
  SiMongodb, 
  SiExpress,
  SiWordpress,
  SiShopify,
  SiTailwindcss,
  SiJavascript,
  SiHtml5,
  SiGit,
  SiGithub
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
  FaMobile,
  FaDesktop,
  FaPlug,
  FaCogs
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
import { DiAws } from 'react-icons/di'

const skills = [
  {
    num: '01',
    title: 'MERN Development',
    desc: 'Building responsive, component-driven web apps with React on the front end and a Node/Express/MongoDB backend.',
    icon: SiReact,
    icon2: SiNodedotjs,
    icon3: SiMongodb,
    icon4: SiExpress,
    color: '#61dafb',
    bgColor: 'rgba(97, 218, 251, 0.1)',
    delay: 0,
  },
  {
    num: '02',
    title: 'WordPress',
    desc: 'Custom themes and plugin work, page-builder sites, and performance/security cleanup for existing sites.',
    icon: SiWordpress,
    color: '#5c9dff',
    bgColor: 'rgba(92, 157, 255, 0.1)',
    delay: 0.1,
  },
  {
    num: '03',
    title: 'Shopify',
    desc: 'Store setup, Liquid theme customization, product/checkout flows, and app integrations for e-commerce brands.',
    icon: SiShopify,
    color: '#95d66b',
    bgColor: 'rgba(149, 214, 107, 0.1)',
    delay: 0.2,
  },
  {
    num: '04',
    title: 'API Integration',
    desc: 'Connecting apps to payment gateways, CRMs, and third-party services with clean, documented REST endpoints.',
    icon: TbApi,
    icon2: FaPlug,
    color: '#f2a65a',
    bgColor: 'rgba(242, 166, 90, 0.1)',
    delay: 0.3,
  },
  {
    num: '05',
    title: 'Responsive UI',
    desc: 'Pixel-accurate, mobile-first interfaces that stay consistent across devices and browsers.',
    icon: MdDevices,
    icon2: FaMobile,
    icon3: FaDesktop,
    color: '#4fd1c5',
    bgColor: 'rgba(79, 209, 197, 0.1)',
    delay: 0.4,
  },
  {
    num: '06',
    title: 'Deployment & Support',
    desc: 'Hosting setup, domain configuration, and ongoing maintenance after launch.',
    icon: FaRocket,
    icon2: FaCloud,
    icon3: FaShieldAlt,
    icon4: DiAws,
    color: '#c792ea',
    bgColor: 'rgba(199, 146, 234, 0.1)',
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
  hidden: { opacity: 0, y: 50, scale: 0.9, rotateX: 15 },
  show: { 
    opacity: 1, 
    y: 0, 
    scale: 1, 
    rotateX: 0,
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
    y: [0, -10 - i * 3, 0],
    rotate: [0, 10 - i * 2, 0],
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
    x: [0, 200 + i * 50, 0],
    y: [0, -100 - i * 30, 0],
    scale: [1, 1.5, 1],
    opacity: [0.2, 0.5, 0.2],
    transition: {
      duration: 10 + i * 2,
      repeat: Infinity,
      ease: "easeInOut",
      delay: i * 0.5,
    }
  })
}

const numberVariants = {
  animate: {
    scale: [1, 1.2, 1],
    rotate: [0, 10, -10, 0],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    }
  }
}

export default function Skills() {
  return (
    <section className="section-custom container position-relative overflow-hidden" id="skills">
      <div className="skills-beams">
        {skills.map((s, index) => (
          <motion.div
            key={index}
            className="skill-beam"
            custom={index}
            variants={beamVariants}
            animate="animate"
            style={{
              position: 'absolute',
              width: '200px',
              height: '200px',
              borderRadius: '50%',
              filter: 'blur(60px)',
              background: s.bgColor,
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
          // 02 — skills
        </motion.span>
        <motion.h2
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          What I bring to a project.
        </motion.h2>
        <motion.p
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          A practical mix of custom development and platform expertise, so I can pick the
          right tool for each project instead of forcing one stack everywhere.
        </motion.p>
      </motion.div>

      <motion.div
        className="row g-3 position-relative"
        style={{ zIndex: 1 }}
        variants={grid}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
      >
        {skills.map((s) => (
          <motion.div className="col-md-4" key={s.num} variants={card}>
            <motion.div
              className="skill-card position-relative"
              whileHover={{ 
                y: -10,
                scale: 1.03,
                boxShadow: `0 20px 60px ${s.bgColor}`,
                borderColor: s.color,
                transition: { duration: 0.3 }
              }}
              style={{
                background: 'var(--surface)',
                border: '1px solid var(--line)',
                borderRadius: '14px',
                padding: '26px 22px',
                height: '100%',
                position: 'relative',
                overflow: 'hidden',
                cursor: 'pointer',
              }}
            >
              <motion.div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: `radial-gradient(circle at 50% 50%, ${s.bgColor}, transparent 70%)`,
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
                  background: `conic-gradient(from 0deg, transparent, ${s.color}, transparent, ${s.color}, transparent)`,
                  opacity: 0,
                  zIndex: -1,
                }}
                whileHover={{ 
                  opacity: 0.5,
                  rotate: 360,
                  transition: { duration: 3, ease: "linear", repeat: Infinity }
                }}
              />

              <motion.div
                style={{
                  display: 'flex',
                  gap: '8px',
                  marginBottom: '14px',
                  position: 'relative',
                  zIndex: 1,
                  flexWrap: 'wrap',
                }}
              >
                {s.icon && (
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
                    <s.icon size={28} color={s.color} />
                  </motion.div>
                )}
                {s.icon2 && (
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
                    <s.icon2 size={24} color={s.color} />
                  </motion.div>
                )}
                {s.icon3 && (
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
                    <s.icon3 size={24} color={s.color} />
                  </motion.div>
                )}
                {s.icon4 && (
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
                    <s.icon4 size={24} color={s.color} />
                  </motion.div>
                )}
              </motion.div>

              <motion.span 
                className="num"
                variants={numberVariants}
                animate="animate"
                style={{ 
                  fontFamily: 'JetBrains Mono, monospace',
                  color: s.color,
                  fontSize: '12px',
                  marginBottom: '14px',
                  display: 'block',
                  position: 'relative',
                  zIndex: 1,
                  fontWeight: 'bold',
                }}
              >
                {s.num}
              </motion.span>

              <motion.h3 
                style={{ 
                  fontSize: '18px',
                  marginBottom: '9px',
                  position: 'relative',
                  zIndex: 1,
                }}
                whileHover={{ color: s.color }}
              >
                {s.title}
              </motion.h3>

              <motion.p 
                style={{ 
                  color: 'var(--muted)',
                  fontSize: '14px',
                  marginBottom: '0',
                  position: 'relative',
                  zIndex: 1,
                  lineHeight: '1.6',
                }}
                whileHover={{ color: '#eaf0fa' }}
              >
                {s.desc}
              </motion.p>

              <motion.div
                style={{
                  position: 'absolute',
                  bottom: '16px',
                  right: '16px',
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: s.color,
                  boxShadow: `0 0 20px ${s.color}`,
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
                  delay: s.delay,
                }}
              />
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      <style>{`
        .skills-beams {
          position: absolute;
          inset: 0;
          overflow: hidden;
          pointer-events: none;
          z-index: 0;
        }

        .skill-beam {
          position: absolute;
          border-radius: 50%;
          filter: blur(60px);
          opacity: 0.5;
        }

        .skill-card {
          transition: all 0.3s ease;
          cursor: pointer;
          position: relative;
          overflow: hidden;
        }

        .skill-card:hover {
          transform: translateY(-10px);
        }

        .num {
          font-family: 'JetBrains Mono', monospace;
          font-size: 12px;
          margin-bottom: 14px;
          display: block;
          font-weight: bold;
          transition: all 0.3s ease;
        }

        .sec-head h2 {
          transition: all 0.3s ease;
        }

        .sec-head p {
          transition: all 0.3s ease;
        }

        @media (max-width: 880px) {
          .skill-beam {
            filter: blur(40px);
            width: 120px !important;
            height: 120px !important;
          }
        }
      `}</style>
    </section>
  )
}