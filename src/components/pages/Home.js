import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
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

  // Services data
  const services = [
    {
      icon: FaRobot,
      title: { en: 'Chatbot Development', pl: 'Rozwój Chatbotów' },
      description: {
        en: 'Intelligent conversational agents for customer support and process automation',
        pl: 'Inteligentne systemy konwersacyjne do obsługi klienta i automatyzacji procesów'
      },
      features: [
        { en: 'customer support', pl: 'obsługa klienta' },
        { en: 'lead generation', pl: 'generowanie leadów' },
        { en: 'lead qualification', pl: 'kwalifikacja leadów' },
        { en: 'product recommendation', pl: 'rekomendacja produktów' },
        { en: 'voice bots', pl: 'boty głosowe' },
        { en: 'custom solutions', pl: 'rozwiązania niestandardowe' }
      ]
    },
    {
      icon: FaCogs,
      title: { en: 'Workflow Automations', pl: 'Automatyzacja Procesów' },
      description: {
        en: 'Streamline operations with intelligent automation',
        pl: 'Usprawnianie operacji dzięki inteligentnej automatyzacji'
      },
      features: [
        { en: 'social media automation', pl: 'automatyzacja mediów społecznościowych' },
        { en: 'CRM management', pl: 'zarządzanie CRM' },
        { en: 'lead qualification', pl: 'kwalifikacja leadów' },
        { en: 'onboarding process', pl: 'proces wdrażania' },
        { en: 'web scraping systems', pl: 'systemy scrapingu stron' },
        { en: 'custom solutions', pl: 'rozwiązania niestandardowe' }
      ]
    },
    {
      icon: FaUsersCog,
      title: { en: 'Individual Consulting', pl: 'Indywidualne Doradztwo' },
      description: {
        en: 'Expert guidance for your AI implementation journey',
        pl: 'Eksperckie wsparcie w procesie wdrażania AI'
      },
      features: [
        { en: 'Strategic Planning', pl: 'Planowanie Strategiczne' },
        { en: 'Feasibility Evaluations', pl: 'Oceny Wykonalności' },
        { en: 'Identifying Use Cases', pl: 'Identyfikacja Przypadków Użycia' },
        { en: 'Coaching for AI Implementation', pl: 'Coaching Wdrożenia AI' }
      ]
    }
  ];

  // Process steps
  const processSteps = [
    {
      number: 1,
      title: { en: 'Intro Call', pl: 'Rozmowa Wstępna' },
      description: {
        en: 'Schedule a call to explore our compatibility and discuss how our services can enhance your business. We aim to learn about your current operations and identify ways to add value.',
        pl: 'Zaplanuj rozmowę, aby zbadać naszą kompatybilność i omówić, jak nasze usługi mogą ulepszyć Twoją firmę. Dążymy do poznania Twoich obecnych operacji i zidentyfikowania sposobów na dodanie wartości.'
      }
    },
    {
      number: 2,
      title: { en: 'Strategy', pl: 'Strategia' },
      description: {
        en: 'After understanding your needs, we\'ll set up a follow-up call to present our proposal. This will cover the expected deliverables, implementation strategy, timelines and pricing details.',
        pl: 'Po zrozumieniu Twoich potrzeb, ustalimy kolejną rozmowę, aby przedstawić naszą propozycję. Obejmie ona oczekiwane rezultaty, strategię wdrożenia, harmonogramy i szczegóły cenowe.'
      }
    },
    {
      number: 3,
      title: { en: 'Implementation', pl: 'Wdrożenie' },
      description: {
        en: 'After receiving your go-ahead, our team will start the process, ensuring you\'re updated throughout and maintaining close collaboration via our Slack channel.',
        pl: 'Po otrzymaniu Twojej zgody, nasz zespół rozpocznie proces, zapewniając Ci aktualizacje przez cały czas i utrzymując ścisłą współpracę za pośrednictwem naszego kanału Slack.'
      }
    }
  ];

  // Team members
  const teamMembers = [
    {
      name: 'John Smith',
      role: { en: 'AI Solutions Architect', pl: 'Architekt Rozwiązań AI' },
      bio: {
        en: 'With over 10 years of experience in AI and machine learning, John leads our technical implementations.',
        pl: 'Z ponad 10-letnim doświadczeniem w AI i uczeniu maszynowym, John prowadzi nasze wdrożenia techniczne.'
      },
      image: 'https://randomuser.me/api/portraits/men/32.jpg'
    },
    {
      name: 'Sarah Johnson',
      role: { en: 'Automation Specialist', pl: 'Specjalista ds. Automatyzacji' },
      bio: {
        en: 'Sarah has helped dozens of companies streamline their operations through intelligent automation solutions.',
        pl: 'Sarah pomogła dziesiątkom firm usprawnić ich działania poprzez inteligentne rozwiązania automatyzacji.'
      },
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
            {language === 'en'
              ? 'We Build AI Automations For Customer Support'
              : 'Tworzymy Automatyzacje AI Dla Obsługi Klienta'}
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
              ? 'Embrace AI to revolutionize your customer support, supercharge your lead generation, and automate your workflows. Book a call to discuss a tailor-made strategy that works for you.'
              : 'Wykorzystaj AI, aby zrewolucjonizować obsługę klienta, zwiększyć generowanie leadów i zautomatyzować procesy. Umów rozmowę, aby omówić strategię dopasowaną do Twoich potrzeb.'}
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
                {language === 'en' ? "Let's talk" : 'Porozmawiajmy'}
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
                {language === 'en' ? "Our Services" : 'Nasze Usługi'}
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
            {language === 'en' ? 'Our Services' : 'Nasze Usługi'}
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
            {language === 'en'
              ? 'We support you in discovering and adapting advanced AI technologies, ensuring a smooth transition from initial concept to full implementation and subsequent stages.'
              : 'Wspieramy Cię w odkrywaniu i adaptacji zaawansowanych technologii AI, zapewniając płynne przejście od początkowej koncepcji do pełnego wdrożenia i kolejnych etapów.'}
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
                    {service.title[language]}
                  </h3>
                  
                  <ul style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: '0 0 var(--spacing-lg) 0',
                  }}>
                    {service.features.map((feature, idx) => (
                      <li key={idx} style={{
                        marginBottom: 'var(--spacing-xs)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: 'var(--spacing-xs)',
                      }}>
                        <span style={{ color: 'var(--text-primary)' }}>-</span> {feature[language]}
                      </li>
                    ))}
                  </ul>
                  
                  <div style={{ marginTop: 'auto' }}>
                    <Link
                      to={`/services/${service.title.en.toLowerCase().replace(/\s+/g, '-')}`}
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
                      {language === 'en' ? 'Discover more' : 'Odkryj więcej'}
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
            {language === 'en' ? 'Our Process' : 'Nasz Proces'}
          </motion.h2>
          <motion.p
            variants={itemVariants}
            style={{
              fontSize: 'var(--font-size-lg)',
              marginBottom: 'var(--spacing-2xl)',
              maxWidth: '800px',
            }}
          >
            {language === 'en'
              ? 'Enjoy a streamlined start with us, ditching traditional complex agency onboarding. Ready to begin? Book your intro call now.'
              : 'Ciesz się usprawnioną współpracą z nami, pomijając tradycyjne skomplikowane wdrażanie agencji. Gotowy, aby zacząć? Zarezerwuj swoją rozmowę wstępną teraz.'}
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
              {language === 'en' ? 'Book a call' : 'Umów rozmowę'}
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
                  {step.title[language]}
                </h3>
                <p style={{
                  color: 'var(--text-secondary)',
                  lineHeight: 1.6,
                }}>
                  {step.description[language]}
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
            {language === 'en' ? 'Our Team' : 'Nasz Zespół'}
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
            {language === 'en'
              ? 'Your Partners in AI-Driven Transformation'
              : 'Twoi Partnerzy w Transformacji Napędzanej przez AI'}
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
                  {member.role[language]}
                </p>
                <p style={{
                  color: 'var(--text-secondary)',
                  lineHeight: 1.6,
                  maxWidth: '400px',
                  margin: '0 auto',
                }}>
                  {member.bio[language]}
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
            {language === 'en'
              ? 'Got Questions?'
              : 'Masz Pytania?'}
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
              ? 'Schedule your consultation with AIstream today.'
              : 'Zaplanuj swoją konsultację z AIstream już dziś.'}
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
                {language === 'en' ? 'Contact Us' : 'Skontaktuj się z Nami'}
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

export default Home;