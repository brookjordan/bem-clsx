type Modifier = { [key: string]: boolean };
const FALSY_CHECKS = {
  true<T>(condition: T) { return typeof condition !== 'boolean' || condition === false },
  truthy<T>(condition: T) { return !condition },
  nullish<T>(condition: T) { return (typeof condition === 'boolean' && condition === false) || condition == null },
};
type FalsyCheckName = keyof typeof FALSY_CHECKS;
let [ modifierCheckStyle ]: FalsyCheckName[] = (Object.keys(FALSY_CHECKS) as FalsyCheckName[]);

function dasherize(str: string) {
  return str
    .replace(/_/g, "-")
    .replace(/[A-Z]/g, char => `-${char.toLowerCase()}`)
    .replace(/^-+/g, "");
}

function bemt(_blockName: string) {
  const blockName = dasherize(_blockName);
  return function combineWithElementAndModifiers(element: (string | Modifier), modifiers: Modifier = {}) {
    const falseCheck = FALSY_CHECKS[modifierCheckStyle];
    if (!element) { return blockName; }

    let elementClass = blockName;
    if (typeof element === "string") {
      elementClass += `__${dasherize(element)}`;
    }

    if (typeof element === "object") {
      modifiers = element;
    }
    if (!modifiers) { return elementClass; }

    return [
      elementClass,
      ...Object.keys(modifiers)
        .filter((modifier) => !falseCheck(modifiers[modifier]))
        .map((modifier) => {
          return `${elementClass}--${dasherize(modifier)}`;
        }),
    ].join(' ');
  }
}

Object.defineProperty(bemt, "modifierCheckStyle", {
  get() {
    return modifierCheckStyle;
  },
  set(requestedCheckStyle: FalsyCheckName) {
    modifierCheckStyle = requestedCheckStyle;
  },
});

module.exports = bemt;
