import { it, describe, expect } from "vitest";

import { extractNumbers } from "./parser";

describe('expectNumbers()', () => {
    it('fonk. aldigi istekten gelen degerleri iceren bir array donmeli', () => {
        const reqExample = {
            body: {
                num1: 1,
                num2: 2,
            }
        };
        
        const result = extractNumbers(reqExample);

        // toBe ve toEqual Farki
        // expect(result).toBe([1,2]);
        expect(result).toEqual([1,2]);
    });
});