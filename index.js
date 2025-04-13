const importTwIdentifier = 'tw';

module.exports = function ({ types: t }) {
  return {
    visitor: {
      Program(path) {
        let hasTwImport = false;

        path.traverse({
          ImportDeclaration(importPath) {
            if (
              importPath.node.source.value === 'twrnc' &&
              importPath.node.specifiers.some(
                (spec) =>
                  spec.type === 'ImportDefaultSpecifier' &&
                  spec.local.name === importTwIdentifier
              )
            ) {
              hasTwImport = true;
            }
          },
        });

        if (!hasTwImport) {
          const importDeclaration = t.importDeclaration(
            [t.importDefaultSpecifier(t.identifier(importTwIdentifier))],
            t.stringLiteral('twrnc')
          );
          path.unshiftContainer('body', importDeclaration);
        }
      },

      JSXAttribute(path) {
        if (path.node.name.name !== 'className') return;

        const classNameValue = path.node.value;
        let actualValue = null;

        if (t.isJSXExpressionContainer(classNameValue)) {
          actualValue = classNameValue.expression;
        } else if (t.isStringLiteral(classNameValue)) {
          actualValue = classNameValue;
        }

        if (!actualValue || !actualValue.value) return;

        path.replaceWith(
          t.jsxAttribute(
            t.jsxIdentifier('style'),
            t.jsxExpressionContainer(
              t.taggedTemplateExpression(
                t.identifier(importTwIdentifier),
                t.templateLiteral(
                  [
                    t.templateElement({
                      raw: actualValue.value,
                      cooked: actualValue.value,
                    }),
                  ],
                  []
                )
              )
            )
          )
        );
      },
    },
  };
};
