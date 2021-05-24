 
 
 
 dniGenerator() {
    let dni = (Math.floor(Math.random() * 4) + 1).toString();  // primer digito, solo para asegurar que sea >0 y <=n, (<=4 en este caso)
    for (let j = 0; j < 7; j++) {
      dni += Math.floor(Math.random() * 9).toString();
    }
    const multiples = [3, 2, 7, 6, 5, 4, 3, 2];
    const dcontrols = {
      numbers: [6, 7, 8, 9, 0, 1, 1, 2, 3, 4, 5],
      letters: ['K', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'],
    };
    let sum = 0;
    for (let i = 0; i < 8; i++) {
      sum += Number(dni[i]) * multiples[i];
    }
    let key = 11 - (sum % 11);
    let index = key === 11 ? 0 : key;
    let random = Math.random();
    let dniVerificador =  (random < 0.5)? dcontrols.letters[index]: dcontrols.numbers[index];
    return dni.toString() + dniVerificador; //lo retorna sin guión.
  }

validarDni(data) {
    const dni = data.replace('-', '').trim().toUpperCase();
    if (!dni || dni.length < 9) {
      console.log("El numero es muy corto: "+dni);
      return false;
    }
    const multiples = [3, 2, 7, 6, 5, 4, 3, 2];
    const dcontrols = {
      numbers: [6, 7, 8, 9, 0, 1, 1, 2, 3, 4, 5],
      letters: ['K', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'],
    };
    const numdni = dni.substring(0, dni.length - 1).split('');
    const dcontrol = dni.substring(dni.length - 1);
    const dsum = numdni.reduce((acc, digit, index) => {
      acc += digit * multiples[index];
      return acc;
    }, 0);
    const key = 11 - (dsum % 11);
    const index = key === 11 ? 0 : key;
    console.log("testin: "+ key);
    console.log("total suma real: "+dsum);
    if (/^\d+$/.test(dni)) {
      console.log(
        dcontrols.numbers[index] === parseInt(dcontrol, 10)
      );
      return dcontrols.numbers[index] === parseInt(dcontrol, 10);
    }
    return dcontrols.letters[index] === dcontrol;
  }
