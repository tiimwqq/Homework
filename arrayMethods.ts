//indexOf
const myIndexOf = <T>(arr: T[], item: T, from: number = 0): number => {
	if (from < 0) from = Math.max(0, arr.length + from);
	for (let i = from; i < arr.length; i++) {
		if (item === arr[i]) {
			return i;
		}
	}
	return -1;
};


//includes
const myIncludes = <T>(arr: T[], item: T, from: number = 0): boolean => {
	if (from < 0) from = Math.max(0, arr.length + from);
	if (from >= arr.length) return false;
	for (let i = from; i < arr.length; i++) {
		if (item === arr[i]) {
			return true;
		}
	}
	return false;
};


//slice
const mySlice = <T>(arr: T[], begin: number, end: number): T[] => {
	if (begin < 0) begin = arr.length + begin;
	if (end < 0) end = arr.length + end;

	begin = Math.max(0, begin);
	end = Math.min(arr.length, end);

	const newArr: T[] = [];
	for (let i = begin; i < end; i++) {
		newArr.push(arr[i]);
	}
	return newArr;
};



// :)