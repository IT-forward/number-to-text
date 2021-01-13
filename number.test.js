
import convert from "./number";

describe("convert()", () => {
    it("converts number to text", () => {
        expect(convert(122)).toBe("bir yuz yigirma ikki");
    });

    it("converts three digit number to text", () => {
        expect(convert(405)).toBe("to‘rt yuz besh");
    });

    it("converts two digit number to text without space at the end", () => {
        expect(convert(57)).toBe("ellik yetti");
    });

    it("converts three digit number without tens and ones to text", () => {
        expect(convert(900)).toBe("to‘qqiz yuz");
    });

    it("converts three digit number with tens to text", () => {
        expect(convert(330)).toBe("uch yuz o‘ttiz");
    });

    it("converts tens without ones to text", () => {
        expect(convert(40)).toBe("qirq");
    });

    it("converts one digit number to text", () => {
        expect(convert(6)).toBe("olti");
    });

    it("passing no argument returns empty string", () => {
        expect(convert()).toBe("");
    });

    it("passing zero returns empty string", () => {
        expect(convert(0)).toBe("");
    });
});