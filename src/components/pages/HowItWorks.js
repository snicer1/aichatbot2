import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  FaLightbulb,
  FaClipboardCheck,
  FaCogs,
  FaRocket,
  FaChartLine,
  FaUsersCog,
  FaCode,
  FaCheckCircle,
  FaPhoneAlt,
  FaArrowRight,
  FaQuestionCircle
} from 'react-icons/fa';

const HowItWorks = () => {
  const { t } = useTranslation();

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
      titleKey: 'howItWorks.processSteps.initialConsultation.title',
      descriptionKey: 'howItWorks.processSteps.initialConsultation.description'
    },
    {
      icon: FaClipboardCheck,
      titleKey: 'howItWorks.processSteps.analysisPlanning.title',
      descriptionKey: 'howItWorks.processSteps.analysisPlanning.description'
    },
    {
      icon: FaCogs,
      titleKey: 'howItWorks.processSteps.solutionDesign.title',
      descriptionKey: 'howItWorks.processSteps.solutionDesign.description'
    },
    {
      icon: FaCode,
      titleKey: 'howItWorks.processSteps.implementation.title',
      descriptionKey: 'howItWorks.processSteps.implementation.description'
    },
    {
      icon: FaUsersCog,
      titleKey: 'howItWorks.processSteps.trainingSupport.title',
      descriptionKey: 'howItWorks.processSteps.trainingSupport.description'
    },
    {
      icon: FaChartLine,
      titleKey: 'howItWorks.processSteps.monitoringOptimization.title',
      descriptionKey: 'howItWorks.processSteps.monitoringOptimization.description'
    }
  ];

  // Key benefits
  const benefits = [
    {
      icon: FaRocket,
      titleKey: 'howItWorks.benefits.increasedEfficiency.title',
      descriptionKey: 'howItWorks.benefits.increasedEfficiency.description'
    },
    {
      icon: FaChartLine,
      titleKey: 'howItWorks.benefits.costReduction.title',
      descriptionKey: 'howItWorks.benefits.costReduction.description'
    },
    {
      icon: FaCheckCircle,
      titleKey: 'howItWorks.benefits.improvedAccuracy.title',
      descriptionKey: 'howItWorks.benefits.improvedAccuracy.description'
    }
  ];

  // FAQ items
  const faqItems = [
    {
      questionKey: 'howItWorks.faq.implementationTime.question',
      answerKey: 'howItWorks.faq.implementationTime.answer'
    },
    {
      questionKey: 'howItWorks.faq.ongoingSupport.question',
      answerKey: 'howItWorks.faq.ongoingSupport.answer'
    },
    {
      questionKey: 'howItWorks.faq.dataSecurity.question',
      answerKey: 'howItWorks.faq.dataSecurity.answer'
    }
  ];

  // Intersection observer hooks
  const [heroRef, heroInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [processRef, processInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [benefitsRef, benefitsInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [faqRef, faqInView] = useInView({ threshold: 0.1, triggerOnce: true });
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
            {t('howItWorks.hero.title')}
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
            {t('howItWorks.hero.description')}
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
                {t('howItWorks.hero.getStarted')}
                <FaArrowRight />
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/services"
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
                {t('howItWorks.hero.ourServices')}
                <FaArrowRight />
              </Link>
            </motion.div>
          </motion.div>
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
          background: 'var(--light-green)',
        }}
      >
        <div className="container">
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
            {t('howItWorks.process.title')}
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
            {t('howItWorks.process.description')}
          </motion.p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 'var(--spacing-xl)',
          }}>
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                style={{
                  padding: 'var(--spacing-xl)',
                  borderRadius: 'var(--border-radius-lg)',
                  background: 'var(--medium-green)',
                  boxShadow: '0 4px 15px rgba(16, 185, 129, 0.1)',
                  transition: 'var(--transition-normal)',
                  position: 'relative',
                }}
              >
                <div style={{
                  position: 'absolute',
                  top: 'var(--spacing-md)',
                  right: 'var(--spacing-md)',
                  background: 'var(--primary-color)',
                  color: 'var(--text-light)',
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 'var(--font-size-base)',
                  fontWeight: 'bold',
                  boxShadow: '0 2px 5px rgba(16, 185, 129, 0.3)',
                }}>
                  {index + 1}
                </div>
                <step.icon
                  style={{
                    fontSize: 'var(--font-size-3xl)',
                    color: 'var(--primary-color)',
                    marginBottom: 'var(--spacing-md)',
                  }}
                />
                <h3 style={{
                  fontSize: 'var(--font-size-xl)',
                  marginBottom: 'var(--spacing-md)',
                  color: 'var(--text-primary)',
                  fontWeight: '700',
                }}>
                  {t(step.titleKey)}
                </h3>
                <p style={{
                  color: 'var(--text-secondary)',
                  lineHeight: 1.6,
                }}>
                  {t(step.descriptionKey)}
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
          background: 'linear-gradient(180deg, rgba(16, 185, 129, 0.05) 0%, rgba(255, 255, 255, 1) 100%)',
        }}
      >
        <div className="container">
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
            {t('howItWorks.benefits.title')}
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
            {t('howItWorks.benefits.description')}
          </motion.p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 'var(--spacing-xl)',
          }}>
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                style={{
                  textAlign: 'center',
                  padding: 'var(--spacing-xl)',
                  borderRadius: 'var(--border-radius-lg)',
                  background: 'white',
                  boxShadow: 'var(--shadow-md)',
                  transition: 'var(--transition-normal)',
                }}
              >
                <div style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  background: 'var(--light-green)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto var(--spacing-md)',
                }}>
                  <benefit.icon
                    style={{
                      fontSize: 'var(--font-size-3xl)',
                      color: 'var(--primary-color)',
                    }}
                  />
                </div>
                <h3 style={{
                  fontSize: 'var(--font-size-xl)',
                  marginBottom: 'var(--spacing-md)',
                  color: 'var(--text-primary)',
                  fontWeight: '700',
                }}>
                  {t(benefit.titleKey)}
                </h3>
                <p style={{
                  color: 'var(--text-secondary)',
                  lineHeight: 1.6,
                }}>
                  {t(benefit.descriptionKey)}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* FAQ Section */}
      <motion.section
        ref={faqRef}
        initial="hidden"
        animate={faqInView ? "visible" : "hidden"}
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
              fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
              marginBottom: 'var(--spacing-md)',
              color: 'var(--text-primary)',
              fontWeight: '800',
            }}
          >
            {t('howItWorks.faq.title')}
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
            {t('howItWorks.faq.description')}
          </motion.p>
          
          <div style={{
            maxWidth: '900px',
            margin: '0 auto',
          }}>
            {faqItems.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                style={{
                  marginBottom: 'var(--spacing-lg)',
                  background: 'var(--medium-green)',
                  borderRadius: 'var(--border-radius-lg)',
                  padding: 'var(--spacing-xl)',
                  boxShadow: '0 4px 10px rgba(16, 185, 129, 0.1)',
                }}
              >
                <div style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: 'var(--spacing-md)',
                }}>
                  <FaQuestionCircle style={{
                    color: 'var(--primary-color)',
                    fontSize: 'var(--font-size-xl)',
                    marginTop: '4px',
                  }} />
                  <div>
                    <h3 style={{
                      fontSize: 'var(--font-size-lg)',
                      fontWeight: '700',
                      marginBottom: 'var(--spacing-sm)',
                      color: 'var(--text-primary)',
                    }}>
                      {t(item.questionKey)}
                    </h3>
                    <p style={{
                      color: 'var(--text-secondary)',
                      lineHeight: 1.6,
                    }}>
                      {t(item.answerKey)}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
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
            {t('howItWorks.cta.title')}
          </motion.h2>
          <motion.p
            variants={itemVariants}
            style={{
              fontSize: 'var(--font-size-lg)',
              marginBottom: 'var(--spacing-xl)',
              opacity: 0.9,
            }}
          >
            {t('howItWorks.cta.description')}
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
                {t('howItWorks.cta.getStarted')}
                <FaPhoneAlt />
              </Link>
            </motion.div>
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/services"
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
                {t('howItWorks.cta.learnMore')}
                <FaArrowRight />
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default HowItWorks;