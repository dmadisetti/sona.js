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
ijo Nanpa li mute
# ken nanpa kiwen
ijo NanpaKiwen li wan

ma Kiwen
ken Nanpa li ala la pini
# ijo nanpa kiwen en wan li kiwen o ala kiwen?
ijo NanpaKiwen li NanpaKiwen en wan

# pali sona pi nanpa ko
ijo NanpaKo li wan
ma Ko
ijo NanpaKo li NanpaKo en wan
ken NanpaKiwen li NanpaKo la nanpa NanpaKiwen
# ante wan la ijo sona li pali e pini
ken NanpaKiwen li NanpaKo la ijo Nanpa li Nanpa ante wan
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

`pini` : Halt the program and returns stack

#### expressions

`A` `ala`: not A

`A` `anu` `B`: bitwise or

`A` `en` `B`: addition

`A` `ante` `B`: subtraction

`A` `mute` `B`: multiplication

`A` `weka` `B`: division

`A` `li` `B`: equality check

`op` `e` `[symbols]`: Variable operation reduction

#### effects

`o nanpa e` `[symbols]`: adds number to return stack

`o toki e` `[symbols]`: adds ascii to return stack

#### builtins
ala=0, wan=1, tu=2, luka=5, mute=10, ale=100

### notes

Integer only math. Paternalistic PascalCase. Forgives over fails. Good luck debugging.
