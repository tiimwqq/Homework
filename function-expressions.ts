const multiply = function (num1: number, num2: number): number {
	return num1 * num2;
};

const divide = function (num1: number, num2: number): number {
	return num1 / num2;
};

const plus = function (num1: number, num2: number): number {
	return num1 + num2;
};

const minus = function (num1: number, num2: number): number {
	return num1 - num2;
};

const operations = {
	multiply,
	divide,
	plus,
	minus
} as const;

type CalculateFn = (a: number, b: number) => number;

const calculate = (num1: number, num2: number, fn: CalculateFn): number => {
	return fn(num1, num2)
}

const selectedOperation = "multiply" as keyof typeof operations;
console.log(calculate(6, 3, operations[selectedOperation])); // 18
