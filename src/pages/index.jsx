import Layout from "@theme/Layout";

export default function Index() {
  return (
    <Layout >
      <h2 style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '32px 32px 24px 32px'
      }}>Selalu praktikkan kode setelah selesai setiap materi ✌️</h2>
      <div className="hero shadow--lw hero--primary">
        <div className="container">
          <h1 className="hero__title">Belajar JS</h1>
          <p className="hero__subtitle">Bikin belajar javascript kamu makin gampang</p>
          <div>
            <a href="persiapan/alat" className="button button--lg" style={{
              backgroundColor: "#121212",
              color: "white"
            }}>
              Ayo mulai
            </a>
          </div>
        </div>
      </div>
    </Layout>
  )
}