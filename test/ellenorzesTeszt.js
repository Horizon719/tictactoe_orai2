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
        jatekter.lista = ["X", "X", "X", "O", " ", "O", " ", " ", " "];
        assert.equal(jatekter.getVizszintes(), "XXX@O O@   @");
    });
    QUnit.test('getVisszintes 3O', function(assert) {
        jatekter.lista = ["O", "X", "X", "O", "O", "O", " ", " ", " "];
      assert.equal(jatekter.getVizszintes(), "OXX@OOO@   @");
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
        jatekter.lista = ["O", "X", "X", "O", "O", "O", "X", "O", "X"];
      assert.equal(jatekter.getVizszintes(), "OXX@OOO@XOX@");
    });
    QUnit.test('getVisszintes utlso oszlopban és a kovi sor elejen 2 elem', function(assert) {
        jatekter.lista = ["O", "X", "X", " ", "O", "O", "O", " ", "X"];
      assert.equal(jatekter.getVizszintes(), "OXX@ OO@O X@");
    });
    QUnit.test('getVisszintes utlso oszlopban és a kovi sor elejen 2 elem 2.0', function(assert) {
        jatekter.lista = ["O", "X", "X", " ", " ", "O", "O", "O", "X"];
      assert.equal(jatekter.getVizszintes(), "OXX@  O@OOX@");
    });
});

QUnit.module('játéktér getFuggoleges metódus tesztelése', function(hooks) {
    let jatekter;
    hooks.before(() => {
        jatekter = new Jatekter();
    })

    QUnit.test('getFuggoleges ures', function(assert) {
        jatekter.lista = [" ", " ", " ", " ", " ", " ", " ", " ", " "];
      assert.equal(jatekter.getFuggoleges(), "   @   @   @");
    });
    QUnit.test('getFuggoleges 3X', function(assert) {
        jatekter.lista = ["X", "O", " ", "X", "O", " ", "X", " ", " "];
        assert.equal(jatekter.getFuggoleges(), "XXX@OO @   @");
    });
    QUnit.test('getFuggoleges 3O', function(assert) {
        jatekter.lista = ["O", "X", " ", "O", "X", " ", "O", " ", " "];
        assert.equal(jatekter.getFuggoleges(), "OOO@XX @   @");
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
        jatekter.lista = ["O", "X", "O", "O", "X", "X", "O", "O", "X"];
      assert.equal(jatekter.getFuggoleges(), "OOO@XXO@OXX@");
    });
    QUnit.test('getFuggoleges utlso oszlopban és a kovi sor elejen 2 elem', function(assert) {
        jatekter.lista = ["O", "X", "X", "X", "O", "O", "O", " ", " "];
      assert.equal(jatekter.getFuggoleges(), "OXO@XO @XO @");
    });
    QUnit.test('getFuggoleges utlso oszlopban és a kovi sor elejen 2 elem 2.0', function(assert) {
        jatekter.lista = ["O", "X", " ", "X", "X", "O", "O", "O", " "];
      assert.equal(jatekter.getFuggoleges(), "OXO@XXO@ O @");
    });
});

QUnit.module('játéktér getAtlo metódus tesztelése', function(hooks) {
  let jatekter;
  hooks.before(() => {
      jatekter = new Jatekter();
  })

  QUnit.test('getAtlo ures', function(assert) {
      jatekter.lista = [" ", " ", " ", " ", " ", " ", " ", " ", " "];
    assert.equal(jatekter.getAtlo(), "   @   ");
  });
  QUnit.test('getAtlo 3X', function(assert) {
    jatekter.lista = ["X", "O", " ", " ", "X", "O", "X", "O", "X"];
    assert.equal(jatekter.getAtlo(), "XXX@ XX");
  });
  QUnit.test('getAtlo 3O', function(assert) {
    jatekter.lista = ["O", "X", " ", " ", "O", "X", "O", "X", "O"];
    assert.equal(jatekter.getAtlo(), "OOO@ OO");
  });
  QUnit.test('getAtlo véletlen elrend de nincs nyerés', function(assert) {
      jatekter.lista = ["O", "X", "O", " ", "X", "O", "X", "O", " "];
    assert.equal(jatekter.getAtlo(), "OX @OXX");
  });
  QUnit.test('getAtlo minden ki van töltve de nincs nyerés', function(assert) {
      jatekter.lista = ["O", "X", "O", "O", "X", "O", "X", "O", "X"];
    assert.equal(jatekter.getAtlo(), "OXX@OXX");
  });
  QUnit.test('getAtlo minden ki van töltve de van nyerés', function(assert) {
      jatekter.lista = ["O", "X", "X", "O", "O", "X", "X", "O", "O"];
    assert.equal(jatekter.getAtlo(), "OOO@XOX");
  });  
});

QUnit.module('játéktér ellenorzes metódus tesztelése', function(hooks) {
  let jatekter;
    hooks.before(() => {
        jatekter = new Jatekter();
    })

    QUnit.test('ellenorzes ures', function(assert) {
        jatekter.lista = [" ", " ", " ", " ", " ", " ", " ", " ", " "];
      assert.equal(jatekter.ellenorzes(), "");
    });
    QUnit.test('ellenorzes vizszint X', function(assert) {
      jatekter.lista = ["X", "X", "X", "O", "O", " ", " ", " ", " "];
    assert.equal(jatekter.ellenorzes(), "X");
    });
    QUnit.test('ellenorzes vizszint O', function(assert) {
        jatekter.lista = ["O", "O", "O", "X", "X", " ", " ", " ", " "];
      assert.equal(jatekter.ellenorzes(), "O");
    });
    QUnit.test('ellenorzes fuggoleges O', function(assert) {
        jatekter.lista = ["O", "X", "X", "O", " ", " ", "O", " ", " "];
      assert.equal(jatekter.ellenorzes(), "O");
    });
    QUnit.test('ellenorzes fuggoleges X', function(assert) {
        jatekter.lista = ["X", "O", "O", "X", " ", " ", "X", " ", " "];
      assert.equal(jatekter.ellenorzes(), "X");
    });
    QUnit.test('ellenorzes atlo x', function(assert) {
        jatekter.lista = ["X", "O", " ", " ", "X", "O", " ", " ", "X"];
      assert.equal(jatekter.ellenorzes(), "X");
    });
    QUnit.test('ellenorzes atlo o', function(assert) {
        jatekter.lista = [" ", "X", "O", " ", "O", "X", "O", " ", ""];
      assert.equal(jatekter.ellenorzes(), "O");
    });
    QUnit.test('ellenorzes veletlen, nincs nyeres', function(assert) {
      jatekter.lista = ["O", "X", " ", " ", "O", "X", "O", " ", ""];
    assert.equal(jatekter.ellenorzes(), "");
    });
    QUnit.test('ellenorzes minden kitoltve nincs nyeres', function(assert) {
      jatekter.lista = ["O", "X", "O", "O", "X", "X", "O", "O", "X"];
    assert.equal(jatekter.ellenorzes(), "O");
    });
    QUnit.test('ellenorzes utlso oszlopban és a kovi sor elejen 2 elem', function(assert) {
      jatekter.lista = ["O", "X", "X", " ", "O", "O", "O", " ", "X"];
    assert.equal(jatekter.ellenorzes(), "");
    });
    QUnit.test('ellenorzes utlso oszlopban és a kovi sor elejen 2 elem 2.0', function(assert) {
      jatekter.lista = ["O", "X", " ", "X", "X", "O", "O", "O", " "];
    assert.equal(jatekter.ellenorzes(), "");
    });
});
