export interface CardData {
  id: string;
  interval: number;
  repetitions: number;
  easiness: number;
  nextReview: Date;
}

export function createNewCard(id: string): CardData {
  return {
    id,
    interval: 1,
    repetitions: 0,
    easiness: 2.5,
    nextReview: new Date(),
  };
}

export function reviewCard(card: CardData, quality: number): CardData {
  let { interval, repetitions, easiness } = card;

  // Update easiness factor
  easiness = Math.max(1.3, easiness + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02)));

  if (quality < 3) {
    repetitions = 0;
    interval = 1;
  } else {
    repetitions += 1;
    if (repetitions === 1) {
      interval = 1;
    } else if (repetitions === 2) {
      interval = 6;
    } else {
      interval = Math.round(interval * easiness);
    }
  }

  // Cap interval at 365 days (1 year)
  interval = Math.min(interval, 365);

  const nextReview = new Date();
  nextReview.setDate(nextReview.getDate() + interval);

  return {
    ...card,
    interval,
    repetitions,
    easiness,
    nextReview,
  };
}