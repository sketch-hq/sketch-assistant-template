import { AssistantPackage } from '@sketch-hq/sketch-assistant-types'

import { helloWorldRule } from './rules/hello-world'

const assistant: AssistantPackage = [
  async () => {
    return {
      name: 'sketch-assistant-template',
      rules: [helloWorldRule],
      config: {
        rules: {
          [helloWorldRule.name]: { active: true },
        },
      },
    }
  },
]

export default assistant
