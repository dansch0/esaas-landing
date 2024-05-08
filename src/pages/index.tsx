import Image from "next/image";
import { Poppins } from "next/font/google";
import { Header } from "@/components/Header";
import { MainWrapper } from "@/components/MainWrapper";
import { Card1 } from "@/components/Card1";
import { Footer } from "@/components/Footer";
import { SideImage } from "@/components/SideImage";
import { Card2 } from "@/components/Card2";
import { MainButton } from "@/components/MainButton";
import { MainButton2 } from "@/components/MainButton2";
import { BenefitItem } from "@/components/BenefitItem";
import { LuMoveRight } from "react-icons/lu";
import { FiPhone } from "react-icons/fi";
import { ContactItem } from "@/components/ContactItem";
import { MdOutlineEmail } from "react-icons/md";
import { Subtitle } from "@/components/Subtitle";
import { FaRegUser } from "react-icons/fa";
import { FiTrendingUp } from "react-icons/fi";
import { PiHandCoins  } from "react-icons/pi";

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})

export default function Home() {
  return (
    <div id="inicio" className={`${poppins.className}`}>
      <Header />
      <main className="pt-[75px]">
        <MainWrapper>
          <div className="h-[600px] flex bg-gradient-radial">
            <div className="w-1/2 h-full pt-40">
              <h1 className="w-[80%] text-4xl font-semibold mb-8">Transforme Seu Negócio com o ESAAS</h1>
              <p className="w-[80%] text-zinc-500 text-base font-semibold mb-5">No ESAAS, Oferecemos uma Abordagem Prática e Eficiente para Gerenciar seu Negócio, Permitindo que Você Se Concentre no que Realmente Importa: Seu Sucesso!</p>
              <MainButton />
            </div>
            <div className="w-1/2 h-full flex justify-end items-end">
              <Image className="h-fit" src={"/images/woman.png"} alt="Imagem slogan" width={558} height={515} />
            </div>
          </div>
        </MainWrapper>

        <div className="w-full h-[700px] bg-gradient-radial pt-20 border-t-2 border-b-2 border-zinc-200 ">
          <MainWrapper>
            <Subtitle color="text-main-primary-500" text="Por que Escolher o ESAAS?" />
            <div className="flex justify-between gap-8">
              <Card1 icon={<PiHandCoins />} title="Economia para o Seu Negócio" description="Tenha acesso a uma solução de gestão completa por apenas R$25,00 por licença, ajudando a reduzir os custos operacionais." />
              <Card1 icon={<FaRegUser/>} title="Acesso Livre para os Usuários" description="Usuários adicionais não representam custo extra. Convide quantos colaboradores precisar, sem impacto no seu orçamento." />
              <Card1 icon={<FiTrendingUp/>} title="Flexibilidade e Escalabilidade" description="Adapte-se facilmente às necessidades do seu negócio, crescendo de forma escalável e sem preocupações financeiras." />
            </div>
            <div className="w-full flex justify-center mt-10">
              <MainButton2 />
            </div>

          </MainWrapper>
        </div>

        <MainWrapper>
          <SideImage
            title="Servidores ultra-seguros e confiáveis"
            description="Garantindo a Estabilidade e Proteção do seu Negócio."
            imgName="bg-img-database"
            alt="" />
          <SideImage
            title="Amplamente aprovado por nossos clientes"
            imgName="bg-img-clientes"
            description="Mais de 10 mil empresas confiam no ESAAS para impulsionar seu sucesso!"
            alt=""
            invert={true} />
          <SideImage
            title="Sua marca, sua identidade"
            description="Tenha um sistema de gestão completo com a identidade da sua marca, sem se preocupar com o desenvolvimento ou manutenção!"
            imgName="bg-img-erp"
            alt="" />
        </MainWrapper>

        <div id="funcionalidades" className="w-full h-[800px] bg-main-secondary-800 pt-20">
          <MainWrapper>
            <Subtitle color="text-white" text="Conheça noossas principais funcionalidades" />
            <div className="w-full flex justify-center">
              <div className="flex flex-col max-w-[700px] w-full gap-2">
                <Card2 title="Cadastros Básicos" />
                <Card2 title="Compras - Notas de Entrada, Cotações e Ordens de Compras" />
                <Card2 title="Estoque - Cadastro de Produtos/Serviços, Movimentações e Outros" />
                <Card2 title="Financeiro Avançado" />
                <Card2 title="Financeiro Básico" />
                <Card2 title="Vendas - Pedidos/Orçamentos e Ordens de Serviço" />
                <Card2 title="PDV - Frente de Caixa" />
                <Card2 title="Nota Fiscal Eletrônica" />
              </div>
            </div>

          </MainWrapper>
        </div>

        <div id="preco" className="w-full h-[900px] bg-main-primary-500 pt-20">
          <MainWrapper>
            <Subtitle color="text-white" text="Uma solução que cabe no seu bolso" />
            <div className="w-full flex justify-center ">
              <div className="shadow-card rounded-xl px-8 py-10 max-w-[600px] w-full bg-white">
                <h3 className="text-4xl font-semibold text-center">Licença Mensal</h3>
                <p className="text-center text-zinc-600">Por apenas <span className="text-main-primary-500 text-2xl font-semibold">R$ 25,00</span>/mês</p>
                <div className="relative flex py-3 items-center">
                  <div className="flex-grow border-t border-zync-300"></div>
                </div>
                <BenefitItem title="ERP Completo" description="Tenha acesso a todas as funcionalidades do ESAAS para gerenciar seu negócio de forma eficiente." />
                <BenefitItem title="Painel de Licenças" description="Controle e gerencie suas licenças de forma centralizada e intuitiva." />
                <BenefitItem title="Hospedagem Segura" description="Mantenha seus dados protegidos em servidores seguros e confiáveis." />
                <BenefitItem title="Treinamentos Inclusos" description="Capacite sua equipe com treinamentos especializados para tirar o máximo proveito da plataforma." />
                <BenefitItem title="Suporte Especializado" description="Conte com suporte técnico especializado durante o horário comercial para resolver suas dúvidas e questões." />
                <div className="w-full flex justify-center mt-7">
                  <MainButton2 />
                </div>
                
              </div>
            </div>

          </MainWrapper>
        </div>

        <div id="contato" className="w-full h-[700px] bg-white pt-20">
          <MainWrapper>
            <div className={'flex h-[500px]'}>
              <div className='w-1/2 flex flex-col justify-center items-center'>
                <h3 className='text-4xl font-semibold text-main-primary-500 w-10/12 text-center'>Ficou com alguma dúvida?</h3>
                <p className='text-main-primary-500 text-2xl w-10/12 text-center'>Entre em contato com a gente!</p>
                <LuMoveRight className="text-6xl text-main-secondary-800" />
              </div>
              <div className='w-1/2 overflow-hidden bg-main-secondary-800 rounded-2xl p-12 flex items-center'>
                <div className="w-full">
                  <ContactItem icon={<FiPhone />} title="Telefone" contact="51999999999" description="Atendemos na segunda a sexta das 8 as 20h e aos sábados de 8 as 12h através do número abaixo." />
                  <div className="relative py-4">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-b border-gray-500"></div>
                    </div>
                    <div className="relative flex justify-center">
                      <span className="bg-main-secondary-800 px-4 text-sm text-gray-500">ou</span>
                    </div>
                  </div>
                  <ContactItem icon={<MdOutlineEmail />} title="Email" contact="contato@esaas.com" description="Ficou com alguma dúvida? Entre em contato com a gente pelo nosso email." />
                </div>
              </div>
            </div>
          </MainWrapper>
        </div>

      </main>
      <Footer />
    </div>
  );
}
