{
  //
  function countWordOccurrences(sentence: string, word: string): number {
    const lowerCaseSentence = sentence.toLowerCase();
    const lowerCaseWord = word.toLowerCase();

    const words = lowerCaseSentence.split(" ");

    const count = words.filter((wrd) => wrd === lowerCaseWord).length;

    return count;
  }

  const result = countWordOccurrences("I love typescript", "typescript");

  console.log(result);

  //
}
