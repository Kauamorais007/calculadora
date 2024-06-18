let n1;
let n2;
let operador;
console.log('Digite qual operação voce deseja:\n\t1 - Soma\n\t2 - Subtração\n\t3 - Divisão\n\t4 - Multiplicação')

process.stdin.on('data', function(data) {
    let entrada_usuario = data.toString().trim();
  
    if (!operador) {
      operador = Number(entrada_usuario);
  
      switch (operador) {
        case 1:
          console.log('Você escolheu: Soma');
          
          break;
        case 2:
          console.log('Você escolheu: Subtração');
        
          break;
        case 3:
          console.log('Você escolheu: Divisão');
         
          break;
        case 4:
          console.log('Você escolheu: Multiplicação');
      
          break;
        default:
          console.log('Opção inválida.');
      }
  
     /*  console.log('Digite o primeiro número:');
      process.stdin.once('data', function(data) {
        n1 = Number(data.toString().trim());
        console.log('Digite o segundo número:');
        process.stdin.once('data', function(data) {
          n2 = Number(data.toString().trim());
        
        });
      }); */
    }
  });