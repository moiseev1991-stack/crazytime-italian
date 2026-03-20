export interface Casino {
  id: string;
  name: string;
  bonus: string;
  minDeposit: string;
  rating: number;
  logoUrl: string;
  affiliateUrl: string;
  hasMobileApp: boolean;
  highlight?: string;
}

export const casinos: Casino[] = [
  {
    id: "betway",
    name: "Betway Casino",
    bonus: "100% fino a €250 + 50 Giri Gratis",
    minDeposit: "€10",
    rating: 4.8,
    logoUrl: "/images/casinos/betway.png",
    affiliateUrl: "#",
    hasMobileApp: true,
    highlight: "Scelta Top",
  },
  {
    id: "888casino",
    name: "888 Casino",
    bonus: "Pacchetto di Benvenuto €1.500",
    minDeposit: "€10",
    rating: 4.7,
    logoUrl: "/images/casinos/888casino.png",
    affiliateUrl: "#",
    hasMobileApp: true,
    highlight: "Miglior Bonus",
  },
  {
    id: "leovegas",
    name: "LeoVegas",
    bonus: "100% fino a €100 + 20 Giri Gratis",
    minDeposit: "€10",
    rating: 4.6,
    logoUrl: "/images/casinos/leovegas.png",
    affiliateUrl: "#",
    hasMobileApp: true,
  },
  {
    id: "casumo",
    name: "Casumo Casino",
    bonus: "100% fino a €300",
    minDeposit: "€10",
    rating: 4.5,
    logoUrl: "/images/casinos/casumo.png",
    affiliateUrl: "#",
    hasMobileApp: true,
  },
  {
    id: "unibet",
    name: "Unibet Casino",
    bonus: "Cashback €200 sul Primo Deposito",
    minDeposit: "€10",
    rating: 4.5,
    logoUrl: "/images/casinos/unibet.png",
    affiliateUrl: "#",
    hasMobileApp: true,
  },
  {
    id: "pokerstars",
    name: "PokerStars Casino",
    bonus: "100% fino a €200",
    minDeposit: "€10",
    rating: 4.4,
    logoUrl: "/images/casinos/pokerstars.png",
    affiliateUrl: "#",
    hasMobileApp: true,
  },
];
