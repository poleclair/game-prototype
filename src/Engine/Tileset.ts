namespace Engine {

    /**
     * Class representing a tileset.
     */
    export class Tileset {
        private _tileWidth: number;
        private _tileHeight: number;
        private _image: HTMLImageElement;

        /**
         * Creates a tileset.
         * @param  {string} source - The source.
         * @param  {number} tileWidth - The tile width.
         * @param  {number} tileHeight - The tile height.
         * @return {Tileset}
         */
        public constructor(source: string, tileWidth: number, tileHeight: number) {
            this._tileWidth = tileWidth;
            this._tileHeight = tileHeight;

            this._image = new Image();
            this._image.src = source;
        }

        public get tileWidth(): number {
            return this._tileWidth;
        }

        public get tileHeight(): number {
            return this._tileHeight;
        }

        public get image(): HTMLImageElement {
            return this._image;
        }
    }
}