
import toTextNumber from "./number";

describe("toTextNumber()", () => {
    it("converts number to text", () => {
        expect(toTextNumber(122)).toBe("bir yuz yigirma ikki");
    });

    it("converts three digit number to text", () => {
        expect(toTextNumber(105)).toBe("bir yuz besh");
    });

    it("converts two digit number to text without space at the end", () => {
        expect(toTextNumber(57)).toBe("ellik yetti");
    });

    it("converts three digit number without tens and ones to text", () => {
        expect(toTextNumber(900)).toBe("to'qqiz yuz");
    });

    it("converts three digit number with tens to text", () => {
        expect(toTextNumber(330)).toBe("uch yuz o'ttiz");
    });

    it("converts tens without ones to text", () => {
        expect(toTextNumber(40)).toBe("qirq");
    });

    it("converts tens and ones to text", () => {
        expect(toTextNumber(68)).toBe("oltmish sakkiz");
    });

    it("converts one digit number to text", () => {
        expect(toTextNumber(6)).toBe("olti");
    });

    it("returns empty string", () => {
        expect(toTextNumber()).toBe("");
    });

    it("passing zero returns empty string", () => {
        expect(toTextNumber(0)).toBe("");
    });
});