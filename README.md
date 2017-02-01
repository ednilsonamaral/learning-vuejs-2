# Learning Vue.js 2.x

## O que mudou do Vue.js 1.x para o Vue.js 2.x

Nada drástico como o Angular 2!


## VirtualDOM

No Vue.js 2 ele trabalha com VirtualDOM. Em nossa aplicação, teremos headers, inputs, buttons, links, certo? Antes desses componentes irem para o DOM do browser, que é bem lento, o Vue.js vai enviar eles para um DOM virtual, o VirtualDOM, que é um objeto javascript. Então, quando houver alguma mudança, o VirtualDOM vai renderizar para a representação virtual e irá fazer uma comparação com a representação antiga e ver o que realmente foi modificado. Nisso, ele verá apenas o mínimo que precisa ser atualizado e depois fazer a troca de apenas o que mudou no DOM do browser.

Com isso, o VirtualDOM fica sendo muito rápido em relação a lentidão do DOM do browser.


## Chamando componente no HTML

No Vue.js 1 nós chamavamos um componente Vue.js no HTML com letras minusculas e separados por hífen, por exemplo, `<root-header></root-header`. Agora, no Vue.js 2 isso **não é necessário** mais, pois o Vue.js 2 trabalha com *V-DOM*. No Vue.js o exemplo acima pode ser chamado também como `<RootHeader></RootHeader`.


## Serviço de HTTP

- [Axios](https://github.com/mzabriskie/axios);  
- [Vue Resource](https://github.com/pagekit/vue-resource).


## ready() >> mounted()

A propriedade `ready()` presente no Vue.js 1, agora, no Vue.js 2, ela se chama `mounted()`.


## Render Functions

São funções de renderização, cujo o próprio nome já diz, irão renderizar alguma coisa para a camada de view. O que ocorre bascimente é que você recebe um parâmetro, que é uma função, e que a mesma deve retornar e executar com o componente principal da aplicação como parâmetro.

```js  
import Vue from 'vue'  
import App from './App.vue'

new Vue({  
  el: '#app',
  render: h => h(App)
})
```

O **h** que foi passado como parâmetro, nada mais é que um *shorthand* para `$createElement`.
