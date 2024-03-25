import fs from 'fs';

export const catFunction = (path: string) => {
	const content = fs.readFileSync(path, 'utf-8');
	return content;
};
