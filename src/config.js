export const getHeader = function() {
    const tokenData = JSON.parse(window.localStorage.getItem('authUser'))
    const headers = {
        //"Content-Type": "application/x-www-form-urlencoded",
        "Authorization": "bearer " + tokenData.token
    }

    return headers
}

export const url = "http://41.76.251.210/api/";