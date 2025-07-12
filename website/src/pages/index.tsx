import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HeroSection() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <section className={styles.hero}>
      <div className={styles.heroBackground}>
        <div className={styles.gradientOrb1}></div>
        <div className={styles.gradientOrb2}></div>
        <div className={styles.gradientOrb3}></div>
      </div>
      
      <div className="container">
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <Heading as="h1" className={styles.heroTitle}>
              Build the Future with
              <span className={styles.gradientText}> AI-Powered</span>
              <br />Development
            </Heading>
            <p className={styles.heroSubtitle}>
              VibeStack Codex is a free, collaborative AI development platform that empowers 
              developers with 25+ AI models, intelligent codebase management, and seamless workflow automation.
            </p>
            
            <div className={styles.heroButtons}>
              <Link 
                className={clsx('button', 'button--primary', 'button--lg', styles.ctaButton)}
                to="https://github.com/iotserver24/codex/releases"
              >
                🚀 Download Free
              </Link>
              <Link 
                className={clsx('button', 'button--outline', 'button--lg', styles.secondaryButton)}
                to="/docs/getting-started"
              >
                📚 Get Started
              </Link>
            </div>
            
            <div className={styles.heroStats}>
              <div className={styles.stat}>
                <span className={styles.statNumber}>25+</span>
                <span className={styles.statLabel}>AI Models</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNumber}>100%</span>
                <span className={styles.statLabel}>Free</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNumber}>3</span>
                <span className={styles.statLabel}>Platforms</span>
              </div>
            </div>
          </div>
          
          <div className={styles.heroVisual}>
            <div className={styles.codeWindow}>
              <div className={styles.windowHeader}>
                <div className={styles.windowButtons}>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <span className={styles.windowTitle}>VibeStack Codex</span>
              </div>
              <div className={styles.windowContent}>
                <div className={styles.codeLine}>
                  <span className={styles.lineNumber}>1</span>
                  <span className={styles.keyword}>import</span> <span className={styles.string}>{'{ AI }'}</span> <span className={styles.keyword}>from</span> <span className={styles.string}>'vibestack-codex'</span>
                </div>
                <div className={styles.codeLine}>
                  <span className={styles.lineNumber}>2</span>
                </div>
                <div className={styles.codeLine}>
                  <span className={styles.lineNumber}>3</span>
                  <span className={styles.keyword}>const</span> <span className={styles.variable}>app</span> = <span className={styles.keyword}>new</span> <span className={styles.function}>AICodex</span>()
                </div>
                <div className={styles.codeLine}>
                  <span className={styles.lineNumber}>4</span>
                  <span className={styles.variable}>app</span>.<span className={styles.function}>build</span>(<span className={styles.string}>'amazing-project'</span>)
                </div>
                <div className={styles.codeLine}>
                  <span className={styles.lineNumber}>5</span>
                  <span className={styles.comment}>// ✨ Magic happens here</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeaturesSection() {
  const features = [
    {
      icon: '🤖',
      title: 'AI-Powered Coding',
      description: 'Leverage 25+ AI models including GPT-4, Claude, Gemini, and free Pollination AI models for intelligent code generation and assistance.',
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    },
    {
      icon: '⚡',
      title: 'Lightning Fast',
      description: 'Built with Electron and React for optimal performance. Switch between models instantly and get real-time AI responses.',
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
    },
    {
      icon: '🔒',
      title: 'Privacy First',
      description: 'Your code stays local unless you choose cloud models. Complete transparency with optional telemetry you control.',
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
    },
    {
      icon: '🌍',
      title: 'Cross Platform',
      description: 'Works seamlessly on Windows, macOS, and Linux. One download, universal compatibility.',
      gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'
    },
    {
      icon: '🔄',
      title: 'Auto Updates',
      description: 'Stay current with automatic updates via GitHub Releases. New features and improvements delivered seamlessly.',
      gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
    },
    {
      icon: '💰',
      title: 'Completely Free',
      description: 'No subscriptions, no hidden costs. VibeStack Codex is free forever with access to premium AI models.',
      gradient: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)'
    }
  ];

  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <Heading as="h2" className={styles.sectionTitle}>
            Why Choose VibeStack Codex?
          </Heading>
          <p className={styles.sectionSubtitle}>
            Everything you need for modern AI-assisted development in one powerful platform
          </p>
        </div>
        
        <div className={styles.featuresGrid}>
          {features.map((feature, idx) => (
            <div key={idx} className={styles.featureCard}>
              <div 
                className={styles.featureIcon}
                style={{ background: feature.gradient }}
              >
                {feature.icon}
              </div>
              <h3 className={styles.featureTitle}>{feature.title}</h3>
              <p className={styles.featureDescription}>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className={styles.cta}>
      <div className="container">
        <div className={styles.ctaContent}>
          <Heading as="h2" className={styles.ctaTitle}>
            Ready to Transform Your Development Workflow?
        </Heading>
          <p className={styles.ctaSubtitle}>
            Join thousands of developers who are already building faster with AI assistance
          </p>
          <div className={styles.ctaButtons}>
            <Link 
              className={clsx('button', 'button--primary', 'button--lg', styles.ctaButton)}
              to="https://github.com/iotserver24/codex/releases"
            >
              Download VibeStack Codex
            </Link>
          <Link
              className={clsx('button', 'button--outline', 'button--lg', styles.ctaSecondary)}
              to="/docs"
            >
              View Documentation
          </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function VideoSection() {
  return (
    <section className={styles.videoSection}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <Heading as="h2" className={styles.sectionTitle}>
            See VibeStack Codex in Action
          </Heading>
          <p className={styles.sectionSubtitle}>
            Watch how VibeStack Codex transforms your development workflow
          </p>
        </div>
        
        <div className={styles.videoContainer}>
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            style={{
              width: '100%',
              height: 'auto',
              borderRadius: '16px',
              boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
              background: '#000'
            }}
          >
            <source src="https://bucket.anisurge.me/0712-02_1752326506968.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="AI-Powered Development Platform"
      description="VibeStack Codex - Free collaborative AI development platform with 25+ AI models, intelligent codebase management, and seamless workflow automation.">
      <HeroSection />
      <VideoSection />
      <FeaturesSection />
      <CTASection />
    </Layout>
  );
}
