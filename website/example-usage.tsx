import React from 'react';
import SponsorshipLogos from './src/components/SponsorshipLogos';

// Example usage with different sponsor configurations
export default function ExampleUsage() {
  // Example 1: Using default sponsors (2 real sponsors)
  const defaultExample = (
    <div>
      <h2>Default Sponsors (2 real sponsors)</h2>
      <SponsorshipLogos />
    </div>
  );

  // Example 2: Future scenario with more real sponsors
  const futureSponsors = [
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
    },
    {
      name: 'Future Sponsor 1',
      logo: '/img/future-sponsor-1.png',
      url: 'https://future-sponsor-1.com',
      alt: 'Future Sponsor 1 Logo'
    },
    {
      name: 'Future Sponsor 2',
      logo: '/img/future-sponsor-2.png',
      url: 'https://future-sponsor-2.com',
      alt: 'Future Sponsor 2 Logo'
    }
  ];

  const futureSponsorsExample = (
    <div>
      <h2>Future Scenario (4 sponsors)</h2>
      <SponsorshipLogos sponsors={futureSponsors} />
    </div>
  );

  // Example 3: Single sponsor (will be duplicated for smooth animation)
  const singleSponsor = [
    {
      name: 'Layer7 Networks',
      logo: '/img/Layer7.png',
      url: 'https://layer7.net/',
      alt: 'Layer7 Networks'
    }
  ];

  const singleSponsorExample = (
    <div>
      <h2>Single Sponsor (will be duplicated for smooth animation)</h2>
      <SponsorshipLogos sponsors={singleSponsor} />
    </div>
  );

  // Example 4: Empty sponsors array (will use defaults)
  const emptySponsorsExample = (
    <div>
      <h2>Empty Sponsors Array (will use defaults)</h2>
      <SponsorshipLogos sponsors={[]} />
    </div>
  );

  // Example 5: Custom title
  const customTitleExample = (
    <div>
      <h2>Custom Title</h2>
      <SponsorshipLogos title="Proudly Supported By" />
    </div>
  );

  return (
    <div style={{ padding: '2rem' }}>
      <h1>SponsorshipLogos Component Examples</h1>
      
      {defaultExample}
      <hr style={{ margin: '3rem 0' }} />
      
      {futureSponsorsExample}
      <hr style={{ margin: '3rem 0' }} />
      
      {singleSponsorExample}
      <hr style={{ margin: '3rem 0' }} />
      
      {emptySponsorsExample}
      <hr style={{ margin: '3rem 0' }} />
      
      {customTitleExample}
    </div>
  );
}
