

        function loadcursosmaisprocurados() {
                fetch('cursos.json') 
                .then(response => response.json())
                .then(data => { 
                    const contcursos = document.getElementById('containercursosp');
                    const todosCursosmaisprocurados = [...data.cursosMaisProcurados];
                    todosCursosmaisprocurados.forEach(curso => {
                        const card = document.createElement("div");
                        card.classList.add("card");
            
                        const img = document.createElement("img");
                        img.src = curso.imagem;
                        img.alt = curso.nome;
                        img.classList.add("imgpopu");
            
                        const titulo = document.createElement("h2");
                        titulo.textContent = curso.nome;
            
                        const descricaocurso = document.createElement("p");
                        descricaocurso.textContent = curso.descricao;
            
                        const valorcurso = document.createElement("p");
                        valorcurso.textContent = curso.custoMensal;
            
                        card.appendChild(img);
                        card.appendChild(titulo);
                        card.appendChild(descricaocurso);
                        card.appendChild(valorcurso);
                        contcursos.appendChild(card);
                    });
                })
                .catch(error => console.error('Erro ao carregar o arquivo!', error));
            }
            

            loadcursosmaisprocurados(); 





        function loadcursosmaisrecentes() {
            fetch('cursos.json') 
            .then(response => response.json())
            .then(data => { 
                const contcursosr = document.getElementById('containeraddrecentes');
                const todosCursosmaisrecentes = [...data.cursosMaisRecentes];
                todosCursosmaisrecentes.forEach(curso => {
                    const carddois = document.createElement("div");
                    carddois.classList.add("carddois");
        
                    const img = document.createElement("img");
                    img.src = curso.imagem;
                    img.alt = curso.nome;
                    img.classList.add("imgpopu");
                   
        
                    const titulo = document.createElement("h2");
                    titulo.textContent = curso.nome;
        
                    const descricaocurso = document.createElement("p");
                    descricaocurso.textContent = curso.descricao;
        
                    const valorcurso = document.createElement("p");
                    valorcurso.textContent = curso.custoMensal;
        
                    carddois.appendChild(img);
                    carddois.appendChild(titulo);
                    carddois.appendChild(descricaocurso);
                    carddois.appendChild(valorcurso);
                    contcursosr.appendChild(carddois);
                });
            })
            .catch(error => console.error('Erro ao carregar o arquivo!', error));
        }
            

            loadcursosmaisrecentes();

            function loadfeedbackalunos() {
                fetch('cursos.json') 
                .then(response => response.json())
                .then(data => { 
                    const contfeed = document.getElementById('containerfeedbacks');
                    const todososfeedbacks = [...data.feedbacks];
                    todososfeedbacks.forEach(feedback => {
                        const cardf = document.createElement("div");
                        cardf.classList.add("cardtres");
            
                        const titulofeedback = document.createElement("h2");
                        titulofeedback.textContent = feedback.titulo;
                        const textoaluno = document.createElement("p");
                        textoaluno.textContent = feedback.texto;
                        const nomealuno = document.createElement("h3");
                        nomealuno.textContent = feedback.nome;
                        const profissaoaluno = document.createElement("h3");
                        profissaoaluno.textContent = feedback.profissao;
                        
                        cardf.appendChild(titulofeedback);
                        cardf.appendChild(textoaluno);
                        cardf.appendChild(nomealuno);
                        cardf.appendChild(profissaoaluno);
                        contfeed.appendChild(cardf);
                    });
                })
                .catch(error => console.error('Erro ao carregar o arquivo!', error));
            }
            
            loadfeedbackalunos();

            function artigoBlogsDidatica() {
                fetch('cursos.json')
                .then(response => response.json())
                .then(data => {
                    const contartigos = document.getElementById('container_artigos');
                    data.artigos.forEach(artigo => {
                        const cardartigo = document.createElement("div");
                        cardartigo.classList.add("cardquatro");
            
                        const imgartigo = document.createElement("img");
                        imgartigo.classList.add("imgartigo");
                        imgartigo.src = artigo.caminho_img;
                        imgartigo.alt = artigo.titulo;
                        imgartigo.classList.add("imgpopu");
            
                        const categoriaartigo = document.createElement("h2");
                        categoriaartigo.textContent = artigo.categoria;
            
                        const tituloartigo = document.createElement("h2");
                        tituloartigo.textContent = artigo.titulo;
            
                        const dateartigo = document.createElement("h5");
                        dateartigo.textContent = artigo.data_publicacao; // Corrected property name
            
                        const descartigo = document.createElement("p");
                        descartigo.textContent = artigo.descricao;
            
                       
                        cardartigo.appendChild(imgartigo);
                        cardartigo.appendChild(categoriaartigo);
                        cardartigo.appendChild(tituloartigo);
                        cardartigo.appendChild(dateartigo);
                        cardartigo.appendChild(descartigo);
            
                        contartigos.appendChild(cardartigo);
                    });
                })
                .catch(error => console.error('Erro ao carregar o arquivo!', error));
            }
            
            artigoBlogsDidatica();
          