import signUpUser from './4-user-promise.js';
import uploadPhoto from './5-photo-reject.js';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  const users = [];

  try { 
    const user = await signUpUser(firstName, lastName);
    users.push({ status: 'success', value: user });

    const photoUrl = await uploadPhoto(fileName);
    users.push({ status: 'success', value: photoUrl });
  } catch (error) {
    users.push({ status: 'failed', value: error.message });
  }

  return users;
}

