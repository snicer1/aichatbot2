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
  FaCheckCircle,
  FaPhoneAlt,
  FaArrowRight,
  FaQuestionCircle
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

  // FAQ items
  const faqItems = [
    {
      question: {
        en: 'How long does implementation typically take?',
        pl: 'Jak długo zwykle trwa wdrożenie?'
      },
      answer: {
        en: 'Implementation timelines vary based on project complexity, but typically range from 2-8 weeks. We provide detailed timelines during the planning phase.',
        pl: 'Czas wdrożenia zależy od złożoności projektu, ale zazwyczaj wynosi od 2 do 8 tygodni. Dostarczamy szczegółowe harmonogramy podczas fazy planowania.'
      }
    },
    {
      question: {
        en: 'Do you offer ongoing support after implementation?',
        pl: 'Czy oferujecie ciągłe wsparcie po wdrożeniu?'
      },
      answer: {
        en: 'Yes, we provide comprehensive support packages to ensure your solution continues to perform optimally. Our team is available for troubleshooting, updates, and optimization.',
        pl: 'Tak, oferujemy kompleksowe pakiety wsparcia, aby zapewnić optymalne działanie Twojego rozwiązania. Nasz zespół jest dostępny do rozwiązywania problemów, aktualizacji i optymalizacji.'
      }
    },
    {
      question: {
        en: 'How do you ensure data security during implementation?',
        pl: 'Jak zapewniacie bezpieczeństwo danych podczas wdrażania?'
      },
      answer: {
        en: 'We follow industry best practices for data security, including encryption, secure access controls, and compliance with relevant regulations like GDPR. We can sign NDAs and provide detailed security documentation.',
        pl: 'Stosujemy najlepsze praktyki branżowe w zakresie bezpieczeństwa danych, w tym szyfrowanie, bezpieczne kontrole dostępu i zgodność z odpowiednimi przepisami, takimi jak RODO. Możemy podpisać umowy o zachowaniu poufności i dostarczyć szczegółową dokumentację bezpieczeństwa.'
      }
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
            {language === 'en' ? 'How It Works' : 'Jak To Działa'}
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
              ? 'Discover our proven process for implementing AI-powered automation solutions in your business. From initial consultation to ongoing optimization, we guide you through every step.'
              : 'Poznaj nasz sprawdzony proces wdrażania rozwiązań automatyzacji opartych na AI w Twojej firmie. Od początkowej konsultacji po ciągłą optymalizację, przeprowadzimy Cię przez każdy krok.'}
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
                {language === 'en' ? "Get Started" : 'Rozpocznij'}
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
                {language === 'en' ? "Our Services" : 'Nasze Usługi'}
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
            {language === 'en' ? 'Our Process' : 'Nasz Proces'}
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
              ? 'We follow a structured approach to ensure successful implementation of AI solutions that deliver real business value.'
              : 'Stosujemy ustrukturyzowane podejście, aby zapewnić udane wdrożenie rozwiązań AI, które dostarczają rzeczywistą wartość biznesową.'}
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
            {language === 'en' ? 'Key Benefits' : 'Główne Korzyści'}
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
              ? 'Our AI-powered automation solutions deliver tangible benefits that transform your business operations.'
              : 'Nasze rozwiązania automatyzacji oparte na AI zapewniają wymierne korzyści, które transformują działalność Twojej firmy.'}
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
                  {benefit.title[language]}
                </h3>
                <p style={{
                  color: 'var(--text-secondary)',
                  lineHeight: 1.6,
                }}>
                  {benefit.description[language]}
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
            {language === 'en' ? 'Frequently Asked Questions' : 'Często Zadawane Pytania'}
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
              ? 'Find answers to common questions about our implementation process.'
              : 'Znajdź odpowiedzi na często zadawane pytania dotyczące naszego procesu wdrażania.'}
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
                      {item.question[language]}
                    </h3>
                    <p style={{
                      color: 'var(--text-secondary)',
                      lineHeight: 1.6,
                    }}>
                      {item.answer[language]}
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
            {language === 'en'
              ? 'Ready to Start Your Digital Transformation?'
              : 'Gotowy na Cyfrową Transformację?'}
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
              ? 'Contact us today to discuss how we can help automate your business processes'
              : 'Skontaktuj się z nami już dziś, aby omówić, jak możemy pomóc zautomatyzować Twoje procesy biznesowe'}
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
                {language === 'en' ? 'Get Started' : 'Rozpocznij'}
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
                {language === 'en' ? 'Learn More' : 'Dowiedz się więcej'}
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