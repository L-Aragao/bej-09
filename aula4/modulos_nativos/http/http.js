let http = require("http");
let url  = require("url");

http.createServer(function (req, res){
    let urlparsed = url.parse(req.url, true)
    console.log(urlparsed.pathname)
    if(urlparsed.pathname.includes('alunos')){
        if(urlparsed.search){
            if(urlparsed.query.nome == 'luiz'){
                res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
                res.write("[{'nome': 'luiz'}]");//simulando o retorno de um banco de dados
            }else{
                res.writeHead(404, {'Content-Type': 'text/html; charset=utf-8'});
                res.write("[{'error': 'aluno não encontrado'}]");//simulando o retorno de um banco de dados
            }
        
        }else{
            res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
            res.write("[{'nome': 'luiz'}, {'nome': 'mario'}, {'nome': 'toad'}]");//simulando o retorno de um banco de dados
        }
        res.end("\nrequisicao feita com sucesso")
    }
    else{
        res.writeHead(400, {'Content-Type': 'text/html; charset=utf-8'});
        res.end("[{'error': 'bad request'}]") 
    }
}).listen(8080);

