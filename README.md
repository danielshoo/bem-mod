<style>
.ref-to-modifier-const {
    color: #1e8f1e;
    font-weight: bold;
}
</style>
### A module for managing BEM **M**odifiers. 

To install</br>
``` npm i bem-mod```

To  use</br>
``` import bemMod from 'bem-mod'; ```

#### Problem Statement
BEM class names can be lengthy for a significant amount of additional typing which is compouned when an element has multiple modifiers applied. This ESM module aims to reduce the
amount of duplicate code needed to juggle those modifiers.

Consider the case that a user selected a wider reading size for an article, but has also gone idle:

```
<div class="article__paragraph article__paragraph--2x-wide article__paragraph--idled etc">
```

### BemMod API
bemMod(element: HTMLElement, modifier: string, is: boolean = true, rootClassName: string = null): bemModForElement<br>
bemMod.set<span class='ref-to-modifier-const'>Modifier</span>(element: HTMLElement): bemModForElement<br>
bemMod.unset<span  class='ref-to-modifier-const'>Modifier</span>(element: HTMLElement): bemModForElement<br>
bemMod.toggle<span  class='ref-to-modifier-const'>Modifier</span>(element: HTMLElement): bemModForElement<br>

Replace <span class='ref-to-modifier-const'>Modifier</span> for any of the following:
<ul id="modifiers" style="transform: scale(0.9); padding: 0; margin: 0">
    <li>Collapsed</li>
    <li>Expanded</li>
    <li>Invisible</li>
    <li>Shown</li>
    <li>Hidden</li>
    <li>Enabled</li>
    <li>Disabled</li>
    <li>Selected</li>
    <li>Invalid</li>
    <li>Focused</li>
    <li>Animating</li>
    <li>... more to come as needed</li>
</ul>

#### Example Usage for MODIFIER_HIDDEN
```
bemMod.setHidden(elmArticle); // Adds the hidden modifier
bemMod.setHidden(elmArticle, false); // Removes the hidden modifier
bemMod.unsetHidden(elmArticle); // Removes the hidden modifier
bemMod.toggleHidden(elmArticle); // Toggles the hidden modifier
```

#### Example Using client-side given modifier as a string literal
```
bemMod(elmArticle, '2x-wide'); // Adds a '2x-wide' modifier
bemMod(elmArticle, '2x-wide', false); // Removes the '2x-wide' modifier
```

### Classlist Normalization
As bemMod adds or removes classes, it maintains the following order of classnames on the target element:
block__element, block__element--modifier-1, block__element--modifier-2, ..., block__element--modifier-N followed by any other classes added by client code.

An element with classname `calculator__1-button`, the modifier `pressed` and some other class name (.btn for this example) set by client-side code will maintain the order:
```
calculator__button calculator__button--pressed calculator__1-animating btn
```

This ensures css-cascading is done in the order one would expect. Base-styling, overridden by modifiers, overridden by client-side styling.
