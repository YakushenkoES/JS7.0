// Этот полифил нужен когда Babel переводит spread оператор (...) в старый стандарт
// и в IE11 не может перевести NodeList в массив через оператор ... это из-за итератора

 function iterator(){
    const self = this;
    let i = 0;
    return {
      next: function() {
        return {
          done: i === self.length,
          value: self[i++]
        };
      }
    };
  }
  if (!NodeList.prototype[Symbol.iterator]) {
    // IE11 refuses to assign directly onto NodeList.prototype
    Object.defineProperty(NodeList.prototype, Symbol.iterator, {
      enumerable: false,
      configurable: true,
      get: function() { return iterator; }
    });
  }