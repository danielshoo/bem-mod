import MODIFIERS from './bemModifiers';

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
 * @module bemMod
 * @description This module provides a suite of helper functions for managing the modifier portion
 * of BEM classes.
 */

/**
 * @description Add or remove the hidden modifier from an element with a shown element not having the hidden modifier.
 * @param {HTMLElement|HTMLElement[]} elm
 * @param {?boolean} isToBeShown
 * @param {?string} rootClassNameOverride
 */
export function bemModShown(elm, isToBeShown = true, rootClassNameOverride = null) {
    bemMod(elm, MODIFIERS.HIDDEN, !isToBeShown, rootClassNameOverride);
}

/**
 * @description Add or remove the hidden modifier from an element with a hidden element having the hidden modifier.
 * @param {HTMLElement|HTMLElement[]} elm
 * @param {?boolean} isToBeHidden
 * @param {?string} rootClassNameOverride
 */
export function bemModHidden(elm, isToBeHidden = true, rootClassNameOverride = null) {
    bemMod(elm, MODIFIERS.HIDDEN, isToBeHidden, rootClassNameOverride);
}

/**
 * @description Add or remove the collapsed modifier from an element.
 * @param {HTMLElement|HTMLElement[]} elm
 * @param {?boolean} isToBeCollapsed
 * @param {?string} rootClassNameOverride
 */
export function bemModCollapsed(elm, isToBeCollapsed = true, rootClassNameOverride = null) {
    bemMod(elm, MODIFIERS.COLLAPSED, isToBeCollapsed, rootClassNameOverride);
}

/**
 * @description Check if a modifier is present on en element
 * @param {HTMLElement|HTMLElement[]} elm
 * @param {string} modifier
 * @param {?string} rootClassNameOverride
 * @return {boolean}
 */
export function hasBemModifier(elm, modifier, rootClassNameOverride = null) {
    const rootClassName = rootClassNameOverride ?? elm.classList[0].replace(/--.*/, '');
    return elm.classList.contains(rootClassName + '--' + modifier);
}

/**
 * @description Add or remove the disabled modifier from an element.
 * @param {HTMLElement|HTMLElement[]} elm
 * @param {?boolean} isToBeDisabled
 * @param {?string} rootClassNameOverride
 */
export function bemModDisabled(elm, isToBeDisabled = true, rootClassNameOverride = null) {
    bemMod(elm, MODIFIERS.DISABLED, isToBeDisabled, rootClassNameOverride);
}

/**
 * @description Add or remove the selected modifier from an element.
 * @param {HTMLElement|HTMLElement[]} elm
 * @param {?boolean} isSelected
 * @param {?string} rootClassNameOverride
 */
export function bemModSelected(elm, isSelected = true, rootClassNameOverride = null) {
    bemMod(elm, MODIFIERS.SELECTED, isSelected, rootClassNameOverride);
}

/**
 * @description Add or remove the invalid modifier from an element.
 * @param {HTMLElement|HTMLElement[]} elm
 * @param {?boolean} isInvalid
 * @param {?string} rootClassNameOverride
 */
export function bemModInvalid(elm, isInvalid = true, rootClassNameOverride = null) {
    bemMod(elm, MODIFIERS.INVALID, isInvalid, rootClassNameOverride);
}

/**
 * @description Add or remove the focused modifier from an element.
 * @param {HTMLElement|HTMLElement[]} elm
 * @param {?boolean} isFocused
 * @param {?string} rootClassNameOverride
 */
export function bemModFocused(elm, isFocused = true, rootClassNameOverride = null) {
    bemMod(elm, MODIFIERS.FOCUSED, isFocused, rootClassNameOverride);
}

/**
 * @description Add or remove the expanded modifier from an element.
 * @param {HTMLElement|HTMLElement[]} elm
 * @param {?boolean} isExpanded
 * @param {?string} rootClassNameOverride
 */
export function bemModExpanded(elm, isExpanded = true, rootClassNameOverride = null) {
    bemMod(elm, MODIFIER_EXPANDED, isExpanded, rootClassNameOverride);
}
