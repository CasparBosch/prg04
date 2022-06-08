import * as PIXI from 'pixi.js'

export class Scorpion extends PIXI.Sprite {
    constructor(texture:PIXI.Texture){
        super(texture)
        this.x = 1300
        this.y = 100
        this.scale.set(-1,1)
        this.width = 100
        this.height = 200
    }
}