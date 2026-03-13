import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AdContainer } from "@/components/ad-container"
import { CheckCircle, FileText, Clock, DollarSign, Globe, BookOpen, ArrowRight, AlertCircle, Calendar, MapPin, Users } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Guia Completo ELAP 2026 - Passo a Passo para Bolsa no Canada",
  description: "Guia definitivo e atualizado sobre como se candidatar ao programa ELAP (Emerging Leaders in the Americas Program). Requisitos, documentos, prazos e dicas de ex-bolsistas para estudar no Canada.",
}

export default function GuiaElapPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="border-b border-border bg-primary px-4 py-14">
          <div className="mx-auto max-w-6xl lg:px-6">
            <span className="mb-3 inline-block rounded-full bg-primary-foreground/15 px-4 py-1 text-sm font-medium text-primary-foreground">
              Guia Atualizado 2026
            </span>
            <h1 className="mb-3 text-4xl font-bold tracking-tight text-primary-foreground">
              Guia Completo ELAP
            </h1>
            <p className="max-w-2xl text-lg text-primary-foreground/80">
              Tudo que voce precisa saber para se candidatar e conquistar a bolsa ELAP no Canada, 
              com informacoes atualizadas e dicas de quem ja passou pelo processo.
            </p>
          </div>
        </section>

        <AdContainer className="mx-auto my-8 max-w-4xl px-4" slot="guia-top" />

        <section className="px-4 py-10">
          <div className="mx-auto max-w-3xl">
            {/* Indice */}
            <nav className="mb-12 rounded-xl border border-border bg-card p-6">
              <h2 className="mb-4 text-sm font-semibold text-foreground">Neste guia completo:</h2>
              <ul className="grid gap-2 sm:grid-cols-2">
                {[
                  { id: "o-que-e", label: "O que e o ELAP?" },
                  { id: "beneficios", label: "Beneficios da Bolsa" },
                  { id: "requisitos", label: "Requisitos e Elegibilidade" },
                  { id: "documentos", label: "Documentos Necessarios" },
                  { id: "cronograma", label: "Cronograma e Prazos" },
                  { id: "como-aplicar", label: "Como Aplicar Passo a Passo" },
                  { id: "carta-aceite", label: "Conseguindo a Carta de Aceite" },
                  { id: "carta-motivacao", label: "Carta de Motivacao" },
                  { id: "apos-aprovacao", label: "Apos a Aprovacao" },
                  { id: "dicas-finais", label: "Dicas de Ex-Bolsistas" },
                ].map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className="flex items-center gap-2 text-sm text-primary transition-colors hover:text-primary/80"
                    >
                      <ArrowRight className="h-3.5 w-3.5" />
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Secao 1: O que e o ELAP */}
            <section id="o-que-e" className="mb-16 scroll-mt-24">
              <div className="mb-4 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <Globe className="h-5 w-5 text-primary" />
                </span>
                <h2 className="text-2xl font-bold text-foreground">O que e o ELAP?</h2>
              </div>
              
              <div className="space-y-4 text-foreground/85 leading-relaxed">
                <p>
                  O <strong>ELAP (Emerging Leaders in the Americas Program)</strong> e um programa de bolsas de estudo 
                  financiado integralmente pelo governo do Canada atraves do Global Affairs Canada. Criado em 2009, 
                  o programa tem como objetivo fortalecer os lacos academicos e culturais entre o Canada e os paises 
                  da America Latina e do Caribe.
                </p>
                <p>
                  O programa oferece a estudantes de graduacao e pos-graduacao a oportunidade de realizar intercambio 
                  academico em universidades e colleges canadenses por periodos de 4 a 6 meses. Durante esse periodo, 
                  os bolsistas podem cursar disciplinas relacionadas a sua area de estudo, participar de projetos de 
                  pesquisa, e vivenciar o ambiente academico canadense de forma imersiva.
                </p>
                <p>
                  O ELAP e diferente de outros programas de bolsas porque nao exige que o estudante realize um curso 
                  completo no Canada. Em vez disso, o foco e no intercambio de curta duracao, permitindo que o 
                  estudante mantenha seu vinculo com a instituicao de origem no Brasil enquanto enriquece sua 
                  formacao academica com a experiencia internacional.
                </p>
                <p>
                  Desde sua criacao, milhares de estudantes latino-americanos ja foram beneficiados pelo programa. 
                  O Canada recebe anualmente centenas de bolsistas ELAP de diversos paises, sendo o Brasil um dos 
                  que mais envia estudantes para o programa.
                </p>
              </div>

              <div className="mt-6 rounded-xl bg-primary/5 p-5">
                <h3 className="mb-3 font-semibold text-foreground">Numeros do Programa</h3>
                <div className="grid gap-4 sm:grid-cols-3">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-primary">33</p>
                    <p className="text-sm text-muted-foreground">Paises elegiveis</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-primary">4-6</p>
                    <p className="text-sm text-muted-foreground">Meses de duracao</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-primary">100%</p>
                    <p className="text-sm text-muted-foreground">Financiado pelo Canada</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Secao 2: Beneficios */}
            <section id="beneficios" className="mb-16 scroll-mt-24">
              <div className="mb-4 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <DollarSign className="h-5 w-5 text-primary" />
                </span>
                <h2 className="text-2xl font-bold text-foreground">Beneficios da Bolsa</h2>
              </div>
              
              <div className="space-y-4 text-foreground/85 leading-relaxed">
                <p>
                  A bolsa ELAP e uma das mais completas disponiveis para estudantes brasileiros que desejam 
                  estudar no exterior. O programa cobre praticamente todos os custos relacionados ao intercambio, 
                  permitindo que o bolsista foque exclusivamente em sua experiencia academica.
                </p>
                <p>
                  O auxilio financeiro e calculado para cobrir confortavelmente os custos de vida no Canada, 
                  que variam dependendo da cidade onde a universidade esta localizada. Cidades como Vancouver 
                  e Toronto tendem a ser mais caras, enquanto cidades menores oferecem custo de vida mais acessivel.
                </p>
              </div>

              <div className="mt-6 space-y-4">
                {[
                  {
                    title: "Auxilio Mensal para Custo de Vida",
                    description: "O bolsista recebe um valor mensal em dolares canadenses para cobrir despesas com moradia, alimentacao, transporte local e outras necessidades do dia a dia. O valor e suficiente para viver confortavelmente durante todo o periodo do intercambio.",
                  },
                  {
                    title: "Seguro Saude Completo",
                    description: "O programa inclui seguro saude que cobre atendimentos medicos, emergencias, medicamentos e outros servicos de saude durante toda a estadia no Canada. Isso e fundamental, ja que o sistema de saude canadense pode ser caro para estrangeiros.",
                  },
                  {
                    title: "Isencao de Taxas Academicas",
                    description: "O bolsista nao precisa pagar as tuition fees (taxas academicas) da universidade canadense de destino. Considerando que essas taxas podem chegar a milhares de dolares por semestre, esse e um beneficio extremamente valioso.",
                  },
                  {
                    title: "Auxilio para Passagem Aerea",
                    description: "O programa oferece auxilio para cobrir os custos da passagem aerea de ida e volta entre o Brasil e o Canada. O valor e baseado na rota mais economica disponivel.",
                  },
                  {
                    title: "Auxilio para Livros e Materiais",
                    description: "Um valor adicional e disponibilizado para que o estudante possa adquirir livros, materiais academicos e outros recursos necessarios para seus estudos.",
                  },
                ].map((benefit) => (
                  <div key={benefit.title} className="rounded-lg border border-border bg-card p-5">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <div>
                        <h3 className="mb-1 font-semibold text-foreground">{benefit.title}</h3>
                        <p className="text-sm leading-relaxed text-muted-foreground">{benefit.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-xl border-l-4 border-accent bg-accent/5 p-5">
                <div className="flex items-start gap-3">
                  <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  <div>
                    <h3 className="mb-1 font-semibold text-foreground">Importante</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      Os valores exatos dos beneficios podem variar a cada edicao do programa e dependem das 
                      politicas do Global Affairs Canada. Consulte sempre o edital mais recente para informacoes 
                      atualizadas sobre os valores.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <AdContainer className="mb-16" slot="guia-mid-1" />

            {/* Secao 3: Requisitos */}
            <section id="requisitos" className="mb-16 scroll-mt-24">
              <div className="mb-4 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <FileText className="h-5 w-5 text-primary" />
                </span>
                <h2 className="text-2xl font-bold text-foreground">Requisitos e Elegibilidade</h2>
              </div>
              
              <div className="space-y-4 text-foreground/85 leading-relaxed">
                <p>
                  Para se candidatar ao programa ELAP, e necessario atender a uma serie de requisitos 
                  estabelecidos pelo Global Affairs Canada. Esses criterios garantem que os candidatos 
                  selecionados tenham o perfil adequado para aproveitar ao maximo a experiencia de intercambio.
                </p>
              </div>

              <div className="mt-6 space-y-6">
                <div>
                  <h3 className="mb-3 font-semibold text-foreground">Requisitos Obrigatorios</h3>
                  <ul className="space-y-3">
                    {[
                      "Ser cidadao de um pais elegivel da America Latina ou Caribe (o Brasil esta incluido na lista)",
                      "Estar regularmente matriculado em uma instituicao de ensino superior no pais de origem durante o periodo de candidatura e durante o intercambio",
                      "Ter obtido uma carta de aceite (letter of acceptance) de uma instituicao canadense participante do programa ELAP",
                      "Ter nivel de proficiencia adequado no idioma de instrucao da universidade de destino (ingles ou frances)",
                      "Comprometer-se a retornar ao pais de origem apos o termino do intercambio",
                      "Nao possuir cidadania canadense ou residencia permanente no Canada",
                    ].map((req) => (
                      <li key={req} className="flex items-start gap-2.5">
                        <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        <span className="text-sm leading-relaxed text-foreground/85">{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-foreground">Criterios de Selecao</h3>
                  <p className="mb-3 text-sm text-muted-foreground">
                    Alem dos requisitos obrigatorios, o comite de selecao considera varios fatores para 
                    escolher os bolsistas:
                  </p>
                  <ul className="space-y-3">
                    {[
                      "Merito academico e historico escolar do candidato",
                      "Qualidade e clareza do projeto de estudos proposto",
                      "Relevancia do intercambio para a formacao academica e profissional",
                      "Potencial de contribuicao para o desenvolvimento do pais de origem apos o retorno",
                      "Cartas de recomendacao que comprovem a capacidade academica do candidato",
                    ].map((criteria) => (
                      <li key={criteria} className="flex items-start gap-2.5">
                        <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" />
                        <span className="text-sm leading-relaxed text-foreground/85">{criteria}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6 rounded-xl bg-secondary p-5">
                <h3 className="mb-3 font-semibold text-foreground">Paises Elegiveis (America do Sul)</h3>
                <p className="text-sm text-muted-foreground">
                  Argentina, Bolivia, Brasil, Chile, Colombia, Equador, Guiana, Paraguai, Peru, 
                  Suriname, Uruguai e Venezuela. Alem desses, paises da America Central e do Caribe 
                  tambem sao elegiveis.
                </p>
              </div>
            </section>

            {/* Secao 4: Documentos */}
            <section id="documentos" className="mb-16 scroll-mt-24">
              <div className="mb-4 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <FileText className="h-5 w-5 text-primary" />
                </span>
                <h2 className="text-2xl font-bold text-foreground">Documentos Necessarios</h2>
              </div>
              
              <div className="space-y-4 text-foreground/85 leading-relaxed">
                <p>
                  A documentacao e uma parte crucial da candidatura ao ELAP. Organize todos os documentos 
                  com antecedencia para evitar correria de ultima hora. Alguns documentos precisam ser 
                  traduzidos para ingles ou frances, entao considere esse tempo no seu planejamento.
                </p>
              </div>

              <div className="mt-6 grid gap-4">
                {[
                  {
                    title: "Carta de Aceite da Instituicao Canadense",
                    description: "Documento oficial da universidade canadense confirmando que voce foi aceito para realizar intercambio. Deve especificar o periodo, curso/programa e departamento.",
                    required: true,
                  },
                  {
                    title: "Carta de Motivacao",
                    description: "Texto de 1-2 paginas explicando suas motivacoes, objetivos academicos, por que escolheu o Canada e como o intercambio contribuira para sua formacao.",
                    required: true,
                  },
                  {
                    title: "Historico Escolar",
                    description: "Historico academico atualizado da sua instituicao de origem no Brasil, preferencialmente traduzido para ingles.",
                    required: true,
                  },
                  {
                    title: "Cartas de Recomendacao",
                    description: "Geralmente sao solicitadas 2 cartas de professores ou orientadores que conhecam seu trabalho academico e possam atestar suas qualificacoes.",
                    required: true,
                  },
                  {
                    title: "Comprovante de Matricula",
                    description: "Documento que comprove que voce esta regularmente matriculado na sua instituicao de origem.",
                    required: true,
                  },
                  {
                    title: "Curriculo Academico",
                    description: "CV atualizado destacando sua trajetoria academica, pesquisas, publicacoes (se houver) e outras atividades relevantes.",
                    required: true,
                  },
                  {
                    title: "Comprovante de Proficiencia",
                    description: "Certificado de proficiencia em ingles (TOEFL, IELTS) ou frances (TEF, TCF), dependendo da universidade de destino.",
                    required: false,
                  },
                  {
                    title: "Copia do Passaporte",
                    description: "Pagina de identificacao do passaporte valido. Se ainda nao tiver passaporte, providencie com antecedencia.",
                    required: true,
                  },
                ].map((doc) => (
                  <div key={doc.title} className="rounded-lg border border-border bg-card p-4">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="font-semibold text-foreground">{doc.title}</h3>
                          {doc.required && (
                            <span className="rounded bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">
                              Obrigatorio
                            </span>
                          )}
                        </div>
                        <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{doc.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <AdContainer className="mb-16" slot="guia-mid-2" />

            {/* Secao 5: Cronograma */}
            <section id="cronograma" className="mb-16 scroll-mt-24">
              <div className="mb-4 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <Calendar className="h-5 w-5 text-primary" />
                </span>
                <h2 className="text-2xl font-bold text-foreground">Cronograma e Prazos</h2>
              </div>
              
              <div className="space-y-4 text-foreground/85 leading-relaxed">
                <p>
                  O processo de candidatura ao ELAP segue um cronograma especifico que varia a cada ano. 
                  E fundamental acompanhar os prazos e se planejar com bastante antecedencia, especialmente 
                  para conseguir a carta de aceite da universidade canadense.
                </p>
              </div>

              <div className="mt-6 space-y-4">
                {[
                  {
                    period: "6-12 meses antes",
                    title: "Preparacao Inicial",
                    tasks: [
                      "Pesquise universidades canadenses parceiras do programa",
                      "Identifique professores e departamentos alinhados com sua area",
                      "Comece a entrar em contato com potenciais supervisores",
                      "Verifique requisitos de proficiencia em idiomas",
                    ],
                  },
                  {
                    period: "4-6 meses antes",
                    title: "Contato com Universidades",
                    tasks: [
                      "Envie emails para professores canadenses",
                      "Negocie os termos do intercambio",
                      "Solicite a carta de aceite oficial",
                      "Comece a preparar os documentos",
                    ],
                  },
                  {
                    period: "2-3 meses antes",
                    title: "Preparacao da Candidatura",
                    tasks: [
                      "Obtenha a carta de aceite oficial",
                      "Solicite cartas de recomendacao",
                      "Escreva e revise sua carta de motivacao",
                      "Providencie traducoes necessarias",
                    ],
                  },
                  {
                    period: "Periodo de inscricao",
                    title: "Submissao da Candidatura",
                    tasks: [
                      "Preencha o formulario de inscricao",
                      "Anexe todos os documentos solicitados",
                      "Revise cuidadosamente antes de enviar",
                      "Guarde comprovantes de submissao",
                    ],
                  },
                  {
                    period: "Apos a submissao",
                    title: "Aguardando Resultado",
                    tasks: [
                      "Acompanhe comunicacoes do programa",
                      "Responda rapidamente a solicitacoes adicionais",
                      "Comece a pesquisar sobre moradia no Canada",
                      "Informe-se sobre o processo de visto",
                    ],
                  },
                ].map((phase, index) => (
                  <div key={phase.period} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                        {index + 1}
                      </div>
                      {index < 4 && <div className="mt-2 h-full w-0.5 bg-primary/20" />}
                    </div>
                    <div className="flex-1 pb-6">
                      <span className="text-sm font-medium text-primary">{phase.period}</span>
                      <h3 className="mb-2 text-lg font-semibold text-foreground">{phase.title}</h3>
                      <ul className="space-y-1">
                        {phase.tasks.map((task) => (
                          <li key={task} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <ArrowRight className="mt-0.5 h-3.5 w-3.5 shrink-0" />
                            {task}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Secao 6: Como Aplicar */}
            <section id="como-aplicar" className="mb-16 scroll-mt-24">
              <div className="mb-4 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <Clock className="h-5 w-5 text-primary" />
                </span>
                <h2 className="text-2xl font-bold text-foreground">Como Aplicar Passo a Passo</h2>
              </div>
              
              <div className="space-y-4 text-foreground/85 leading-relaxed">
                <p>
                  O processo de candidatura ao ELAP envolve varias etapas que precisam ser seguidas com atencao. 
                  Aqui esta um guia detalhado de como proceder em cada fase.
                </p>

                <div className="rounded-xl border border-border bg-card p-6">
                  <h3 className="mb-4 text-lg font-semibold text-foreground">Passo 1: Pesquisa e Planejamento</h3>
                  <p className="mb-3 text-sm text-muted-foreground">
                    Antes de comecar a candidatura, dedique tempo para pesquisar:
                  </p>
                  <ul className="space-y-2">
                    {[
                      "Quais universidades canadenses participam do ELAP e tem programas na sua area",
                      "Quais professores trabalham com temas relacionados a sua pesquisa ou interesse",
                      "Como funciona o sistema academico canadense (semestres, creditos, etc)",
                      "Quais sao os prazos do programa para o ano que voce pretende aplicar",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-foreground/85">
                        <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-xl border border-border bg-card p-6">
                  <h3 className="mb-4 text-lg font-semibold text-foreground">Passo 2: Contato com a Universidade</h3>
                  <p className="text-sm text-muted-foreground">
                    Essa e frequentemente a etapa mais desafiadora. Voce precisara entrar em contato com 
                    professores ou departamentos canadenses e convence-los a te aceitar como estudante de 
                    intercambio. Envie emails profissionais, personalizados, explicando seu interesse e 
                    como a colaboracao seria mutuamente benefica.
                  </p>
                </div>

                <div className="rounded-xl border border-border bg-card p-6">
                  <h3 className="mb-4 text-lg font-semibold text-foreground">Passo 3: Obtencao da Carta de Aceite</h3>
                  <p className="text-sm text-muted-foreground">
                    Apos conseguir um professor ou departamento interessado em te receber, voce precisara 
                    formalizar isso atraves de uma carta de aceite oficial da universidade. Esse documento 
                    e essencial para sua candidatura e deve especificar o periodo de intercambio, as atividades 
                    que serao desenvolvidas e o supervisor responsavel.
                  </p>
                </div>

                <div className="rounded-xl border border-border bg-card p-6">
                  <h3 className="mb-4 text-lg font-semibold text-foreground">Passo 4: Preparacao dos Documentos</h3>
                  <p className="text-sm text-muted-foreground">
                    Com a carta de aceite em maos, prepare todos os outros documentos necessarios. 
                    Solicite cartas de recomendacao com antecedencia, pois professores geralmente 
                    precisam de tempo. Escreva sua carta de motivacao com cuidado e peca para outras 
                    pessoas revisarem antes de finalizar.
                  </p>
                </div>

                <div className="rounded-xl border border-border bg-card p-6">
                  <h3 className="mb-4 text-lg font-semibold text-foreground">Passo 5: Submissao da Candidatura</h3>
                  <p className="text-sm text-muted-foreground">
                    Preencha o formulario de candidatura no sistema do programa com atencao. Revise todas 
                    as informacoes antes de enviar e certifique-se de que todos os documentos estao anexados 
                    corretamente. Guarde uma copia de tudo que foi enviado para sua referencia.
                  </p>
                </div>
              </div>
            </section>

            {/* Secao 7: Carta de Aceite */}
            <section id="carta-aceite" className="mb-16 scroll-mt-24">
              <div className="mb-4 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <FileText className="h-5 w-5 text-primary" />
                </span>
                <h2 className="text-2xl font-bold text-foreground">Conseguindo a Carta de Aceite</h2>
              </div>
              
              <div className="space-y-4 text-foreground/85 leading-relaxed">
                <p>
                  A carta de aceite (letter of acceptance) e provavelmente o documento mais importante 
                  e mais dificil de conseguir para sua candidatura. Sem ela, nao e possivel se candidatar 
                  ao ELAP. Aqui estao estrategias detalhadas para maximizar suas chances.
                </p>

                <h3 className="mt-6 text-lg font-semibold text-foreground">Como Encontrar Professores</h3>
                <p>
                  Comece pesquisando no site das universidades canadenses participantes do ELAP. 
                  Procure por departamentos e grupos de pesquisa alinhados com seus interesses. 
                  Leia publicacoes recentes dos professores para entender melhor o trabalho deles 
                  e identificar pontos de conexao com sua propria pesquisa.
                </p>

                <h3 className="mt-6 text-lg font-semibold text-foreground">Escrevendo o Email de Contato</h3>
                <p>
                  Seu primeiro email para um professor canadense deve ser profissional, conciso e personalizado. 
                  Evite emails genericos que poderiam ser enviados para qualquer pessoa. Inclua:
                </p>
                <ul className="mt-3 space-y-2">
                  {[
                    "Uma introducao breve sobre quem voce e e onde estuda",
                    "Por que voce se interessa especificamente pelo trabalho daquele professor",
                    "Como sua formacao e interesses se alinham com a pesquisa do professor",
                    "O que voce espera desenvolver durante o intercambio",
                    "Uma mencao ao programa ELAP e ao financiamento disponivel",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm">
                      <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 rounded-xl border-l-4 border-primary bg-primary/5 p-5">
                  <h3 className="mb-2 font-semibold text-foreground">Dica Importante</h3>
                  <p className="text-sm text-muted-foreground">
                    Envie emails para varios professores, mas sempre personalize cada mensagem. Professores 
                    percebem rapidamente quando recebem emails genericos. Se nao receber resposta em 2-3 
                    semanas, envie um follow-up educado. Muitos professores sao muito ocupados e podem ter 
                    perdido seu email inicial.
                  </p>
                </div>
              </div>
            </section>

            <AdContainer className="mb-16" slot="guia-mid-3" />

            {/* Secao 8: Carta de Motivacao */}
            <section id="carta-motivacao" className="mb-16 scroll-mt-24">
              <div className="mb-4 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <BookOpen className="h-5 w-5 text-primary" />
                </span>
                <h2 className="text-2xl font-bold text-foreground">Carta de Motivacao</h2>
              </div>
              
              <div className="space-y-4 text-foreground/85 leading-relaxed">
                <p>
                  A carta de motivacao e sua oportunidade de mostrar ao comite de selecao quem voce e alem 
                  dos numeros e documentos. E aqui que voce pode se diferenciar dos outros candidatos e 
                  demonstrar por que merece ser selecionado.
                </p>

                <h3 className="mt-6 text-lg font-semibold text-foreground">Estrutura Recomendada</h3>
                
                <div className="space-y-4">
                  <div className="rounded-lg border border-border bg-card p-4">
                    <h4 className="font-medium text-foreground">Paragrafo 1: Introducao</h4>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Apresente-se brevemente, mencione seu curso e instituicao de origem, e declare 
                      claramente que esta se candidatando ao ELAP para estudar na universidade X.
                    </p>
                  </div>

                  <div className="rounded-lg border border-border bg-card p-4">
                    <h4 className="font-medium text-foreground">Paragrafo 2-3: Motivacao Academica</h4>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Explique como o intercambio se encaixa em seus objetivos academicos e profissionais. 
                      Por que essa universidade especifica? Como o trabalho do professor X complementa 
                      sua formacao? O que voce espera aprender ou desenvolver?
                    </p>
                  </div>

                  <div className="rounded-lg border border-border bg-card p-4">
                    <h4 className="font-medium text-foreground">Paragrafo 4: Por que o Canada</h4>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Demonstre conhecimento sobre o Canada e a universidade de destino. Por que 
                      escolheu esse pais e nao outro? O que o sistema academico canadense pode 
                      oferecer que voce nao encontra no Brasil?
                    </p>
                  </div>

                  <div className="rounded-lg border border-border bg-card p-4">
                    <h4 className="font-medium text-foreground">Paragrafo 5: Contribuicao e Retorno</h4>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Mostre como voce pretende contribuir durante o intercambio e o que planeja fazer 
                      apos retornar ao Brasil. Como essa experiencia impactara sua carreira e como voce 
                      usara o conhecimento adquirido?
                    </p>
                  </div>

                  <div className="rounded-lg border border-border bg-card p-4">
                    <h4 className="font-medium text-foreground">Paragrafo 6: Conclusao</h4>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Reforce seu interesse e entusiasmo pelo programa. Agradeca a consideracao e 
                      manifeste disponibilidade para fornecer informacoes adicionais se necessario.
                    </p>
                  </div>
                </div>

                <h3 className="mt-6 text-lg font-semibold text-foreground">Erros Comuns para Evitar</h3>
                <ul className="space-y-2">
                  {[
                    "Textos genericos que poderiam servir para qualquer programa ou universidade",
                    "Foco excessivo em aspectos turisticos ou na experiencia de morar no exterior",
                    "Falta de conexao clara entre seus objetivos e o intercambio proposto",
                    "Erros gramaticais ou de ortografia (peca revisao de outras pessoas)",
                    "Cartas muito longas ou muito curtas (ideal: 1-2 paginas)",
                  ].map((error) => (
                    <li key={error} className="flex items-start gap-2 text-sm">
                      <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-destructive" />
                      {error}
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Secao 9: Apos Aprovacao */}
            <section id="apos-aprovacao" className="mb-16 scroll-mt-24">
              <div className="mb-4 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <MapPin className="h-5 w-5 text-primary" />
                </span>
                <h2 className="text-2xl font-bold text-foreground">Apos a Aprovacao</h2>
              </div>
              
              <div className="space-y-4 text-foreground/85 leading-relaxed">
                <p>
                  Parabens! Se voce chegou ate aqui, significa que foi aprovado no ELAP. Mas o trabalho 
                  ainda nao acabou. Ha varias providencias que precisam ser tomadas antes de embarcar 
                  para o Canada.
                </p>

                <h3 className="mt-6 text-lg font-semibold text-foreground">Visto de Estudante</h3>
                <p>
                  Voce precisara solicitar um visto de estudante (study permit) no consulado ou embaixada 
                  do Canada. O processo inclui preencher formularios online, pagar taxas, fornecer 
                  documentos comprobatorios e, em alguns casos, fazer uma entrevista. Comece esse processo 
                  assim que receber a aprovacao, pois pode levar algumas semanas.
                </p>

                <h3 className="mt-6 text-lg font-semibold text-foreground">Moradia</h3>
                <p>
                  Pesquise opcoes de moradia na cidade onde vai estudar. Muitas universidades oferecem 
                  residencias estudantis (student housing), que podem ser uma boa opcao para o primeiro 
                  mes ate voce se familiarizar com a cidade. Tambem e possivel alugar apartamentos 
                  compartilhados (roommates) ou quartos em casas de familia (homestay).
                </p>

                <h3 className="mt-6 text-lg font-semibold text-foreground">Passagem Aerea</h3>
                <p>
                  Reserve sua passagem com antecedencia para conseguir melhores precos. Verifique as 
                  politicas de bagagem da companhia aerea e lembre-se de que voce estara levando coisas 
                  para varios meses.
                </p>

                <h3 className="mt-6 text-lg font-semibold text-foreground">Preparacao Pratica</h3>
                <ul className="mt-3 space-y-2">
                  {[
                    "Verifique se precisa de adaptador de tomada (Canada usa padrao americano)",
                    "Pesquise sobre o clima da cidade e prepare roupas adequadas",
                    "Informe seu banco sobre a viagem internacional",
                    "Considere abrir uma conta bancaria canadense apos chegar",
                    "Pesquise sobre planos de celular para estudantes",
                    "Faca um seguro viagem adicional se desejar cobertura extra",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm">
                      <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Secao 10: Dicas Finais */}
            <section id="dicas-finais" className="mb-16 scroll-mt-24">
              <div className="mb-4 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <Users className="h-5 w-5 text-primary" />
                </span>
                <h2 className="text-2xl font-bold text-foreground">Dicas de Ex-Bolsistas</h2>
              </div>
              
              <div className="space-y-4 text-foreground/85 leading-relaxed">
                <p>
                  Reunimos dicas de estudantes brasileiros que ja participaram do ELAP e compartilham 
                  suas experiencias para ajudar futuros candidatos.
                </p>
              </div>

              <div className="mt-6 space-y-4">
                {[
                  {
                    tip: "Comece cedo",
                    detail: "Nao deixe para ultima hora. O processo de conseguir a carta de aceite pode levar meses, e voce precisa de tempo para preparar uma candidatura forte.",
                  },
                  {
                    tip: "Personalize tudo",
                    detail: "Cada email, cada carta deve ser personalizada. Comites de selecao e professores percebem rapidamente textos genericos.",
                  },
                  {
                    tip: "Nao desanime com a falta de resposta",
                    detail: "E normal nao receber resposta de varios professores. Continue tentando e mande follow-ups educados.",
                  },
                  {
                    tip: "Aproveite ao maximo",
                    detail: "Uma vez no Canada, participe de eventos, conheca pessoas, explore a cidade. A experiencia vai muito alem da sala de aula.",
                  },
                  {
                    tip: "Mantenha contato",
                    detail: "As conexoes que voce fara no Canada podem durar a vida toda. Mantenha contato com professores e colegas apos voltar ao Brasil.",
                  },
                ].map((item) => (
                  <div key={item.tip} className="rounded-xl border border-border bg-card p-5">
                    <h3 className="mb-2 font-semibold text-foreground">{item.tip}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">{item.detail}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* CTA Final */}
            <div className="rounded-xl bg-primary p-8 text-center">
              <BookOpen className="mx-auto mb-3 h-8 w-8 text-primary-foreground" />
              <h2 className="mb-2 text-xl font-bold text-primary-foreground">Pronto para comecar?</h2>
              <p className="mb-4 text-sm text-primary-foreground/80">
                Confira nossos artigos no blog com mais dicas detalhadas e experiencias reais de bolsistas.
              </p>
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 rounded-lg bg-primary-foreground px-6 py-3 text-sm font-semibold text-primary transition-opacity hover:opacity-90"
              >
                Ver Posts do Blog
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        <AdContainer className="mx-auto mb-8 max-w-4xl px-4" slot="guia-bottom" />
      </main>
      <Footer />
    </div>
  )
}
