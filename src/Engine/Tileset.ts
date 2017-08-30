/**
 * Class representing a tileset.
 */
class Tileset {
    /**
     * Gets the tileset info.
     */
    public static get TilesetSourceImage() {
        return './src/Engine/img/cp437_16x16.png';
    }

    public static get TilesetWidthInTile() {
        return 16;
    }

    public static get TilesetHeightInTile() {
        return 16;
    }

    /**
     * Gets the tile info.
     */
    public static get TileWidthInPixel() {
        return 16;
    }

    public static get TileHeightInPixel() {
        return 16;
    }

    /**
     * Gets the characters info.
     */
    public static get CharTransparent() {
        return 0;
    }

    public static get CharFill() {
        return 219;
    }

    public static get CharSmallDot() {
        return 250;
    }

    public static get CharBigDot() {
        return 249;
    }

    public static get CharSimpleBorderTopLeft() {
        return 218;
    }

    public static get CharSimpleBorderTopRight() {
        return 191;
    }

    public static get CharSimpleBorderBottomLeft() {
        return 192;
    }

    public static get CharSimpleBorderBottomRight() {
        return 217;
    }

    public static get CharSimpleBorderHorizontal() {
        return 196;
    }

    public static get CharSimpleBorderVertical() {
        return 179;
    }

    public static get CharDoubleBorderTopLeft() {
        return 201;
    }

    public static get CharDoubleBorderTopRight() {
        return 187;
    }

    public static get CharDoubleBorderBottomLeft() {
        return 200;
    }

    public static get CharDoubleBorderBottomRight() {
        return 188;
    }

    public static get CharDoubleBorderHorizontal() {
        return 205;
    }

    public static get CharDoubleBorderVertical() {
        return 186;
    }

    /**
     * Gets the colors info.
     */
    public static get COLOR_BLACK() {
        return "black";
    }

    public static get COLOR_WHITE() {
        return "white";
    }

    public static get COLOR_RED() {
        return "red";
    }

    public static get COLOR_GREEN() {
        return "green";
    }

    public static get COLOR_BLUE() {
        return "blue";
    }
}