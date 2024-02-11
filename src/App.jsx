import { useState } from 'react'
import './App.css'
// import { SearchBar, SearchResult, PlayList } from 'src/components';
// import SearchBar from './components/SearchBar'
import { PlayList, SearchBar, SearchResults } from './components'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
            <SearchBar component />
            <div className="App-playlist">
             <SearchResults />
            {/*<!-- Add a Playlist component --> */}
            </div>
        </div>
    </div>
  )
}

export default App
