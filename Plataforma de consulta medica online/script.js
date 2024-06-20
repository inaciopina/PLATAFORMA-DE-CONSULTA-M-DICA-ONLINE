// Simulação de busca de dados (substitua por requisições reais)
const especialidades = ["Clínica Geral", "Cardiologia", "Dermatologia"];
const medicos = {
    "Clínica Geral": ["Dr. Silva", "Dra. Oliveira"],
    "Cardiologia": ["Dr. Souza", "Dra. Santos"],
    "Dermatologia": ["Dra. Pereira", "Dr. Costa"],
};
const horarios = {
    "Dr. Silva": ["09:00", "10:00", "11:00"],
    "Dra. Oliveira": ["13:00", "14:00", "15:00"],
    "Dr. Souza": ["08:00", "09:00", "10:00"],
    "Dra. Santos": ["14:00", "15:00", "16:00"],
    "Dra. Pereira": ["11:00", "12:00", "13:00"],
    "Dr. Costa": ["15:00", "16:00"],
};

// Simulando a conexão com o médico (sem login)
setTimeout(() => {
    document.getElementById('sala-espera').style.display = 'none';
    document.getElementById('video-consulta').style.display = 'block';
  }, 3000); // Tempo de espera simulado (3 segundos)
  
  // Funcionalidades de videochamada e chat (implementação básica necessária)
  
  //integraçao prontuario
  function exibirConsultaPaciente() {
    esconderTelas();
    document.getElementById('consulta-paciente').classList.add('active');
}

function exibirHistoricoProntuario() {
    esconderTelas();
    document.getElementById('historico-prontuario').classList.add('active');
}

function exibirComunicacaoProfissional() {
    esconderTelas();
    document.getElementById('comunicacao-profissional').classList.add('active');
}

function esconderTelas() {
    const telas = document.querySelectorAll('.tela');
    telas.forEach(tela => tela.classList.remove('active'));
}

  