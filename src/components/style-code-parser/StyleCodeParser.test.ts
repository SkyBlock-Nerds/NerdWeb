import { describe, it } from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { createRequire } from "node:module";
import esbuild from "esbuild";
import formatCodesMap from "./FormatCodes.ts";
import { parseStyleCodes } from "./parseStyleCodes.ts";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const require = createRequire(import.meta.url);

describe("FormatCodes", () => {
    it("includes Galactic (&g) and Illager Script (&h) along with existing format codes", () => {
        assert.equal(formatCodesMap["&g"], "Galactic");
        assert.equal(formatCodesMap["&h"], "Illager Script");
        assert.equal(formatCodesMap["&k"], "Obfuscated");
        assert.equal(formatCodesMap["&l"], "Bold");
        assert.equal(formatCodesMap["&m"], "Strikethrough");
        assert.equal(formatCodesMap["&n"], "Underline");
        assert.equal(formatCodesMap["&o"], "Italic");
        assert.equal(formatCodesMap["&r"], "Reset");
    });
});

describe("parseStyleCodes", () => {
    it("applies Galactic font for &g", () => {
        const segments = parseStyleCodes("&gGalactic", "&7");
        assert.equal(segments.length, 1);
        assert.equal(segments[0].kind, "text");
        assert.equal(segments[0].text, "Galactic");
        assert.equal(segments[0].style?.fontFamily, "MinecraftGalactic");
        assert.equal(segments[0].style?.color, "#AAAAAA");
    });

    it("applies Illageralt font for &h", () => {
        const segments = parseStyleCodes("&hIllager Script", "&7");
        assert.equal(segments.length, 1);
        assert.equal(segments[0].kind, "text");
        assert.equal(segments[0].text, "Illager Script");
        assert.equal(segments[0].style?.fontFamily, "MinecraftIllageralt");
        assert.equal(segments[0].style?.color, "#AAAAAA");
    });

    it("preserves font across color changes and switches between fonts", () => {
        const segments = parseStyleCodes("&b&gStars &dRemember &hRunes", "&7");
        assert.equal(segments.length, 3);
        assert.deepEqual(
            segments.map(s => ({ text: s.text, color: s.style?.color, font: s.style?.fontFamily })),
            [
                { text: "Stars ", color: "#55FFFF", font: "MinecraftGalactic" },
                { text: "Remember ", color: "#FF55FF", font: "MinecraftGalactic" },
                { text: "Runes", color: "#FF55FF", font: "MinecraftIllageralt" },
            ],
        );
    });

    it("preserves font when color code follows font code", () => {
        const segments = parseStyleCodes("&g&bAqua Galactic", "&7");
        assert.equal(segments.length, 1);
        assert.equal(segments[0].style?.color, "#55FFFF");
        assert.equal(segments[0].style?.fontFamily, "MinecraftGalactic");
    });

    it("combines font codes with formatting styles", () => {
        const boldFirst = parseStyleCodes("&l&gBold Galactic", "&7");
        assert.equal(boldFirst[0].style?.fontWeight, "bold");
        assert.equal(boldFirst[0].style?.fontFamily, "MinecraftGalactic");

        const fontFirst = parseStyleCodes("&h&oItalic Illager", "&7");
        assert.equal(fontFirst[0].style?.fontStyle, "italic");
        assert.equal(fontFirst[0].style?.fontFamily, "MinecraftIllageralt");
    });

    it("resets font back to inherit on &r", () => {
        const segments = parseStyleCodes("&g&lMagic &rNormal", "&7");
        assert.equal(segments.length, 2);
        assert.equal(segments[0].style?.fontFamily, "MinecraftGalactic");
        assert.equal(segments[0].style?.fontWeight, "bold");
        assert.equal(segments[1].style?.fontFamily, "inherit");
        assert.equal(segments[1].style?.fontWeight, "normal");
        assert.equal(segments[1].style?.color, "#AAAAAA");
    });

    it("keeps active font across line breaks", () => {
        const segments = parseStyleCodes("&gLine 1\nLine 2", "&7");
        assert.equal(segments.length, 3);
        assert.equal(segments[0].style?.fontFamily, "MinecraftGalactic");
        assert.equal(segments[1].kind, "linebreak");
        assert.equal(segments[2].style?.fontFamily, "MinecraftGalactic");
    });
});

describe("StyleCodeParser component and font assets", () => {
    it("declares @font-face rules and bundles existing OTF font files", () => {
        const css = fs.readFileSync(path.join(__dirname, "StyleCodeParser.css"), "utf8");
        assert.match(css, /font-family:\s*"MinecraftGalactic"/);
        assert.match(css, /font-family:\s*"MinecraftIllageralt"/);
        assert.match(css, /Minecraft-Galactic\.otf/);
        assert.match(css, /Minecraft-Illageralt\.otf/);

        const fontsDir = path.resolve(__dirname, "../../assets/fonts");
        assert.equal(fs.existsSync(path.join(fontsDir, "Minecraft-Galactic.otf")), true);
        assert.equal(fs.existsSync(path.join(fontsDir, "Minecraft-Illageralt.otf")), true);
    });

    it("renders Galactic and Illageralt spans via StyleCodeParser", () => {
        const bundled = esbuild.buildSync({
            entryPoints: [path.join(__dirname, "StyleCodeParser.tsx")],
            bundle: true,
            write: false,
            format: "cjs",
            platform: "node",
            jsx: "automatic",
            external: ["react", "react-dom", "react/jsx-runtime"],
            loader: { ".css": "empty" },
        });
        const mod = { exports: {} as { default: React.ComponentType<{ textToBeParsed: string | undefined }> } };
        const fn = new Function("require", "module", "exports", bundled.outputFiles[0].text);
        fn(require, mod, mod.exports);

        const React = require("react");
        const { renderToStaticMarkup } = require("react-dom/server");
        const StyleCodeParser = mod.exports.default;

        const html = renderToStaticMarkup(
            React.createElement(StyleCodeParser, { textToBeParsed: "&gGalactic &hIllager &rPlain" }),
        );
        assert.match(html, /font-family:MinecraftGalactic/);
        assert.match(html, /font-family:MinecraftIllageralt/);
        assert.match(html, /font-family:inherit/);
    });
});
