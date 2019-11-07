describe('#sumar', function () { //Nombre de la prueba
    it('debe devolver la suma de los dos valores introducidos', function () {
        //Con it, describimos lo que hace la prueba
        expect(sumar(1, 1)).to.equal(2);
        //expect nos servirá para indicar el caso de la prueba

    });
});