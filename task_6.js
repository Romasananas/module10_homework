let arr = [1,1,1,1,1];
for (let i = 1; i < arr.length; ++i) {
    if (arr[i - 1] == arr[i]) {
        console.log('true');
    }
    else {
        console.log('false');
    }
}