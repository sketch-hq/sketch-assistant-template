import { resolve } from 'path'
import { testRule } from '@sketch-hq/sketch-assistant-utils'

import { helloWorldRule } from '../'
import Assistant from '../../../'

test('hello-world-rule', async () => {
  expect.assertions(2)

  const { violations, errors } = await testRule(
    resolve(__dirname, './empty.sketch'),
    { [helloWorldRule.name]: { active: true } },
    Assistant,
  )

  expect(violations[0].message).toBe('Hello world')
  expect(errors).toHaveLength(0)
})
