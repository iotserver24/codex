import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import { useEffect, useRef } from 'react';
import { RocketIcon, SparklesIcon, BookIcon } from '@site/src/components/icons';

import styles from './index.module.css';

function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const codeWindowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load Anime.js dynamically
    const loadAnime = async () => {
      if (typeof window !== 'undefined' && !window.anime) {
        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.1/anime.min.js';
        script.onload = () => {
          if (window.anime) {
            animateHero();
          }
        };
        document.head.appendChild(script);
      } else if (window.anime) {
        animateHero();
      }
    };

    const animateHero = () => {
      // Hero entrance animation - much faster
      const timeline = window.anime.timeline({
        easing: 'easeOutExpo',
        duration: 400
      });

      timeline
        .add({
          targets: titleRef.current,
          translateY: [-20, 0],
          opacity: [0, 1],
          duration: 400,
        })
        .add({
          targets: subtitleRef.current,
          translateY: [-15, 0],
          opacity: [0, 1],
          duration: 300,
          offset: '-=200',
        })
        .add({
          targets: buttonsRef.current,
          translateY: [15, 0],
          opacity: [0, 1],
          duration: 300,
          offset: '-=150',
        })
        .add({
          targets: statsRef.current,
          translateY: [15, 0],
          opacity: [0, 1],
          duration: 300,
          offset: '-=100',
        })
        .add({
          targets: codeWindowRef.current,
          translateX: [10, 0],
          opacity: [0, 1],
          scale: [0.98, 1],
          duration: 200,
          offset: '-=50',
        });

      // Floating animation for gradient orbs - faster
      window.anime({
        targets: '.gradientOrb1, .gradientOrb2, .gradientOrb3',
        translateY: [0, -10, 0],
        translateX: [0, 5, 0],
        scale: [1, 1.02, 1],
        duration: 3000,
        easing: 'easeInOutSine',
        loop: true,
        direction: 'alternate',
      });

      // Code window typing effect - super fast
      const codeLines = codeWindowRef.current?.querySelectorAll('.codeLine');
      if (codeLines) {
        window.anime({
          targets: codeLines,
          opacity: [0, 1],
          translateX: [-3, 0],
          duration: 150,
          delay: window.anime.stagger(20),
          easing: 'easeOutExpo',
        });
      }
    };

    loadAnime();
  }, []);

  return (
    <section ref={heroRef} className={styles.hero}>
      <div className={styles.heroBackground}>
        <div className={styles.gradientOrb1}></div>
        <div className={styles.gradientOrb2}></div>
        <div className={styles.gradientOrb3}></div>
      </div>
      
      <div className="container">
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <Heading ref={titleRef} as="h1" className={styles.heroTitle}>
              The Future of
              <span className={styles.gradientText}> AI-Powered</span>
              <br />Development
            </Heading>
            <p ref={subtitleRef} className={styles.heroSubtitle}>
              CodeX is a revolutionary AI development platform that combines 27+ AI models, 
              intelligent code generation, and seamless workflow automation. Build faster, 
              smarter, and more efficiently with the power of AI.
            </p>
            
            <div ref={buttonsRef} className={styles.heroButtons}>
              <Link 
                className={clsx('button', 'button--primary', 'button--lg', styles.ctaButton)}
                to="/download"
              >
                <RocketIcon size={20} /> Download CodeX Free
              </Link>
              <Link 
                className={clsx('button', 'button--outline', 'button--lg', styles.secondaryButton)}
                to="/docs"
              >
                <BookIcon size={20} /> View Documentation
              </Link>
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
                <span className={styles.windowTitle}>CodeX AI Assistant</span>
              </div>
              <div className={styles.windowContent}>
                <div className={styles.codeLine}>
                  <span className={styles.lineNumber}>1</span>
                  <span className={styles.keyword}>import</span> <span className={styles.string}>{'{ AI }'}</span> <span className={styles.keyword}>from</span> <span className={styles.string}>'@codex/ai'</span>
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

function HorizontalScrollSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const sectionElement = sectionRef.current;
    const stickyElement = stickyRef.current;
    const trackElement = trackRef.current;
    if (!sectionElement || !stickyElement || !trackElement) return;

    const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max);

    const setSectionHeight = () => {
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;
      const totalTrackWidth = trackElement.scrollWidth;
      const extraScroll = Math.max(totalTrackWidth - viewportWidth, 0);
      sectionElement.style.height = `${viewportHeight + extraScroll}px`;
    };

    let animationFrameId = 0;
    const onScroll = () => {
      if (animationFrameId) return;
      animationFrameId = window.requestAnimationFrame(() => {
        const rect = sectionElement.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        const progressRaw = -rect.top / (sectionElement.offsetHeight - viewportHeight);
        const progress = clamp(progressRaw, 0, 1);
        const maxTranslate = Math.max(trackElement.scrollWidth - window.innerWidth, 0);
        const translateX = -progress * maxTranslate;
        trackElement.style.transform = `translate3d(${translateX}px, 0, 0)`;
        animationFrameId = 0;
      });
    };

    // Initialize sizes and positions
    setSectionHeight();
    onScroll();

    // Recompute on resize (debounced via RAF)
    const onResize = () => {
      window.requestAnimationFrame(() => {
        setSectionHeight();
        onScroll();
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize);

    // Prefer-reduced-motion: stop transforms
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handlePRM = () => {
      if (mediaQuery.matches) {
        trackElement.style.transform = 'none';
      } else {
        onScroll();
      }
    };
    mediaQuery.addEventListener?.('change', handlePRM);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
      mediaQuery.removeEventListener?.('change', handlePRM);
      if (animationFrameId) window.cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section ref={sectionRef} className={styles.horizontalSection}>
      <div ref={stickyRef} className={styles.horizontalSticky}>
        <div ref={trackRef} className={styles.horizontalTrack}>
          <div className={styles.panel}>
            <div className={styles.panelInner}>
              <h3 className={styles.panelTitle}>Build Without Limits</h3>
              <p className={styles.panelText}>From idea to shipping product, orchestrate your entire workflow with CodeX.</p>
            </div>
          </div>
          <div className={styles.panel}>
            <div className={styles.panelInner}>
              <h3 className={styles.panelTitle}>Designer Mode (Beta)</h3>
              <p className={styles.panelText}>Generate UI, systems, and layouts with natural language.</p>
            </div>
          </div>
          <div className={styles.panel}>
            <div className={styles.panelInner}>
              <h3 className={styles.panelTitle}>Auto-Fix Problems</h3>
              <p className={styles.panelText}>Detect, explain, and fix issues automatically with safe edits.</p>
            </div>
          </div>
          <div className={styles.panel}>
            <div className={styles.panelInner}>
              <h3 className={styles.panelTitle}>Git-Native</h3>
              <p className={styles.panelText}>Commit, branch, and review – all inside your AI workflow.</p>
            </div>
          </div>
          <div className={styles.panel}>
            <div className={styles.panelInner}>
              <h3 className={styles.panelTitle}>27+ Models, Free</h3>
              <p className={styles.panelText}>Claude 3.5 Haiku, Gemini 2.5 Flash, and many more at your fingertips.</p>
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
      description: 'Seamless Git workflow integration. Commit, push, and manage your repositories directly within CodeX with AI assistance.',
      gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
    },
    {
      icon: '🚀',
      title: 'Auto-Update System',
      description: 'Stay current with automatic updates. New features, AI models, and improvements delivered seamlessly to your development environment.',
      gradient: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && window.anime) {
          // Animate feature cards
          window.anime({
            targets: '.featureCard',
            translateY: [50, 0],
            opacity: [0, 1],
            scale: [0.9, 1],
            duration: 800,
            delay: window.anime.stagger(150),
            easing: 'easeOutExpo',
          });
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    if (featuresRef.current) {
      observer.observe(featuresRef.current);
    }

    return () => observer.disconnect();
  }, []);

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

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && window.anime) {
          // Animate model cards
          window.anime({
            targets: '.modelCard',
            translateX: [-50, 0],
            opacity: [0, 1],
            duration: 600,
            delay: window.anime.stagger(100),
            easing: 'easeOutExpo',
          });
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    if (modelsRef.current) {
      observer.observe(modelsRef.current);
    }

    return () => observer.disconnect();
  }, []);

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

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && window.anime) {
          // Animate video section
          window.anime({
            targets: '.videoContainer',
            translateY: [30, 0],
            opacity: [0, 1],
            scale: [0.95, 1],
            duration: 1000,
            easing: 'easeOutExpo',
          });
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={videoRef} className={styles.videoSection}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <Heading as="h2" className={styles.sectionTitle}>
            See CodeX in Action
          </Heading>
          <p className={styles.sectionSubtitle}>
            Watch how CodeX transforms your development workflow with AI assistance
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
      </div>
    </section>
  );
}

function CTASection() {
  const ctaRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && window.anime) {
          // Animate CTA section
          window.anime({
            targets: '.ctaContent',
            translateY: [30, 0],
            opacity: [0, 1],
            duration: 800,
            easing: 'easeOutExpo',
          });
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    if (ctaRef.current) {
      observer.observe(ctaRef.current);
    }

    return () => observer.disconnect();
  }, []);

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
              🚀 Download CodeX Free
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
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout
      title="CodeX - AI-Powered Development Platform"
      description="CodeX - Revolutionary AI development platform with 27+ AI models, Designer Mode, Thinking Budget System, and seamless workflow automation. Download free for Windows, macOS, and Linux.">
      <HeroSection />
      <VideoSection />
      <HorizontalScrollSection />
      <FeaturesSection />
      <ModelsSection />
      <CTASection />
    </Layout>
  );
}
