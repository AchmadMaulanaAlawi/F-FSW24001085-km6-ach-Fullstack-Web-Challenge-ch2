function sortCarByYearAscendingly(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  console.log(cars)

  // Clone array untuk menghindari side-effect
  // Apa itu side effect?
  const result = [...cars]

  // Tulis code-mu disini

  // Rubah code ini dengan array hasil sorting secara ascending
  return result.sort((prev, curr) => {
    if (prev.year > curr.year) {
      return 1
    } else if (prev.year < curr.year) {
      return -1
    } else {
      return 0
    }
  })
}
