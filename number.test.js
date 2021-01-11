
import toTextNumber from "./number";

describe("toTextNumber()", () => {
    it("converts number to text", () => {
        expect(toTextNumber(125)).toBe("bir yuz yigirma besh");
    });
    it("converts three digit number to text", () => {
        expect(toTextNumber(105)).toBe("bir yuz besh");
    });
    it("converts two digit number to text without space at the end", () => {
        expect(toTextNumber(55)).toBe("ellik besh");
    });
    it("converts three digit number without tens and ones to text", () => {
        expect(toTextNumber(200)).toBe("ikki yuz");
    });
    it("converts tens without ones to text", () => {
        expect(toTextNumber(20)).toBe("yigirma");
    });
    it("converts one digit number to text", () => {
        expect(toTextNumber(6)).toBe("olti");
    });
});