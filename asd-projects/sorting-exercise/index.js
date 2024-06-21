/* IMPORTANT VALUES

This section contains a list of all variables predefined for you to use (that you will need)

The CSS ids you will work with are:

1. bubbleCounter -- the container for the counter text for bubble sort
2. quickCounter  -- the container for the counter text for quick sort

*/

///////////////////////////////////////////////////////////////////////
/////////////////////// YOUR WORK GOES BELOW HERE /////////////////////
///////////////////////////////////////////////////////////////////////

// TODO 2: Implement bubbleSort
async function bubbleSort(array) {
for(let i = 0; i < array.length - 1; i++) {
    for(let j = array.length - 1; j > i; j--) {
        if(array[j].value < array[j - 1].value) {
            [array[j], array[j - 1]] = [array[j - 1], array[j]];
            updateCounter(bubbleCounter);
            await sleep();
        }
    }
}
}

// TODO 3: Implement quickSort
async function quickSort(array, left, right) {
    if(right - left > 0) {
        var index = await parition(array, left, right);
        if(left < index - 1) {
            await quickSort(array, left, index - 1);
    }
    if(index < right) {
        await quickSort(array, index, right);
    }
}
}
async function partition(array, left, right) {

}
// TODOs 4 & 5: Implement partition
async function quickSort(array, left, right) {
    let pivot = array[Math.floor((right + left) / 2)].value;
    while (left < right) {
        while (array[left].value < pivot) {
            left += 1;
        }
        while (array[right].value > pivot) {
            right -= 1;
        }
        if(left < right) {
            swap(array, left, right);
            updateCounter(quickCounter);
            await sleep(0);
        }
    }
    return left + 1;
}
function swap(array, left, right) {
    let temp = array[left];
    array[left] = array[right];
    array[right] = temp;
}
function updateCounter(counter) {
    counter.value += 1;
}
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// TODO 1: Implement swap
function swap(array, i, j) {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;

    drawSwap(array, i, j);
}

///////////////////////////////////////////////////////////////////////
/////////////////////// YOUR WORK GOES ABOVE HERE /////////////////////
///////////////////////////////////////////////////////////////////////

//////////////////////////// HELPER FUNCTIONS /////////////////////////

// this function makes the program pause by SLEEP_AMOUNT milliseconds whenever it is called
function sleep(){
    return new Promise(resolve => setTimeout(resolve, SLEEP_AMOUNT));
}

// This function draws the swap on the screen
function drawSwap(array, i, j){
    let element1 = array[i];
    let element2 = array[j];

    let temp = parseFloat($(element1.id).css("top")) + "px";

    $(element1.id).css("top", parseFloat($(element2.id).css("top")) + "px");
    $(element2.id).css("top", temp);
}

// This function updates the specified counter
function updateCounter(counter){
    $(counter).text("Move Count: " + (parseFloat($(counter).text().replace(/^\D+/g, '')) + 1));
}