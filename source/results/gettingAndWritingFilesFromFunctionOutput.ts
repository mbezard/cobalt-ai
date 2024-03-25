import fs from 'fs';

export const gettingAndWritingFilesFromFunctionOutput = (
	output: string,
	key: string,
	fileName: string,
) => {
	try {
		const outputAsObject = JSON.parse(output);
		const outputAsList = outputAsObject[key] as string[];

		const content = outputAsList
			.filter((example: string) => !example.includes('.png'))
			.map((example: string) => {
				let content = '';
				try {
					content = fs.readFileSync(example, 'utf-8');
				} catch (e) {
					// console.error(`Error reading file ${example}`, e);
					content = '';
				}
				return `## ${example}\n\n\`\`\`\n${content}\n\`\`\``;
			})
			.join('\n\n');

		fs.writeFileSync(`results/knowledgeFiles/${fileName}.md`, content);
	} catch (e) {
		console.error(`Error ${fileName}`, e);
		fs.writeFileSync(`results/knowledgeFiles/${fileName}.md`, output);
	}
};
