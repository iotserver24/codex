import React, { useState } from 'react';
import './DonationModal.css';

const DonationModal = ({ isOpen, onClose, showTrigger = true }) => {
  const [localOpen, setLocalOpen] = useState(false);
  const [selectedAmount, setSelectedAmount] = useState(500);

  // Use external control if provided, otherwise internal state
  const modalOpen = isOpen !== undefined ? isOpen : localOpen;
  const closeModal = onClose || (() => setLocalOpen(false));
  const openModal = () => {
    if (isOpen === undefined) setLocalOpen(true);
  };

  const donationAmounts = [100, 250, 500, 1000, 2500, 5000];

  const handleDonate = () => {
    // Open Razorpay donation link
    window.open('https://razorpay.me/@megavault', '_blank');
    closeModal();
  };

  return (
    <>
      {/* Donation Button - only show if showTrigger is true */}
      {showTrigger && (
        <button 
          className="donation-trigger-btn"
          onClick={openModal}
        >
          💝 Support Us
        </button>
      )}

      {/* Modal Overlay */}
      {modalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            {/* Close Button */}
            <button className="modal-close" onClick={closeModal}>
              ✕
            </button>

            {/* Modal Header */}
            <div className="modal-header">
              <h2>💝 Support VibeStack Codex</h2>
              <p className="modal-subtitle">
                Help us keep AI development tools free for everyone
              </p>
            </div>

            {/* Why Donate Section */}
            <div className="why-donate-section">
              <h3>🌟 Why Your Support Matters</h3>
              <div className="reasons-grid">
                <div className="reason-card">
                  <div className="reason-icon">🤖</div>
                  <h4>AI Model Research</h4>
                  <p>Integration and testing of 25+ AI models costs significant resources</p>
                </div>
                <div className="reason-card">
                  <div className="reason-icon">🔒</div>
                  <h4>Security & Privacy</h4>
                  <p>Maintaining secure, local-first architecture requires ongoing development</p>
                </div>
                <div className="reason-card">
                  <div className="reason-icon">🚀</div>
                  <h4>New Features</h4>
                  <p>Building advanced AI coding features and workflow automation</p>
                </div>
                <div className="reason-card">
                  <div className="reason-icon">🌍</div>
                  <h4>Free Forever</h4>
                  <p>While competitors charge $7-30/month, we stay committed to being free</p>
                </div>
              </div>
            </div>

            {/* Impact Section */}
            <div className="impact-section">
              <h3>💰 Your Impact</h3>
              <div className="impact-items">
                <div className="impact-item">
                  <span className="impact-amount">₹100</span>
                  <span className="impact-desc">Covers server costs for 1 day</span>
                </div>
                <div className="impact-item">
                  <span className="impact-amount">₹500</span>
                  <span className="impact-desc">Funds AI model testing for 1 week</span>
                </div>
                <div className="impact-item">
                  <span className="impact-amount">₹1000</span>
                  <span className="impact-desc">Supports development for 1 month</span>
                </div>
                <div className="impact-item">
                  <span className="impact-amount">₹5000</span>
                  <span className="impact-desc">Enables major feature development</span>
                </div>
              </div>
            </div>

            {/* Quick Amount Selection */}
            <div className="amount-selection">
              <h3>🎯 Quick Donation</h3>
              <div className="amount-buttons">
                {donationAmounts.map(amount => (
                  <button
                    key={amount}
                    className={`amount-btn ${selectedAmount === amount ? 'selected' : ''}`}
                    onClick={() => setSelectedAmount(amount)}
                  >
                    ₹{amount}
                  </button>
                ))}
              </div>
            </div>

            {/* Donation Methods */}
            <div className="donation-methods">
              <h3>💳 Secure Payment</h3>
              <button className="razorpay-btn" onClick={handleDonate}>
                <div className="payment-method">
                  <div className="payment-icon">💳</div>
                  <div className="payment-details">
                    <h4>Razorpay</h4>
                    <p>UPI • Cards • NetBanking • Wallets</p>
                  </div>
                  <div className="payment-arrow">→</div>
                </div>
              </button>
            </div>

            {/* Trust Badges */}
            <div className="trust-section">
              <div className="trust-badges">
                <div className="trust-badge">
                  <span className="trust-icon">🔒</span>
                  <span>256-bit SSL Secured</span>
                </div>
                <div className="trust-badge">
                  <span className="trust-icon">🏆</span>
                  <span>Trusted by 10K+ Developers</span>
                </div>
                <div className="trust-badge">
                  <span className="trust-icon">💯</span>
                  <span>100% Transparent Usage</span>
                </div>
              </div>
            </div>

            {/* Footer Note */}
            <div className="modal-footer">
              <p>
                🙏 Every contribution, no matter the size, helps us maintain VibeStack Codex 
                as a free alternative to expensive AI coding tools.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DonationModal; 