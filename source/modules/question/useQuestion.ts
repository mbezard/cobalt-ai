import {useMutation} from '@tanstack/react-query';
import {askQuestion} from '../openai/askQuestion.js';
import {useEffect, useRef} from 'react';
import {Question as QuestionType} from './questions.js';
import {useGlobalState} from '../../globalState.js';
import {useOpenai} from '../openai/OpenaiClientProvider.js';

export const useQuestion = (question: QuestionType) => {
	const openai = useOpenai();
	const hasBeenAskedRef = useRef(false);
	const saveAnyData = useGlobalState(state => state.saveAnyData);
	const {isPending: isLoading, mutateAsync} = useMutation({
		mutationKey: ['macro-architecture'],
		mutationFn: () => askQuestion(openai, question.questionWithFunction),
		onSuccess: data => {
			if (!data) {
				// console.log('No data gathered from the question', question.key);
				return;
			}
			saveAnyData(question.key, data);
		},
	});

	useEffect(() => {
		if (!hasBeenAskedRef.current) {
			hasBeenAskedRef.current = true;
			mutateAsync();
		}
	}, [mutateAsync]);

	return {isLoading};
};
