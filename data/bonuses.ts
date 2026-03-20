export interface BonusRound {
  id: string;
  name: string;
  slug: string;
  description: string;
  shortDescription: string;
  hitRate: string;
  maxWin: string;
  avgPayout: string;
  recordWin: string;
  imageUrl: string;
  color: string;
  accentColor: string;
  mechanics: string[];
}

export const bonusRounds: BonusRound[] = [
  {
    id: "coin-flip",
    name: "Coin Flip",
    slug: "coin-flip",
    description:
      "Una gigantesca moneta con un lato rosso e uno blu viene lanciata in aria. A ciascun lato viene assegnato un moltiplicatore casuale prima del lancio. Il lato su cui atterra la moneta determina il moltiplicatore di pagamento. Se entrambi i moltiplicatori sono bassi, può attivarsi un Rescue Flip che raddoppia i valori.",
    shortDescription:
      "Una moneta con lati rosso e blu viene lanciata. Ogni lato ottiene un moltiplicatore casuale — il lato vincente paga il proprio moltiplicatore.",
    hitRate: "7,41%",
    maxWin: "5.000x",
    avgPayout: "~30x",
    recordWin: "5.000x",
    imageUrl: "/images/bonuses/coin-flip.webp",
    color: "#EF4444",
    accentColor: "#3B82F6",
    mechanics: [
      "I lati rosso e blu ricevono ciascuno un moltiplicatore casuale",
      "La moneta viene lanciata in aria",
      "Il lato su cui atterra paga il proprio moltiplicatore",
      "Il Rescue Flip si attiva se entrambi i moltiplicatori sono troppo bassi",
      "Il moltiplicatore Top Slot viene applicato in aggiunta",
    ],
  },
  {
    id: "cash-hunt",
    name: "Cash Hunt",
    slug: "cash-hunt",
    description:
      "Una griglia di 108 bersagli appare sullo schermo, ognuno nasconde un moltiplicatore casuale. I giocatori puntano un cannone sul bersaglio scelto e sparano. Poiché ogni giocatore sceglie in modo indipendente, ognuno ottiene un risultato personalizzato — potresti colpire un 100x mentre un altro giocatore ottiene 5x.",
    shortDescription:
      "108 bersagli nascondono moltiplicatori casuali. Punta il cannone e spara per rivelare il tuo moltiplicatore personalizzato.",
    hitRate: "3,70%",
    maxWin: "25.000x",
    avgPayout: "~50x",
    recordWin: "25.000x",
    imageUrl: "/images/bonuses/cash-hunt.webp",
    color: "#F59E0B",
    accentColor: "#10B981",
    mechanics: [
      "108 bersagli vengono mostrati sullo schermo",
      "Ogni bersaglio nasconde un moltiplicatore casuale",
      "I giocatori scelgono il proprio bersaglio in modo indipendente",
      "I moltiplicatori vengono rivelati dopo che tutti i giocatori hanno scelto",
      "Risultato personale — ogni giocatore ottiene il proprio pagamento",
    ],
  },
  {
    id: "pachinko",
    name: "Pachinko",
    slug: "pachinko",
    description:
      "Una gigantesca parete fisica con pioli riempie lo schermo. Un disco viene lasciato cadere dall'alto e rimbalza casualmente attraverso i pioli fino a raggiungere uno degli slot in basso, ciascuno con un moltiplicatore diverso. Gli slot Double raddoppiano tutti i valori e fanno ricadere il disco.",
    shortDescription:
      "Un disco cade attraverso una parete di pioli per atterrare in uno slot con moltiplicatore. Gli slot Double raddoppiano tutti i valori e rilanciano il disco.",
    hitRate: "3,70%",
    maxWin: "10.000x",
    avgPayout: "~40x",
    recordWin: "10.000x",
    imageUrl: "/images/bonuses/pachinko.webp",
    color: "#EC4899",
    accentColor: "#8B5CF6",
    mechanics: [
      "Parete fisica con pioli riempie lo schermo",
      "16 slot con moltiplicatori in basso",
      "Il disco viene lanciato dall'alto",
      "Rimbalza casualmente attraverso i pioli",
      "Gli slot Double raddoppiano tutti i valori e rilanciano il disco",
    ],
  },
  {
    id: "crazy-time",
    name: "Crazy Time",
    slug: "crazy-time",
    description:
      "Il bonus più raro ed emozionante. Una Porta Rossa si apre rivelando una gigantesca ruota virtuale con 64 segmenti contenenti moltiplicatori, più segmenti Double e Triple. I giocatori scelgono uno dei tre flapper (Blu, Verde o Giallo). I segmenti Double e Triple moltiplicano tutti i valori prima che la ruota giri di nuovo.",
    shortDescription:
      "Il bonus più raro: una gigantesca ruota virtuale a 64 segmenti con moltiplicatori. Scegli il colore del tuo flapper e gira.",
    hitRate: "1,85%",
    maxWin: "20.000x",
    avgPayout: "~80x",
    recordWin: "20.000x",
    imageUrl: "/images/bonuses/crazy-time-bonus.webp",
    color: "#F97316",
    accentColor: "#7B2FBE",
    mechanics: [
      "La Porta Rossa si apre rivelando una gigantesca ruota virtuale",
      "64 segmenti con moltiplicatori",
      "Segmenti Double e Triple disponibili",
      "I giocatori scelgono il flapper Blu, Verde o Giallo",
      "Double/Triple moltiplicano TUTTI i valori prima della nuova girata",
      "Bonus più raro — si verifica solo nell'1,85% dei casi",
    ],
  },
];
