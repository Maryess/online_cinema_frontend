import Menu from "components/layout/Navigation/MenuContainer/Menu"
import { FC } from "react"
import Movie from "./Movie"
import Search from "../Search"

const MovieContainer :FC= () => {
    return (
    <div className="mb-4">
        <Search />
        <Movie />
    </div>
  )
}

export default MovieContainer