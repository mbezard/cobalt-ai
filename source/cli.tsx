#!/usr/bin/env node
import React from 'react';
import {render} from 'ink';
import meow from 'meow';
import App from './app.js';
import {flagsStateRef} from './flagsState.js';

const cli = meow(
	`
	Usage
	  $ cobalt-ai

	Options
		--openaiApiKey Your OpenAI API key
		--extraInstructions Extra instructions to pass to the codebase expert

	Examples
	  $ cobalt-ai --openaiApiKey='YOUR_API_KEY' --extraInstructions="Don't mention the project name"
	  
`,
	{
		importMeta: import.meta,
		flags: {
			openaiApiKey: {
				type: 'string',
			},
			extraInstructions: {
				type: 'string',
			},
		},
	},
);

if (cli.flags.extraInstructions) {
	flagsStateRef.extraInstructions = cli.flags.extraInstructions;
}

render(<App cliFlags={cli.flags} />);
