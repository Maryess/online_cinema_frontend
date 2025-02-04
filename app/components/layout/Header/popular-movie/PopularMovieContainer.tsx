import Menu from "components/layout/Navigation/MenuContainer/Menu"
import { FC } from "react"
import Movie from "./PopularMovie"
import Search from "../Search"
import PopularMovie from "./PopularMovie"

const PopularMovieContainer :FC= () => {
    return (
    <div className="mb-4">
        <Search />
        <PopularMovie />
    </div>
  )
}

export default PopularMovieContainer