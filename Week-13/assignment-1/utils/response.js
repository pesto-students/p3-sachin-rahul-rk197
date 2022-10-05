const GenerateResponse = (body) => {
    return {
        "code": body.cod,
        "message": body?.message ? "ERROR - " + body.message : "SUCCESS",
        "data": body
    }
}
const GenerateErrorResponse = (body) => {
    return {
        "code": 500,
        "message": "INTERNAL ERROR",
        "data": body
    }
}

module.exports = { GenerateResponse, GenerateErrorResponse }