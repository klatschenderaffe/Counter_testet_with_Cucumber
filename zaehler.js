// Warten bis das DOM vollständig geladen ist
document.addEventListener('DOMContentLoaded', () => {
  // Elemente aus dem DOM abrufen
  const counterText = document.getElementById('counter-text');
  const decreaseBtn = document.getElementById('decrease');
  const increaseBtn = document.getElementById('increase');
  // Ereignislistener für die Buttons registrieren
  decreaseBtn.addEventListener('click', () => {
    // Herunterzählen des Zählers und Anzeige des neuen Zähl
    counterText.innerHTML = 'Count: ' + herunterzählen();
  });
  increaseBtn.addEventListener('click', () => {
    // Hochzählen des Zählers und Anzeige des neuen Zählerstand

    counterText.innerHTML = 'Count: ' + hochzählen();
  });
});

let zaehler = 0;

function hochzählen() {
  return (zaehler += 1);
  // zaehler = zaehler +1
}

function herunterzählen() {
  if (zaehler === 0) {
    return zaehler;
  }
  return (zaehler -= 1);
}

function zählerZurücksetzen() {
  zaehler = 0;
}

function zählerStand() {
  return zaehler;
}

module.exports = {
  hochzählen,
  herunterzählen,
  zählerZurücksetzen,
  zählerStand,
};
