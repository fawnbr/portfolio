import { MdKeyboardArrowDown } from 'react-icons/md';
import { DiJsBadge, DiCss3, DiHtml5, DiReact, DiSass, DiGit, DiAngularSimple, DiDjango, DiPython } from "react-icons/di";
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import './styles.scss';
import { Slides } from '../Slides';
import { sliderData } from '../../utils/sliderData';

export function Main() {
  return (
    <main>
      <>
        <section className="banner">
          <div className="layer"></div>
          <div className="content">
            <div className="contentWrapper">
              <span>Olá, eu sou o</span>
              <h2>Lucas Vinícius Góis Nogueira</h2>
              <span>Desenvolvedor Web</span>
              <div className="socials">
                <a href="https://github.com/fawnbr" target="_blank" rel="noreferrer">
                  <AiFillGithub />
                </a>
                <a href="https://www.linkedin.com/in/lucas-vinícius-14b575153/" target="_blank" rel="noreferrer"><AiFillLinkedin /></a>
              </div>
            </div>
          </div>

          <div>
            <MdKeyboardArrowDown className="expand" />
          </div>
        </section>
        <section className="whoami " id="whoami">
          <h2>Quem sou?</h2>
          <div className="contentWhoami">
            <div className="circle"></div>
            <p>Meu nome é Lucas, cursei Química por 2 anos e através dos jogos tive meu contato com a programação, até que resolvi trocar de carreira. Atualmente faço graduação em Tecnologia da Informação na Universidade Federal do Rio Grande do Norte e estudo tecnologias front-end aplicando em projetos pessoais. Aprendo idiomas por hobbie e adoro desafios!</p>
          </div>
        </section>
        <section className="knowledges" id="knowledges">
          <h2>Conhecimentos</h2>
          <div className="contentKnowledges">
            <div className="exp">
              <h3>Tenho experiência com:</h3>
              <div>
                <DiJsBadge color="#f7df1e" />
                <DiCss3 color="#396dc0" />
                <DiHtml5 color="#e33e00" />
                <DiReact color="#61dafb" />
                <DiSass color="#cd6799" />
                <DiGit color="#f05033" />
              </div>
            </div>
            <div className="studying">
              <h3>Atualmente estudando:</h3>
              <div>
                <DiReact color="#61dafb" />
              </div>
            </div>
            <div className="interest">
              <h3>Tenho interesse em:</h3>
              <div>
                <DiAngularSimple color="#c3002f" />
                <DiPython color="#002750" />
                <DiDjango color="#103e2e" />
              </div>
            </div>
          </div>
        </section>

        <section className="projects" id="projects">
          <h2>Projetos</h2>
          <Slides slides={sliderData} />
        </section>
      </>
    </main>
  );
}
