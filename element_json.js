Element.prototype.JSON = function () {
    var that = this;

    var config = {
        splitChar: "﹒",
        attribute: "json",
        encryption: 7
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
a
