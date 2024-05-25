function ageSort(users) {
  let swapped;
  for (let i = 0; i < users.length; i++) {
    swapped = false;
    for (let j = 0; j < users.length - i - 1; j++) {
      if (users[j].age > users[j + 1].age) {
        [users[j], users[j + 1]] = [users[j + 1], users[j]];
        swapped = true;
      }
    }
    if (!swapped) break;
  }

  return users;
}

function oddEvenSort(arr) {
  let swapped;
  for (let i = 0; i < arr.length; i++) {
    swapped = false;
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swapped = true;
      }
    }
    if (!swapped) break;
  }
  return [...arr.filter((el) => el % 2 !== 0), ...arr.filter((el) => el % 2 === 0)]
  }


function validAnagrams(s, t) {
  if (s.length !== t.length) {
    throw new Error("How are they gonna be the same if they aren't the same length, Einstein?")
  }
  let sObj = {}
  let tObj = {}
  for (let i = 0; i < s.length; i++) {
    let curr1 = s[i]
    let curr2 = t[i]
    if (sObj[curr1] === undefined){
      sObj[curr1] = 1
    } else {
      sObj[curr1]++
    }
    if (tObj[curr2] === undefined) {
      tObj[curr2] = 1
    } else {
      tObj[curr2]++
    }
  }
  for (let key in sObj) {
    if (sObj[key] !== tObj[key]) return false
  }
  return true
}

function reverseBaseSort(arr) {
  let sortedArr = arr.sort((a, b) => {
    let baseA = Math.floor(Math.log10(a)) + 1
    let baseB = Math.floor(Math.log10(b)) + 1
    return (baseB - baseA) || (a - b)
  })
  // for (let i = 0; i < sortedArr.length; i++) {
  //   let curr = sortedArr[i]
  //   let next = sortedArr[i + 1]
  //   if (('${curr}'.length === '${next}'.length) && (curr > next)) {
  //     [curr, next] = [next, curr]
  //   }
  // }
  return sortedArr
}

function frequencySort(arr) {
  let counter = {}
  for (let i = 0; i < arr.length; i++) {
    let curr = arr[i];
    if (counter[curr] === undefined) {
      counter[curr] = 1
    } else counter[curr]++
  }
  return arr.sort((a, b) => {
    if (counter[a] !== counter[b]) {
      return counter[a] - counter[b]
    } return b - a
  })
}

module.exports = [
  oddEvenSort,
  validAnagrams,
  reverseBaseSort,
  frequencySort,
  ageSort,
];
