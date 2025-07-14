module.exports = {
  // Base configuration
  extends: ['eslint:recommended'],
  plugins: ['astro', 'react', 'react-hooks'],
  
  // Files to ignore
  ignorePatterns: [
    'dist/',
    '.astro/',
    'node_modules/',
    '*.min.js'
  ],
  
  // Global environment settings
  env: {
    browser: true,
    node: true,
    es2022: true,
  },
  
  // Default parser options for all files
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  
  // Base rules for all files
  rules: {
    // Variables and declarations
    'prefer-const': 'error',
    'no-unused-vars': 'error',
    'no-var': 'error',
    
    // Code quality
    'no-console': 'warn',
    'no-debugger': 'error',
    'no-duplicate-imports': 'error',
    
    // Modern JavaScript features
    'prefer-arrow-callback': 'error',
    'arrow-spacing': 'error',
    'object-shorthand': 'error',
    'prefer-template': 'error',
    'template-curly-spacing': 'error',
    'prefer-destructuring': ['error', {
      'array': true,
      'object': true
    }],
    
    // Import organization
    'sort-imports': ['error', {
      'ignoreCase': false,
      'ignoreDeclarationSort': true,
      'ignoreMemberSort': false,
      'memberSyntaxSortOrder': ['none', 'all', 'multiple', 'single']
    }]
  },
  
  // File-specific configurations
  overrides: [
    // Astro files (.astro)
    {
      files: ['*.astro'],
      extends: ['plugin:astro/recommended'],
      parser: 'astro-eslint-parser',
      parserOptions: {
        extraFileExtensions: ['.astro'],
      },
      rules: {
        'astro/no-conflict-set-directives': 'error',
        'astro/no-unused-define-vars-in-style': 'error',
        'astro/valid-compile': 'error'
      }
    },
    
    // React files (.js, .jsx)
    {
      files: ['*.js', '*.jsx'],
      extends: ['plugin:react/recommended', 'plugin:react-hooks/recommended'],
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      },
      settings: {
        react: {
          version: 'detect'
        }
      },
      rules: {
        'react/prop-types': 'off',           // No TypeScript, so no prop validation
        'react/react-in-jsx-scope': 'off'   // Not needed in modern React
      }
    }
  ]
}; 