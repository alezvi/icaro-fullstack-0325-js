
const LIBRERIA = 'Icaro';

const book = {
    title : "Fundamentos de Javascript",
    pages : 380,
    isbn : "1234567890",
    language : "EN",
    category : "philosophy",
    reading_started_at : null,
    reading_finished_at : null,
    current_page : null,

    startReading() {
        if (this.reading_started_at == null) {
           this.reading_started_at = new Date;
           this.current_page = 1;
        }
    },

    nextPage() {
        if (this.reading_started_at != null && this.reading_finished_at == null) {
            if (this.current_page != this.pages) {
                this.current_page++;            
            } else {
                this.finishReading();
            }
        }
    },

    finishReading() {
        if (this.reading_finished_at == null) {
            this.reading_finished_at = new Date;
        }
    }
}

const reader = {
    interests : [ "music", "sport", "tech", "philosophy" ],
    language : "ES",
    read(book) {
        console.log( 'Estoy leyendo el libro ' + book.title );
        console.log( 'que tiene en total ' + book.pages + ' paginas' );
        console.log( 'que esta escrito en idioma ' + book.language );

        book.startReading();
        console.log( 'Comence la lectura ' + book.reading_started_at );

        for (let i = 1; i <= book.pages; i++) {
            console.log( 'voy leyendo la pagina ' + book.current_page );
            book.nextPage();
        }
    }
}

// El lector quiere agregar un interes a la lista
reader.interests.push('crypto');
