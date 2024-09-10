import { useState, useEffect } from "react"
import { reqCharacters } from "../services/characterService"

const speciesOptions = ["All"]

export const useCharacters = (searchTerm, species, page) => {
  const [characters, setCharacters] = useState([])
  const [loading, setLoading] = useState(false)
  const [totalPages, setTotalPages] = useState(1)
  const [availableSpecies, setAvailableSpecies] = useState(speciesOptions)

  useEffect(() => {
    const fetchAllCharacters = async () => {
      setLoading(true)
      try {
        let allCharacters = []
        let currentPage = 1
        let totalFetchedPages = 0

        do {
          const data = await reqCharacters(currentPage)
          allCharacters = [...allCharacters, ...data.results]
          totalFetchedPages = data.info.pages
          currentPage++
        } while (currentPage <= totalFetchedPages)

        const filteredCharacters = allCharacters.filter(
          (character) =>
            character.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
            (species === "All" || character.species == species)
        )

        const itemsPerPage = 10
        const paginatedCharacters = filteredCharacters.slice(
          (page - 1) * itemsPerPage,
          page * itemsPerPage
        )

        setCharacters(paginatedCharacters)
        setTotalPages(Math.ceil(filteredCharacters.length / itemsPerPage))
        setAvailableSpecies([
          ...speciesOptions,
          ...new Set(allCharacters.map((character) => character.species)),
        ])
      } catch (error) {
        console.error("Error fetching characters:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchAllCharacters()
  }, [searchTerm, species, page])

  return { characters, loading, totalPages, availableSpecies }
}
