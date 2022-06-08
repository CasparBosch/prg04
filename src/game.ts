import * as PIXI from 'pixi.js'
import scorpionImage from "./images/scorpion.png"
import subZeroImage from "./images/subZero.png"
import backgroundImage from "./images/background3.png"
import { Scorpion } from './scorpion'
import { SubZero } from './subzero'

class Game {
    pixi : PIXI.Application
    loader : PIXI.Loader
    scorpion : Scorpion
    subZero : SubZero

    constructor(){
        // create a pixi canvas
        this.pixi = new PIXI.Application({ width: 1366, height: 768 })
        document.body.appendChild(this.pixi.view)

        // preload all our textures
        this.loader = new PIXI.Loader()
        this.loader.add('scorpionImage', scorpionImage)
              .add('backgroundImage', backgroundImage)
              .add('subZeroImage', subZeroImage)
        this.loader.load(()=>this.loadCompleted())
        // after loading is complete, create a fish sprite
    }
    loadCompleted() {
        let background = new PIXI.Sprite(this.loader.resources["backgroundImage"].texture!)
        this.pixi.stage.addChild(background)
        let scorpion = new Scorpion(this.loader.resources["scorpionImage"].texture!)
        this.pixi.stage.addChild(scorpion)
        let subZero = new SubZero(this.loader.resources["subZeroImage"].texture!)
        this.pixi.stage.addChild(subZero)
    }
}

new Game()