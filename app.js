console.log("Deu certo!")

// async --> assincrono
async function imagemApi(){
    // espera chegar a resposta --> await
    let respostaApi = await fetch('https://dog.ceo/api/breeds/image/random')
    let dadosApi = await respostaApi.json();
    document.querySelector(".img-dog").src= dadosApi.message
    console.log(respostaApi);
}
imagemApi()



function Whatsapp(){

const texto ="Olá! Vim pelo site do Pet e gostaria de agendar um horário para o meu pet."
const textoFormatado =encodeURIComponent(texto)
const url =  "https://wa.me/55449970925644?text=I" + textoFormatado;
open(url,'_blank');
console.log(url);
}
<!DOCTYPE html>
<html lang="pt-BR">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Pet JOAO GUILHERME</title>

    <link rel="stylesheet" href="style.css">

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

    <link
        href="https://fonts.googleapis.com/css2?family=Oswald:wght@200..700&display=swap"
        rel="stylesheet">
</head>

<body>

    <header>
        <div class="nome">
            <span class="n1">Animal de Estimação</span>s
            <span class="n2">Roxo</span>
        </div>

        <nav>
            <ul>
                <li>
                    <a href="index.html" class="link-menu">
                        Página Inicial
                    </a>
                </li>

                <li>
                    <a href="#sobre" class="link-menu">
                        Sobre
                    </a>
                </li>

                <li>
                    <a href="servicos.html" class="link-menu">
                        Serviços
                    </a>
                </li>

                <li>
                    <a href="#contato" class="link-menu">
                        Contato
                    </a>
                </li>
            </ul>
        </nav>

        <button class="botao-login">Entrar</button>
    </header>

    <main>

        <ul class="servicos">

            <li>
                <a
                    target="_blank"
                    href="compra.html"
                    class="lista-servicos">

                    <h2 class="h2-servicos">Banho</h2>

                    <img
                        src="img/banho.png"
                        alt="Serviço de banho para pets"
                        class="img-card">

                    <p class="preco">R$ 50,00</p>
                </a>
            </li>

            <li>
                <a
                    target="_blank"
                    href="compra.html"
                    class="lista-servicos">

                    <h2 class="h2-servicos">Ração</h2>

                    <img
                        src="img/racao.png"
                        alt="Ração para animais de estimação"
                        class="img-card">

                    <p class="preco">R$ 70,00</p>
                </a>
            </li>

            <li>
                <a
                    target="_blank"
                    href="compra.html"
                    class="lista-servicos">

                    <h2 class="h2-servicos">Vacina</h2>

                    <img
                        src="img/vacina.png"
                        alt="Vacinação de animais de estimação"
                        class="img-card">

                    <p class="preco">R$ 35,50</p>
                </a>
            </li>

        </ul>

        <button
            onclick="WhatsApp()"
            class="agenda">
            Agendar Pet
        </button>

    </main>

    <footer id="contato">
        <p>&copy; 2026 JOAO GUILHERMEVeterinário</p>
    </footer>

    <script src="app.js"></script>

</body>
</html>

