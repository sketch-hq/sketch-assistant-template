import { resolve } from 'path'
import { testRule } from '@sketch-hq/sketch-assistant-utils'

import { helloWorldRule } from '../'
import Assistant from '../../../'

test('hello-world', async () => {
  expect.assertions(2)

  const { violations, errors } = await testRule(
    resolve(__dirname, './empty.sketch'),
    Assistant,
    helloWorldRule.name,
  )

  expect(violations[0].message).toMatchInlineSnapshot(`"Hello world"`)
  expect(errors).toHaveLength(0)
})
