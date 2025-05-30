// Envio do formulário respondido ao WhatsApp:
    
    document.getElementById('formulario').addEventListener('submit', function(e) {

        const nome = document.getElementById('nome').value
        const email = document.getElementById('email').value
        const servico = document.getElementById('servico').value

        const numero_celular = '5571997234881'
        const mensagem = `Olá, Samuel! Meu nome é ${nome}, meu e-mail é ${email} e eu gostaria de solicitar o seguinte serviço: ${servico}`
        const numero_da_mensagem = encodeURIComponent(mensagem);
        const url_whatsapp = `https://wa.me/${numero_celular}?text=${numero_da_mensagem}`

        window.open(url_whatsapp, '_blank')
    })