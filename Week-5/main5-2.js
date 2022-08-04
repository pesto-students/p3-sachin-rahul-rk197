const isVowel = (char) => "aeiou".includes(char.toLowerCase());

const vowelCount = (str) => {
    let vowelMap = new Map();
    for (let char of str) {
        let lowerCaseChar = char.toLowerCase();
        if (isVowel(lowerCaseChar)) {
            if (vowelMap.has(lowerCaseChar)) {
                vowelMap.set(lowerCaseChar, vowelMap.get(lowerCaseChar) + 1)
            }
            else
                vowelMap.set(lowerCaseChar,1);
        }
    }
    return vowelMap;
}

const vc = vowelCount("Rahul");
console.log(vc);