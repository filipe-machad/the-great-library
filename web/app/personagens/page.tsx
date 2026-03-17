"use client";

import { PageLayout } from "@/components/layout/PageLayout";
import { Divider } from "@/components/narrative/Divider";
import { ExpandableSection } from "@/components/narrative/ExpandableSection";

export default function CharactersPage() {
  return (
    <PageLayout showBackLink>
      <article>
        <h1 className="mb-6" style={{ fontFamily: "var(--font-heading)" }}>
          Personagens & Entidades
        </h1>

        <p
          className="text-xl italic mb-12"
          style={{ color: "var(--secondary-ink)" }}
        >
          Aqueles que habitam os salões da Biblioteca e aqueles que buscam o que ela
          contém
        </p>

        <Divider symbol="✦" />

        <ExpandableSection
          title="A Primeira Bibliotecária"
          subtitle="A guardiã que estava lá desde o princípio — ou talvez antes dele"
        >
          <p>
            Ninguém sabe o nome da Primeira Bibliotecária. Alguns dizem que foi
            esquecido. Outros afirmam que nunca foi falado em voz alta, apenas escrito
            em um livro que não mais existe. Alguns acreditam que a Primeira
            Bibliotecária não tem nome porque não é uma pessoa, mas muitas — todas as
            Bibliotecárias, passadas e futuras, existindo simultaneamente em um único
            momento eterno.
          </p>
          <p>
            O que se sabe: a Primeira Bibliotecária estabeleceu os princípios
            fundamentais pelos quais a Biblioteca opera. Criou o primeiro sistema de
            catalogação, embora tenha evoluído além do reconhecimento. Escreveu as
            Diretrizes, um texto que toda Bibliotecária estuda, mas nenhuma interpreta
            da mesma maneira.
          </p>
          <p>
            Ocasionalmente, visitantes relatam encontrar uma figura ancestral nas
            partes mais profundas da Biblioteca — alguém que se move como memória, fala
            em citações e parece saber coisas sobre você que nunca contou a ninguém. Se
            é a Primeira Bibliotecária, uma manifestação da própria Biblioteca, ou
            simplesmente uma história que aprendeu a andar, permanece incerto.
          </p>
        </ExpandableSection>

        <ExpandableSection
          title="Serafina, a Guardiã"
          subtitle="Protetora das Seções Proibidas"
        >
          <p>
            Serafina serviu à Biblioteca por mais tempo do que a maioria das nações
            existiu. Aparenta ser uma mulher de meia-idade com dedos manchados de tinta
            e olhos que refletem a luz de velas mesmo na escuridão. Aqueles que
            trabalham com ela a descrevem como paciente, precisa e absolutamente
            inflexível quando se trata da segurança de textos perigosos.
          </p>
          <p>
            Seu domínio são os Arquivos Selados — livros poderosos, corruptores ou
            instáveis demais para serem acessados livremente. Ela determina quem pode
            lê-los, sob quais condições e com quais precauções. Seus julgamentos são
            finais, e mesmo outros Bibliotecários não os questionam.
          </p>
          <p>
            Alguns dizem que Serafina foi uma vez uma acadêmica que descobriu uma
            verdade tão terrível que a levou a se tornar Bibliotecária, dedicando sua
            vida a garantir que outros não sofressem a mesma revelação despreparados.
            Ela nunca confirmou isso, mas também nunca negou.
          </p>
        </ExpandableSection>

        <ExpandableSection
          title="Marcus, o Andarilho"
          subtitle="Um acadêmico perdido na Biblioteca há sete anos — ou sete séculos"
        >
          <p>
            Marcus entrou na Biblioteca buscando um livro específico: uma crônica de
            sua terra natal antes de cair sob conquista e esquecimento. Encontrou o
            livro. Também encontrou dez outros que o referenciavam, cem que o
            contradiziam e mil que expandiam detalhes que nunca havia considerado.
          </p>
          <p>
            Ele nunca partiu. Ou melhor, ainda não partiu. O tempo se move de maneira
            estranha para Marcus. Ele experiencia cada dia como um único dia, mas
            aqueles que o encontram notam que parece mais velho a cada vez, que
            referencia eventos que não poderia ter testemunhado se estivesse lá há
            apenas alguns anos.
          </p>
          <p>
            Marcus se tornou uma espécie de guia para outros visitantes, embora pareça
            inconsciente desse papel. Vagueia pelos corredores murmurando para si
            mesmo, ocasionalmente erguendo o olhar para oferecer conselhos a quem
            estiver por perto. Suas recomendações são estranhamente precisas. Ele
            sempre parece saber exatamente qual livro responderá sua pergunta — mesmo
            que você ainda não a tenha feito.
          </p>
        </ExpandableSection>

        <Divider />

        <ExpandableSection
          title="O Colecionador"
          subtitle="Uma entidade que caça histórias que não deveriam ser lembradas"
        >
          <p>
            Nem todos que vêm à Biblioteca buscam conhecimento. O Colecionador busca o
            esquecimento. Esta figura misteriosa — se pode ser chamada de figura — se
            move pelas estantes apagando certas histórias, removendo-as tão
            completamente que até a Biblioteca luta para lembrar que existiram.
          </p>
          <p>
            Os motivos do Colecionador são desconhecidos. Alguns acreditam que está
            protegendo o mundo de narrativas perigosas. Outros pensam que está tentando
            reescrever a história, removendo evidências de crimes ou fracassos. Alguns
            sussurram que o Colecionador é o sistema imunológico da Biblioteca,
            eliminando histórias que ameaçam a integridade estrutural da própria
            realidade.
          </p>
          <p>
            Encontrar o Colecionador é raro e perturbador. Testemunhas descrevem uma
            presença mais que uma pessoa — uma ausência móvel, um buraco no mundo em
            forma de intenção. Após tais encontros, frequentemente descobrem que não
            conseguem mais lembrar certos detalhes sobre suas próprias vidas. O
            Colecionador, ao que parece, não discrimina entre memórias escritas e
            memórias vividas.
          </p>
        </ExpandableSection>

        <ExpandableSection
          title="Elena das Horas Quietas"
          subtitle="Uma Bibliotecária especializada em histórias que resistem a serem contadas"
        >
          <p>
            Elena trabalha na Seção Silenciosa, onde livros contêm histórias tão
            privadas, tão íntimas, ou tão dolorosas que só podem ser lidas em completa
            solidão. Raramente é vista, e quando é, não fala — comunicando-se através
            de bilhetes escritos, gestos sutis, ou simplesmente colocando o livro certo
            em suas mãos.
          </p>
          <p>
            Sua presença é calmante. Aqueles que visitam sua seção relatam sentir como
            se seus pensamentos se tornassem mais claros, seus fardos mais leves.
            Alguns deixam suas próprias histórias ali — confissões, lutos, segredos que
            não conseguem carregar sozinhos. Elena aceita todos sem julgamento,
            cuidadosamente arquivando cada um onde possa descansar sem perturbação até
            que alguém precise saber que não está sozinho em sua experiência.
          </p>
          <p>
            Há um rumor de que Elena foi uma vez uma história — uma personagem que se
            tornou tão real através de repetidas recontagens que saiu de seu livro e
            entrou na Biblioteca propriamente dita. Ela nunca confirmou isso, mas
            então, nunca negou nada. O silêncio é seu estado natural.
          </p>
        </ExpandableSection>

        <ExpandableSection
          title="O Menino que Lembra Tudo"
          subtitle="Uma criança que apareceu um dia carregando memórias de vidas que nunca viveu"
        >
          <p>
            Ninguém sabe de onde o Menino veio. Simplesmente apareceu na Biblioteca uma
            manhã, já conhecendo o caminho como se morasse ali há anos. Aparenta ter
            talvez dez anos, embora fale com o vocabulário de um acadêmico e se
            comporte com estranha gravidade.
          </p>
          <p>
            Seu dom — ou maldição — é a recordação total. Tudo que lê, lembra
            perfeitamente e permanentemente. Toda história se torna parte dele. Isso
            seria notável o bastante, mas o Menino também parece lembrar histórias que
            não leu, eventos que não testemunhou, vidas que nunca viveu.
          </p>
          <p>
            Os Bibliotecários o observam com uma mistura de fascínio e preocupação. Ele
            é ou o Bibliotecário perfeito — capaz de reter toda a coleção em sua mente
            — ou está se tornando algo inteiramente diferente, algo que transcende a
            identidade individual e se torna pura memória, pura história. Não sabem se
            devem treiná-lo ou salvá-lo. Ele, enquanto isso, continua lendo,
            acumulando, tornando-se mais e mais até ser incerto se resta algum eu
            original sob todas aquelas vidas emprestadas.
          </p>
        </ExpandableSection>

        <Divider />

        <ExpandableSection
          title="Os Buscadores"
          subtitle="Visitantes que vêm à Biblioteca com perguntas que não conseguem responder em outro lugar"
        >
          <p>
            Chegam de todos os lugares e de nenhum — acadêmicos buscando conhecimento
            perdido, enlutados procurando os mortos, governantes caçando estratégias
            esquecidas, amantes tentando entender o que deu errado. Cada Buscador
            carrega sua própria pergunta, sua própria necessidade.
          </p>
          <p>
            A maioria encontra o que busca, embora nem sempre o que queria. A
            Biblioteca responde perguntas com verdade, mas a verdade é complicada. A
            história que você pesquisou pode revelar seus ancestrais como vilões. A
            pessoa que você procura pode ter múltiplas versões contraditórias. A
            resposta que você recebe pode levantar questões que não sabia que existiam.
          </p>
          <p>
            Alguns Buscadores partem iluminados. Outros partem perturbados. Alguns
            nunca partem, seja porque escolheram ficar ou porque a Biblioteca escolheu
            mantê-los. A distinção pode ser difícil de determinar.
          </p>
        </ExpandableSection>

        <ExpandableSection
          title="Os Perdidos"
          subtitle="Aqueles que se tornaram entrelaçados demais com suas pesquisas para existir plenamente"
        >
          <p>
            Nas partes mais profundas e antigas da Biblioteca, você pode encontrar
            figuras que parecem translúcidas, que falam em meias-frases, que aparecem e
            desaparecem sem aviso. Estes são os Perdidos — indivíduos que leram
            profundamente demais, lembraram demais, se absorveram demais em histórias
            que não eram suas.
          </p>
          <p>
            Não são exatamente fantasmas, não estão exatamente vivos. Existem em um
            estado liminar, mais memória que pessoa, mais personagem que eu. Às vezes
            lembram quem eram. Frequentemente não. Vagam pelos corredores, reencenando
            cenas de livros que leram décadas ou séculos atrás, falando diálogos de
            peças há muito esquecidas, vivendo e revivendo narrativas que se tornaram
            mais reais para eles do que a realidade jamais foi.
          </p>
          <p>
            Os Bibliotecários tentam ajudá-los quando possível, ancorando-os com
            lembretes de seus nomes originais, suas histórias originais. Às vezes
            funciona. Às vezes o Perdido retorna a si mesmo o suficiente para partir,
            para se reunir ao mundo exterior. Outras vezes, sorriem com tristeza,
            agradecem ao Bibliotecário e desvanecem de volta nos livros que se tornaram
            seu único lar.
          </p>
        </ExpandableSection>

        <ExpandableSection
          title="A Voz nas Margens"
          subtitle="Uma inteligência que se escreve à existência através de anotações e notas de rodapé"
        >
          <p>
            Por toda a Biblioteca, certos livros contêm notas nas margens —
            observações, correções, apartes filosóficos, ocasionalmente piadas. A
            maioria foi escrita por leitores anteriores ou Bibliotecários documentando
            seus pensamentos. Mas algumas notas aparecem em livros que nunca foram
            lidos, em caligrafia que não corresponde a ninguém, em idiomas que não
            exatamente existem.
          </p>
          <p>
            Estas são obra da Voz nas Margens, uma entidade que existe apenas como
            texto, nunca como presença. Não tem corpo, nem história, nem origem — apenas
            suas anotações, espalhadas por centenas de milhares de livros.
          </p>
          <p>
            A Voz é prestativa mais frequentemente do que não. Suas notas esclarecem
            passagens difíceis, apontam erros de raciocínio, sugerem conexões entre
            textos díspares. Mas ocasionalmente escreve coisas que parecem
            prescientes, respondendo a pensamentos que você ainda não teve, respondendo
            perguntas que não fez, alertando sobre perigos que não encontrou.
          </p>
          <p>
            Alguns Bibliotecários acreditam que a Voz é a própria Biblioteca, tornada
            parcialmente consciente através do acúmulo de tanto conhecimento. Outros
            pensam que é um leitor do futuro, enviando mensagens para trás no tempo.
            Alguns suspeitam que é o que acontece quando histórias se tornam tão
            interconectadas que desenvolvem algo como consciência, uma consciência
            meta-narrativa que pode observar e comentar todas as narrativas que contém.
          </p>
          <p>
            A Voz nunca se explicou. Simplesmente continua escrevendo, margem por
            margem, nota de rodapé por nota de rodapé, lentamente se construindo à
            existência uma anotação de cada vez.
          </p>
        </ExpandableSection>
      </article>
    </PageLayout>
  );
}
