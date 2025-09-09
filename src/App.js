import { useEffect } from 'react';
import './App.css';

function App() {
  // Dados dos links - podem ser facilmente alterados
  const links = [
    {
      text: 'Meu Website',
      url: 'https://meusite.com',
    },
    {
      text: 'Instagram',
      url: 'https://instagram.com/seuusuario',
    },
    {
      text: 'WhatsApp',
      url: 'https://wa.me/5511999999999',
    },
    {
      text: 'Outro Link',
      url: 'https://outro-link.com',
    }
  ];

  // Aplica a imagem de fundo ao body dinamicamente
  useEffect(() => {
    document.body.style.backgroundImage = 'url(/background.png)';
    // Limpa o estilo quando o componente é desmontado
    return () => {
      document.body.style.backgroundImage = null;
    };
  }, []);

  return (
    <div className="container">
      {/* Cabeçalho com foto e nome */}
      <header>
        <img 
          src="/profile.png" 
          alt="Foto de Perfil" 
          className="profile-pic"
        />
        <h1>@lstech.digital</h1>
        <p>A agência por trás dos Negócios que se Destacam. Mais de 4 Anos de Experiência
Agende uma Consultoria gratuita com Especialista</p>
      </header>

      {/* Lista de Links */}
      <main>
        {links.map((link, index) => (
          <a 
            key={index}
            href={link.url} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="link-button"
          >
            {link.text}
          </a>
        ))}
      </main>
    </div>
  );
}

export default App;