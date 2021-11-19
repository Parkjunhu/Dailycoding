// Q1, 단어 s의 가운데 글자를 반환하는 함수, solution을 만들어 보세요.
// 단어의 길이가 짝수라면 가운데 두글자를 반환하면 됩니다.

function solution(s){

  let centerIndex;
  // 홀수 일때
  if((s.length) % 2 === 1){
    // 문자열 길이를 2로 나눈 몫을 가운데 index 번호로 구해서 return함(소수값은 Math.floor로 버림)
    centerIndex = Math.floor((s.length)/2);
    return s[centerIndex];
  } else{
    // 짝수일때 문자열 길이를 2로 나눈 몫 - 1 + 문자열 길이를 2로 나눈 몫을 각각 index번호로 구하여 return 함
    centerIndex = (s.length)/2;
    return s[centerIndex - 1] + s[centerIndex];
  }

}

const result = solution('qwerq');
console.log(result);


// Q2, 배열 arr가 주어집니다. 배열 arr의 각 원소는 숫자 0부터 9까지로 이루어져 있습니다.
//이때, 배열 arr에서 연속적으로 나타나는 숫자는 하나만 남기고 전부 제거하려고 합니다.
//단, 제거된 후 남은 수들을 반환할 때는 배열 arr의 원소들의 순서를 유지해야 합니다.

// 예를 들면, arr = [1, 1, 3, 3, 0, 1, 1] 이면 [1, 3, 0, 1] 을 return 합니다.
// arr = [4, 4, 4, 3, 3] 이면 [4, 3] 을 return 합니다.
// 배열 arr에서 연속적으로 나타나는 숫자는 제거하고 남은 수들을 return 하는 solution 함수를 완성해 주세요.

// 시간초과뜸
function solution(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] === arr[i + 1]) { // i번째와 i+1번째가 같으면 (ex 0번째와 1번째가 같을때)
      arr.splice(i, 1); // i번째 요소를 삭제
      i--; // 삭제된 인덱스가 한칸 앞으로 밀리기 때문에 i--해서 다시 삭제된 index부터 if문 비교
    }
  }

  return arr;
}

const result = solution([1,1,3,3,0,1,1]);
console.log(result);


// Q3, array의 각 element 중 divisor로 나누어 떨어지는 값을 오름차순으로 정렬한 배열을 반환하는 함수,
// solution을 작성해주세요.
// divisor로 나누어 떨어지는 element가 하나도 없다면 배열에 -1을 담아 반환하세요.

function solution(arr, divisor){
  let answer = [];
  
  for(let i = 0; i < arr.length; i++){
    if(arr[i] % divisor === 0){ // arr의 i번째 요소가 divisor로 나누어 떨어진다면
      answer.push(arr[i]);
    }
  }

  answer.sort(function(a,b){ // 자바스크립트 내장함수(sort) 
    return a - b; // 오름차순 정렬 
  })

  if(answer.length === 0){ // arr의 어떤요소도 divisor로 나누어 떨어지지 않는다면
    answer.push(-1);
  }
  return answer;
}

console.log(solution([3,2,6], 10));


// Q4, 두 정수 a, b가 주어졌을 때 a와 b 사이에 속한 모든 정수의 합을 리턴하는 함수, solution을 완성하세요.
// 예를 들어 a = 3, b = 5인 경우, 3 + 4 + 5 = 12이므로 12를 리턴합니다.

function solution(a,b){
  let sum = 0;

  if(a > b){
    [a,b] = [b,a]; // 디스트럭처링을 이용해 변수의 값을 교환 (5,3 = 3,5)
  }

  for(let i = a; i <= b; i++){
    sum += i;
  }

  return sum;
}

console.log(solution(5,3));



// Q5, 대문자와 소문자가 섞여있는 문자열 s가 주어집니다. 
// s에 'p'의 개수와 'y'의 개수를 비교해 같으면 True, 다르면 False를 return 하는 solution를 완성하세요. 
// 'p', 'y' 모두 하나도 없는 경우는 항상 True를 리턴합니다. 

// 단, 개수를 비교할 때 대문자와 소문자는 구별하지 않습니다.
// 예를 들어 s가 "pPoooyY"면 true를 return하고 "Pyy"라면 false를 return합니다.

function solution(s){
  let char1 = 'p', char2 = 'y';
  let char1Count = 0, char2Count = 0; // char1, char2 문자를 각각 세는 변수선언
  s = s.toLowerCase(); // 문자열을 소문자로 변환
  for(let i = 0; i < s.length; i++){
    if(s[i] === char1){ // 각 문자열요소가 char1이면
      char1Count++;
    } else if(s[i] === char2){ // 각 문자열요소가 char2이면
      char2Count++;
    }
  }
  return char1Count === char2Count ? true : false;
}

console.log(solution('ppy'));

// Q6, 문자열 s의 길이가 4 혹은 6이고, 숫자로만 구성돼있는지 확인해주는 함수, solution을 완성하세요. 
// 예를 들어 s가 "a234"이면 False를 리턴하고 "1234"라면 True를 리턴하면 됩니다.

// 정확성테스트 실패
function solution(s){
  if(!(s.length === 4 || s.length === 6)){
    console.log('문자열의 길이는 4 또는 6만 허용됩니다.');
    return;
  }

  let falseCount = 0;
  for(let i = 0; i < s.length; i++){
    if(!(s[i] >= '0' && s[i] <= '9')){
      falseCount++;
    }
  }

  return falseCount > 0 ? false : true;

}

console.log(solution('1234'));


// Q7, String형 배열 seoul의 element중 "Kim"의 위치 x를 찾아,
// "김서방은 x에 있다"는 String을 반환하는 함수, solution을 완성하세요.
// seoul에 "Kim"은 오직 한 번만 나타나며 잘못된 값이 입력되는 경우는 없습니다.

function solution(seoul) {
  let answer = seoul;
  for(let i = 0; i < answer.length; i++){
    if(answer[i] === 'Kim'){
      return "김서방은 "+i+"에 있다";
    }
  }
  
}

console.log(solution(['Jane', 'Kim']));



// Q8, 길이가 n이고, "수박수박수박수...."와 같은 패턴을 유지하는 문자열을 리턴하는 함수, solution을 완성하세요. 
// 예를들어 n이 4이면 "수박수박"을 리턴하고 3이라면 "수박수"를 리턴하면 됩니다.

function solution(n) {
  let answer = '';
  for(let i = 1; i <= n; i++){
    if(i % 2 == 1){
      answer += '수';
    } else{
      answer += '박';
    }
  }
  return answer;
}


// Q9, 문자열 s를 숫자로 변환한 결과를 반환하는 함수, solution을 완성하세요.

//제한 조건
//s의 길이는 1 이상 5이하입니다.
//s의 맨앞에는 부호(+, -)가 올 수 있습니다.
//s는 부호와 숫자로만 이루어져있습니다.
//s는 "0"으로 시작하지 않습니다.

function solution(s) {
  const answer = s;
  if(answer[0] === '0'){
    console.log('0으로 시작할수없습니다');
    return;
  }

  if(!(answer.length >=1 && answer.length <=5)){

     console.log('문자열의 길이는 1이상 5이하의 길이만 가능합니다.');
      return;
   }

  return parseInt(answer); // 문자열을 정수로 변환
}

console.log(solution('+1234'));

// Q10, 1부터 입력받은 숫자 n 사이에 있는 소수의 개수를 반환하는 함수, solution을 만들어 보세요
// 소수는 1과 자기 자신으로만 나누어지는 수를 의미합니다.
// (1은 소수가 아닙니다.)
// 시간초과

function solution(n){

  let divisorCount = 0; // 0으로 나누어지는지 세어주는 카운트변수
  let primeArr = []; // primeArr : 소수들을 담는 배열

  for(let i = 2; i <= n; i++){ // 2부터 n까지의 수를 반복문돌리고
    for(let j = 1; j <= i; j++){ // 1부터 i까지(해당숫자만큼) 반복문돌리고
      if(i % j === 0){ // 예시 5를 1부터 5까지 나눠졌을때
        divisorCount++; // 0으로 나누어떨어지니 해당카운트 세기
      }
    }

    if(divisorCount === 2){ // 소수는 1과 자기자신만 나누어질수있으므로 2가지 경우일 때,
      primeArr.push(i); // 소수들의집합체(primeArr)에 해당값을 push
    }
    divisorCount = 0; // 카운트세는 변수 초기화 => 0
  }

  return primeArr.length; // 소수들이 몇개인지 반환

}

console.log(solution(10));


// Q11, 정수 n을 입력받아 n의 약수를 모두 더한 값을 리턴하는 함수, solution을 완성해주세요.

function solution(n){
  let sum = 0;
  for(let i = 1; i <= n; i++){
    if(n % i === 0){
      sum += i;
    }
  }

  return sum;
}

console.log(solution(12));

// Q12, 문자열 s는 한 개 이상의 단어로 구성되어 있습니다. 
// 각 단어는 하나 이상의 공백문자로 구분되어 있습니다.
// 각 단어의 짝수번째 알파벳은 대문자로, 
// 홀수번째 알파벳은 소문자로 바꾼 문자열을 리턴하는 함수, solution을 완성하세요.

function solution(s){

  let wordIndex = 0; // 단어마다 index번호를 세기위해 wordIndex 변수선언
  s= s.split('');
  for(let i = 0; i < s.length; i++){
    if(s[i] === ' '){ // 해당요소가 빈칸이면
      wordIndex = 0; // 단어 index 리셋
      continue; // 다음으로
    }
    if(wordIndex % 2 === 0){ // 인덱스번호가 짝수이면 
      s[i] = s[i].toUpperCase(); // 해당문자 대문자로 변경
    }
    wordIndex++;
  }
  
  s = s.join('');
  return s;

}

console.log(solution('nice to meet you'))


// Q13(자리수더하기), 자연수 N이 주어지면, N의 각 자릿수의 합을 구해서 return 하는 solution 함수를 만들어 주세요.
// 예를들어 N = 123이면 1 + 2 + 3 = 6을 return 하면 됩니다.



function solution(n){
  let sum = 0;
  n = n.toString().split(''); // 숫자를 문자열로 문자열을 배열(in 문자열)로 변환
  
  for(let i = 0; i < n.length; i++){
    sum += Number(n[i]); // 각각의 배열요소인 문자를 숫자로 변환하여 sum에 더하기(각자리수의 합)
  }

  return sum;
}

console.log(solution(1234));

// Q14(자연수 뒤집어 배열로 만들기), 자연수 n을 뒤집어 각 자리 숫자를 원소로 가지는 배열 형태로 리턴해주세요. 
// 예를들어 n이 12345이면 [5,4,3,2,1]을 리턴합니다

function solution(n){
  n = n.toString().split('');
  for(let i = 0; i < n.length; i++){
    n[i] = Number(n[i]);
  }
  n.sort(function(a,b){
    return b - a;
  })
  return n;

}

console.log(solution(478221));

// Q15(정수 제곱근 판별), 임의의 양의 정수 n에 대해, n이 어떤 양의 정수 x의 제곱인지 아닌지 판단하려 합니다.
// n이 양의 정수 x의 제곱이라면 x+1의 제곱을 리턴하고, 
// n이 양의 정수 x의 제곱이 아니라면 -1을 리턴하는 함수를 완성하세요.

function solution(n){
  
  let sqrt = '';
  let flag = true; // 제곱근인지 아닌지 식별하는 flag 변수선언 (기본값 true)
  for(let i = 1; i <= n; i++){
    if(n === i * i) { // n이 i의 제곱들을 곱한 값과 같다면 = n은 i의 제곱근이라면
      sqrt = i; // sqrt 변수에 i를 대입하고 for문 종료(break)
      break;
    }
  }

  if(sqrt === ''){ // sqrt 변수가 빈값 이라면(n의 제곱근이 존재하지 않았다면)
    flag = false; // 제곱근이 아니라서 false로 변경
  }
  
  return flag === true ? (sqrt + 1) * (sqrt + 1) : -1;
}

console.log(solution(3));

* Q6, Q10, Q12, Q14 미해결상태
