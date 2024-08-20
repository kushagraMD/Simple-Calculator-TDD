export class StringCalculator {
    add(numbers: string): number {
      if (!numbers) return 0;
  
      let delimiter = /[\n,]/;
      if (numbers.startsWith('//')) {
        const parts = numbers.split('\n');
        delimiter = new RegExp(parts[0][2]);
        numbers = parts[1];
      }
  
      const numsArray = numbers.split(delimiter).map(Number);
      const negatives = numsArray.filter(num => num < 0);
  
      if (negatives.length) {
        throw new Error(`Negative numbers not allowed: ${negatives.join(',')}`);
      }
  
      return numsArray.reduce((sum, num) => sum + num, 0);
    }
  }
  