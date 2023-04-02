
function takeNumber(n) {
    let nums = []
    for (let i = 0; i < n; i++) {
        nums[i] = prompt(`Enter number ${i + 1}`)
    }

    let low = nums[0]

    for (let j = 0; j < n; j++) {
        if (nums[j] < low) {
            low = nums[j]
        }
    }
    alert(low)
}

takeNumber(10)