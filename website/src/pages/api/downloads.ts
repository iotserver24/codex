import type { NextApiRequest, NextApiResponse } from 'next';

const releases = [
  {
    version: '1.0.6',
    date: '2024-12-19',
    isLatest: true,
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

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method, query } = req;

  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { version, platform, arch } = query;

    // If specific version is requested
    if (version) {
      const release = releases.find(r => r.version === version);
      if (!release) {
        return res.status(404).json({ error: 'Version not found' });
      }
      return res.status(200).json({ release });
    }

    // If platform and arch are specified, return matching downloads
    if (platform && arch) {
      const latestRelease = releases[0]; // Get latest version
      const platformDownloads = latestRelease.downloads[platform as string];
      
      if (!platformDownloads) {
        return res.status(404).json({ error: 'Platform not found' });
      }

      const download = platformDownloads.find(d => d.arch.toLowerCase() === (arch as string).toLowerCase());
      if (!download) {
        return res.status(404).json({ error: 'Architecture not found' });
      }

      return res.status(200).json({ download });
    }

    // If platform only is specified, return all downloads for that platform
    if (platform) {
      const latestRelease = releases[0];
      const platformDownloads = latestRelease.downloads[platform as string];
      
      if (!platformDownloads) {
        return res.status(404).json({ error: 'Platform not found' });
      }

      return res.status(200).json({ downloads: platformDownloads });
    }

    // Return all releases by default
    return res.status(200).json({ 
      releases,
      latest: releases[0],
      totalVersions: releases.length
    });

  } catch (error) {
    console.error('API Error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
