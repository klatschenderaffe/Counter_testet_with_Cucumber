const { Given, When, Then } = require('@cucumber/cucumber');
// assert modul kommt von node und wird bei cucumber benutzt
const assert = require('assert');
const {
  hochzählen,
  herunterzählen,
  zählerStand,
  zählerZurücksetzen,
} = require('../../zaehler');

Given('Ich habe einen Zähler', function () {
  zählerZurücksetzen(); // 0
});

When('Ich erhöhe den Zähler', function () {
  hochzählen(); // 1
});

Then('Der Zählerwert sollte um 1 erhöht werden', function () {
  assert.strictEqual(zählerStand(), 1);
});

When('Ich verringere den Zähler', function () {
  hochzählen(); //von 0 auf 1 hochzählen, wenn wir auf 1 sind wieder runterzählen
  herunterzählen(); // von 1 auf 0 verringern
});

Then('Der Zählerwert sollte um 1 verringert werden', function () {
  assert.strictEqual(zählerStand(), 0);
});

When('Ich verringere den Zähler nicht bei 0', function () {
  //wenn die Funktion Zählerstand bei 0 ist, wird nicht herrunter gezählt
  //wenn der Zählerstand größer als null, nur dann darf heruntergezählt werden.
  if (zählerStand() > 0) {
    herunterzählen();
  }
});

Then('Der Zählerwert sollte 0 bleiben', function () {
  assert.strictEqual(zählerStand(), 0);
});
