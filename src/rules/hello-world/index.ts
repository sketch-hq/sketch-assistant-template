import type { RuleDefinition } from '@sketch-hq/sketch-assistant-types'

const helloWorldRule: RuleDefinition = {
  rule: async (context) => {
    context.utils.report({
      message: 'Hello world',
    })
  },
  name: 'sketch-assistant-template/hello-world',
  title: 'Hello World',
  description: 'Emits a violation with a hello world message',
}

export { helloWorldRule }
