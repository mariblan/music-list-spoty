import {useState, useContext, createContext, useEffect} from 'react'

const AuthContext = createContext();

const useAuth = () => useContext(AuthContext);

const AuthContextProvider = ({ children }) => {
    const [tokenEndpoint, setTokenEndpoint] = useState('https://accounts.spotify.com/api/token');
    const [token, setToken] = useState(null);
    const [basic, setBasic] = useState(null);
    const [spotify, setSpotify] = useState({
        clientId: import.meta.env.VITE_APP_CLIENT_ID,
        clientSecret: import.meta.env.VITE_APP_CLIENT_SECRET,
        redirectUri: import.meta.env.VITE_APP_REDIRECT_URI, 
    });
    useEffect(() => {
      setBasic(Buffer.from(`${spotify.clientId}:${spotify.clientSecret}`).toString("base64"));
      const getAccessToken = async() => {
        if (token) {
            setToken(token);
        }
        const response = await axios.post(tokenEndpoint, {
          method: "POST",
          headers: {
            Authorization: `Basic ${basic}`,
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: queryString.stringify({
            grant_type: "refresh_token",
            refresh_token,
          }),
        });
        const {data} = await response.json();
        if(data) {
          console.log(data);
        }
        
      }

    }, []);
    useEffect(() => {}, []);
    const response = await fetch(tokenEndpoint, {
      method: "POST",
      headers: {
          Authorization: `Basic ${basic}`,
          "Content-Type": "application/x-www-form-urlencoded",
      },
      body: queryString.stringify({
          grant_type: "refresh_token",
          refresh_token,
      }),
    });
    // const basic = Buffer.from(`${client_id}:${client_secret}`).toString("base64");
    
    
    // return response.json();
  
    
    
    const validateToken = async () => {
        try {
          const { data, status } = await axios(`/api/auth/validate`);
          if (status === 200) {
            setLoggedUser(data);
            setIsAuth(true);
            setLoading(false);
          }
        } catch (error) {
          // toasty error message needs to be added here
          setIsAuth(false);
          setLoggedUser(null);
          setLoading(false);
        }
      };

  return (
    <div>
      <h1>AuthContextApp</h1>
    </div>
  )
}

export { AuthContextProvider, useAuth };