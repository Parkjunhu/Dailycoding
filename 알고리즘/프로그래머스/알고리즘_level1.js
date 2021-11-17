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


* Q2, Q6 미해결상태