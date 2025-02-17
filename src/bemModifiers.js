const MODIFIER_COLLAPSED = 'collapsed';
const MODIFIER_EXPANDED = 'expanded';
const MODIFIER_INVISIBLE = 'invisible';
const MODIFIER_SHOWN = 'shown';
const MODIFIER_HIDDEN = 'hidden';
const MODIFIER_ENABLED = 'enabled';
const MODIFIER_DISABLED = 'disabled';
const MODIFIER_SELECTED = 'selected';
const MODIFIER_INVALID = 'invalid';
const MODIFIER_FOCUSED = 'focused';
const MODIFIER_ANIMATING = 'animating'; // There is a better option upcoming with https://developer.mozilla.org/en-US/docs/Web/CSS/animation-timeline/view

const MODIFIERS = {
    COLLAPSED: MODIFIER_COLLAPSED,
    SHOWN: MODIFIER_SHOWN,
    HIDDEN: MODIFIER_HIDDEN,
    DISABLED: MODIFIER_DISABLED,
    SELECTED: MODIFIER_SELECTED,
    INVALID: MODIFIER_INVALID,
    FOCUSED: MODIFIER_FOCUSED,
    EXPANDED: MODIFIER_EXPANDED,
    ANIMATING: MODIFIER_ANIMATING,
    INVISIBLE: MODIFIER_INVISIBLE,
    ENABLED: MODIFIER_ENABLED,
};

// For dynamically creating and specifically naming methods. Must be a single word.
const ALIASES = {
    'collapsed': MODIFIER_COLLAPSED,
    'shown': MODIFIER_SHOWN,
    'hidden': MODIFIER_HIDDEN,
    'disabled': MODIFIER_DISABLED,
    'selected': MODIFIER_SELECTED,
    'invalid': MODIFIER_INVALID,
    'focused': MODIFIER_FOCUSED,
    'expanded': MODIFIER_EXPANDED,
    'animating': MODIFIER_ANIMATING,
    'invisible': MODIFIER_INVISIBLE,
    'enabled': MODIFIER_ENABLED,
};

export default MODIFIERS;

export {
    ALIASES,
    MODIFIER_COLLAPSED,
    MODIFIER_EXPANDED,
    MODIFIER_SHOWN,
    MODIFIER_HIDDEN,
    MODIFIER_DISABLED,
    MODIFIER_SELECTED,
    MODIFIER_INVALID,
    MODIFIER_FOCUSED,
    MODIFIER_ANIMATING,
    MODIFIER_INVISIBLE,
    MODIFIER_ENABLED,
}
