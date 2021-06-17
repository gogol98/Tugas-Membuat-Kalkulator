let app = new Vue({
    el: '#app',
    data() {
      return {
        current: '',
        changeMode: true };
  
    },
    methods: {
      press: function (event) {
        let me = this;
        let key = event.target.textContent;
  
        if (
        key != '=' &&
        key != 'C' &&
        key != '*' &&
        key != '/' &&
        key != '√' &&
        key != "x ²" &&
        key != "%" &&
        key != "<=" &&
        key != "±" &&
        key != "∘")
        {
          me.current += key;
  
        } else if (key === '=') {
  
          if (me.current.indexOf('^') > -1) {
            let base = me.current.slice(0, me.current.indexOf('^'));
            let exponent = me.current.slice(me.current.indexOf('^') + 1);
            me.current = eval('Math.pow(' + base + ',' + exponent + ')');
          } else {
            me.current = eval(me.current);
          }
  
        } else if (key === 'C') {
  
          me.current = '';
  
        } else if (key === '*') {
  
          me.current += '*';
  
        } else if (key === '/') {
  
          me.current += '/';
  
        } else if (key === '+') {
  
          me.current += '+';
  
        } else if (key === '-') {
  
          me.current += '-';
  
        } else if (key === '±') {
  
          if (me.current.charAt(0) === '-') {
            me.current = me.current.slice(1);
          } else {
            me.current = '-' + me.current;
          }
  
        } else if (key === '<=') {
  
          me.current = me.current.substring(0, me.current.length  -1);
  
        } else if (key === '%') {
  
          me.current = me.current / 100;
  
  
        } else if (key === 'x ²') {
  
          me.current = eval(me.current * me.current);
  
        
        }
      },
      changeModeEvent: function () {
        let me = this;
        me.changeMode = !me.changeMode;
      } } });