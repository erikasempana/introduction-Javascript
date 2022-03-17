const profile = {
    name: "Bagus",
    sister: {
        sister1: "Anna",
        sister2: "Bella"
    }
}

const {sister2, sister1: saudaraPerempuan1} = profile.sister
console.log(saudaraPerempuan1)
//console.log(sister2)