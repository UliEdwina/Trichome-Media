import {Axios} from './Axios'
import jwt_decode from 'jwt-decode'
import setAuthJWT from './setAuthJWT'

export const apiAuth = () => {

    return new Promise ((resolve, reject) => {

        const token = localStorage.getItem('jwtToken')
        const decoded = jwt_decode(token)
        const currentTime = Date.now() / 1000

        if(decoded.exp < currentTime) {
            localStorage.removeItem('jwtToken')
       
            setAuthJWT(null)
                    reject(null) 
                    } else {
                        setAuthJWT(token)
                            const user = {
                            nickName:  decoded.nickName, 
                            email: decoded.email,
                            password: decoded.password
                            }
                            resolve(user)
                        }
        })
}

export const apiHandleSignUpAndLogIn = (userInfo) => {
    return new Promise((resolve, reject) => {
        Axios.post('/users/usersignupandlogin', userInfo, axiosConfig)
            .then(result => { 
                const { token } = result.data

                localStorage.setItem('jwtToken', token)

                const decoded = jwt_decode(token)

                setAuthJWT(token)

                resolve(decoded)
            })
            .catch(error => reject(error))
    })
}

const axiosConfig = {
        headers: {
            'Content-Type': 'application/json; charset=UTF-8', 'Access-Control-Allow-Origin':

            '*'

        }


}