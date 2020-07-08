# BEMt
Don’t want BEM style classes? Get BEMt…

Everyone else? **USE** BEMt!

<sub><sup>(419 bytes minified and brotlied, yadda yadda)</sup></sub>

## Install
```shell
npm install bemt
```
or
```shell
yarn add bemt
```

## Usage
```js
const cls = bemt("block-name");

let blockClass = cls();
//=> "block-name"

let modifiedBlockClass = cls({
  goodModifier: true,
  badModifier: false,
});
//=> "block-name block-name--good-modifier"

let elementClass = cls('an-element');
//=> "block-name__an-element"

let modifiedElementClass = cls('an-element', {
  aModifier: true,
  anotherModifier: true,
});
//=> "block-name__an-element block-name__an-element--a-modifier block-name__an-element--another-modifier"
```

Designed for jsx:
```jsx
import bemt from 'bemt';
import isImportant from './isImportant';
import bigTitle from './bigTitle';

const cls = bemt("a-block");

function MyComponent() {
  return (
    {/* `a-block` or `a-block a-block--is-important` */}
    <div className={cls({ isImportant })}>
      {/* `a-block__title` or `a-block__title a-block__title--big-title` */}
      <h3 className={cls('title', { bigTitle })}>
    </div>
  );
}
```

## Options
Just one option for now

### `modifierCheckStyle`
One of `true`, `truthy`, `nullish`, depending on how strict you want to be.
Ideally call this as early as possible.

Defaults to the strictest: `true`,
meanning you have to pass exactly `true` for a modifier to be recognised.

```js
import bemt from 'bemt';

bemt.modifierCheckStyle = 'true';
```
