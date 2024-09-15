import { describe, it, expect } from 'vitest';
import { reviewCard, createNewCard } from './sm2';

describe('SM-2 Algorithm', () => {
  it('should initialize new card correctly', () => {
    const card = createNewCard('test-id');
    expect(card.interval).toBe(1);
    expect(card.repetitions).toBe(0);
    expect(card.easiness).toBe(2.5);
    expect(card.nextReview).toBeInstanceOf(Date);
  });

  it('should handle quality 5 correctly', () => {
    const card = createNewCard('test-id');
    const updated = reviewCard(card, 5);
    expect(updated.repetitions).toBe(1);
    expect(updated.interval).toBe(1);
    expect(updated.easiness).toBe(2.6); // 2.5 + 0.1
  });

  it('should handle quality 3 correctly', () => {
    const card = createNewCard('test-id');
    const updated = reviewCard(card, 3);
    expect(updated.repetitions).toBe(1);
    expect(updated.interval).toBe(1);
    expect(updated.easiness).toBe(2.18); // 2.5 + (0.1 - 2*0.14) approx
  });

  it('should handle quality 0 correctly', () => {
    const card = createNewCard('test-id');
    const updated = reviewCard(card, 0);
    expect(updated.repetitions).toBe(0);
    expect(updated.interval).toBe(1);
    expect(updated.easiness).toBe(1.7); // 2.5 + (0.1 - 5*0.26) approx
  });

  it('should throw error for invalid quality', () => {
    const card = createNewCard('test-id');
    expect(() => reviewCard(card, 6)).toThrow('Quality must be between 0 and 5');
  });
});