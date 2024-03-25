import {JSONSchema} from 'openai/lib/jsonschema.mjs';

export type QuestionWithFunction = {
	question: string;
	function?: {
		name: string;
		parameters: JSONSchema;
	};
};
