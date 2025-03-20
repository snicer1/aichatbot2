import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  FaLinkedin,
  FaYoutube,
  FaEnvelope,
  FaMapMarkerAlt
} from 'react-icons/fa';

const Footer = () => {
  const [language] = useState('en'); // This should be managed globally in a real app

  return (
    <footer style={{
      background: 'var(--light-green)',
      color: 'var(--text-primary)',
      padding: 'var(--spacing-2xl) 0 var(--spacing-lg)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Gradient overlay */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '5px',
        background: 'linear-gradient(90deg, var(--gradient-start), var(--gradient-end))',
      }} />
      <div className="container" style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 2rem',
      }}>
        <div style={{
          display: 'flex',
          flexDirection: ['column', 'column', 'row'],
          justifyContent: 'space-between',
          alignItems: ['flex-start', 'flex-start', 'center'],
          gap: 'var(--spacing-xl)',
          marginBottom: 'var(--spacing-xl)',
        }}>
          {/* Logo */}
          <div>
            <Link to="/" style={{
              fontSize: 'var(--font-size-xl)',
              fontWeight: '800',
              color: 'var(--text-primary)',
              display: 'flex',
              alignItems: 'center',
              textDecoration: 'none',
            }}>
              AIstream
            </Link>
            
            {/* Social Links */}
            <div style={{
              display: 'flex',
              gap: 'var(--spacing-md)',
              marginTop: 'var(--spacing-md)',
            }}>
              <a
                href="#"
                style={{
                  color: 'var(--primary-color)',
                  fontSize: 'var(--font-size-lg)',
                  textDecoration: 'none',
                  transition: 'var(--transition-fast)',
                }}
              >
                <FaYoutube />
              </a>
              <a
                href="#"
                style={{
                  color: 'var(--primary-color)',
                  fontSize: 'var(--font-size-lg)',
                  textDecoration: 'none',
                  transition: 'var(--transition-fast)',
                }}
              >
                in
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 style={{
              fontSize: 'var(--font-size-lg)',
              marginBottom: 'var(--spacing-md)',
              fontWeight: '700',
            }}>
              {language === 'en' ? 'CONTACT US' : 'KONTAKT'}
            </h3>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 'var(--spacing-sm)',
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: 'var(--spacing-sm)',
              }}>
                <FaEnvelope />
                <a
                  href="mailto:contact@aistream.com"
                  style={{
                    color: 'var(--primary-color)',
                    textDecoration: 'none',
                    transition: 'var(--transition-fast)',
                    ':hover': {
                      color: 'var(--secondary-color)',
                    }
                  }}
                >
                  contact@aistream.com
                </a>
              </div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: 'var(--spacing-sm)',
              }}>
                <FaMapMarkerAlt />
                <span>Warsaw</span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div style={{
          borderTop: '1px solid rgba(0, 0, 0, 0.1)',
          paddingTop: 'var(--spacing-lg)',
          textAlign: 'center',
        }}>
          <p>
            © {new Date().getFullYear()} {language === 'en' ? 'All rights reserved.' : 'Wszelkie prawa zastrzeżone.'} AIstream AI
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;