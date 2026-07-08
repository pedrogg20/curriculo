// Curriculo Web App - Interface de Edição
// Carrega os dados do currículo de data.json

// Estado da aplicação
let currentData = null;

// Elementos DOM
const app = document.getElementById('app');

// Carregar dados do JSON
async function loadData() {
  try {
    const response = await fetch('./data.json');
    if (!response.ok) {
      throw new Error('Erro ao carregar data.json');
    }
    currentData = await response.json();
    render();
  } catch (error) {
    console.error('Erro ao carregar dados:', error);
    app.innerHTML = '<p style="color: red; text-align: center;">Erro ao carregar dados do currículo. Verifique se o arquivo data.json existe.</p>';
  }
}

// Inicialização
function init() {
  loadData();
}

// Renderização principal
function render() {
  if (!currentData) return;

  app.innerHTML = '';

  // Botão de Imprimir (fixo, topo direita)
  const printButton = createPrintButton();
  app.appendChild(printButton);

  // Container principal do currículo
  const container = document.createElement('div');
  container.className = 'resume-container';

  // Sidebar (esquerda)
  const sidebar = createSidebar();
  container.appendChild(sidebar);

  // Conteúdo principal (direita)
  const main = createMainContent();
  container.appendChild(main);

  // Divisor vertical
  const divider = document.createElement('div');
  divider.className = 'vertical-divider';
  container.appendChild(divider);

  app.appendChild(container);

  // Adicionar classe 'visible' para mostrar as seções de conteúdo
  const sections = document.querySelectorAll('.content-section');
  sections.forEach(section => {
    section.classList.add('visible');
  });

  // Inicializar ícones Lucide
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }
}

// Botão de Imprimir
function createPrintButton() {
  const btn = document.createElement('button');
  btn.id = 'print-btn';
  btn.className = 'print-button';
  btn.innerHTML = `
    <i data-lucide="printer"></i>
    Imprimir Currículo
  `;
  btn.onclick = () => {
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
      section.classList.add('visible');
    });
    
    setTimeout(() => {
      window.print();
    }, 100);
  };
  return btn;
}

// Sidebar (esquerda)
function createSidebar() {
  const aside = document.createElement('aside');
  aside.className = 'sidebar';

  aside.appendChild(createNameHeader());
  aside.appendChild(createDivider());
  aside.appendChild(createContactSection());
  aside.appendChild(createDivider());
  aside.appendChild(createCompetenciasSection());

  // Idiomas (só se houver)
  const idiomasSection = createIdiomasSection();
  if (idiomasSection) {
    aside.appendChild(idiomasSection);
  }

  return aside;
}

// Conteúdo principal (direita)
function createMainContent() {
  const main = document.createElement('main');
  main.className = 'main-content';

  main.appendChild(createResumoSection());
  main.appendChild(createFormacaoSection());
  main.appendChild(createExperienciaSection());
  main.appendChild(createCursosSection());

  return main;
}

// Nome
function createNameHeader() {
  const div = document.createElement('header');
  div.className = 'name-header';
  
  const partesNome = currentData.nome.split(' ');
  const nomeHTML = partesNome.map((parte, index) => {
    if (index < partesNome.length - 1) {
      return parte + '<br>';
    }
    return parte;
  }).join('');
  
  div.innerHTML = `<h1>${nomeHTML}</h1>`;
  return div;
}

// Separador vertical
function createDivider() {
  const div = document.createElement('div');
  div.className = 'sidebar-divider';
  return div;
}

// Contato
function createContactSection() {
  const section = document.createElement('section');
  section.className = 'sidebar-section';

  let contatoHTML = `
    <h2>Contato</h2>
    <div class="contact-item"><i data-lucide="phone"></i><span>${currentData.contato.telefones[0]}</span></div>
  `;

  if (currentData.contato.telefones.length > 1) {
    contatoHTML += `<div class="contact-item"><i data-lucide="phone"></i><span>${currentData.contato.telefones[1]}</span></div>`;
  }

  contatoHTML += `
    <div class="contact-item"><i data-lucide="mail"></i><a href="mailto:${currentData.contato.email}">${currentData.contato.email}</a></div>
    <div class="contact-item"><i data-lucide="map-pin"></i><span>${currentData.contato.localizacao}</span></div>
  `;

  section.innerHTML = contatoHTML;

  return section;
}

// Competências
function createCompetenciasSection() {
  const section = document.createElement('section');
  section.className = 'sidebar-section';

  let skillsHTML = '';
  currentData.competencias.forEach(comp => {
    skillsHTML += `<div class="skill-item"><span>${comp}</span></div>`;
  });

  section.innerHTML = `
    <h2>Competências</h2>
    ${skillsHTML}
  `;

  return section;
}

// Idiomas
function createIdiomasSection() {
  const section = document.createElement('section');
  section.className = 'sidebar-section';

  if (currentData.idiomas && currentData.idiomas.length > 0) {
    section.innerHTML = `
      <h2>Idiomas</h2>
      <ul class="language-list">
        ${currentData.idiomas.map(lang => `<li>${lang}</li>`).join('')}
      </ul>
    `;
    return section;
  }
  
  return null;
}

// Resumo
function createResumoSection() {
  const section = document.createElement('section');
  section.className = 'content-section';

  section.innerHTML = `
    <h2 class="section-title"><i data-lucide="user"></i>Resumo Profissional</h2>
    <p class="summary-text">${currentData.resumo}</p>
  `;

  return section;
}

// Formação
function createFormacaoSection() {
  const section = document.createElement('section');
  section.className = 'content-section';

  let entries = currentData.formacao.map(form => `
    <div class="entry">
      <div class="entry-header">
        <span class="entry-title">${form.nivel}</span>
        <span class="entry-date">${form.conclusao}</span>
      </div>
      <div class="entry-subtitle">${form.instituicao}</div>
      ${form.local ? `<div class="entry-location">${form.local}</div>` : ''}
    </div>
  `).join('');

  section.innerHTML = `
    <h2 class="section-title"><i data-lucide="graduation-cap"></i>Formação</h2>
    ${entries}
  `;

  return section;
}

// Experiência
function createExperienciaSection() {
  const section = document.createElement('section');
  section.className = 'content-section';

  let entries = currentData.experiencia.map(exp => {
    let periodoDisplay = exp.periodo;
    let localDisplay = exp.local;
    
    if (!localDisplay && exp.periodo) {
      const partes = exp.periodo.split('|').map(p => p.trim());
      if (partes.length >= 2) {
        periodoDisplay = partes[0];
        localDisplay = partes.slice(1).join(' | ');
      }
    }
    
    return `
    <div class="entry">
      <div class="entry-header">
        <span class="entry-title">${exp.cargo} | ${exp.empresa}</span>
        <span class="entry-date">${periodoDisplay}</span>
      </div>
      ${localDisplay ? `<div class="entry-subtitle">${localDisplay}</div>` : ''}
      <ul class="entry-description">
        ${exp.descricao.map(desc => `<li>${desc}</li>`).join('')}
      </ul>
    </div>
  `}).join('');

  section.innerHTML = `
    <h2 class="section-title"><i data-lucide="briefcase"></i>Experiência Profissional</h2>
    ${entries}
  `;

  return section;
}

// Cursos
function createCursosSection() {
  const section = document.createElement('section');
  section.className = 'content-section';

  let entries = currentData.cursos.map(curso => {
    let cargaHorariaDisplay = curso.cargaHoraria ? ` | ${curso.cargaHoraria}` : '';
    return `
    <div class="course-item">
      <div class="course-name">${curso.nome}</div>
      <div class="course-hours">${curso.instituicao} | ${curso.periodo}${cargaHorariaDisplay}</div>
    </div>
  `}).join('');

  section.innerHTML = `
    <h2 class="section-title"><i data-lucide="award"></i>Cursos</h2>
    ${entries}
  `;

  return section;
}

// Inicializar
init();