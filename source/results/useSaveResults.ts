import {useGlobalState} from '../globalState.js';
import fs from 'fs';
import {
	basePromptExpertPrompting,
	basePromptEndPart,
	basePromptDevBestPractices,
} from '../modules/openai/prompts.js';
import {gettingAndWritingFilesFromFunctionOutput} from './gettingAndWritingFilesFromFunctionOutput.js';

export const useSaveResults = () => {
	const projectName = process.cwd().split('/').pop();
	const allQuestions = useGlobalState(state => state.allQuestions);
	if (!fs.existsSync('results')) {
		fs.mkdirSync('results');
	}

	const instructionsStart = `${basePromptExpertPrompting}

## Project name: ${projectName}

<technologies and languages>
${allQuestions.mainTechnoAndLanguagesQuestion}
</technologies and languages>

<structure of the project>
${allQuestions.macroArchitecture}
</structure of the project>

<design system>
${allQuestions.designSystemQuestion}
</design system>`;

	const instructionsEnd = `${basePromptDevBestPractices}

${basePromptEndPart}
`;

	let configFilesContent: string[] = [];
	try {
		const mainConfigFile = JSON.parse(allQuestions.mainConfigFilesQuestion);
		const mainConfigFileList = mainConfigFile['examples'] as string[];
		mainConfigFileList.forEach((configFile: string) => {
			if (configFile.includes('env') || configFile.includes('secret')) return;
			if (configFile.includes('.png')) return;

			const configFileContent = fs.readFileSync(configFile, 'utf-8');
			configFilesContent.push(
				`### ${configFile}\n\`\`\`\n${JSON.stringify(
					configFileContent,
					null,
					2,
				)}\n\`\`\`\n\n`,
			);
		});
	} catch (e) {}

	// Add config files without exceeding the character limit of 8000 characters
	let configFilesPrompt =
		'Here is the content of some of my configuration files:';

	configFilesPrompt += configFilesContent.reduce((acc, content) => {
		if (
			acc.length +
				content.length +
				instructionsStart.length +
				instructionsEnd.length <
			8000
		) {
			acc += content;
		}
		return acc;
	}, '');

	const instructions = `${instructionsStart}\n${configFilesPrompt}\n${instructionsEnd}`;

	fs.writeFileSync('results/instructions.md', instructions);

	// ***** KNOWLEDGE FILES *****
	if (!fs.existsSync('results/knowledgeFiles')) {
		fs.mkdirSync('results/knowledgeFiles');
	}

	gettingAndWritingFilesFromFunctionOutput(
		allQuestions.fiveTestExamplesQuestions,
		'testExamples',
		'testExamples',
	);

	gettingAndWritingFilesFromFunctionOutput(
		allQuestions.getSomeScreenImplementationQuestion,
		'examples',
		'screenImplementations',
	);
};
