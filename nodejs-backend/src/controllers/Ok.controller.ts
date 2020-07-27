

// create a function that turns OK(res, cancer) into res.send({cancer})

const OK = (res, body) => {
    return res.send({body})
}