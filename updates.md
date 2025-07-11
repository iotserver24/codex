# Update & Release Process

Codex uses GitHub Releases for distributing updates.

## How Updates Work
- The app checks for updates on startup and every 2 hours.
- If a new version is available, it is downloaded and the user is prompted to restart.
- Updates are delivered via the GitHub Releases page: [iotserver24/codex/releases](https://github.com/iotserver24/codex/releases)

## How to Get Updates
1. Open Codex.
2. If an update is available, you will see a prompt to restart and apply the update.
3. You can also manually check for updates by restarting the app.

## How We Release Updates
- New versions are built and uploaded to the GitHub Releases page.
- Release notes are provided for each version.
- Users do not need to manually download updates after the first install.

## Custom Update Server
- Advanced users can set a custom update server URL in the app settings.
- By default, updates are fetched from GitHub Releases.

For more details, see the [Getting Started](./getting-started.md) guide. 