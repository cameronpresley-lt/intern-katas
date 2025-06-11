import { greet } from "./index";
describe("greet", () => {
  it("and single name, then proper greeting", () => {
    const result = greet("Bob");

    expect(result).toBe("Hello, Bob.");
  });
  it("and no name, then proper greeting", () => {
    const result = greet();

    expect(result).toBe("Hello, my friend.");
  });
  it("and a name in all caps, then proper greeting", () => {
    const result = greet("JERRY");

    expect(result).toBe("HELLO JERRY!");
  });
  it("and two names, then proper greeting", () => {
    const result = greet(["Cameron", "James"]);

    expect(result).toBe("Hello, Cameron and James.");
  });
  it("and multiple names, then proper greeting", () => {
    const result = greet(["Alice", "Bob", "Claire"]);

    expect(result).toBe("Hello, Alice, Bob, and Claire.");
  });
  it("and multiple names with multiple cases", () => {
    const result = greet(["Alice", "BOB", "Claire"]);

    expect(result).toBe("Hello, Alice and Claire. AND HELLO BOB!");
  });
  it("and names include commas, then they're handled", () => {
    const result = greet(["Bob", "Charlie, Dianne"]);
    expect(result).toBe("Hello, Bob, Charlie, and Dianne.");
  });
  it("and name is escaped, then proper greeting", () => {
    const result = greet(["Bob", "\"Charlie, Dianne\""]);
    expect(result).toBe("Hello, Bob and Charlie, Dianne.")
  })
});
