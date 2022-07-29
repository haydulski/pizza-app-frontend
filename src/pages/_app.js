import '../styles/globals.css'
import { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import { Provider } from 'react-redux'
import { useStore } from '../../store'

function MyApp({ Component, pageProps }) {

  const [isSSR, setSSR] = useState(true)

  useEffect(() => {
    setSSR(false)
  }, [])

  if (isSSR) return null

  const myStore = useStore(pageProps.initialReduxState)

  return (
    <Provider store={myStore}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}

export default MyApp
