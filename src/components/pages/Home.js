import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  FaRobot,
  FaChartLine,
  FaCogs,
  FaUsersCog,
  FaDatabase,
  FaFileAlt,
  FaArrowRight,
  FaPhoneAlt,
  FaEnvelope
} from 'react-icons/fa';

const Home = () => {
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

  // Services data
  const services = [
    {
      icon: FaRobot,
      titleKey: 'home.services.chatbotDevelopment.title',
      descriptionKey: 'home.services.chatbotDevelopment.description',
      features: [
        'home.services.chatbotDevelopment.features.customerSupport',
        'home.services.chatbotDevelopment.features.leadGeneration',
        'home.services.chatbotDevelopment.features.leadQualification',
        'home.services.chatbotDevelopment.features.productRecommendation',
        'home.services.chatbotDevelopment.features.voiceBots',
        'home.services.chatbotDevelopment.features.customSolutions'
      ]
    },
    {
      icon: FaCogs,
      titleKey: 'home.services.workflowAutomations.title',
      descriptionKey: 'home.services.workflowAutomations.description',
      features: [
        'home.services.workflowAutomations.features.socialMediaAutomation',
        'home.services.workflowAutomations.features.crmManagement',
        'home.services.workflowAutomations.features.leadQualification',
        'home.services.workflowAutomations.features.onboardingProcess',
        'home.services.workflowAutomations.features.webScrapingSystems',
        'home.services.workflowAutomations.features.customSolutions'
      ]
    },
    {
      icon: FaUsersCog,
      titleKey: 'home.services.individualConsulting.title',
      descriptionKey: 'home.services.individualConsulting.description',
      features: [
        'home.services.individualConsulting.features.strategicPlanning',
        'home.services.individualConsulting.features.feasibilityEvaluations',
        'home.services.individualConsulting.features.identifyingUseCases',
        'home.services.individualConsulting.features.coachingForAIImplementation'
      ]
    }
  ];

  // Process steps
  const processSteps = [
    {
      number: 1,
      titleKey: 'home.process.steps.introCall.title',
      descriptionKey: 'home.process.steps.introCall.description'
    },
    {
      number: 2,
      titleKey: 'home.process.steps.strategy.title',
      descriptionKey: 'home.process.steps.strategy.description'
    },
    {
      number: 3,
      titleKey: 'home.process.steps.implementation.title',
      descriptionKey: 'home.process.steps.implementation.description'
    }
  ];

  // Team members
  const teamMembers = [
    {
      name: 'John Smith',
      roleKey: 'home.team.roles.aiSolutionsArchitect',
      bioKey: 'home.team.bios.johnSmith',
      image: 'https://randomuser.me/api/portraits/men/32.jpg'
    },
    {
      name: 'Sarah Johnson',
      roleKey: 'home.team.roles.automationSpecialist',
      bioKey: 'home.team.bios.sarahJohnson',
      image: 'https://randomuser.me/api/portraits/women/44.jpg'
    }
  ];

  // Intersection observer hooks
  const [heroRef, heroInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [servicesRef, servicesInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [processRef, processInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [teamRef, teamInView] = useInView({ threshold: 0.1, triggerOnce: true });
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
          minHeight: '90vh',
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
            {t('home.hero.title')}
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
            {t('home.hero.description')}
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
                {t('home.hero.letsTalk')}
                <FaPhoneAlt />
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
                {t('home.hero.ourServices')}
                <FaArrowRight />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Services Section */}
      <motion.section
        ref={servicesRef}
        initial="hidden"
        animate={servicesInView ? "visible" : "hidden"}
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
            {t('home.services.title')}
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
            {t('home.services.description')}
          </motion.p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 'var(--spacing-xl)',
          }}>
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                style={{
                  padding: 'var(--spacing-xl)',
                  borderRadius: 'var(--border-radius-lg)',
                  background: 'var(--medium-green)',
                  boxShadow: '0 4px 15px rgba(16, 185, 129, 0.1)',
                  transition: 'var(--transition-normal)',
                }}
              >
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                }}>
                  <service.icon
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
                    {t(service.titleKey)}
                  </h3>
                  
                  <ul style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: '0 0 var(--spacing-lg) 0',
                  }}>
                    {service.features.map((featureKey, idx) => (
                      <li key={idx} style={{
                        marginBottom: 'var(--spacing-xs)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: 'var(--spacing-xs)',
                      }}>
                        <span style={{ color: 'var(--text-primary)' }}>-</span> {t(featureKey)}
                      </li>
                    ))}
                  </ul>
                  
                  <div style={{ marginTop: 'auto' }}>
                    <Link
                      to={`/services/${t(service.titleKey).toLowerCase().replace(/\s+/g, '-')}`}
                      style={{
                        display: 'inline-block',
                        padding: 'var(--spacing-sm) var(--spacing-lg)',
                        background: 'linear-gradient(135deg, var(--gradient-start), var(--gradient-end))',
                        color: '#fff',
                        boxShadow: '0 4px 10px rgba(16, 185, 129, 0.2)',
                        borderRadius: 'var(--border-radius-md)',
                        textDecoration: 'none',
                        fontWeight: '600',
                        marginTop: 'var(--spacing-md)',
                      }}
                    >
                      {t('home.services.discoverMore')}
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Process Section */}
      <motion.section
        ref={processRef}
        initial="hidden"
        animate={processInView ? "visible" : "hidden"}
        variants={containerVariants}
        style={{
          padding: 'var(--spacing-2xl) 0',
          background: 'linear-gradient(180deg, rgba(16, 185, 129, 0.05) 0%, rgba(255, 255, 255, 1) 100%)',
        }}
      >
        <div className="container">
          <motion.h2
            variants={itemVariants}
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
              marginBottom: 'var(--spacing-md)',
              color: 'var(--text-primary)',
              fontWeight: '800',
            }}
          >
            {t('home.process.title')}
          </motion.h2>
          <motion.p
            variants={itemVariants}
            style={{
              fontSize: 'var(--font-size-lg)',
              marginBottom: 'var(--spacing-2xl)',
              maxWidth: '800px',
            }}
          >
            {t('home.process.description')}
          </motion.p>
          
          <motion.div
            variants={itemVariants}
            style={{
              marginBottom: 'var(--spacing-xl)',
            }}
          >
            <Link
              to="/contact"
              style={{
                display: 'inline-block',
                padding: 'var(--spacing-md) var(--spacing-xl)',
                background: 'linear-gradient(135deg, var(--gradient-start), var(--gradient-end))',
                color: '#fff',
                boxShadow: '0 4px 10px rgba(16, 185, 129, 0.2)',
                borderRadius: 'var(--border-radius-md)',
                textDecoration: 'none',
                fontWeight: '600',
              }}
            >
              {t('home.process.bookCall')}
            </Link>
          </motion.div>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 'var(--spacing-xl)',
            marginTop: 'var(--spacing-xl)',
          }}>
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                style={{
                  padding: 'var(--spacing-lg) 0',
                }}
              >
                <div style={{
                  width: '40px',
                  height: '40px',
                  background: 'var(--light-green)',
                  color: 'var(--primary-color)',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 'bold',
                  fontSize: 'var(--font-size-lg)',
                  marginBottom: 'var(--spacing-md)',
                }}>
                  {step.number}
                </div>
                <h3 style={{
                  fontSize: 'var(--font-size-xl)',
                  marginBottom: 'var(--spacing-md)',
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

      {/* Team Section */}
      <motion.section
        ref={teamRef}
        initial="hidden"
        animate={teamInView ? "visible" : "hidden"}
        variants={containerVariants}
        style={{
          padding: 'var(--spacing-2xl) 0',
          background: 'var(--light-green)',
        }}
      >
        <div className="container">
          <motion.h2
            variants={itemVariants}
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
              marginBottom: 'var(--spacing-md)',
              color: 'var(--text-primary)',
              fontWeight: '800',
              textAlign: 'center',
            }}
          >
            {t('home.team.title')}
          </motion.h2>
          <motion.p
            variants={itemVariants}
            style={{
              fontSize: 'var(--font-size-lg)',
              marginBottom: 'var(--spacing-2xl)',
              maxWidth: '800px',
              margin: '0 auto var(--spacing-2xl)',
              textAlign: 'center',
            }}
          >
            {t('home.team.description')}
          </motion.p>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 'var(--spacing-2xl)',
            justifyContent: 'center',
          }}>
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                style={{
                  textAlign: 'center',
                }}
              >
                <div style={{
                  width: '100%',
                  maxWidth: '280px',
                  height: '280px',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  margin: '0 auto var(--spacing-md)',
                  background: 'var(--medium-green)',
                  boxShadow: '0 8px 20px rgba(16, 185, 129, 0.15)',
                }}>
                  <img
                    src={member.image}
                    alt={member.name}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                  />
                </div>
                <h3 style={{
                  fontSize: 'var(--font-size-xl)',
                  marginBottom: 'var(--spacing-xs)',
                  fontWeight: '700',
                }}>
                  {member.name}
                </h3>
                <p style={{
                  color: 'var(--text-secondary)',
                  marginBottom: 'var(--spacing-md)',
                  fontWeight: '500',
                }}>
                  {t(member.roleKey)}
                </p>
                <p style={{
                  color: 'var(--text-secondary)',
                  lineHeight: 1.6,
                  maxWidth: '400px',
                  margin: '0 auto',
                }}>
                  {t(member.bioKey)}
                </p>
                <div style={{
                  marginTop: 'var(--spacing-md)',
                  display: 'flex',
                  justifyContent: 'center',
                }}>
                  <a
                    href="#"
                    style={{
                      color: 'var(--primary-color)',
                      marginRight: 'var(--spacing-md)',
                    }}
                  >
                    in
                  </a>
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
            {t('home.cta.title')}
          </motion.h2>
          <motion.p
            variants={itemVariants}
            style={{
              fontSize: 'var(--font-size-lg)',
              marginBottom: 'var(--spacing-xl)',
              opacity: 0.9,
            }}
          >
            {t('home.cta.description')}
          </motion.p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 'var(--spacing-lg)' }}>
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
                {t('home.cta.contactUs')}
                <FaPhoneAlt />
              </Link>
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
                {t('home.cta.emailUs')}
                <FaEnvelope />
              </a>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Home;