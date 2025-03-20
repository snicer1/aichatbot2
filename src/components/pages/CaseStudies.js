import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  FaIndustry,
  FaHospital,
  FaShoppingCart,
  FaUniversity,
  FaChartLine,
  FaClock,
  FaUsers,
  FaDollarSign
} from 'react-icons/fa';

const CaseStudies = () => {
  const { t } = useTranslation();
  const [selectedCase, setSelectedCase] = useState(null);

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
  const [headerRef, headerInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [casesRef, casesInView] = useInView({ threshold: 0.1, triggerOnce: true });

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
            {t('caseStudies.hero.title')}
          </motion.h1>
          <motion.p
            variants={itemVariants}
            style={{
              fontSize: 'var(--font-size-lg)',
              maxWidth: '800px',
              margin: '0 auto',
            }}
          >
            {t('caseStudies.hero.description')}
          </motion.p>
        </div>
      </motion.section>

      {/* Case Studies Grid */}
      <motion.section
        ref={casesRef}
        initial="hidden"
        animate={casesInView ? "visible" : "hidden"}
        variants={containerVariants}
        style={{
          padding: 'var(--spacing-2xl) 0',
          background: 'var(--background-color)',
        }}
      >
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: ['1fr', '1fr 1fr', 'repeat(2, 1fr)'],
            gap: 'var(--spacing-xl)',
          }}>
            {caseStudies.map((study) => (
              <motion.div
                key={study.id}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                style={{
                  background: 'white',
                  borderRadius: 'var(--border-radius-lg)',
                  overflow: 'hidden',
                  boxShadow: 'var(--shadow-md)',
                  cursor: 'pointer',
                }}
                onClick={() => setSelectedCase(selectedCase === study.id ? null : study.id)}
              >
                <div style={{
                  background: 'var(--primary-color)',
                  padding: 'var(--spacing-lg)',
                  color: 'var(--text-light)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--spacing-md)',
                }}>
                  <study.icon style={{ fontSize: 'var(--font-size-2xl)' }} />
                  <h3 style={{ margin: 0 }}>{t(`caseStudies.studies.${study.id}.title`)}</h3>
                </div>
                
                <div style={{ padding: 'var(--spacing-lg)' }}>
                  <p style={{
                    fontSize: 'var(--font-size-lg)',
                    color: 'var(--text-secondary)',
                    marginBottom: 'var(--spacing-md)',
                  }}>
                    {t(`caseStudies.studies.${study.id}.company`)}
                  </p>
                  
                  <h4 style={{
                    fontSize: 'var(--font-size-base)',
                    marginBottom: 'var(--spacing-sm)',
                  }}>
                    {t('caseStudies.labels.challenge')}
                  </h4>
                  <p style={{ marginBottom: 'var(--spacing-md)' }}>
                    {t(`caseStudies.studies.${study.id}.challenge`)}
                  </p>

                  <h4 style={{
                    fontSize: 'var(--font-size-base)',
                    marginBottom: 'var(--spacing-sm)',
                  }}>
                    {t('caseStudies.labels.solution')}
                  </h4>
                  <p style={{ marginBottom: 'var(--spacing-md)' }}>
                    {t(`caseStudies.studies.${study.id}.solution`)}
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
                    }}>
                      {t('caseStudies.labels.results')}
                    </h4>
                    <div style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                      gap: 'var(--spacing-md)',
                    }}>
                      {study.results.map((result, index) => (
                        <div
                          key={index}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 'var(--spacing-sm)',
                          }}
                        >
                          <result.icon
                            style={{
                              color: 'var(--primary-color)',
                              fontSize: 'var(--font-size-xl)',
                            }}
                          />
                          <span>{t(`caseStudies.studies.${study.id}.results.${index}`)}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </div>
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
          padding: 'var(--spacing-2xl) 0',
          background: 'var(--dark-background)',
          color: 'var(--text-light)',
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
            {t('caseStudies.cta.title')}
          </motion.h2>
          <motion.p
            variants={itemVariants}
            style={{
              fontSize: 'var(--font-size-lg)',
              maxWidth: '600px',
              margin: '0 auto var(--spacing-xl)',
            }}
          >
            {t('caseStudies.cta.description')}
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
              {t('caseStudies.cta.contactButton')}
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default CaseStudies;