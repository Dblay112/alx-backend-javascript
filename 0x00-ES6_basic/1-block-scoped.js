export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    // eslint
    const task = true;
    // eslint
    const task2 = false;
  }

  return [task, task2];
}

