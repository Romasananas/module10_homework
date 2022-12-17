const result = +prompt('введите число');
if (isNaN(result)) {
  console.log('Упс, кажется, вы ошиблись');
} else {
  let b = result % 2 == 0 ? 'это четное число' : 'это нечетное число';
  console.log(b);
}