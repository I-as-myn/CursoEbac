$(document).ready(function(){
    console.log(document.querySelector('header button'))
    console.log($('#botao-cancelar'))
    
    document.querySelector('header button').addEventListener('click', function(){
    
    })
    
        $('header button').click(function(){
            $('form').slideDown();
        })
    
        $('#botao-cancelar').click(function(){
            $('form').slideUp();
        })


        $('form').on('submit',function(e){
        e.preventDefault();
        const nomeNovaTarefa = $('#nova-tarefa').val().trim();
        const novaAtividade = $('<li></li>');
        $('<span> </span>').text(nomeNovaTarefa).appendTo(novaAtividade); 
        $(novaAtividade).appendTo('ul');
            $(novaAtividade).fadeIn(0);
            $('#nova-tarefa').val('')
})
        $('ul').on('click', 'li', function() {
        $(this).toggleClass('finalizada');
});


})