const Networks = require("./../src/networks/Networks");

const color = "\x1b[36m%s\x1b[0m";

//network utils
console.log("\n");
console.log(
  color,
  "IS DOMAIN =",
  "https://acelera.cloud",
  Networks.is_domain("https://acelera.cloud")
);
console.log(
  color,
  "IS DOMAIN =",
  "https://acelera.cloud/contato",
  Networks.is_domain("https://acelera.cloud/contato")
);
console.log(
  color,
  "IS DOMAIN =",
  "acelera.cloud",
  Networks.is_domain("acelera.cloud")
);
console.log(
  color,
  "IS URL =",
  "https://acelera.cloud",
  Networks.is_domain("https://acelera.cloud")
);
console.log(
  color,
  "IS URL =",
  "https://acelera.cloud/contato",
  Networks.is_domain("https://acelera.cloud/contato")
);
console.log(
  color,
  "IS URL =",
  "acelera.cloud",
  Networks.is_domain("acelera.cloud")
);
