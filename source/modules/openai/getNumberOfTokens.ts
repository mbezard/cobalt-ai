import {getEncoding, getEncodingNameForModel} from 'js-tiktoken';

export const getNumberOfTokens = (text: string) => {
	const encodingName = getEncodingNameForModel('gpt-4-turbo-preview');
	const encoding = getEncoding(encodingName);
	const result = encoding.encode(text);
	return result.length;
};
