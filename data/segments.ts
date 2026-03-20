export interface WheelSegment {
  name: string;
  count: number;
  probability: string;
  payout: string;
  color: string;
  rtp: string;
  isBonus: boolean;
}

export const wheelSegments: WheelSegment[] = [
  {
    name: "1",
    count: 21,
    probability: "38.89%",
    payout: "1:1",
    color: "#3B82F6",
    rtp: "96.08%",
    isBonus: false,
  },
  {
    name: "2",
    count: 13,
    probability: "24.07%",
    payout: "2:1",
    color: "#10B981",
    rtp: "95.95%",
    isBonus: false,
  },
  {
    name: "5",
    count: 7,
    probability: "12.96%",
    payout: "5:1",
    color: "#F59E0B",
    rtp: "95.78%",
    isBonus: false,
  },
  {
    name: "10",
    count: 4,
    probability: "7.41%",
    payout: "10:1",
    color: "#EF4444",
    rtp: "95.73%",
    isBonus: false,
  },
  {
    name: "Coin Flip",
    count: 4,
    probability: "7.41%",
    payout: "Variable",
    color: "#7B2FBE",
    rtp: "95.70%",
    isBonus: true,
  },
  {
    name: "Cash Hunt",
    count: 2,
    probability: "3.70%",
    payout: "Variable",
    color: "#8B5CF6",
    rtp: "95.27%",
    isBonus: true,
  },
  {
    name: "Pachinko",
    count: 2,
    probability: "3.70%",
    payout: "Variable",
    color: "#EC4899",
    rtp: "94.33%",
    isBonus: true,
  },
  {
    name: "Crazy Time",
    count: 1,
    probability: "1.85%",
    payout: "Variable",
    color: "#F97316",
    rtp: "94.41%",
    isBonus: true,
  },
];

export const topSlotMultipliers = [2, 3, 4, 5, 7, 10, 15, 20, 25, 50];
