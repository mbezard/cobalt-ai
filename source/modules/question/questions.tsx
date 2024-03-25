import {
	designSystemQuestion,
	fiveTestExamplesQuestions,
	getSomeScreenImplementationQuestion,
	macroArchitectureQuestion,
	mainConfigFilesQuestion,
	mainTechnoAndLanguagesQuestion,
} from '../openai/prompts.js';
import {QuestionWithFunction} from '../openai/question.type.js';

export type QuestionKey =
	| 'macroArchitecture'
	| 'mainTechnoAndLanguagesQuestion'
	| 'fiveTestExamplesQuestions'
	| 'mainConfigFilesQuestion'
	| 'designSystemQuestion'
	| 'getSomeScreenImplementationQuestion';

export type Question = {
	title: string;
	key: QuestionKey;
	questionWithFunction: QuestionWithFunction;
};

export const questions: Question[] = [
	{
		title: 'Analysis of the macro-architecture of the codebase',
		key: 'macroArchitecture',
		questionWithFunction: macroArchitectureQuestion,
	},
	{
		title:
			'Analysis of the main technologies and languages used in the codebase',
		key: 'mainTechnoAndLanguagesQuestion',
		questionWithFunction: mainTechnoAndLanguagesQuestion,
	},
	{
		title: 'Chosing up to 5 test examples from the codebase',
		key: 'fiveTestExamplesQuestions',
		questionWithFunction: fiveTestExamplesQuestions,
	},
	{
		title: 'Analysis of the main configuration files of the codebase',
		key: 'mainConfigFilesQuestion',
		questionWithFunction: mainConfigFilesQuestion,
	},
	{
		title: 'Analysis of the design system used in the codebase',
		key: 'designSystemQuestion',
		questionWithFunction: designSystemQuestion,
	},
	{
		title: 'Getting some examples of screen implementations from the codebase',
		key: 'getSomeScreenImplementationQuestion',
		questionWithFunction: getSomeScreenImplementationQuestion,
	},
];
