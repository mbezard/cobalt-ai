import OpenAI from 'openai';
import React, {PropsWithChildren, createContext, useContext} from 'react';

const OpenaiContext = createContext<OpenAI | undefined>(undefined);

export const useOpenai = () => {
	const openai = useContext(OpenaiContext);

	if (!openai) {
		throw new Error('No OpenAI client set, use OpenaiProvider to set one');
	}

	return openai;
};

type OpenaiProviderProps = PropsWithChildren<{
	openai: OpenAI;
}>;

export const OpenaiProvider = ({openai, children}: OpenaiProviderProps) => {
	return (
		<OpenaiContext.Provider value={openai}>{children}</OpenaiContext.Provider>
	);
};
