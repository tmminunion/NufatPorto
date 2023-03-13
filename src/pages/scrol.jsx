import dynamic from 'next/dynamic'
import Instructions from '@/components/dom/Instructions'

const App = dynamic(() => import('@/components/scroll/csroll'), { ssr: false })

export default function Page(props) {
  return (
    <></>
  )
}

Page.canvas = (props) => <App route='/' position-y={-0.75} />

export async function getStaticProps() {
  return { props: { title: 'Blob' } }
}
