import { createContext, useState, useContext } from 'react'

const PageReplacementContext = createContext()

// eslint-disable-next-line react/prop-types
export const PageReplacementProvider = ({ children }) => {
  const [sequence, setSequence] = useState('')
  const [frames, setFrames] = useState(3)

  return (
    <PageReplacementContext.Provider value={{ sequence, setSequence, frames, setFrames }}>
      {children}
    </PageReplacementContext.Provider>
  )
}

export const usePageReplacement = () => useContext(PageReplacementContext)
