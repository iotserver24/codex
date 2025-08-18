import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import { LightningIcon, RocketIcon } from '@site/src/components/icons';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  icon: ReactNode;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'AI-Powered Development',
    icon: <div className={styles.featureIcon}>🤖</div>,
    description: (
      <>
        Build applications faster with AI assistance. VibeStack Codex integrates
        multiple AI models to help you code, debug, and enhance your projects.
      </>
    ),
  },
  {
    title: 'Multiple AI Models',
    icon: <LightningIcon size={32} className={styles.featureIcon} />,
    description: (
      <>
        Access 25+ AI models from various providers including OpenAI, Anthropic,
        Google, and more. Choose the best model for your specific task.
      </>
    ),
  },
  {
    title: 'Built with Electron',
    icon: <RocketIcon size={32} className={styles.featureIcon} />,
    description: (
      <>
        Cross-platform desktop application built with Electron and React.
        Works seamlessly on Windows, macOS, and Linux.
      </>
    ),
  },
];

function Feature({title, icon, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        {icon}
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
