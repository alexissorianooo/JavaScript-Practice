function nbYear(p0, percent, aug, p) {
  var population = p0;
  var yrPercent = percent / 100;
  var years = 0;
  while (Math.round(population) < p) {
    population = Math.floor(population + population * yrPercent + aug);
    years += 1;
  }
  return years;
}
console.log(nbYear(1500000, 0, 10000, 2000000));
