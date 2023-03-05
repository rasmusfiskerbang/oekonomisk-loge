export const members = [
  "Mikkel Simonsen Mark",
  "Mathias Bruun Kynde",
  "Michael K. Kirkeby",
  "Rasmus Behnk",
  "Rasmus Fisker Bang",
] as const;
export const memberIDs = [0, 1, 2, 3, 4];

export type Member = typeof members[number];
export type MemberID = typeof memberIDs[number];

const memberImages: Record<MemberID, string> = {
  0: "https://media.licdn.com/dms/image/C4D03AQFRPDGObSfLTQ/profile-displayphoto-shrink_800_800/0/1638610009950?e=1683763200&v=beta&t=YIOTx0Oj0QWbsmJsJNix3DC1mhm1ace8ZtsJhcsATBA",
  1: "https://media.licdn.com/dms/image/C5603AQGMOyskXv4hvQ/profile-displayphoto-shrink_800_800/0/1547940598915?e=1683763200&v=beta&t=Fu4mQOS_mH7GhqpX2k1GUjeM_6xBos-tHnvEw3WISSo",
  2: "https://media.licdn.com/dms/image/C4D03AQEJfc_S4tW4Hw/profile-displayphoto-shrink_800_800/0/1549831290142?e=1683763200&v=beta&t=4l1ADETpmPpKWh3K3rTF0MfZz3RTsHzL3XK-or3dkc0",
  3: "https://media.licdn.com/dms/image/C5603AQEQDYIWaiXCUw/profile-displayphoto-shrink_800_800/0/1620307241058?e=1683763200&v=beta&t=78Qi5lRROWEBhbQoOhs56WZGVZbbBb47U_1hJEKasmc",
  4: "https://media.licdn.com/dms/image/C5603AQFXZHyOnOQtbA/profile-displayphoto-shrink_800_800/0/1536923835564?e=1683763200&v=beta&t=8QadzQTyYUqTfGHpZFCPTuTgMCW6kx8HfxjakdT6d4Q",
};

const memberDescriptions: Record<MemberID, string> = {
  0: "Mikkel er logens nyeste medlem. Han er en gut med et roligt gemyt, men samtidig er han altid klar på spas og løjer.",
  1: "Mathias er en kærlig familie far med en stor numse. Den hurtige besøgende vil bemærke en slående lighed til Mikkel Beha.",
  2: "Michael er logens kassér og founding partner. På trods af at han kan slå dig som en revisortype, så er han altid klar på en tequila.",
  3: "Rasmus er logens yngste medlem. Hans unge alder afspejler sig i den utrolige mængde energi han bringer ind i forsamlinger. Han er altid klar til smække et køleskab på ryggen.",
  4: "TBD",
};

export function getMemberImage(id: MemberID) {
  return memberImages[id];
}

export function getMemberName(id: MemberID) {
  return members[id];
}

export function getMemberDescription(id: MemberID) {
  return memberDescriptions[id];
}
