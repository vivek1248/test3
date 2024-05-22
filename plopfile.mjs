export default function (plop) {
  // Helpers to convert text to different cases
  plop.setHelper('kebabCase', (text) =>
    text.replace(/\s+/g, '-').toLowerCase()
  );
  plop.setHelper('pascalCase', (text) =>
    text.replace(/(^\w|-\w)/g, clearAndUpper)
  );
  plop.setHelper('camelCase', (text) =>
    text
      .replace(/\s+/g, '')
      .replace(/-([a-z])/g, (g) => g[1].toUpperCase())
      .replace(/^[A-Z]/, (g) => g.toLowerCase())
  );

  function clearAndUpper(text) {
    return text.replace(/-/, '').toUpperCase();
  }

  // feature generator
  plop.setGenerator('feature', {
    description: 'create new application feature',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'feature name please',
      },
    ],
    actions: [
      {
        type: 'addMany',
        destination: 'src/modules/{{kebabCase name}}',
        base: 'plop-templates/feature',
        templateFiles: 'plop-templates/feature/*',
      },
      {
        type: 'modify',
        path: 'src/routes/v1/index.ts',
        pattern: /(\/\/ PLOP_INJECT_IMPORT)/g,
        template: `import {{camelCase name}}Routes from '../../modules/{{kebabCase name}}/routes';\n$1`,
      },
      {
        type: 'modify',
        path: 'src/routes/v1/index.ts',
        pattern: /(router\.use\((.*)\);)/g,
        template: `router.use($2, {{camelCase name}}Routes);`,
      },
    ],
  });
}
