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
import { MdAttachMoney, MdOutlineEmail } from "react-icons/md";
import { Subtitle } from "@/components/Subtitle";
import { FaRegUser } from "react-icons/fa";
import { FiTrendingUp } from "react-icons/fi";
import { PiHandCoins  } from "react-icons/pi";
import { TbShoppingCart } from "react-icons/tb";
import { BsBoxSeam, BsGraphUpArrow, BsTags } from "react-icons/bs";
import { VscTools } from "react-icons/vsc";
import { GoGear, GoStack } from "react-icons/go";
import Link from "next/link";

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
            description="Com servidores ultra-seguros e confiáveis na nuvem, fornecidos pela AWS Amazon, nossa plataforma white label de software SaaS oferece uma infraestrutura sólida para seu negócio. A segurança de nossos servidores protege os dados com padrões avançados, fornecendo criptografia, backups regulares e monitoramento constante. Isso garante a integridade e disponibilidade contínua dos seus serviços, mantendo a confiança de seus clientes. Ao adotar nossa solução, você obtém a tranquilidade necessária para se concentrar no crescimento, enquanto nós lidamos com a segurança e a confiabilidade."
            imgName="bg-img-database"
            alt="" />
          <SideImage
            title="Amplamente aprovado por nossos clientes"
            imgName="bg-img-clientes"
            description="O eSaaS é um braço da VendaERP, empresa pioneira no fornecimento de software SaaS no Brasil. Com atuação no mercado desde 2017, a VendaERP construiu uma sólida reputação, atendendo mais de 2.000 parceiros ativos. Nosso compromisso com a excelência reflete-se na ótima avaliação no Reclame Aqui, reforçando nossa dedicação à satisfação e segurança dos clientes. Ao escolher nossa plataforma, você se beneficia de uma infraestrutura confiável e uma equipe experiente, garantindo a tranquilidade necessária para impulsionar seu sucesso. "
            alt=""
            invert={true} />
          <SideImage
            title="Sua marca, sua identidade"
            description="Ao vender software SaaS com a sua marca, você fortalece a presença e o reconhecimento de sua empresa no mercado. Oferecer soluções white label permite que você personalize completamente a experiência, adaptando cores, logotipo e mensagens ao perfil do seu público. Essa flexibilidade proporciona um diferencial competitivo, promovendo um relacionamento mais próximo e confiável com seus clientes. Além disso, a identidade própria aumenta o valor percebido, gerando maior fidelidade e facilitando a expansão da sua base de clientes. Com nossa solução, você pode construir um negócio único e altamente reconhecível."
            imgName="bg-img-erp"
            alt="" />
        </MainWrapper>

        <div id="funcionalidades" className="w-full h-[1100px] bg-main-secondary-800 pt-20">
          <MainWrapper>
            <Subtitle color="text-white" text="Conheça noossas principais funcionalidades" />
            <div className="w-full flex justify-center">
              <div className="grid grid-cols-2 gap-5 max-w-[800px] w-full">
                <Card2 title="Fiscal" icon={<BsTags />} description="Emissão de NF-e, NFS-e, MDF-e, NFC-e, CF-e SAT. E também temos SPED Fiscal!" />
                <Card2 title="Vendas" icon={<BsGraphUpArrow />} description="Orçamentos e pedidos, marketplaces, PDV, Loja Online, Força de vendas." />
                <Card2 title="Compras" icon={<TbShoppingCart />} description="Ordem de compra, nota de entrada, alerta de estoque, leilão fornecedores."/>
                <Card2 title="Estoque" icon={<BsBoxSeam />} description="Gestão de múltiplos depósitos, tabelas de preço, movimentações, catálogo."/>
                <Card2 title="Financeiro" icon={<MdAttachMoney  />} description="Lançamentos financeiros, cobranças integradas, remessas, boletos, bancos!"/>
                <Card2 title="Produção" icon={<GoGear />} description="Ordens de produção, estoque, insumos e matéria-prima, gestão de qualidade."/>
                <Card2 title="Logística" icon={<VscTools />} description="Movimentações de estoque, SIGEP Web, relatórios, veículos, delivery integrado." />
                <Card2 title="Serviços" icon={<GoStack />} description="Emissão de NFS-e, gestão de contratos, ordens de serviços, técnicos, frotas."/>
              </div>
            </div>
          </MainWrapper>
        </div>

        <div id="preco" className="w-full h-[1000px] bg-gradient-price pt-20">
          <MainWrapper>
            <Subtitle color="text-white" text="Uma solução que cabe no seu bolso" />
            <div className="w-full flex justify-center ">
              <div className="shadow-card rounded-3xl px-8 py-10 max-w-[600px] w-full bg-white">
                <h3 className="text-4xl font-semibold text-center">Licença Mensal</h3>
                <p className="text-center text-zinc-600">Por apenas <span className="text-main-primary-500 text-2xl font-semibold">R$ 25,00</span>/mês</p>
                <div className="relative flex py-3 items-center">
                  <div className="flex-grow border-t border-zync-300"></div>
                </div>
                <BenefitItem title="Software ERP SaaS Completo">Desfrute de todas as funcionalidades oferecidas pelo ESAAS, personalizando a interface com o nome e as cores da sua marca para um produto único que pode ser revendido facilmente.</BenefitItem>
                <BenefitItem title="Painel de Licenças">Gerencie e monitore suas licenças de maneira simplificada, centralizando o controle de todas as licenças vendidas em um painel intuitivo.</BenefitItem>
                <BenefitItem title="Servidores na Nuvem Seguros e Reconhecidos">Armazene seus dados com segurança em servidores robustos e reconhecidos, garantindo proteção e confiabilidade para suas operações na nuvem.</BenefitItem>
                <BenefitItem title="Treinamentos Inclusos">
                  Participe do nosso canal no Discord para acessar treinamentos personalizados que potencializam a produtividade e o domínio das funcionalidades do ESAAS. 
                  <Link className="text-black underline px-1" href="https://discord.gg/">Acesse nosso Discord</Link>
                </BenefitItem>
                <BenefitItem title="Suporte Especializado">Conte com suporte humanizado e altamente especializado, oferecido diretamente no Discord para atender todas as suas necessidades técnicas e estratégicas. 
                <Link className="text-black underline px-1" href="https://discord.gg/">Acesse nosso Discord</Link>
                </BenefitItem>
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
                  <ContactItem icon={<MdOutlineEmail />} title="Email" contact="comercial@esaas.com.br" description="Ficou com alguma dúvida? Entre em contato com a gente pelo nosso email." />
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
