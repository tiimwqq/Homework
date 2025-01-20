const bob = {name: 'Vasya', friends: 5, likes: 19, projects: 7};

const sumObjValues = (obj) => {
    let sum = 0;
    for (let key in obj) {
        if (typeof obj[key] === 'number') {
            sum += obj[key]
        }
    }
    return sum
}

const displayObjPropsDesc = (obj) => {
    const arr = [];
    for (let key in obj) {
        if (typeof obj[key] === 'number') {
            arr.push(key)
        }
    }
    arr.sort((a, b) => obj[b] - obj[a])
    return arr
}


console.log(sumObjValues(bob)) //31
console.log(displayObjPropsDesc(bob)) //[ 'likes', 'projects', 'friends' ]