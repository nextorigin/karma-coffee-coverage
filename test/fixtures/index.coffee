foo = (args...) ->
  await setTimeout defer(), 1
  console.log args...

foo 1, 2, 3
