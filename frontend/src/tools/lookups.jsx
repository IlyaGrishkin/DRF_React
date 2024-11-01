import axios from 'axios'

export function handleToken(){
    const apiUrl = `http://localhost:8000/api/v1/customers/refresh`;
    const expires = parseInt(JSON.parse(localStorage.getItem("expires")))
    if (expires){
        if (Date.now() > expires){
            const refreshToken = JSON.parse(localStorage.getItem("refreshToken")) 
            axios.post(apiUrl, 
                {
                    refresh_token: refreshToken
                }
            )
            
            .then((resp) => {
            const serverData = resp.data;
            const accessToken = serverData.data.access_token
            const refreshToken = serverData.data.refresh_token
            const expires = serverData.data.expires_in
            localStorage.setItem('accessToken', JSON.stringify(accessToken))
            localStorage.setItem('refreshToken', JSON.stringify(refreshToken))
            localStorage.setItem('expires', JSON.stringify(expires))
            });
        }
    }
}