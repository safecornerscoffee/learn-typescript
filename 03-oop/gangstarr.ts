class Gangsta {
  static totalBullets = 100;
  shoot() {
    Gangsta.totalBullets--;
    console.log(`Bullets left: ${Gangsta.totalBullets}`)
  }
}

const g1 = new Gangsta()
g1.shoot()
const g2 = new Gangsta()
g2.shoot()