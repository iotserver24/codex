import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import { RocketIcon, MobileIcon } from '@site/src/components/icons';
import styles from './api-docs.module.css';

export default function ApiDocsPage(): JSX.Element {
  return (
    <Layout
      title="CodeX Downloads API"
      description="API documentation for CodeX downloads - integrate download information into your applications"
    >
      <main className={styles.main}>
        <div className="container">
          <div className={styles.header}>
            <h1 className={styles.title}>📡 CodeX Downloads API</h1>
            <p className={styles.subtitle}>
              Access download information programmatically for all CodeX releases
            </p>
          </div>

          <div className={styles.content}>
            <section className={styles.section}>
              <h2><RocketIcon size={24} /> Quick Start</h2>
              <div className={styles.endpoint}>
                <h3>Base URL</h3>
                <code className={styles.code}>
                  https://codex.anishkumar.tech/api/downloads.json
                </code>
                <p>This is a static JSON file that contains all download information.</p>
              </div>
            </section>

            <section className={styles.section}>
              <h2>📋 API Structure</h2>
              
              <div className={styles.endpoint}>
                <h3>Get All Releases</h3>
                <code className={styles.code}>GET /api/downloads.json</code>
                <p>Returns all available releases with download information.</p>
                <div className={styles.example}>
                  <h4>Example Response:</h4>
                  <pre className={styles.json}>
{`{
  "releases": [...],
  "latest": {
    "version": "1.0.6",
    "date": "2024-12-19",
    "isLatest": true,
    "description": "..."
  },
  "totalVersions": 5
}`}
                  </pre>
                </div>
              </div>

              <div className={styles.endpoint}>
                <h3>Get Latest Release</h3>
                <code className={styles.code}>Access the "latest" property</code>
                <p>Access the <code>latest</code> property from the response.</p>
              </div>

              <div className={styles.endpoint}>
                <h3>Get Specific Version</h3>
                <code className={styles.code}>Filter releases array by version</code>
                <p>Find a specific version in the releases array.</p>
              </div>

              <div className={styles.endpoint}>
                <h3>Get Platform Downloads</h3>
                <code className={styles.code}>Filter latest.downloads by platform</code>
                <p>Get downloads for specific platforms: <code>windows</code>, <code>macos</code>, <code>linux</code></p>
              </div>
            </section>

            <section className={styles.section}>
              <h2>💻 Usage Examples</h2>
              
              <div className={styles.example}>
                <h3>JavaScript/TypeScript</h3>
                <pre className={styles.codeBlock}>
{`// Fetch all releases
const response = await fetch('https://codex.anishkumar.tech/api/downloads.json');
const data = await response.json();

// Get latest version
const latestVersion = data.latest.version;

// Get Windows downloads for latest version
const windowsDownloads = data.releases[0].downloads.windows;

// Find specific version
const v1_0_4 = data.releases.find(r => r.version === '1.0.4');

// Get download URL for Windows x64
const windowsX64 = windowsDownloads.find(d => d.arch === 'x64');
console.log(windowsX64.url);`}
                </pre>
              </div>

              <div className={styles.example}>
                <h3>Python</h3>
                <pre className={styles.codeBlock}>
{`import requests
import json

# Fetch all releases
response = requests.get('https://codex.anishkumar.tech/api/downloads.json')
data = response.json()

# Get latest version
latest_version = data['latest']['version']

# Get Windows downloads
windows_downloads = data['releases'][0]['downloads']['windows']

# Find specific version
v1_0_4 = next(r for r in data['releases'] if r['version'] == '1.0.4')

# Get download URL for Windows x64
windows_x64 = next(d for d in windows_downloads if d['arch'] == 'x64')
print(windows_x64['url'])`}
                </pre>
              </div>

              <div className={styles.example}>
                <h3>cURL</h3>
                <pre className={styles.codeBlock}>
{`# Get all releases
curl https://codex.anishkumar.tech/api/downloads.json

# Save to file
curl -o downloads.json https://codex.anishkumar.tech/api/downloads.json`}
                </pre>
              </div>
            </section>

            <section className={styles.section}>
              <h2>📊 Data Structure</h2>
              
              <div className={styles.structure}>
                <h3>Release Object</h3>
                <pre className={styles.json}>
{`{
  "version": "1.0.6",
  "date": "2024-12-19",
  "isLatest": true,
  "isStable": true,
  "description": "Release description...",
  "downloads": {
    "windows": [
      {
        "name": "Windows (x64)",
        "url": "https://github.com/...",
        "type": "exe",
        "arch": "x64"
      }
    ],
    "macos": [...],
    "linux": [...]
  }
}`}
                </pre>
              </div>

              <div className={styles.structure}>
                <h3>Download Object</h3>
                <pre className={styles.json}>
{`{
  "name": "Windows (x64)",
  "url": "https://github.com/iotserver24/codex/releases/download/v1.0.6/codex-1.0.6-x86.Setup.exe",
  "type": "exe",
  "arch": "x64"
}`}
                </pre>
              </div>
            </section>

            <section className={styles.section}>
              <h2>🔧 Integration Ideas</h2>
              
              <div className={styles.ideas}>
                <div className={styles.idea}>
                  <h3>🖥️ Desktop Applications</h3>
                  <p>Check for updates and download the latest version automatically.</p>
                </div>
                
                <div className={styles.idea}>
                  <h3>🌐 Websites</h3>
                  <p>Display download buttons with the latest version information.</p>
                </div>
                
                <div className={styles.idea}>
                  <h3><MobileIcon size={20} /> Mobile Apps</h3>
                  <p>Show available versions and redirect to appropriate downloads.</p>
                </div>
                
                <div className={styles.idea}>
                  <h3>🤖 CI/CD Pipelines</h3>
                  <p>Automate testing with the latest release versions.</p>
                </div>
              </div>
            </section>

            <section className={styles.section}>
              <h2>📞 Support</h2>
              <p>
                Need help integrating the API? Check out our{' '}
                <Link to="/download">download page</Link> for a working example, or{' '}
                <Link to="https://github.com/iotserver24/codex/issues">report issues</Link> on GitHub.
              </p>
            </section>
          </div>
        </div>
      </main>
    </Layout>
  );
}
