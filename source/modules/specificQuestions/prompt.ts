import {QuestionWithFunction} from '../../shared/openai/question.type.js';

export const mainConfigFilesQuestion: QuestionWithFunction = {
	question: `Give me the relative path of the main configuration files of the project. 
For example the files that are used to configure typescript, expo, the app.json, etc.
Do not put too many files. (Exclude the formatter or the linter config files for example).
A good answer should include the package.json file.`,
	function: {
		name: 'getMainConfigFiles',
		parameters: {
			type: 'object',
			properties: {
				examples: {
					type: 'array',
					maxItems: 5,
					description:
						'The list of relative paths of the main configuration files',
					items: {
						type: 'string',
					},
				},
			},
		},
	},
};

export const designSystemQuestion: QuestionWithFunction = {
	question: `Using the ls function multiple times, List the main components of the design system (Button, Input, ...) of the project. DO NOT add extra explanation.`,
};

export const getSomeScreenImplementationQuestion: QuestionWithFunction = {
	question: `Using the ls function multiple times, Give some examples of the implementation of the screens of the project. DO NOT add extra explanation.`,
	function: {
		name: 'getSomeExampleFilePaths',
		parameters: {
			type: 'object',
			properties: {
				examples: {
					type: 'array',
					maxItems: 5,
					description:
						'The list of relative paths of some example screen files',
					items: {
						type: 'string',
					},
				},
			},
		},
	},
};
