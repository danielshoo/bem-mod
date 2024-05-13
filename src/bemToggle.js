import bemMod from './bemMod';
import MODIFIERS from './bemModifiers';

/**
 * @description Removes the modifier if present, adds it if not.
 * @param {HTMLElement|HTMLElement[]} elm
 * @param {string} modifier
 * @param {?string} rootClassNameOverride
 */
export default function bemToggle(elm, modifier, rootClassNameOverride = null) {
    bemMod(elm, modifier, null, rootClassNameOverride);
}

/**
 * @description Toggle the hidden modifier on an element.
 * @param {HTMLElement|HTMLElement[]} elm
 * @param {?string} rootClassNameOverride
 */
export function bemToggleHidden(elm, rootClassNameOverride = null) {
    bemToggle(elm, MODIFIERS.HIDDEN, rootClassNameOverride);
}

/**
 * @description Toggle the collapsed modifier on an element.
 * @param {HTMLElement|HTMLElement[]} elm
 * @param {?string} rootClassNameOverride
 */
export function bemToggleCollapsed(elm, rootClassNameOverride = null) {
    bemToggle(elm, MODIFIERS.COLLAPSED, rootClassNameOverride);
}

/**
 * @description Toggle the disabled modifier on an element.
 * @param {HTMLElement|HTMLElement[]} elm
 * @param {?string} rootClassNameOverride
 */
export function bemToggleDisabled(elm, rootClassNameOverride = null) {
    bemToggle(elm, MODIFIERS.DISABLED, rootClassNameOverride);
}

/**
 * @description Toggle the selected modifier on an element.
 * @param {HTMLElement|HTMLElement[]} elm
 * @param {?string} rootClassNameOverride
 */
export function bemToggleSelected(elm, rootClassNameOverride = null) {
    bemToggle(elm, MODIFIERS.SELECTED, rootClassNameOverride);
}

/**
 * @description Toggle the invalid modifier on an element.
 * @param {HTMLElement|HTMLElement[]} elm
 * @param {?string} rootClassNameOverride
 */
export function bemToggleInvalid(elm, rootClassNameOverride = null) {
    bemToggle(elm, MODIFIERS.INVALID, rootClassNameOverride);
}

/**
 * @description Toggle the focused modifier on an element.
 * @param {HTMLElement|HTMLElement[]} elm
 * @param {?string} rootClassNameOverride
 */
export function bemToggleFocused(elm, rootClassNameOverride = null) {
    bemToggle(elm, MODIFIERS.FOCUSED, rootClassNameOverride);
}

/**
 * @description Toggle the expanded modifier on an element.
 * @param {HTMLElement|HTMLElement[]} elm
 * @param {?string} rootClassNameOverride
 */
export function bemToggleExpanded(elm, rootClassNameOverride = null) {
    bemToggle(elm, MODIFIER_EXPANDED, rootClassNameOverride);
}
