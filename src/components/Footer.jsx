export default function Footer() {
  return (
    <footer className="site-footer container d-flex align-items-center justify-content-between flex-wrap">
      <span>© {new Date().getFullYear()} Shahzaib. All rights reserved.</span>
      <div className="f-links">
        <a href="mailto:webtechwebapps@gmail.com">Email</a>
        <a href="https://wa.me/923254840244" target="_blank" rel="noopener noreferrer">
          WhatsApp
        </a>
      </div>
    </footer>
  )
}
