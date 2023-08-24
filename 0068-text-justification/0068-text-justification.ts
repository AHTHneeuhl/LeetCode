function fullJustify(words: string[], maxWidth: number): string[] {
    const result: string[] = [];
    let line: string[] = [];
    let lineLength = 0;

    for (const word of words) {
        if (lineLength + line.length + word.length <= maxWidth) {
            line.push(word);
            lineLength += word.length;
        } else {
            result.push(line.join(" "));
            line = [word];
            lineLength = word.length;
        }
    }

    result.push(line.join(" "));

    const formattedLines: string[] = [];
    for (let i = 0; i < result.length; i++) {
        line = result[i].split(" ");
        if (i === result.length - 1 || line.length === 1) {
            // Left-justify last line or lines with one word
            formattedLines.push(line.join(" ") + " ".repeat(maxWidth - line.join(" ").length));
        } else {
            const numWords = line.length;
            const totalSpaces = maxWidth - line.reduce((acc, word) => acc + word.length, 0);
            const spacesBetweenWords = Math.floor(totalSpaces / (numWords - 1));
            let extraSpaces = totalSpaces % (numWords - 1);

            let formattedLine = line[0];
            for (let j = 1; j < numWords; j++) {
                formattedLine += " ".repeat(spacesBetweenWords);
                if (extraSpaces > 0) {
                    formattedLine += " ";
                    extraSpaces--;
                }
                formattedLine += line[j];
            }

            formattedLines.push(formattedLine);
        }
    }

    return formattedLines;
};