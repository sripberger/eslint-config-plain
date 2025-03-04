import index from "./index.js";

export default [
	...index,
	{
		name: "@sripberger/eslint-config-plain meta overrides",
		rules: {
			"quote-props": ["error", "consistent-as-needed"],
			"sort-keys": ["error", "asc", {
				caseSensitive: false,
				minKeys: 10,
				natural: true,
				allowLineSeparatedGroups: true,
			}],
		},
	},
];
