# VibeStack-Codex Update Modal & version.json Reference

## Update Modal UI/UX Features

- **Automatic check:** On app launch, checks for updates in the background.
- **Modal dialog appears** if a new version is available (unless suppressed for this version):
  - Info icon and bold "Update Available" title
  - New version number (bolded)
  - **Release Notes** section, rendered with real line breaks (use `\n` in JSON)
  - **Buttons:**
    1. **Download Update:** Opens the `downloadUrl` in the user's browser
    2. **Remind Me Later:** Closes modal, will show again next launch if update is still available
    3. **Don't Show Again for This Version:** Suppresses modal for this version (until a newer version is released)
- **If up to date:** Shows a toast notification (not a modal)
- **If error:** Shows a toast error
- **Theming:** Modal and notifications use the app's dark/light theme and consistent UI components

---

## version.json Fields

- `version`: string (e.g. "1.0.2")
- `downloadUrl`: string (link to latest release)
- `releaseNotes`: string (use `\n` for new lines; will be rendered as real line breaks in the UI)

---

## Example version.json
```json
{
  "version": "1.0.2",
  "downloadUrl": "https://github.com/iotserver24/codex/releases/latest",
  "releaseNotes": "✨ Major update for process, speed, and AI contexting.\n\n🚀 In the next update (1.0.3), there will be a direct deploy button—stay tuned!\n🙏 Please donate to help us keep the app running. Even a penny helps us provide updates!"
}
```

---

## Usage Notes
- Use only valid JSON for `version.json` (no comments).
- For editing/documentation, keep this markdown file or a `.jsonc` file with comments.
- Use `\n` in `releaseNotes` for new lines; the UI will render them as real line breaks.
- You can update the modal UI/UX by referring to this file for all supported features and controls. 
