# Learning Vue.js 2.x

## O que mudou do Vue.js 1.x para o Vue.js 2.x

Nada drástico como o Angular 2!


## V-DOM (Virtual DOM)

No Vue.js 2 ele trabalha com V-DOM (Virtual DOM).


### Chamando componente no HTML

No Vue.js 1 nós chamavamos um componente Vue.js no HTML com letras minusculas e separados por hífen, por exemplo, `<root-header></root-header`. Agora, no Vue.js 2 isso **não é necessário** mais, pois o Vue.js 2 trabalha com *V-DOM*. No Vue.js o exemplo acima pode ser chamado também como `<RootHeader></RootHeader`.


## Serviço de HTTP

- [Axios](https://github.com/mzabriskie/axios);  
- [Vue Resource](https://github.com/pagekit/vue-resource).


## ready() >> mounted()

A propriedade `ready()` presente no Vue.js 1 foi depreciada, e, agora, no Vue.js 2, ela se chama `mounted()`.
