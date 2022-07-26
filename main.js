// 문자 데이터를 저장할때 ''기호를 사용하면 줄바꿈 처리를 할수가 없어서 `` 기호를 사용한다.
// const str = `hello
// world`

let str = `
010-1234-5678
wnsgh@naver.com
the junho.
abbcccddd
the apple
The junho1.
appl
fox
d`
// 문자검색(search) - 생성자 방식
//const regexp = RegExp('the', 'gi') // g라는 옵션을 통해 정확히 the만 찾을수 잇다, i 옵션을 통해 대,소문자 구분하지 않겠다.
//console.log(str.match(regexp))

// 문자검색(search) - 리터럴 방식
const regExp = /the/gi
console.log(str.match(regExp))


// 정규표현식 메서드
const regExp1 = /fox/gi
// console.log(regExp1.test(str)) // 현재 정규식에 잇는 문자가 문자열에 잇는지 여부 반환
console.log(str.replace(regExp1, 'AAA')) // 값을 변경하는것이다.
let = str.replace(regExp1, 'AAA')
console.log(str.replace(regExp1, 'AAA')) // 값을 변경하는것이다.
console.log(str.match(regExp1))

// 정규표현식 플래그
console.log(str.match(/\.$/gim)) // 정규표현식에 기능으로 해당되는 문자는 백슬레쉬를 통해서 표현해줘야한다.
// 문자데이터에 각 줄에 끝나는 부분을 나타내는것이 $이고, m은 기본적으로 하나의 문자데이터 내부에 줄바꿈된 부분을 하나씩 시작끝으로 본다는뜻이다..


// 패턴
console.log(
  str.match(/^t/gmi)
)
console.log(
  str.match(/./g), // 문자 데이터의 모든 글자를 일치 시켜서 배열데이터로 만든다.
  str.match(/a...e/g), // 문자 데이터의 모든 글자를 일치 시켜서 배열데이터로 만든다.
  str.match(/apple|the/g),
  str.match(/apple?/g) // ? 바로 앞에 문자가 없을수도 잇고 잇을수도 잇는경우
)

console.log(
  str.match(/\b\w{3}\b/g) // \w는 숫자와 알파벳을 포함한것들을 말한다. \b는 숫자를 포함한 영어 알파벳이 아닌 경계를 만들어 준다.
)

console.log(
  str.match(/[fox]/g), // f, o, x단위로 일치시킨다.
  str.match(/[0-9]{1,}/g)
)

const h = `  the hello  world   !

`
console.log(
  str.match(/\bf\w{1,}/g), // 소문자 f로 시작하는 모든 단어를 찾는것이다.
  str.match(/\d{1,}/g),
  h.replace(/\s/g, '')
)

console.log(
  str.match(/\w{1,}(?=@)/g),  // 앞쪽 일치 패턴
  str.match(/(?<=@).{1,}/g)
)
