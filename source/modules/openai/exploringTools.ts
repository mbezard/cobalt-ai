import {RunnableToolFunctionWithParse} from 'openai/lib/RunnableFunction.mjs';
import {lsFunction} from './lsfunction.js';
import {catFunction} from './catFunction.js';

export const lsOpenaiFunction: RunnableToolFunctionWithParse<any> = {
	type: 'function',
	function: {
		parse: JSON.parse,
		function: (args: any) => {
			const path = args.path || '.';

			return lsFunction(path);
		},
		name: 'lsFunction',
		description: 'Get the list of files in the current directory',
		parameters: {
			type: 'object',
			properties: {
				path: {
					type: 'string',
					description: 'The path to the directory',
				},
			},
		},
	},
};

export const catOpenaiFunction: RunnableToolFunctionWithParse<any> = {
	type: 'function',
	function: {
		parse: JSON.parse,
		function: (args: any) => {
			if (!args.path) {
				console.error('catFunction: path is required');
				return;
			}

			return catFunction(args.path);
		},
		name: 'catFunction',
		description: 'Get the content of a file',
		parameters: {
			type: 'object',
			properties: {
				path: {
					type: 'string',
					description: 'The path to the file',
				},
			},
		},
	},
};

export const exploringTools = [lsOpenaiFunction, catOpenaiFunction];
