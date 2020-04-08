import iterator from './iterator';

function is_seperator(c, no_space) {
  if (no_space) return /[,，]/.test(c);
  else return /[,，\s]/.test(c);
}

function skip_seperator(it, no_space) {
  while (!it.end()) {
    if (!is_seperator(it.curr(1), no_space)) break;
    else it.next();
  }
}

export default function parse(input, no_space = false) {
  const it = iterator(input);
  const result = [], stack = [];
  let group = '';

  while (!it.end()) {
    let c = it.curr();
    if (c === undefined) break;
    if (c == '(') {
      group += c;
      stack.push(c);
    }

    else if (c == ')') {
      group += c;
      if (stack.length) {
        stack.pop();
      }
    }

    else if (stack.length) {
      group += c;
    }

    else if (is_seperator(c, no_space)) {
      result.push(group);
      group = '';
      skip_seperator(it, no_space);
    }

    else {
      group += c;
    }

    it.next();
  }

  if (group) {
    result.push(group);
  }

  return result;
}
