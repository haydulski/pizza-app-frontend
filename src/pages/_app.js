import '../styles/globals.css'
import Layout from '../components/Layout/index'
import { Provider } from 'react-redux'
import { useStore } from '../../store'
import Router from 'next/router'
import NProgress from 'nprogress'
import '../lib/nprogress.css'

// loading indication
Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

function MyApp({ Component, pageProps }) {

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
