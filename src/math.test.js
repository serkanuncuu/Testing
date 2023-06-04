import { it, describe, expect } from 'vitest';
import { add } from './math.js';

//! describe - Hangi fonk. veya class teste tabi tutulacaksa onu belirtmeli. (Gruplama mantigi)
describe('add()', () => {
  //! it - Teste tabi olacak fonk. veya class bir durum icin test edilir.
  // Bu durumlar projeye ve gelistiriciye gore degiskenlik ve miktar olarak farklilik gosterebilir.
  it('Verilen array elemanlarini toplayip donmeli', () => {
    /** 
     * Tripple A Kurali test yazarken dikkat edilmeli.
     * 
     * Arrange - Test icin kullanilacak dummy data belirlenir.
     * Act - Teste tabi tutulacak fonk. yada class'a dummy data verilir.
     * Assert - Test edilen islevin sonucunun beklentisi belirlenir.
     * */ 

    //! Arrange
    const val = [1,2];

    //! Act
    const returnVal = add(val);

    //! Assert
    expect(returnVal).toBe(3);
  });

  it('Verilen array bos ise toplam 0 donmeli', () => {
    const val = [];

    const returnVal = add(val);

    expect(returnVal).toBe(0);
  });

  it('Donen deger mutlaka number tipinde olmali', () => {
    const val = [1,2];
    const val2 = ['2', 1];

    const returnVal = add(val);
    const returnVal2 = add(val2);

    // Bu test hata vermektedir. Sebebi kodda hata olmasidir. Utku icin olusturuldu.
    expect(returnVal2).toBeTypeOf('number');
    // Bu kisim dogru calismaktadir.
    expect(returnVal).toBeTypeOf('number');
  });

  it('Deger verilmezse hata firlatmali', () => {
    const resultFn = () => {
      add();
    }

    expect(resultFn).toThrow();
  });

  it('Verilen deger array degilse hata firlatmali', () => {
    const val = 1;

    const resultFn = () => {
      add(val);
    }

    // Regex kontrolu ile firlatilan hatayi da kontrol edebiliriz.
    expect(resultFn).toThrow(/numbers is not iterable/);
  });
});