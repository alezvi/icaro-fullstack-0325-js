
// Card
// -> DebitCard
// -> CreditCard

class Card {
    constructor(emitter, owner, number, expiration, code) {
        this.emitter = emitter;
        this.owner = owner;
        this.number = number;
        this.expiration = expiration;
        this.code = code;
    }
}

class CreditCard extends Card {
    constructor(emitter, owner, number, expiration, code) {
        super(emitter, owner, number, expiration, code);
        this.debt = 0;
        this.limit = 1000;
        this.available = 1000;
    }

    pay(amount, installments = 1) {
        if (amount > this.limit || amount > this.available) {
            console.error('El monto supera el limite o el monto disponible.');
        } else {
            // @todo pagar en cuotas
            this.debt = this.debt + amount;
            this.available = this.available - amount;
        }
    }
}

class DebitCard extends Card {
    constructor(emitter, owner, number, expiration, code, balance = 0) {
        super(emitter, owner, number, expiration, code);
        this.balance = balance;
    }

    pay(amount) {
        if (this.balance < amount) {
            console.error('Saldo insuficiente');
        } else {
            this.balance = this.balance - amount;
        }
    }
}

class PrepaidCard extends Card {
    constructor(emitter, owner, number, expiration, code, balance = 0) {
        super(emitter, owner, number, expiration, code);
        this.balance = balance;
    }

    pay(amount) {
        if (this.balance < amount) {
            console.error('Saldo insuficiente');
        } else {
            this.balance = this.balance - amount;
        }
    }
}


const debit = new DebitCard('HSBC', 'Cosme Fulanito', '123456789012345', '1230', '999', 0);
debit.pay(1000);

const credit = new CreditCard('HSBC', 'Cosme Fulanito', '25436237482343', '0829', '234');
credit.pay(1000, 3);

const prepaid = new PrepaidCard('HSBC', 'Cosme Fulanito', '25436237482343', '0829', '234');
prepaid.pay(1000);

class PosNet {
    pay(card, amount) {
        if (card instanceof Card) {
            card.pay(amount);
        } else {
            console.log('El tipo de tarjeta no es valido')
        }

    }
}

const terminal = new PosNet();
terminal.pay(credit, 670);
