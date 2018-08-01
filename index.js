function Arrays() {
  window.kittens = ['Milo', 'Otis', 'Garfield']
  return
}

function kittens() {
  var kittens = window.kittens()
  return
}

function destructivelyAppendKitten(Ralph) {
  kittens.push(Ralph)
  window.kittens
  return
}

function destructivelyPrependKitten(Bob) {
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

function appendKitten(Broom) {

  var kittens = ("Milo", "Otis", "Garfield")
  kittens.appendKitten("Broom")

  return window.kittens
}
