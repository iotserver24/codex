import React, { useState, useEffect } from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import clsx from 'clsx';
import { RocketIcon } from '@site/src/components/icons';
import styles from './download.module.css';

const releases = [
  {
    version: '1.2.2',
    date: '2025-09-28',
    isLatest: true,
    isStable: true,
    description: 'Complete app rebrand to Xibe AI, MCP Tools Integration, Enhanced Agent-MCP Mode, Share Preview Option, Universal Thinking Support, E2B Integration, and Free Pro Features.',
    downloads: {
      windows: [
        {
          name: 'Windows (x64)',
          url: 'https://github.com/iotserver24/codex/releases/download/v1.2.2/codex-1.2.2-windows-x64.exe',
          type: 'exe',
          arch: 'x64'
        },
        {
          name: 'Windows (ARM64)',
          url: 'https://github.com/iotserver24/codex/releases/download/v1.2.2/codex-1.2.2-windows-arm64.exe',
          type: 'exe',
          arch: 'ARM64'
        }
      ],
      macos: [
        {
          name: 'Mac (ARM64)',
          url: 'https://github.com/iotserver24/codex/releases/download/v1.2.2/codex-1.2.2-macos-arm64.zip',
          type: 'zip',
          arch: 'ARM64'
        },
        {
          name: 'Mac (x64)',
          url: 'https://github.com/iotserver24/codex/releases/download/v1.2.2/codex-1.2.2-macos-x64.zip',
          type: 'zip',
          arch: 'x64'
        }
      ],
      linux: [
        {
          name: 'Linux (x64) DEB',
          url: 'https://github.com/iotserver24/codex/releases/download/v1.2.2/codex-1.2.2-linux-x64.deb',
          type: 'deb',
          arch: 'x64'
        },
        {
          name: 'Linux (ARM64) DEB',
          url: 'https://github.com/iotserver24/codex/releases/download/v1.2.2/codex-1.2.2-linux-arm64.deb',
          type: 'deb',
          arch: 'ARM64'
        },
        {
          name: 'Linux (x64) RPM',
          url: 'https://github.com/iotserver24/codex/releases/download/v1.2.2/codex-1.2.2-linux-x64.rpm',
          type: 'rpm',
          arch: 'x64'
        },
        {
          name: 'Linux (ARM64) RPM',
          url: 'https://github.com/iotserver24/codex/releases/download/v1.2.2/codex-1.2.2-linux-arm64.rpm',
          type: 'rpm',
          arch: 'ARM64'
        }
      ]
    }
  },
  {
    version: '1.0.8',
    date: '2025-01-28',
    isLatest: false,
    isStable: true,
    description: 'Added 5 new themes with app-wide color variables, improved text contrast across the UI, theme-aware chat inputs and title bar window controls, and macOS CI improvements.',
    downloads: {
      windows: [
        {
          name: 'Windows (x64)',
          url: 'https://github.com/iotserver24/codex/releases/download/v1.0.8/codex-1.0.8.Setup-86.exe',
          type: 'exe',
          arch: 'x64'
        },
        {
          name: 'Windows (ARM64)',
          url: 'https://github.com/iotserver24/codex/releases/download/v1.0.8/codex-1.0.8.Setup-arm64.exe',
          type: 'exe',
          arch: 'ARM64'
        }
      ],
      macos: [
        {
          name: 'Mac (ARM64)',
          url: 'https://github.com/iotserver24/codex/releases/download/v1.0.8/codex-darwin-arm64-1.0.8.zip',
          type: 'zip',
          arch: 'ARM64'
        },
        {
          name: 'Mac (x64)',
          url: 'https://github.com/iotserver24/codex/releases/download/v1.0.8/codex-darwin-x64-1.0.8.zip',
          type: 'zip',
          arch: 'x64'
        }
      ],
      linux: [
        {
          name: 'Linux (x64) DEB',
          url: 'https://github.com/iotserver24/codex/releases/download/v1.0.8/codex_1.0.8_amd64.deb',
          type: 'deb',
          arch: 'x64'
        },
        {
          name: 'Linux (ARM64) DEB',
          url: 'https://github.com/iotserver24/codex/releases/download/v1.0.8/codex_1.0.8_arm64.deb',
          type: 'deb',
          arch: 'ARM64'
        },
        {
          name: 'Linux (x64) RPM',
          url: 'https://github.com/iotserver24/codex/releases/download/v1.0.8/codex-1.0.8-1.x86_64.rpm',
          type: 'rpm',
          arch: 'x64'
        },
        {
          name: 'Linux (ARM64) RPM',
          url: 'https://github.com/iotserver24/codex/releases/download/v1.0.8/codex-1.0.8-1.arm64.rpm',
          type: 'rpm',
          arch: 'ARM64'
        }
      ]
    }
  },
  {
    version: '1.0.6',
    date: '2024-12-19',
    isLatest: false,
    isStable: true,
    description: 'Designer Mode (Beta), Thinking Budget System, Auto-Fix Problems, Native Git Support, Auto-Update System, and 27+ AI models including Claude 3.5 Haiku and Gemini 2.5 Flash Lite for free!',
    downloads: {
      windows: [
        {
          name: 'Windows (x64)',
          url: 'https://github.com/iotserver24/codex/releases/download/v1.0.6/codex-1.0.6-x86.Setup.exe',
          type: 'exe',
          arch: 'x64'
        },
        {
          name: 'Windows (ARM64)',
          url: 'https://github.com/iotserver24/codex/releases/download/v1.0.6/codex-1.0.6-arm64.Setup.exe',
          type: 'exe',
          arch: 'ARM64'
        }
      ],
      macos: [
        {
          name: 'Mac (ARM64)',
          url: 'https://github.com/iotserver24/codex/releases/download/v1.0.6/codex-darwin-arm64-1.0.6.zip',
          type: 'zip',
          arch: 'ARM64'
        },
        {
          name: 'Mac (x64)',
          url: 'https://github.com/iotserver24/codex/releases/download/v1.0.6/codex-darwin-x64-1.0.6.zip',
          type: 'zip',
          arch: 'x64'
        }
      ],
      linux: [
        {
          name: 'Linux (x64) DEB',
          url: 'https://github.com/iotserver24/codex/releases/download/v1.0.6/codex_1.0.6_x86.deb',
          type: 'deb',
          arch: 'x64'
        },
        {
          name: 'Linux (ARM64) DEB',
          url: 'https://github.com/iotserver24/codex/releases/download/v1.0.6/codex_1.0.6_arm64.deb',
          type: 'deb',
          arch: 'ARM64'
        },
        {
          name: 'Linux (x64) RPM',
          url: 'https://github.com/iotserver24/codex/releases/download/v1.0.6/codex-1.0.6-1.x86_64.rpm',
          type: 'rpm',
          arch: 'x64'
        },
        {
          name: 'Linux (ARM64) RPM',
          url: 'https://github.com/iotserver24/codex/releases/download/v1.0.6/codex-1.0.6-1.arm64.rpm',
          type: 'rpm',
          arch: 'ARM64'
        }
      ]
    }
  },
  {
    version: '1.0.4',
    date: '2024-11-15',
    isLatest: false,
    isStable: false,
    description: 'Vercel integration and enhanced features',
    downloads: {
      windows: [
        {
          name: 'Windows (x64)',
          url: 'https://github.com/iotserver24/codex/releases/download/v1.0.4/codex-1.0.4.Setup.exe',
          type: 'exe',
          arch: 'x64'
        }
      ],
      macos: [
        {
          name: 'Mac Universal',
          url: 'https://github.com/iotserver24/codex/releases/download/v1.0.4/macos-builds.zip',
          type: 'zip',
          arch: 'Universal'
        }
      ],
      linux: [
        {
          name: 'Linux (x64) DEB',
          url: 'https://github.com/iotserver24/codex/releases/download/v1.0.4/codex_1.0.4_amd64.deb',
          type: 'deb',
          arch: 'x64'
        },
        {
          name: 'Linux (x64) RPM',
          url: 'https://github.com/iotserver24/codex/releases/download/v1.0.4/codex-1.0.4-1.x86_64.rpm',
          type: 'rpm',
          arch: 'x64'
        }
      ]
    }
  },
  {
    version: '1.0.2',
    date: '2024-10-20',
    isLatest: false,
    isStable: false,
    description: 'Major update with Smart Context, Auto Error Fixing, and Turbo Edits',
    downloads: {
      windows: [
        {
          name: 'Windows (x64)',
          url: 'https://github.com/iotserver24/codex/releases/download/v1.0.2/VibeStack-Codex-1.0.2.Setup.exe',
          type: 'exe',
          arch: 'x64'
        }
      ],
      macos: [
        {
          name: 'Mac (ARM64)',
          url: 'https://github.com/iotserver24/codex/releases/download/v1.0.2/VibeStack-Codex-darwin-arm64-1.0.2.zip',
          type: 'zip',
          arch: 'ARM64'
        }
      ],
      linux: [
        {
          name: 'Linux (x64) DEB',
          url: 'https://github.com/iotserver24/codex/releases/download/v1.0.2/vibestack-codex_1.0.2_amd64.deb',
          type: 'deb',
          arch: 'x64'
        },
        {
          name: 'Linux (x64) RPM',
          url: 'https://github.com/iotserver24/codex/releases/download/v1.0.2/vibestack-codex-1.0.2-1.x86_64.rpm',
          type: 'rpm',
          arch: 'x64'
        }
      ]
    }
  },
  {
    version: '1.0.1',
    date: '2024-07-13',
    isLatest: false,
    isStable: false,
    description: 'In this update, many issues has been fixed and given new updates',
    downloads: {
      windows: [
        {
          name: 'Windows (x64)',
          url: 'https://github.com/iotserver24/codex/releases/download/v1.0.1/VibeStack-Codex-1.0.1.Setup.exe',
          type: 'exe',
          arch: 'x64'
        }
      ],
      macos: [
        {
          name: 'Mac (ARM64)',
          url: 'https://github.com/iotserver24/codex/releases/download/v1.0.1/VibeStack-Codex-darwin-arm64-1.0.1.zip',
          type: 'zip',
          arch: 'ARM64'
        }
      ],
      linux: [
        {
          name: 'Linux (x64) DEB',
          url: 'https://github.com/iotserver24/codex/releases/download/v1.0.1/vibestack-codex_1.0.1_amd64.deb',
          type: 'deb',
          arch: 'x64'
        },
        {
          name: 'Linux (x64) RPM',
          url: 'https://github.com/iotserver24/codex/releases/download/v1.0.1/vibestack-codex-1.0.1-1.x86_64.rpm',
          type: 'rpm',
          arch: 'x64'
        }
      ]
    }
  },
  {
    version: '1.0.0',
    date: '2024-07-11',
    isLatest: false,
    isStable: false,
    description: 'added logo',
    downloads: {
      windows: [
        {
          name: 'Windows (x64)',
          url: 'https://github.com/iotserver24/codex/releases/download/v1.0.0/VibeStack-Codex-1.0.0.Setup.exe',
          type: 'exe',
          arch: 'x64'
        }
      ],
      macos: [
        {
          name: 'Mac (ARM64)',
          url: 'https://github.com/iotserver24/codex/releases/download/v1.0.0/VibeStack-Codex-darwin-arm64-1.0.0.zip',
          type: 'zip',
          arch: 'ARM64'
        }
      ],
      linux: [
        {
          name: 'Linux (x64) DEB',
          url: 'https://github.com/iotserver24/codex/releases/download/v1.0.0/vibestack-codex_1.0.0_amd64.deb',
          type: 'deb',
          arch: 'x64'
        },
        {
          name: 'Linux (x64) RPM',
          url: 'https://github.com/iotserver24/codex/releases/download/v1.0.0/vibestack-codex-1.0.0-1.x86_64.rpm',
          type: 'rpm',
          arch: 'x64'
        }
      ]
    }
  }
];

const latestRelease = releases[0];

// OS Detection Function
function detectOS() {
  if (typeof window === 'undefined') return { platform: 'windows', arch: 'x64' }; // SSR fallback
  
  const userAgent = navigator.userAgent.toLowerCase();
  const platform = navigator.platform.toLowerCase();
  
  // Detect OS
  let os = 'windows';
  if (userAgent.includes('mac') || platform.includes('mac')) {
    os = 'macos';
  } else if (userAgent.includes('linux') || platform.includes('linux')) {
    os = 'linux';
  }
  
  // Detect Architecture
  let arch = 'x64';
  if (navigator.userAgent.includes('ARM64') || navigator.userAgent.includes('arm64')) {
    arch = 'ARM64';
  } else if (navigator.userAgent.includes('ARM') || navigator.userAgent.includes('arm')) {
    arch = 'ARM64';
  }
  
  return { platform: os, arch };
}

// Get appropriate download for detected OS
function getPrimaryDownload() {
  const { platform, arch } = detectOS();
  const downloads = latestRelease.downloads[platform];
  
  if (!downloads) {
    // Fallback to Windows if OS not supported
    return latestRelease.downloads.windows[0];
  }
  
  // Try to find exact architecture match
  let download = downloads.find(d => d.arch.toLowerCase() === arch.toLowerCase());
  
  // If no exact match, try to find Universal (for macOS) or fallback to first
  if (!download) {
    download = downloads.find(d => d.arch === 'Universal') || downloads[0];
  }
  
  return download;
}

// Get display text for primary download
function getPrimaryDownloadText() {
  const { platform, arch } = detectOS();
  const download = getPrimaryDownload();
  
  const osNames = {
    windows: 'Windows',
    macos: 'macOS',
    linux: 'Linux'
  };
  
  const archNames = {
    x64: 'x64',
    ARM64: 'ARM64',
    Universal: 'Universal'
  };
  
  return `Version ${latestRelease.version} for ${osNames[platform]} ${archNames[download.arch] || archNames.x64}`;
}

// Get OS icon
function getOSIcon() {
  const { platform } = detectOS();
  const icons = {
    windows: '🪟',
    macos: '🍎',
    linux: '🐧'
  };
  return icons[platform] || '🪟';
}

function DownloadButton({ download, isPrimary = false }: { download: any; isPrimary?: boolean }) {
  const osIcon = getOSIcon();
  
  return (
    <a
      href={download.url}
      className={clsx(styles.downloadButton, isPrimary && styles.primaryDownloadButton)}
      download
    >
      {isPrimary && <span className={styles.osIcon}>{osIcon}</span>}
      <span className={styles.downloadText}>
        {isPrimary ? `Download for ${detectOS().platform === 'macos' ? 'macOS' : detectOS().platform === 'linux' ? 'Linux' : 'Windows'}` : download.name}
      </span>
      <span className={styles.downloadArrow}>⬇️</span>
    </a>
  );
}

function PlatformCard({ title, downloads, icon }: { title: string; downloads: any[]; icon: string }) {
  return (
    <div className={styles.platformCard}>
      <div className={styles.platformHeader}>
        <span className={styles.platformIcon}>{icon}</span>
        <h3 className={styles.platformTitle}>{title}</h3>
      </div>
      <div className={styles.platformDownloads}>
        {downloads.map((download, index) => (
          <a
            key={index}
            href={download.url}
            className={styles.platformDownloadLink}
            download
          >
            <span className={styles.downloadName}>{download.name}</span>
            <span className={styles.downloadArrow}>⬇️</span>
          </a>
        ))}
      </div>
    </div>
  );
}

function VersionSection({ release, isExpanded, onToggle }: { 
  release: any; 
  isExpanded: boolean; 
  onToggle: () => void;
}) {
  return (
    <div className={styles.versionSection}>
      <div className={styles.versionHeader} onClick={onToggle}>
        <div className={styles.versionInfo}>
          <span className={styles.versionNumber}>{release.version}</span>
          {release.isLatest && <span className={styles.latestBadge}>LATEST VERSION</span>}
        </div>
        <div className={styles.versionActions}>
          <Link
            to={`https://github.com/iotserver24/codex/releases/tag/v${release.version}`}
            className={styles.releaseNotesLink}
            onClick={(e) => e.stopPropagation()}
          >
            Read the release notes
          </Link>
          <span className={clsx(styles.expandIcon, isExpanded && styles.expanded)}>
            {isExpanded ? '▼' : '▶'}
          </span>
        </div>
      </div>
      
      {isExpanded && (
        <div className={styles.versionContent}>
          <div className={styles.platformsGrid}>
            {release.downloads.windows && release.downloads.windows.length > 0 && (
              <PlatformCard title="Windows" downloads={release.downloads.windows} icon="🪟" />
            )}
            {release.downloads.macos && release.downloads.macos.length > 0 && (
              <PlatformCard title="macOS" downloads={release.downloads.macos} icon="🍎" />
            )}
            {release.downloads.linux && release.downloads.linux.length > 0 && (
              <PlatformCard title="Linux" downloads={release.downloads.linux} icon="🐧" />
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default function DownloadPage(): JSX.Element {
  const [expandedVersions, setExpandedVersions] = useState<{ [key: string]: boolean }>({
    '1.2.2': true, // Latest version expanded by default
    '1.0.8': false,
    '1.0.6': false,
    '1.0.4': false,
    '1.0.2': false,
    '1.0.1': false,
    '1.0.0': false
  });

  const [primaryDownload, setPrimaryDownload] = useState<any>(null);
  const [primaryDownloadText, setPrimaryDownloadText] = useState<string>('');

  useEffect(() => {
    // Set primary download after component mounts (client-side)
    setPrimaryDownload(getPrimaryDownload());
    setPrimaryDownloadText(getPrimaryDownloadText());
  }, []);

  const toggleVersion = (version: string) => {
    setExpandedVersions(prev => ({
      ...prev,
      [version]: !prev[version]
    }));
  };

  return (
    <Layout
      title="Download Xibe AI"
      description="Download Xibe AI - Free AI-powered development platform for Windows, macOS, and Linux"
    >
      <main className={styles.main}>
        <div className="container">
          {/* Main Download Section */}
          <div className={styles.mainDownloadSection}>
            <div className={styles.logoSection}>
              <div className={styles.logo}>
                <RocketIcon size={48} />
              </div>
            </div>
            <h1 className={styles.mainTitle}>Download Xibe AI</h1>
            
            {/* Primary Download Button */}
            <div className={styles.primaryDownload}>
              {primaryDownload && (
                <DownloadButton 
                  download={primaryDownload} 
                  isPrimary={true} 
                />
              )}
              <span className={styles.primaryDownloadText}>
                {primaryDownloadText || `Version ${latestRelease.version} for Windows 10/11 (x64)`}
              </span>
            </div>
            
            {/* Security Note */}
            <div className={styles.securityNote}>
              <p>
                ⚠️ <strong>Security Notice:</strong> Your browser may show a security warning when downloading executable files. 
                This is normal for open-source software. Click "Keep" or "Download anyway" to proceed with the download.
              </p>
            </div>
          </div>

          {/* All Versions Section */}
          <div className={styles.allVersionsSection}>
            <h2 className={styles.allVersionsTitle}>All Versions</h2>
            <div className={styles.versionsList}>
              {releases.map((release, index) => (
                <VersionSection
                  key={index}
                  release={release}
                  isExpanded={expandedVersions[release.version]}
                  onToggle={() => toggleVersion(release.version)}
                />
              ))}
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
