import { useState } from 'react'
import Character from './Character'

import data from '../data/data.json'
function ListOfCharacters({ setSaying }) {
  const [characters, setCharacters] = useState(data.results)
  // const characters = useState()[0]
  // const setCharacters = useState()[1]
  // const characterNames = characters.map(character => character.name)
  // console.log(characterNames)
  return (
    <ul>
      {characters.map(character => <Character key={character.id} character={character} setSaying={setSaying}>{character.name}</Character>)}
    </ul>
  )
}

export default ListOfCharacters