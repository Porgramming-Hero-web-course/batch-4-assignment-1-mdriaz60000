function sumArray(numbers: number[]): number {
  return numbers.reduce((aSum, current) => aSum + current, 0);
}
console.log(sumArray([1, 2, 3, 4, 5]));

//2222222222222222
function removeDuplicates(numbers: number[]): number[] {
  return numbers.filter((num, index) => numbers.indexOf(num) === index);
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));

//33333333
function countWordOccurrences(sentence: string, word: string): number {
  const words = sentence.toLowerCase().split(" ");
  const targetWord = word.toLowerCase();
  let count = 0;

  for (const w of words) {
    if (w === targetWord) {
      count++;
    }
  }

  return count;
}

console.log(countWordOccurrences("I love typescript", "typescript"));

//444444
type Circle = {
  shape: "circle";
  radius: number;
};

type Rectangle = {
  shape: "rectangle";
  width: number;
  height: number;
};

type Shape = Circle | Rectangle;

function calculateShapeArea(shape: Shape): number {
    
    if (shape.shape === "circle") {
      return Math.PI * shape.radius * shape.radius; 
    } 
    
    if (shape.shape === "rectangle") {
      return shape.width * shape.height; 
    }
    
    throw new Error("Invalid shape type");
  }
  
  const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });
  console.log(circleArea.toFixed(2)); 

  const rectangleArea = calculateShapeArea({ 
    shape: "rectangle", 
    width: 4, 
    height: 6 
  });
  console.log(rectangleArea);
