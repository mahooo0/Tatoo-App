/**
 * Splits an array into chunks of a specified size.
 * @param array The array to be split.
 * @param chunkSize The size of each chunk.
 * @returns A new array containing the chunks.
 */
export const chunkArray = <T,>(array: T[], chunkSize: number): T[][] => {
    const result: T[][] = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      const chunk = array.slice(i, i + chunkSize);
      result.push(chunk);
    }
    return result;
  };
  


  