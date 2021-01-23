// function solution(m, v) {
//   var answer = 0;

//   const arr = new Array(m).fill(m);
  
//   let bottom = m - 1;
//   for (const block of v) {
//     let i = 0;
//     let check = false;
//     for (i; i <= bottom; i++) {
//       if (arr[i] < block) {
//         arr[i - 1] -= block;
//         check = true;
//         break;
//       }
//     };
//     if (check === false) {
//       arr[i - 1] -= block;
//       if (arr[i - 1] === 0) {
//         bottom -= 1;
//       };
//     }
//   };

//   for (let i = 0; i < m; i++) {
//     if (arr[i] !== m) {
//       answer = m - i;
//       break;
//     }
//   };

//   return answer;
// }

// 2
// function solution(m, v) {
//   var answer = 0;

//   const arr = new Array(m).fill(m);
  
//   let bottom = 0;
//   let top = 0;
//   for (const block of v) {
//     for (let i = top; i >= bottom; i--) {
//       if (arr[i] >= block) {
//         if (i === 0) {
//           arr[i] -= block;
//         }
//       } else {
//         arr[i + 1] -= block;
//         top = Math.max(top, i + 1);
//         break;
//       }
//     }
//   };
//   console.log(arr)
//   answer = top + 1;

//   return answer;
// }

// 3 
function solution(m, v) {
  var answer = 0;

  const arr = new Array(m).fill(0);
  
  let bottom = 0;
  let top = 0;
  for (const block of v) {
    for (let i = top; i >= bottom; i--) {
      if (arr[i] + block <= m) {
        if (i === 0) {
          arr[i] += block;
        };
      } else {
        arr[i + 1] += block;
        top = Math.max(top, i + 1);
        break;
      }
    }
  };
  answer = top + 1;

  return answer;
}

// duk

// function solution(m, v) {
//   var answer = 0;
  
//   let board = Array.from(Array(5), ()=> 0);
//   let highFloor = 0
//   let lowFloor = 0;
//   v.forEach((block, idx) => {
//       // console.log(block, idx);
//       for (let i = highFloor; i>=lowFloor; i--) {
//           if (board[i] + block <= m) {
//               if (i == 0){
//                   board[i] += block;
                  
//               }
//               // console.log('통과');
//           } else {
//               board[i+1] += block;
//               highFloor = Math.max(highFloor, i+1);
//               // console.log('실패');
//               break;
//           }
//       }
//     });
    
//   console.log(board)
//   // 층 수 세기
//   answer = highFloor + 1;
//   console.log(answer);
//   return answer;
// }



console.log(solution(4, [2, 3, 1]))
console.log(solution(4, [3, 2, 3, 1]))
console.log(solution(5, [3, 2, 3, 4, 2, 1]))