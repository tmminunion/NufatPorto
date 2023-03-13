import dynamic from 'next/dynamic'


const App = dynamic(() => import('@/components/canvas/Image'), { ssr: false })

export default function Page(props) {
  return (
    <>

    </>
  )
}

Page.canvas = (props) => <App route='/' position-y={-0.75} />

export async function getStaticProps() {
  return { props: { title: 'Blob' } }
}
