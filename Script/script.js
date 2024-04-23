

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
            

            loadcursosmaisprocurados() 





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
                    todososfeedbacks.forEach(curso => {
                        const cardf = document.createElement("div");
                        cardf.classList.add("cardtres");
            
                        const titulofeedback = document.createElement("h2");
                        titulofeedback.textContent = curso.titulo;
                        const textoaluno = document.createElement("p");
                        textoaluno.textContent = curso.texto;
                        const nomealuno = document.createElement("p");
                        nomealuno.textContent = curso.nome;
                        
            
            
                    
            
                        cardf.appendChild(titulofeedback);
                        cardf.appendChild(textoaluno);
                        cardf.appendChild(nomealuno);
                        contfeed.appendChild(cardf);
                    });
                })
                .catch(error => console.error('Erro ao carregar o arquivo!', error));
            }
            
            loadfeedbackalunos()