import _ from 'underscore';

export default class KeyboardMappings {

  // allKeys() {
  //   // These are all with keydownEvent.key ... mismatched accuracy w/ keydownEvent.code
  //   // This method's meant for the display of the pseudo keyboard, not mappings
  //   return _.flatten(this.rows());

  // }
  constructor() {
    this.rows = [['~','`','!','1','@','2','#','3','$','4','%','5','^','6','&','7','*','8','(','9',')','0','_','-','+','=', 'Backspace', 'Backspace'],
      ['Tab','Tab','Q','q','W','w','E','e','R','r','T','t','Y','y','U','u','I','i','O','o','P','p','{','[','}',']','|','\\'],
      ['CapsLock','CapsLock','A','a','S','s','D','d','F','f','G','g','H','h','J','j','K','k','L','l',':',';','"',"'",'Enter','Enter'],
      ['Shift','Shift','Z','z','X','x','C','c','V','v','B','b','N','n','M','m','<',',','>','.','?','/'],
      ['Control','Control','Alt','Alt','Meta','Meta','Space','Space','Meta','Meta','Alt','Alt','Control','Control']];

    this.keyboardKeyRows = this.calculateKeyboardKeyRows();

  }

  calculateKeyboardKeyRows = function(){
    let returnable = [];
    let currentRow = [];
    let currentKey = { regular: '', shifted: ''};

    _.each(this.rows, (row, rowsIndex) => {

      _.each(row, (singleKey, keyIndex) => {

        if (keyIndex%2 === 0 ){
          currentKey.shifted = singleKey;
        } else {
          currentKey.regular = singleKey;
          currentRow.push(currentKey);
          currentKey = { regular: '', shifted: ''};
        }

        if (keyIndex === row.length-1){
          returnable.push(currentRow);
          currentRow = [];
        }
      });
    });
    return returnable;
  }

  colorFunc(key){
    return this.colorMap[key] || 'white';
  }


  colorMap = {
    ' ': 'white',
    '`': 'white',
    '~': 'white',

    '!': '#522e52',
    '1': '#8b365f',
    'Q': '#d65c59',
    'q': '#e25c50',
    'A': '#e84e4c',
    'a': '#e5524a',
    'Z': '#f396a9',
    'z': '#f0bec1',

    '@': '#5f354d',
    '2': '#a14264',
    'W': '#e64d2d',
    'w': '#dd6f4a',
    'S': '#eb592a',
    's': '#ed5c61',
    'X': '#e45e2b',
    'x': '#e8cbb9',

    '#': '#762d38',
    '3': '#b94343',
    'E': '#ec522e',
    'e': '#ed6830',
    'D': '#e5583d',
    'd': '#efc684',
    'C': '#f0632e',
    'c': '#f6c84e',

    '$': '#8d3833',
    '4': '#d7573c',
    'R': '#e95515',
    'r': '#ee7f2d',
    'F': '#efdf92',
    'f': '#eadc48',
    'V': '#f1f258',
    'v': '#f4ef93',

    '%': '#ad4932',
    '5': '#de5038',
    'T': '#eda944',
    't': '#f4d34e',
    'G': '#f1ee61',
    'g': '#e7e155',
    'B': '#f4ef71',
    'b': '#f1ecc6',

    '^': '#a44227',
    '6': '#d54c2a',
    'Y': '#d97e38',
    'y': '#e8914e',
    'H': '#cfdb5d',
    'h': '#e7e55e',
    'N': '#e9ee5e',
    'n': '#e6e992',

    '&': '#aa592e',
    '7': '#de8c40',
    'U': '#b7571b',
    'u': '#ab9f4d',
    'J': '#cde681',
    'j': '#dee450',
    'M': '#bdd9c2',
    'm': '#d2e371',

    '*': '#69593f',
    '8': '#8c5036',
    'I': '#9ea852',
    'i': '#bcca73',
    'K': '#42b87e',
    'k': '#63c475',
    '<': '#75c77f',
    ',': '#e2edcd',

    '(': '#586a90',
    '9': '#4c7ea1',
    'O': '#5474a3',
    'o': '#4d81a6',
    'L': '#6097cd',
    'l': '#69bdd9',
    '>': '#81d0ee',
    '.': '#c0dce0',

    ')': '#4c5286',
    '0': '#496394',
    'P': '#6376ae',
    'p': '#5a96c8',
    ':': '#59b3d8',
    ';': '#8dd1e8',
    '?': '#5f574c',
    '/': '#f1f1e9',

    '_': 'white',
    '-': 'white',
    '{': 'white',
    '[': 'white',
    '"': 'white',
    "'": 'white',

    '+': 'white',
    '=': 'white',
    '}': 'white',
    ']': 'white',

    '|': 'white',
    "\\": 'white',
  }




}
