/**
 * @module bemMod
 * @description Per the Frontend coding guidelines, we adhere to using BEM (Block Element Modifier) notation
 * with naming css classes. This module provides a suite of helper functions for managing the modifier portion
 * of BEM classes.
 */

const MODIFIER_COLLAPSED = 'collapsed';
const MODIFIER_HIDDEN = 'hidden';
const MODIFIERS = {
    COLLAPSED: MODIFIER_COLLAPSED,
    HIDDEN: MODIFIER_HIDDEN,
};

export { MODIFIERS };

/**
 *
 * @description Base method for adding, removing, or toggling a bem modifier on an element.
 * @param {HTMLElement|HTMLElement[]} elm - The element(s) to add/remove the modifier to/from.
 * @param {string} modifier - The modifier to add/remove.
 * @param {?boolean} is - If true, the modifier is added. If false, the modifier is removed. If null, the modifier is toggled.
 * @param {?string} rootClassNameOverride - This function assumes the first class is the class to
 *     toggle bem modifiers on. Override it if that is not the case.
 */
export default function bemMod(elm, modifier, is, rootClassNameOverride) {

    if (Array.isArray(elm)) {
        elm.forEach((el) => {
            bemMod(el, modifier, is, rootClassNameOverride);
        });
        return;
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
}

/**
 * @description Add or remove the hidden modifier from an element with a shown element not having the hidden modifier.
 * @param {HTMLElement|HTMLElement[]} elm
 * @param {?boolean} isToBeShown
 * @param {?string} rootClassNameOverride
 */
export function bemModShown(elm, isToBeShown = true, rootClassNameOverride = null) {
    bemMod(elm, MODIFIER_HIDDEN, !isToBeShown, rootClassNameOverride);
}

/**
 * @description Add or remove the hidden modifier from an element with a hidden element having the hidden modifier.
 * @param {HTMLElement|HTMLElement[]} elm
 * @param {?boolean} isToBeHidden
 * @param {?string} rootClassNameOverride
 */
export function bemModHidden(elm, isToBeHidden = true, rootClassNameOverride = null) {
    bemMod(elm, MODIFIER_HIDDEN, isToBeHidden, rootClassNameOverride);
}

/**
 * @description Add or remove the collapsed modifier from an element.
 * @param {HTMLElement|HTMLElement[]} elm
 * @param {?boolean} isToBeCollapsed
 * @param {?string} rootClassNameOverride
 */
export function bemModCollapsed(elm, isToBeCollapsed = true, rootClassNameOverride = null) {
    bemMod(elm, MODIFIER_COLLAPSED, isToBeCollapsed, rootClassNameOverride);
}

export function hasBemModifier(elm, modifier, rootClassNameOverride = null) {
    const rootClassName = rootClassNameOverride ?? elm.classList[0].replace(/--.*/, '');
    return elm.classList.contains(rootClassName + '--' + modifier);
}
