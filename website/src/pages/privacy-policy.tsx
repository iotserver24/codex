import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './privacy-policy.module.css';

export default function PrivacyPolicy(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  
  return (
    <Layout
      title="Privacy Policy"
      description="Privacy Policy for VibeStack CodeX - Learn how we collect, use, and protect your data">
      <main className={styles.container}>
        <div className={styles.hero}>
          <div className={styles.heroContent}>
            <h1 className={styles.title}>
              <span className={styles.icon}>🔒</span>
              Privacy Policy
            </h1>
            <p className={styles.subtitle}>
              Your privacy is important to us. Learn how we protect and handle your data.
            </p>
            <p className={styles.lastUpdated}>
              Last updated: {new Date().toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </p>
          </div>
        </div>

        <div className={styles.content}>
          <div className={styles.sidebar}>
            <nav className={styles.tableOfContents}>
              <h3>Table of Contents</h3>
              <ul>
                <li><a href="#introduction">1. Introduction</a></li>
                <li><a href="#information-collected">2. Information We Collect</a></li>
                <li><a href="#how-we-use">3. How We Use Your Information</a></li>
                <li><a href="#data-storage">4. Data Storage and Security</a></li>
                <li><a href="#third-party">5. Third-Party Services</a></li>
                <li><a href="#data-sharing">6. Data Sharing and Disclosure</a></li>
                <li><a href="#your-rights">7. Your Rights and Choices</a></li>
                <li><a href="#data-retention">8. Data Retention</a></li>
                <li><a href="#children-privacy">9. Children's Privacy</a></li>
                <li><a href="#international">10. International Data Transfers</a></li>
                <li><a href="#changes">11. Changes to This Policy</a></li>
                <li><a href="#contact">12. Contact Us</a></li>
              </ul>
            </nav>
          </div>

          <div className={styles.mainContent}>
            <section id="introduction" className={styles.section}>
              <div className={styles.sectionHeader}>
                <span className={styles.sectionIcon}>📋</span>
                <h2>1. Introduction</h2>
              </div>
              <div className={styles.sectionContent}>
                <p>
                  Welcome to <strong>VibeStack CodeX</strong> ("we," "our," or "us"). We are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our desktop application and related services.
                </p>
              </div>
            </section>

            <section id="information-collected" className={styles.section}>
              <div className={styles.sectionHeader}>
                <span className={styles.sectionIcon}>📊</span>
                <h2>2. Information We Collect</h2>
              </div>
              <div className={styles.sectionContent}>
                <div className={styles.subsection}>
                  <h3>2.1 Information You Provide</h3>
                  <div className={styles.infoCard}>
                    <ul>
                      <li><strong>Account Information:</strong> When you create an account or use our services, we may collect your name, email address, and other contact information.</li>
                      <li><strong>API Keys:</strong> You may provide API keys for third-party services (like OpenAI, Anthropic, etc.) to enable AI functionality within the application.</li>
                      <li><strong>Project Data:</strong> Code files, project configurations, and other development-related content you create or import into the application.</li>
                      <li><strong>Chat History:</strong> Conversations and interactions you have with AI models through our application.</li>
                    </ul>
                  </div>
                </div>

                <div className={styles.subsection}>
                  <h3>2.2 Automatically Collected Information</h3>
                  <div className={styles.infoCard}>
                    <ul>
                      <li><strong>Usage Data:</strong> Information about how you use our application, including features accessed, time spent, and error logs.</li>
                      <li><strong>Device Information:</strong> Operating system, application version, and basic system specifications.</li>
                      <li><strong>Crash Reports:</strong> Technical information when the application encounters errors or crashes.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section id="how-we-use" className={styles.section}>
              <div className={styles.sectionHeader}>
                <span className={styles.sectionIcon}>🎯</span>
                <h2>3. How We Use Your Information</h2>
              </div>
              <div className={styles.sectionContent}>
                <p>We use the collected information for the following purposes:</p>
                <div className={styles.purposeGrid}>
                  <div className={styles.purposeCard}>
                    <span className={styles.purposeIcon}>🚀</span>
                    <h4>Service Provision</h4>
                    <p>To provide, maintain, and improve our services</p>
                  </div>
                  <div className={styles.purposeCard}>
                    <span className={styles.purposeIcon}>💬</span>
                    <h4>Communication</h4>
                    <p>To process and respond to your requests and inquiries</p>
                  </div>
                  <div className={styles.purposeCard}>
                    <span className={styles.purposeIcon}>📢</span>
                    <h4>Updates</h4>
                    <p>To send you important updates and notifications</p>
                  </div>
                  <div className={styles.purposeCard}>
                    <span className={styles.purposeIcon}>📈</span>
                    <h4>Analytics</h4>
                    <p>To analyze usage patterns and optimize performance</p>
                  </div>
                  <div className={styles.purposeCard}>
                    <span className={styles.purposeIcon}>🛡️</span>
                    <h4>Security</h4>
                    <p>To detect and prevent fraud, abuse, and security threats</p>
                  </div>
                  <div className={styles.purposeCard}>
                    <span className={styles.purposeIcon}>⚖️</span>
                    <h4>Compliance</h4>
                    <p>To comply with legal obligations and enforce terms</p>
                  </div>
                </div>
              </div>
            </section>

            <section id="data-storage" className={styles.section}>
              <div className={styles.sectionHeader}>
                <span className={styles.sectionIcon}>💾</span>
                <h2>4. Data Storage and Security</h2>
              </div>
              <div className={styles.sectionContent}>
                <div className={styles.storageGrid}>
                  <div className={styles.storageCard}>
                    <div className={styles.storageHeader}>
                      <span className={styles.storageIcon}>💻</span>
                      <h3>Local Storage</h3>
                    </div>
                    <p>
                      Most of your data, including code files, chat history, and API keys, is stored locally on your device. We do not have access to this locally stored data unless you explicitly choose to share it.
                    </p>
                  </div>

                  <div className={styles.storageCard}>
                    <div className={styles.storageHeader}>
                      <span className={styles.storageIcon}>☁️</span>
                      <h3>Cloud Storage (Optional)</h3>
                    </div>
                    <p>
                      If you choose to use cloud integration features (like Supabase, Vercel, or GitHub), your data may be stored on those third-party platforms according to their respective privacy policies.
                    </p>
                  </div>
                </div>

                <div className={styles.subsection}>
                  <h3>4.3 Security Measures</h3>
                  <div className={styles.securityList}>
                    <div className={styles.securityItem}>
                      <span className={styles.securityIcon}>🔐</span>
                      <span>Industry-standard security measures to protect your data</span>
                    </div>
                    <div className={styles.securityItem}>
                      <span className={styles.securityIcon}>🔑</span>
                      <span>API keys are encrypted and stored securely on your local device</span>
                    </div>
                    <div className={styles.securityItem}>
                      <span className={styles.securityIcon}>🔄</span>
                      <span>Regular application updates to address security vulnerabilities</span>
                    </div>
                    <div className={styles.securityItem}>
                      <span className={styles.securityIcon}>🚫</span>
                      <span>No transmission of code or sensitive data to our servers unless explicitly requested</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section id="third-party" className={styles.section}>
              <div className={styles.sectionHeader}>
                <span className={styles.sectionIcon}>🔗</span>
                <h2>5. Third-Party Services</h2>
              </div>
              <div className={styles.sectionContent}>
                <p>Our application integrates with various third-party services:</p>
                
                <div className={styles.serviceGrid}>
                  <div className={styles.serviceCard}>
                    <div className={styles.serviceHeader}>
                      <span className={styles.serviceIcon}>🤖</span>
                      <h3>AI Providers</h3>
                    </div>
                    <p>
                      When you use AI features, your requests are sent to the respective AI providers (OpenAI, Anthropic, Google, etc.) according to their privacy policies. We do not store or log the content of your AI interactions.
                    </p>
                  </div>

                  <div className={styles.serviceCard}>
                    <div className={styles.serviceHeader}>
                      <span className={styles.serviceIcon}>🛠️</span>
                      <h3>Development Platforms</h3>
                    </div>
                    <p>
                      Integration with platforms like GitHub, Vercel, and Supabase is subject to their respective privacy policies and terms of service.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section id="data-sharing" className={styles.section}>
              <div className={styles.sectionHeader}>
                <span className={styles.sectionIcon}>📤</span>
                <h2>6. Data Sharing and Disclosure</h2>
              </div>
              <div className={styles.sectionContent}>
                <p>We do not sell, trade, or otherwise transfer your personal information to third parties, except in the following circumstances:</p>
                <div className={styles.disclosureList}>
                  <div className={styles.disclosureItem}>
                    <span className={styles.disclosureIcon}>✅</span>
                    <span>With your explicit consent</span>
                  </div>
                  <div className={styles.disclosureItem}>
                    <span className={styles.disclosureIcon}>⚖️</span>
                    <span>To comply with legal obligations or court orders</span>
                  </div>
                  <div className={styles.disclosureItem}>
                    <span className={styles.disclosureIcon}>🛡️</span>
                    <span>To protect our rights, property, or safety</span>
                  </div>
                  <div className={styles.disclosureItem}>
                    <span className={styles.disclosureIcon}>🏢</span>
                    <span>In connection with a business transfer or merger</span>
                  </div>
                </div>
              </div>
            </section>

            <section id="your-rights" className={styles.section}>
              <div className={styles.sectionHeader}>
                <span className={styles.sectionIcon}>⚖️</span>
                <h2>7. Your Rights and Choices</h2>
              </div>
              <div className={styles.sectionContent}>
                <p>You have the following rights regarding your personal information:</p>
                <div className={styles.rightsGrid}>
                  <div className={styles.rightCard}>
                    <span className={styles.rightIcon}>👁️</span>
                    <h4>Access</h4>
                    <p>Request information about what data we have about you</p>
                  </div>
                  <div className={styles.rightCard}>
                    <span className={styles.rightIcon}>✏️</span>
                    <h4>Correction</h4>
                    <p>Request correction of inaccurate or incomplete data</p>
                  </div>
                  <div className={styles.rightCard}>
                    <span className={styles.rightIcon}>🗑️</span>
                    <h4>Deletion</h4>
                    <p>Request deletion of your personal information</p>
                  </div>
                  <div className={styles.rightCard}>
                    <span className={styles.rightIcon}>📦</span>
                    <h4>Portability</h4>
                    <p>Request a copy of your data in a portable format</p>
                  </div>
                  <div className={styles.rightCard}>
                    <span className={styles.rightIcon}>🚫</span>
                    <h4>Opt-out</h4>
                    <p>Opt out of certain data collection and processing activities</p>
                  </div>
                </div>
              </div>
            </section>

            <section id="data-retention" className={styles.section}>
              <div className={styles.sectionHeader}>
                <span className={styles.sectionIcon}>⏰</span>
                <h2>8. Data Retention</h2>
              </div>
              <div className={styles.sectionContent}>
                <div className={styles.retentionCard}>
                  <p>
                    We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. Locally stored data remains on your device until you delete it or uninstall the application.
                  </p>
                </div>
              </div>
            </section>

            <section id="children-privacy" className={styles.section}>
              <div className={styles.sectionHeader}>
                <span className={styles.sectionIcon}>👶</span>
                <h2>9. Children's Privacy</h2>
              </div>
              <div className={styles.sectionContent}>
                <div className={styles.childrenCard}>
                  <p>
                    Our services are not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us.
                  </p>
                </div>
              </div>
            </section>

            <section id="international" className={styles.section}>
              <div className={styles.sectionHeader}>
                <span className={styles.sectionIcon}>🌍</span>
                <h2>10. International Data Transfers</h2>
              </div>
              <div className={styles.sectionContent}>
                <div className={styles.internationalCard}>
                  <p>
                    Your information may be transferred to and processed in countries other than your own. We ensure that such transfers comply with applicable data protection laws and implement appropriate safeguards to protect your information.
                  </p>
                </div>
              </div>
            </section>

            <section id="changes" className={styles.section}>
              <div className={styles.sectionHeader}>
                <span className={styles.sectionIcon}>📝</span>
                <h2>11. Changes to This Privacy Policy</h2>
              </div>
              <div className={styles.sectionContent}>
                <div className={styles.changesCard}>
                  <p>
                    We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. We encourage you to review this Privacy Policy periodically.
                  </p>
                </div>
              </div>
            </section>

            <section id="contact" className={styles.section}>
              <div className={styles.sectionHeader}>
                <span className={styles.sectionIcon}>📞</span>
                <h2>12. Contact Us</h2>
              </div>
              <div className={styles.sectionContent}>
                <p>If you have any questions about this Privacy Policy or our data practices, please contact us:</p>
                <div className={styles.contactGrid}>
                  <a href="mailto:iotserver24@gmail.com" className={styles.contactCard}>
                    <span className={styles.contactIcon}>📧</span>
                    <h4>Email</h4>
                    <p>iotserver24@gmail.com</p>
                  </a>
                  <a href="https://github.com/iotserver24/codex/issues" target="_blank" rel="noopener noreferrer" className={styles.contactCard}>
                    <span className={styles.contactIcon}>🐙</span>
                    <h4>GitHub</h4>
                    <p>Create an issue on GitHub</p>
                  </a>
                  <a href="https://codex.anishkumar.tech" className={styles.contactCard}>
                    <span className={styles.contactIcon}>🌐</span>
                    <h4>Website</h4>
                    <p>codex.anishkumar.tech</p>
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
        </div>
      </main>
    </Layout>
  );
}
