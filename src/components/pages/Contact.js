import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FaEnvelope, 
  FaPhone, 
  FaMapMarkerAlt,
  FaPaperPlane
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
      title: { en: 'Email', pl: 'Email' },
      content: 'contact@aistream.com'
    },
    {
      icon: FaPhone,
      title: { en: 'Phone', pl: 'Telefon' },
      content: '+48 123 456 789'
    },
    {
      icon: FaMapMarkerAlt,
      title: { en: 'Address', pl: 'Adres' },
      content: 'ul. Przykładowa 123, 00-001 Warszawa'
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
  const [headerRef, headerInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [formRef, formInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [mapRef, mapInView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <div style={{ paddingTop: 'var(--spacing-2xl)' }}>
      {/* Header Section */}
      <motion.section
        ref={headerRef}
        initial="hidden"
        animate={headerInView ? "visible" : "hidden"}
        variants={containerVariants}
        style={{
          background: 'linear-gradient(135deg, var(--primary-color), var(--secondary-color))',
          color: 'var(--text-light)',
          padding: 'var(--spacing-2xl) 0',
        }}
      >
        <div className="container text-center">
          <motion.h1
            variants={itemVariants}
            style={{
              fontSize: 'var(--font-size-4xl)',
              marginBottom: 'var(--spacing-lg)',
            }}
          >
            {language === 'en' ? 'Contact Us' : 'Kontakt'}
          </motion.h1>
          <motion.p
            variants={itemVariants}
            style={{
              fontSize: 'var(--font-size-lg)',
              maxWidth: '800px',
              margin: '0 auto',
            }}
          >
            {language === 'en'
              ? 'Get in touch with us to discuss how we can help transform your business with AI automation'
              : 'Skontaktuj się z nami, aby omówić, jak możemy pomóc przekształcić Twoją firmę dzięki automatyzacji AI'}
          </motion.p>
        </div>
      </motion.section>

      {/* Contact Info Cards */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        style={{
          padding: 'var(--spacing-2xl) 0',
          background: 'var(--background-color)',
        }}
      >
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: ['1fr', '1fr', 'repeat(3, 1fr)'],
            gap: 'var(--spacing-xl)',
          }}>
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                style={{
                  background: 'white',
                  padding: 'var(--spacing-xl)',
                  borderRadius: 'var(--border-radius-lg)',
                  boxShadow: 'var(--shadow-md)',
                  textAlign: 'center',
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
                }}>
                  {info.title[language]}
                </h3>
                <p>{info.content}</p>
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
          background: 'var(--dark-background)',
          color: 'var(--text-light)',
        }}
      >
        <div className="container">
          <motion.form
            variants={itemVariants}
            onSubmit={handleSubmit}
            style={{
              maxWidth: '600px',
              margin: '0 auto',
            }}
          >
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
                  border: 'none',
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
                  border: 'none',
                }}
              />
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
                  border: 'none',
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
                  border: 'none',
                }}
              />
              <select
                name="service"
                value={formData.service}
                onChange={handleInputChange}
                style={{
                  width: '100%',
                  padding: 'var(--spacing-md)',
                  borderRadius: 'var(--border-radius-md)',
                  border: 'none',
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
                  border: 'none',
                  resize: 'vertical',
                }}
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={formStatus === 'sending'}
                style={{
                  background: 'var(--accent-color)',
                  color: 'var(--text-primary)',
                  padding: 'var(--spacing-md)',
                  borderRadius: 'var(--border-radius-md)',
                  border: 'none',
                  fontWeight: '600',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 'var(--spacing-sm)',
                }}
              >
                <FaPaperPlane />
                {formStatus === 'sending'
                  ? (language === 'en' ? 'Sending...' : 'Wysyłanie...')
                  : (language === 'en' ? 'Send Message' : 'Wyślij Wiadomość')}
              </motion.button>
            </div>
          </motion.form>

          {formStatus === 'success' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              style={{
                textAlign: 'center',
                marginTop: 'var(--spacing-xl)',
                color: 'var(--accent-color)',
              }}
            >
              {language === 'en'
                ? 'Thank you for your message! We will get back to you soon.'
                : 'Dziękujemy za wiadomość! Odpowiemy wkrótce.'}
            </motion.div>
          )}
        </div>
      </motion.section>

      {/* Map Section */}
      <motion.section
        ref={mapRef}
        initial="hidden"
        animate={mapInView ? "visible" : "hidden"}
        variants={containerVariants}
        style={{
          height: '400px',
          background: '#f0f0f0',
          position: 'relative',
        }}
      >
        {/* Map iframe would go here in a real implementation */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#e0e0e0',
        }}>
          <FaMapMarkerAlt
            style={{
              fontSize: 'var(--font-size-4xl)',
              color: 'var(--primary-color)',
            }}
          />
        </div>
      </motion.section>
    </div>
  );
};

export default Contact;