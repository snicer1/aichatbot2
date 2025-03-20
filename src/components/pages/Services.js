import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import {
  FaRobot,
  FaDatabase,
  FaUserFriends,
  FaProjectDiagram,
  FaChartBar,
  FaUserTie,
  FaFileAlt,
  FaBullhorn,
  FaChartLine,
  FaBoxes,
  FaHandshake,
  FaTools,
  FaPlug,
  FaBell
} from 'react-icons/fa';

const Services = () => {
  const [language] = useState('en');
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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

  // Service categories with their respective services
  const serviceCategories = [
    {
      id: 'automation',
      icon: FaRobot,
      title: { en: 'Process Automation', pl: 'Automatyzacja Procesów' },
      services: [
        {
          icon: FaFileAlt,
          title: { en: 'Documentation Management', pl: 'Zarządzanie Dokumentacją' },
          description: {
            en: 'Intelligent document organization and process documentation with AI-powered chatbots',
            pl: 'Inteligentna organizacja dokumentów i dokumentacja procesów z chatbotami AI'
          }
        },
        {
          icon: FaDatabase,
          title: { en: 'Data Automation', pl: 'Automatyzacja Danych' },
          description: {
            en: 'Streamline data processing workflows and automate repetitive tasks',
            pl: 'Usprawnianie procesów przetwarzania danych i automatyzacja powtarzalnych zadań'
          }
        }
      ]
    },
    {
      id: 'customer-support',
      icon: FaUserFriends,
      title: { en: 'Customer Support', pl: 'Obsługa Klienta' },
      services: [
        {
          icon: FaRobot,
          title: { en: 'Support Chatbots', pl: 'Chatboty Wsparcia' },
          description: {
            en: 'AI-powered chatbots for 24/7 customer support and FAQ handling',
            pl: 'Chatboty AI do całodobowej obsługi klienta i obsługi FAQ'
          }
        }
      ]
    },
    {
      id: 'project-management',
      icon: FaProjectDiagram,
      title: { en: 'Project Management', pl: 'Zarządzanie Projektami' },
      services: [
        {
          icon: FaChartBar,
          title: { en: 'Progress Tracking', pl: 'Śledzenie Postępów' },
          description: {
            en: 'Automated progress reports and deadline management',
            pl: 'Automatyczne raporty postępu i zarządzanie terminami'
          }
        }
      ]
    },
    {
      id: 'hr',
      icon: FaUserTie,
      title: { en: 'HR Solutions', pl: 'Rozwiązania HR' },
      services: [
        {
          icon: FaUserTie,
          title: { en: 'Recruitment Automation', pl: 'Automatyzacja Rekrutacji' },
          description: {
            en: 'AI-powered CV screening and candidate matching',
            pl: 'Automatyczna analiza CV i dopasowywanie kandydatów'
          }
        }
      ]
    },
    {
      id: 'marketing',
      icon: FaBullhorn,
      title: { en: 'Marketing Automation', pl: 'Automatyzacja Marketingu' },
      services: [
        {
          icon: FaBullhorn,
          title: { en: 'Campaign Management', pl: 'Zarządzanie Kampaniami' },
          description: {
            en: 'Automated email campaigns and content generation',
            pl: 'Automatyczne kampanie email i generowanie treści'
          }
        }
      ]
    },
    {
      id: 'finance',
      icon: FaChartLine,
      title: { en: 'Financial Solutions', pl: 'Rozwiązania Finansowe' },
      services: [
        {
          icon: FaChartLine,
          title: { en: 'Financial Insights', pl: 'Analiza Finansowa' },
          description: {
            en: 'Automated financial reporting and anomaly detection',
            pl: 'Automatyczne raportowanie finansowe i wykrywanie anomalii'
          }
        }
      ]
    },
    {
      id: 'resource',
      icon: FaBoxes,
      title: { en: 'Resource Management', pl: 'Zarządzanie Zasobami' },
      services: [
        {
          icon: FaBoxes,
          title: { en: 'Resource Planning', pl: 'Planowanie Zasobów' },
          description: {
            en: 'AI-driven resource prediction and automated ordering',
            pl: 'Przewidywanie zasobów oparte na AI i automatyczne zamawianie'
          }
        }
      ]
    },
    {
      id: 'sales',
      icon: FaHandshake,
      title: { en: 'Sales & CRM', pl: 'Sprzedaż i CRM' },
      services: [
        {
          icon: FaHandshake,
          title: { en: 'Sales Automation', pl: 'Automatyzacja Sprzedaży' },
          description: {
            en: 'Lead tracking and sales trend prediction',
            pl: 'Śledzenie leadów i przewidywanie trendów sprzedaży'
          }
        }
      ]
    },
    {
      id: 'technical',
      icon: FaTools,
      title: { en: 'Technical Support', pl: 'Wsparcie Techniczne' },
      services: [
        {
          icon: FaTools,
          title: { en: 'Technical Automation', pl: 'Automatyzacja Techniczna' },
          description: {
            en: 'Automated error tracking and technical support chatbots',
            pl: 'Automatyczne śledzenie błędów i chatboty wsparcia technicznego'
          }
        }
      ]
    },
    {
      id: 'integration',
      icon: FaPlug,
      title: { en: 'System Integration', pl: 'Integracja Systemów' },
      services: [
        {
          icon: FaPlug,
          title: { en: 'Workflow Integration', pl: 'Integracja Przepływów Pracy' },
          description: {
            en: 'Seamless connection of business applications',
            pl: 'Bezproblemowe łączenie aplikacji biznesowych'
          }
        }
      ]
    },
    {
      id: 'notifications',
      icon: FaBell,
      title: { en: 'Notifications & Alerts', pl: 'Powiadomienia i Alerty' },
      services: [
        {
          icon: FaBell,
          title: { en: 'Smart Alerts', pl: 'Inteligentne Alerty' },
          description: {
            en: 'Automated task reminders and risk alerts',
            pl: 'Automatyczne przypomnienia o zadaniach i alerty o ryzyku'
          }
        }
      ]
    }
  ];

  // Intersection observer hooks
  const [headerRef, headerInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [servicesRef, servicesInView] = useInView({ threshold: 0.1, triggerOnce: true });

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
            {language === 'en' ? 'Our Services' : 'Nasze Usługi'}
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
              ? 'Discover our comprehensive range of AI-powered automation solutions designed to transform your business operations'
              : 'Odkryj naszą kompleksową gamę rozwiązań automatyzacji opartych na AI, zaprojektowanych do transformacji operacji biznesowych'}
          </motion.p>
        </div>
      </motion.section>

      {/* Services Grid */}
      <motion.section
        ref={servicesRef}
        initial="hidden"
        animate={servicesInView ? "visible" : "hidden"}
        variants={containerVariants}
        style={{
          padding: 'var(--spacing-2xl) 0',
          background: 'var(--background-color)',
        }}
      >
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: ['1fr', '1fr 1fr', 'repeat(3, 1fr)'],
            gap: 'var(--spacing-xl)',
          }}>
            {serviceCategories.map((category) => (
              <motion.div
                key={category.id}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                style={{
                  background: 'white',
                  borderRadius: 'var(--border-radius-lg)',
                  padding: 'var(--spacing-xl)',
                  boxShadow: 'var(--shadow-md)',
                  cursor: 'pointer',
                }}
                onClick={() => setSelectedCategory(
                  selectedCategory === category.id ? null : category.id
                )}
              >
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--spacing-md)',
                  marginBottom: 'var(--spacing-md)',
                }}>
                  <category.icon
                    style={{
                      fontSize: 'var(--font-size-2xl)',
                      color: 'var(--primary-color)',
                    }}
                  />
                  <h3 style={{
                    fontSize: 'var(--font-size-xl)',
                    margin: 0,
                  }}>
                    {category.title[language]}
                  </h3>
                </div>

                {/* Service Details */}
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{
                    height: selectedCategory === category.id ? 'auto' : 0,
                    opacity: selectedCategory === category.id ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  style={{ overflow: 'hidden' }}
                >
                  {category.services.map((service, index) => (
                    <div
                      key={index}
                      style={{
                        marginTop: 'var(--spacing-md)',
                        padding: 'var(--spacing-md)',
                        background: 'var(--background-color)',
                        borderRadius: 'var(--border-radius-md)',
                      }}
                    >
                      <h4 style={{
                        fontSize: 'var(--font-size-lg)',
                        marginBottom: 'var(--spacing-sm)',
                        color: 'var(--text-primary)',
                      }}>
                        {service.title[language]}
                      </h4>
                      <p style={{
                        fontSize: 'var(--font-size-base)',
                        color: 'var(--text-secondary)',
                      }}>
                        {service.description[language]}
                      </p>
                    </div>
                  ))}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        style={{
          background: 'var(--dark-background)',
          color: 'var(--text-light)',
          padding: 'var(--spacing-2xl) 0',
        }}
      >
        <div className="container text-center">
          <motion.h2
            variants={itemVariants}
            style={{
              fontSize: 'var(--font-size-3xl)',
              marginBottom: 'var(--spacing-lg)',
            }}
          >
            {language === 'en'
              ? 'Ready to Get Started?'
              : 'Gotowy do Rozpoczęcia?'}
          </motion.h2>
          <motion.p
            variants={itemVariants}
            style={{
              fontSize: 'var(--font-size-lg)',
              maxWidth: '600px',
              margin: '0 auto var(--spacing-xl)',
            }}
          >
            {language === 'en'
              ? 'Contact us today to discuss how we can help automate and optimize your business processes'
              : 'Skontaktuj się z nami już dziś, aby omówić, jak możemy pomóc zautomatyzować i zoptymalizować Twoje procesy biznesowe'}
          </motion.p>
          <motion.div
            variants={itemVariants}
          >
            <Link
              to="/contact"
              style={{
                background: 'var(--accent-color)',
                color: 'var(--text-primary)',
                padding: 'var(--spacing-md) var(--spacing-xl)',
                borderRadius: 'var(--border-radius-md)',
                fontWeight: '600',
                display: 'inline-block',
              }}
            >
              {language === 'en' ? 'Contact Us' : 'Skontaktuj się z Nami'}
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default Services;