---
sidebar_position: 7
---

# Contributing to VibeStack Codex Documentation

We welcome contributions to the documentation! While the VibeStack Codex application itself is closed source, we encourage community contributions to help improve the documentation for all users.

## What You Can Contribute

- **Documentation improvements** - Fix typos, clarify instructions, add examples
- **New guides** - Write tutorials, how-to guides, or best practices
- **FAQ updates** - Add commonly asked questions and answers
- **Translation** - Help translate documentation to other languages (future feature)

## How to Contribute

### Quick Edits
For small changes like typos or minor corrections:
1. Browse to the page you want to edit on the documentation website
2. Click the "Edit this page" link at the bottom
3. Make your changes directly on GitHub
4. Submit a pull request

### Larger Contributions
For new pages or significant changes:

1. **Fork the repository**
   ```bash
   git clone https://github.com/iotserver24/codex.git
   cd codex/docs/website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Make your changes**
   - Edit files in the `docs/` folder
   - Preview your changes at `http://localhost:3000`

5. **Submit a pull request**
   - Commit your changes with clear commit messages
   - Push to your fork and create a pull request
   - Provide a clear description of your changes

## Documentation Guidelines

### Writing Style
- **Clear and concise** - Use simple language and short sentences
- **User-focused** - Write from the user's perspective
- **Actionable** - Include specific steps and examples
- **Consistent** - Follow existing patterns and terminology

### Formatting
- Use **Markdown** formatting consistently
- Include **code blocks** with proper syntax highlighting
- Add **screenshots** when helpful (store in `static/img/`)
- Use **tables** for structured data like model comparisons

### File Organization
- Place new documentation files in `docs/website/docs/`
- Use descriptive filenames (e.g., `getting-started.md`)
- Update `sidebars.ts` if adding new sections
- Add appropriate frontmatter with `sidebar_position`

## What We Don't Accept

Since VibeStack Codex is closed source, we cannot accept:
- Code contributions to the main application
- Feature requests requiring code changes
- Bug reports about the application itself (please use GitHub Issues instead)

## Review Process

1. **Automated checks** - Your PR will be automatically checked for formatting and links
2. **Community review** - Other contributors may provide feedback
3. **Maintainer approval** - A project maintainer will review and merge approved changes
4. **Deployment** - Changes are automatically deployed to the documentation website

## Recognition

Contributors to the documentation will be:
- Listed in the commit history
- Credited in major documentation releases
- Welcomed as community members

## Getting Help

Need help with your contribution?
- **GitHub Discussions** - Ask questions about documentation
- **Issues** - Report problems with the documentation
- **Discord** - Join our community chat (link coming soon)

## Code of Conduct

By contributing, you agree to:
- Be respectful and inclusive
- Focus on constructive feedback
- Help maintain a welcoming community
- Follow GitHub's community guidelines

---

Thank you for helping make VibeStack Codex documentation better for everyone! 🎉 