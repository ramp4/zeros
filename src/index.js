module.exports = function zeros(expression) {
  let two_counter = 0;
  let five_counter = 0;
  let factorials_1 = [];
  let factorial_counter_1 = 0;
  let factorials_2 = [];
  let factorial_counter_2 = 0;
  let cur = '';

  for (i = 0; i < expression.length; i++) {
    if (expression[i] == '*') {
      continue;
    }
    if (expression[i] != '!') {
      cur += expression[i];
    } else {
      if (expression[i + 1] == '!') {
        factorials_2[factorial_counter_2] = parseInt(cur);
        factorial_counter_2++;
        cur = '';
      } else if (expression[i - 1] != '!') {
        factorials_1[factorial_counter_1] = parseInt(cur);
        factorial_counter_1++;
        cur = '';
      }
    }
  }

  for (i = 1; i <= expression; i++) {
    let cur = i;
    while (cur % 2 == 0) {
      cur = parseInt(cur / 2);
      two_counter++;
    }
    cur = i;
    while (cur % 5 == 0) {
      cur = parseInt(cur / 5);
      five_counter++;
    }
  }

  console.log(factorials_1);
  console.log(factorials_2);

  for (i = 0; i < factorial_counter_2; i++) {
    let starter = 1;
    if (factorials_2[i] % 2 == 0) {
      starter = 2;
    }
    for (j = starter; j <= factorials_2[i]; j += 2) {
      let cur = j;
      while (cur % 2 == 0) {
        two_counter++;
        cur = cur / 2;
      }
      while (cur % 5 == 0) {
        five_counter++;
        cur = cur / 5;
      }
    }
  }

  for (i = 0; i < factorial_counter_1; i++) {
    for (j = 1; j <= factorials_1[i]; j++) {
      let cur = j;
      while (cur % 2 == 0) {
        two_counter++;
        cur = cur / 2;
      }
      while (cur % 5 == 0) {
        five_counter++;
        cur = cur / 5;
      }
    }
  }
  console.log(two_counter, '---', five_counter);
  return Math.min(two_counter, five_counter);
};
