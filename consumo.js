// URL da API que você deseja consumir
const url = 'http://127.0.0.1:5500/index.html';

// Função para buscar dados da API
function fetchData() {
  // Usando a Fetch API para fazer uma solicitação GET
  fetch(url)
    .then(response => {
      // Verifica se a resposta é bem-sucedida
      if (!response.ok) {
        throw new Error('Erro na rede: ' + response.status);
      }
      // Converte a resposta para JSON
      return response.json();
    })
    .then(data => {
      // Manipula os dados retornados da API
      console.log(data);
    })
    .catch(error => {
      // Lida com erros de rede ou de processamento
      console.error('Erro ao buscar dados:', error);
    });
}

// Chama a função para buscar os dados
fetchData();