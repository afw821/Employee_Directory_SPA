const $ = function (selector) {    //The $ function mimics jQuery's $
  const nodeList = document.querySelectorAll(selector);

  const text = function(content){       //these functions are esentially jQuery methods I created
    for (let i = 0; i < nodeList.length; i++) {
      nodeList[i].innerText = content;        //This is basically a miniature jQuery library I created
    }
  }
  
  const html = function(content){      //changes innerHTML of selected element 
    for (let i = 0; i < nodeList.length; i++) {
      nodeList[i].innerHTML = content;
    }
  }

  const addClass = function(className){  //adds a class
    for (let i = 0; i < nodeList.length; i++) {
      nodeList[i].classList.add(className);
    }
  }

  const removeClass = function(className){  //removes a class
    for (let i = 0; i < nodeList.length; i++) {
      nodeList[i].classList.remove(className);
    }
  }

  const toggleClass = function(className){  //toggles between classes
    for (let i = 0; i < nodeList.length; i++) {
      nodeList[i].classList.toggle(className);
    }
  }

  const empty = function(){                        //empties an input field, etc.
    for (let i = 0; i < nodeList.length; i++) {
      nodeList[i].innerHTML = '';
    }
  }

  const append = function(content){        //adds content to a selector such as an empty div
    for (let i = 0; i < nodeList.length; i++) {
      nodeList[i].innerHTML += content;
    }
  }

  const prepend = function(content){         //appends content to the beginning
    for (let i = 0; i < nodeList.length; i++) {
      nodeList[i].innerHTML = content + nodeList[i].innerHTML;
    }
  }

  const val = function (content) {     //captures val such as an input field entry
      if(content === undefined){
        return nodeList[0].value; 
      } else {
        nodeList[0].value = content;
      }     
  }

  const on = function (action, cb) {       //adds event listener, selects action such as click and callback function
    for (let i = 0; i < nodeList.length; i++) {
      nodeList[i].addEventListener(action, cb);
    }
  }

  
    
  

  return {        //returns above functions
    text: text,
    html: html,
    addClass: addClass,
    removeClass: removeClass,
    toggleClass: toggleClass,
    empty: empty,
    append: append,
    prepend: prepend,
    on: on,
    val: val
    
  };
}
