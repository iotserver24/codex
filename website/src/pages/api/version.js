// docs/website/src/pages/api/version.js

export default function handler(req, res) {
  res.status(200).json({
    version: "1.0.0", // <-- Update this on every release!
    downloadUrl: "https://github.com/iotserver24/codex/releases/latest",
    releaseNotes: "Initial release. Add your release notes here."
  });
} 