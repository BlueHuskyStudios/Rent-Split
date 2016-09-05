this['Rent-Split Calculator'] = function (Kotlin) {
  'use strict';
  var _ = Kotlin.defineRootPackage(null, /** @lends _ */ {
    org: Kotlin.definePackage(null, /** @lends _.org */ {
      bh: Kotlin.definePackage(null, /** @lends _.org.bh */ {
        app: Kotlin.definePackage(null, /** @lends _.org.bh.app */ {
          rentSplit: Kotlin.definePackage(null, /** @lends _.org.bh.app.rentSplit */ {
            Main: Kotlin.createClass(null, null, null, /** @lends _.org.bh.app.rentSplit.Main */ {
              Companion: Kotlin.createObject(null, null, /** @lends _.org.bh.app.rentSplit.Main.Companion.prototype */ {
                main_kand9s$: function (args) {
                  Kotlin.println('Hello, Rent!');
                }
              }),
              object_initializer$: function () {
                _.org.bh.app.rentSplit.Main.Companion;
              }
            })
          })
        })
      })
    })
  });
  Kotlin.defineModule('Rent-Split Calculator', _);
  return _;
}(kotlin);
