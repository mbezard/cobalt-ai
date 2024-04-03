import {QuestionWithFunction} from '../../shared/openai/question.type.js';

export const macroArchitectureQuestion: QuestionWithFunction = {
	question:
		'Describe in a tree shape the macro architecture of the project. You should represent only the main directories. For example we should be able to see the modules of the workspaces.',
};

export const mainTechnoAndLanguagesQuestion: QuestionWithFunction = {
	question:
		'What are the main technologies and languages used in the project? For example the main programming language, the main framework, etc.',
};

export const fiveTestExamplesQuestions: QuestionWithFunction = {
	question: `Choose at random 5 test examples from the project and give me back the relative path of each file. 
You HAVE to pick tests in different parts of the project, from the different modules and features.
You should call the ls function multiple times to get the examples.`,
	function: {
		name: 'getTestExamples',
		parameters: {
			type: 'object',
			properties: {
				testExamples: {
					description: 'The list of relative paths of the test examples files',
					type: 'array',
					maxItems: 5,
					items: {
						type: 'string',
					},
				},
			},
		},
	},
};
