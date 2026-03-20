export interface SpinRecord {
  id: number;
  result: string;
  multiplier: string;
  isBonus: boolean;
  topSlot: string | null;
  timestamp: string;
  hoursAgo: number;
}

function generateSpins(): SpinRecord[] {
  const results = [
    { result: "1", multiplier: "1x", isBonus: false },
    { result: "1", multiplier: "1x", isBonus: false },
    { result: "2", multiplier: "2x", isBonus: false },
    { result: "1", multiplier: "1x", isBonus: false },
    { result: "5", multiplier: "5x", isBonus: false },
    { result: "1", multiplier: "1x", isBonus: false },
    { result: "Coin Flip", multiplier: "25x", isBonus: true },
    { result: "2", multiplier: "2x", isBonus: false },
    { result: "1", multiplier: "1x", isBonus: false },
    { result: "10", multiplier: "10x", isBonus: false },
    { result: "1", multiplier: "1x", isBonus: false },
    { result: "2", multiplier: "2x", isBonus: false },
    { result: "Pachinko", multiplier: "180x", isBonus: true },
    { result: "1", multiplier: "1x", isBonus: false },
    { result: "5", multiplier: "5x", isBonus: false },
    { result: "2", multiplier: "2x", isBonus: false },
    { result: "1", multiplier: "1x", isBonus: false },
    { result: "Cash Hunt", multiplier: "50x", isBonus: true },
    { result: "1", multiplier: "1x", isBonus: false },
    { result: "2", multiplier: "2x", isBonus: false },
    { result: "5", multiplier: "5x", isBonus: false },
    { result: "1", multiplier: "1x", isBonus: false },
    { result: "Coin Flip", multiplier: "15x", isBonus: true },
    { result: "1", multiplier: "1x", isBonus: false },
    { result: "10", multiplier: "10x", isBonus: false },
    { result: "2", multiplier: "2x", isBonus: false },
    { result: "1", multiplier: "1x", isBonus: false },
    { result: "Crazy Time", multiplier: "1500x", isBonus: true },
    { result: "1", multiplier: "1x", isBonus: false },
    { result: "2", multiplier: "2x", isBonus: false },
    { result: "5", multiplier: "5x", isBonus: false },
    { result: "1", multiplier: "1x", isBonus: false },
    { result: "Pachinko", multiplier: "80x", isBonus: true },
    { result: "1", multiplier: "1x", isBonus: false },
    { result: "2", multiplier: "2x", isBonus: false },
    { result: "10", multiplier: "10x", isBonus: false },
    { result: "1", multiplier: "1x", isBonus: false },
    { result: "Cash Hunt", multiplier: "35x", isBonus: true },
    { result: "1", multiplier: "1x", isBonus: false },
    { result: "2", multiplier: "2x", isBonus: false },
    { result: "1", multiplier: "1x", isBonus: false },
    { result: "5", multiplier: "5x", isBonus: false },
    { result: "Coin Flip", multiplier: "200x", isBonus: true },
    { result: "1", multiplier: "1x", isBonus: false },
    { result: "2", multiplier: "2x", isBonus: false },
    { result: "1", multiplier: "1x", isBonus: false },
    { result: "10", multiplier: "10x", isBonus: false },
    { result: "1", multiplier: "1x", isBonus: false },
    { result: "2", multiplier: "2x", isBonus: false },
    { result: "1", multiplier: "1x", isBonus: false },
  ];

  const topSlots = [null, null, null, "2x", null, "3x", null, null, "5x", null];

  return results.map((spin, index) => {
    const minutesAgo = (index + 1) * 3;
    const hoursAgo = minutesAgo / 60;
    const date = new Date(Date.now() - minutesAgo * 60000);
    const topSlot = topSlots[index % topSlots.length];

    return {
      id: 1000 - index,
      result: spin.result,
      multiplier: topSlot ? `${spin.multiplier} (TS: ${topSlot})` : spin.multiplier,
      isBonus: spin.isBonus,
      topSlot,
      timestamp: date.toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" }),
      hoursAgo,
    };
  });
}

export const mockSpins: SpinRecord[] = generateSpins();
