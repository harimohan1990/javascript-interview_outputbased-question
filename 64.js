const animals = {};
let dog = { emoji: '🐶' }
let cat = { emoji: '🐈' }

animals[dog] = { ...dog, name: "Silic" }
animals[cat] = { ...cat, name: "dd" }

console.log(animals[dog])





/*
[object Object] {
    emoji: "🐈",
    name: "dd"
  }

  */