import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaWhatsapp, FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa'
import { HiMenu, HiX } from 'react-icons/hi'
import { FiChevronDown } from 'react-icons/fi'
import { MdPhone } from 'react-icons/md'
import { IoCode, IoHome, IoPerson, IoConstruct, IoMail } from 'react-icons/io5'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [waOpen, setWaOpen] = useState(false)

  // Navigation items with icons
  const navItems = [
    { name: 'Home', href: '#top', icon: IoHome },
    { name: 'About', href: '#about', icon: IoPerson },
    { name: 'Skills', href: '#skills', icon: IoConstruct },
    { name: 'Projects', href: '#projects', icon: IoCode },
    { name: 'Contact', href: '#contact', icon: IoMail },
  ]

  // Social icons
  const socialIcons = [
    { icon: FaGithub, href: 'https://github.com/yourusername', color: '#ffffff' },
    { icon: FaLinkedin, href: 'https://linkedin.com/in/yourusername', color: '#0A66C2' },
    { icon: FaTwitter, href: 'https://twitter.com/yourusername', color: '#1DA1F2' },
    { icon: FaInstagram, href: 'https://instagram.com/yourusername', color: '#E4405F' },
  ]

  return (
    <header className="site-header">
      <nav className="container d-flex align-items-center justify-content-between py-3 position-relative">
        {/* Logo */}
        <motion.a 
          href="#top" 
          className="logo"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          <motion.span
            animate={{ 
              color: ['#4fd1c5', '#f2a65a', '#4fa94f', '#5c9dff', '#4fd1c5'],
            }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            Shahzaib
          </motion.span>
          <motion.span
            whileHover={{ 
              rotate: 180,
              display: 'inline-block'
            }}
            transition={{ duration: 0.5 }}
          >
            .dev
          </motion.span>
        </motion.a>

        {/* Social Icons - Desktop */}
        <div className="d-none d-lg-flex align-items-center gap-3">
          {socialIcons.map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.3,
                rotate: 360,
                transition: { duration: 0.5 }
              }}
              whileTap={{ scale: 0.8 }}
              style={{ color: social.color }}
            >
              <social.icon size={20} />
            </motion.a>
          ))}
        </div>

        {/* Burger Menu Button */}
        <motion.button
          className="burger btn d-md-none d-flex flex-column gap-1 border-0 bg-transparent p-2"
          aria-label="Menu"
          onClick={() => setMenuOpen((o) => !o)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <motion.div
            animate={{ rotate: menuOpen ? 90 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {menuOpen ? (
              <HiX size={24} color="#eaf0fa" />
            ) : (
              <HiMenu size={24} color="#eaf0fa" />
            )}
          </motion.div>
        </motion.button>

        {/* Navigation Links */}
        <motion.div
          className={`nav-links ${menuOpen ? 'open' : ''} d-md-flex align-items-md-center gap-md-4`}
          style={{ display: menuOpen ? 'flex' : undefined }}
        >
          {navItems.map((item, index) => (
            <motion.a
              key={index}
              className="nav-link-custom position-relative d-flex align-items-center gap-2"
              href={item.href}
              onClick={() => setMenuOpen(false)}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ 
                x: 5,
                color: '#4fd1c5',
                transition: { duration: 0.2 }
              }}
            >
              <motion.span
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <item.icon size={16} />
              </motion.span>
              {item.name}
              <motion.span
                className="nav-indicator"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
                style={{
                  position: 'absolute',
                  bottom: '-4px',
                  left: 0,
                  right: 0,
                  height: '2px',
                  background: '#4fd1c5',
                  transformOrigin: 'left'
                }}
              />
            </motion.a>
          ))}

          {/* Social Icons - Mobile */}
          <div className="d-flex d-lg-none gap-3 mt-3 pt-3 border-top border-line w-100 justify-content-center">
            {socialIcons.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                whileHover={{ 
                  scale: 1.4,
                  rotate: 360,
                  transition: { duration: 0.5 }
                }}
                whileTap={{ scale: 0.8 }}
                style={{ color: social.color }}
              >
                <social.icon size={22} />
              </motion.a>
            ))}
          </div>

          {/* WhatsApp Dropdown */}
          <div className="wa-dropdown position-relative mt-3 mt-md-0">
            <motion.button
              className="wa-btn d-flex align-items-center gap-2 bg-surface-2 border border-line px-4 py-2 rounded-lg text-text-primary font-sans text-sm cursor-pointer hover:border-accent transition-all duration-200"
              onClick={(e) => {
                e.stopPropagation()
                setWaOpen((o) => !o)
              }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 0 20px rgba(37, 211, 102, 0.2)'
              }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.span
                animate={{ 
                  scale: [1, 1.2, 1],
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <FaWhatsapp size={18} color="#25D366" />
              </motion.span>
              WhatsApp
              <motion.span
                animate={{ rotate: waOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <FiChevronDown size={14} />
              </motion.span>
            </motion.button>

            <AnimatePresence>
              {waOpen && (
                <motion.div
                  className="wa-menu position-absolute top-100 end-0 mt-2 bg-surface border border-line rounded-lg min-w-[230px] shadow-2xl overflow-hidden z-50"
                  initial={{ opacity: 0, y: -20, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -20, scale: 0.9 }}
                  transition={{ 
                    duration: 0.3,
                    type: "spring",
                    stiffness: 300,
                    damping: 25
                  }}
                >
                  <motion.a
                    href="https://wa.me/923254840244"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="d-flex align-items-center gap-3 px-4 py-3 text-text-primary border-bottom border-line transition-all duration-200"
                    whileHover={{
                      x: 10,
                      backgroundColor: 'rgba(37, 211, 102, 0.1)',
                      transition: { duration: 0.2 }
                    }}
                  >
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <MdPhone size={18} color="#25D366" />
                    </motion.div>
                    <span>
                      <motion.small 
                        className="d-block text-text-muted text-[11.5px] font-mono"
                        whileHover={{ color: '#25D366' }}
                      >
                        Primary
                      </motion.small>
                      <span className="text-sm">+92 325 4840244</span>
                    </span>
                  </motion.a>
                  
                  <motion.a
                    href="https://wa.me/923167052087"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="d-flex align-items-center gap-3 px-4 py-3 text-text-primary transition-all duration-200"
                    whileHover={{
                      x: 10,
                      backgroundColor: 'rgba(37, 211, 102, 0.1)',
                      transition: { duration: 0.2 }
                    }}
                  >
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <MdPhone size={18} color="#25D366" />
                    </motion.div>
                    <span>
                      <motion.small 
                        className="d-block text-text-muted text-[11.5px] font-mono"
                        whileHover={{ color: '#25D366' }}
                      >
                        Alternate
                      </motion.small>
                      <span className="text-sm">+92 316 7052087</span>
                    </span>
                  </motion.a>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </nav>
    </header>
  )
}