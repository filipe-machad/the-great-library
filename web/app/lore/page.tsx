"use client";

import { PageLayout } from "@/components/layout/PageLayout";
import { Divider } from "@/components/narrative/Divider";
import { PullQuote } from "@/components/narrative/PullQuote";

export default function LorePage() {
  return (
    <PageLayout showBackLink>
      <article>
        <h1 className="mb-6" style={{ fontFamily: "var(--font-heading)" }}>
          A Lore
        </h1>

        <p
          className="text-xl italic mb-12"
          style={{ color: "var(--secondary-ink)" }}
        >
          Sobre as origens e a natureza da Grande Biblioteca
        </p>

        <Divider symbol="✦" />

        <section className="mb-16">
          <h2 className="mb-6" style={{ fontFamily: "var(--font-heading)" }}>
            No Princípio
          </h2>

          <p
            className="first-letter:text-6xl first-letter:font-normal first-letter:mr-1 first-letter:float-left first-letter:leading-[0.9]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Antes que o mundo tivesse forma, havia histórias. Não histórias como as
            entendemos agora — encadernadas em livros, faladas em voz alta ou escritas
            em pergaminho — mas histórias em seu estado mais puro: narrativas em
            potencial aguardando para se desdobrar, padrões buscando estrutura,
            significado buscando voz.
          </p>

          <p>
            A Grande Biblioteca não surgiu através de construção ou decreto. Ela
            emergiu porque precisava existir. Quando histórias suficientes se
            acumularam no vazio entre existência e inexistência, elas necessitaram de
            um lugar para residir. A Biblioteca se formou ao redor delas como uma
            concha ao redor de uma pérola, como memória ao redor de experiência.
          </p>

          <p>
            Alguns dizem que a primeira Bibliotecária a descobriu. Outros afirmam que
            a Biblioteca em si escolheu sua primeira guardiã. A verdade, como muitas
            coisas aqui, depende de qual relato você lê — e a Biblioteca contém todos
            eles.
          </p>
        </section>

        <PullQuote>
          A Biblioteca lembra o que o mundo esqueceu, e esquece o que o mundo
          lembra. Esta é sua natureza.
        </PullQuote>

        <section className="mb-16">
          <h2 className="mb-6" style={{ fontFamily: "var(--font-heading)" }}>
            A Arquitetura da Memória
          </h2>

          <p>
            Caminhar pela Grande Biblioteca é mover-se através de um espaço
            impossível. Corredores se estendem infinitamente, mas voltam sobre si
            mesmos. Estantes alcançam tetos que podem não existir. O tempo flui de
            maneira estranha aqui — você pode passar anos lendo um único livro e
            emergir para descobrir que apenas momentos se passaram, ou perder uma
            tarde navegando e descobrir décadas transcorridas no mundo além.
          </p>

          <p>
            A arquitetura desafia a geometria convencional porque não é construída de
            pedra e argamassa, mas de estrutura narrativa em si. A Biblioteca se
            organiza de acordo com significado, não alfabetos. Caminhe com uma pergunta
            no coração e encontrará caminhos se abrindo em direção à sua resposta.
            Vagueie sem rumo e poderá nunca encontrar o mesmo corredor duas vezes.
          </p>

          <p>
            Há Salas de Leitura que existem apenas quando alguém precisa delas. Há
            Seções Proibidas que se movem para evitar descoberta. Há Salões de Eco
            onde sussurros de mil anos atrás ainda reverberam, esperando por alguém
            para ouvi-los novamente.
          </p>
        </section>

        <Divider />

        <section className="mb-16">
          <h2 className="mb-6" style={{ fontFamily: "var(--font-heading)" }}>
            Aqueles que Guardam os Livros
          </h2>

          <p>
            Os Bibliotecários não são nomeados. Eles são chamados. Algo em sua
            natureza ressoa com o propósito da Biblioteca — uma capacidade para
            lembrar, uma incapacidade de deixar histórias morrerem, uma fome por
            verdade que não pode ser saciada.
          </p>

          <p>
            Alguns servem por vidas inteiras. Outros chegam, cumprem seu propósito em
            um único momento de compreensão perfeita e partem. Alguns se tornam tão
            entrelaçados com seu trabalho que deixam de ser distinguíveis da própria
            Biblioteca, sua consciência se fundindo com o vasto arquivo até existirem
            mais como presença do que como pessoa.
          </p>

          <p>
            Eles não controlam a Biblioteca. Eles a cuidam. Organizam o que pode ser
            organizado, preservam o que poderia ser perdido e guiam aqueles que buscam
            conhecimento — embora a orientação seja sempre gentil, sempre indireta. A
            Biblioteca tem sua própria vontade, e os Bibliotecários aprenderam há
            muito a servir em vez de comandar.
          </p>
        </section>

        <PullQuote>
          Toda história já contada reside aqui. Toda história nunca contada aguarda
          aqui. A diferença entre as duas é menor do que você imagina.
        </PullQuote>

        <section className="mb-16">
          <h2 className="mb-6" style={{ fontFamily: "var(--font-heading)" }}>
            O Preço do Conhecimento
          </h2>

          <p>
            A Grande Biblioteca não é uma instituição benevolente. Ela não existe para
            o benefício daqueles que a visitam. Ela existe para si mesma, para a
            preservação e perpetuação de histórias em sua complexidade infinita.
          </p>

          <p>
            Aqueles que passam tempo demais dentro de suas paredes arriscam perder a si
            mesmos. Não no sentido mundano de ficar distraído ou sobrecarregado, mas de
            uma maneira mais literal. A fronteira entre leitor e história se torna
            tênue. Você pode pegar um livro sobre a última resistência de um soldado e
            se descobrir <em>tornando-se</em> aquele soldado. Pode pesquisar uma
            civilização perdida e acordar para descobrir que agora carrega memórias de
            ter vivido lá.
          </p>

          <p>
            A Biblioteca toma tanto quanto dá. Para cada verdade que você descobre,
            pode perder uma certeza que antes possuía. Para cada pergunta respondida,
            duas outras surgem. E algum conhecimento, uma vez aprendido, não pode ser
            desaprendido — ele te transforma de maneiras sutis e profundas, até que a
            pessoa que entrou buscando respostas não é mais a mesma que emerge com
            elas.
          </p>
        </section>

        <Divider symbol="✦" />

        <section>
          <h2 className="mb-6" style={{ fontFamily: "var(--font-heading)" }}>
            Por que Ela Existe
          </h2>

          <p>
            Talvez o maior mistério da Grande Biblioteca não seja seu conteúdo, nem
            sua estrutura impossível, nem mesmo sua estranha relação com o tempo — mas
            seu propósito.
          </p>

          <p>
            É um repositório? Um arquivo preservando o que de outra forma se perderia
            para a entropia e o esquecimento? Ou é algo mais ativo — uma força que
            molda a realidade ao determinar quais histórias são lembradas e quais
            desvanecem no esquecimento?
          </p>

          <p>
            Alguns acadêmicos acreditam que a Biblioteca é uma espécie de memória
            cósmica, a forma do universo de conhecer a si mesmo. Outros pensam que ela
            existe para proteger conhecimento perigoso daqueles que o usariam mal.
            Alguns sussurram que é na verdade uma prisão, contendo narrativas poderosas
            ou terríveis demais para serem permitidas livres no mundo.
          </p>

          <p>
            Os Bibliotecários, quando perguntados, oferecem apenas sorrisos
            enigmáticos. Se conhecem a verdade, não estão contando. Talvez eles
            também não saibam. Talvez a própria Biblioteca não saiba, tendo há muito
            esquecido por que surgiu.
          </p>

          <p>
            Ou talvez — e este é o pensamento que mais perturba os visitantes — a
            Biblioteca não tenha propósito algum. Talvez ela simplesmente{" "}
            <em>seja</em>, tão inevitável e inexplicável quanto a própria existência.
          </p>
        </section>
      </article>
    </PageLayout>
  );
}
