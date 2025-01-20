//1
const FirstLetterToUpperCase = (str) => {
    return str[0].toUpperCase() + str.slice(1)
}
const a = 'aaa'
console.log(FirstLetterToUpperCase(a)) //'Aaa'

//2
const truncateString = (str, maxLength) => {
    if (str.length <= maxLength) {
        return str; // Если строка уже влезает в лимит, просто возвращаем её
    }

    const pattern = /[ ,.!?;:)]/;
    let truncated = str.slice(0, maxLength);
    const lastValidIndex = truncated.lastIndexOf(pattern);

    if (lastValidIndex !== -1) {
        truncated = truncated.slice(0, lastValidIndex);
    }

    return truncated + '...';
};

console.log(truncateString("Это очень длинная строка, которая должна быть обрезана.", 40)); // "Это очень длинная строка..."
console.log(truncateString("Короткая строка", 40)); // "Короткая строка"

//3
const isSubstring = (str1, str2) => {
    return str1.includes(str2) || str2.includes(str1);
};

console.log(isSubstring("hello world", "world")); // true
console.log(isSubstring("hello", "world")); // false
