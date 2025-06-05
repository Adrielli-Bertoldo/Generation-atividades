import * as readline from 'readline-sync';

// Criando a classe Queue (Fila)
class Queue<T> {
    private items: T[] = [];

    enqueue(item: T): void {
        this.items.push(item);
    }

    dequeue(): T | undefined {
        return this.items.shift();
    }

    isEmpty(): boolean {
        return this.items.length === 0;
    }

    list(): T[] {
        return this.items;
    }
}

// Criando a fila de clientes
const filaClientes = new Queue<string>();

// Loop do menu
let opcao: string;

do {
    console.log("\n**************************************");
    console.log("1 - Adicionar Cliente na Fila");
    console.log("2 - Listar todos os Clientes");
    console.log("3 - Retirar Cliente da Fila");
    console.log("0 - Sair");
    console.log("**************************************");

    opcao = readline.question("Entre com a opcao desejada: ");

    switch (opcao) {
        case "1":
            const nome = readline.question("Digite o nome do cliente: ");
            filaClientes.enqueue(nome);
            console.log(`${nome} foi adicionado à fila.`);
            break;

        case "2":
            const lista = filaClientes.list();
            if (lista.length === 0) {
                console.log("A fila está vazia.");
            } else {
                console.log("Clientes na fila:");
                lista.forEach((cliente, i) => {
                    console.log(`${i + 1}. ${cliente}`);
                });
            }
            break;

        case "3":
            if (filaClientes.isEmpty()) {
                console.log("A fila está vazia. Ninguém para retirar.");
            } else {
                const retirado = filaClientes.dequeue();
                console.log(`Cliente ${retirado} foi chamado.`);
            }
            break;

        case "0":
            console.log("Programa finalizado.");
            break;

        default:
            console.log("Opção inválida.");
    }

} while (opcao !== "0");
