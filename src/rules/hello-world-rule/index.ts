import type { RuleDefinition } from '@sketch-hq/sketch-assistant-types'

const helloWorldRule: RuleDefinition = {
  rule: async (context) => {
    context.utils.report({
      message: 'Hello world',
    })
  },
  name: 'new-assistant-template/hello-world-rule',
  title: 'Hello World',
  description: 'Emits a violation with a hello world message',
}

export { helloWorldRule }
