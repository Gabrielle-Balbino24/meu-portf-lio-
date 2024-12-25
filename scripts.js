// Função para ativar o efeito de animação de rolagem com efeitos aprimorados
window.addEventListener("scroll", function() {
  const sections = document.querySelectorAll("section");
  const scrollPosition = window.scrollY + window.innerHeight;

  sections.forEach(section => {
      if (section.offsetTop < scrollPosition) {
          section.classList.add("visible");
          section.classList.remove("hidden");
      } else {
          section.classList.remove("visible");
          section.classList.add("hidden");
      }
  });
});

// Função para exibir/ocultar o menu de navegação ao rolar a página
let lastScrollTop = 0;
const header = document.querySelector("header");

window.addEventListener("scroll", function() {
  const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
  if (currentScroll > lastScrollTop) {
      // Rolando para baixo
      header.style.top = "-100px"; // Oculta o cabeçalho ao rolar para baixo
  } else {
      // Rolando para cima
      header.style.top = "0"; // Exibe o cabeçalho ao rolar para cima
  }
  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Para evitar valores negativos
});

// Função para validação do formulário de contato com validação de email
document.querySelector("form").addEventListener("submit", function(event) {
  const name = document.querySelector("input[name='name']").value;
  const email = document.querySelector("input[name='email']").value;
  const message = document.querySelector("textarea[name='message']").value;

  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

  if (!name || !email || !message) {
      alert("Por favor, preencha todos os campos.");
      event.preventDefault(); // Impede o envio do formulário
  } else if (!emailPattern.test(email)) {
      alert("Por favor, insira um e-mail válido.");
      event.preventDefault(); // Impede o envio do formulário
  } else {
      alert("Mensagem enviada com sucesso!");
  }
});

// Função para scroll suave (quando o usuário clicar nos links de navegação)
const navLinks = document.querySelectorAll("header nav ul li a");

navLinks.forEach(link => {
  link.addEventListener("click", function(event) {
      event.preventDefault();
      const targetId = this.getAttribute("href").substring(1); // Remove o "#" do href
      const targetElement = document.getElementById(targetId);

      window.scrollTo({
          top: targetElement.offsetTop - header.offsetHeight,
          behavior: "smooth"
      });
  });
});

// Função para adicionar e remover a classe 'visible' das seções ao rolar
document.addEventListener("DOMContentLoaded", function() {
  const sections = document.querySelectorAll("section");
  sections.forEach(section => section.classList.add("hidden"));
});

// Adicionando a classe 'visible' com animação aos elementos
const style = document.createElement('style');
style.innerHTML = `
  section.hidden {
      opacity: 0;
      transform: translateY(50px);
      transition: opacity 0.6s, transform 0.6s;
  }
  section.visible {
      opacity: 1;
      transform: translateY(0);
  }
  /* Animação de fade-in do cabeçalho */
  header {
      opacity: 0;
      transition: opacity 0.5s ease-in-out;
  }
  header.visible {
      opacity: 1;
  }
`;
document.head.appendChild(style);

// Função para animar o cabeçalho ao carregar a página
document.addEventListener("DOMContentLoaded", function() {
  setTimeout(() => {
      header.classList.add("visible");
  }, 500); // Exibe o cabeçalho após 500ms
});

// Função para mostrar um alerta de boas-vindas na primeira visita
if (!localStorage.getItem('visited')) {
  setTimeout(() => {
      alert("Bem-vindo ao meu site!");
      localStorage.setItem('visited', 'true');
  }, 1000); // Mostra o alerta após 1 segundo
}