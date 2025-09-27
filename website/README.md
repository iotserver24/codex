# SponsorshipLogos Component

A dynamic, animated sponsorship logos component that automatically handles any number of sponsors and ensures smooth infinite scrolling.

## Features

- **Dynamic Sponsor Support**: Automatically handles any number of sponsors (1 to unlimited)
- **Never Empty**: Always displays sponsors, falling back to defaults if none provided
- **Smooth Animation**: Intelligent duplication for smooth infinite scroll with any number of sponsors
- **Responsive Design**: Adapts to different screen sizes
- **Accessibility**: Proper alt text and keyboard navigation
- **Performance**: Lazy loading for images
- **Customizable**: Custom titles and styling

## Usage

### Basic Usage
```tsx
import SponsorshipLogos from './src/components/SponsorshipLogos';

// Uses default sponsors
<SponsorshipLogos />
```

### With Custom Sponsors
```tsx
const customSponsors = [
  {
    name: 'Company A',
    logo: '/img/company-a.png',
    url: 'https://company-a.com',
    alt: 'Company A Logo'
  },
  {
    name: 'Company B',
    logo: '/img/company-b.png',
    url: 'https://company-b.com',
    alt: 'Company B Logo'
  }
];

<SponsorshipLogos sponsors={customSponsors} />
```

### With Custom Title
```tsx
<SponsorshipLogos title="Proudly Supported By" />
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `sponsors` | `Sponsor[]` | `defaultSponsors` | Array of sponsor objects |
| `className` | `string` | `''` | Additional CSS classes |
| `title` | `string` | `'Sponsored by'` | Title text above the logos |

## Sponsor Object

```tsx
interface Sponsor {
  name: string;        // Sponsor name
  logo: string;        // Path to logo image
  url?: string;        // Optional link URL
  alt?: string;        // Optional alt text for image
}
```

## How It Works

### Dynamic Sponsor Handling
- If you provide 3+ sponsors: Uses them as-is for smooth animation
- If you provide 1-2 sponsors: Automatically duplicates them to ensure smooth scrolling
- If you provide 0 sponsors: Falls back to default sponsors

### Animation Duration
- Automatically calculates animation duration based on number of sponsors
- More sponsors = longer duration for better user experience
- Range: 15-30 seconds

### Infinite Scroll
- Creates two identical sets of logos for seamless looping
- CSS animation handles the smooth transition
- Animation pauses on hover for better UX

## Default Sponsors

The component includes these real sponsors:
- Layer7 Networks
- SWAT GAMING YT

*More sponsors can be easily added to the `defaultSponsors` array as they come in.*

## Styling

The component uses CSS modules with extensive styling including:
- Dark/light theme support
- Responsive design
- Hover effects
- Accessibility features
- Reduced motion support

## Examples

See `example-usage.tsx` for comprehensive usage examples including:
- Default sponsors (2 real sponsors)
- Future scenario (4 sponsors)
- Single sponsor (duplicated for smooth animation)
- Empty sponsors array (uses defaults)
- Custom titles

## Browser Support

- Modern browsers with CSS Grid and Flexbox support
- Graceful degradation for older browsers
- Reduced motion support for accessibility