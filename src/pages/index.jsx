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
      <div class="hero shadow--lw hero--primary">
        <div class="container">
          <h1 class="hero__title">Belajar JS</h1>
          <p class="hero__subtitle">Bikin belajar javascript kamu makin gampang</p>
          <div>
            <a href="kamus" class="button button--lg" style={{
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