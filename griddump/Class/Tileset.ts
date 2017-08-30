/**
 * Class representing a tileset.
 */
class Tileset {
    private _i;
    private _twip;
    private _thip;
    private _twit;
    private _thit;

    /**
     * Creates a tileset.
     * @return {Object}
     */
    constructor() {
        this._i = {
            none: new Image(),
            black: new Image(),
            white: new Image(),
            red: new Image(),
            green: new Image(),
            blue: new Image()
        }

        this._i.none.src = "img/cp437_16x16.png";
        this._i.black.src = "img/cp437_16x16_black.png";
        this._i.white.src = "img/cp437_16x16_white.png";
        this._i.red.src = "img/cp437_16x16_red.png";
        this._i.green.src = "img/cp437_16x16_green.png";
        this._i.blue.src = "img/cp437_16x16_blue.png";

        this._twip = 16;
        this._thip = 16;

        this._twit = 16;
        this._thit = 16;
    }

    get image() {
        return this._i;
    }

    get tile_width_in_pixel() {
        return this._twip;
    }

    get tile_height_in_pixel() {
        return this._thip;
    }

    get tileset_width_in_tile() {
        return this._twit;
    }

    get tileset_height_in_tile() {
        return this._thit;
    }

    /**
     * Gets the characters.
     */
    static get CHAR_TRANSPARENT() { return 0; }

    static get CHAR_FILL() { return 219; }

    static get CHAR_SMALL_DOT() { return 250; }

    static get CHAR_BIG_DOT() { return 249; }

    static get CHAR_SIMPLE_BORDER_TOP_LEFT() { return 218; }

    static get CHAR_SIMPLE_BORDER_TOP_RIGHT() { return 191; }

    static get CHAR_SIMPLE_BORDER_BOTTOM_LEFT() { return 192; }

    static get CHAR_SIMPLE_BORDER_BOTTOM_RIGHT() { return 217; }

    static get CHAR_SIMPLE_BORDER_HORIZONTAL() { return 196; }

    static get CHAR_SIMPLE_BORDER_VERTICAL() { return 179; }

    static get CHAR_DOUBLE_BORDER_TOP_LEFT() { return 201; }

    static get CHAR_DOUBLE_BORDER_TOP_RIGHT() { return 187; }

    static get CHAR_DOUBLE_BORDER_BOTTOM_LEFT() { return 200; }

    static get CHAR_DOUBLE_BORDER_BOTTOM_RIGHT() { return 188; }

    static get CHAR_DOUBLE_BORDER_HORIZONTAL() { return 205; }

    static get CHAR_DOUBLE_BORDER_VERTICAL() { return 186; }

    /**
     * Gets the colors.
     */
    static get COLOR_BLACK() { return "black"; }

    static get COLOR_WHITE() { return "white"; }

    static get COLOR_RED() { return "red"; }

    static get COLOR_GREEN() { return "green"; }

    static get COLOR_BLUE() { return "blue"; }
}