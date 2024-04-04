const { A, NUMBER_LOOP, RAMDOM_STRING } = require('./constrant')
const checkMemory = require('./memory')

class Block {
  #x = 0
  #y = 0
  #type = null
  constructor({ x = 0, y = 0, type = null }) {
    this.#x = x
    this.#y = y
    this.#type = type
  }

  getType() {
    return this.#type
  }
}

//flyweight
class BlockType {
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

  constructor({ a, color, randomString }) {
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

class GrassType extends BlockType {
  constructor(a = A, color = 'green', randomString = RAMDOM_STRING) {
    super({ a, color, randomString })
  }
}

class RockType extends BlockType {
  constructor(a = A, color = 'gray', randomString = RAMDOM_STRING) {
    super({ a, color, randomString })
  }
}

class BrickType extends BlockType {
  constructor(a = A, color = 'brown', randomString = RAMDOM_STRING) {
    super({ a, color, randomString })
  }
}

//Flyweight factory
class TypeFactory {
  #types = {}

  getType(typeName) {
    if (!this.#types[typeName]) {
      switch (typeName) {
        case 'grass':
          this.#types[typeName] = new GrassType()
          break
        case 'rock':
          this.#types[typeName] = new RockType()
          break
        case 'brick':
          this.#types[typeName] = new BrickType()
          break
        default:
          return null
      }
    }
    return this.#types[typeName]
  }
}

const factory = new TypeFactory()
const world = []

for (let i = 0; i < NUMBER_LOOP; i++) {
  world.push(new Block({ x: 10, y: 20, type: factory.getType('grass') }))
  world.push(new Block({ x: 10, y: 20, type: factory.getType('rock') }))
  world.push(new Block({ x: 10, y: 20, type: factory.getType('brick') }))
}
console.log(world.length)

checkMemory()
