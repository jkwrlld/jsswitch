const mark = Math.random() * 100;
console.log(mark);

const roundedMark = Math.round(mark);
console.log(roundedMark);

switch (true) {
  case roundedMark <= 49:
    console.log("Перездача");
    break;
  case roundedMark >= 50 && roundedMark <= 59:
    console.log("E");
    break;
  case roundedMark >= 60 && roundedMark <= 69:
    console.log("D");
    break;
  case roundedMark >= 70 && roundedMark <= 79:
    console.log("C");
    break;
  case roundedMark >= 80 && roundedMark <= 89:
    console.log("B");
    break;
  case roundedMark >= 90 && roundedMark <= 100:
    console.log("A");
    break;
}
