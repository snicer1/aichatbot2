import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
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
  FaBell,
  FaIndustry,
  FaHospital,
  FaShoppingCart,
  FaUniversity,
  FaClock,
  FaUsers,
  FaDollarSign,
  FaArrowRight,
  FaPhoneAlt
} from 'react-icons/fa';

const Services = () => {
  const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedCase, setSelectedCase] = useState(null);
  const [activeTab, setActiveTab] = useState('services'); // 'services' or 'case-studies'

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

  // Case studies data
  const caseStudies = [
    {
      id: 'manufacturing',
      icon: FaIndustry,
      title: { en: 'Manufacturing Excellence', pl: 'Doskonałość w Produkcji' },
      company: { en: 'Global Manufacturing Corp', pl: 'Global Manufacturing Corp' },
      challenge: {
        en: 'Inefficient production processes leading to delays and increased costs',
        pl: 'Nieefektywne procesy produkcyjne prowadzące do opóźnień i zwiększonych kosztów'
      },
      solution: {
        en: 'Implemented AI-driven process automation and predictive maintenance systems',
        pl: 'Wdrożono automatyzację procesów opartą na AI i systemy konserwacji predykcyjnej'
      },
      results: [
        {
          icon: FaChartLine,
          text: { en: '35% increase in productivity', pl: '35% wzrost produktywności' }
        },
        {
          icon: FaClock,
          text: { en: '60% reduction in downtime', pl: '60% redukcja przestojów' }
        },
        {
          icon: FaDollarSign,
          text: { en: '25% cost savings', pl: '25% oszczędności kosztów' }
        }
      ]
    },
    {
      id: 'healthcare',
      icon: FaHospital,
      title: { en: 'Healthcare Innovation', pl: 'Innowacje w Opiece Zdrowotnej' },
      company: { en: 'MedTech Solutions', pl: 'MedTech Solutions' },
      challenge: {
        en: 'Manual patient data management causing delays in care delivery',
        pl: 'Ręczne zarządzanie danymi pacjentów powodujące opóźnienia w świadczeniu opieki'
      },
      solution: {
        en: 'Deployed AI chatbots for patient scheduling and automated documentation',
        pl: 'Wdrożono chatboty AI do planowania wizyt pacjentów i automatycznej dokumentacji'
      },
      results: [
        {
          icon: FaUsers,
          text: { en: '50% faster patient processing', pl: '50% szybsza obsługa pacjentów' }
        },
        {
          icon: FaChartLine,
          text: { en: '40% improved efficiency', pl: '40% poprawa efektywności' }
        },
        {
          icon: FaDollarSign,
          text: { en: '30% operational savings', pl: '30% oszczędności operacyjne' }
        }
      ]
    },
    {
      id: 'retail',
      icon: FaShoppingCart,
      title: { en: 'Retail Transformation', pl: 'Transformacja Handlu Detalicznego' },
      company: { en: 'Smart Retail Co', pl: 'Smart Retail Co' },
      challenge: {
        en: 'Inefficient inventory management and customer service',
        pl: 'Nieefektywne zarządzanie zapasami i obsługa klienta'
      },
      solution: {
        en: 'Implemented AI-powered inventory prediction and customer service automation',
        pl: 'Wdrożono przewidywanie zapasów oparte na AI i automatyzację obsługi klienta'
      },
      results: [
        {
          icon: FaChartLine,
          text: { en: '45% reduced stockouts', pl: '45% redukcja braków w magazynie' }
        },
        {
          icon: FaUsers,
          text: { en: '90% faster response times', pl: '90% szybszy czas odpowiedzi' }
        },
        {
          icon: FaDollarSign,
          text: { en: '20% increased sales', pl: '20% wzrost sprzedaży' }
        }
      ]
    },
    {
      id: 'education',
      icon: FaUniversity,
      title: { en: 'Education Evolution', pl: 'Ewolucja Edukacji' },
      company: { en: 'EduTech Institute', pl: 'EduTech Institute' },
      challenge: {
        en: 'Complex administrative processes and student support needs',
        pl: 'Złożone procesy administracyjne i potrzeby wsparcia studentów'
      },
      solution: {
        en: 'Deployed comprehensive automation system for administration and student services',
        pl: 'Wdrożono kompleksowy system automatyzacji dla administracji i obsługi studentów'
      },
      results: [
        {
          icon: FaClock,
          text: { en: '70% faster processing', pl: '70% szybsze przetwarzanie' }
        },
        {
          icon: FaUsers,
          text: { en: '24/7 student support', pl: 'Całodobowe wsparcie studentów' }
        },
        {
          icon: FaDollarSign,
          text: { en: '35% cost reduction', pl: '35% redukcja kosztów' }
        }
      ]
    }
  ];

  // Intersection observer hooks
  const [heroRef, heroInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [tabsRef, tabsInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [contentRef, contentInView] = useInView({ threshold: 0.1, triggerOnce: true });
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
          minHeight: '70vh',
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
              fontSize: 'clamp(3rem, 8vw, 5rem)',
              marginBottom: 'var(--spacing-lg)',
              maxWidth: '900px',
              lineHeight: 1.1,
              fontWeight: '800',
              color: 'var(--text-primary)',
            }}
          >
            {t('services.hero.title')}
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
            {t('services.hero.description')}
          </motion.p>
          <motion.div
            variants={itemVariants}
            style={{
              display: 'flex',
              gap: 'var(--spacing-md)',
              flexWrap: 'wrap',
              position: 'relative',
              zIndex: 1,
              marginTop: 'var(--spacing-xl)',
            }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/contact"
                style={{
                  background: 'linear-gradient(135deg, var(--gradient-start), var(--gradient-end))',
                  color: '#fff',
                  padding: 'var(--spacing-md) var(--spacing-xl)',
                  borderRadius: 'var(--border-radius-md)',
                  fontWeight: '600',
                  textDecoration: 'none',
                  transition: 'var(--transition-normal)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 'var(--spacing-sm)',
                  boxShadow: '0 4px 10px rgba(16, 185, 129, 0.2)',
                }}
              >
                {t('services.hero.getStarted')}
                <FaArrowRight />
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/how-it-works"
                style={{
                  background: 'transparent',
                  color: 'var(--primary-color)',
                  padding: 'var(--spacing-md) var(--spacing-xl)',
                  borderRadius: 'var(--border-radius-md)',
                  fontWeight: '600',
                  textDecoration: 'none',
                  transition: 'var(--transition-normal)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 'var(--spacing-sm)',
                  border: '2px solid var(--primary-color)',
                }}
              >
                {t('services.hero.howItWorks')}
                <FaArrowRight />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Tabs Section */}
      <motion.section
        ref={tabsRef}
        initial="hidden"
        animate={tabsInView ? "visible" : "hidden"}
        variants={containerVariants}
        style={{
          padding: 'var(--spacing-xl) 0',
          background: 'var(--light-green)',
          borderBottom: '1px solid rgba(16, 185, 129, 0.2)',
        }}
      >
        <div className="container">
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: 'var(--spacing-md)',
            flexWrap: 'wrap',
          }}>
            <motion.button
              variants={itemVariants}
              whileHover={{ y: -2 }}
              onClick={() => setActiveTab('services')}
              style={{
                background: activeTab === 'services' 
                  ? 'linear-gradient(135deg, var(--gradient-start), var(--gradient-end))'
                  : 'white',
                color: activeTab === 'services' ? 'white' : 'var(--text-primary)',
                padding: 'var(--spacing-md) var(--spacing-xl)',
                borderRadius: 'var(--border-radius-md)',
                fontWeight: '600',
                border: 'none',
                cursor: 'pointer',
                boxShadow: activeTab === 'services' 
                  ? '0 4px 10px rgba(16, 185, 129, 0.2)'
                  : '0 2px 5px rgba(0, 0, 0, 0.05)',
                transition: 'var(--transition-normal)',
                fontSize: 'var(--font-size-base)',
              }}
            >
              {t('services.tabs.solutions')}
            </motion.button>
            <motion.button
              variants={itemVariants}
              whileHover={{ y: -2 }}
              onClick={() => setActiveTab('case-studies')}
              style={{
                background: activeTab === 'case-studies' 
                  ? 'linear-gradient(135deg, var(--gradient-start), var(--gradient-end))'
                  : 'white',
                color: activeTab === 'case-studies' ? 'white' : 'var(--text-primary)',
                padding: 'var(--spacing-md) var(--spacing-xl)',
                borderRadius: 'var(--border-radius-md)',
                fontWeight: '600',
                border: 'none',
                cursor: 'pointer',
                boxShadow: activeTab === 'case-studies' 
                  ? '0 4px 10px rgba(16, 185, 129, 0.2)'
                  : '0 2px 5px rgba(0, 0, 0, 0.05)',
                transition: 'var(--transition-normal)',
                fontSize: 'var(--font-size-base)',
              }}
            >
              {t('services.tabs.caseStudies')}
            </motion.button>
          </div>
        </div>
      </motion.section>

      {/* Content Section */}
      <motion.section
        ref={contentRef}
        initial="hidden"
        animate={contentInView ? "visible" : "hidden"}
        variants={containerVariants}
        style={{
          padding: 'var(--spacing-2xl) 0',
          background: 'var(--light-green)',
        }}
      >
        <div className="container">
          {/* Services Content */}
          {activeTab === 'services' && (
            <>
              <motion.h2
                variants={itemVariants}
                className="text-center"
                style={{
                  fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
                  marginBottom: 'var(--spacing-md)',
                  color: 'var(--text-primary)',
                  fontWeight: '800',
                }}
              >
                {t('services.content.solutions.title')}
              </motion.h2>
              <motion.p
                variants={itemVariants}
                className="text-center"
                style={{
                  fontSize: 'var(--font-size-lg)',
                  marginBottom: 'var(--spacing-2xl)',
                  maxWidth: '800px',
                  margin: '0 auto var(--spacing-2xl)',
                }}
              >
                {t('services.content.solutions.description')}
              </motion.p>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                gap: 'var(--spacing-xl)',
              }}>
                {serviceCategories.map((category) => (
                  <motion.div
                    key={category.id}
                    variants={itemVariants}
                    whileHover={{ y: -5, boxShadow: '0 10px 25px rgba(16, 185, 129, 0.15)' }}
                    style={{
                      background: 'var(--medium-green)',
                      borderRadius: 'var(--border-radius-lg)',
                      padding: 'var(--spacing-xl)',
                      boxShadow: 'var(--shadow-md)',
                      cursor: 'pointer',
                      transition: 'var(--transition-normal)',
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
                      <div style={{
                        width: '50px',
                        height: '50px',
                        borderRadius: '50%',
                        background: 'var(--light-green)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                        <category.icon
                          style={{
                            fontSize: 'var(--font-size-xl)',
                            color: 'var(--primary-color)',
                          }}
                        />
                      </div>
                      <h3 style={{
                        fontSize: 'var(--font-size-xl)',
                        margin: 0,
                        color: 'var(--text-primary)',
                        fontWeight: '700',
                      }}>
                        {t(`services.categories.${category.id}.title`)}
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
                            background: 'white',
                            borderRadius: 'var(--border-radius-md)',
                            boxShadow: '0 2px 5px rgba(0, 0, 0, 0.05)',
                          }}
                        >
                          <h4 style={{
                            fontSize: 'var(--font-size-lg)',
                            marginBottom: 'var(--spacing-sm)',
                            color: 'var(--text-primary)',
                            fontWeight: '600',
                          }}>
                            {t(`services.categories.${category.id}.services.${index}.title`)}
                          </h4>
                          <p style={{
                            fontSize: 'var(--font-size-base)',
                            color: 'var(--text-secondary)',
                            lineHeight: 1.6,
                          }}>
                            {t(`services.categories.${category.id}.services.${index}.description`)}
                          </p>
                        </div>
                      ))}
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </>
          )}

          {/* Case Studies Content */}
          {activeTab === 'case-studies' && (
            <>
              <motion.h2
                variants={itemVariants}
                className="text-center"
                style={{
                  fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
                  marginBottom: 'var(--spacing-md)',
                  color: 'var(--text-primary)',
                  fontWeight: '800',
                }}
              >
                {t('services.content.caseStudies.title')}
              </motion.h2>
              <motion.p
                variants={itemVariants}
                className="text-center"
                style={{
                  fontSize: 'var(--font-size-lg)',
                  marginBottom: 'var(--spacing-2xl)',
                  maxWidth: '800px',
                  margin: '0 auto var(--spacing-2xl)',
                }}
              >
                {t('services.content.caseStudies.description')}
              </motion.p>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                gap: 'var(--spacing-xl)',
              }}>
                {caseStudies.map((study) => (
                  <motion.div
                    key={study.id}
                    variants={itemVariants}
                    whileHover={{ y: -5, boxShadow: '0 10px 25px rgba(16, 185, 129, 0.15)' }}
                    style={{
                      background: 'white',
                      borderRadius: 'var(--border-radius-lg)',
                      overflow: 'hidden',
                      boxShadow: 'var(--shadow-md)',
                      cursor: 'pointer',
                      transition: 'var(--transition-normal)',
                    }}
                    onClick={() => setSelectedCase(selectedCase === study.id ? null : study.id)}
                  >
                    <div style={{
                      background: 'linear-gradient(135deg, var(--gradient-start), var(--gradient-end))',
                      padding: 'var(--spacing-lg)',
                      color: 'var(--text-light)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 'var(--spacing-md)',
                    }}>
                      <study.icon style={{ fontSize: 'var(--font-size-2xl)' }} />
                      <h3 style={{ margin: 0, fontWeight: '700' }}>{t(`services.caseStudies.${study.id}.title`)}</h3>
                    </div>
                    
                    <div style={{ padding: 'var(--spacing-lg)' }}>
                      <p style={{
                        fontSize: 'var(--font-size-lg)',
                        color: 'var(--primary-color)',
                        marginBottom: 'var(--spacing-md)',
                        fontWeight: '600',
                      }}>
                        {t(`services.caseStudies.${study.id}.company`)}
                      </p>
                      
                      <h4 style={{
                        fontSize: 'var(--font-size-base)',
                        marginBottom: 'var(--spacing-sm)',
                        color: 'var(--text-primary)',
                        fontWeight: '700',
                      }}>
                        {t('services.content.caseStudies.challengeLabel')}
                      </h4>
                      <p style={{ 
                        marginBottom: 'var(--spacing-md)',
                        color: 'var(--text-secondary)',
                        lineHeight: 1.6,
                      }}>
                        {t(`services.caseStudies.${study.id}.challenge`)}
                      </p>

                      <h4 style={{
                        fontSize: 'var(--font-size-base)',
                        marginBottom: 'var(--spacing-sm)',
                        color: 'var(--text-primary)',
                        fontWeight: '700',
                      }}>
                        {t('services.content.caseStudies.solutionLabel')}
                      </h4>
                      <p style={{ 
                        marginBottom: 'var(--spacing-md)',
                        color: 'var(--text-secondary)',
                        lineHeight: 1.6,
                      }}>
                        {t(`services.caseStudies.${study.id}.solution`)}
                      </p>

                      {/* Results */}
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{
                          height: selectedCase === study.id ? 'auto' : 0,
                          opacity: selectedCase === study.id ? 1 : 0,
                        }}
                        transition={{ duration: 0.3 }}
                        style={{ overflow: 'hidden' }}
                      >
                        <h4 style={{
                          fontSize: 'var(--font-size-base)',
                          marginBottom: 'var(--spacing-md)',
                          color: 'var(--text-primary)',
                          fontWeight: '700',
                        }}>
                          {t('services.content.caseStudies.resultsLabel')}
                        </h4>
                        <div style={{
                          display: 'grid',
                          gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
                          gap: 'var(--spacing-md)',
                        }}>
                          {study.results.map((result, index) => (
                            <div
                              key={index}
                              style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: 'var(--spacing-sm)',
                                background: 'var(--light-green)',
                                padding: 'var(--spacing-sm)',
                                borderRadius: 'var(--border-radius-md)',
                              }}
                            >
                              <result.icon
                                style={{
                                  color: 'var(--primary-color)',
                                  fontSize: 'var(--font-size-lg)',
                                }}
                              />
                              <span style={{ fontWeight: '600' }}>{t(`services.caseStudies.${study.id}.results.${index}`)}</span>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </>
          )}
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
            {t('services.cta.title')}
          </motion.h2>
          <motion.p
            variants={itemVariants}
            style={{
              fontSize: 'var(--font-size-lg)',
              marginBottom: 'var(--spacing-xl)',
              opacity: 0.9,
            }}
          >
            {t('services.cta.description')}
          </motion.p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 'var(--spacing-lg)', flexWrap: 'wrap' }}>
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/contact"
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
                {t('services.cta.contactUs')}
                <FaPhoneAlt />
              </Link>
            </motion.div>
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/how-it-works"
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
                {t('services.cta.learnMore')}
                <FaArrowRight />
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Services;