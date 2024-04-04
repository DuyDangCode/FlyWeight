const checkMemory = require('./memory')
const { A, NUMBER_LOOP, RAMDOM_STRING } = require('./constrant')

class Block {
  #x = 0
  #y = 0
  #a = 0
  #color = ''
  #randomString1 = ''
  #randomString2 = ''
  #randomString3 = ''
  #randomString4 = ''
  #randomString5 = ''
  #randomString6 = ''
  #randomString7 = ''
  #randomString8 = ''
  #randomString9 = ''
  #randomString10 = ''

  constructor({ x, y, a, color, randomString }) {
    this.#x = x
    this.#y = y
    this.#a = a
    this.#color = color
    this.#randomString1 = randomString
    this.#randomString2 = randomString
    this.#randomString3 = randomString
    this.#randomString4 = randomString
    this.#randomString5 = randomString
    this.#randomString6 = randomString
    this.#randomString7 = randomString
    this.#randomString8 = randomString
    this.#randomString9 = randomString
    this.#randomString10 = randomString
  }
}

const world = []

for (let i = 0; i < NUMBER_LOOP; i++) {
  world.push(
    new Block({
      x: 10,
      y: 20,
      a: A,
      color: 'green',
      randomString: RAMDOM_STRING
    })
  )
  world.push(
    new Block({
      x: 10,
      y: 20,
      a: A,
      color: 'gray',
      randomString: RAMDOM_STRING
    })
  )
  world.push(
    new Block({
      x: 10,
      y: 20,
      a: A,
      color: 'brown',
      randomString: RAMDOM_STRING
    })
  )
}

console.log(world.length)

checkMemory()
