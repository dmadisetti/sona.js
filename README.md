# toki sona
[![tests](https://github.com/dmadisetti/sona.js/actions/workflows/tests.yml/badge.svg)](https://github.com/dmadisetti/sona.js/actions/workflows/tests.yml)
[![playground](https://img.shields.io/badge/playground-sona-white.svg?logo=observable)](https://observablehq.com/@dmadisetti/sona)

a simple language with a 1000 character interpreter inspired by toki pona

---

![toki sona pi toki sona](https://raw.githubusercontent.com/dmadisetti/sona.js/main/sona.png)

## example sona program (calculates the first 10 primes)
```
ma SonaPiNanpaKiwen

# nanpa pi pali pini
ijo Nanpa li 10
# ken nanpa kiwen
ijo NanpaKiwen li 1

ma Kiwen
ken Nanpa li 0 la pini
# ijo nanpa kiwen en wan li kiwen o ala kiwen?
ijo NanpaKiwen li NanpaKiwen en 1

# pali sona pi nanpa ko
ijo NanpaKo li 1
ma Ko
ijo NanpaKo li NanpaKo en 1
ken NanpaKiwen li NanpaKo la nanpa NanpaKiwen
# ante wan la ijo sona li pali e pini
ken NanpaKiwen li NanpaKo la ijo Nanpa li Nanpa ante 1
ken NanpaKiwen li NanpaKo la tawa Kiwen

ijo NanpaTenpo li NanpaKiwen weka NanpaKo
ijo NanpaTenpo li NanpaTenpo mute NanpaKo
# nanpa li ala kiwen. nanpa li ko
ken NanpaTenpo li NanpaKiwen la tawa Kiwen

# nanpa li ken kiwen
tawa Ko
```

### why

why not

### what

`ijo` `<VariableName>` `li` `[Expression]` : Assign Variable

`ken` `[Expression]` `la` `[Expression]` : If then

`ma` `<MarkerName>` : Create goto mark

`tawa` `<MarkerName>` : Goto markername

`nanpa` `[symbols]`: adds number to return stack

`toki` `[symbols]`: adds ascii to return stack

`pini` : Halt the program and returns stack

#### expressions

`A` `ala`: not A

`A` `anu` `B`: bitwise or

`A` `en` `B`: addition

`A` `ante` `B`: subtraction

`A` `mute` `B`: multiplication

`A` `weka` `B`: division

`A` `li` `B`: equality check

### notes

Integer only math. Paternalistic PascalCase. Forgives over fails. Good luck debugging.
