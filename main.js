window.__proto__._VJS = {
    Require: (array) => {
        return new Promise((resolve, reject) => {
            if (array[0] === window && array[1] === document) {

                window.__proto__.VJS = {
    
                    '_GLOBAL': {
                        'window': array[0],
                        'document': array[1]
                    },
    
                    'Animate': (elm, array, delay, loop) => {
                           
                        if (loop) {
                            setInterval(() => {
                                var that = elm;
    
                                array.forEach(arr => {
                                    for (const item in arr) {
                                        
                                        setTimeout(() => {
                            
                                            var value = arr[item];
                                            console.log(item, value);
            
                                            that.style['transitionProperty'] = `${item}`;
                                            that.style['transitionDuration'] = `${delay / parseInt(array.indexOf(arr) + 1) / 1000}s`
                                            that.style[item] = value;
    
                                        }, delay / array.length * array.indexOf(arr) + 1)
                            
                                    }
                                })
                            }, delay)
                        } else {
                            var that = elm;
    
                            array.forEach(arr => {
                                for (const item in arr) {
                                    
                                    setTimeout(() => {
                        
                                        var value = arr[item];
                                        console.log(item, value);
        
                                        that.style['transitionProperty'] = `${item}`;
                                        that.style['transitionDuration'] = `${delay / parseInt(array.indexOf(arr) + 1) / 1000}s`
                                        that.style[item] = value;

                                    }, delay / array.length * array.indexOf(arr) + 1)
                        
                                }
                            })
                        }
    
                    },
    
                    'JSON': {
                        'config': {
                            splitChar: "﹒",
                            attribute: "json",
                            encryption: 1
                        },
                        'set': function (elm, string) {
                            var that = elm;
                            string = JSON.stringify(string);
                            var stringSplit = string.split("")
                            stringSplit.forEach(temp => {
                                stringSplit[stringSplit.indexOf(temp)] = temp.charCodeAt(0) * window.__proto__.VJS.JSON.config.encryption;
                            });
                
                            stringSplit = stringSplit.join(window.__proto__.VJS.JSON.config.splitChar);
                            that.setAttribute(window.__proto__.VJS.JSON.config.attribute, stringSplit);
                            return stringSplit;
                        },
                        'get': function (elm) {
                            var that = elm;
                            var string = that.getAttribute(window.__proto__.VJS.JSON.config.attribute);
                            var stringSplit = string.split(window.__proto__.VJS.JSON.config.splitChar);
                            stringSplit.forEach(temp => {
                                stringSplit[stringSplit.indexOf(temp)] = String.fromCharCode(temp / window.__proto__.VJS.JSON.config.encryption);
                            });
                
                            stringSplit = stringSplit.join("");
                            return JSON.parse(stringSplit);
                        }
                    }
    
                }

                resolve();
    
            } else {
                reject();
                return console.error("Error while requiring VJS. Please use: window._VJS.Require([window, document])");
            }
        })
    }
}