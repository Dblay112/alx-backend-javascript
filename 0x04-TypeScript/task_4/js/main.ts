export { Cpp } from './Cpp';
export { Java } from './Java';
export { React } from './React';

import { Teacher } from './Teacher';

export const cTeacher: Teacher = {
  experienceTeachingC: 10
};

import { cpp } from './Cpp';
import { java } from './Java';
import { react } from './React';

// Cpp subject
console.log('C++');
cpp.setTeacher(cTeacher);
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

// Java subject
console.log('\nJava');
java.setTeacher(cTeacher);
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

// React subject
console.log('\nReact');
react.setTeacher(cTeacher);
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());
