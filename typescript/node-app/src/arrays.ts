function maxValue(arr: number[]) {
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i];
        }
    }
    return max;
}

console.log(maxValue([1, 2, 5, 6, 4, 3, 2]));
