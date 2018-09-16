let declanlc = {
    bind: function(target, eventName, fn) {
       if(!target || (typeof fn !== 'function')) { return }
       let name = eventName || 'click';
       if(target.attachEvent) {
           target.attachEvent('on'+name, fn);
       } else {
           target.addEventListener(name, fn, false);
       }
    },
    getStyle: function (element,cssPropertyName){
        if(window.getComputedStyle){
            return window.getComputedStyle(element)[cssPropertyName];
        }else{
            return element.currentStyle[cssPropertyName]; 
        }
    }
}