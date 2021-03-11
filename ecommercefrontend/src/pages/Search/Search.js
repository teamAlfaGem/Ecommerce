import React from 'react'

const Search = (props) => {
    const searchTerm = props.match.params.id

    return (
        <div>
            <h1>search</h1>
            <h1>{searchTerm}</h1>
        </div>
    )
}

export default Search
