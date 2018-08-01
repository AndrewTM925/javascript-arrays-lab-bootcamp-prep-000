var kittens = ['Milo', 'Otis', 'Garfield']

function kittens() {
  window.kittens = kittens
  return
}

function destructivelyAppendKitten() {
  kittens.push(Ralph)
  window.kittens
  return
}

function destructivelyPrependKitten() {
  kittens.unshift(Bob)
  window.kittens
  return
}

function destructivelyRemoveLastKitten() {
  kittens.pop()
  window.kittens
  return
}

function destructivelyRemoveFirstKitten() {
  kittens.shift()
  window.kittens
  return
}

function appendKitten() {
  
  kittens = window.kittens
  kittens.appendKitten('Broom')
  window.kittens

  return 
}
