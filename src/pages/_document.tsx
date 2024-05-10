import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="pt-BR" style={{scrollBehavior:'smooth'}}>
      <Head>
        <title>eSaaS - Transforme Seu Negócio com o eSaaS</title>
        <meta name="description" content="Transforme Seu Negócio com o eSaaS - Oferecemos uma Abordagem Prática e Eficiente para Gerenciar seu Negócio, Permitindo que Você Se Concentre no que Realmente Importa: Seu Sucesso!" />
        <meta name="keywords" content="eSaaS, Software as a Service, Gestão de Negócios, ERP, SaaS, Solução de Gestão, Economia, Flexibilidade, Escalabilidade, Segurança, AWS Amazon, VendaERP, Servidores na Nuvem, Identidade de Marca, Funcionalidades, Licença Mensal, Treinamentos, Suporte Especializado, Contato" />
        <meta name="author" content="Seu Nome ou Nome da Empresa" />
        <meta name="robots" content="index, follow" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <Script type="text/javascript" src="/scripts/header.js" defer={true}/>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
