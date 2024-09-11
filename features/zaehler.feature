Feature: Zählerfunktion testen
Ich möchte sicherstellen, dass der Zähler korrekt funktioniert, damit ich vertrauen in seiner Funktionalität habe.

Scenario: Zähler erhöhen
    Given Ich habe einen Zähler
    When Ich erhöhe den Zähler
    Then Der Zählerwert sollte um 1 erhöht werden

Scenario: Zähler verringern
    Given Ich habe einen Zähler
    When Ich verringere den Zähler
    Then Der Zählerwert sollte um 1 verringert werden

Scenario: Zähler bei 0 nicht verringert
    Given Ich habe einen Zähler
    When Ich verringere den Zähler nicht bei 0
    Then Der Zählerwert sollte 0 bleiben
