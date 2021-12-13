import { useContext, useEffect } from 'react'
import styled from 'styled-components'
import { SearchContext } from '../../context/search/searchContext'
import {
  setSearchOn,
  setSearchOff,
  setSearchTerm,
  clearSearch,
} from '../../context/search/actions'
import { withInjectedProps } from '../../hoc/withInjectedProps'

const Search = () => {
  const { dispatch } = useContext(SearchContext)

  useEffect(() => {
    return () => dispatch(clearSearch())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const onChangeHandle = (event: React.FormEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement
    const searchInputText = target.value

    if (searchInputText) {
      dispatch(setSearchOn())
    } else {
      dispatch(setSearchOff())
    }

    dispatch(setSearchTerm(searchInputText))
  }

  return (
    <>
      <StyledInput
        type="text"
        id="search"
        placeholder="Search posts.."
        onChange={onChangeHandle}
      />
    </>
  )
}

const StyledInput = styled.input`
  width: 300px;
  padding: 12px 20px;
  margin: 0px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline-color: #38bdf8;
`
export default withInjectedProps(Search)
