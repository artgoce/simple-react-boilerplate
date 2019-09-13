const BEM_REGEX =
  '^([.%]?[a-z]*[-]?[a-z0-9-]*)(.[a-z0-9-]*)?(__[a-z0-9]*[-]?[a-z0-9-]*)?(--[a-z0-9]*[-]?[a-z0-9-]*)?(:[a-z]*)*$';

module.exports = {
  plugins: ['stylelint-scss', 'stylelint-a11y'],
  extends: [
    'stylelint-config-recommended',
    'stylelint-config-idiomatic-order',
    'stylelint-a11y/recommended',
  ],
  rules: {
    'block-no-empty': null,
    indentation: 2,
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': true,
    'color-hex-case': ['upper'],
    'no-missing-end-of-source-newline': true,
    'color-no-invalid-hex': true,
    'string-quotes': ['double'],
    'declaration-no-important': true,
    'selector-class-pattern': BEM_REGEX,
    'a11y/media-prefers-reduced-motion': null,
  },
};
