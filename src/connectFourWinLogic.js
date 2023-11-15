
const checkLine = (coordsToCheck,boardState,sum,startPos) => {

    let [x,y] = coordsToCheck
    const [startingX,startingY] = startPos
try{
    if( boardState[startingX][startingY] === boardState[startingX + x][startingY + y]){

        const newStartingX = startingX + x
        const newStartingY = startingY + y
        sum++
        return checkLine(coordsToCheck,boardState,sum,[newStartingX,newStartingY])
    }else{
        return sum
    }
}catch(err){
    return sum
}

}

const checkForWin = (x,y,boardState,color) => {
    const neighborArr = [
        [-1,0], // left
        [1,0], // right
        [-1,-1], // up left
        [1,1], // down right
        [-1,1], // down left
        [1,-1], // up right
        [0,1] // down
        //don't need to check above it.
    ]

    const directionPairs = neighborArr.map(currArr => {
        return checkLine(currArr,boardState,0,[x,y])
    })
    const horizontal = directionPairs[0] + directionPairs[1]
    const negativeXY = directionPairs[2] + directionPairs[3]
    const positiveXY = directionPairs[4] + directionPairs[5]
    const vertical = directionPairs[6]

    if( horizontal >= 3 ||
        negativeXY >= 3 ||
        positiveXY >= 3 ||
        vertical >= 3){
            return `${color} player wins!`
        }
    return 
}

export default checkForWin