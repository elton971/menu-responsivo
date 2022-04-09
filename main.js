
    var content = document.getElementById("content");
    var imagem = document.getElementById("imagem");
    var titulo = document.getElementById("titulo");
    var main =document.querySelector(".main");
   


    const tratamento = async() => {

            const url = `https://blog-api-mz.herokuapp.com/api/v1/blog/posts`;
            fetch(url).then(response => response.json()).then(data => {
                data.posts.forEach(element => {
                    listagemento(element);
                });
            
            });
    }
    
    const listagemento =(res) => {

        main.innerHTML += `
        <div class="main__content">
            <div class="titulo" id="titulo">
                <h1>`+ res.title+`<h1>
            </div>
            <div class="main__conteudo__info">
                <div class="content" id="content">
                    <p>`+res.content+`<p>
                </div>
                <div class="imagem" id="imagem">
                    <img src="${res.imgUrl}" alt="">
                </div>
            </div>
        </div>`                 
    };

    tratamento();
