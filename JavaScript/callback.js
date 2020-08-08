var add = (a, b, callback) => {
    if (typeof a === "number" && typeof b === "number") {
        return callback(null, a + b)
    } else {
        return callback("This is not number")
    }
}

var callback = (err, result) => {
    if (err) {
        return err
    } else {
        return result;
    }
}

console.log(add(5, "gvhg", callback))