---
sidebar_position: 4
---

# Environment Variables

Xibe AI provides powerful environment variable management to help you configure your applications and AI providers securely.

## Overview

Environment variables in Xibe AI allow you to:
- Store API keys and sensitive configuration securely
- Configure different environments (development, staging, production)
- Manage AI provider credentials
- Set up deployment configurations

## Managing Environment Variables

### Adding Environment Variables

1. **Open Settings**: Go to Settings → General
2. **Environment Variables Section**: Find the "Environment Variables" section
3. **Add New Variable**: Click "Add Variable" button
4. **Configure**:
   - **Key**: Variable name (e.g., `OPENAI_API_KEY`)
   - **Value**: Variable value (your API key or configuration)
   - **Description**: Optional description for reference

### Environment Variable Types

#### AI Provider API Keys
```
OPENAI_API_KEY=sk-your-openai-key
ANTHROPIC_API_KEY=sk-ant-your-anthropic-key
GOOGLE_API_KEY=your-google-api-key
```

#### Custom Provider Configuration
```
CUSTOM_AI_BASE_URL=https://your-custom-endpoint.com/v1
CUSTOM_AI_API_KEY=your-custom-key
```

#### Application Configuration
```
NODE_ENV=development
DATABASE_URL=your-database-url
VERCEL_TOKEN=your-vercel-token
```

## Per-App Environment Variables

Xibe AI supports both global and per-app environment variables:

### Global Variables
- Available across all projects
- Perfect for API keys and common configurations
- Managed in Settings

### App-Specific Variables
- Only available to specific applications
- Override global variables for app-specific needs
- Managed in App Details → Environment Variables

### Setting App-Specific Variables

1. **Open App Details**: Navigate to your app
2. **Environment Tab**: Click on "Environment Variables"
3. **Add Variables**: Configure variables specific to this app
4. **Save**: Changes are automatically applied

## Environment Variable Precedence

Xibe AI follows this precedence order (highest to lowest):
1. App-specific variables
2. Global variables
3. System environment variables

## Security Best Practices

### API Key Management
- **Never commit API keys** to version control
- **Use descriptive names** for easy identification
- **Rotate keys regularly** for security
- **Use different keys** for different environments

### Variable Naming Conventions
```
# AI Providers
PROVIDER_NAME_API_KEY=key-value

# Custom Endpoints
CUSTOM_PROVIDER_BASE_URL=url-value

# Application Config
APP_NAME_CONFIG_KEY=config-value
```

## Common Environment Variables

### OpenAI Configuration
```
OPENAI_API_KEY=sk-your-key
OPENAI_ORG_ID=org-your-org-id
```

### Anthropic Configuration
```
ANTHROPIC_API_KEY=sk-ant-your-key
```

### Google AI Configuration
```
GOOGLE_API_KEY=your-google-key
GOOGLE_AI_STUDIO_KEY=your-studio-key
```

### Custom AI Providers
```
CUSTOM_AI_BASE_URL=https://api.your-provider.com/v1
CUSTOM_AI_API_KEY=your-custom-key
CUSTOM_AI_MODEL=gpt-4
```

### Vercel Integration
```
VERCEL_TOKEN=your-vercel-token
VERCEL_TEAM_ID=your-team-id
```

### Supabase Integration
```
SUPABASE_URL=your-supabase-url
SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
```

## Troubleshooting

### Variable Not Found
- Check variable name spelling
- Verify the variable is set for the correct scope (global vs app)
- Restart the app after adding new variables

### API Key Issues
- Ensure API key is valid and has sufficient credits
- Check provider-specific requirements
- Verify the key format is correct

### Environment Conflicts
- Check variable precedence
- Ensure no conflicting variables exist
- Clear app cache if needed

## Advanced Configuration

### Custom AI Provider Setup
```
# Base configuration
CUSTOM_AI_BASE_URL=https://api.your-provider.com/v1
CUSTOM_AI_API_KEY=your-key

# Model-specific configuration
CUSTOM_AI_MODEL=gpt-4
CUSTOM_AI_MAX_TOKENS=4000
CUSTOM_AI_TEMPERATURE=0.7
```

### Development vs Production
```
# Development
NODE_ENV=development
DEBUG=true
LOG_LEVEL=debug

# Production
NODE_ENV=production
DEBUG=false
LOG_LEVEL=error
```

## Integration with AI Providers

Environment variables are automatically used by Xibe AI's AI providers:

1. **Automatic Detection**: Xibe AI detects and uses relevant variables
2. **Provider Selection**: Variables determine which providers are available
3. **Model Access**: API keys enable access to specific models
4. **Rate Limiting**: Proper configuration ensures optimal usage

## Export/Import Environment Variables

### Export Configuration
- Export your environment variables for backup
- Share configurations across team members
- Version control your environment setup

### Import Configuration
- Import environment variables from files
- Bulk configure multiple variables
- Restore from backups

## Best Practices Summary

1. **Use descriptive names** for all variables
2. **Keep sensitive data secure** - never commit to version control
3. **Use app-specific variables** for project-specific configuration
4. **Regularly rotate API keys** for security
5. **Document your configuration** for team members
6. **Test configurations** in development before production
7. **Use environment-specific values** for different stages 