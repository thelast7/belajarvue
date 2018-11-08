var app = new Vue ({
    el: '#app',
    data: {
        show: false,
        message: 'hello', //kondisi v-if="show"
        // message: 'masuk gan!'
        message2: 'belajar vuejs', //kondisi v-else="show"
        // message2: '<b><i>masuk kan gan!</i></b>'
        int1: 10,
        int2: 4,
        pengurangan: null,
        penjumlahan: null,
        meter: 0,
        kilometer: 0
    },
    computed: {
        pengurangan: function() {
            return this.int1 - this.int2;
        },
        penjumlahan: function() {
            return this.int1 + this.int2;
        }
    },
    methods: {
        penguranganProses: function() {
            return this.pengurangan = this.int1 - this.int2;
        },
        penjumlahanProses: function(int3) {
            return this.penjumlahan = this.int1 + this.int2 + int3; //int3 dimasukin nilai 10 di htmlnya
        }
    },
    watch: {
        meter: function(nilai) {
            this.meter = nilai;
            this.kilometer = nilai*1000;
        },
        kilometer: function(nilai) {
            this.meter = nilai/1000;
            this.kilometer = nilai;
        }
    }
})


var app = new Vue ({
    el: '#app2',
    data: {
        tulis:'',
        testteks:''
    }
})