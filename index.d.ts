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
declare function bemt(_blockName: string): (element: (string | Modifier), modifiers?: Modifier) => string;
