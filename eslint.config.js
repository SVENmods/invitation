import js from '@eslint/js'
import globals from 'globals'
import pluginReact from 'eslint-plugin-react'
import json from '@eslint/json'
import markdown from '@eslint/markdown'
import css from '@eslint/css'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'
import { defineConfig } from 'eslint/config'

export default defineConfig([
	{
		files: ['**/*.{js,mjs,cjs,jsx}'],
		plugins: { js },
		extends: ['js/recommended'],
		languageOptions: { globals: globals.browser },
	},
	pluginReact.configs.flat.recommended,
	// React 17+ new JSX transform (React doesn't need to be in scope for JSX)
	pluginReact.configs.flat['jsx-runtime'],
	{
		files: ['**/*.{jsx}'],
		settings: { react: { version: 'detect' } },
		rules: {
			'react/react-in-jsx-scope': 'off',
			'react/jsx-uses-react': 'off',
		},
	},
	eslintPluginPrettierRecommended,
	{
		// Don't report Prettier differences (including Tailwind class order) as ESLint errors,
		// formatting is handled by Prettier extension on save.
		rules: {
			'prettier/prettier': 'off',
		},
	},
	{
		files: ['**/*.json'],
		plugins: { json },
		language: 'json/json',
		extends: ['json/recommended'],
	},
	{
		files: ['**/*.md'],
		plugins: { markdown },
		language: 'markdown/commonmark',
		extends: ['markdown/recommended'],
	},
	{
		files: ['**/*.css'],
		plugins: { css },
		language: 'css/css',
		extends: ['css/recommended'],
	},
])
