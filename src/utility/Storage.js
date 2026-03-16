
class Storage{

    setToken(token){
        localStorage.setItem('token', token)
    }

    getToken() {
        return localStorage.getItem('token')
    }

}

export const { setToken, getToken } = new Storage();