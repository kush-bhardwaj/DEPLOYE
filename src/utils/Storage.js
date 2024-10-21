const STORAGE_KEY = "logininfo"
export function setStorage(data) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
}

export function getStorage() {
    if (localStorage.getItem(STORAGE_KEY))
        return JSON.parse(localStorage.getItem(STORAGE_KEY)) // convert jason to object use Parse and objec
    else
        return false
}

export function ClearStorage() {
    localStorage.clear(STORAGE_KEY)
}

export function getToken() {
    if (localStorage.getItem(STORAGE_KEY))
        return JSON.parse(localStorage.getItem(STORAGE_KEY)).token // convert jason to object use Parse and objec
    else
        return false
}