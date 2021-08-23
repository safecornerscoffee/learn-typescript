interface User {
  name: string;
  role: UserRole;
}

enum UserRole {
  Administrator = 'admin',
  Manager = 'manger',
}

function loadUser<T>(): T {
  return JSON.parse('{"name":"emma","role":"admin}');
}

const user = loadUser<User>();

switch(user.role) {
  case UserRole.Administrator:
    console.log('Show control panel');
    break;
  case UserRole.Manager:
    console.log('Hide control panel');
    break;
}
