import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaArrowRight,
  FaCalendarAlt,
  FaComments
} from 'react-icons/fa';

const Contact = () => {
  const [language] = useState('en');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState(null);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  // Service options
  const serviceOptions = [
    { value: '', label: { en: 'Select a service', pl: 'Wybierz usługę' } },
    { value: 'chatbots', label: { en: 'AI Chatbots', pl: 'Chatboty AI' } },
    { value: 'automation', label: { en: 'Process Automation', pl: 'Automatyzacja Procesów' } },
    { value: 'data', label: { en: 'Data Processing', pl: 'Przetwarzanie Danych' } },
    { value: 'integration', label: { en: 'System Integration', pl: 'Integracja Systemów' } },
    { value: 'other', label: { en: 'Other', pl: 'Inne' } }
  ];

  // Contact info
  const contactInfo = [
    {
      icon: FaEnvelope,
      title: { en: 'Email Us', pl: 'Email' },
      content: 'contact@aistream.com',
      description: {
        en: 'Send us an email anytime and we\'ll respond within 24 hours',
        pl: 'Wyślij nam email, a odpowiemy w ciągu 24 godzin'
      }
    },
    {
      icon: FaPhone,
      title: { en: 'Call Us', pl: 'Telefon' },
      content: '+48 123 456 789',
      description: {
        en: 'Available Monday-Friday from 9am to 5pm CET',
        pl: 'Dostępni od poniedziałku do piątku od 9:00 do 17:00 CET'
      }
    },
    {
      icon: FaMapMarkerAlt,
      title: { en: 'Visit Us', pl: 'Adres' },
      content: 'ul. Przykładowa 123, 00-001 Warszawa',
      description: {
        en: 'Schedule an appointment to meet in person',
        pl: 'Umów się na spotkanie osobiste'
      }
    }
  ];

  // Form handling
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('sending');
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        message: ''
      });
    }, 1500);
  };

  // Intersection observer hooks
  const [heroRef, heroInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [infoRef, infoInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [formRef, formInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [ctaRef, ctaInView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <div>
      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        initial="hidden"
        animate={heroInView ? "visible" : "hidden"}
        variants={containerVariants}
        style={{
          minHeight: '60vh',
          display: 'flex',
          alignItems: 'center',
          background: 'linear-gradient(135deg, var(--light-green), var(--medium-green))',
          color: 'var(--text-primary)',
          padding: 'var(--spacing-2xl) 0',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Gradient overlay */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(45deg, rgba(16, 185, 129, 0.1) 0%, rgba(5, 150, 105, 0.2) 100%)',
          zIndex: 0,
        }} />
        
        {/* Animated shapes for visual interest */}
        <div style={{
          position: 'absolute',
          top: '10%',
          right: '5%',
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(16, 185, 129, 0.2) 0%, rgba(16, 185, 129, 0) 70%)',
          zIndex: 0,
        }} />
        
        <div style={{
          position: 'absolute',
          bottom: '10%',
          left: '5%',
          width: '200px',
          height: '200px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(5, 150, 105, 0.15) 0%, rgba(5, 150, 105, 0) 70%)',
          zIndex: 0,
        }} />
        
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <motion.h1
            variants={itemVariants}
            style={{
              fontSize: 'clamp(2.5rem, 6vw, 4rem)',
              marginBottom: 'var(--spacing-lg)',
              maxWidth: '900px',
              lineHeight: 1.1,
              fontWeight: '800',
              color: 'var(--text-primary)',
            }}
          >
            {language === 'en'
              ? 'Get In Touch With Our Team'
              : 'Skontaktuj Się Z Naszym Zespołem'}
          </motion.h1>
          <motion.p
            variants={itemVariants}
            style={{
              fontSize: 'clamp(1.125rem, 2vw, var(--font-size-lg))',
              marginBottom: 'var(--spacing-xl)',
              maxWidth: '700px',
              lineHeight: 1.6,
            }}
          >
            {language === 'en'
              ? 'Have questions about our AI solutions? Ready to start your automation journey? Our team is here to help you transform your business with cutting-edge technology.'
              : 'Masz pytania dotyczące naszych rozwiązań AI? Gotowy, aby rozpocząć swoją podróż z automatyzacją? Nasz zespół jest tutaj, aby pomóc Ci przekształcić Twoją firmę dzięki najnowocześniejszej technologii.'}
          </motion.p>
        </div>
      </motion.section>

      {/* Contact Info Cards */}
      <motion.section
        ref={infoRef}
        initial="hidden"
        animate={infoInView ? "visible" : "hidden"}
        variants={containerVariants}
        style={{
          padding: 'var(--spacing-2xl) 0',
          background: 'var(--light-green)',
        }}
      >
        <div className="container">
          <motion.h2
            variants={itemVariants}
            className="text-center"
            style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              marginBottom: 'var(--spacing-xl)',
              color: 'var(--text-primary)',
              fontWeight: '800',
            }}
          >
            {language === 'en' ? 'Connect With Us' : 'Połącz Się Z Nami'}
          </motion.h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 'var(--spacing-xl)',
          }}>
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                style={{
                  padding: 'var(--spacing-xl)',
                  borderRadius: 'var(--border-radius-lg)',
                  background: 'var(--medium-green)',
                  boxShadow: '0 4px 15px rgba(16, 185, 129, 0.1)',
                  transition: 'var(--transition-normal)',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <info.icon
                  style={{
                    fontSize: 'var(--font-size-3xl)',
                    color: 'var(--primary-color)',
                    marginBottom: 'var(--spacing-md)',
                  }}
                />
                <h3 style={{
                  fontSize: 'var(--font-size-xl)',
                  marginBottom: 'var(--spacing-sm)',
                  color: 'var(--text-primary)',
                  fontWeight: '700',
                }}>
                  {info.title[language]}
                </h3>
                <p style={{
                  fontWeight: '600',
                  marginBottom: 'var(--spacing-md)',
                }}>
                  {info.content}
                </p>
                <p style={{
                  color: 'var(--text-secondary)',
                  fontSize: 'var(--font-size-base)',
                  marginBottom: 'var(--spacing-lg)',
                }}>
                  {info.description[language]}
                </p>
                <div style={{ marginTop: 'auto' }}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      to={index === 0 ? `mailto:${info.content}` : (index === 1 ? `tel:${info.content.replace(/\s+/g, '')}` : "/contact")}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: 'var(--spacing-xs)',
                        color: 'var(--primary-color)',
                        fontWeight: '600',
                        textDecoration: 'none',
                      }}
                    >
                      {language === 'en' ? 'Connect Now' : 'Połącz Teraz'}
                      <FaArrowRight size={14} />
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Contact Form Section */}
      <motion.section
        ref={formRef}
        initial="hidden"
        animate={formInView ? "visible" : "hidden"}
        variants={containerVariants}
        style={{
          padding: 'var(--spacing-2xl) 0',
          background: 'linear-gradient(180deg, rgba(16, 185, 129, 0.05) 0%, rgba(255, 255, 255, 1) 100%)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Background elements */}
        <div style={{
          position: 'absolute',
          top: '5%',
          left: '5%',
          width: '200px',
          height: '200px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(16, 185, 129, 0.1) 0%, rgba(16, 185, 129, 0) 70%)',
          zIndex: 0,
        }} />
        
        <div style={{
          position: 'absolute',
          bottom: '10%',
          right: '5%',
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(5, 150, 105, 0.08) 0%, rgba(5, 150, 105, 0) 70%)',
          zIndex: 0,
        }} />
        
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 'var(--spacing-2xl)',
            alignItems: 'center',
          }}>
            <motion.div variants={itemVariants}>
              <h2 style={{
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                marginBottom: 'var(--spacing-md)',
                color: 'var(--text-primary)',
                fontWeight: '800',
              }}>
                {language === 'en' ? 'Send Us a Message' : 'Wyślij Nam Wiadomość'}
              </h2>
              <p style={{
                fontSize: 'var(--font-size-lg)',
                marginBottom: 'var(--spacing-xl)',
                color: 'var(--text-secondary)',
                maxWidth: '500px',
              }}>
                {language === 'en'
                  ? 'Fill out the form and our team will get back to you within 24 hours. We\'re excited to hear about your project!'
                  : 'Wypełnij formularz, a nasz zespół skontaktuje się z Tobą w ciągu 24 godzin. Nie możemy się doczekać, aby usłyszeć o Twoim projekcie!'}
              </p>
              
              <div style={{
                display: 'flex',
                gap: 'var(--spacing-xl)',
                marginBottom: 'var(--spacing-xl)',
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--spacing-sm)',
                }}>
                  <FaCalendarAlt style={{ color: 'var(--primary-color)' }} />
                  <span>{language === 'en' ? 'Quick Response' : 'Szybka Odpowiedź'}</span>
                </div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--spacing-sm)',
                }}>
                  <FaComments style={{ color: 'var(--primary-color)' }} />
                  <span>{language === 'en' ? 'Expert Advice' : 'Ekspercka Porada'}</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <div style={{
                background: 'white',
                padding: 'var(--spacing-xl)',
                borderRadius: 'var(--border-radius-lg)',
                boxShadow: '0 10px 25px rgba(16, 185, 129, 0.1)',
              }}>
                <form onSubmit={handleSubmit}>
                  <div style={{
                    display: 'grid',
                    gap: 'var(--spacing-md)',
                  }}>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder={language === 'en' ? 'Your Name *' : 'Twoje Imię *'}
                      required
                      style={{
                        width: '100%',
                        padding: 'var(--spacing-md)',
                        borderRadius: 'var(--border-radius-md)',
                        border: '1px solid rgba(16, 185, 129, 0.2)',
                        background: 'var(--light-green)',
                      }}
                    />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder={language === 'en' ? 'Email Address *' : 'Adres Email *'}
                      required
                      style={{
                        width: '100%',
                        padding: 'var(--spacing-md)',
                        borderRadius: 'var(--border-radius-md)',
                        border: '1px solid rgba(16, 185, 129, 0.2)',
                        background: 'var(--light-green)',
                      }}
                    />
                    <div style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
                      gap: 'var(--spacing-md)',
                    }}>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder={language === 'en' ? 'Phone Number' : 'Numer Telefonu'}
                        style={{
                          width: '100%',
                          padding: 'var(--spacing-md)',
                          borderRadius: 'var(--border-radius-md)',
                          border: '1px solid rgba(16, 185, 129, 0.2)',
                          background: 'var(--light-green)',
                        }}
                      />
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder={language === 'en' ? 'Company Name' : 'Nazwa Firmy'}
                        style={{
                          width: '100%',
                          padding: 'var(--spacing-md)',
                          borderRadius: 'var(--border-radius-md)',
                          border: '1px solid rgba(16, 185, 129, 0.2)',
                          background: 'var(--light-green)',
                        }}
                      />
                    </div>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      style={{
                        width: '100%',
                        padding: 'var(--spacing-md)',
                        borderRadius: 'var(--border-radius-md)',
                        border: '1px solid rgba(16, 185, 129, 0.2)',
                        background: 'var(--light-green)',
                      }}
                    >
                      {serviceOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label[language]}
                        </option>
                      ))}
                    </select>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder={language === 'en' ? 'Your Message *' : 'Twoja Wiadomość *'}
                      required
                      rows={5}
                      style={{
                        width: '100%',
                        padding: 'var(--spacing-md)',
                        borderRadius: 'var(--border-radius-md)',
                        border: '1px solid rgba(16, 185, 129, 0.2)',
                        background: 'var(--light-green)',
                        resize: 'vertical',
                      }}
                    />
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      disabled={formStatus === 'sending'}
                      style={{
                        background: 'linear-gradient(135deg, var(--gradient-start), var(--gradient-end))',
                        color: 'white',
                        padding: 'var(--spacing-md)',
                        borderRadius: 'var(--border-radius-md)',
                        border: 'none',
                        fontWeight: '600',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: 'var(--spacing-sm)',
                        boxShadow: '0 4px 10px rgba(16, 185, 129, 0.2)',
                      }}
                    >
                      <FaPaperPlane />
                      {formStatus === 'sending'
                        ? (language === 'en' ? 'Sending...' : 'Wysyłanie...')
                        : (language === 'en' ? 'Send Message' : 'Wyślij Wiadomość')}
                    </motion.button>
                  </div>
                </form>

                {formStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    style={{
                      textAlign: 'center',
                      marginTop: 'var(--spacing-xl)',
                      padding: 'var(--spacing-md)',
                      background: 'var(--light-green)',
                      borderRadius: 'var(--border-radius-md)',
                      color: 'var(--primary-color)',
                      fontWeight: '600',
                    }}
                  >
                    {language === 'en'
                      ? 'Thank you for your message! We will get back to you soon.'
                      : 'Dziękujemy za wiadomość! Odpowiemy wkrótce.'}
                  </motion.div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        ref={ctaRef}
        initial="hidden"
        animate={ctaInView ? "visible" : "hidden"}
        variants={containerVariants}
        style={{
          padding: 'var(--spacing-2xl) 0',
          background: 'var(--light-green)',
        }}
      >
        <div className="container text-center" style={{
          maxWidth: '800px',
          margin: '0 auto',
          background: 'var(--medium-green)',
          boxShadow: '0 10px 30px rgba(16, 185, 129, 0.15)',
          padding: 'var(--spacing-2xl)',
          borderRadius: 'var(--border-radius-lg)',
        }}>
          <motion.h2
            variants={itemVariants}
            style={{
              fontSize: 'clamp(2rem, 5vw, 3rem)',
              marginBottom: 'var(--spacing-lg)',
              fontWeight: '800',
            }}
          >
            {language === 'en'
              ? 'Ready to Transform Your Business?'
              : 'Gotowy na Transformację Swojego Biznesu?'}
          </motion.h2>
          <motion.p
            variants={itemVariants}
            style={{
              fontSize: 'var(--font-size-lg)',
              marginBottom: 'var(--spacing-xl)',
              opacity: 0.9,
            }}
          >
            {language === 'en'
              ? 'Schedule a free consultation call with our AI experts today.'
              : 'Zaplanuj bezpłatną konsultację z naszymi ekspertami AI już dziś.'}
          </motion.p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 'var(--spacing-lg)', flexWrap: 'wrap' }}>
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a
                href="https://calendly.com/aistream/consultation"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  background: 'linear-gradient(135deg, var(--gradient-start), var(--gradient-end))',
                  color: '#fff',
                  boxShadow: '0 4px 10px rgba(16, 185, 129, 0.2)',
                  padding: 'var(--spacing-md) var(--spacing-xl)',
                  borderRadius: 'var(--border-radius-md)',
                  fontWeight: '600',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 'var(--spacing-sm)',
                }}
              >
                {language === 'en' ? 'Book a Call' : 'Umów Rozmowę'}
                <FaCalendarAlt />
              </a>
            </motion.div>
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a
                href="mailto:contact@aistream.com"
                style={{
                  background: 'transparent',
                  color: 'var(--primary-color)',
                  padding: 'var(--spacing-md) var(--spacing-xl)',
                  borderRadius: 'var(--border-radius-md)',
                  fontWeight: '600',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 'var(--spacing-sm)',
                  border: '2px solid var(--primary-color)',
                }}
              >
                {language === 'en' ? 'Email Us' : 'Wyślij Email'}
                <FaEnvelope />
              </a>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Contact;