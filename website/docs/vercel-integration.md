---
sidebar_position: 5
---

# Vercel Integration

CodeX provides seamless integration with Vercel for deploying your applications directly from the platform.

## Overview

Vercel integration in CodeX allows you to:
- Deploy applications to Vercel with one click
- Manage Vercel projects directly from CodeX
- Connect existing Vercel projects to your CodeX apps
- Monitor deployments and performance
- Configure custom domains and environments

## Getting Started

### Prerequisites

1. **Vercel Account**: Create a free account at [vercel.com](https://vercel.com)
2. **Vercel Token**: Generate an access token from your Vercel dashboard
3. **Environment Variable**: Add your Vercel token to CodeX settings

### Setting Up Vercel Integration

#### Step 1: Generate Vercel Token

1. **Login to Vercel**: Go to [vercel.com](https://vercel.com) and sign in
2. **Access Tokens**: Navigate to Settings → Tokens
3. **Create Token**: Click "Create Token"
4. **Configure Token**:
   - **Name**: `CodeX Integration`
   - **Expiration**: Choose appropriate expiration (recommend 1 year)
   - **Scopes**: Select "Full Account" for full access
5. **Copy Token**: Save the generated token securely

#### Step 2: Add Token to CodeX

1. **Open Settings**: Go to Settings → General
2. **Environment Variables**: Find the Environment Variables section
3. **Add Variable**:
   - **Key**: `VERCEL_TOKEN`
   - **Value**: Your Vercel access token
   - **Description**: `Vercel deployment token`

## Managing Vercel Projects

### Connecting to Existing Projects

1. **Open App Details**: Navigate to your app in CodeX
2. **Vercel Tab**: Click on the "Vercel" tab
3. **Connect Project**: Click "Connect to Vercel Project"
4. **Select Project**: Choose from your existing Vercel projects
5. **Confirm**: The project will be linked to your CodeX app

### Creating New Vercel Projects

1. **Open App Details**: Navigate to your app
2. **Vercel Tab**: Click on the "Vercel" tab
3. **Create Project**: Click "Create New Vercel Project"
4. **Configure Project**:
   - **Project Name**: Enter a name for your Vercel project
   - **Framework**: Select your project's framework
   - **Root Directory**: Specify the root directory (usually `/`)
5. **Create**: The project will be created and linked

## Deployment Process

### Automatic Deployment

CodeX can automatically deploy your app to Vercel:

1. **Enable Auto-Deploy**: Toggle "Auto Deploy" in the Vercel tab
2. **Configure Triggers**: Set when deployments should occur:
   - **On Save**: Deploy when you save changes
   - **On Commit**: Deploy when you commit to Git
   - **Manual**: Deploy only when you click "Deploy"

### Manual Deployment

1. **Open Vercel Tab**: Navigate to your app's Vercel tab
2. **Deploy Button**: Click "Deploy to Vercel"
3. **Monitor Progress**: Watch the deployment progress
4. **View Results**: Access your deployed application

### Deployment Configuration

#### Build Settings
```
Build Command: npm run build
Output Directory: dist
Install Command: npm install
```

#### Environment Variables
- **Production**: Variables for production deployment
- **Preview**: Variables for preview deployments
- **Development**: Variables for development builds

## Project Management

### Viewing Deployments

1. **Vercel Tab**: Open the Vercel tab in your app
2. **Deployments List**: View all deployments with status
3. **Deployment Details**: Click on a deployment for details
4. **Live URL**: Access your deployed application

### Managing Domains

1. **Domains Section**: Find the Domains section in Vercel tab
2. **Add Domain**: Click "Add Domain"
3. **Configure DNS**: Follow Vercel's DNS configuration guide
4. **Verify**: Verify domain ownership

### Environment Variables

#### Setting Vercel Environment Variables

1. **Environment Tab**: Go to the Environment Variables section
2. **Add Variables**: Add variables specific to Vercel deployment
3. **Environment Selection**: Choose which environment (Production/Preview/Development)
4. **Save**: Variables are automatically synced to Vercel

#### Common Vercel Variables
```
NODE_ENV=production
VERCEL_ENV=production
DATABASE_URL=your-production-db-url
API_KEY=your-production-api-key
```

## Advanced Features

### Custom Build Commands

Configure custom build commands for your project:

```json
{
  "build": {
    "command": "npm run build",
    "output": "dist",
    "install": "npm install"
  }
}
```

### Framework Detection

CodeX automatically detects your project framework:

- **Next.js**: Automatic Next.js configuration
- **React**: Standard React build setup
- **Vue**: Vue.js build configuration
- **Angular**: Angular CLI build setup
- **Custom**: Manual configuration options

### Preview Deployments

1. **Enable Previews**: Toggle preview deployments
2. **Branch Deployments**: Deploy feature branches automatically
3. **Preview URLs**: Get unique URLs for each deployment
4. **Testing**: Test changes before merging to main

## Troubleshooting

### Common Issues

#### Deployment Failures
- **Check Build Logs**: Review build output for errors
- **Verify Dependencies**: Ensure all dependencies are installed
- **Check Environment Variables**: Verify all required variables are set
- **Framework Compatibility**: Ensure your project is compatible with Vercel

#### Connection Issues
- **Token Validity**: Verify your Vercel token is valid and not expired
- **Permissions**: Ensure token has sufficient permissions
- **Network**: Check your internet connection
- **Vercel Status**: Check Vercel's status page for service issues

#### Build Errors
- **Node Version**: Ensure compatible Node.js version
- **Build Script**: Verify build script exists in package.json
- **Dependencies**: Check for missing or incompatible dependencies
- **File Size**: Ensure files don't exceed Vercel's limits

### Debugging Steps

1. **Check Logs**: Review deployment logs in Vercel dashboard
2. **Local Testing**: Test build locally before deploying
3. **Environment Variables**: Verify all variables are correctly set
4. **Framework Configuration**: Check framework-specific settings

## Best Practices

### Performance Optimization

1. **Image Optimization**: Use Vercel's image optimization
2. **Code Splitting**: Implement proper code splitting
3. **Caching**: Configure appropriate caching strategies
4. **CDN**: Leverage Vercel's global CDN

### Security

1. **Environment Variables**: Never commit sensitive data
2. **Token Security**: Keep Vercel tokens secure
3. **Access Control**: Use appropriate team permissions
4. **HTTPS**: Always use HTTPS in production

### Monitoring

1. **Analytics**: Enable Vercel Analytics
2. **Performance**: Monitor Core Web Vitals
3. **Uptime**: Track application uptime
4. **Error Tracking**: Implement error monitoring

## Integration with Other Services

### Database Integration
- **Supabase**: Direct integration with Supabase
- **PlanetScale**: MySQL database integration
- **MongoDB**: NoSQL database support
- **PostgreSQL**: Relational database support

### Authentication
- **NextAuth.js**: Built-in authentication support
- **Auth0**: Third-party authentication
- **Supabase Auth**: Supabase authentication
- **Custom Auth**: Custom authentication solutions

### API Integration
- **Vercel Functions**: Serverless API functions
- **External APIs**: Connect to external services
- **Webhooks**: Configure webhook endpoints
- **GraphQL**: GraphQL API support

## Cost Optimization

### Free Tier Limits
- **Bandwidth**: 100GB per month
- **Build Minutes**: 6,000 minutes per month
- **Serverless Functions**: 100GB-Hrs per month
- **Edge Functions**: 500,000 invocations per month

### Pro Features
- **Custom Domains**: Unlimited custom domains
- **Team Collaboration**: Team management features
- **Advanced Analytics**: Detailed performance metrics
- **Priority Support**: Faster support response

## Migration from Other Platforms

### From Netlify
1. **Export Configuration**: Export your Netlify configuration
2. **Import to Vercel**: Import settings to Vercel
3. **Update DNS**: Update DNS records
4. **Test Deployment**: Verify everything works

### From Heroku
1. **Build Configuration**: Update build configuration
2. **Environment Variables**: Migrate environment variables
3. **Database Migration**: Migrate database if needed
4. **Deploy**: Deploy to Vercel

### From AWS/GCP
1. **Simplify Configuration**: Remove cloud-specific settings
2. **Update Dependencies**: Ensure compatibility
3. **Environment Setup**: Configure Vercel environment
4. **Deploy**: Deploy to Vercel

## Support and Resources

### Documentation
- [Vercel Documentation](https://vercel.com/docs)
- [CodeX Vercel Integration Guide](https://codex.anishkumar.tech/docs/vercel-integration)
- [Framework Guides](https://vercel.com/docs/frameworks)

### Community
- [Vercel Community](https://github.com/vercel/vercel/discussions)
- [CodeX Discord](https://discord.gg/codex)
- [GitHub Issues](https://github.com/iotserver24/codex/issues)

### Support
- **Vercel Support**: [support.vercel.com](https://support.vercel.com)
- **CodeX Support**: [codex.anishkumar.tech/support](https://codex.anishkumar.tech/support) 