export const calculateGrade = (items) => {
  let grade = 0;
  let letter = "F";

  if (!items || !items.length) {
    return { grade, letter, isEmpty: true };
  }

  items.forEach((item) => {
    grade += parseInt(item);
  });

  if (grade >= 91) {
    letter = "A";
  } else if (grade >= 81) {
    letter = "B";
  } else if (grade >= 71) {
    letter = "C";
  } else if (grade >= 61) {
    letter = "D";
  } else {
    letter = "F";
  }

  return { grade, letter };
};
