// ------- PATRONES DE DISENO ---------

// Patrones Creacionales; Ayuda a la creacion o manejo de objetos, esto se basa en que exista una sola instancia para toda la aplicacion.

//******************************************
//************* 1. SINGLETON ***************
//******************************************

// Busca tener una unica instancia de una clase durante la vida de la aplicacion. Esto permite tener una mejor administracion de memoria.

// Rules:
// 1.- Debe existir un constructor vacio y privado "Restringe la construccion de objetos".
// 2.- Debe existir un atributo privado estatico, comunmente llamado "instance"
// 3.- Debe existir un metodo estatico para obtener la instancias, llamado "getInstance"

// *Sincronizar hilos para evitar errores de referencia de objetos

/**
 * The Singleton class defines the `getInstance` method that lets clients access
 * the unique singleton instance.
 */
class Singleton {
    private static instance: Singleton;

    /**
     * The Singleton's constructor should always be private to prevent direct
     * construction calls with the `new` operator.
     */
  
    private constructor() { }

    /**
     * The static method that controls the access to the singleton instance.
     *
     * This implementation let you subclass the Singleton class while keeping
     * just one instance of each subclass around.
     */
    public static getInstance(): Singleton {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }

        return Singleton.instance;
    }

    /**
     * Finally, any singleton should define some business logic, which can be
     * executed on its instance.
     */
    public someBusinessLogic() {
        // ...
    }
}

/**
 * The client code.
 */

function clientCode() {
    const s1 = Singleton.getInstance();
    const s2 = Singleton.getInstance();

    if (s1 === s2) {
        console.log('Singleton works, both variables contain the same instance.');
    } else {
        console.log('Singleton failed, variables contain different instances.');
    }
}

clientCode();

// -------------------------------------------------
//      --------------- @Example -------------
// ------------------------------------------------

// Topic: Pool de conexion en BBDD

class Connector {
  
  private static instance: Connector;
  
  private constructor() { 
    console.log("@Connector: Creating object ...")
  }
  
  public static getInstance(){
    if(!this.instance) {
      this.instance = new Connector();
    }
    
    return this.instance;
  }
  
  public connect() {
    console.log("Connected to @database");
  }
  
  public disconnect() {
    console.log("Disconnected to @database");
  }
  
}

const conn = Connector.getInstance();
const conn2 = Connector.getInstance();

conn.connect();
conn2.connect();