---
sidebar_position: 7
---

# AI Models & Providers

CodeX supports 25+ AI models across multiple providers, giving you unparalleled flexibility for different coding tasks and requirements.

## Overview

CodeX's multi-model approach allows you to:
- Choose the best AI for each specific task
- Switch between models instantly
- Use free models for experimentation
- Access premium models when needed
- Run models locally for privacy
- Customize model behavior and parameters

## Supported Providers

### Free Providers 🆓

#### CodeX Provider (Free)
All CodeX Provider models are free to use:

| Model Name          | Description                                 | Features     |
|---------------------|---------------------------------------------|--------------|
| bidara              | BIDARA - Biomimetic Designer by NASA        | Vision       |
| deepseek            | DeepSeek-V3                                 | -            |
| deepseek-reasoning  | DeepSeek R1-0528 reasoning model            | Reasoning    |
| elixposearch        | ElixpoSearch - Custom search-enhanced AI    | -            |
| evil                | Evil (Uncensored model)                     | Vision       |
| grok                | xAi Grok-3 Mini                             | Tools        |
| hypnosis-tracy      | Hypnosis Tracy 7B                           | Audio        |
| llamascout          | Llama 4 Scout 17B                           | -            |
| midijourney         | Midijourney                                 | Tools        |
| mirexa              | Mirexa AI Companion (GPT-4.1)               | Vision       |
| mistral             | Mistral Small 3.1 24B                       | Vision/Tools |
| openai              | GPT-4.1-mini                                | Vision/Tools |
| openai-audio        | GPT-4o-audio-preview                        | Audio        |
| openai-fast         | GPT-4.1-nano                                | Vision       |
| openai-large        | GPT-4.1                                     | Vision/Tools |
| openai-reasoning    | OpenAI O3 reasoning model                   | Reasoning    |
| phi                 | Phi-4 Instruct                              | Vision/Audio |
| qwen-coder          | Qwen 2.5 Coder 32B                          | Tools        |
| rtist               | Rtist                                       | Tools        |
| sur                 | Sur AI Assistant (Mistral)                  | Vision       |
| unity               | Unity Unrestricted Agent (Mistral)          | Vision       |

#### Google (Free Tier Available)
| Model Name                      | Description                          | Notes        |
|---------------------------------|--------------------------------------|--------------|
| gemini-2.5-pro-preview-05-06    | Gemini 2.5 Pro (Preview)             | Paid         |
| gemini-2.5-flash-preview-05-20  | Gemini 2.5 Flash (Preview)           | **Free Tier**|

#### OpenRouter (Free Tier Available)
| Model Name                          | Description                           | Notes        |
|-------------------------------------|---------------------------------------|--------------|
| deepseek/deepseek-chat-v3-0324:free | DeepSeek v3                           | **Free**     |

#### Local Models (Free)
| Provider   | Description                                     |
|------------|-------------------------------------------------|
| Ollama     | Run models locally on your machine              |
| LM Studio  | Local model hosting and management              |

### Paid Providers 💳

#### OpenAI (Requires API Key)
| Model Name  | Description                    | Features     |
|-------------|--------------------------------|--------------|
| gpt-4.1     | OpenAI's flagship model        | Turbo Edits  |
| gpt-4.1-mini| Lightweight, intelligent model | -            |
| o3-mini     | Reasoning model                | Reasoning    |
| o4-mini     | Reasoning model                | Reasoning    |

#### Anthropic (Requires API Key)
| Model Name                    | Description                          | Features     |
|-------------------------------|--------------------------------------|--------------|
| claude-sonnet-4-20250514      | Claude 4 Sonnet - Excellent coder    | Turbo Edits  |
| claude-3-7-sonnet-latest      | Claude 3.7 Sonnet - Excellent coder  | Turbo Edits  |
| claude-3-5-sonnet-20241022    | Claude 3.5 Sonnet                    | Turbo Edits  |
| claude-3-5-haiku-20241022     | Claude 3.5 Haiku - Lightweight       | -            |

### Special Providers

#### Auto
| Model Name| Description                      | Notes        |
|-----------|----------------------------------|--------------|
| auto      | Automatically selects best model | Default      |

## Model Selection Guide

### For Code Generation
- **Best**: gpt-4.1, claude-sonnet-4-20250514, qwen-coder
- **Fast**: gpt-4.1-mini, claude-3-5-haiku-20241022, openai-fast
- **Free**: openai, mistral, deepseek

### For Code Review
- **Best**: gpt-4.1, claude-sonnet-4-20250514
- **Good**: claude-3-7-sonnet-latest, claude-3-5-sonnet-20241022
- **Fast**: gpt-4.1-mini, claude-3-5-haiku-20241022

### For Debugging
- **Best**: gpt-4.1, claude-sonnet-4-20250514
- **Good**: claude-3-7-sonnet-latest, gpt-4.1-mini
- **Free**: openai, mistral, deepseek

### For Documentation
- **Best**: claude-sonnet-4-20250514, gpt-4.1
- **Good**: claude-3-7-sonnet-latest, gpt-4.1-mini
- **Fast**: claude-3-5-haiku-20241022

### For Testing
- **Best**: gpt-4.1, claude-sonnet-4-20250514
- **Good**: claude-3-7-sonnet-latest, gpt-4.1-mini
- **Free**: Local models, openai, mistral

### For Reasoning Tasks
- **Best**: o3-mini, o4-mini, openai-reasoning
- **Good**: deepseek-reasoning, claude-sonnet-4-20250514
- **Free**: deepseek-reasoning

### For Vision Tasks
- **Best**: bidara, mirexa, openai-large
- **Good**: mistral, sur, unity
- **Free**: bidara, mirexa, mistral, sur, unity

### For Audio Tasks
- **Best**: openai-audio, phi
- **Good**: hypnosis-tracy
- **Free**: openai-audio, phi, hypnosis-tracy

## Model Configuration

### Temperature Settings
- **0.0-0.3**: Consistent, deterministic output
- **0.3-0.7**: Balanced creativity and consistency
- **0.7-1.0**: More creative, varied output

### Context Window Management
- **Short Context**: gpt-4.1-mini, claude-3-5-haiku-20241022
- **Medium Context**: gpt-4.1, claude-3-5-sonnet-20241022
- **Long Context**: claude-sonnet-4-20250514, claude-3-7-sonnet-latest

### Token Limits
- **Input Tokens**: How much context you can send
- **Output Tokens**: How much the model can generate
- **Total Tokens**: Combined input + output limit

## Advanced Model Features

### Turbo Edits
Available on select models for enhanced code editing:
- **gpt-4.1**: Full Turbo Edits support
- **claude-sonnet-4-20250514**: Full Turbo Edits support
- **claude-3-7-sonnet-latest**: Full Turbo Edits support
- **claude-3-5-sonnet-20241022**: Full Turbo Edits support

### Multimodal Models
- **Vision**: bidara, mirexa, openai-large, mistral, sur, unity
- **Audio**: openai-audio, phi, hypnosis-tracy
- **Tools**: grok, midijourney, qwen-coder, rtist

### Reasoning Models
- **o3-mini**: OpenAI reasoning model
- **o4-mini**: OpenAI reasoning model
- **openai-reasoning**: OpenAI O3 reasoning model
- **deepseek-reasoning**: DeepSeek R1-0528 reasoning model

### Streaming Responses
- **Real-time Output**: See responses as they generate
- **Faster Feedback**: Get results quickly
- **Interactive Experience**: Better user experience
- **Progress Tracking**: Monitor generation progress

## Local Model Setup

### Ollama Installation

1. **Install Ollama**: Download from [ollama.ai](https://ollama.ai)
2. **Pull Models**: Download desired models
3. **Configure CodeX**: Set up local model connection
4. **Test Connection**: Verify models work

#### Available Ollama Models
```bash
# Pull models
ollama pull llama2
ollama pull mistral
ollama pull codellama
ollama pull phi

# List models
ollama list
```

### LM Studio Setup

1. **Install LM Studio**: Download from [lmstudio.ai](https://lmstudio.ai)
2. **Download Models**: Get models from Hugging Face
3. **Start Server**: Run local API server
4. **Connect CodeX**: Configure connection

#### LM Studio Configuration
```json
{
  "server": {
    "host": "localhost",
    "port": 1234,
    "models": ["llama2", "mistral", "codellama"]
  }
}
```

## Model Performance Optimization

### Response Time
- **Fast Models**: gpt-4.1-mini, claude-3-5-haiku-20241022, openai-fast
- **Balanced Models**: gpt-4.1, claude-3-5-sonnet-20241022, mistral
- **Powerful Models**: claude-sonnet-4-20250514, claude-3-7-sonnet-latest

### Cost Optimization
- **Free Models**: All CodeX Provider models, Local models
- **Cost-Effective**: gpt-4.1-mini, claude-3-5-haiku-20241022
- **Premium Models**: gpt-4.1, claude-sonnet-4-20250514

### Quality vs Speed
- **High Quality**: gpt-4.1, claude-sonnet-4-20250514
- **Balanced**: claude-3-7-sonnet-latest, claude-3-5-sonnet-20241022
- **Fast**: gpt-4.1-mini, claude-3-5-haiku-20241022

## Model-Specific Features

### GPT-4.1 Capabilities
- **Advanced Reasoning**: Complex problem solving
- **Code Generation**: High-quality code output
- **Documentation**: Excellent documentation writing
- **Debugging**: Strong debugging capabilities
- **Turbo Edits**: Enhanced code editing

### Claude Capabilities
- **Code Review**: Excellent code review skills
- **Documentation**: Superior documentation writing
- **Safety**: Built-in safety features
- **Context**: Long context window support
- **Turbo Edits**: Enhanced code editing

### CodeX Provider Capabilities
- **Free Access**: No API key required
- **Diverse Models**: Vision, audio, reasoning, tools
- **Good Performance**: Suitable for most tasks
- **Privacy**: Various privacy options

### Local Model Capabilities
- **Privacy**: Complete data privacy
- **Offline**: Works without internet
- **Customization**: Full model control
- **Cost**: No API costs

## Troubleshooting

### Common Issues

#### API Key Problems
- **Invalid Key**: Check key format and validity
- **Expired Key**: Generate new API key
- **Rate Limits**: Check usage limits
- **Permissions**: Verify key permissions

#### Model Availability
- **Model Not Found**: Check model name spelling
- **Region Issues**: Verify model availability in your region
- **Service Status**: Check provider status pages
- **Quota Exceeded**: Monitor usage limits

#### Performance Issues
- **Slow Responses**: Try faster models
- **Timeout Errors**: Reduce context length
- **Memory Issues**: Use smaller models
- **Network Problems**: Check internet connection

### Debugging Steps

1. **Test Connection**: Verify API key and endpoint
2. **Check Logs**: Review error messages
3. **Try Different Model**: Switch to alternative model
4. **Reduce Context**: Use shorter prompts
5. **Check Quotas**: Monitor usage limits

## Best Practices

### Model Selection
1. **Start with Free Models**: Use CodeX Provider models - no setup required
2. **Upgrade for Complex Tasks**: Use gpt-4.1 or claude-sonnet-4-20250514 for difficult problems
3. **Use Local Models for Privacy**: When data sensitivity is high
4. **Experiment with Different Models**: Test various options for your use case

### Prompt Engineering
1. **Be Specific**: Clear, detailed prompts work better
2. **Provide Context**: Include relevant code and requirements
3. **Use Examples**: Show expected output format
4. **Iterate**: Refine prompts based on results

### Cost Management
1. **Monitor Usage**: Track token consumption
2. **Use Appropriate Models**: Don't overuse expensive models
3. **Optimize Prompts**: Reduce unnecessary context
4. **Cache Results**: Reuse similar responses

### Privacy Considerations
1. **Use Local Models**: For sensitive data
2. **Review Providers**: Check data handling policies
3. **Minimize Data**: Send only necessary information
4. **Encrypt Sensitive Data**: When using cloud models

## Integration Examples

### Model Switching
```javascript
// Switch between models based on task
const modelConfig = {
  codeGeneration: 'gpt-4.1',
  quickQuestions: 'gpt-4.1-mini',
  privacySensitive: 'local-llama2',
  freeUsage: 'openai',
  reasoning: 'o3-mini',
  vision: 'bidara'
};
```

### Custom Provider Setup
```javascript
// Custom OpenAI-compatible endpoint
const customConfig = {
  baseURL: 'https://your-endpoint.com/v1',
  apiKey: 'your-custom-key',
  model: 'your-model-name'
};
```

### Local Model Integration
```javascript
// Ollama local model
const ollamaConfig = {
  baseURL: 'http://localhost:11434/v1',
  model: 'llama2',
  temperature: 0.7
};
```

## Getting Started with Models

1. **Free Users**: Start with CodeX Provider models - no setup required!
2. **Premium Users**: Configure API keys in settings for OpenAI, Anthropic, or Google models
3. **Local Users**: Install Ollama or LM Studio for offline AI assistance

## Support and Resources

### Provider Documentation
- [OpenAI API Docs](https://platform.openai.com/docs)
- [Anthropic API Docs](https://docs.anthropic.com)
- [Google AI Docs](https://ai.google.dev/docs)
- [Ollama Docs](https://ollama.ai/docs)
- [LM Studio Docs](https://lmstudio.ai/docs)

### Community Resources
- [Model Comparison Charts](https://github.com/iotserver24/codex/wiki/models)
- [Performance Benchmarks](https://codex.anishkumar.tech/benchmarks)
- [User Reviews](https://github.com/iotserver24/codex/discussions)

### Support
- **CodeX Support**: [codex.anishkumar.tech/support](https://codex.anishkumar.tech/support)
- **Provider Support**: Check individual provider support pages
- **Community**: [Discord](https://discord.gg/codex) for help 