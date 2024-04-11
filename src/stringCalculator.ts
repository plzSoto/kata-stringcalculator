export function stringCalc(inputString) {
  const number = parseInt(inputString, 10);

  if (number < 0 || number > 1000) {
    return 'Invalid input';
  }

  if (inputString == '') {
    return 0;
  }

  if (
    !inputString.includes('+') &&
    !inputString.includes('-') &&
    !inputString.includes('*') &&
    !inputString.includes('/')
  ) {
    return 'Invalid input';
  }

  if (inputString.includes('+')) {
    const numbers = inputString.split('+').map(Number);
    return numbers[0] + numbers[1];
  }

  if (inputString.includes('-')) {
    const numbers = inputString.split('-').map(Number);
    return numbers[0] - numbers[1];
  }

  if (inputString.includes('*')) {
    const numbers = inputString.split('*').map(Number);
    return numbers[0] * numbers[1];
  }

  if (inputString.includes('/')) {
    const numbers = inputString.split('/').map(Number);
    return numbers[0] / numbers[1];
  }
}
