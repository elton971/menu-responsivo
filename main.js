

    function fazGet(url) {
        let request = new XMLHttpRequest();
        request.open("GET", url, false);
        //request.send();
        return request.responseText;
    }

    // const tratamento = () => {

    //     let data = fazGet("https://blog-api-mz.herokuapp.com/api/v1");
    //     let resultado = JSON.parse(data);

    //     console.log(resutado)

    // }

    var content = document.getElementById("content");
    var imagem = document.getElementById("imagem");
    var titulo = document.getElementById("titulo");
    var main =document.querySelector(".main");
   


    const tratamento = async() => {

            const url = `https://blog-api-mz.herokuapp.com/api/v1/blog/posts`;
            const dados = await fetch(url);
            const {posts} = await dados.json();
            posts.forEach(element => {
                listagemento(element);

            });    
    }
    
    const listagemento =(res) => {

        main.innerHTML += `
        <div class="titulo" id="titulo">
            <h1>`+ res.title+`<h1>
        </div>
        <div class="main__conteudo">
            <div class="content" id="content">

                <p>`+res.content+`<p>
            </div>
            <div class="imagem" id="imagem">
                 <img src="${res.imgUrl}" alt="">
            </div>
        </div>`                 
    };

    tratamento();
