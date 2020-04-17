import type { Assistant } from '@sketch-hq/sketch-assistant-types'

import { helloWorldRule } from './rules/hello-world-rule'

const assistant: Assistant = async () => {
  return {
    name: 'new-assistant-template',
    rules: [helloWorldRule],
    config: {
      rules: {
        [helloWorldRule.name]: { active: true },
      },
    },
  }
}

export default assistant
