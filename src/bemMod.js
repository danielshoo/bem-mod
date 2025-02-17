import { ALIASES } from './bemModifiers';

/**
 * @typedef {HTMLElement|HTMLElement[]|Event} ElmSrc
 */

/**
 *
 * @description Base method for adding, removing, or toggling a bem modifier on an element.
 * @param {ElmSrc} elm - The element(s) to add/remove the modifier to/from.
 * @param {string} modifier - The modifier to add/remove.
 * @param {?boolean} is - If true, the modifier is added. If false, the modifier is removed. If null, the modifier is toggled.
 * @param {?string} rootClassNameOverride - This function assumes the first class is the class to
 *     toggle bem modifiers on. Override it if that is not the case.
 */
function bemMod(elm, modifier, is, rootClassNameOverride) {

    if (elm instanceof Event) {
        return bemMod(elm.target, modifier, is, rootClassNameOverride);
    }

    if (Array.isArray(elm)) {
        return elm.map((el) => bemMod(el, modifier, is, rootClassNameOverride));
    }

    if (elm.classList.length === 0 && !rootClassNameOverride) {
        throw new Error("can't add a bem modifier to a class-less element");
    }

    const rootClassName = rootClassNameOverride ?? elm.classList[0].replace(/--.*/, '');

    // Ensure the root class is always present
    if (!elm.classList.contains(rootClassName)) {
        elm.classList.add(rootClassName);
    }

    // Add or remove the bem-modified class
    if (is !== null) {
        elm.classList.toggle(rootClassName + '--' + modifier, is);
        return;
    }

    elm.classList.toggle(rootClassName + '--' + modifier);

    // Normalize the order of class names such that:
    // 1. BEM modifiers override the root class name
    // 2. Client code has final say where a class name has a matching specificity with  BEM classname.
    const fnIsBemModifiedClassName = (className) => rootClassName + '--' === className.slice(0, rootClassName.length + 3);
    const bemModifiedClassNames = Array.from(elm.classList).filter(fnIsBemModifiedClassName);
    const reorderedClassNames = [rootClassName, ...bemModifiedClassNames, ...Array.from(elm.classList).filter(fnIsBemModifiedClassName)];
    elm.className = reorderedClassNames.join(' ');

    const bemModForElmAndRootClassName = bemMod.bind(null, elm, modifier, null, rootClassNameOverride);
    // for each method attached to the bemMod function, bind it up to th elm:
    Object.keys(bemMod).forEach((key) => {
        if (typeof bemMod[key] === 'function' && key.startsWith('set')) {
            bemModForElmAndRootClassName[key] = function (is = true) {
                return bemMod[key](elm, is, rootClassNameOverride);
            }
        }
        if (typeof bemMod[key] === 'function' && key.startsWith('is')) {
            bemModForElmAndRootClassName[key] = function () {
                return bemMod[key](elm, rootClassNameOverride);
            }
        }
        if (typeof bemMod[key] === 'function' && key.startsWith('toggle')) {
            bemModForElmAndRootClassName[key] = function () {
                return bemMod[key](elm, rootClassNameOverride);
            }
        }
        if (typeof bemMod[key] === 'function' && key.startsWith('unset')) {
            bemModForElmAndRootClassName[key] = function () {
                return bemMod[key](elm, rootClassNameOverride);
            }
        }
    });
}

for (const [alias, modifier] of Object.entries(ALIASES)) {
    bemMod['set' + alias[0].toUpperCase() + alias.slice(1)] = function (elm, is = true, rootClassNameOverride = null) {
        return bemMod(elm, modifier, is, rootClassNameOverride);
    }
    bemMod['is' + alias[0].toUpperCase() + alias.slice(1)] = function (elm, rootClassNameOverride = null) {
        return bemMod.hasModifier(elm, modifier, rootClassNameOverride);
    }
    bemMod['toggle' + alias[0].toUpperCase() + alias.slice(1)] = function (elm, rootClassNameOverride = null) {
        return bemMod(elm, modifier, null, rootClassNameOverride);
    }
    bemMod['unset' + alias[0].toUpperCase() + alias.slice(1)] = function (elm, rootClassNameOverride = null) {
        return bemMod(elm, modifier, false, rootClassNameOverride);
    }
}

/**
 * @description Check if a modifier is present on en element
 * @param {HTMLElement|HTMLElement[]} elm
 * @param {string} modifier
 * @param {?string} rootClassNameOverride
 * @return {boolean}
 */
bemMod.hasModifier = function(elm, modifier, rootClassNameOverride = null) {
    const rootClassName = rootClassNameOverride ?? elm.classList[0].replace(/--.*/, '');
    return elm.classList.contains(rootClassName + '--' + modifier);
}

/**
 * @module bemMod
 * @description This module provides a suite of helper functions for managing the modifier portion
 * of BEM classes.
 */

/**
 * @function bemMod.setCollapsed
 * @description Set the collapsed modifier on an element.
 * @param {HTMLElement|HTMLElement[]} elm
 * @param {boolean} is
 * @param {?string} rootClassNameOverride
 */

/**
 * @function bemMod.isCollapsed
 * @description Check if the collapsed modifier is present on an element.
 * @param {HTMLElement|HTMLElement[]} elm
 * @param {?string} rootClassNameOverride
 * @return {boolean}
 */

/**
 * @function bemMod.toggleCollapsed
 * @description Toggle the collapsed modifier on an element.
 * @param {HTMLElement|HTMLElement[]} elm
 * @param {?string} rootClassNameOverride
 */

/**
 * @function bemMod.setShown
 * @description Set the shown modifier on an element.
 * @param {HTMLElement|HTMLElement[]} elm
 * @param {boolean} is
 * @param {?string} rootClassNameOverride
 */

/**
 * @function bemMod.isShown
 * @description Check if the shown modifier is present on an element.
 * @param {HTMLElement|HTMLElement[]} elm
 * @param {?string} rootClassNameOverride
 * @return {boolean}
 */

/**
 * @function bemMod.toggleShown
 * @description Toggle the shown modifier on an element.
 * @param {HTMLElement|HTMLElement[]} elm
 * @param {?string} rootClassNameOverride
 */

/**
 * @function bemMod.setHidden
 * @description Set the hidden modifier on an element.
 * @param {HTMLElement|HTMLElement[]} elm
 * @param {boolean} is
 * @param {?string} rootClassNameOverride
 */

/**
 * @function bemMod.isHidden
 * @description Check if the hidden modifier is present on an element.
 * @param {HTMLElement|HTMLElement[]} elm
 * @param {?string} rootClassNameOverride
 * @return {boolean}
 */

/**
 * @function bemMod.toggleHidden
 * @description Toggle the hidden modifier on an element.
 * @param {HTMLElement|HTMLElement[]} elm
 * @param {?string} rootClassNameOverride
 */

/**
 * @function bemMod.setDisabled
 * @description Set the disabled modifier on an element.
 * @param {HTMLElement|HTMLElement[]} elm
 * @param {boolean} is
 * @param {?string} rootClassNameOverride
 */

/**
 * @function bemMod.isDisabled
 * @description Check if the disabled modifier is present on an element.
 * @param {HTMLElement|HTMLElement[]} elm
 * @param {?string} rootClassNameOverride
 * @return {boolean}
 */

/**
 * @function bemMod.toggleDisabled
 * @description Toggle the disabled modifier on an element.
 * @param {HTMLElement|HTMLElement[]} elm
 * @param {?string} rootClassNameOverride
 */

/**
 * @function bemMod.setSelected
 * @description Set the selected modifier on an element.
 * @param {HTMLElement|HTMLElement[]} elm
 * @param {boolean} is
 * @param {?string} rootClassNameOverride
 */

/**
 * @function bemMod.isSelected
 * @description Check if the selected modifier is present on an element.
 * @param {HTMLElement|HTMLElement[]} elm
 * @param {?string} rootClassNameOverride
 * @return {boolean}
 */

/**
 * @function bemMod.toggleSelected
 * @description Toggle the selected modifier on an element.
 * @param {HTMLElement|HTMLElement[]} elm
 * @param {?string} rootClassNameOverride
 */

/**
 * @function bemMod.setInvalid
 * @description Set the invalid modifier on an element.
 * @param {HTMLElement|HTMLElement[]} elm
 * @param {boolean} is
 * @param {?string} rootClassNameOverride
 */

/**
 * @function bemMod.isInvalid
 * @description Check if the invalid modifier is present on an element.
 * @param {HTMLElement|HTMLElement[]} elm
 * @param {?string} rootClassNameOverride
 * @return {boolean}
 */

/**
 * @function bemMod.toggleInvalid
 * @description Toggle the invalid modifier on an element.
 * @param {HTMLElement|HTMLElement[]} elm
 * @param {?string} rootClassNameOverride
 */

/**
 * @function bemMod.setFocused
 * @description Set the focused modifier on an element.
 * @param {HTMLElement|HTMLElement[]} elm
 * @param {boolean} is
 * @param {?string} rootClassNameOverride
 */

/**
 * @function bemMod.isFocused
 * @description Check if the focused modifier is present on an element.
 * @param {HTMLElement|HTMLElement[]} elm
 * @param {?string} rootClassNameOverride
 * @return {boolean}
 */

/**
 * @function bemMod.toggleFocused
 * @description Toggle the focused modifier on an element.
 * @param {HTMLElement|HTMLElement[]} elm
 * @param {?string} rootClassNameOverride
 */

/**
 * @function bemMod.setExpanded
 * @description Set the expanded modifier on an element.
 * @param {HTMLElement|HTMLElement[]} elm
 * @param {boolean} is
 * @param {?string} rootClassNameOverride
 */

/**
 * @function bemMod.isExpanded
 * @description Check if the expanded modifier is present on an element.
 * @param {HTMLElement|HTMLElement[]} elm
 * @param {?string} rootClassNameOverride
 * @return {boolean}
 */

/**
 * @function bemMod.toggleExpanded
 * @description Toggle the expanded modifier on an element.
 * @param {HTMLElement|HTMLElement[]} elm
 * @param {?string} rootClassNameOverride
 */

/**
 * @function bemMod.setAnimating
 * @description Set the animating modifier on an element.
 * @param {HTMLElement|HTMLElement[]} elm
 * @param {boolean} is
 * @param {?string} rootClassNameOverride
 */

/**
 * @function bemMod.isAnimating
 * @description Check if the animating modifier is present on an element.
 * @param {HTMLElement|HTMLElement[]} elm
 * @param {?string} rootClassNameOverride
 * @return {boolean}
 */

/**
 * @function bemMod.toggleAnimating
 * @description Toggle the animating modifier on an element.
 * @param {HTMLElement|HTMLElement[]} elm
 * @param {?string} rootClassNameOverride
 */

/**
 * @function bemMod.setInvisible
 * @description Set the invisible modifier on an element.
 * @param {HTMLElement|HTMLElement[]} elm
 * @param {boolean} is
 * @param {?string} rootClassNameOverride
 */

/**
 * @function bemMod.isInvisible
 * @description Check if the invisible modifier is present on an element.
 * @param {HTMLElement|HTMLElement[]} elm
 * @param {?string} rootClassNameOverride
 * @return {boolean}
 */

/**
 * @function bemMod.toggleInvisible
 * @description Toggle the invisible modifier on an element.
 * @param {HTMLElement|HTMLElement[]} elm
 * @param {?string} rootClassNameOverride
 */

/**
 * @function bemMod.setEnabled
 * @description Set the enabled modifier on an element.
 * @param {HTMLElement|HTMLElement[]} elm
 * @param {boolean} is
 * @param {?string} rootClassNameOverride
 */

/**
 * @function bemMod.isEnabled
 * @description Check if the enabled modifier is present on an element.
 * @param {HTMLElement|HTMLElement[]} elm
 * @param {?string} rootClassNameOverride
 * @return {boolean}
 */

/**
 * @function bemMod.toggleEnabled
 * @description Toggle the enabled modifier on an element.
 * @param {HTMLElement|HTMLElement[]} elm
 * @param {?string} rootClassNameOverride
 */


export default bemMod;