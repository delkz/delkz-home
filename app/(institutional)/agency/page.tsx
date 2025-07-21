import '@/app/(institutional)/agency/style.css';

export default function agencyPage() {
    return (
        <div id="agency-page" className="text-center text-white">
            <section id="header"></section>

            <section id="hero" className="min-h-[65dvh] flex items-center justify-center">
                <div className="container mx-auto px-5">
                    <h1 className='text-4xl font-black uppercase'>Seu negócio precisa de mais clientes.<br /> Um site estratégico pode ser o <span className='text-indigo-500'>primeiro passo.</span></h1>
                    <h2 className='text-lg mt-5'>Nós criamos landing pages e sites profissionais para pequenos negócios que querem vender mais e se destacar. <br />Sem enrolação, sem templates prontos — <span className='text-indigo-500'>só soluções pensadas pra gerar resultado.</span> </h2>
                    <button className='btn mx-auto my-5 bg-indigo-500 hover:bg-indigo-900'>Quero um site que vende</button>
                    <span className='text-base'>Orçamento rápido, direto e sem compromisso.</span>
                </div>
            </section>

            <div className="bg-[#050009]">
                <div className="container mx-auto px-5 py-20">
                    <section id="texts" className='text-left'>
                        <h2 className='text-3xl font-extrabold'>Um site bonito que não traz resultado…
                            <br/> <span className='text-indigo-500'>não resolve.</span></h2>
                        <p className='mt-5'>Muitos empreendedores investem em sites que até parecem bonitos, mas não funcionam.
                            Sem visitas. Sem contatos. Sem retorno.</p>
                        <p className='mt-5'>O que fazemos é diferente: criamos páginas com um único foco — fazer o visitante agir.
                            Seja pra clicar, agendar, comprar ou falar com você, tudo é pensado pra converter.</p>
                    </section>

                    <section id="solution" className='mt-10 text-left'>
                        <h2  className='text-3xl mt-5 font-extrabold mb-5'>Landing pages e sites sob medida para quem quer crescer.</h2>
                        <p  className=' mt-5 font-medium'>Se você é um pequeno negócio, autônomo ou profissional liberal, o que você precisa não é só “ter um site”.<br/>
                            Você precisa de uma presença online que funciona. E é exatamente isso que entregamos:</p>
                        <ul className='mt-5 grid grid-cols-1 md:grid-cols-4 gap-5 text-center'>
                            <li className='card'>✅ Design moderno, responsivo e com foco em conversão</li>
                            <li className='card'>✅ Textos pensados para conectar com seu público</li>
                            <li className='card'>✅ Integração com WhatsApp, redes sociais ou formulário</li>
                            <li className='card'>✅ Site leve, rápido e pronto pra receber anúncios</li>
                        </ul>
                    </section>


                </div>
            </div>
            <div className="container mx-auto px-5 py-20">


                <section id="process">
                    <h2  className='text-3xl mt-5 font-extrabold mb-5'>Criamos sua página com estratégia e sem dor de cabeça.</h2>
                    <div>
                        <p>Briefing rápido – Você nos conta sobre seu negócio e objetivos.</p>
                        <p>Estrutura estratégica – Montamos a proposta da página com base no que funciona.</p>
                        <p>Criação completa – Design, textos e integrações, tudo alinhado com sua marca.</p>
                        <p>Publicação e suporte – Página no ar e suporte técnico nos primeiros dias.</p>
                    </div>
                </section>

                <section id="urgency">
                    <h2 className='text-3xl mt-5 font-extrabold mb-5'>Vagas limitadas para novos projetos este mês</h2>
                    <p>Atendemos poucos projetos por vez para garantir a qualidade de cada entrega.
                        Ao contratar agora, você ganha:</p>
                    <ul>
                        <li>✅ 10% de desconto no valor final</li>
                        <li>✅ Suporte técnico gratuito por 30 dias</li>
                        <li>✅ Revisões ilimitadas durante o processo de criação</li>
                    </ul>
                    <p>Não perca a chance de ter um site que realmente traz resultados. Entre em contato e solicite seu orçamento!</p>
                </section>

                <section id="cta">
                    <h2 className='text-3xl mt-5 font-extrabold mb-5'>Vamos criar a página que o seu negócio merece?</h2>
                    <p>Você não precisa de um site qualquer.<br />
                        Você precisa de uma página com propósito, feita pra gerar resultado de verdade.</p>
                    <button className='btn mx-auto my-5 bg-indigo-500 hover:bg-indigo-900'>🔸 Solicitar orçamento agora</button>
                    <span>(Resposta rápida, sem compromisso)</span>
                </section>
            </div>
            <section id="footer"></section>
        </div>
    )
}