import { motion } from 'framer-motion'
import img from '../assets/shahzaib.png'
import { 
  SiMongodb, 
  SiExpress, 
  SiReact, 
  SiNodedotjs, 
  SiWordpress, 
  SiShopify,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiTailwindcss,
  SiGit,
  SiGithub
} from 'react-icons/si'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
      ease: "easeOut"
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

// Floating icons animation variants
const floatingIconVariants = {
  animate: (i) => ({
    y: [0, -20 - i * 5, 0],
    x: [0, 10 + i * 3, -10 - i * 3, 0],
    rotate: [0, 10 + i * 2, -10 - i * 2, 0],
    scale: [1, 1.1, 0.9, 1],
    transition: {
      duration: 4 + i * 0.5,
      repeat: Infinity,
      ease: "easeInOut",
      delay: i * 0.2,
    }
  }),
  hover: {
    scale: 1.8,
    rotate: 360,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
}

// Tag floating variants
const tagVariants = {
  animate: (i) => ({
    y: [0, -8, 0],
    scale: [1, 1.05, 1],
    transition: {
      duration: 3 + i * 0.5,
      repeat: Infinity,
      ease: "easeInOut",
      delay: i * 0.3,
    }
  })
}

export default function Hero() {
  // Tech icons with positions
  const techIcons = [
    { icon: SiMongodb, color: '#4fa94f', size: 40, x: '5%', y: '10%' },
    { icon: SiExpress, color: '#b8bec7', size: 40, x: '15%', y: '30%' },
    { icon: SiReact, color: '#61dafb', size: 40, x: '10%', y: '5%' },
    { icon: SiNodedotjs, color: '#339933', size: 40, x: '20%', y: '40%' },
    { icon: SiWordpress, color: '#5c9dff', size: 40, x: '8%', y: '20%' },
    { icon: SiShopify, color: '#95d66b', size: 40, x: '15%', y: '60%' },
    { icon: SiJavascript, color: '#f7df1e', size: 35, x: '25%', y: '15%' },
    { icon: SiHtml5, color: '#e34f26', size: 35, x: '40%', y: '5%' },
    { icon: SiCss, color: '#1572b6', size: 35, x: '30%', y: '50%' },
    { icon: SiTailwindcss, color: '#06b6d4', size: 35, x: '50%', y: '20%' },
    { icon: SiGit, color: '#f05032', size: 35, x: '45%', y: '45%' },
    { icon: SiGithub, color: '#ffffff', size: 35, x: '55%', y: '35%' },
  ]

  return (
    <section className="hero container position-relative overflow-hidden">
      {/* Background Tech Icons */}
      <div className="tech-icons-background">
        {techIcons.map((tech, index) => (
          <motion.div
            key={index}
            className="tech-icon-float"
            style={{
              position: 'absolute',
              left: tech.x,
              top: tech.y,
              opacity: 0.15,
              pointerEvents: 'all',
              cursor: 'pointer',
            }}
            custom={index}
            variants={floatingIconVariants}
            animate="animate"
            whileHover="hover"
          >
            <tech.icon size={tech.size} color={tech.color} />
          </motion.div>
        ))}
      </div>

      <div className="row align-items-center g-5 position-relative" style={{ zIndex: 2 }}>
        <motion.div
          className="col-lg-7 order-2 order-lg-1"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.span
            className="eyebrow"
            variants={item}
            whileHover={{
              scale: 1.05,
              backgroundColor: 'rgba(79, 209, 197, 0.2)',
              transition: { duration: 0.2 }
            }}
          >
            <motion.span
              className="pulse-dot"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [1, 0.3, 1]
              }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              ●
            </motion.span>
            Available for freelance &amp; contract work
          </motion.span>

          <motion.h1
            variants={item}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Building fast, reliable web products with{' '}
            <motion.span
              className="accent"
              whileHover={{
                scale: 1.1,
                display: 'inline-block',
                background: 'linear-gradient(45deg, #4fd1c5, #f2a65a, #4fa94f)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
              }}
              transition={{ duration: 0.3 }}
            >
              MERN
            </motion.span>
            , WordPress &amp; Shopify.
          </motion.h1>

          <motion.p
            className="lead-custom"
            variants={item}
            whileHover={{
              x: 10,
              color: '#eaf0fa',
              transition: { duration: 0.3 }
            }}
          >
            I'm Shahzaib — a full-stack developer who ships production-ready web apps and
            e-commerce stores, from custom React dashboards to WordPress sites and Shopify
            storefronts.
          </motion.p>

          <motion.div
            className="code-line"
            variants={item}
            whileHover={{
              scale: 1.02,
              boxShadow: '0 0 30px rgba(79, 209, 197, 0.2)',
              borderColor: '#4fd1c5',
              transition: { duration: 0.3 }
            }}
          >
            <motion.span className="k" whileHover={{ color: '#c792ea', scale: 1.05 }}>
              const
            </motion.span>
            developer = {'{'}
            <br />
            &nbsp;&nbsp;name: <motion.span className="s" whileHover={{ color: '#f2a65a', scale: 1.05 }}>
              'Shahzaib'
            </motion.span>,<br />
            &nbsp;&nbsp;stack: [
            <motion.span className="s" whileHover={{ color: '#f2a65a', scale: 1.05 }}>
              'MongoDB'
            </motion.span>,{' '}
            <motion.span className="s" whileHover={{ color: '#f2a65a', scale: 1.05 }}>
              'Express'
            </motion.span>,{' '}
            <motion.span className="s" whileHover={{ color: '#f2a65a', scale: 1.05 }}>
              'React'
            </motion.span>,{' '}
            <motion.span className="s" whileHover={{ color: '#f2a65a', scale: 1.05 }}>
              'Node'
            </motion.span>,{' '}
            <motion.span className="s" whileHover={{ color: '#f2a65a', scale: 1.05 }}>
              'WordPress'
            </motion.span>,{' '}
            <motion.span className="s" whileHover={{ color: '#f2a65a', scale: 1.05 }}>
              'Shopify'
            </motion.span>],
            <br />
            &nbsp;&nbsp;status: <motion.span className="s" whileHover={{ color: '#f2a65a', scale: 1.05 }}>
              'open_to_work'
            </motion.span>{' '}
            <motion.span className="p" whileHover={{ color: '#4fd1c5' }}>
              // let's build
            </motion.span>
            <br />
            {'}'};
          </motion.div>

          <motion.div className="d-flex gap-3 flex-wrap" variants={item}>
            <motion.a
              href="#projects"
              className="btn-accent"
              whileHover={{
                y: -5,
                scale: 1.08,
                boxShadow: '0 10px 30px rgba(79, 209, 197, 0.4)',
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              View Projects
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </motion.a>
            <motion.a
              href="#contact"
              className="btn-line"
              whileHover={{
                y: -5,
                scale: 1.08,
                borderColor: '#4fd1c5',
                color: '#4fd1c5',
                boxShadow: '0 10px 30px rgba(79, 209, 197, 0.1)',
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              Get in Touch
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          className="col-lg-5 order-1 order-lg-2 hero-photo"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: 1,
            scale: 1,
            transition: {
              duration: 0.8,
              ease: "easeOut",
              type: "spring",
              stiffness: 200,
              damping: 20
            }
          }}
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {/* Border Loading Animation - Corner to Corner */}
          <div className="photo-frame-wrapper">
            <div className="photo-frame-snake">
              <div className="photo-frame-inner">
                <img 
                  src={img} 
                  alt="Shahzaib — MERN, WordPress & Shopify Developer" 
                />
              </div>
            </div>
          </div>

          {/* Floating Tags */}
          <motion.div
            className="tag-float tag-1"
            custom={0}
            variants={tagVariants}
            animate="animate"
            whileHover={{
              scale: 1.2,
              borderColor: '#4fa94f',
              boxShadow: '0 0 30px rgba(79, 169, 79, 0.3)',
              transition: { duration: 0.2 }
            }}
          >
            <motion.span
              style={{ color: '#4fa94f' }}
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              ●
            </motion.span>
            MERN Stack
          </motion.div>

          <motion.div
            className="tag-float tag-2"
            custom={1}
            variants={tagVariants}
            animate="animate"
            whileHover={{
              scale: 1.2,
              borderColor: '#5c9dff',
              boxShadow: '0 0 30px rgba(92, 157, 255, 0.3)',
              transition: { duration: 0.2 }
            }}
          >
            <motion.span
              style={{ color: '#5c9dff' }}
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
            >
              ●
            </motion.span>
            WordPress
          </motion.div>

          <motion.div
            className="tag-float tag-3"
            custom={2}
            variants={tagVariants}
            animate="animate"
            whileHover={{
              scale: 1.2,
              borderColor: '#95d66b',
              boxShadow: '0 0 30px rgba(149, 214, 107, 0.3)',
              transition: { duration: 0.2 }
            }}
          >
            <motion.span
              style={{ color: '#95d66b' }}
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1 }}
            >
              ●
            </motion.span>
            Shopify
          </motion.div>
        </motion.div>
      </div>

      <style>{`
        .photo-frame-wrapper {
          position: relative;
          width: 100%;
          max-width: 400px;
          margin: 0 auto;
          aspect-ratio: 1/1.1;
        }

        /* Loading Border Animation - Corner to Corner */
        .photo-frame-snake {
          position: relative;
          width: 100%;
          height: 100%;
          border-radius: 20px;
          padding: 4px;
          background: #141b2e;
        }

        /* Main border with loading animation */
        .photo-frame-snake::before {
          content: '';
          position: absolute;
          inset: -4px;
          border-radius: 24px;
          padding: 4px;
          background: conic-gradient(
            from 0deg at 50% 50%,
            transparent 0%,
            transparent 25%,
            #4fd1c5 25%,
            #f2a65a 35%,
            #4fa94f 45%,
            #5c9dff 55%,
            #95d66b 65%,
            #4fd1c5 75%,
            transparent 85%,
            transparent 100%
          );
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          animation: loadingBorder 2.5s ease-in-out infinite;
          z-index: 0;
        }

        /* Second layer for glow effect */
        .photo-frame-snake::after {
          content: '';
          position: absolute;
          inset: -4px;
          border-radius: 24px;
          padding: 4px;
          background: conic-gradient(
            from 0deg at 50% 50%,
            transparent 0%,
            transparent 20%,
            rgba(79, 209, 197, 0.5) 30%,
            rgba(242, 166, 90, 0.5) 40%,
            rgba(79, 169, 79, 0.5) 50%,
            rgba(92, 157, 255, 0.5) 60%,
            rgba(149, 214, 107, 0.5) 70%,
            transparent 80%,
            transparent 100%
          );
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          animation: loadingBorder 2.5s ease-in-out infinite 0.3s;
          z-index: 0;
          opacity: 0.6;
          filter: blur(4px);
        }

        @keyframes loadingBorder {
          0% {
            transform: rotate(0deg);
          }
          25% {
            transform: rotate(90deg);
          }
          50% {
            transform: rotate(180deg);
          }
          75% {
            transform: rotate(270deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        /* Pause animation on hover */
        .photo-frame-wrapper:hover .photo-frame-snake::before {
          animation-duration: 1.5s;
        }
        
        .photo-frame-wrapper:hover .photo-frame-snake::after {
          animation-duration: 1.5s;
        }

        .photo-frame-inner {
          position: relative;
          z-index: 1;
          border-radius: 16px;
          overflow: hidden;
          width: 100%;
          height: 100%;
          background: #141b2e;
        }

        .photo-frame-inner img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        /* Floating Tags */
        .tag-float {
          position: absolute;
          background: #141b2e;
          border: 1px solid #26304a;
          border-radius: 9px;
          padding: 9px 13px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 12px;
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.35);
          z-index: 10;
          display: flex;
          align-items: center;
          gap: 6px;
          color: #eaf0fa;
          cursor: pointer;
        }

        .tag-1 { top: 14px; left: -18px; }
        .tag-2 { bottom: 70px; right: -24px; }
        .tag-3 { bottom: 14px; left: 10px; }

        @media (max-width: 880px) {
          .photo-frame-wrapper {
            max-width: 300px;
          }
          .tag-1 { top: 10px; left: -10px; }
          .tag-2 { bottom: 50px; right: -10px; }
          .tag-3 { bottom: 10px; left: 5px; }
          .tech-icons-background {
            opacity: 0.5;
          }
        }
      `}</style>
    </section>
  )
}