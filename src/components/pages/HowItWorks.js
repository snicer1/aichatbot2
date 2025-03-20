import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import {
  FaLightbulb,
  FaClipboardCheck,
  FaCogs,
  FaRocket,
  FaChartLine,
  FaUsersCog,
  FaCode,
  FaCheckCircle
} from 'react-icons/fa';

const HowItWorks = () => {
  const [language] = useState('en');

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

  // Process steps
  const processSteps = [
    {
      icon: FaLightbulb,
      title: { en: 'Initial Consultation', pl: 'Wstępna Konsultacja' },
      description: {
        en: 'We begin by understanding your business needs, challenges, and goals through a detailed consultation.',
        pl: 'Zaczynamy od zrozumienia potrzeb, wyzwań i celów Twojej firmy poprzez szczegółową konsultację.'
      }
    },
    {
      icon: FaClipboardCheck,
      title: { en: 'Analysis & Planning', pl: 'Analiza i Planowanie' },
      description: {
        en: 'Our experts analyze your processes and develop a customized automation strategy.',
        pl: 'Nasi eksperci analizują Twoje procesy i opracowują dostosowaną strategię automatyzacji.'
      }
    },
    {
      icon: FaCogs,
      title: { en: 'Solution Design', pl: 'Projektowanie Rozwiązania' },
      description: {
        en: 'We design AI-powered solutions tailored to your specific requirements and workflow.',
        pl: 'Projektujemy rozwiązania oparte na AI dostosowane do Twoich konkretnych wymagań i przepływu pracy.'
      }
    },
    {
      icon: FaCode,
      title: { en: 'Implementation', pl: 'Wdrożenie' },
      description: {
        en: 'Our team implements the solution while ensuring minimal disruption to your operations.',
        pl: 'Nasz zespół wdraża rozwiązanie, zapewniając minimalne zakłócenia w działalności.'
      }
    },
    {
      icon: FaUsersCog,
      title: { en: 'Training & Support', pl: 'Szkolenie i Wsparcie' },
      description: {
        en: 'We provide comprehensive training and ongoing support to ensure smooth adoption.',
        pl: 'Zapewniamy kompleksowe szkolenie i ciągłe wsparcie dla sprawnej adaptacji.'
      }
    },
    {
      icon: FaChartLine,
      title: { en: 'Monitoring & Optimization', pl: 'Monitorowanie i Optymalizacja' },
      description: {
        en: 'Continuous monitoring and optimization ensure maximum efficiency and ROI.',
        pl: 'Ciągłe monitorowanie i optymalizacja zapewniają maksymalną wydajność i zwrot z inwestycji.'
      }
    }
  ];

  // Key benefits
  const benefits = [
    {
      icon: FaRocket,
      title: { en: 'Increased Efficiency', pl: 'Zwiększona Wydajność' },
      description: {
        en: 'Automate repetitive tasks and streamline workflows for better productivity.',
        pl: 'Automatyzacja powtarzalnych zadań i usprawnienie przepływów pracy dla lepszej produktywności.'
      }
    },
    {
      icon: FaChartLine,
      title: { en: 'Cost Reduction', pl: 'Redukcja Kosztów' },
      description: {
        en: 'Minimize operational costs through intelligent automation and optimization.',
        pl: 'Minimalizacja kosztów operacyjnych poprzez inteligentną automatyzację i optymalizację.'
      }
    },
    {
      icon: FaCheckCircle,
      title: { en: 'Improved Accuracy', pl: 'Zwiększona Dokładność' },
      description: {
        en: 'Eliminate human error and ensure consistent quality in all processes.',
        pl: 'Eliminacja błędów ludzkich i zapewnienie spójnej jakości we wszystkich procesach.'
      }
    }
  ];

  // Intersection observer hooks
  const [headerRef, headerInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [processRef, processInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [benefitsRef, benefitsInView] = useInView({ threshold: 0.1, triggerOnce: true });

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
            {language === 'en' ? 'How It Works' : 'Jak To Działa'}
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
              ? 'Discover our proven process for implementing AI-powered automation solutions in your business'
              : 'Poznaj nasz sprawdzony proces wdrażania rozwiązań automatyzacji opartych na AI w Twojej firmie'}
          </motion.p>
        </div>
      </motion.section>

      {/* Process Steps Section */}
      <motion.section
        ref={processRef}
        initial="hidden"
        animate={processInView ? "visible" : "hidden"}
        variants={containerVariants}
        style={{
          padding: 'var(--spacing-2xl) 0',
          background: 'var(--background-color)',
        }}
      >
        <div className="container">
          <motion.h2
            variants={itemVariants}
            className="text-center"
            style={{
              fontSize: 'var(--font-size-3xl)',
              marginBottom: 'var(--spacing-xl)',
            }}
          >
            {language === 'en' ? 'Our Process' : 'Nasz Proces'}
          </motion.h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: ['1fr', '1fr 1fr', 'repeat(3, 1fr)'],
            gap: 'var(--spacing-xl)',
          }}>
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                style={{
                  background: 'white',
                  padding: 'var(--spacing-xl)',
                  borderRadius: 'var(--border-radius-lg)',
                  boxShadow: 'var(--shadow-md)',
                  position: 'relative',
                }}
              >
                <div style={{
                  position: 'absolute',
                  top: 'var(--spacing-md)',
                  right: 'var(--spacing-md)',
                  background: 'var(--primary-color)',
                  color: 'var(--text-light)',
                  width: '24px',
                  height: '24px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 'var(--font-size-sm)',
                }}>
                  {index + 1}
                </div>
                <step.icon
                  style={{
                    fontSize: 'var(--font-size-2xl)',
                    color: 'var(--primary-color)',
                    marginBottom: 'var(--spacing-md)',
                  }}
                />
                <h3 style={{
                  fontSize: 'var(--font-size-xl)',
                  marginBottom: 'var(--spacing-md)',
                }}>
                  {step.title[language]}
                </h3>
                <p style={{
                  color: 'var(--text-secondary)',
                }}>
                  {step.description[language]}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Benefits Section */}
      <motion.section
        ref={benefitsRef}
        initial="hidden"
        animate={benefitsInView ? "visible" : "hidden"}
        variants={containerVariants}
        style={{
          padding: 'var(--spacing-2xl) 0',
          background: 'var(--dark-background)',
          color: 'var(--text-light)',
        }}
      >
        <div className="container">
          <motion.h2
            variants={itemVariants}
            className="text-center"
            style={{
              fontSize: 'var(--font-size-3xl)',
              marginBottom: 'var(--spacing-xl)',
            }}
          >
            {language === 'en' ? 'Key Benefits' : 'Główne Korzyści'}
          </motion.h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: ['1fr', '1fr', 'repeat(3, 1fr)'],
            gap: 'var(--spacing-xl)',
          }}>
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                style={{
                  textAlign: 'center',
                }}
              >
                <benefit.icon
                  style={{
                    fontSize: 'var(--font-size-3xl)',
                    color: 'var(--accent-color)',
                    marginBottom: 'var(--spacing-md)',
                  }}
                />
                <h3 style={{
                  fontSize: 'var(--font-size-xl)',
                  marginBottom: 'var(--spacing-md)',
                }}>
                  {benefit.title[language]}
                </h3>
                <p>
                  {benefit.description[language]}
                </p>
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
          background: 'var(--background-color)',
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
              ? 'Ready to Start Your Digital Transformation?'
              : 'Gotowy na Cyfrową Transformację?'}
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
              ? 'Contact us today to discuss how we can help automate your business processes'
              : 'Skontaktuj się z nami już dziś, aby omówić, jak możemy pomóc zautomatyzować Twoje procesy biznesowe'}
          </motion.p>
          <motion.div
            variants={itemVariants}
          >
            <Link
              to="/contact"
              style={{
                background: 'var(--primary-color)',
                color: 'var(--text-light)',
                padding: 'var(--spacing-md) var(--spacing-xl)',
                borderRadius: 'var(--border-radius-md)',
                fontWeight: '600',
                display: 'inline-block',
              }}
            >
              {language === 'en' ? 'Get Started' : 'Rozpocznij'}
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default HowItWorks;