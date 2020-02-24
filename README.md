# vemproifood-backend
Desafio Backend - #VemProiFood
O objetivo do desafio é criar um microsserviço capaz de aceitar solicitações RESTful que recebam como parâmetro o nome da cidade(city) ou as coordenadas(lat e long) e retorne uma sugestão de lista de reprodução (apenas nomes de faixa são adequados) de acordo com a temperatura atual.

## Regras do negócio

* Se a temperatura (celcius) estiver acima de 30 graus, sugira faixas para a festa (party)
* Caso a temperatura esteja entre 15 e 30 graus, sugira faixas de música pop
* Se estiver um pouco frio (entre 10 e 14 graus), sugira faixas de música rock
* Caso contrário, se estiver frio lá fora, sugere faixas de música clássica (classical)
