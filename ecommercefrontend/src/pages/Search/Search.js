import React, {useState, useEffect} from 'react'
import axios from 'axios';

import Container from 'react-bootstrap/Container'

import SingleProduct from '../../components/SingleProduct/SingleProduct'

const Search = (props) => {
    const searchTerm = props.match.params.id

    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        const getSearchResults = async () => {
            try {
                const results = await axios.get(`${process.env.REACT_APP_API}/product/keyword/${searchTerm}`)
                setSearchResults(results.data)
            } catch (error) {
                console.log(error)                
            }
        }
        
        getSearchResults()
    }, [searchTerm])

    const searchResultsRender = (
        searchResults.map((result, index) => (
            <div className="m-4 product-div" key={index}>
              <SingleProduct  product={result}/>
            </div>
       ))
    )

    const renderEmptyResults = (
        <h1>So results for {searchTerm}<br/>Try again with another search term</h1>
    )

    return (
        <div>
            <Container className="products-container">
                {searchResults.length === 0 ? (renderEmptyResults) : (searchResultsRender)}
            </Container>
        </div>
    )
}

export default Search
