import { resolve } from 'path'
import { testRuleInAssistant } from '@sketch-hq/sketch-assistant-utils'

import { helloWorldRule } from '../'
import Assistant from '../../../'

test('hello-world', async () => {
  expect.assertions(2)

  const { violations, ruleErrors } = await testRuleInAssistant(
    resolve(__dirname, './empty.sketch'),
    Assistant,
    helloWorldRule.name,
  )

  expect(violations[0].message).toMatchInlineSnapshot(`"Hello world"`)
  expect(ruleErrors).toHaveLength(0)
})
