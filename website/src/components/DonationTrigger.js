import React, { useState } from 'react';
import DonationModal from './DonationModal';

const DonationTrigger = ({ buttonText = "💝 Support Us", buttonStyle = {} }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <button 
        className="donation-trigger-btn"
        style={buttonStyle}
        onClick={openModal}
      >
        {buttonText}
      </button>
      
      <DonationModal 
        isOpen={isModalOpen} 
        onClose={closeModal} 
        showTrigger={false}
      />
    </>
  );
};

export default DonationTrigger; 