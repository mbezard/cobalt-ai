import {Text, Box} from 'ink';
import React from 'react';
import {Question as QuestionType} from './questions.js';
import {useQuestion} from './useQuestion.js';
import {Loader} from '../../shared/components/Loader.js';

type Props = {
	question: QuestionType;
};

export const Question = ({question}: Props) => {
	const {isLoading} = useQuestion(question);
	return (
		<Box key={question.key}>
			<Text>{question.title} </Text>
			<Loader isLoading={isLoading} />
		</Box>
	);
};
