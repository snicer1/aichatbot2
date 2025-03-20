import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  FaSearch,
  FaTag,
  FaClock,
  FaUser,
  FaArrowRight
} from 'react-icons/fa';

const Blog = () => {
  const { t, i18n } = useTranslation();
  const language = i18n.language;
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

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

  // Blog categories
  const categories = [
    { id: 'all', label: { en: 'All', pl: 'Wszystkie' } },
    { id: 'ai', label: { en: 'AI Technology', pl: 'Technologia AI' } },
    { id: 'automation', label: { en: 'Automation', pl: 'Automatyzacja' } },
    { id: 'business', label: { en: 'Business', pl: 'Biznes' } },
    { id: 'trends', label: { en: 'Industry Trends', pl: 'Trendy Branżowe' } }
  ];

  // Blog posts data
  const blogPosts = [
    {
      id: 1,
      title: {
        en: 'The Future of AI in Business Process Automation',
        pl: 'Przyszłość AI w Automatyzacji Procesów Biznesowych'
      },
      excerpt: {
        en: 'Explore how artificial intelligence is revolutionizing business process automation and what it means for the future of work.',
        pl: 'Odkryj, jak sztuczna inteligencja rewolucjonizuje automatyzację procesów biznesowych i co to oznacza dla przyszłości pracy.'
      },
      category: 'ai',
      author: { en: 'John Smith', pl: 'John Smith' },
      date: '2024-01-20',
      readTime: { en: '5 min read', pl: '5 min czytania' },
      image: 'ai-future.jpg'
    },
    {
      id: 2,
      title: {
        en: 'Implementing Chatbots: Best Practices and Common Pitfalls',
        pl: 'Wdrażanie Chatbotów: Najlepsze Praktyki i Częste Pułapki'
      },
      excerpt: {
        en: 'Learn the essential best practices for successful chatbot implementation and how to avoid common mistakes.',
        pl: 'Poznaj najważniejsze praktyki skutecznego wdrażania chatbotów i jak unikać typowych błędów.'
      },
      category: 'automation',
      author: { en: 'Sarah Johnson', pl: 'Sarah Johnson' },
      date: '2024-01-18',
      readTime: { en: '8 min read', pl: '8 min czytania' },
      image: 'chatbots.jpg'
    },
    {
      id: 3,
      title: {
        en: '2024 Trends in Business Process Automation',
        pl: 'Trendy w Automatyzacji Procesów Biznesowych 2024'
      },
      excerpt: {
        en: 'Discover the latest trends shaping the future of business process automation and digital transformation.',
        pl: 'Odkryj najnowsze trendy kształtujące przyszłość automatyzacji procesów biznesowych i transformacji cyfrowej.'
      },
      category: 'trends',
      author: { en: 'Michael Chen', pl: 'Michael Chen' },
      date: '2024-01-15',
      readTime: { en: '6 min read', pl: '6 min czytania' },
      image: 'trends.jpg'
    },
    {
      id: 4,
      title: {
        en: 'ROI of AI Implementation: A Case Study Analysis',
        pl: 'ROI Wdrożenia AI: Analiza Przypadków'
      },
      excerpt: {
        en: 'A detailed analysis of the return on investment for AI implementation across different industries.',
        pl: 'Szczegółowa analiza zwrotu z inwestycji we wdrożenie AI w różnych branżach.'
      },
      category: 'business',
      author: { en: 'Emma Davis', pl: 'Emma Davis' },
      date: '2024-01-12',
      readTime: { en: '10 min read', pl: '10 min czytania' },
      image: 'roi.jpg'
    }
  ];

  // Filter posts based on search and category
  const filteredPosts = blogPosts.filter(post => {
    const postTitle = t(`blog.posts.${post.id}.title`).toLowerCase();
    const postExcerpt = t(`blog.posts.${post.id}.excerpt`).toLowerCase();
    const matchesSearch = postTitle.includes(searchTerm.toLowerCase()) ||
                         postExcerpt.includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Intersection observer hooks
  const [headerRef, headerInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [contentRef, contentInView] = useInView({ threshold: 0.1, triggerOnce: true });

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
            {t('blog.hero.title')}
          </motion.h1>
          <motion.p
            variants={itemVariants}
            style={{
              fontSize: 'var(--font-size-lg)',
              maxWidth: '800px',
              margin: '0 auto',
            }}
          >
            {t('blog.hero.description')}
          </motion.p>
        </div>
      </motion.section>

      {/* Search and Filter Section */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        style={{
          padding: 'var(--spacing-xl) 0',
          background: 'var(--background-color)',
          borderBottom: '1px solid var(--border-color)',
        }}
      >
        <div className="container">
          <div style={{
            display: 'flex',
            flexDirection: ['column', 'row'],
            gap: 'var(--spacing-md)',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
            {/* Search */}
            <motion.div
              variants={itemVariants}
              style={{
                position: 'relative',
                flex: 1,
              }}
            >
              <FaSearch style={{
                position: 'absolute',
                left: 'var(--spacing-md)',
                top: '50%',
                transform: 'translateY(-50%)',
                color: 'var(--text-secondary)',
              }} />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder={t('blog.search.placeholder')}
                style={{
                  width: '100%',
                  padding: 'var(--spacing-md) var(--spacing-md) var(--spacing-md) var(--spacing-2xl)',
                  borderRadius: 'var(--border-radius-md)',
                  border: '1px solid var(--border-color)',
                  fontSize: 'var(--font-size-base)',
                }}
              />
            </motion.div>

            {/* Categories */}
            <motion.div
              variants={itemVariants}
              style={{
                display: 'flex',
                gap: 'var(--spacing-sm)',
                flexWrap: 'wrap',
                justifyContent: 'center',
              }}
            >
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  style={{
                    padding: 'var(--spacing-sm) var(--spacing-md)',
                    borderRadius: 'var(--border-radius-md)',
                    border: 'none',
                    background: selectedCategory === category.id
                      ? 'var(--primary-color)'
                      : 'var(--background-color)',
                    color: selectedCategory === category.id
                      ? 'var(--text-light)'
                      : 'var(--text-primary)',
                    cursor: 'pointer',
                    transition: 'var(--transition-fast)',
                  }}
                >
                  {t(`blog.categories.${category.id}`)}
                </button>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Blog Posts Grid */}
      <motion.section
        ref={contentRef}
        initial="hidden"
        animate={contentInView ? "visible" : "hidden"}
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
            {filteredPosts.map((post) => (
              <motion.article
                key={post.id}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                style={{
                  background: 'white',
                  borderRadius: 'var(--border-radius-lg)',
                  overflow: 'hidden',
                  boxShadow: 'var(--shadow-md)',
                }}
              >
                {/* Post Image */}
                <div style={{
                  height: '200px',
                  background: 'var(--primary-color)',
                  opacity: 0.8,
                }} />

                {/* Post Content */}
                <div style={{ padding: 'var(--spacing-lg)' }}>
                  {/* Category */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 'var(--spacing-sm)',
                    marginBottom: 'var(--spacing-md)',
                  }}>
                    <FaTag style={{ color: 'var(--primary-color)' }} />
                    <span style={{ color: 'var(--text-secondary)' }}>
                      {t(`blog.categories.${post.category}`)}
                    </span>
                  </div>

                  {/* Title */}
                  <h2 style={{
                    fontSize: 'var(--font-size-xl)',
                    marginBottom: 'var(--spacing-md)',
                  }}>
                    {t(`blog.posts.${post.id}.title`)}
                  </h2>

                  {/* Excerpt */}
                  <p style={{
                    color: 'var(--text-secondary)',
                    marginBottom: 'var(--spacing-lg)',
                  }}>
                    {t(`blog.posts.${post.id}.excerpt`)}
                  </p>

                  {/* Meta */}
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    borderTop: '1px solid var(--border-color)',
                    paddingTop: 'var(--spacing-md)',
                  }}>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 'var(--spacing-md)',
                      color: 'var(--text-secondary)',
                      fontSize: 'var(--font-size-sm)',
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-xs)' }}>
                        <FaUser />
                        <span>{t(`blog.posts.${post.id}.author`)}</span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-xs)' }}>
                        <FaClock />
                        <span>{t(`blog.posts.${post.id}.readTime`)}</span>
                      </div>
                    </div>
                    <Link
                      to={`/blog/${post.id}`}
                      style={{
                        color: 'var(--primary-color)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: 'var(--spacing-xs)',
                      }}
                    >
                      {t('blog.readMore')}
                      <FaArrowRight />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Newsletter Section */}
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
            {t('blog.newsletter.title')}
          </motion.h2>
          <motion.p
            variants={itemVariants}
            style={{
              fontSize: 'var(--font-size-lg)',
              maxWidth: '600px',
              margin: '0 auto var(--spacing-xl)',
            }}
          >
            {t('blog.newsletter.description')}
          </motion.p>
          <motion.form
            variants={itemVariants}
            style={{
              display: 'flex',
              gap: 'var(--spacing-md)',
              maxWidth: '500px',
              margin: '0 auto',
            }}
          >
            <input
              type="email"
              placeholder={t('blog.newsletter.emailPlaceholder')}
              style={{
                flex: 1,
                padding: 'var(--spacing-md)',
                borderRadius: 'var(--border-radius-md)',
                border: 'none',
              }}
            />
            <button
              type="submit"
              style={{
                background: 'var(--accent-color)',
                color: 'var(--text-primary)',
                padding: 'var(--spacing-md) var(--spacing-xl)',
                borderRadius: 'var(--border-radius-md)',
                border: 'none',
                fontWeight: '600',
                cursor: 'pointer',
              }}
            >
              {t('blog.newsletter.subscribeButton')}
            </button>
          </motion.form>
        </div>
      </motion.section>
    </div>
  );
};

export default Blog;