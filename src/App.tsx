import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import styled from 'styled-components'
import { PostState } from './context/posts/PostState'
import { SearchState } from './context/search/SearchState'
import { CommentState } from './context/comments/CommentState'
import { UserState } from './context/users/UserState'
import { GlobalStyle } from './shared/globalStyles'
import Navbar from './components/layout/Navbar'

const Home = lazy(() => import('./components/pages/Home'))
const Posts = lazy(() => import('./components/pages/Posts'))
const NotFound = lazy(() => import('./components/pages/NotFound'))

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <PostState>
        <UserState>
          <SearchState>
            <CommentState>
              <Suspense fallback={<div>Loading...</div>}>
                <AppContainer>
                  <Navbar />
                  <Routes>
                    <Route index element={<Home />} />
                    <Route path="posts" element={<Posts />} />
                    <Route path="post/:id" element={<Posts />} />
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </AppContainer>
              </Suspense>
            </CommentState>
          </SearchState>
        </UserState>
      </PostState>
    </>
  )
}

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 15px 30px;
`
