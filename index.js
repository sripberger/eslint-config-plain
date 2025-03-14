import js from "@eslint/js";
import globals from "globals";

export default [
	js.configs.recommended,
	{
		name: "@sripberger/eslint-config-plain overrides",
		languageOptions: {
			globals: globals.node,
		},
		rules: {
			"accessor-pairs": "error",
			"array-bracket-newline": ["error", "consistent"],
			"array-bracket-spacing": ["error", "never", {arraysInArrays: true}],
			"array-callback-return": "error",
			"array-element-newline": ["error", "consistent"],
			"arrow-parens": "error",
			"block-spacing": "error",
			"brace-style": "error",
			"camelcase": "error",
			"comma-dangle": ["error", "always-multiline"],
			"comma-spacing": ["error"],
			"comma-style": "error",
			"computed-property-spacing": "error",
			"consistent-this": ["error", "self"],
			"curly": ["error", "multi-line", "consistent"],
			"dot-location": ["error", "property"],
			"dot-notation": "error",
			"eol-last": "error",
			"eqeqeq": ["error", "always", {null: "ignore"}],
			"func-call-spacing": "error",
			"func-names": ["error", "as-needed"],
			"function-paren-newline": ["error", "multiline-arguments"],
			"generator-star-spacing": "error",
			"indent": ["error", "tab", {SwitchCase: 1}],
			"key-spacing": "error",
			"keyword-spacing": "error",
			"linebreak-style": ["error", "unix"],
			"lines-between-class-members": ["error", "always", {exceptAfterSingleLine: true}],
			"max-classes-per-file": "warn",
			"max-len": ["warn", {code: 100, tabWidth: 4}],
			"max-statements-per-line": "error",
			"multiline-ternary": ["error", "never"],
			"new-cap": "warn",
			"new-parens": "error",
			"no-array-constructor": "error",
			"no-async-promise-executor": "error",
			"no-await-in-loop": "warn",
			"no-bitwise": "warn",
			"no-caller": "error",
			"no-confusing-arrow": "error",
			"no-console": "warn",
			"no-div-regex": "error",
			"no-duplicate-imports": ["error", {includeExports: true}],
			"no-else-return": ["error", {allowElseIf: false}],
			"no-eval": "error",
			"no-extend-native": "error",
			"no-extra-bind": "error",
			"no-extra-parens": ["error", "all", {
				enforceForArrowConditionals: false,
				nestedBinaryExpressions: false,
			}],
			"no-floating-decimal": "error",
			"no-implicit-coercion": "error",
			"no-implied-eval": "error",
			"no-invalid-this": "error",
			"no-iterator": "error",
			"no-labels": "error",
			"no-lone-blocks": "warn",
			"no-lonely-if": "warn",
			"no-misleading-character-class": "error",
			"no-mixed-operators": "error",
			"no-multi-spaces": "error",
			"no-multi-str": "error",
			"no-negated-condition": "warn",
			"no-nested-ternary": "error",
			"no-new": "error",
			"no-new-func": "error",
			"no-new-object": "error",
			"no-new-wrappers": "error",
			"no-octal-escape": "error",
			"no-plusplus": ["error", {allowForLoopAfterthoughts: true}],
			"no-proto": "error",
			"no-return-assign": ["error", "always"],
			"no-return-await": "error",
			"no-self-compare": "error",
			"no-sequences": "error",
			"no-shadow": "warn",
			"no-template-curly-in-string": "warn",
			"no-throw-literal": "error",
			"no-trailing-spaces": "error",
			"no-undef-init": "error",
			"no-underscore-dangle": ["error", {allowAfterSuper: true, allowAfterThis: true}],
			"no-unmodified-loop-condition": "error",
			"no-unneeded-ternary": ["error", {defaultAssignment: false}],
			"no-unused-expressions": "error",
			"no-unused-vars": "warn",
			"no-use-before-define": ["error", {functions: false}],
			"no-useless-call": "error",
			"no-useless-computed-key": "error",
			"no-useless-concat": "error",
			"no-useless-constructor": "warn",
			"no-useless-rename": "error",
			"no-useless-return": "error",
			"no-var": "error",
			"no-void": "error",
			"no-warning-comments": "warn",
			"no-whitespace-before-property": "error",
			"no-with": "error",
			"nonblock-statement-body-position": "error",
			"object-curly-newline": "error",
			"object-curly-spacing": "error",
			"object-property-newline": ["error", {allowAllPropertiesOnSameLine: true}],
			"object-shorthand": "error",
			"one-var-declaration-per-line": "error",
			"operator-assignment": "error",
			"operator-linebreak": ["error", "after"],
			"padded-blocks": ["error", "never"],
			"prefer-arrow-callback": "error",
			"prefer-const": "warn",
			"prefer-destructuring": "off",
			"prefer-numeric-literals": "error",
			"prefer-promise-reject-errors": "error",
			"prefer-rest-params": "error",
			"prefer-spread": "error",
			"prefer-template": "error",
			"quote-props": ["error", "as-needed"],
			"quotes": "error",
			"require-atomic-updates": "error",
			"rest-spread-spacing": "error",
			"semi": "error",
			"semi-spacing": "error",
			"semi-style": "error",
			"space-before-blocks": "error",
			"space-before-function-paren": ["error", "never"],
			"space-in-parens": "error",
			"space-infix-ops": "error",
			"space-unary-ops": "error",
			"spaced-comment": "error",
			"strict": ["error", "never"],
			"switch-colon-spacing": "error",
			"symbol-description": "error",
			"template-curly-spacing": "error",
			"template-tag-spacing": "error",
			"unicode-bom": "error",
			"wrap-regex": "error",
			"yield-star-spacing": "error",
			"yoda": "error",
		},
	},
];
