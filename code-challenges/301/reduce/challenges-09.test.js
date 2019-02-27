'use strict';

// let people = [
//     {name:'Fred', role:'Developer'},
//     {name:'Suzy', role:'Developer'},
//     {name:'Gina', role:'Manager'},
//     {name:'Jim', role:'Support'}
//   ];


//   let folks = people.reduce( (accumulator, person, idx) => {

//     accumulator[person.name] = person.role;
//     return accumulator; //?
//   }, {} );


//   folks; //?


const pokemon = [{ 'url': 'https://pokeapi.co/api/v2/pokemon/1/', 'name': 'bulbasaur' }, { 'url': 'https://pokeapi.co/api/v2/pokemon/2/', 'name': 'ivysaur' }, { 'url': 'https://pokeapi.co/api/v2/pokemon/3/', 'name': 'venusaur' }, { 'url': 'https://pokeapi.co/api/v2/pokemon/4/', 'name': 'charmander' }, { 'url': 'https://pokeapi.co/api/v2/pokemon/5/', 'name': 'charmeleon' }, { 'url': 'https://pokeapi.co/api/v2/pokemon/6/', 'name': 'charizard' }, { 'url': 'https://pokeapi.co/api/v2/pokemon/7/', 'name': 'squirtle' }, { 'url': 'https://pokeapi.co/api/v2/pokemon/8/', 'name': 'wartortle' }, { 'url': 'https://pokeapi.co/api/v2/pokemon/9/', 'name': 'blastoise' }, { 'url': 'https://pokeapi.co/api/v2/pokemon/10/', 'name': 'caterpie' }, { 'url': 'https://pokeapi.co/api/v2/pokemon/11/', 'name': 'metapod' }, { 'url': 'https://pokeapi.co/api/v2/pokemon/12/', 'name': 'butterfree' }, { 'url': 'https://pokeapi.co/api/v2/pokemon/13/', 'name': 'weedle' }, { 'url': 'https://pokeapi.co/api/v2/pokemon/14/', 'name': 'kakuna' }, { 'url': 'https://pokeapi.co/api/v2/pokemon/15/', 'name': 'beedrill' }, { 'url': 'https://pokeapi.co/api/v2/pokemon/16/', 'name': 'pidgey' }, { 'url': 'https://pokeapi.co/api/v2/pokemon/17/', 'name': 'pidgeotto' }, { 'url': 'https://pokeapi.co/api/v2/pokemon/18/', 'name': 'pidgeot' }, { 'url': 'https://pokeapi.co/api/v2/pokemon/19/', 'name': 'rattata' }, {
    'url': 'https://pokeapi.co/api/v2/pokemon/20/', 'name': 'raticate'
}];


/* ------------------------------------------------------------------------------------------------
CHALLENGE 1

Write a function named countNumberOfElements that, given an array as input, uses reduce to count the number of elements in the array.

Note: You may not use the array's built-in length property.
------------------------------------------------------------------------------------------------ */

let inputter = [1, 1, 1, 2, 1, 1, 4, 5, 9,9];
inputter.length; //?

const countNumberOfElements = (arr) => {
    let addMe = arr.reduce((acc, crt, ind) => {
        ind;
        acc = ind;
        ind; //?
        return acc; //?
    }, 1)
    return ++addMe; //?
};

countNumberOfElements(inputter); //?

/* ------------------------------------------------------------------------------------------------
CHALLENGE 2

Write a function named returnNames that, given the Star Wars data, below, uses reduce to return an array containing the names of the characters.
------------------------------------------------------------------------------------------------ */

let starWarsData = [{
    name: 'Luke Skywalker',
    height: '172',
    mass: '77',
    hair_color: 'blond',
    skin_color: 'fair',
    eye_color: 'blue',
    birth_year: '19BBY',
    gender: 'male',
},
{
    name: 'C-3PO',
    height: '167',
    mass: '75',
    hair_color: 'n/a',
    skin_color: 'gold',
    eye_color: 'yellow',
    birth_year: '112BBY',
    gender: 'n/a'
},
{
    name: 'R2-D2',
    height: '96',
    mass: '32',
    hair_color: 'n/a',
    skin_color: 'white, blue',
    eye_color: 'red',
    birth_year: '33BBY',
    gender: 'n/a'
},
{
    name: 'Darth Vader',
    height: '202',
    mass: '136',
    hair_color: 'none',
    skin_color: 'white',
    eye_color: 'yellow',
    birth_year: '41.9BBY',
    gender: 'male'
},
{
    name: 'Leia Organa',
    height: '150',
    mass: '49',
    hair_color: 'brown',
    skin_color: 'light',
    eye_color: 'brown',
    birth_year: '19BBY',
    gender: 'female'
}]

const returnNames = (arr) => {
    let reducer = arr.reduce((acc, crt, ind) => {
        crt;
        acc[ind] = crt.name;
        return acc;
    }, [])
    return reducer; //?
};

returnNames(starWarsData); //?

/* ------------------------------------------------------------------------------------------------
CHALLENGE 3

Write a function named reversedString that takes in a string and returns a string with the letters in reverse order.

Note: You must use reduce for this challenge. You may not use the built-in .reverse() string method.
------------------------------------------------------------------------------------------------ */

let reverseMe = 'pleasereverse';

const reversedString = (str) => {
    let arrFromString = str.split('');
    let holder = arrFromString.reduce((acc, current, index) => {
        acc.unshift(current);
        return acc;
    }, [])

    return holder.join(''); //?
};

reversedString(reverseMe); //?



/* ------------------------------------------------------------------------------------------------
CHALLENGE 4

Write a function named countNumberOfChildren that, given the array of characters, below, uses reduce to return the total number of children in the data set.
------------------------------------------------------------------------------------------------ */

const characters = [
    {
        name: 'Eddard',
        spouse: 'Catelyn',
        children: ['Robb', 'Sansa', 'Arya', 'Bran', 'Rickon'],
        house: 'Stark',
    },
    {
        name: 'Jon',
        spouse: 'Lysa',
        children: ['Robin'],
        house: 'Arryn',
    },
    {
        name: 'Cersei',
        spouse: 'Robert',
        children: ['Joffrey', 'Myrcella', 'Tommen'],
        house: 'Lannister',
    },
    {
        name: 'Daenarys',
        spouse: 'Khal Drogo',
        children: ['Drogon', 'Rhaegal', 'Viserion'],
        house: 'Targaryen',
    },
    {
        name: 'Mace',
        spouse: 'Alerie',
        children: ['Margaery', 'Loras'],
        house: 'Tyrell',
    },
    {
        name: 'Sansa',
        spouse: 'Tyrion',
        house: 'Stark',
    },
    {
        name: 'Jon',
        spouse: null,
        house: 'Snow',
    },
];

const countNumberOfChildren = (arr) => {
    let childReducer = arr.reduce((acc, crnt, idx) => {
        if (crnt.children) {
            acc += crnt.children.length; //?
        }
        return acc;
    }, 0)
    return childReducer; //?
};

countNumberOfChildren(characters); //?

/* ------------------------------------------------------------------------------------------------
CHALLENGE 5

Write a function that, given an array of numbers as input, uses reduce to calculate the array's average value.

Hint: The accumulator should begin as { count: 0, sum: 0 }
------------------------------------------------------------------------------------------------ */

let findAverageOf = [1,2,3,4,5,6,7,8,9];
let testAverage = [18, 290, 37, 4, 55, 16, 7, 85];

let reduceTestAverage = testAverage.reduce((acc, val, ind) => {
    acc += val;
    return acc;
})

reduceTestAverage //?

const calculateAverage = (arr) => {
let average;
    let averager = arr.reduce((acc,val,ind) => {
        
      

        acc.count = ind + 1; //?
        acc.sum += val; //?
        acc.average = acc.sum / acc.count; //?
        return acc; //?
    }, {count : 1, sum : 0, avg : 0})
    return averager.average;
};

calculateAverage(findAverageOf); //?

/* ------------------------------------------------------------------------------------------------
CHALLENGE 6

Write a function named countPrimeNumbers that, given an array elements as input, uses reduce to count the number of elements that are prime numbers.

You are welcome to use the provided isPrime function.
------------------------------------------------------------------------------------------------ */

let primeCheckArr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41]; 

let testPrime = [1, 2, 13, 64, 45, 56, 17, 8];

const isPrime = (value) => {
    for (let i = 2; i < value; i++) {
        if (value % i === 0) {
            value //?
            return false;
        }
    }
    value; //?
    return value > 1; 
};


const countPrimeNumbers = (arr) => {
    let primeCheck = arr.reduce((acc, val, ind) => {
        
       if (isPrime(val)){
        val; //?   
        acc.push('prime');
        return acc; //?
    }
    return acc;
    }, [])
    return primeCheck.length; //?
}

// countPrimeNumbers(testPrime); //?

/* ------------------------------------------------------------------------------------------------
CHALLENGE 7 - Stretch Goal

Write a function named extractState that, given the snorlaxData, below, uses reduce to return the object whose 'name' property matches the given string.

If the input array does not have a stat with that specific name, the function should return null.
------------------------------------------------------------------------------------------------ */

const snorlaxData = {
    stats: [
        {
            stat: {
                url: 'https://pokeapi.co/api/v2/stat/6/',
                name: 'speed',
            },
            effort: 5,
            baseStat: 30,
        },
        {
            stat: {
                url: 'https://pokeapi.co/api/v2/stat/5/',
                name: 'special-defense',
            },
            effort: 2,
            baseStat: 110,
        },
        {
            stat: {
                url: 'https://pokeapi.co/api/v2/stat/4/',
                name: 'special-attack',
            },
            effort: 9,
            baseStat: 65,
        },
    ],
    name: 'snorlax',
    weight: 4600,
};

const extractStat = (statName, arr) => {
    let finder = arr.reduce((acc, val, ind)=>{
        val; //?
        val.stat.name; //?
        if (val.stat.name === statName) {
            val;
            acc = val;
        }   
        return acc;
    },{})
    return finder; //?
};

// extractStat('special-attack', snorlaxData.stats) //?

/* ------------------------------------------------------------------------------------------------
CHALLENGE 8 - Stretch Goal

Write a function named extractChildren that, given the array of characters from challenge 4, accomplishes the following:

1) Uses filter to return an array of the characters that contain the letter 'a' in their name

2) Then, uses reduce to return an array of all the children's names in the filtered array
------------------------------------------------------------------------------------------------ */

const extractChildren = (arr) => {
    let filtered = arr.filter((val, ind) => {
       return  val.name.includes('a') ? true : false; //?
    })
    let childrenofAs = filtered.reduce((acc, val, ind)=>{
        if (val.children){
            acc.push(val.children);
            return acc;
        }
        return acc;
    }, [])
    return childrenofAs; //?
};

extractChildren(characters)

/* ------------------------------------------------------------------------------------------------
TESTS

All the code below will verify that your functions are working to solve the challenges.

DO NOT CHANGE any of the below code.

Run your tests from the console: jest challenges-09.test.js
------------------------------------------------------------------------------------------------ */

describe('Testing challenge 1', () => {
    test('It should return the length of the array', () => {
        expect(countNumberOfElements([1, 2, 3, 4, 5])).toStrictEqual(5);
    });
});

describe('Testing challenge 2', () => {
    test('It should return an array continaing the names of the characters', () => {
        expect(returnNames(starWarsData)).toStrictEqual(['Luke Skywalker', 'C-3PO', 'R2-D2', 'Darth Vader', 'Leia Organa']);
        expect(returnNames(starWarsData).length).toStrictEqual(5);
    });
});

describe('Testing challenge 3', () => {
    test('It should return the string with the characters in reverse order', () => {
        expect(reversedString('Code 301')).toStrictEqual('103 edoC');
    });
});

describe('Testing challenge 4', () => {
    test('It should return the total number of children', () => {
        expect(countNumberOfChildren(characters)).toStrictEqual(14);
    });
});

describe('Testing challenge 5', () => {
    test('It should return the average of the numbers in the array', () => {
        expect(calculateAverage([18, 290, 37, 4, 55, 16, 7, 85])).toStrictEqual(64);
    });
});

describe('Testing challenge 6', () => {
    test('It should return a count of the prime numbers in the array', () => {
        expect(countPrimeNumbers([1, 2, 13, 64, 45, 56, 17, 8])).toStrictEqual(3);
    });
});

describe('Testing challenge 7', () => {
    test('It should return any stats that match the input', () => {
        expect(extractStat('speed', snorlaxData.stats)).toStrictEqual({ stat: { url: 'https://pokeapi.co/api/v2/stat/6/', name: 'speed' }, effort: 5, baseStat: 30 });
    });
});

describe('Testing challenge 8', () => {
    test('It should return an array containing the names of the children', () => {
        expect(extractChildren(characters)).toStrictEqual(['Robb', 'Sansa', 'Arya', 'Bran', 'Rickon', 'Drogon', 'Rhaegal', 'Viserion', 'Margaery', 'Loras']);
        expect(extractChildren(characters).length).toStrictEqual(10);
    });
});