/* ==========================================================================
   EXERCÍCIO 1: FECHAMENTO DE VENDAS
   
   Uma cafeteria precisa apurar os números do dia.
   
   Dados:
   - Preço do café: 8.50 | Quantidade vendida: 42
   - Preço do bolo: 12.00 | Quantidade vendida: 18
   - Taxa operacional: 15.00
   - Clientes atendidos: 30
   - Total de cookies produzidos: 125 | Capacidade da caixa: 6 unidades

   Fórmulas para os cálculos:
   1. Faturamento Bruto = (preço café * quantidade) + (preço bolo * quantidade)
   2. Faturamento Líquido = faturamento bruto - taxa operacional
   3. Ticket Médio = faturamento bruto / total de clientes atendidos
   4. Sobra de Cookies = resto da divisão entre total de cookies e a capacidade da caixa

   Calcule e exiba os 4 resultados no console.
   ========================================================================== */

let cafe = {
   "preco": 8.50 ,
   "quantidade":42
}
let bolo={
   "preco":12.00,
   "quantidae":18
}
let taxaOperacional = 15.00;
let clientesAtendidos = 30;
let cookies = {
   "total": 125,
   "capacidade": 6
}
let faturamentoBruto = ((cafe.preco * cafe.quantidade) + (bolo.preco * bolo.quantidae))
console.log ("Faturamento Bruto: R$",faturamentoBruto)
let faturamentoLiquido = (faturamentoBruto - taxaOperacional)
console.log ("Faturamento Liquido: R$",faturamentoLiquido)
let tikcetMedio = faturamentoBruto / clientesAtendidos
console.log ("Ticket Médio: R$",tikcetMedio)
let sobraCookies = cookies.total %  6
console.log ("Sobra de Cookies:",sobraCookies)
/* ==========================================================================
   EXERCÍCIO 2: VALIDAÇÃO DE CADASTRO E COMPRA
   
   Um sistema precisa validar os dados de um pedido gerando apenas true ou false.
   (Não utilize if/else).

   Dados:
   - Idade informada: 17
   - Código digitado no formulário: "100" (texto)
   - Código registrado no banco: 100 (número)
   - Saldo disponível: 250.00
   - Valor da compra: 250.00

   Regras a verificar e exibir no console:
   1. O cliente atingiu a maioridade civil (18 anos)?
   2. O código digitado confere com o banco considerando apenas o valor?
   3. O código digitado confere com o banco considerando valor e tipo de dado?
   4. O tipo do dado digitado difere do tipo esperado no banco?
   5. O saldo do cliente cobre o valor da compra?
   ========================================================================== */
console.log("Atividade 2")
let idade = 17
let formulário = "100"
let banco = 100
let saldoDisponivel = 250.00
let valorCompra = 250.00

const maiorIdade = 17 >= 18
console.log ("O cliente atingiu a maioridade civil:",maiorIdade)

const codigoValor = formulário == banco
console.log ("O código digitado confere com o banco considerando apenas o valor:", codigoValor)

const codigoValorDado = formulário === banco
console.log("O código digitado confere com o banco considerando valor e tipo de dado:", codigoValorDado)

const codigoDifere = formulário !== banco
console.log("O tipo do dado digitado difere do tipo esperado no banco:",codigoDifere)

const saldoCompra = saldoDisponivel == valorCompra
console.log("O saldo do cliente cobre o valor da compra:",saldoCompra)

/* ==========================================================================
   EXERCÍCIO 3: CONCESSÃO DE BENEFÍCIOS
   
   Avalie a liberação de benefícios para o cliente gerando apenas true ou false.
   (Não utilize if/else).

   Dados:
   - Valor da compra: 220
   - Cliente é assinante premium: falso
   - Possui cupom promocional: verdadeiro
   - Endereço possui restrição de entrega: falso
   - Cliente é estudante: verdadeiro
   - Idade: 22

   Regras a verificar e exibir no console:
   1. Frete grátis: concedido para compras a partir de 200 reais ou para
      assinantes premium, desde que o endereço não tenha restrição de entrega.
   2. Desconto universitário: concedido para estudantes com até 29 anos de idade.
   3. Acesso à área VIP: liberado para assinantes premium, ou para compras a
      partir de 300 reais que possuam cupom promocional.
   ========================================================================== */
   let compraValor = 220
   let assinantePremium = false
   let cupom = true
   let restriçãoEntrega = false
   let clienteEstudante = true
   let idadeEstudante = 22

   const freteGratis = compraValor >= 200 || assinantePremium === true && restriçãoEntrega
   console.log("Frete grátis: concedido para compras a partir de 200 reais ou para assinantes premium \n" +       
      "desde que o endereço não tenha restrição de entrega:",freteGratis)

   const descontoUniversitario = clienteEstudante <= 29
   console.log("Desconto universitário: concedido para estudantes com até 29 anos de idade:", descontoUniversitario)

   const areaVip = (assinantePremium || compraValor >= 300) && cupom
   console.log("Acesso à área VIP: liberado para assinantes premium, ou para compras a partir de 300 reais que possuam cupom promocional.",areaVip)