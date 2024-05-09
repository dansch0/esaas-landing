import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="pt-BR" style={{scrollBehavior:'smooth'}}>
      <Head>
        <title>ESAAS - Transforme Seu Negócio com o ESAAS</title>
        <meta name="description" content="Transforme Seu Negócio com o ESAAS - Oferecemos uma Abordagem Prática e Eficiente para Gerenciar seu Negócio, Permitindo que Você Se Concentre no que Realmente Importa: Seu Sucesso!" />
        <meta name="keywords" content="ESAAS, Software as a Service, Gestão de Negócios, ERP, SaaS, Solução de Gestão, Economia, Flexibilidade, Escalabilidade, Segurança, AWS Amazon, VendaERP, Servidores na Nuvem, Identidade de Marca, Funcionalidades, Licença Mensal, Treinamentos, Suporte Especializado, Contato" />
        <meta name="author" content="Seu Nome ou Nome da Empresa" />
        <meta name="robots" content="index, follow" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
