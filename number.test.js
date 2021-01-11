
import toTextNumber from "./number";

describe("toTextNumber()", () => {
    it("converts number to text", () => {
        expect(toTextNumber(1)).toBe("bir")
    });
});