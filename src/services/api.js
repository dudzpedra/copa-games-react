import axios from "axios";

const apiUrl = 'https://l3-processoseletivo.azurewebsites.net/api/Competidores?copa=games'

const fetchData = async () => {
    const response = await axios.get(apiUrl)
    return response.data
}

export default fetchData