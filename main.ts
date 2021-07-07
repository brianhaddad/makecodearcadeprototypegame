namespace SpriteKind {
    export const Overlay = SpriteKind.create()
    export const NPC = SpriteKind.create()
}
function EvaluatePlayer1Sprite () {
    if (controller.dx() == 0 && controller.dy() == 0) {
        animation.stopAnimation(animation.AnimationTypes.All, Player1Sprite)
    } else if (controller.dx() > 0) {
        animation.runImageAnimation(
        Player1Sprite,
        [sprites.builtin.villager4WalkRight1, sprites.builtin.villager4WalkRight2],
        200,
        true
        )
    } else if (controller.dx() < 0) {
        animation.runImageAnimation(
        Player1Sprite,
        [sprites.builtin.villager4WalkLeft1, sprites.builtin.villager4WalkLeft2],
        200,
        true
        )
    } else if (controller.dy() < 0) {
        animation.runImageAnimation(
        Player1Sprite,
        [sprites.builtin.villager4WalkBack1, sprites.builtin.villager4WalkBack2, sprites.builtin.villager4WalkBack1, sprites.builtin.villager4WalkBack3],
        200,
        true
        )
    } else if (controller.dy() > 0) {
        animation.runImageAnimation(
        Player1Sprite,
        [sprites.builtin.villager4WalkFront1, sprites.builtin.villager4WalkFront2, sprites.builtin.villager4WalkFront1, sprites.builtin.villager4WalkFront3],
        200,
        true
        )
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.NPC, function (sprite, otherSprite) {
    const key = GetSpriteKey(otherSprite)
    if (NPCBehaviors[key]) {
        NPCBehaviors[key](otherSprite)
    }
})
controller.anyButton.onEvent(ControllerButtonEvent.Pressed, function () {
    EvaluatePlayer1Sprite()
})
controller.anyButton.onEvent(ControllerButtonEvent.Released, function () {
    EvaluatePlayer1Sprite()
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestClosed, function (sprite, location) {
    tiles.placeOnTile(sprites.create(assets.image`OpenChest`, SpriteKind.Overlay), location)
    tiles.setWallAt(location, true)
    music.baDing.play()
    Money += 50
    game.showLongText("You now have " + Money + " money.", DialogLayout.Bottom)
})
function CheckWinCondition () {
    return Money >= WinMoney
}
function GetSpriteKey(sprt: Sprite): string {
    return sprt.x + "," + sprt.y
}
function SetUpNPC(spriteImage: Image, mapX: number, mapY: number, behavior: (sprt: Sprite) => void): Sprite {
    const sprt = sprites.create(spriteImage, SpriteKind.NPC)
    sprt.z = -1
    tiles.placeOnTile(sprt, tiles.getTileLocation(mapX, mapY))
    NPCBehaviors[GetSpriteKey(sprt)] = behavior
    return sprt
}
let Money = 0
const NPCBehaviors: {[key: string]: (sprt: Sprite) => void} = {}
tiles.setTilemap(tilemap`Maze1`)
const Princess1NPCSprite = SetUpNPC(sprites.castle.princessFront0, 10, 4, (sprt: Sprite) => {
    if (CheckWinCondition()) {
        game.over(true)
    } else {
        sprt.say("Need " + WinMoney + " money.", 5000)
    }
})
const Princess2NPCSprite = SetUpNPC(sprites.castle.princess2Front, 1, 18, (sprt: Sprite) => {sprt.say("Hey there!", 5000)})
const DogNPCSprite = SetUpNPC(sprites.builtin.dog0, 3, 21, (sprt: Sprite) => {sprt.say("Woof.", 5000)})
const GirlNPCSprite = SetUpNPC(sprites.builtin.villager1WalkFront1, 20, 0, (sprt: Sprite) => {sprt.say("Hello dear!", 5000)})
const WitchNPCSprite = SetUpNPC(sprites.swamp.witchForward0, 26, 0, (sprt: Sprite) => {sprt.say("Go away!", 5000)})
const WinMoney = 350
const Player1Sprite = sprites.create(sprites.builtin.villager4WalkFront1, SpriteKind.Player)
controller.moveSprite(Player1Sprite)
tiles.placeOnRandomTile(Player1Sprite, sprites.dungeon.floorLight0)
scene.cameraFollowSprite(Player1Sprite)
