// En este ejercicio debéis crear una clase "Person" con las propiedades privadas "name" y "age" y la propiedad pública "saySomething". Añadid también el método "myNameIs" para que saque por consola el valor de la propidad "name".

//En su constructor, debéis dar un valor a cada propiedad (sin contar "myNameIs") teniendo claro que sus tipos son cadena de texto, número y función que recibe cadena y no devuelve nada(es el tipo de la funcion), respectivamente.

// Luego, cread una clase "Developer" que herede de "Person" y que tenga la propiedad pública "bestLanguage". El tipo de la propiedad "bestLanguage" es función que recibe cadena y no devuelve nada.

// En el constructor de "Developer", debéis añadir los parámetros al constructor de la clase padre (super) y setear la propiedad "bestLanguage" sabiendo que es de tipo función que recibe una cadena.

// Cuando acabéis, debéis descomentar las siguientes líneas de código y colocarlas despúes de todo lo que añadáis:

// const developer = new Developer(
//   "pedro",
//   35,
//   something => console.log(something),
//   language => console.log(language + " is the best language")
// );

// developer.myNameIs();
// developer.saySomething('algo');
// developer.bestLanguage('Javascript');

class Person{

  private name: string;
  private age : number;
  public saySomething : (ARG0:string) => void; //propiedad que se le seteara un metodo, dentro tendra una funcion de typo function
  //buscar como darle el tipo a una funcion

  constructor(name:string, age:number, func:(ARG0:string)=>void){
    this.name = name;
    this.age = age;
    this.saySomething = func;
  }

  myNameIs():void{
    console.log(this.name);
  }

}

class Developer extends Person{
  public bestLanguage:(ARG0: string)=>void;

  constructor(name:string,age:number,saySomething:(ARG0:string) => void,bestLanguage:(ARG0: string)=>void ){
    super(name, age, saySomething),
    this.bestLanguage = bestLanguage;
    
  }
 
}

const developer = new Developer(
  "pedro",
  35,
  something => console.log(something),
  language => console.log(language + " is the best language")
);

developer.myNameIs();
developer.saySomething('algo');
developer.bestLanguage('Javascript');