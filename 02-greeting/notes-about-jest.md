# General Notes about Jest

## Setting Up Jest
- Jest has already been set-up in this repository, but you can add jest to an existing repo by running the following in the same directory as a `package.json` file

```sh
npm install --save-dev jest @types/jest ts-jest
```

Note: `jest` is the test framework/library, `@types/jest` gives auto-complete for your editor, and `ts-jest` helps compile your TypeScript to JavaScript for `jest` to run

```sh
npx ts-jest config:init
```

## Common Test Structure

Any good test will follow AAA (Triple A) standards:

- **A**rrange - What do we need to create to set up the test?
- **A**ct - What function should we call to run the test?
- **A**ssert - What was the result? Did it match what we expected?

Within `jest` tests are structured using `describe` blocks. Each team may have their own standard, but a common one is the following:

```ts
describe("fileName", () => {
  describe("function/class/concept being tested", () => {
    it("scenario being tested", () => {
      // Arrange - What do you need to create?

      // Act - What are we testing?

      // Assert - How do we know if it worked?

    });
  })
})
```

For some example tests, check out [this test file](../01-testing/src/math.spec.ts).

