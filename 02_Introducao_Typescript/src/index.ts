import Endereco from "./Endereco";
import Usuario from "./Usuario";
import { Sexo } from "./Utils";

let endereco1: Endereco = new Endereco("Rua Saldanha Marinho", 1687);
let endereco2: Endereco = new Endereco("Rua Capitão Rocha", 649);
let endereco3: Endereco = new Endereco("Rua Quinze de Novembro", 1256);

endereco1.cep = 85035160;
endereco1.bairro = "Dos Estados";
endereco1.cidade = "Guarapuava";

endereco2.cep = 85035170;
endereco2.bairro = "Vila Carli";
endereco2.cidade = "Guarapuava";

endereco3.cep = 85010000;
endereco3.bairro = "Centro";
endereco3.cidade = "Guarapuava";

let usuario1: Usuario = new Usuario("Jacob Peralta", 10235748932, endereco1);
let usuario2: Usuario = new Usuario("Amy Santiago", 25876898132, endereco2);
let usuario3: Usuario = new Usuario("Charles Boyle", 19874246378, endereco3);

usuario1.rg = 128527596;
usuario1.sexo = Sexo.Masculino;

usuario2.rg = 654874562;
usuario2.sexo = Sexo.Feminino;

usuario3.rg = 246587415;
usuario3.sexo = Sexo.NaoDefinido;

console.log(usuario1);
console.log(usuario2);
console.log(usuario3);
