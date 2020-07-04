Element.prototype.JSON = function () {
    var that = this;

    var config = {
        splitChar: "﹒", // salt
        attribute: "json", // attribute name
        encryption: 1 // multiplier
    }

    return {
        set: function (string) {
            string = JSON.stringify(string);
            var stringSplit = string.split("")
            stringSplit.forEach(temp => {
                stringSplit[stringSplit.indexOf(temp)] = temp.charCodeAt(0) * config.encryption;
            });

            stringSplit = stringSplit.join(config.splitChar);
            that.setAttribute(config.attribute, stringSplit);
            return stringSplit;
        },
        get: function () {
            var string = that.getAttribute(config.attribute);
            var stringSplit = string.split(config.splitChar);
            stringSplit.forEach(temp => {
                stringSplit[stringSplit.indexOf(temp)] = String.fromCharCode(temp / config.encryption);
            });

            stringSplit = stringSplit.join("");
            return JSON.parse(stringSplit);
        }
    }
}

/*

Usage:

    element.JSON().set({ name: "Niiko" }) // 123﹒34﹒110﹒97﹒109﹒101﹒34﹒58﹒34﹒78﹒105﹒105﹒107﹒111﹒34﹒125
    element.JSON().get() // { name: "Niiko" }

*/
