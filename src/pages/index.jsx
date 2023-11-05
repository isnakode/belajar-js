import Layout from "@theme/Layout";

export default function Index() {
  return (
    <Layout >
      <div class="hero shadow--lw hero--primary">
        <div class="container">
          <h1 class="hero__title">Belajar JS</h1>
          <p class="hero__subtitle">Bikin belajar javascript kamu makin gampang</p>
          <div>
            <a href="persiapan/alat" class="button button--lg" style={{
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