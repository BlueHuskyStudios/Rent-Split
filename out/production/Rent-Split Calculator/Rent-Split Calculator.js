this['Rent-Split Calculator'] = function (Kotlin) {
  'use strict';
  var _ = Kotlin.defineRootPackage(null, /** @lends _ */ {
    org: Kotlin.definePackage(null, /** @lends _.org */ {
      bh: Kotlin.definePackage(null, /** @lends _.org.bh */ {
        app: Kotlin.definePackage(null, /** @lends _.org.bh.app */ {
          rentSplit: Kotlin.definePackage(null, /** @lends _.org.bh.app.rentSplit */ {
            main_kand9s$: function (args) {
              _.org.bh.app.rentSplit.html_354nf0$($('main'), new _.org.bh.app.rentSplit.elements.TopBar());
            },
            html_354nf0$: function ($receiver, element) {
              $receiver.html(element.outerHTML);
            },
            elements: Kotlin.definePackage(null, /** @lends _.org.bh.app.rentSplit.elements */ {
              TopBar: Kotlin.createClass(null, function () {
                this.id = 'top-bar';
              })
            })
          })
        })
      })
    })
  });
  Kotlin.defineModule('Rent-Split Calculator', _);
  _.org.bh.app.rentSplit.main_kand9s$([]);
  return _;
}(kotlin);
