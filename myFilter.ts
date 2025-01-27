const numbers: number[] = [1, 2, 3, 4, 5];

type fnFilter = (num: number) => boolean;

const myFilter = (arr: number[], fn: fnFilter): number[] => {
	const newArr: number[] = [];
	for (let i = 0; i < arr.length; i++) {
		if (fn(arr[i])) {
			newArr.push(arr[i]);
		}
	}
	return newArr;
}

const evenNumbers = myFilter(numbers, num => num % 2 === 0);
const greaterThanThree = myFilter(numbers, num => num > 3);

console.log(evenNumbers); // [2, 4]
console.log(greaterThanThree); // [4, 5]