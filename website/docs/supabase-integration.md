---
sidebar_position: 6
---

# Supabase Integration

Xibe AI provides powerful integration with Supabase for database management, authentication, and real-time features.

## Overview

Supabase integration in Xibe AI allows you to:
- Connect to Supabase databases directly from Xibe AI
- Generate and manage database schemas
- Create and run SQL migrations
- Set up authentication systems
- Implement real-time subscriptions
- Manage storage buckets and files

## Getting Started

### Prerequisites

1. **Supabase Account**: Create a free account at [supabase.com](https://supabase.com)
2. **Supabase Project**: Create a new project in your Supabase dashboard
3. **API Keys**: Get your project URL and API keys
4. **Environment Variables**: Add Supabase credentials to Xibe AI

### Setting Up Supabase Integration

#### Step 1: Create Supabase Project

1. **Login to Supabase**: Go to [supabase.com](https://supabase.com) and sign in
2. **New Project**: Click "New Project"
3. **Configure Project**:
   - **Name**: Enter your project name
   - **Database Password**: Set a secure password
   - **Region**: Choose the closest region
4. **Create**: Wait for project initialization

#### Step 2: Get API Credentials

1. **Project Settings**: Go to Settings → API
2. **Copy Credentials**:
   - **Project URL**: Your project's URL
   - **Anon Key**: Public API key
   - **Service Role Key**: Private API key (keep secure)

#### Step 3: Add to Xibe AI

1. **Open Settings**: Go to Settings → General
2. **Environment Variables**: Add the following variables:
   ```
   SUPABASE_URL=your-project-url
   SUPABASE_ANON_KEY=your-anon-key
   SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
   ```

## Database Management

### Connecting to Database

1. **Open App Details**: Navigate to your app in Xibe AI
2. **Supabase Tab**: Click on the "Supabase" tab
3. **Connect Database**: Click "Connect to Supabase"
4. **Enter Credentials**: Input your Supabase URL and keys
5. **Test Connection**: Verify the connection works

### Schema Management

#### Viewing Current Schema

1. **Schema Tab**: Go to the Schema section
2. **Tables List**: View all tables in your database
3. **Table Details**: Click on a table to see its structure
4. **Relationships**: View foreign key relationships

#### Creating Tables

1. **New Table**: Click "Create Table"
2. **Table Configuration**:
   - **Name**: Enter table name
   - **Columns**: Add columns with types and constraints
   - **Primary Key**: Set primary key
   - **Foreign Keys**: Add relationships
3. **Save**: Create the table

#### Example Table Creation

```sql
-- Users table
CREATE TABLE users (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  name VARCHAR(255),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Posts table
CREATE TABLE posts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  content TEXT,
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

### SQL Editor

#### Running Queries

1. **SQL Tab**: Open the SQL Editor
2. **Write Query**: Enter your SQL query
3. **Execute**: Click "Run Query"
4. **View Results**: See query results in the results panel

#### Query Examples

```sql
-- Select all users
SELECT * FROM users;

-- Insert new user
INSERT INTO users (email, name) VALUES ('user@example.com', 'John Doe');

-- Update user
UPDATE users SET name = 'Jane Doe' WHERE email = 'user@example.com';

-- Delete user
DELETE FROM users WHERE email = 'user@example.com';
```

### Migrations

#### Creating Migrations

1. **Migrations Tab**: Go to the Migrations section
2. **New Migration**: Click "Create Migration"
3. **Write SQL**: Enter your migration SQL
4. **Save**: Save the migration file

#### Running Migrations

1. **Migration List**: View all available migrations
2. **Run Migration**: Click "Run" on a migration
3. **Check Status**: Verify migration was applied
4. **Rollback**: Optionally rollback if needed

#### Migration Examples

```sql
-- Migration: 001_create_users_table.sql
CREATE TABLE users (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  name VARCHAR(255),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Migration: 002_add_posts_table.sql
CREATE TABLE posts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  content TEXT,
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

## Authentication

### Setting Up Authentication

1. **Auth Tab**: Go to the Authentication section
2. **Enable Auth**: Toggle authentication on
3. **Configure Providers**: Set up authentication providers
4. **Customize UI**: Configure login/signup forms

### Authentication Providers

#### Email/Password
- **Enable**: Toggle email/password authentication
- **Settings**: Configure password requirements
- **Templates**: Customize email templates

#### Social Providers
- **Google**: Configure Google OAuth
- **GitHub**: Set up GitHub authentication
- **Discord**: Enable Discord login
- **Custom**: Add custom OAuth providers

#### Magic Links
- **Enable**: Toggle magic link authentication
- **Settings**: Configure link expiration
- **Templates**: Customize email templates

### User Management

#### Viewing Users

1. **Users Tab**: Go to the Users section
2. **User List**: View all registered users
3. **User Details**: Click on a user for details
4. **Actions**: Edit, delete, or manage user roles

#### User Roles

```sql
-- Create roles table
CREATE TABLE user_roles (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  role VARCHAR(50) NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Insert roles
INSERT INTO user_roles (user_id, role) VALUES 
  ('user-uuid', 'admin'),
  ('user-uuid', 'moderator');
```

## Real-time Features

### Setting Up Real-time

1. **Real-time Tab**: Go to the Real-time section
2. **Enable Realtime**: Toggle real-time features
3. **Configure Tables**: Select tables for real-time updates
4. **Set Policies**: Configure Row Level Security (RLS)

### Real-time Subscriptions

#### Client-side Setup

```javascript
// Subscribe to table changes
const subscription = supabase
  .channel('table-db-changes')
  .on('postgres_changes', 
    { event: '*', schema: 'public', table: 'posts' },
    (payload) => {
      console.log('Change received!', payload)
    }
  )
  .subscribe()
```

#### Server-side Setup

```javascript
// Handle real-time events
supabase
  .channel('custom-all-channel')
  .on('postgres_changes', { event: '*', schema: 'public' }, (payload) => {
    console.log('Change received!', payload)
  })
  .subscribe()
```

## Storage

### File Management

#### Creating Buckets

1. **Storage Tab**: Go to the Storage section
2. **New Bucket**: Click "Create Bucket"
3. **Configure Bucket**:
   - **Name**: Enter bucket name
   - **Public**: Set public/private access
   - **File Size Limit**: Set maximum file size
4. **Create**: Create the bucket

#### Uploading Files

```javascript
// Upload file
const { data, error } = await supabase.storage
  .from('avatars')
  .upload('public/avatar1.png', file)

// Get public URL
const { data } = supabase.storage
  .from('avatars')
  .getPublicUrl('public/avatar1.png')
```

#### File Operations

```javascript
// List files
const { data, error } = await supabase.storage
  .from('avatars')
  .list('public')

// Download file
const { data, error } = await supabase.storage
  .from('avatars')
  .download('public/avatar1.png')

// Delete file
const { data, error } = await supabase.storage
  .from('avatars')
  .remove(['public/avatar1.png'])
```

## Row Level Security (RLS)

### Setting Up RLS

1. **RLS Tab**: Go to the RLS section
2. **Enable RLS**: Toggle RLS on for tables
3. **Create Policies**: Define access policies
4. **Test Policies**: Verify policy behavior

### Policy Examples

```sql
-- Enable RLS
ALTER TABLE posts ENABLE ROW LEVEL SECURITY;

-- Policy: Users can only see their own posts
CREATE POLICY "Users can view own posts" ON posts
  FOR SELECT USING (auth.uid() = user_id);

-- Policy: Users can insert their own posts
CREATE POLICY "Users can insert own posts" ON posts
  FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Policy: Users can update their own posts
CREATE POLICY "Users can update own posts" ON posts
  FOR UPDATE USING (auth.uid() = user_id);

-- Policy: Users can delete their own posts
CREATE POLICY "Users can delete own posts" ON posts
  FOR DELETE USING (auth.uid() = user_id);
```

## Edge Functions

### Creating Edge Functions

1. **Functions Tab**: Go to the Edge Functions section
2. **New Function**: Click "Create Function"
3. **Write Code**: Write your function logic
4. **Deploy**: Deploy the function

### Function Examples

```typescript
// Example edge function
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

serve(async (req) => {
  const { name } = await req.json()
  const data = {
    message: `Hello ${name}!`,
  }

  return new Response(
    JSON.stringify(data),
    { headers: { "Content-Type": "application/json" } },
  )
})
```

### Invoking Functions

```javascript
// Call edge function
const { data, error } = await supabase.functions.invoke('hello-world', {
  body: { name: 'Functions' }
})
```

## Database Backups

### Creating Backups

1. **Backups Tab**: Go to the Backups section
2. **New Backup**: Click "Create Backup"
3. **Configure**: Set backup options
4. **Create**: Generate the backup

### Restoring Backups

1. **Backup List**: View available backups
2. **Select Backup**: Choose backup to restore
3. **Restore**: Click "Restore Backup"
4. **Confirm**: Confirm restoration

## Monitoring and Analytics

### Database Analytics

1. **Analytics Tab**: Go to the Analytics section
2. **Query Performance**: View slow queries
3. **Connection Stats**: Monitor connections
4. **Storage Usage**: Track storage consumption

### Logs

1. **Logs Tab**: Go to the Logs section
2. **Filter Logs**: Filter by type, date, etc.
3. **View Details**: Click on log entries
4. **Export**: Export logs for analysis

## Best Practices

### Security

1. **Use RLS**: Always enable Row Level Security
2. **Secure API Keys**: Keep service role key secret
3. **Validate Input**: Always validate user input
4. **Use HTTPS**: Always use HTTPS in production

### Performance

1. **Indexing**: Create proper indexes
2. **Query Optimization**: Optimize slow queries
3. **Connection Pooling**: Use connection pooling
4. **Caching**: Implement appropriate caching

### Development

1. **Environment Separation**: Use different projects for dev/staging/prod
2. **Migration Strategy**: Use proper migration strategy
3. **Testing**: Test with real data
4. **Backup Strategy**: Regular backups

## Troubleshooting

### Common Issues

#### Connection Problems
- **Check Credentials**: Verify API keys are correct
- **Network Issues**: Check internet connection
- **Project Status**: Verify project is active
- **Region Issues**: Check if region is accessible

#### Authentication Issues
- **Provider Configuration**: Check OAuth settings
- **Email Templates**: Verify email templates
- **Domain Settings**: Check allowed domains
- **Redirect URLs**: Verify redirect URLs

#### Database Issues
- **RLS Policies**: Check Row Level Security policies
- **Permissions**: Verify user permissions
- **Schema Issues**: Check table structure
- **Migration Problems**: Verify migration status

### Debugging Steps

1. **Check Logs**: Review Supabase logs
2. **Test Queries**: Test queries in SQL editor
3. **Verify Policies**: Check RLS policies
4. **Monitor Performance**: Use analytics tools

## Integration Examples

### Next.js Integration

```typescript
// lib/supabase.ts
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
```

### React Integration

```typescript
// hooks/useSupabase.ts
import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabase'

export function useSupabase() {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Get initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null)
      setLoading(false)
    })

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null)
    })

    return () => subscription.unsubscribe()
  }, [])

  return { user, loading }
}
```

## Support and Resources

### Documentation
- [Supabase Documentation](https://supabase.com/docs)
- [Xibe AI Supabase Integration Guide](https://codex.anishkumar.tech/docs/supabase-integration)
- [API Reference](https://supabase.com/docs/reference)

### Community
- [Supabase Community](https://github.com/supabase/supabase/discussions)
- [Xibe AI Discord](https://discord.gg/codex)
- [GitHub Issues](https://github.com/iotserver24/codex/issues)

### Support
- **Supabase Support**: [supabase.com/support](https://supabase.com/support)
- **Xibe AI Support**: [codex.anishkumar.tech/support](https://codex.anishkumar.tech/support) 