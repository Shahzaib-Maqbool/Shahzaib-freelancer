import { useState } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { 
  FiMail, 
  FiPhone, 
  FiSend, 
  FiUser, 
  FiMail as FiEmail, 
  FiFileText
} from 'react-icons/fi'
import { 
  FaWhatsapp, 
  FaGithub, 
  FaLinkedin, 
  FaTwitter,
  FaInstagram 
} from 'react-icons/fa'
import { BsChatDots } from 'react-icons/bs'

export default function Contact() {
  const [status, setStatus] = useState({ text: '', kind: '' })
  const [sending, setSending] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSending(true)
    setStatus({ text: 'Sending...', kind: '' })

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_2ir2nli'
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_y3195z9'
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'uTAIjUvTftnE1Gkjz'

    const form = e.target
    const formData = new FormData(form)

    const templateParams = {
      from_name: formData.get('from_name') || 'No name provided',
      name: formData.get('from_name') || 'No name provided',
      reply_to: formData.get('reply_to') || 'No email provided',
      email: formData.get('reply_to') || 'No email provided',
      user_email: formData.get('reply_to') || 'No email provided',
      subject: formData.get('subject') || 'No subject provided',
      message: formData.get('message') || 'No message provided',
      time: new Date().toLocaleString(),
    }

    emailjs
      .send(serviceId, templateId, templateParams, {
        publicKey: publicKey,
      })
      .then(
        () => {
          setStatus({
            text: "✅ Message sent successfully! I'll get back to you soon.",
            kind: 'ok'
          })
          form.reset()
        },
        (error) => {
          console.error('❌ FAILED...', error)
          setStatus({
            text: '❌ Something went wrong. Please email webtechwebapps@gmail.com directly.',
            kind: 'err',
          })
        }
      )
      .finally(() => setSending(false))
  }

  const socialIcons = [
    { icon: FaGithub, href: 'https://github.com', color: '#ffffff' },
    { icon: FaLinkedin, href: 'https://linkedin.com', color: '#0A66C2' },
    { icon: FaTwitter, href: 'https://twitter.com', color: '#1DA1F2' },
    { icon: FaInstagram, href: 'https://instagram.com', color: '#E4405F' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        type: "spring",
        stiffness: 200,
        damping: 20
      }
    }
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

  return (
    <section className="section-custom container position-relative overflow-hidden" id="contact">
      <div className="contact-beams">
        {[1, 2, 3].map((_, index) => (
          <motion.div
            key={index}
            className="contact-beam"
            custom={index}
            variants={beamVariants}
            animate="animate"
            style={{
              position: 'absolute',
              width: '200px',
              height: '200px',
              borderRadius: '50%',
              filter: 'blur(60px)',
              background: ['rgba(79, 209, 197, 0.1)', 'rgba(242, 166, 90, 0.1)', 'rgba(92, 157, 255, 0.1)'][index],
              pointerEvents: 'none',
              zIndex: 0,
              left: `${20 + index * 30}%`,
              top: `${30 + index * 20}%`,
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
          // 04 — contact
        </motion.span>
        <motion.h2
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          Let's start a project.
        </motion.h2>
        <motion.p
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          Send a message with a few details about your project — I usually reply within a day.
        </motion.p>
      </motion.div>

      <div className="row g-5 contact-grid position-relative" style={{ zIndex: 1 }}>
        <motion.div
          className="col-lg-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={itemVariants} className="contact-info-card" style={{
            background: 'var(--surface)',
            border: '1px solid var(--line)',
            borderRadius: '14px',
            padding: '30px',
            position: 'relative',
            overflow: 'hidden',
          }}>
            <motion.div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'radial-gradient(circle at 50% 50%, rgba(79, 209, 197, 0.05), transparent 70%)',
                opacity: 0,
              }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            />

            <motion.h3 
              style={{ fontSize: '19px', marginBottom: '20px', position: 'relative', zIndex: 1 }}
              whileHover={{ color: '#4fd1c5' }}
            >
              Contact details
            </motion.h3>

            <motion.div 
              className="info-row" 
              style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '18px', position: 'relative', zIndex: 1 }}
              whileHover={{ x: 5 }}
            >
              <motion.div 
                className="ic" 
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '8px',
                  background: 'var(--surface-2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  color: '#4fd1c5',
                }}
                whileHover={{ 
                  rotate: 360,
                  background: 'rgba(79, 209, 197, 0.2)',
                  transition: { duration: 0.5 }
                }}
              >
                <FiMail size={18} />
              </motion.div>
              <div>
                <span style={{ fontSize: '12px', color: 'var(--muted)', display: 'block', marginBottom: '2px' }}>Email</span>
                <b style={{ fontSize: '14.5px', fontWeight: '500' }}>webtechwebapps@gmail.com</b>
              </div>
            </motion.div>

            <motion.div 
              className="info-row" 
              style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '18px', position: 'relative', zIndex: 1 }}
              whileHover={{ x: 5 }}
            >
              <motion.div 
                className="ic" 
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '8px',
                  background: 'var(--surface-2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  color: '#4fd1c5',
                }}
                whileHover={{ 
                  rotate: 360,
                  background: 'rgba(79, 209, 197, 0.2)',
                  transition: { duration: 0.5 }
                }}
              >
                <FiPhone size={18} />
              </motion.div>
              <div>
                <span style={{ fontSize: '12px', color: 'var(--muted)', display: 'block', marginBottom: '2px' }}>Phone / WhatsApp (Primary)</span>
                <b style={{ fontSize: '14.5px', fontWeight: '500' }}>+92 325 4840244</b>
              </div>
            </motion.div>

            <motion.div 
              className="info-row" 
              style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '18px', position: 'relative', zIndex: 1 }}
              whileHover={{ x: 5 }}
            >
              <motion.div 
                className="ic" 
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '8px',
                  background: 'var(--surface-2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  color: '#4fd1c5',
                }}
                whileHover={{ 
                  rotate: 360,
                  background: 'rgba(79, 209, 197, 0.2)',
                  transition: { duration: 0.5 }
                }}
              >
                <FiPhone size={18} />
              </motion.div>
              <div>
                <span style={{ fontSize: '12px', color: 'var(--muted)', display: 'block', marginBottom: '2px' }}>Phone / WhatsApp (Alternate)</span>
                <b style={{ fontSize: '14.5px', fontWeight: '500' }}>+92 301 6705287</b>
              </div>
            </motion.div>

            <motion.a
              href="https://wa.me/923254840244"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-accent mt-2 d-inline-flex align-items-center gap-2"
              style={{
                background: '#4fd1c5',
                color: '#0a1420',
                padding: '13px 24px',
                borderRadius: '9px',
                fontWeight: '600',
                border: 'none',
                cursor: 'pointer',
                textDecoration: 'none',
                position: 'relative',
                zIndex: 1,
              }}
              whileHover={{ 
                y: -3,
                scale: 1.05,
                boxShadow: '0 10px 30px rgba(79, 209, 197, 0.3)',
              }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <FaWhatsapp size={18} />
              </motion.span>
              Chat on WhatsApp
            </motion.a>

            <motion.div 
              style={{ 
                display: 'flex', 
                gap: '12px', 
                marginTop: '20px',
                position: 'relative',
                zIndex: 1,
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              {socialIcons.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: social.color }}
                  whileHover={{ scale: 1.4, rotate: 360, transition: { duration: 0.5 } }}
                  whileTap={{ scale: 0.8 }}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          className="col-lg-7"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.form 
            variants={itemVariants}
            className="form-custom d-flex flex-column gap-3" 
            onSubmit={handleSubmit}
            style={{ position: 'relative', zIndex: 1 }}
          >
            <div className="row g-3">
              <div className="col-sm-6">
                <motion.label 
                  style={{ fontSize: '12.5px', color: 'var(--muted)', marginBottom: '6px', display: 'block', fontFamily: 'JetBrains Mono, monospace' }}
                  whileHover={{ color: '#4fd1c5' }}
                >
                  Name
                </motion.label>
                <div className="position-relative">
                  <motion.div
                    style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--muted)', zIndex: 2 }}
                    whileHover={{ rotate: 360, transition: { duration: 0.5 } }}
                  >
                    <FiUser size={16} />
                  </motion.div>
                  <motion.input
                    type="text"
                    name="from_name"
                    required
                    placeholder="Your full name"
                    className="form-control ps-5 text-white"
                    style={{
                      width: '100%',
                      background: 'var(--surface)',
                      border: '1px solid var(--line)',
                      borderRadius: '9px',
                      padding: '12px 14px 12px 40px',
                      color: 'var(--text)',
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '14px',
                      transition: 'all 0.3s ease',
                    }}
                    whileFocus={{ borderColor: '#4fd1c5', boxShadow: '0 0 20px rgba(79, 209, 197, 0.1)' }}
                    whileHover={{ borderColor: 'rgba(79, 209, 197, 0.3)' }}
                  />
                </div>
              </div>
              <div className="col-sm-6">
                <motion.label 
                  style={{ fontSize: '12.5px', color: 'var(--muted)', marginBottom: '6px', display: 'block', fontFamily: 'JetBrains Mono, monospace' }}
                  whileHover={{ color: '#4fd1c5' }}
                >
                  Email
                </motion.label>
                <div className="position-relative">
                  <motion.div
                    style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--muted)', zIndex: 2 }}
                    whileHover={{ rotate: 360, transition: { duration: 0.5 } }}
                  >
                    <FiEmail size={16} />
                  </motion.div>
                  <motion.input
                    type="email"
                    name="reply_to"
                    required
                    placeholder="you@email.com"
                    className="form-control ps-5 text-white"
                    style={{
                      width: '100%',
                      background: 'var(--surface)',
                      border: '1px solid var(--line)',
                      borderRadius: '9px',
                      padding: '12px 14px 12px 40px',
                      color: 'var(--text)',
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '14px',
                      transition: 'all 0.3s ease',
                    }}
                    whileFocus={{ borderColor: '#4fd1c5', boxShadow: '0 0 20px rgba(79, 209, 197, 0.1)' }}
                    whileHover={{ borderColor: 'rgba(79, 209, 197, 0.3)' }}
                  />
                </div>
              </div>
            </div>

            <div>
              <motion.label 
                style={{ fontSize: '12.5px', color: 'var(--muted)', marginBottom: '6px', display: 'block', fontFamily: 'JetBrains Mono, monospace' }}
                whileHover={{ color: '#4fd1c5' }}
              >
                Subject
              </motion.label>
              <div className="position-relative">
                <motion.div
                  style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--muted)', zIndex: 2 }}
                  whileHover={{ rotate: 360, transition: { duration: 0.5 } }}
                >
                  <FiFileText size={16} />
                </motion.div>
                <motion.input
                  type="text"
                  name="subject"
                  required
                  placeholder="Project inquiry"
                  className="form-control ps-5"
                  style={{
                    width: '100%',
                    background: 'var(--surface)',
                    border: '1px solid var(--line)',
                    borderRadius: '9px',
                    padding: '12px 14px 12px 40px',
                    color: 'var(--text)',
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '14px',
                    transition: 'all 0.3s ease',
                  }}
                  whileFocus={{ borderColor: '#4fd1c5', boxShadow: '0 0 20px rgba(79, 209, 197, 0.1)' }}
                  whileHover={{ borderColor: 'rgba(79, 209, 197, 0.3)' }}
                />
              </div>
            </div>

            <div>
              <motion.label 
                style={{ fontSize: '12.5px', color: 'var(--muted)', marginBottom: '6px', display: 'block', fontFamily: 'JetBrains Mono, monospace' }}
                whileHover={{ color: '#4fd1c5' }}
              >
                Message
              </motion.label>
              <div className="position-relative">
                <motion.div
                  style={{ position: 'absolute', left: '12px', top: '12px', color: 'var(--muted)', zIndex: 2 }}
                  whileHover={{ rotate: 360, transition: { duration: 0.5 } }}
                >
                  <BsChatDots size={16} />
                </motion.div>
                <motion.textarea
                  name="message"
                  required
                  placeholder="Tell me about your project..."
                  className="form-control ps-5"
                  rows="4"
                  style={{
                    width: '100%',
                    background: 'var(--surface)',
                    border: '1px solid var(--line)',
                    borderRadius: '9px',
                    padding: '12px 14px 12px 40px',
                    color: 'var(--text)',
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '14px',
                    resize: 'vertical',
                    minHeight: '120px',
                    transition: 'all 0.3s ease',
                  }}
                  whileFocus={{ borderColor: '#4fd1c5', boxShadow: '0 0 20px rgba(79, 209, 197, 0.1)' }}
                  whileHover={{ borderColor: 'rgba(79, 209, 197, 0.3)' }}
                />
              </div>
            </div>

            <motion.button
              type="submit"
              className="btn-accent justify-content-center border-0 d-inline-flex align-items-center gap-2"
              disabled={sending}
              style={{
                background: 'linear-gradient(135deg, #4fd1c5, #2d9b8f)',
                color: '#0a1420',
                padding: '13px 24px',
                borderRadius: '9px',
                fontWeight: '600',
                border: 'none',
                cursor: 'pointer',
                fontSize: '14.5px',
                transition: 'all 0.3s ease',
                position: 'relative',
                overflow: 'hidden',
              }}
              whileHover={{ y: -3, scale: 1.02, boxShadow: '0 10px 30px rgba(79, 209, 197, 0.3)' }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <FiSend size={18} />
              </motion.span>
              {sending ? 'Sending...' : 'Send Message'}
            </motion.button>

            {status.text && (
              <motion.p 
                id="form-status" 
                className={status.kind}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                style={{
                  color: status.kind === 'ok' ? '#95d66b' : '#e07070',
                  marginTop: '10px',
                  fontSize: '14px',
                  padding: '10px',
                  borderRadius: '8px',
                  background: status.kind === 'ok' ? 'rgba(149, 214, 107, 0.1)' : 'rgba(224, 112, 112, 0.1)',
                  border: `1px solid ${status.kind === 'ok' ? 'rgba(149, 214, 107, 0.2)' : 'rgba(224, 112, 112, 0.2)'}`,
                }}
              >
                {status.text}
              </motion.p>
            )}
          </motion.form>
        </motion.div>
      </div>

      <style>{`
        .contact-beams {
          position: absolute;
          inset: 0;
          overflow: hidden;
          pointer-events: none;
          z-index: 0;
        }

        .contact-beam {
          position: absolute;
          border-radius: 50%;
          filter: blur(60px);
          opacity: 0.5;
        }

        .contact-info-card {
          background: var(--surface);
          border: 1px solid var(--line);
          border-radius: 14px;
          padding: 30px;
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease;
        }

        .contact-info-card:hover {
          border-color: rgba(79, 209, 197, 0.3);
        }

        .form-control {
          transition: all 0.3s ease;
        }

        .form-control:focus {
          outline: none;
          border-color: #4fd1c5;
          box-shadow: 0 0 20px rgba(79, 209, 197, 0.1);
        }

        .btn-accent {
          transition: all 0.3s ease;
        }

        .btn-accent:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        @media (max-width: 880px) {
          .contact-beam {
            filter: blur(40px);
            width: 120px !important;
            height: 120px !important;
          }
        }
      `}</style>
    </section>
  )
}
