import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import { useEffect, useRef } from 'react';
import { RocketIcon, SparklesIcon, BookIcon } from '@site/src/components/icons';
import SponsorshipLogos from '@site/src/components/SponsorshipLogos';

import styles from './index.module.css';

function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const codeWindowRef = useRef<HTMLDivElement>(null);


  return (
    <section ref={heroRef} className={styles.hero}>
      <div className={styles.heroBackground}>
        <div className={styles.gradientOrb1}></div>
        <div className={styles.gradientOrb2}></div>
        <div className={styles.gradientOrb3}></div>
      </div>

      <div className="container">
        {/* Rebranding Notice */}
        <div style={{
          background: 'rgba(255, 107, 107, 0.1)',
          border: '1px solid rgba(255, 107, 107, 0.3)',
          borderRadius: '8px',
          padding: '12px 16px',
          marginBottom: '24px',
          textAlign: 'center',
          color: '#ff6b6b',
          fontSize: '14px',
          fontWeight: '500',
          backdropFilter: 'blur(10px)',
          maxWidth: '600px',
          marginLeft: 'auto',
          marginRight: 'auto'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
            <span>📢</span>
            <span>
              <strong>Rebranding:</strong> CodeX → Xibe AI (all features remain the same)
            </span>
          </div>
        </div>

        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <Heading ref={titleRef} as="h1" className={styles.heroTitle}>
              The Future of
              <span className={styles.gradientText}> AI-Powered</span>
              <br />Development
            </Heading>
            <p ref={subtitleRef} className={styles.heroSubtitle}>
              Xibe AI is a revolutionary AI development platform that combines 27+ AI models,
              intelligent code generation, and seamless workflow automation. Build faster,
              smarter, and more efficiently with the power of AI.
            </p>
            
            <div ref={buttonsRef} className={styles.heroButtons}>
              <Link 
                className={clsx('button', 'button--primary', 'button--lg', styles.ctaButton)}
                to="/download"
              >
                <RocketIcon size={20} /> Download Xibe AI Free
              </Link>
              <Link 
                className={clsx('button', 'button--outline', 'button--lg', styles.secondaryButton)}
                to="/docs"
              >
                <BookIcon size={20} /> View Documentation
              </Link>
            </div>

            <div style={{ marginTop: '12px' }}>
              <a
                href="https://www.producthunt.com/products/codex-6?embed=true&utm_source=badge-featured&utm_medium=badge&utm_source=badge-codex&#0045;4"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=1009660&theme=light&t=1756298264612"
                  alt="Xibe AI - Build webapps in minutes for complelty free | Product Hunt"
                  width="250"
                  height="54"
                  style={{ width: 250, height: 54 }}
                />
              </a>
            </div>
            
            <div ref={statsRef} className={styles.heroStats}>
              <div className={styles.stat}>
                <span className={styles.statNumber}>27+</span>
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
              <div className={styles.stat}>
                <span className={styles.statNumber}>∞</span>
                <span className={styles.statLabel}>Possibilities</span>
              </div>
            </div>
          </div>
          
          <div className={styles.heroVisual}>
            <div ref={codeWindowRef} className={styles.codeWindow}>
              <div className={styles.windowHeader}>
                <div className={styles.windowButtons}>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <span className={styles.windowTitle}>Xibe AI AI Assistant</span>
              </div>
              <div className={styles.windowContent}>
                <div className={styles.codeLine}>
                  <span className={styles.lineNumber}>1</span>
                  <span className={styles.keyword}>import</span> <span className={styles.string}>{'{ AI }'}</span> <span className={styles.keyword}>from</span> <span className={styles.string}>'@xibe/ai'</span>
                </div>
                <div className={styles.codeLine}>
                  <span className={styles.lineNumber}>2</span>
                </div>
                <div className={styles.codeLine}>
                  <span className={styles.lineNumber}>3</span>
                  <span className={styles.keyword}>const</span> <span className={styles.variable}>assistant</span> = <span className={styles.keyword}>new</span> <span className={styles.function}>AIAssistant</span>()
                </div>
                <div className={styles.codeLine}>
                  <span className={styles.lineNumber}>4</span>
                  <span className={styles.variable}>assistant</span>.<span className={styles.function}>generate</span>(<span className={styles.string}>'amazing-app'</span>)
                </div>
                <div className={styles.codeLine}>
                  <span className={styles.lineNumber}>5</span>
                  <span className={styles.comment}>// <SparklesIcon size={16} /> AI-powered development unleashed</span>
                </div>
                <div className={styles.codeLine}>
                  <span className={styles.lineNumber}>6</span>
                  <span className={styles.comment}>// <RocketIcon size={16} /> Build faster with Claude, GPT, Gemini & more</span>
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
  const featuresRef = useRef<HTMLElement>(null);
  const features = [
    {
      icon: '🤖',
      title: '27+ AI Models',
      description: 'Access Claude 3.5 Haiku, Gemini 2.5 Flash, GPT-4, and 25+ other AI models. Switch between models instantly for the best results.',
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    },
    {
      icon: '⚡',
      title: 'Designer Mode (Beta)',
      description: 'Revolutionary AI-powered design assistance. Generate UI components, layouts, and design systems with natural language prompts.',
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
    },
    {
      icon: '🧠',
      title: 'Thinking Budget System',
      description: 'Advanced AI reasoning with configurable thinking budgets. Get more thoughtful, accurate responses for complex development tasks.',
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
    },
    {
      icon: '🔧',
      title: 'Auto-Fix Problems',
      description: 'Intelligent error detection and automatic problem resolution. Let AI identify and fix issues in your codebase automatically.',
      gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'
    },
    {
      icon: '🔄',
      title: 'Native Git Integration',
      description: 'Seamless Git workflow integration. Commit, push, and manage your repositories directly within Xibe AI with AI assistance.',
      gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
    },
    {
      icon: '🚀',
      title: 'Auto-Update System',
      description: 'Stay current with automatic updates. New features, AI models, and improvements delivered seamlessly to your development environment.',
      gradient: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)'
    }
  ];


  return (
    <section ref={featuresRef} className={styles.features}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <Heading as="h2" className={styles.sectionTitle}>
            Revolutionary AI Development Features
          </Heading>
          <p className={styles.sectionSubtitle}>
            Experience the next generation of AI-assisted development with cutting-edge features designed for modern developers
          </p>
        </div>
        
        <div className={styles.featuresGrid}>
          {features.map((feature, idx) => (
            <div key={idx} className={styles.featureCard}>
              <div 
                className={clsx(styles.featureIcon, styles[`featureIconGrad${idx + 1}` as keyof typeof styles])}
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

function ModelsSection() {
  const modelsRef = useRef<HTMLElement>(null);
  const models = [
    { name: 'Claude 3.5 Haiku', type: 'Free', color: '#FF6B6B' },
    { name: 'Gemini 2.5 Flash', type: 'Free', color: '#4ECDC4' },
    { name: 'GPT-4', type: 'Premium', color: '#45B7D1' },
    { name: 'Claude 3.5 Sonnet', type: 'Premium', color: '#96CEB4' },
    { name: 'DeepSeek R1', type: 'Free', color: '#FFEAA7' },
    { name: 'GLM-4 9B', type: 'Free', color: '#DDA0DD' },
    { name: 'Llama 3.2 1B', type: 'Free', color: '#98D8C8' },
    { name: 'Mistral Small', type: 'Free', color: '#F7DC6F' }
  ];


  return (
    <section ref={modelsRef} className={styles.modelsSection}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <Heading as="h2" className={styles.sectionTitle}>
            Powered by 27+ AI Models
          </Heading>
          <p className={styles.sectionSubtitle}>
            Access the world's most advanced AI models for coding, design, and development
          </p>
        </div>
        
        <div className={styles.modelsGrid}>
          {models.map((model, idx) => (
            <div key={idx} className={styles.modelCard}>
              <div className={styles.modelName}>{model.name}</div>
              <div className={clsx(styles.modelType, styles[`modelTypeColor${idx + 1}` as keyof typeof styles])}>
                {model.type}
              </div>
            </div>
          ))}
        </div>
        
        <div className={styles.modelsCTA}>
          <p>And 19+ more models available...</p>
          <Link to="/download" className={styles.modelsButton}>
            Start Building with AI
          </Link>
        </div>
      </div>
    </section>
  );
}

function VideoSection() {
  const videoRef = useRef<HTMLElement>(null);
  
  const keyPoints = [
    {
      title: "Build Without Limits",
      text: "From idea to shipping product, orchestrate your entire workflow with Xibe AI."
    },
    {
      title: "Designer Mode (Beta)",
      text: "Generate UI, systems, and layouts with natural language."
    },
    {
      title: "Auto-Fix Problems",
      text: "Detect, explain, and fix issues automatically with safe edits."
    },
    {
      title: "Git-Native",
      text: "Commit, branch, and review – all inside your AI workflow."
    },
    {
      title: "27+ Models, Free",
      text: "Claude 3.5 Haiku, Gemini 2.5 Flash, and many more at your fingertips."
    }
  ];

  return (
    <section ref={videoRef} className={styles.videoSection}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <Heading as="h2" className={styles.sectionTitle}>
            See Xibe AI in Action
          </Heading>
          <p className={styles.sectionSubtitle}>
            Watch how Xibe AI transforms your development workflow with AI assistance
          </p>
        </div>
        
        <div className={styles.videoContainer}>
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className={styles.promoVideo}
          >
            <source src="https://bucket.anisurge.me/0712-02_1752326506968.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        
        <div className={styles.keyPointsGrid}>
          {keyPoints.map((point, idx) => (
            <div key={idx} className={styles.keyPointCard}>
              <div className={styles.keyPointContent}>
                <h3 className={styles.keyPointTitle}>{point.title}</h3>
                <p className={styles.keyPointText}>{point.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  const ctaRef = useRef<HTMLElement>(null);


  return (
    <section ref={ctaRef} className={styles.cta}>
      <div className="container">
        <div className={styles.ctaContent}>
          <Heading as="h2" className={styles.ctaTitle}>
            Ready to Revolutionize Your Development?
          </Heading>
          <p className={styles.ctaSubtitle}>
            Join thousands of developers who are already building faster, smarter, and more efficiently with AI assistance
          </p>
          <div className={styles.ctaButtons}>
            <Link 
              className={clsx('button', 'button--primary', 'button--lg', styles.ctaButton)}
              to="/download"
            >
              🚀 Download Xibe AI Free
            </Link>
            <Link
              className={clsx('button', 'button--outline', 'button--lg', styles.ctaSecondary)}
              to="/docs"
            >
              📚 View Documentation
            </Link>
          </div>
          <div className={styles.ctaFeatures}>
            <span>✓ 27+ AI Models</span>
            <span>✓ Designer Mode (Beta)</span>
            <span>✓ Auto-Fix Problems</span>
            <span>✓ Native Git Support</span>
          </div>
          <div className={styles.thankYouMessage}>
            <p>Special thanks to <a href="https://github.com/dyad-sh" target="_blank" rel="noopener noreferrer">dyad-sh</a> for making their work open source 🙏</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout
      title="Xibe AI - AI-Powered Development Platform"
      description="Xibe AI - Revolutionary AI development platform with 27+ AI models, Designer Mode, Thinking Budget System, and seamless workflow automation. Download free for Windows, macOS, and Linux.">
      <HeroSection />
      <VideoSection />
      <SponsorshipLogos title="Sponsored by" />
      <FeaturesSection />
      <ModelsSection />
      <CTASection />
    </Layout>
  );
}
