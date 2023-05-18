import Jatekter from "../Jatekter.js"

QUnit.module('játéktér ellenőrzés metódusaihoz tartozó tagfüggvények létezésének tesztelése', function(hooks) {
    let jatekter;
    hooks.before(() => {
        jatekter = new Jatekter();
    })

    QUnit.test('létezik e az ellenőrzés', function(assert) {
      assert.ok(jatekter.ellenorzes, "Létezik e");
    });
    QUnit.test('függvény e az ellenőrzés', function(assert) {
        assert.ok(typeof(jatekter.ellenorzes) === "function", "Függvény e");
    });
});

QUnit.module('játéktér getVisszintes metódus tesztelése', function(hooks) {
    let jatekter;
    hooks.before(() => {
        jatekter = new Jatekter();
    })

    QUnit.test('getVisszintes ures', function(assert) {
        jatekter.lista = [" ", " ", " ", " ", " ", " ", " ", " ", " "];
      assert.equal(jatekter.getVizszintes(), "   @   @   @");
    });
    QUnit.test('getVisszintes 3X', function(assert) {
        jatekter.lista = ["X", "X", "X", " ", " ", " ", " ", " ", " "];
        assert.equal(jatekter.getVizszintes(), "XXX@   @   @");
    });
    QUnit.test('getVisszintes 3O', function(assert) {
        jatekter.lista = ["O", "X", "O", "O", "O", "O", " ", " ", " "];
      assert.equal(jatekter.getVizszintes(), "OXO@OOO@   @");
    });
    QUnit.test('getVisszintes véletlen elrend de nincs nyerés', function(assert) {
        jatekter.lista = ["O", "X", "O", " ", "X", "O", "X", "O", " "];
      assert.equal(jatekter.getVizszintes(), "OXO@ XO@XO @");
    });
    QUnit.test('getVisszintes minden ki van töltve de nincs nyerés', function(assert) {
        jatekter.lista = ["O", "X", "O", "O", "X", "O", "X", "O", "X"];
      assert.equal(jatekter.getVizszintes(), "OXO@OXO@XOX@");
    });
    QUnit.test('getVisszintes minden ki van töltve de van nyerés', function(assert) {
        jatekter.lista = ["O", "X", "O", "O", "O", "O", "X", "O", "X"];
      assert.equal(jatekter.getVizszintes(), "OXO@OOO@XOX@");
    });
    QUnit.test('getVisszintes utlso oszlopban és a kovi sor elejen 2 elem', function(assert) {
        jatekter.lista = ["O", "X", "O", " ", "O", "O", "O", " ", " "];
      assert.equal(jatekter.getVizszintes(), "OXO@ OO@O  @");
    });
    QUnit.test('getVisszintes utlso oszlopban és a kovi sor elejen 2 elem 2.0', function(assert) {
        jatekter.lista = ["O", "X", "O", " ", " ", "O", "O", "O", " "];
      assert.equal(jatekter.getVizszintes(), "OXO@  O@OO @");
    });
    QUnit.test('getVisszintes utlso oszlopban és a kovi sor elejen 2 elem 3.0', function(assert) {
        jatekter.lista = ["O", "X", "O", " ", "O", "X", "O", " ", " "];
      assert.equal(jatekter.getVizszintes(), "OXO@ OX@O  @");
    });
});

QUnit.module.only('játéktér getFuggoleges metódus tesztelése', function(hooks) {
    let jatekter;
    hooks.before(() => {
        jatekter = new Jatekter();
    })

    QUnit.test('getFuggoleges ures', function(assert) {
        jatekter.lista = [" ", " ", " ", " ", " ", " ", " ", " ", " "];
      assert.equal(jatekter.getFuggoleges(), "   @   @   @");
    });
    QUnit.test('getFuggoleges 3X', function(assert) {
        jatekter.lista = ["X", " ", " ", "X", " ", " ", "X", " ", " "];
        assert.equal(jatekter.getFuggoleges(), "XXX@   @   @");
    });
    QUnit.test('getFuggoleges 3O', function(assert) {
        jatekter.lista = ["O", " ", " ", "O", " ", " ", "O", " ", " "];
        assert.equal(jatekter.getFuggoleges(), "OOO@   @   @");
    });
    QUnit.test('getFuggoleges véletlen elrend de nincs nyerés', function(assert) {
        jatekter.lista = ["O", "X", "O", " ", "X", "O", "X", "O", " "];
      assert.equal(jatekter.getFuggoleges(), "O X@XXO@OO @");
    });
    QUnit.test('getFuggoleges minden ki van töltve de nincs nyerés', function(assert) {
        jatekter.lista = ["O", "X", "O", "O", "X", "O", "X", "O", "X"];
      assert.equal(jatekter.getFuggoleges(), "OOX@XXO@OOX@");
    });
    QUnit.test('getFuggoleges minden ki van töltve de van nyerés', function(assert) {
        jatekter.lista = ["O", "X", "O", "O", "X", "O", "X", "O", "X"];
      assert.equal(jatekter.getFuggoleges(), "OOX@XXO@OOX@");
    });
    QUnit.test('getFuggoleges utlso oszlopban és a kovi sor elejen 2 elem', function(assert) {
        jatekter.lista = ["O", "X", "O", " ", "O", "O", "O", " ", " "];
      assert.equal(jatekter.getFuggoleges(), "O O@XO @OO @");
    });
    QUnit.test('getFuggoleges utlso oszlopban és a kovi sor elejen 2 elem 2.0', function(assert) {
        jatekter.lista = ["O", "X", "O", " ", " ", "O", "O", "O", " "];
      assert.equal(jatekter.getFuggoleges(), "O O@X O@OO @");
    });
    QUnit.test('getFuggoleges utlso oszlopban és a kovi sor elejen 2 elem 3.0', function(assert) {
        jatekter.lista = ["O", "X", "X", " ", "X", "O", "X", "X", " "];
      assert.equal(jatekter.getFuggoleges(), "O X@XXX@XO @");
    });
});