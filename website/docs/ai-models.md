---
sidebar_position: 7
---

# AI Models & Providers

CodeX supports 40+ AI models across multiple providers, giving you unparalleled flexibility for different coding tasks and requirements.

## Overview

CodeX's multi-model approach allows you to:
- Choose the best AI for each specific task
- Switch between models instantly
- Use free models for experimentation
- Access premium models when needed
- Run models locally for privacy
- Customize model behavior and parameters
- Use CodeX Auto for automatic model selection

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
| gemini-2.5-pro                  | Gemini 2.5 Pro                       | Paid         |
| gemini-2.5-flash                | Gemini 2.5 Flash                     | **Free Tier**|

#### OpenRouter (Free Tier Available)
| Model Name                          | Description                           | Notes        |
|-------------------------------------|---------------------------------------|--------------|
| deepseek/deepseek-chat-v3-0324:free | DeepSeek v3                           | **Free**     |
| qwen/qwen3-coder                   | Qwen3 Coder                           | Paid         |
| moonshotai/kimi-k2                 | Kimi K2                               | Paid         |
| deepseek/deepseek-r1-0528          | DeepSeek R1                           | Paid         |

#### Local Models (Free)
| Provider   | Description                                     |
|------------|-------------------------------------------------|
| Ollama     | Run models locally on your machine              |
| LM Studio  | Local model hosting and management              |

### Paid Providers 💳

#### OpenAI (Requires API Key)
| Model Name          | Description                    | Features     |
|---------------------|--------------------------------|--------------|
| gpt-5               | OpenAI's most advanced model   | Turbo Edits  |
| gpt-5-mini          | Balanced GPT-5 model           | Turbo Edits  |
| gpt-5-nano          | Lightweight GPT-5 model        | Turbo Edits  |
| gpt-5-chat-latest   | Latest GPT-5 chat model        | Turbo Edits  |
| gpt-4o              | OpenAI's GPT-4o model          | Turbo Edits  |
| gpt-4.1             | OpenAI's flagship model        | Turbo Edits  |
| gpt-4.1-mini        | Lightweight, intelligent model | Turbo Edits  |
| gpt-4.1-nano        | Most lightweight model         | Turbo Edits  |
| o3-mini             | Reasoning model                | Reasoning    |
| o4-mini             | Reasoning model                | Reasoning    |

#### Anthropic (Requires API Key)
| Model Name                    | Description                          | Features     |
|-------------------------------|--------------------------------------|--------------|
| claude-sonnet-4-20250514      | Claude 4 Sonnet - Excellent coder    | Turbo Edits  |
| claude-3-7-sonnet-latest      | Claude 3.7 Sonnet - Excellent coder  | Turbo Edits  |
| claude-3-5-sonnet-20241022    | Claude 3.5 Sonnet                    | Turbo Edits  |
| claude-3-5-haiku-20241022     | Claude 3.5 Haiku - Lightweight       | -            |

### Special Providers

#### CodeX Auto
| Model Name| Description                      | Notes        |
|-----------|----------------------------------|--------------|
| auto      | Automatically selects best model | Default      |

## Model Selection Guide

### For Code Generation
- **Best**: gpt-5, gpt-4.1, claude-sonnet-4-20250514, qwen-coder
- **Fast**: gpt-5-mini, gpt-4.1-mini, claude-3-5-haiku-20241022, openai-fast
- **Free**: openai, mistral, deepseek

### For Code Review
- **Best**: gpt-5, gpt-4.1, claude-sonnet-4-20250514
- **Fast**: gpt-5-mini, gpt-4.1-mini, claude-3-5-sonnet-20241022
- **Free**: openai-large, mistral

### For Reasoning Tasks
- **Best**: deepseek-reasoning, o3-mini, o4-mini
- **Free**: deepseek-reasoning, openai-reasoning

### For Vision Tasks
- **Best**: gpt-4o, gpt-4.1, mirexa
- **Free**: bidara, evil, mirexa, mistral, openai, openai-large, sur, unity

### For Audio Processing
- **Best**: openai-audio, hypnosis-tracy
- **Free**: hypnosis-tracy, openai-audio, phi

### For Tool Usage
- **Best**: gpt-5, gpt-4.1, grok
- **Free**: grok, midijourney, mistral, openai, openai-large, qwen-coder

## CodeX Auto

CodeX Auto is our intelligent model selection system that automatically chooses the best model for your task:

- **Smart Selection**: Analyzes your request and selects the most appropriate model
- **Cost Optimization**: Balances performance with cost efficiency
- **Fallback Support**: Automatically switches to backup models if needed
- **No Configuration**: Works out of the box with no setup required

## Local Models

### Ollama
Run AI models locally on your machine for complete privacy:
- **Installation**: Download from [ollama.ai](https://ollama.ai)
- **Models**: Access to thousands of open-source models
- **Privacy**: All processing happens locally
- **Offline**: Works without internet connection

### LM Studio
Professional local model hosting:
- **GUI Interface**: Easy model management
- **Multiple Models**: Run several models simultaneously
- **API Access**: REST API for integration
- **Resource Management**: Efficient GPU utilization

## Model Features

### Turbo Edits
Advanced code editing capabilities available on premium models:
- **Smart Refactoring**: Intelligent code restructuring
- **Context Awareness**: Understands your entire codebase
- **Multi-file Edits**: Make changes across multiple files
- **Error Correction**: Automatic bug fixes and improvements

### Vision Capabilities
Models that can analyze visual content:
- **Screenshot Analysis**: Understand UI and design elements
- **Code Visualization**: Interpret diagrams and flowcharts
- **Document Processing**: Extract information from images
- **Design Feedback**: Provide suggestions for UI/UX improvements

### Audio Processing
Models that can work with audio content:
- **Speech Recognition**: Convert audio to text
- **Audio Analysis**: Process and understand audio files
- **Voice Commands**: Control the app with voice input
- **Audio Generation**: Create audio content

### Reasoning
Specialized models for complex problem-solving:
- **Step-by-step Analysis**: Break down complex problems
- **Logical Deduction**: Apply reasoning to solve puzzles
- **Mathematical Computation**: Handle complex calculations
- **Strategic Planning**: Develop multi-step solutions

## Getting Started

1. **Free Users**: Start with CodeX Provider models - no setup required!
2. **Premium Users**: Configure API keys in settings for OpenAI, Anthropic, or Google models
3. **Local Users**: Install Ollama or LM Studio for offline AI assistance
4. **Auto Users**: Use CodeX Auto for automatic model selection

For detailed setup instructions, see our [Getting Started](getting-started) guide. 