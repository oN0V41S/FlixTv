import "@/app/globals.css"; // Importe seus estilos globais aqui, se aplicável
import Header from "@/components/layout/header";

function MyApp({ Component, pageProps }) {
  // Fornece a propriedade `pageProps` para seus componentes
  return (
    <>
      <Header />
      <main className="p-8">
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default MyApp;
