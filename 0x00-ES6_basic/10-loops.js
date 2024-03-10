export default function appendToEachArrayValue(array, appendString) {
  const arrayF = [];
  for(const idx of array) {
    arrayF.push('${appendString}{idx}');
  }

  return arrayF;
}
