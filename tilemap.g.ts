// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "Maze1":
            case "level1":return tiles.createTilemap(hex`20002000020202020203020202020302020202020102030303020202010202020202020202080a0a0a0a0a0a0a0a0a0a0a0a070201020303020202020102030203020302020503030303020202020202030205030103080a0a0a0b0201020c0a0a0a070202050201010101010101010101020502010205030303030201030302030305020305030103030203030303030102050201020502010101010101010101020502030503010202020202020203010205020102050301020202020302030102050203050301020b0a0a0a0a070201020502010205030102080a0a0a07020102050203050201020202030202050201020503010305030102050203030503010205020305020101010101010205020102050301020503010305030102050201020503030502020202030203020502010205020102050202020503010205020202050302090a0a0a0a0a0a0a0a060201020c020102090a0a0a06030103090a0a0a0f03020202030303020202030502010202020102020202020502010303020202020301010101010101010103050201010101010101010102050201010101010101010202030303020203020205020303030301020202020205030103030202020203020c0a0a0d0a0a0a0a0a040a0a0a0b020102080a0a0a0f0201020b0a0a0a070302020203050303020202030302020202010205030302030201020302030305030101010205020101010101010101010101020502010101010101010101030503020202020502030303030303020303030103050203030202020302020103050202020303090a0d0a0a0a0a0a0a0a070201030e0a0a0a0a0a0a0a070201030502020303020202050202020202030305030102050202030302030205030103050201010101010205020101010101020503010205020101010101020502010205020303020201030503010203030102050201020503020202030102050301020502030b02020103050201030c02010205020102090a0a0a070201020503010205020205030301030503010205020103050201020202020205020103050301020502020502020103050301020502010305030101010101020503010305030102050202050202010305030103050201020503020303030103050301030503030305030205020201030502010205020102090a0a0a0702010305030103090a0a0a060302050303010305020102050301030302030205030103050201020203020205020205020301030503010305020101010101020503010305030101010101020502020503030202050303020502020203020102050202020502010202020302050202090a0a0a0a040a0a0a040a0a0a0b030102090a0a0a0f0201020b0a0a0a0f020202020202020203030303030303030301030303030303020102020203020202`, img`
................2.......2.......
................2.......2.......
................2.......2.......
...22.2222222...2.......2.......
...2........2...2...222222222...
...2........2...2...2.......2...
...2........2...2...2.......2...
...2........2...2...2.......2...
...222222...2...2...2...2...2...
............2...2.......2.......
............2...2.......2.......
............2...2.......2.......
222222222...222222222...222222.2
................2.......2.......
................2.......2.......
................2.......2.......
222...22222222222...222222222...
................2...........2...
................2...........2...
................2...........2...
22222...22222...2...22222...2...
....2...2...2...2.......2...2...
....2...2...2...2.......2...2...
....2...2...2...2.......2...2...
....2...2...2...22222...2...2...
....2...2...2.......2...2.......
....2...2...2.......2...2.......
....2...2...2.......2...2.......
....2...2...22222...2...22222...
................2.......2.......
................2.......2.......
................2.......2.......
`, [myTiles.transparency16,sprites.castle.tileGrass2,sprites.castle.tileGrass1,sprites.castle.tileGrass3,sprites.vehicle.roadIntersection1,sprites.vehicle.roadVertical,sprites.vehicle.roadIntersection4,sprites.vehicle.roadTurn2,sprites.vehicle.roadTurn1,sprites.vehicle.roadTurn3,sprites.vehicle.roadHorizontal,sprites.dungeon.chestClosed,sprites.dungeon.floorLight0,sprites.vehicle.roadIntersection3,sprites.vehicle.roadIntersection2,sprites.vehicle.roadTurn4], TileScale.Sixteen);
            case "level2":
            case "level2":return tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000001010101010100000000000000000200000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . 2 2 2 2 2 2 . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.builtin.brick,myTiles.tile1], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
