// Đoạn code trên là một trò chơi đánh máy nhanh,
//  cho phép người chơi gõ từ đúng để tăng điểm số và thời gian chơi, 
// trong khi gõ từ sai sẽ giảm điểm số và kết thúc trò chơi.

// Hãy giải thích từng đoạn code cụ thể:


window.onload = init;
// Dòng này sẽ chạy hàm init khi trang được tải hoàn tất.


let score = 0;
let isPlaying;
// Đây là khai báo biến score và isPlaying. score là điểm số của người chơi, ban đầu là 0.
//  isPlaying biểu thị trạng thái chơi, được khởi tạo là undefined.



const wordInput = null;
const currentWord = null;
const scoreDisplay = null;
const timeDisplay = null;
const message = null;
const seconds = null; 
// Đây là khai báo các phần tử DOM cần dùng trong trò chơi. 
// Ban đầu, tất cả các phần tử này đều không có giá trị (được khởi tạo bằng null).

const words = [
  "hat",
  "river",
  "lucky",
  "statue",
  "generate",
  "stubborn",
  "charming",
  "thirsty",
  "worried",
  "nervous",
];
// Đây là một mảng chứa các từ sẽ xuất hiện trong trò chơi.

const levels = {
  easy: 10,
  medium: 5,
  hard: 3,
};
// Đây là một đối tượng chứa các cấp độ khác nhau của trò chơi,
//  mỗi cấp độ có thời gian giới hạn khác nhau.


const currentLevel = levels.easy;
let time = currentLevel;
// currentLevel được sử dụng để lựa chọn cấp độ chơi hiện tại (ở đây là "easy"). 
// time là thời gian còn lại để chơi, ban đầu được khởi tạo với thời gian của cấp độ chơi hiện tại.

function showword(words) {
  const randIndex = Math.floor(Math.random() * words.length);
  const currentWord = document.querySelector("#current-word");
  currentWord.innerHTML = words[randIndex];
}
// Hàm này sẽ lấy một từ ngẫu nhiên từ mảng words và 
// hiển thị nó trong phần tử "current-word" trên trang web.


function init() {
  const wordInput = document.querySelector("#word-input");
  const scoreDisplay = document.querySelector("#score");
  document.querySelector("#seconds").innerHTML = currentLevel;
  showword(words);
  wordInput.addEventListener("input", startMatch);

}
// init() là hàm khởi tạo trò chơi. 
// Nó sẽ lấy các phần tử DOM cần thiết và gán chúng cho các biến tương ứng. 
// Sau đó, nó sẽ hiển thị từ đầu tiên trong trò chơi và thiết lập các interval để đếm ngược thời gian và
//  kiểm tra trạng thái của trò chơi.


function startMatch() {
  if (matchWords()) {
    isPlaying = true;
    time = currentLevel + 1;
    showword(words);
    document.querySelector("#word-input").value = "";
    score++;
  }
  if (score === -1) {
    document.querySelector("#score").innerHTML = 0;
  } else {
    document.querySelector("#score").innerHTML = score;
  }
}
// startMatch() được gọi khi người chơi gõ một từ vào ô input. Nếu từ đó giống với từ hiện tại,
//  điểm số sẽ tăng và từ mới sẽ được hiển thị. Nếu điểm số bị giảm xuống -1, 
//  nó sẽ được đặt lại thành 0.


function matchWords() {
  if (
    document.querySelector("#word-input").value ===
    document.querySelector("#current-word").innerHTML
  ) {
    const message = document.querySelector("#message");
    message.innerHTML = "Correct !!!";
    return true;
  } else {
    document.querySelector("#message").innerHTML = "";
    return false;
  }
}
// matchWords() sẽ so sánh từ hiện tại trên trang web với từ được gõ vào ô input.
//  Nếu chúng giống nhau, hàm sẽ trả về true và thông báo "Correct !!!" sẽ được hiển thị. 
//  Ngược lại, nó sẽ trả về false.


function checkStatus() {
  if (!isPlaying && time === 0) {
    document.querySelector("#message").innerHTML = '<img src="hello.png" style="width: 400px;" > Thua gòi nha con !';
    score = -1;
  }
}
// checkStatus() sẽ kiểm tra nếu isPlaying bằng false (người chơi đang không chơi) và 
// time bằng 0 (hết giờ chơi), nó sẽ hiển thị thông báo "Thua gòi nha con !" và đặt score thành -1.


function countdown() {
  if (time > 0) {
    time--;
  } else if (time === 0) {
    isPlaying = false;
  }
  const timeDisplay = document.querySelector("#time");
  timeDisplay.innerHTML = time;
}
// countdown() sẽ được gọi mỗi giây để đếm ngược thời gian.
//  Nếu time còn lớn hơn 0, nó sẽ giảm thời gian đi một giây.
//   Nếu time bằng 0, isPlaying sẽ được đặt thành false để kết thúc trò chơi. 
//   Sau đó, nó sẽ hiển thị thời gian còn lại trên trang web