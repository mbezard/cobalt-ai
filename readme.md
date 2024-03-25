> CobaltAI cli generates instructions for a gpt/assistant that can help you with your codebase. 


# Your codebase-expert generator


## Install

```bash
$ npm install --global cobalt-ai
# or
$ yarn global add cobalt-ai
```

## Usage

```
$ cobalt-ai --help

 Usage
	  $ cobalt-ai

	Options
		--openaiApiKey Your OpenAI API key
		--extraInstructions Extra instructions to pass to the codebase expert

	Examples
	  $ cobalt-ai --openaiApiKey='YOUR_API_KEY' --extraInstructions="Don't mention the project name"
```

## Results
It generates the following files in the current directory:
```
├── instructions.md
└── knowledgeFiles
    ├── screenImplementations.md
    └── testExamples.md
```
- `instructions.md` contains the instructions for the codebase expert. Copy-paste this into your GPT/assistant ("Instructions" section).
- `knowledgeFiles/` contains the knowledge files for the codebase expert. Upload these files to your GPT/assistant ("Knowledge" section).


## Roadmap (Your codebase might not be supported yet)
- [x] Feat: Works on React Native projects
- [x] Fix: The instructions are compatible with GPTs out-of-the-box
- [x] Feat: Add extra instructions
- [ ] Feat: Works on other mobile projects
- [ ] Feat: Works on web projects
- [ ] Feat: Works on backend projects


### Why Cobalt?
**CO**de **BA**se **L**lm exper**T** AI
I was not able to find a good name for this project, so I just named it Cobalt.