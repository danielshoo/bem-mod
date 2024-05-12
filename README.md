### A module for managing BEM **M**odifiers. 

#### Problem Statement
BEM class names can be lengthy for a significant amount of additional typing which is compouned when an element has multiple modifiers applied. This ESM module aims to reduce the 
amount of duplicate code needed to juggle those modifiers.

Consider the case that a user selected a wider reading size for an article, but has also gone idle:

```
<div class="article__paragraph article__paragraph--2x-wide article__paragraph--idled etc">
```



##### With bem-mod, managing these BEM modifiers goes from:
```
elmArticle.classList.add('.article__paragraph--2x-wide');
elmArticle.classList.add('.article__paragraph--idled');
// then to remove
elmArticle.classList.remove('.article__paragraph--2x-wide');
elmArticle.classList.remove('.article__paragraph--idled');
```
to
```
bemMod(elmArticle, '2x-wide');
bemMod(elmArticle, 'idled');
// then to remove
bemMod(elmArticle, '2x-wide', false);
bemMod(elmArticle, 'idled', false);
```
That is a ~43% drop in characters needing to be typed.

There are common modifiers prepackaged and functions using them which saves on additional characters typed:

MODIFIER_HIDDEN:
```
bemModHidden(elmArticle);
bemModHidden(elmArticle, false);
```
~46% reduction in characters typed

MODIFIER_COLLAPSED:
```
bemModCollapsed(elmArticle);
bemModCollapsed(elmArticle, false);
```
~45% reduction in characters typed


##### bemMod also supports toggling the modifier by passing null:
```
bemModHidden(elmArticle, null);
```
