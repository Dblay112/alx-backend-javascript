export default function guardrail(mathFunction) {
  const queue = [];

  try {
    const result = mathFunction();
    queue.push(result);
  } catch (error) {
    const errorMessage = error.toString(); // Convert error to string
    queue.push(errorMessage);
  } finally {
    queue.push('Guardrail was processed');
  }

  return queue;
}
