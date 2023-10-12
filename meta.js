module.exports = {
	extends: "./index.js",
	rules: {
		"quote-props": ["error", "consistent-as-needed"],
		"sort-keys": ["error", "asc", {
			caseSensitive: false,
			minKeys: 10,
			natural: true,
			allowLineSeparatedGroups: true,
		}],
	},
};
