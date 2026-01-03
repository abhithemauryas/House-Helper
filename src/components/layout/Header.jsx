import { useState } from "react";
import { Menu, X, MapPin, Search, Bell } from "lucide-react";


export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* NAVBAR */}
      <header className="navbar">
        {/* LEFT */}
        <div className="nav-left">
          {/* Hamburger – MOBILE ONLY */}
          <button className="menu-btn" onClick={() => setOpen(true)}>
            <Menu size={26} />
          </button>

          {/* LOGO */}
          <div className="logo">
            {/* <img src="/logo512.png" alt="HomeCare" /> */}
            <span>HomeCare</span>
          </div>
        </div>

        {/* DESKTOP NAV LINKS */}
        <nav className="nav-links">
          <a href="#">Home</a>
          <a href="#">Services</a>
          <a href="#">Book</a>
          <a href="#">Contact</a>
        </nav>

        {/* RIGHT */}
        <div className="nav-right">
          {/* LOCATION */}
          <div className="location">
            <MapPin size={18} />
            <span className="location-name">Delhi</span>
          </div>

          <div className="icon blue">
            <Search size={20} />
          </div>

          <div className="icon orange">
            <Bell size={20} />
          </div>
        </div>
      </header>

      {/* MOBILE SIDEBAR ONLY */}
      {open && (
        <>
          <aside className="drawer">
            <button className="drawer-close" onClick={() => setOpen(false)}>
              <X size={25} />
            </button>

            <div className="drawer-logo">
              {/* <img src="/logo.png" alt="logo" /> */}
              <span>HomeCare</span>
            </div>

            <nav className="drawer-links">
              <a href="#">🏠 Home</a>
              <a href="#">🧹 Services</a>
              <a href="#">📅 Book Service</a>
              <a href="#">📞 Contact</a>
              <a href="#">👤 Profile</a>
            </nav>
          </aside>

          <div className="overlay" onClick={() => setOpen(false)} />
        </>
      )}
    </>
  );
}
