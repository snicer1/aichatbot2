import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import { IoLanguage } from 'react-icons/io5';
import { IoMdArrowDropdown } from 'react-icons/io';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [language, setLanguage] = useState('en');
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  const location = useLocation();
  const langDropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (langDropdownRef.current && !langDropdownRef.current.contains(event.target)) {
        setIsLangDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const navItems = [
    { path: '/', label: { en: 'Home', pl: 'Strona główna' } },
    { path: '/services', label: { en: 'Solutions', pl: 'Rozwiązania' } },
    { path: '/how-it-works', label: { en: 'Process', pl: 'Proces' } },
    { path: '/case-studies', label: { en: 'Team', pl: 'Zespół' } },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const languages = [
    { code: 'en', label: 'English' },
    { code: 'pl', label: 'Polski' }
  ];

  const menuVariants = {
    closed: {
      opacity: 0,
      x: '100%',
      transition: {
        duration: 0.3,
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        staggerChildren: 0.05,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    closed: { opacity: 0, x: 50 },
    open: { opacity: 1, x: 0 }
  };

  // Check if current path matches the nav item path
  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        background: isScrolled
          ? 'var(--nav-background-scrolled)'
          : 'transparent',
        backdropFilter: isScrolled ? 'blur(8px)' : 'none',
        boxShadow: isScrolled ? '0 2px 10px rgba(0, 0, 0, 0.1)' : 'none',
        transition: 'var(--transition-normal)',
        fontFamily: 'var(--font-secondary)',
        padding: '0 2rem',
      }}
    >
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '70px',
        maxWidth: '1200px',
        margin: '0 auto',
      }}>
        <Link to="/" style={{
          fontSize: 'var(--font-size-xl)',
          fontWeight: '800',
          color: 'white',
          display: 'flex',
          alignItems: 'center',
          textDecoration: 'none',
          zIndex: 1001,
          letterSpacing: '0.5px',
        }}>
          AIstream
        </Link>

        {/* Desktop Navigation */}
        <div className="desktop-nav" style={{
          gap: 'var(--spacing-xl)',
          alignItems: 'center',
        }}>
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              style={{
                color: isActive(item.path)
                  ? (isScrolled ? 'white' : 'var(--primary-color)')
                  : (isScrolled ? 'rgba(255, 255, 255, 0.8)' : 'var(--text-primary)'),
                textDecoration: 'none',
                fontWeight: isActive(item.path) ? '700' : '600',
                fontSize: 'var(--font-size-base)',
                position: 'relative',
                padding: 'var(--spacing-sm) var(--spacing-md)',
                transition: 'var(--transition-normal)',
                ':hover': {
                  color: isScrolled ? 'white' : 'var(--primary-color)',
                },
                ':after': isActive(item.path) ? {
                  content: '""',
                  position: 'absolute',
                  bottom: '-2px',
                  left: 'var(--spacing-md)',
                  right: 'var(--spacing-md)',
                  height: '3px',
                  background: isScrolled ? 'white' : 'var(--primary-color)',
                  borderRadius: 'var(--border-radius-full)',
                } : {},
              }}
            >
              {item.label[language]}
            </Link>
          ))}
          
          {/* Language Dropdown */}
          <div ref={langDropdownRef} style={{ position: 'relative' }}>
            <button
              onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 'var(--spacing-xs)',
                background: isScrolled ? 'rgba(255, 255, 255, 0.2)' : 'rgba(16, 185, 129, 0.2)',
                border: 'none',
                color: isScrolled ? 'white' : 'var(--primary-color)',
                padding: 'var(--spacing-xs) var(--spacing-sm)',
                borderRadius: 'var(--border-radius-md)',
                fontSize: 'var(--font-size-sm)',
                fontWeight: '500',
                transition: 'var(--transition-fast)',
                cursor: 'pointer',
                ':hover': {
                  background: isScrolled ? 'rgba(255, 255, 255, 0.3)' : 'rgba(16, 185, 129, 0.3)',
                }
              }}
            >
              <IoLanguage style={{ fontSize: 'var(--font-size-lg)' }} />
              {language.toUpperCase()}
              <IoMdArrowDropdown />
            </button>

            <AnimatePresence>
              {isLangDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  style={{
                    position: 'absolute',
                    top: '100%',
                    right: 0,
                    marginTop: 'var(--spacing-xs)',
                    background: 'white',
                    borderRadius: 'var(--border-radius-md)',
                    boxShadow: 'var(--shadow-md)',
                    overflow: 'hidden',
                    zIndex: 1000,
                  }}
                >
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code);
                        setIsLangDropdownOpen(false);
                      }}
                      style={{
                        display: 'block',
                        width: '100%',
                        padding: 'var(--spacing-sm) var(--spacing-lg)',
                        background: language === lang.code ? 'var(--medium-green)' : 'transparent',
                        color: 'var(--text-primary)',
                        border: 'none',
                        borderBottom: '1px solid var(--medium-green)',
                        fontSize: 'var(--font-size-sm)',
                        textAlign: 'left',
                        cursor: 'pointer',
                        transition: 'var(--transition-fast)',
                        ':hover': {
                          background: 'var(--medium-purple)',
                        }
                      }}
                    >
                      {lang.label}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          
          {/* Get Started Button */}
          <Link
            to="/contact"
            style={{
              background: 'linear-gradient(135deg, var(--gradient-start), var(--gradient-end))',
              color: 'white',
              padding: 'var(--spacing-sm) var(--spacing-xl)',
              borderRadius: 'var(--border-radius-md)',
              fontWeight: '600',
              textDecoration: 'none',
              transition: 'var(--transition-normal)',
              boxShadow: '0 4px 10px rgba(16, 185, 129, 0.2)',
              ':hover': {
                transform: 'translateY(-2px)',
                boxShadow: '0 6px 15px rgba(16, 185, 129, 0.25)',
              }
            }}
          >
            {language === 'en' ? 'Get Started' : 'Rozpocznij'}
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="mobile-menu-button"
          style={{
            position: 'absolute',
            top: '15px',
            right: '20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: isScrolled ? 'var(--primary-color)' : 'white',
            border: 'none',
            color: isScrolled ? 'white' : 'var(--primary-color)',
            fontSize: '24px',
            cursor: 'pointer',
            padding: '8px',
            borderRadius: 'var(--border-radius-md)',
            zIndex: 1001,
            width: '40px',
            height: '40px',
            boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
            transition: 'var(--transition-normal)',
          }}
        >
          {isOpen ? <RiCloseLine /> : <RiMenu3Line />}
        </button>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                style={{
                  position: 'fixed',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'rgba(0, 0, 0, 0.5)',
                  backdropFilter: 'blur(5px)',
                  zIndex: 999,
                }}
                onClick={() => setIsOpen(false)}
              />
              <motion.div
                variants={menuVariants}
                initial="closed"
                animate="open"
                exit="closed"
                style={{
                  position: 'fixed',
                  top: 0,
                  right: 0,
                  bottom: 0,
                  width: '80%',
                  maxWidth: '350px',
                  background: 'linear-gradient(135deg, var(--gradient-start), var(--gradient-end))',
                  backdropFilter: 'blur(10px)',
                  padding: 'calc(var(--spacing-2xl) + 60px) var(--spacing-lg) var(--spacing-2xl)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 'var(--spacing-md)',
                  zIndex: 1000,
                  boxShadow: 'var(--shadow-lg)',
                  borderLeft: '1px solid rgba(255, 255, 255, 0.2)',
                }}
              >
                {navItems.map((item) => (
                  <motion.div key={item.path} variants={itemVariants}>
                    <Link
                      to={item.path}
                      style={{
                        color: 'white',
                        textDecoration: 'none',
                        fontWeight: isActive(item.path) ? '700' : '600',
                        fontSize: 'var(--font-size-lg)',
                        padding: 'var(--spacing-sm) 0',
                        display: 'block',
                        transition: 'var(--transition-fast)',
                        borderLeft: isActive(item.path) ? '3px solid white' : '3px solid transparent',
                        paddingLeft: 'var(--spacing-md)',
                      }}
                    >
                      {item.label[language]}
                    </Link>
                  </motion.div>
                ))}
                
                {/* Mobile Get Started Button */}
                <motion.div variants={itemVariants} style={{ marginTop: 'var(--spacing-xl)' }}>
                  <Link
                    to="/contact"
                    style={{
                      display: 'inline-block',
                      background: 'linear-gradient(135deg, var(--primary-color), var(--secondary-color))',
                      color: 'white',
                      padding: 'var(--spacing-sm) var(--spacing-xl)',
                      borderRadius: 'var(--border-radius-md)',
                      fontWeight: '600',
                      textDecoration: 'none',
                      transition: 'var(--transition-normal)',
                      boxShadow: '0 4px 10px rgba(93, 93, 255, 0.2)',
                    }}
                  >
                    {language === 'en' ? 'Get Started' : 'Rozpocznij'}
                  </Link>
                </motion.div>
                
                {/* Mobile Language Selector */}
                <motion.div variants={itemVariants} style={{ marginTop: 'var(--spacing-xl)' }}>
                  <div style={{
                    display: 'flex',
                    gap: 'var(--spacing-sm)',
                  }}>
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => setLanguage(lang.code)}
                        style={{
                          flex: 1,
                          padding: 'var(--spacing-sm)',
                          background: language === lang.code
                            ? 'linear-gradient(135deg, var(--gradient-start), var(--gradient-end))'
                            : 'white',
                          color: language === lang.code ? 'white' : 'var(--text-secondary)',
                          border: language === lang.code
                            ? 'none'
                            : '1px solid var(--medium-green)',
                          borderRadius: 'var(--border-radius-md)',
                          fontSize: 'var(--font-size-sm)',
                          fontWeight: '500',
                          cursor: 'pointer',
                          transition: 'var(--transition-fast)',
                        }}
                      >
                        {lang.label}
                      </button>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;