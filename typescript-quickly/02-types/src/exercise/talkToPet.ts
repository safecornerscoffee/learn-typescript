const talkToPet = (pet: Pet): String => {
  if (pet instanceof Fish) {
    return "Fish cannot talk, sorry."
  } else if(pet instanceof Dog) {
    return pet.sayHello();
  }
  throw new Error("Unknown Type, is Not Instance of Pet")
}