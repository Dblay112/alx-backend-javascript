export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    // bo shadow
    const task = true;
    // no shadow
    const task2 = false;
  }

  return [task, task2];
}
