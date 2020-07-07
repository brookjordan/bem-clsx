/**
 * Used like:
 * const cls = buildBEMBuilder("block-name");
 *
 * let blockClass = cls();
 *   => "block-name"
 *
 * let modifiedBlockClass = cls({
 *   goodModifier: true,
 *   badModifier: false,
 * });
 *   => "block-name block-name--good-modifier"
 *
 * let elementClass = cls('an-element');
 *   => "block-name__an-element"
 *
 * let modifiedElementClass = cls('an-element', {
 *   aModifier: true,
 *   anotherModifier: true,
 * });
 *   => "block-name__an-element block-name__an-element--a-modifier block-name__an-element--another-modifier"
**/
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var FALSY_CHECKS = {
    "true": function (condition) { return typeof condition !== 'boolean' || condition === false; },
    truthy: function (condition) { return !condition; },
    nullish: function (condition) { return (typeof condition === 'boolean' && condition === false) || condition == null; }
};
var modifierCheckStyle = Object.keys(FALSY_CHECKS)[0];
function dasherize(str) {
    return str
        .replace(/_/g, "-")
        .replace(/[A-Z]/g, function (char) { return "-" + char.toLowerCase(); })
        .replace(/^-+/g, "");
}
function buildBEMBuilder(_blockName) {
    var blockName = dasherize(_blockName);
    return function combineWithElementAndModifiers(element, modifiers) {
        if (modifiers === void 0) { modifiers = {}; }
        var falseCheck = FALSY_CHECKS[modifierCheckStyle];
        if (!element) {
            return blockName;
        }
        var elementClass = blockName;
        if (typeof element === "string") {
            elementClass += "__" + dasherize(element);
        }
        if (typeof element === "object") {
            modifiers = element;
        }
        if (!modifiers) {
            return elementClass;
        }
        return __spreadArrays([
            elementClass
        ], Object.keys(modifiers)
            .filter(function (modifier) { return !falseCheck(modifiers[modifier]); })
            .map(function (modifier) {
            return elementClass + "--" + dasherize(modifier);
        })).join(' ');
    };
}
Object.defineProperty(buildBEMBuilder, "modifierCheckStyle", {
    get: function () {
        return modifierCheckStyle;
    },
    set: function (requestedCheckStyle) {
        modifierCheckStyle = requestedCheckStyle;
    }
});
module.exports = buildBEMBuilder;
