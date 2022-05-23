Element.prototype.Animate = function (array, delay) {
    var that = this;

    array.forEach(arr => {
        for (const item in arr) {
            
            setTimeout(() => {

                var value = arr[item];
    
                console.log(item, value)
                that.style[item] = value;
                that.style['transitionProperty'] = `${item}`;
                that.style['transitionDuration'] = `${delay / parseInt(array.indexOf(arr) + 1) / 1000}s`

            }, delay / array.length * array.indexOf(arr) + 1)

        }
    })
} 

/*
Usage:
    element.Animate(
        [{ "color": "green" }, { "color": "red" }, { "margin": "50px" }, { "margin": "0px" }]
    , 1800)
*/
