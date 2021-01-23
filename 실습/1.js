function solution(n, record) {
  let answer = [];

  const arr = Array.from(Array(n + 1), () => new Array(2));

  for (const serverName of record) {
    let strArray = serverName.split(' ');
    if (arr[strArray[0]].indexOf(strArray[1]) === -1) {
      arr[strArray[0]].push(strArray[1]);
    };
    if (arr[strArray[0]].length > 5) {
      arr[strArray[0]].shift();
    };
  };
  
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] !== undefined) {
        answer.push(arr[i][j]);
      };
    };
  };

  return answer;
};



console.log(solution(1, ["1 fracta", "1 sina","1 hana","1 robel","1 abc", "1 sina", "1 lynn"]))
console.log(solution(4, ["1 a","1 b","1 abc","3 b","3 a","1 abcd","1 abc","1 aaa","1 a","1 z","1 q", "3 k", "3 q", "3 z", "3 m", "3 b"]))