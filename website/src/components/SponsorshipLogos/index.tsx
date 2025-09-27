import React from 'react';
import { clsx } from 'clsx';
import styles from './styles.module.css';

interface Sponsor {
  name: string;
  logo: string;
  url?: string;
  alt?: string;
}

interface SponsorshipLogosProps {
  sponsors?: Sponsor[];
  className?: string;
  title?: string;
}

const defaultSponsors: Sponsor[] = [
  {
    name: 'Layer7 Networks',
    logo: '/img/Layer7.png',
    url: 'https://layer7.net/',
    alt: 'Layer7 Networks'
  },
  {
    name: 'SWAT GAMING YT',
    logo: '/img/swat-gaming-logo.jpg',
    url: 'https://www.youtube.com/@SwatGaming-YT',
    alt: 'SWAT GAMING YT Logo'
  }
  // Add more real sponsors here as they come in
];

export default function SponsorshipLogos({ 
  sponsors = defaultSponsors,
  className = '',
  title = 'Sponsored by'
}: SponsorshipLogosProps): React.ReactElement {
  // Ensure we always have sponsors to display
  const displaySponsors = sponsors.length > 0 ? sponsors : defaultSponsors;
  
  // For smooth infinite scroll, we need at least 2 sets of logos
  // If we have fewer than 3 sponsors, duplicate them to ensure smooth animation
  const getSponsorsForAnimation = () => {
    if (displaySponsors.length >= 3) {
      return displaySponsors;
    }
    // For 1-2 sponsors, duplicate them multiple times for smooth animation
    const duplicated = [];
    const targetCount = Math.max(6, displaySponsors.length * 3);
    for (let i = 0; i < targetCount; i++) {
      duplicated.push(displaySponsors[i % displaySponsors.length]);
    }
    return duplicated;
  };

  const sponsorsForAnimation = getSponsorsForAnimation();

  // Calculate animation duration based on number of sponsors
  // More sponsors = longer duration for smoother experience
  const animationDuration = Math.max(15, Math.min(30, sponsorsForAnimation.length * 2));

  const renderSponsorItem = (sponsor: Sponsor, index: number, prefix: string) => (
    <div key={`${prefix}-${index}`} className={styles.item}>
      {sponsor.url ? (
        <a 
          href={sponsor.url} 
          target="_blank" 
          rel="noopener noreferrer"
          className={styles.link}
        >
          <img 
            src={sponsor.logo} 
            alt={sponsor.alt || `${sponsor.name} logo`}
            className={styles.logo}
            loading="lazy"
          />
        </a>
      ) : (
        <img 
          src={sponsor.logo} 
          alt={sponsor.alt || `${sponsor.name} logo`}
          className={styles.logo}
          loading="lazy"
        />
      )}
    </div>
  );

  return (
    <div className={clsx(styles.sponsorshipLogos, className)}>
      <div className={styles.container}>
        <div className={styles.header}>
          <p className={styles.title}>{title}</p>
        </div>
        <div 
          className={styles.track}
          style={{ '--animation-duration': `${animationDuration}s` } as React.CSSProperties}
        >
          {/* First set of logos */}
          {sponsorsForAnimation.map((sponsor, index) => 
            renderSponsorItem(sponsor, index, 'first')
          )}
          
          {/* Second set for continuous loop */}
          {sponsorsForAnimation.map((sponsor, index) => 
            renderSponsorItem(sponsor, index, 'second')
          )}
        </div>
      </div>
    </div>
  );
}
