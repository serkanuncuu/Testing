import { describe, it, expect } from "vitest";

import { validateNumber } from "./validation";

describe('validateNumber()', () => {
    it('Verilen deger NaN ise hata donmeli', () => {
        const val = 'invalid';

        const resultFn = () => {validateNumber(val)};

        expect(resultFn).toThrow(/Invalid number input/);
    });

    it('Utku icin hazirlandi', () => {
        // Burada bir sorun var ve bunu cozmelisin utkusum :)
        const val = NaN;

        const resultFn = () => {validateNumber(val)};

        expect(resultFn).toThrow();
    });
});