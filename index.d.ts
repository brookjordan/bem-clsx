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
declare type Modifier = {
    [key: string]: boolean;
};
declare const FALSY_CHECKS: {
    true<T>(condition: T): boolean;
    truthy<T_1>(condition: T_1): boolean;
    nullish<T_2>(condition: T_2): boolean;
};
declare type FalsyCheckName = keyof typeof FALSY_CHECKS;
declare let modifierCheckStyle: "true" | "truthy" | "nullish";
declare function dasherize(str: string): string;
declare function buildBEMBuilder(_blockName: string): (element: (string | Modifier), modifiers?: Modifier) => string;
