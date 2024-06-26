import emotion1 from "./img/emotion1.png";
import emotion2 from "./img/emotion2.png";
import emotion3 from "./img/emotion3.png";
import emotion4 from "./img/emotion4.png";
import emotion5 from "./img/emotion5.png";

export const getFormattedDate = targetDate => {
  let year = targetDate.getFullYear();
  let month = targetDate.getMonth() + 1; //0부터 시작하므로 +1
  let date = targetDate.getDate();
  if (month < 10) {
    month = `0${month}`;
  } //들어온 달이 한자릿 수일 때 앞에 0 붙여주기
  if (date < 10) {
    date = `0${date}`;
  }
  return `${year}-${month}-${date}`;
};

export const getEmotionImgById = emotionId => {
  const targetEmotionId = String(emotionId);
  switch (targetEmotionId) {
    case "1":
      return emotion1;
    case "2":
      return emotion2;
    case "3":
      return emotion3;
    case "4":
      return emotion4;
    case "5":
      return emotion5;
    default:
      return null;
  }
};
