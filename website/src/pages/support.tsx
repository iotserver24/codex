import React, { useState } from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './support.module.css';

export default function Support(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "How do I get started with CodeX?",
      answer: "Download CodeX from our website, install it on your system, and start by creating your first project. You can then configure AI providers and begin coding with AI assistance."
    },
    {
      question: "Which AI models are supported?",
      answer: "CodeX supports 50+ AI models including OpenAI's GPT-4, Anthropic's Claude, Google's Gemini, and many others. You can configure multiple providers and switch between them easily."
    },
    {
      question: "How do I configure API keys?",
      answer: "Go to Settings > Providers, select your preferred AI provider, and enter your API key. The keys are encrypted and stored securely on your local device."
    },
    {
      question: "Is my code and data secure?",
      answer: "Yes! CodeX stores all your data locally on your device. We don't transmit your code to our servers unless you explicitly choose to share it. API keys are encrypted and stored securely."
    },
    {
      question: "Can I use CodeX offline?",
      answer: "CodeX works offline for most features like project management and code editing. However, AI features require an internet connection to communicate with AI providers."
    },
    {
      question: "How do I integrate with GitHub/Vercel/Supabase?",
      answer: "CodeX has built-in integrations for popular development platforms. Go to the respective sections in the app to configure your connections and start deploying directly from CodeX."
    },
    {
      question: "What if I encounter bugs or issues?",
      answer: "You can report issues on our GitHub repository, contact us via email, or check our documentation for troubleshooting guides."
    },
    {
      question: "Is CodeX free to use?",
      answer: "CodeX is completely free to download and use. You only pay for the AI services you choose to use (OpenAI, Anthropic, etc.) according to their pricing."
    }
  ];

  const supportChannels = [
    {
      icon: "📧",
      title: "Email Support",
      description: "Get direct help from our team",
      contact: "iotserver24@gmail.com",
      link: "mailto:iotserver24@gmail.com",
      responseTime: "Within 24 hours"
    },
    {
      icon: "🐙",
      title: "GitHub Issues",
      description: "Report bugs and request features",
      contact: "Create an issue",
      link: "https://github.com/iotserver24/codex/issues",
      responseTime: "Community + Team"
    },
    {
      icon: "💬",
      title: "GitHub Discussions",
      description: "Ask questions and share ideas",
      contact: "Join discussion",
      link: "https://github.com/iotserver24/codex/discussions",
      responseTime: "Community"
    },
    {
      icon: "📖",
      title: "Documentation",
      description: "Comprehensive guides and tutorials",
      contact: "Browse docs",
      link: "/docs",
      responseTime: "Instant"
    }
  ];

  const quickLinks = [
    {
      icon: "🚀",
      title: "Getting Started",
      description: "Quick setup guide for new users",
      link: "/docs/getting-started"
    },
    {
      icon: "⚙️",
      title: "Configuration",
      description: "Set up AI providers and integrations",
      link: "/docs/ai-models"
    },
    {
      icon: "🔧",
      title: "Troubleshooting",
      description: "Common issues and solutions",
      link: "/docs/faq"
    },
    {
      icon: "📝",
      title: "Privacy Policy",
      description: "How we protect your data",
      link: "/privacy-policy"
    }
  ];

  return (
    <Layout
      title="Support"
      description="Get help with CodeX - Contact us, browse FAQs, and find resources">
      <main className={styles.container}>
        <div className={styles.hero}>
          <div className={styles.heroContent}>
            <h1 className={styles.title}>
              <span className={styles.icon}>🆘</span>
              Support Center
            </h1>
            <p className={styles.subtitle}>
              Need help with CodeX? We're here to assist you every step of the way.
            </p>
            <p className={styles.subtitle}>
              Choose your preferred way to get support below.
            </p>
          </div>
        </div>

        <div className={styles.content}>
          {/* Support Channels */}
          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionIcon}>📞</span>
              <h2>Get Support</h2>
            </div>
            <div className={styles.sectionContent}>
              <p>Choose the best way to get help based on your needs:</p>
              <div className={styles.supportGrid}>
                {supportChannels.map((channel, index) => (
                  <a key={index} href={channel.link} className={styles.supportCard} target={channel.link.startsWith('http') ? '_blank' : undefined} rel={channel.link.startsWith('http') ? 'noopener noreferrer' : undefined}>
                    <div className={styles.supportHeader}>
                      <span className={styles.supportIcon}>{channel.icon}</span>
                      <div>
                        <h3>{channel.title}</h3>
                        <p className={styles.responseTime}>Response: {channel.responseTime}</p>
                      </div>
                    </div>
                    <p className={styles.supportDescription}>{channel.description}</p>
                    <div className={styles.supportContact}>
                      <span className={styles.contactText}>{channel.contact}</span>
                      <span className={styles.arrow}>→</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </section>

          {/* Quick Links */}
          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionIcon}>🔗</span>
              <h2>Quick Links</h2>
            </div>
            <div className={styles.sectionContent}>
              <p>Find answers to common questions and helpful resources:</p>
              <div className={styles.quickLinksGrid}>
                {quickLinks.map((link, index) => (
                  <Link key={index} to={link.link} className={styles.quickLinkCard}>
                    <span className={styles.quickLinkIcon}>{link.icon}</span>
                    <h3>{link.title}</h3>
                    <p>{link.description}</p>
                  </Link>
                ))}
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionIcon}>❓</span>
              <h2>Frequently Asked Questions</h2>
            </div>
            <div className={styles.sectionContent}>
              <p>Find quick answers to the most common questions:</p>
              <div className={styles.faqList}>
                {faqs.map((faq, index) => (
                  <div key={index} className={styles.faqItem}>
                    <button 
                      className={`${styles.faqQuestion} ${activeFaq === index ? styles.active : ''}`}
                      onClick={() => toggleFaq(index)}
                    >
                      <span>{faq.question}</span>
                      <span className={styles.faqToggle}>
                        {activeFaq === index ? '−' : '+'}
                      </span>
                    </button>
                    <div className={`${styles.faqAnswer} ${activeFaq === index ? styles.show : ''}`}>
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionIcon}>📬</span>
              <h2>Still Need Help?</h2>
            </div>
            <div className={styles.sectionContent}>
              <p>If you couldn't find what you're looking for, don't hesitate to reach out:</p>
              <div className={styles.contactGrid}>
                <a href="mailto:iotserver24@gmail.com" className={styles.contactCard}>
                  <span className={styles.contactIcon}>📧</span>
                  <h4>Email Us</h4>
                  <p>iotserver24@gmail.com</p>
                  <span className={styles.contactNote}>We'll respond within 24 hours</span>
                </a>
                <a href="https://github.com/iotserver24/codex/issues" target="_blank" rel="noopener noreferrer" className={styles.contactCard}>
                  <span className={styles.contactIcon}>🐙</span>
                  <h4>Report Issue</h4>
                  <p>GitHub Issues</p>
                  <span className={styles.contactNote}>For bugs and feature requests</span>
                </a>
                <a href="https://github.com/iotserver24/codex/discussions" target="_blank" rel="noopener noreferrer" className={styles.contactCard}>
                  <span className={styles.contactIcon}>💬</span>
                  <h4>Community</h4>
                  <p>GitHub Discussions</p>
                  <span className={styles.contactNote}>Connect with other users</span>
                </a>
              </div>
            </div>
          </section>

          <div className={styles.backToHome}>
            <Link to="/" className={styles.backButton}>
              <span>←</span>
              Back to Home
            </Link>
          </div>
        </div>
      </main>
    </Layout>
  );
}
