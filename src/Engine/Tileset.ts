/**
 * Class representing a tileset.
 */
class Tileset {
    static get TileWidthInPixel() {
        return 16;
    }

    static get TileHeightInPixel() {
        return 16;
    }

    static get TilesetWidthInTile() {
        return 16;
    }

    static get TilesetHeightInTile() {
        return 16;
    }

    /**
     * Gets the characters.
     */
    static get CharTransparent() { return 0; }

    static get CharFill() { return 219; }

    static get CharSmallDot() { return 250; }

    static get CharBigDot() { return 249; }

    static get CharSimpleBorderTopLeft() { return 218; }

    static get CharSimpleBorder_TOP_RIGHT() { return 191; }

    static get CharSimpleBorder_BOTTOM_LEFT() { return 192; }

    static get CharSimpleBorder_BOTTOM_RIGHT() { return 217; }

    static get CharSimpleBorder_HORIZONTAL() { return 196; }

    static get CharSimpleBorder_VERTICAL() { return 179; }

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