type Name = string | null | string[];

export function greet(name?: Name): string {
  if (!name) {
    return noNameStrategy();
  }
  const names = convertToCanonicalForm(name);
  if (names.length === 1) {
    return singleNameStrategy(names[0]);
  }

  const shoutingNames = names.filter(isNameShouting);
  const normalNames = names.filter((x) => !isNameShouting(x));

  const formattedNormalNames = formatNormalNames(normalNames);
  const formattedShoutingNames = formatShoutedNames(shoutingNames);
  const conjunction = normalNames.length && shoutingNames.length ? " AND " : "";
  return `${formattedNormalNames}${conjunction}${formattedShoutingNames}`;
}

function isNameShouting(n: string): boolean {
  return n.toUpperCase() === n;
}

function noNameStrategy(): string {
  return "Hello, my friend.";
}

function singleNameStrategy(n: string): string {
  if (isNameShouting(n)) {
    return `HELLO ${n}!`;
  }
  return `Hello, ${n}.`;
}

function convertToCanonicalForm(name: string | string[]): string[] {
  const names = Array.isArray(name) ? name : [name];

  return names.flatMap((name) => {
    if (!name.includes(",")) {
      return name;
    }
    if (name.startsWith('"') && name.endsWith('"')) {
      return name.replaceAll('"', "");
    }
    return name.split(",").map((x) => x.trim());
  });
}

function formatNormalNames(names: string[]): string {
  if (names.length === 0) {
    return "";
  }
  if (names.length === 1) {
    return `Hello, ${names[0]}.`;
  }
  if (names.length === 2) {
    const [first, last] = names;
    return `Hello, ${first} and ${last}.`;
  }
  const last = names.slice(-1);
  const otherNames = names.slice(0, -1).join(", ");
  return `Hello, ${otherNames}, and ${last}.`;
}

function formatShoutedNames(names: string[]): string {
  if (names.length === 0) {
    return "";
  }
  if (names.length === 1) {
    return `HELLO ${names[0]}!`;
  }
  if (names.length === 2) {
    const [first, last] = names;
    return `HELLO ${first} AND ${last}!`;
  }
  const last = names.slice(-1);
  const otherNames = names.slice(0, -1).join(", ");
  return `HELLO ${otherNames}, AND ${last}!`;
}
/**
 * # Greeting Kata


### Requirements

#### Requirement 8

Allow the input to escape intentional commas introduced by Requirement 7. 
These can be escaped in the same manner that CSV is, with double quotes surrounding the entry. 
For example, when name is ["Bob", "\"Charlie, Dianne\""], then the method should return the string "Hello, Bob and Charlie, Dianne.".
 */
