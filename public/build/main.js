(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./assets/css/main.css":
/*!*****************************!*\
  !*** ./assets/css/main.css ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./assets/js/klorofil-common.js":
/*!**************************************!*\
  !*** ./assets/js/klorofil-common.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {__webpack_require__(/*! core-js/modules/es.array.find */ "./node_modules/core-js/modules/es.array.find.js");

__webpack_require__(/*! core-js/modules/es.function.bind */ "./node_modules/core-js/modules/es.function.bind.js");

$(document).ready(function () {
  /*-----------------------------------/
  /*	TOP NAVIGATION AND LAYOUT
  /*----------------------------------*/
  $('.btn-toggle-fullwidth').on('click', function () {
    if (!$('body').hasClass('layout-fullwidth')) {
      $('body').addClass('layout-fullwidth');
    } else {
      $('body').removeClass('layout-fullwidth');
      $('body').removeClass('layout-default'); // also remove default behaviour if set
    }

    $(this).find('.lnr').toggleClass('lnr-arrow-left-circle lnr-arrow-right-circle');

    if ($(window).innerWidth() < 1025) {
      if (!$('body').hasClass('offcanvas-active')) {
        $('body').addClass('offcanvas-active');
      } else {
        $('body').removeClass('offcanvas-active');
      }
    }
  });
  $(window).on('load', function () {
    if ($(window).innerWidth() < 1025) {
      $('.btn-toggle-fullwidth').find('.icon-arrows').removeClass('icon-arrows-move-left').addClass('icon-arrows-move-right');
    } // adjust right sidebar top position


    $('.right-sidebar').css('top', $('.navbar').innerHeight()); // if page has content-menu, set top padding of main-content

    if ($('.has-content-menu').length > 0) {
      $('.navbar + .main-content').css('padding-top', $('.navbar').innerHeight());
    } // for shorter main content


    if ($('.main').height() < $('#sidebar-nav').height()) {
      $('.main').css('min-height', $('#sidebar-nav').height());
    }
  });
  /*-----------------------------------/
  /*	SIDEBAR NAVIGATION
  /*----------------------------------*/

  $('.sidebar a[data-toggle="collapse"]').on('click', function () {
    if ($(this).hasClass('collapsed')) {
      $(this).addClass('active');
    } else {
      $(this).removeClass('active');
    }
  });

  if ($('.sidebar-scroll').length > 0) {
    $('.sidebar-scroll').slimScroll({
      height: '95%',
      wheelStep: 2
    });
  }
  /*-----------------------------------/
  /*	PANEL FUNCTIONS
  /*----------------------------------*/
  // panel remove


  $('.panel .btn-remove').click(function (e) {
    e.preventDefault();
    $(this).parents('.panel').fadeOut(300, function () {
      $(this).remove();
    });
  }); // panel collapse/expand

  var affectedElement = $('.panel-body');
  $('.panel .btn-toggle-collapse').clickToggle(function (e) {
    e.preventDefault(); // if has scroll

    if ($(this).parents('.panel').find('.slimScrollDiv').length > 0) {
      affectedElement = $('.slimScrollDiv');
    }

    $(this).parents('.panel').find(affectedElement).slideUp(300);
    $(this).find('i.lnr-chevron-up').toggleClass('lnr-chevron-down');
  }, function (e) {
    e.preventDefault(); // if has scroll

    if ($(this).parents('.panel').find('.slimScrollDiv').length > 0) {
      affectedElement = $('.slimScrollDiv');
    }

    $(this).parents('.panel').find(affectedElement).slideDown(300);
    $(this).find('i.lnr-chevron-up').toggleClass('lnr-chevron-down');
  });
  /*-----------------------------------/
  /*	PANEL SCROLLING
  /*----------------------------------*/

  if ($('.panel-scrolling').length > 0) {
    $('.panel-scrolling .panel-body').slimScroll({
      height: '430px',
      wheelStep: 2
    });
  }

  if ($('#panel-scrolling-demo').length > 0) {
    $('#panel-scrolling-demo .panel-body').slimScroll({
      height: '175px',
      wheelStep: 2
    });
  }
  /*-----------------------------------/
  /*	TODO LIST
  /*----------------------------------*/


  $('.todo-list input').change(function () {
    if ($(this).prop('checked')) {
      $(this).parents('li').addClass('completed');
    } else {
      $(this).parents('li').removeClass('completed');
    }
  });
  /*-----------------------------------/
  /* TOASTR NOTIFICATION
  /*----------------------------------*/

  if ($('#toastr-demo').length > 0) {
    toastr.options.timeOut = "false";
    toastr.options.closeButton = true;
    toastr['info']('Hi there, this is notification demo with HTML support. So, you can add HTML elements like <a href="#">this link</a>');
    $('.btn-toastr').on('click', function () {
      $context = $(this).data('context');
      $message = $(this).data('message');
      $position = $(this).data('position');

      if ($context == '') {
        $context = 'info';
      }

      if ($position == '') {
        $positionClass = 'toast-left-top';
      } else {
        $positionClass = 'toast-' + $position;
      }

      toastr.remove();
      toastr[$context]($message, '', {
        positionClass: $positionClass
      });
    });
    $('#toastr-callback1').on('click', function () {
      $message = $(this).data('message');
      toastr.options = {
        "timeOut": "300",
        "onShown": function onShown() {
          alert('onShown callback');
        },
        "onHidden": function onHidden() {
          alert('onHidden callback');
        }
      };
      toastr['info']($message);
    });
    $('#toastr-callback2').on('click', function () {
      $message = $(this).data('message');
      toastr.options = {
        "timeOut": "10000",
        "onclick": function onclick() {
          alert('onclick callback');
        }
      };
      toastr['info']($message);
    });
    $('#toastr-callback3').on('click', function () {
      $message = $(this).data('message');
      toastr.options = {
        "timeOut": "10000",
        "closeButton": true,
        "onCloseClick": function onCloseClick() {
          alert('onCloseClick callback');
        }
      };
      toastr['info']($message);
    });
  }
}); // toggle function

$.fn.clickToggle = function (f1, f2) {
  return this.each(function () {
    var clicked = false;
    $(this).bind('click', function () {
      if (clicked) {
        clicked = false;
        return f2.apply(this, arguments);
      }

      clicked = true;
      return f1.apply(this, arguments);
    });
  });
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./assets/js/main.js":
/*!***************************!*\
  !*** ./assets/js/main.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _vendor_bootstrap_js_bootstrap_min__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../vendor/bootstrap/js/bootstrap.min */ "./assets/vendor/bootstrap/js/bootstrap.min.js");
/* harmony import */ var _vendor_bootstrap_js_bootstrap_min__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_vendor_bootstrap_js_bootstrap_min__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jquery_slimscroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery-slimscroll */ "./node_modules/jquery-slimscroll/jquery.slimscroll.js");
/* harmony import */ var jquery_slimscroll__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery_slimscroll__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _klorofil_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./klorofil-common */ "./assets/js/klorofil-common.js");
/* harmony import */ var _klorofil_common__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_klorofil_common__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var font_awesome_css_font_awesome_min_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! font-awesome/css/font-awesome.min.css */ "./node_modules/font-awesome/css/font-awesome.min.css");
/* harmony import */ var font_awesome_css_font_awesome_min_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(font_awesome_css_font_awesome_min_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _vendor_bootstrap_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../vendor/bootstrap/css/bootstrap.min.css */ "./assets/vendor/bootstrap/css/bootstrap.min.css");
/* harmony import */ var _vendor_bootstrap_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_vendor_bootstrap_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _vendor_linearicons_style_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../vendor/linearicons/style.css */ "./assets/vendor/linearicons/style.css");
/* harmony import */ var _vendor_linearicons_style_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_vendor_linearicons_style_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../css/main.css */ "./assets/css/main.css");
/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_css_main_css__WEBPACK_IMPORTED_MODULE_8__);
/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */





 // any CSS you require will output into a single css file (app.css in this case)





if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('#btnTogglePassword').length) {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('#btnTogglePassword').on('click', function () {
    var self = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this),
        target = jquery__WEBPACK_IMPORTED_MODULE_0___default()(self.data('target')),
        type = target.attr('type');

    if (type === 'text') {
      target.attr('type', 'password');
    } else {
      target.attr('type', 'text');
    }

    self.children('i').toggleClass('fa-eye-slash').toggleClass('fa-eye');
  });
}

if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('#sessionModal').length) {
  var self = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#sessionModal'),
      submitted = self.data('submitted');

  if (submitted) {
    self.modal('show');
  }
}

/***/ }),

/***/ "./assets/vendor/bootstrap/css/bootstrap.min.css":
/*!*******************************************************!*\
  !*** ./assets/vendor/bootstrap/css/bootstrap.min.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./assets/vendor/bootstrap/js/bootstrap.min.js":
/*!*****************************************************!*\
  !*** ./assets/vendor/bootstrap/js/bootstrap.min.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery) {__webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");

__webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");

__webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");

__webpack_require__(/*! core-js/modules/es.array.find */ "./node_modules/core-js/modules/es.array.find.js");

__webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");

__webpack_require__(/*! core-js/modules/es.array.join */ "./node_modules/core-js/modules/es.array.join.js");

__webpack_require__(/*! core-js/modules/es.array.map */ "./node_modules/core-js/modules/es.array.map.js");

__webpack_require__(/*! core-js/modules/es.array.sort */ "./node_modules/core-js/modules/es.array.sort.js");

__webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.parse-int */ "./node_modules/core-js/modules/es.parse-int.js");

__webpack_require__(/*! core-js/modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");

__webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");

__webpack_require__(/*! core-js/modules/es.string.replace */ "./node_modules/core-js/modules/es.string.replace.js");

__webpack_require__(/*! core-js/modules/es.string.split */ "./node_modules/core-js/modules/es.string.split.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");

__webpack_require__(/*! core-js/modules/web.timers */ "./node_modules/core-js/modules/web.timers.js");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*!
 * Bootstrap v3.3.7 (http://getbootstrap.com)
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under the MIT license
 */
if ("undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery");
+function (a) {
  "use strict";

  var b = a.fn.jquery.split(" ")[0].split(".");
  if (b[0] < 2 && b[1] < 9 || 1 == b[0] && 9 == b[1] && b[2] < 1 || b[0] > 3) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4");
}(jQuery), +function (a) {
  "use strict";

  function b() {
    var a = document.createElement("bootstrap"),
        b = {
      WebkitTransition: "webkitTransitionEnd",
      MozTransition: "transitionend",
      OTransition: "oTransitionEnd otransitionend",
      transition: "transitionend"
    };

    for (var c in b) {
      if (void 0 !== a.style[c]) return {
        end: b[c]
      };
    }

    return !1;
  }

  a.fn.emulateTransitionEnd = function (b) {
    var c = !1,
        d = this;
    a(this).one("bsTransitionEnd", function () {
      c = !0;
    });

    var e = function e() {
      c || a(d).trigger(a.support.transition.end);
    };

    return setTimeout(e, b), this;
  }, a(function () {
    a.support.transition = b(), a.support.transition && (a.event.special.bsTransitionEnd = {
      bindType: a.support.transition.end,
      delegateType: a.support.transition.end,
      handle: function handle(b) {
        if (a(b.target).is(this)) return b.handleObj.handler.apply(this, arguments);
      }
    });
  });
}(jQuery), +function (a) {
  "use strict";

  function b(b) {
    return this.each(function () {
      var c = a(this),
          e = c.data("bs.alert");
      e || c.data("bs.alert", e = new d(this)), "string" == typeof b && e[b].call(c);
    });
  }

  var c = '[data-dismiss="alert"]',
      d = function d(b) {
    a(b).on("click", c, this.close);
  };

  d.VERSION = "3.3.7", d.TRANSITION_DURATION = 150, d.prototype.close = function (b) {
    function c() {
      g.detach().trigger("closed.bs.alert").remove();
    }

    var e = a(this),
        f = e.attr("data-target");
    f || (f = e.attr("href"), f = f && f.replace(/.*(?=#[^\s]*$)/, ""));
    var g = a("#" === f ? [] : f);
    b && b.preventDefault(), g.length || (g = e.closest(".alert")), g.trigger(b = a.Event("close.bs.alert")), b.isDefaultPrevented() || (g.removeClass("in"), a.support.transition && g.hasClass("fade") ? g.one("bsTransitionEnd", c).emulateTransitionEnd(d.TRANSITION_DURATION) : c());
  };
  var e = a.fn.alert;
  a.fn.alert = b, a.fn.alert.Constructor = d, a.fn.alert.noConflict = function () {
    return a.fn.alert = e, this;
  }, a(document).on("click.bs.alert.data-api", c, d.prototype.close);
}(jQuery), +function (a) {
  "use strict";

  function b(b) {
    return this.each(function () {
      var d = a(this),
          e = d.data("bs.button"),
          f = "object" == _typeof(b) && b;
      e || d.data("bs.button", e = new c(this, f)), "toggle" == b ? e.toggle() : b && e.setState(b);
    });
  }

  var c = function c(b, d) {
    this.$element = a(b), this.options = a.extend({}, c.DEFAULTS, d), this.isLoading = !1;
  };

  c.VERSION = "3.3.7", c.DEFAULTS = {
    loadingText: "loading..."
  }, c.prototype.setState = function (b) {
    var c = "disabled",
        d = this.$element,
        e = d.is("input") ? "val" : "html",
        f = d.data();
    b += "Text", null == f.resetText && d.data("resetText", d[e]()), setTimeout(a.proxy(function () {
      d[e](null == f[b] ? this.options[b] : f[b]), "loadingText" == b ? (this.isLoading = !0, d.addClass(c).attr(c, c).prop(c, !0)) : this.isLoading && (this.isLoading = !1, d.removeClass(c).removeAttr(c).prop(c, !1));
    }, this), 0);
  }, c.prototype.toggle = function () {
    var a = !0,
        b = this.$element.closest('[data-toggle="buttons"]');

    if (b.length) {
      var c = this.$element.find("input");
      "radio" == c.prop("type") ? (c.prop("checked") && (a = !1), b.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == c.prop("type") && (c.prop("checked") !== this.$element.hasClass("active") && (a = !1), this.$element.toggleClass("active")), c.prop("checked", this.$element.hasClass("active")), a && c.trigger("change");
    } else this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active");
  };
  var d = a.fn.button;
  a.fn.button = b, a.fn.button.Constructor = c, a.fn.button.noConflict = function () {
    return a.fn.button = d, this;
  }, a(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function (c) {
    var d = a(c.target).closest(".btn");
    b.call(d, "toggle"), a(c.target).is('input[type="radio"], input[type="checkbox"]') || (c.preventDefault(), d.is("input,button") ? d.trigger("focus") : d.find("input:visible,button:visible").first().trigger("focus"));
  }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function (b) {
    a(b.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(b.type));
  });
}(jQuery), +function (a) {
  "use strict";

  function b(b) {
    return this.each(function () {
      var d = a(this),
          e = d.data("bs.carousel"),
          f = a.extend({}, c.DEFAULTS, d.data(), "object" == _typeof(b) && b),
          g = "string" == typeof b ? b : f.slide;
      e || d.data("bs.carousel", e = new c(this, f)), "number" == typeof b ? e.to(b) : g ? e[g]() : f.interval && e.pause().cycle();
    });
  }

  var c = function c(b, _c) {
    this.$element = a(b), this.$indicators = this.$element.find(".carousel-indicators"), this.options = _c, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", a.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", a.proxy(this.pause, this)).on("mouseleave.bs.carousel", a.proxy(this.cycle, this));
  };

  c.VERSION = "3.3.7", c.TRANSITION_DURATION = 600, c.DEFAULTS = {
    interval: 5e3,
    pause: "hover",
    wrap: !0,
    keyboard: !0
  }, c.prototype.keydown = function (a) {
    if (!/input|textarea/i.test(a.target.tagName)) {
      switch (a.which) {
        case 37:
          this.prev();
          break;

        case 39:
          this.next();
          break;

        default:
          return;
      }

      a.preventDefault();
    }
  }, c.prototype.cycle = function (b) {
    return b || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(a.proxy(this.next, this), this.options.interval)), this;
  }, c.prototype.getItemIndex = function (a) {
    return this.$items = a.parent().children(".item"), this.$items.index(a || this.$active);
  }, c.prototype.getItemForDirection = function (a, b) {
    var c = this.getItemIndex(b),
        d = "prev" == a && 0 === c || "next" == a && c == this.$items.length - 1;
    if (d && !this.options.wrap) return b;
    var e = "prev" == a ? -1 : 1,
        f = (c + e) % this.$items.length;
    return this.$items.eq(f);
  }, c.prototype.to = function (a) {
    var b = this,
        c = this.getItemIndex(this.$active = this.$element.find(".item.active"));
    if (!(a > this.$items.length - 1 || a < 0)) return this.sliding ? this.$element.one("slid.bs.carousel", function () {
      b.to(a);
    }) : c == a ? this.pause().cycle() : this.slide(a > c ? "next" : "prev", this.$items.eq(a));
  }, c.prototype.pause = function (b) {
    return b || (this.paused = !0), this.$element.find(".next, .prev").length && a.support.transition && (this.$element.trigger(a.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this;
  }, c.prototype.next = function () {
    if (!this.sliding) return this.slide("next");
  }, c.prototype.prev = function () {
    if (!this.sliding) return this.slide("prev");
  }, c.prototype.slide = function (b, d) {
    var e = this.$element.find(".item.active"),
        f = d || this.getItemForDirection(b, e),
        g = this.interval,
        h = "next" == b ? "left" : "right",
        i = this;
    if (f.hasClass("active")) return this.sliding = !1;
    var j = f[0],
        k = a.Event("slide.bs.carousel", {
      relatedTarget: j,
      direction: h
    });

    if (this.$element.trigger(k), !k.isDefaultPrevented()) {
      if (this.sliding = !0, g && this.pause(), this.$indicators.length) {
        this.$indicators.find(".active").removeClass("active");
        var l = a(this.$indicators.children()[this.getItemIndex(f)]);
        l && l.addClass("active");
      }

      var m = a.Event("slid.bs.carousel", {
        relatedTarget: j,
        direction: h
      });
      return a.support.transition && this.$element.hasClass("slide") ? (f.addClass(b), f[0].offsetWidth, e.addClass(h), f.addClass(h), e.one("bsTransitionEnd", function () {
        f.removeClass([b, h].join(" ")).addClass("active"), e.removeClass(["active", h].join(" ")), i.sliding = !1, setTimeout(function () {
          i.$element.trigger(m);
        }, 0);
      }).emulateTransitionEnd(c.TRANSITION_DURATION)) : (e.removeClass("active"), f.addClass("active"), this.sliding = !1, this.$element.trigger(m)), g && this.cycle(), this;
    }
  };
  var d = a.fn.carousel;
  a.fn.carousel = b, a.fn.carousel.Constructor = c, a.fn.carousel.noConflict = function () {
    return a.fn.carousel = d, this;
  };

  var e = function e(c) {
    var d,
        e = a(this),
        f = a(e.attr("data-target") || (d = e.attr("href")) && d.replace(/.*(?=#[^\s]+$)/, ""));

    if (f.hasClass("carousel")) {
      var g = a.extend({}, f.data(), e.data()),
          h = e.attr("data-slide-to");
      h && (g.interval = !1), b.call(f, g), h && f.data("bs.carousel").to(h), c.preventDefault();
    }
  };

  a(document).on("click.bs.carousel.data-api", "[data-slide]", e).on("click.bs.carousel.data-api", "[data-slide-to]", e), a(window).on("load", function () {
    a('[data-ride="carousel"]').each(function () {
      var c = a(this);
      b.call(c, c.data());
    });
  });
}(jQuery), +function (a) {
  "use strict";

  function b(b) {
    var c,
        d = b.attr("data-target") || (c = b.attr("href")) && c.replace(/.*(?=#[^\s]+$)/, "");
    return a(d);
  }

  function c(b) {
    return this.each(function () {
      var c = a(this),
          e = c.data("bs.collapse"),
          f = a.extend({}, d.DEFAULTS, c.data(), "object" == _typeof(b) && b);
      !e && f.toggle && /show|hide/.test(b) && (f.toggle = !1), e || c.data("bs.collapse", e = new d(this, f)), "string" == typeof b && e[b]();
    });
  }

  var d = function d(b, c) {
    this.$element = a(b), this.options = a.extend({}, d.DEFAULTS, c), this.$trigger = a('[data-toggle="collapse"][href="#' + b.id + '"],[data-toggle="collapse"][data-target="#' + b.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle();
  };

  d.VERSION = "3.3.7", d.TRANSITION_DURATION = 350, d.DEFAULTS = {
    toggle: !0
  }, d.prototype.dimension = function () {
    var a = this.$element.hasClass("width");
    return a ? "width" : "height";
  }, d.prototype.show = function () {
    if (!this.transitioning && !this.$element.hasClass("in")) {
      var b,
          e = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");

      if (!(e && e.length && (b = e.data("bs.collapse"), b && b.transitioning))) {
        var f = a.Event("show.bs.collapse");

        if (this.$element.trigger(f), !f.isDefaultPrevented()) {
          e && e.length && (c.call(e, "hide"), b || e.data("bs.collapse", null));
          var g = this.dimension();
          this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;

          var h = function h() {
            this.$element.removeClass("collapsing").addClass("collapse in")[g](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse");
          };

          if (!a.support.transition) return h.call(this);
          var i = a.camelCase(["scroll", g].join("-"));
          this.$element.one("bsTransitionEnd", a.proxy(h, this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i]);
        }
      }
    }
  }, d.prototype.hide = function () {
    if (!this.transitioning && this.$element.hasClass("in")) {
      var b = a.Event("hide.bs.collapse");

      if (this.$element.trigger(b), !b.isDefaultPrevented()) {
        var c = this.dimension();
        this.$element[c](this.$element[c]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;

        var e = function e() {
          this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse");
        };

        return a.support.transition ? void this.$element[c](0).one("bsTransitionEnd", a.proxy(e, this)).emulateTransitionEnd(d.TRANSITION_DURATION) : e.call(this);
      }
    }
  }, d.prototype.toggle = function () {
    this[this.$element.hasClass("in") ? "hide" : "show"]();
  }, d.prototype.getParent = function () {
    return a(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(a.proxy(function (c, d) {
      var e = a(d);
      this.addAriaAndCollapsedClass(b(e), e);
    }, this)).end();
  }, d.prototype.addAriaAndCollapsedClass = function (a, b) {
    var c = a.hasClass("in");
    a.attr("aria-expanded", c), b.toggleClass("collapsed", !c).attr("aria-expanded", c);
  };
  var e = a.fn.collapse;
  a.fn.collapse = c, a.fn.collapse.Constructor = d, a.fn.collapse.noConflict = function () {
    return a.fn.collapse = e, this;
  }, a(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function (d) {
    var e = a(this);
    e.attr("data-target") || d.preventDefault();
    var f = b(e),
        g = f.data("bs.collapse"),
        h = g ? "toggle" : e.data();
    c.call(f, h);
  });
}(jQuery), +function (a) {
  "use strict";

  function b(b) {
    var c = b.attr("data-target");
    c || (c = b.attr("href"), c = c && /#[A-Za-z]/.test(c) && c.replace(/.*(?=#[^\s]*$)/, ""));
    var d = c && a(c);
    return d && d.length ? d : b.parent();
  }

  function c(c) {
    c && 3 === c.which || (a(e).remove(), a(f).each(function () {
      var d = a(this),
          e = b(d),
          f = {
        relatedTarget: this
      };
      e.hasClass("open") && (c && "click" == c.type && /input|textarea/i.test(c.target.tagName) && a.contains(e[0], c.target) || (e.trigger(c = a.Event("hide.bs.dropdown", f)), c.isDefaultPrevented() || (d.attr("aria-expanded", "false"), e.removeClass("open").trigger(a.Event("hidden.bs.dropdown", f)))));
    }));
  }

  function d(b) {
    return this.each(function () {
      var c = a(this),
          d = c.data("bs.dropdown");
      d || c.data("bs.dropdown", d = new g(this)), "string" == typeof b && d[b].call(c);
    });
  }

  var e = ".dropdown-backdrop",
      f = '[data-toggle="dropdown"]',
      g = function g(b) {
    a(b).on("click.bs.dropdown", this.toggle);
  };

  g.VERSION = "3.3.7", g.prototype.toggle = function (d) {
    var e = a(this);

    if (!e.is(".disabled, :disabled")) {
      var f = b(e),
          g = f.hasClass("open");

      if (c(), !g) {
        "ontouchstart" in document.documentElement && !f.closest(".navbar-nav").length && a(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(a(this)).on("click", c);
        var h = {
          relatedTarget: this
        };
        if (f.trigger(d = a.Event("show.bs.dropdown", h)), d.isDefaultPrevented()) return;
        e.trigger("focus").attr("aria-expanded", "true"), f.toggleClass("open").trigger(a.Event("shown.bs.dropdown", h));
      }

      return !1;
    }
  }, g.prototype.keydown = function (c) {
    if (/(38|40|27|32)/.test(c.which) && !/input|textarea/i.test(c.target.tagName)) {
      var d = a(this);

      if (c.preventDefault(), c.stopPropagation(), !d.is(".disabled, :disabled")) {
        var e = b(d),
            g = e.hasClass("open");
        if (!g && 27 != c.which || g && 27 == c.which) return 27 == c.which && e.find(f).trigger("focus"), d.trigger("click");
        var h = " li:not(.disabled):visible a",
            i = e.find(".dropdown-menu" + h);

        if (i.length) {
          var j = i.index(c.target);
          38 == c.which && j > 0 && j--, 40 == c.which && j < i.length - 1 && j++, ~j || (j = 0), i.eq(j).trigger("focus");
        }
      }
    }
  };
  var h = a.fn.dropdown;
  a.fn.dropdown = d, a.fn.dropdown.Constructor = g, a.fn.dropdown.noConflict = function () {
    return a.fn.dropdown = h, this;
  }, a(document).on("click.bs.dropdown.data-api", c).on("click.bs.dropdown.data-api", ".dropdown form", function (a) {
    a.stopPropagation();
  }).on("click.bs.dropdown.data-api", f, g.prototype.toggle).on("keydown.bs.dropdown.data-api", f, g.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", g.prototype.keydown);
}(jQuery), +function (a) {
  "use strict";

  function b(b, d) {
    return this.each(function () {
      var e = a(this),
          f = e.data("bs.modal"),
          g = a.extend({}, c.DEFAULTS, e.data(), "object" == _typeof(b) && b);
      f || e.data("bs.modal", f = new c(this, g)), "string" == typeof b ? f[b](d) : g.show && f.show(d);
    });
  }

  var c = function c(b, _c2) {
    this.options = _c2, this.$body = a(document.body), this.$element = a(b), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, a.proxy(function () {
      this.$element.trigger("loaded.bs.modal");
    }, this));
  };

  c.VERSION = "3.3.7", c.TRANSITION_DURATION = 300, c.BACKDROP_TRANSITION_DURATION = 150, c.DEFAULTS = {
    backdrop: !0,
    keyboard: !0,
    show: !0
  }, c.prototype.toggle = function (a) {
    return this.isShown ? this.hide() : this.show(a);
  }, c.prototype.show = function (b) {
    var d = this,
        e = a.Event("show.bs.modal", {
      relatedTarget: b
    });
    this.$element.trigger(e), this.isShown || e.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', a.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function () {
      d.$element.one("mouseup.dismiss.bs.modal", function (b) {
        a(b.target).is(d.$element) && (d.ignoreBackdropClick = !0);
      });
    }), this.backdrop(function () {
      var e = a.support.transition && d.$element.hasClass("fade");
      d.$element.parent().length || d.$element.appendTo(d.$body), d.$element.show().scrollTop(0), d.adjustDialog(), e && d.$element[0].offsetWidth, d.$element.addClass("in"), d.enforceFocus();
      var f = a.Event("shown.bs.modal", {
        relatedTarget: b
      });
      e ? d.$dialog.one("bsTransitionEnd", function () {
        d.$element.trigger("focus").trigger(f);
      }).emulateTransitionEnd(c.TRANSITION_DURATION) : d.$element.trigger("focus").trigger(f);
    }));
  }, c.prototype.hide = function (b) {
    b && b.preventDefault(), b = a.Event("hide.bs.modal"), this.$element.trigger(b), this.isShown && !b.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), a(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), a.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", a.proxy(this.hideModal, this)).emulateTransitionEnd(c.TRANSITION_DURATION) : this.hideModal());
  }, c.prototype.enforceFocus = function () {
    a(document).off("focusin.bs.modal").on("focusin.bs.modal", a.proxy(function (a) {
      document === a.target || this.$element[0] === a.target || this.$element.has(a.target).length || this.$element.trigger("focus");
    }, this));
  }, c.prototype.escape = function () {
    this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", a.proxy(function (a) {
      27 == a.which && this.hide();
    }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal");
  }, c.prototype.resize = function () {
    this.isShown ? a(window).on("resize.bs.modal", a.proxy(this.handleUpdate, this)) : a(window).off("resize.bs.modal");
  }, c.prototype.hideModal = function () {
    var a = this;
    this.$element.hide(), this.backdrop(function () {
      a.$body.removeClass("modal-open"), a.resetAdjustments(), a.resetScrollbar(), a.$element.trigger("hidden.bs.modal");
    });
  }, c.prototype.removeBackdrop = function () {
    this.$backdrop && this.$backdrop.remove(), this.$backdrop = null;
  }, c.prototype.backdrop = function (b) {
    var d = this,
        e = this.$element.hasClass("fade") ? "fade" : "";

    if (this.isShown && this.options.backdrop) {
      var f = a.support.transition && e;
      if (this.$backdrop = a(document.createElement("div")).addClass("modal-backdrop " + e).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", a.proxy(function (a) {
        return this.ignoreBackdropClick ? void (this.ignoreBackdropClick = !1) : void (a.target === a.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()));
      }, this)), f && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !b) return;
      f ? this.$backdrop.one("bsTransitionEnd", b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION) : b();
    } else if (!this.isShown && this.$backdrop) {
      this.$backdrop.removeClass("in");

      var g = function g() {
        d.removeBackdrop(), b && b();
      };

      a.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION) : g();
    } else b && b();
  }, c.prototype.handleUpdate = function () {
    this.adjustDialog();
  }, c.prototype.adjustDialog = function () {
    var a = this.$element[0].scrollHeight > document.documentElement.clientHeight;
    this.$element.css({
      paddingLeft: !this.bodyIsOverflowing && a ? this.scrollbarWidth : "",
      paddingRight: this.bodyIsOverflowing && !a ? this.scrollbarWidth : ""
    });
  }, c.prototype.resetAdjustments = function () {
    this.$element.css({
      paddingLeft: "",
      paddingRight: ""
    });
  }, c.prototype.checkScrollbar = function () {
    var a = window.innerWidth;

    if (!a) {
      var b = document.documentElement.getBoundingClientRect();
      a = b.right - Math.abs(b.left);
    }

    this.bodyIsOverflowing = document.body.clientWidth < a, this.scrollbarWidth = this.measureScrollbar();
  }, c.prototype.setScrollbar = function () {
    var a = parseInt(this.$body.css("padding-right") || 0, 10);
    this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", a + this.scrollbarWidth);
  }, c.prototype.resetScrollbar = function () {
    this.$body.css("padding-right", this.originalBodyPad);
  }, c.prototype.measureScrollbar = function () {
    var a = document.createElement("div");
    a.className = "modal-scrollbar-measure", this.$body.append(a);
    var b = a.offsetWidth - a.clientWidth;
    return this.$body[0].removeChild(a), b;
  };
  var d = a.fn.modal;
  a.fn.modal = b, a.fn.modal.Constructor = c, a.fn.modal.noConflict = function () {
    return a.fn.modal = d, this;
  }, a(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function (c) {
    var d = a(this),
        e = d.attr("href"),
        f = a(d.attr("data-target") || e && e.replace(/.*(?=#[^\s]+$)/, "")),
        g = f.data("bs.modal") ? "toggle" : a.extend({
      remote: !/#/.test(e) && e
    }, f.data(), d.data());
    d.is("a") && c.preventDefault(), f.one("show.bs.modal", function (a) {
      a.isDefaultPrevented() || f.one("hidden.bs.modal", function () {
        d.is(":visible") && d.trigger("focus");
      });
    }), b.call(f, g, this);
  });
}(jQuery), +function (a) {
  "use strict";

  function b(b) {
    return this.each(function () {
      var d = a(this),
          e = d.data("bs.tooltip"),
          f = "object" == _typeof(b) && b;
      !e && /destroy|hide/.test(b) || (e || d.data("bs.tooltip", e = new c(this, f)), "string" == typeof b && e[b]());
    });
  }

  var c = function c(a, b) {
    this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", a, b);
  };

  c.VERSION = "3.3.7", c.TRANSITION_DURATION = 150, c.DEFAULTS = {
    animation: !0,
    placement: "top",
    selector: !1,
    template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
    trigger: "hover focus",
    title: "",
    delay: 0,
    html: !1,
    container: !1,
    viewport: {
      selector: "body",
      padding: 0
    }
  }, c.prototype.init = function (b, c, d) {
    if (this.enabled = !0, this.type = b, this.$element = a(c), this.options = this.getOptions(d), this.$viewport = this.options.viewport && a(a.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = {
      click: !1,
      hover: !1,
      focus: !1
    }, this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");

    for (var e = this.options.trigger.split(" "), f = e.length; f--;) {
      var g = e[f];
      if ("click" == g) this.$element.on("click." + this.type, this.options.selector, a.proxy(this.toggle, this));else if ("manual" != g) {
        var h = "hover" == g ? "mouseenter" : "focusin",
            i = "hover" == g ? "mouseleave" : "focusout";
        this.$element.on(h + "." + this.type, this.options.selector, a.proxy(this.enter, this)), this.$element.on(i + "." + this.type, this.options.selector, a.proxy(this.leave, this));
      }
    }

    this.options.selector ? this._options = a.extend({}, this.options, {
      trigger: "manual",
      selector: ""
    }) : this.fixTitle();
  }, c.prototype.getDefaults = function () {
    return c.DEFAULTS;
  }, c.prototype.getOptions = function (b) {
    return b = a.extend({}, this.getDefaults(), this.$element.data(), b), b.delay && "number" == typeof b.delay && (b.delay = {
      show: b.delay,
      hide: b.delay
    }), b;
  }, c.prototype.getDelegateOptions = function () {
    var b = {},
        c = this.getDefaults();
    return this._options && a.each(this._options, function (a, d) {
      c[a] != d && (b[a] = d);
    }), b;
  }, c.prototype.enter = function (b) {
    var c = b instanceof this.constructor ? b : a(b.currentTarget).data("bs." + this.type);
    return c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c)), b instanceof a.Event && (c.inState["focusin" == b.type ? "focus" : "hover"] = !0), c.tip().hasClass("in") || "in" == c.hoverState ? void (c.hoverState = "in") : (clearTimeout(c.timeout), c.hoverState = "in", c.options.delay && c.options.delay.show ? void (c.timeout = setTimeout(function () {
      "in" == c.hoverState && c.show();
    }, c.options.delay.show)) : c.show());
  }, c.prototype.isInStateTrue = function () {
    for (var a in this.inState) {
      if (this.inState[a]) return !0;
    }

    return !1;
  }, c.prototype.leave = function (b) {
    var c = b instanceof this.constructor ? b : a(b.currentTarget).data("bs." + this.type);
    if (c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c)), b instanceof a.Event && (c.inState["focusout" == b.type ? "focus" : "hover"] = !1), !c.isInStateTrue()) return clearTimeout(c.timeout), c.hoverState = "out", c.options.delay && c.options.delay.hide ? void (c.timeout = setTimeout(function () {
      "out" == c.hoverState && c.hide();
    }, c.options.delay.hide)) : c.hide();
  }, c.prototype.show = function () {
    var b = a.Event("show.bs." + this.type);

    if (this.hasContent() && this.enabled) {
      this.$element.trigger(b);
      var d = a.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
      if (b.isDefaultPrevented() || !d) return;
      var e = this,
          f = this.tip(),
          g = this.getUID(this.type);
      this.setContent(), f.attr("id", g), this.$element.attr("aria-describedby", g), this.options.animation && f.addClass("fade");
      var h = "function" == typeof this.options.placement ? this.options.placement.call(this, f[0], this.$element[0]) : this.options.placement,
          i = /\s?auto?\s?/i,
          j = i.test(h);
      j && (h = h.replace(i, "") || "top"), f.detach().css({
        top: 0,
        left: 0,
        display: "block"
      }).addClass(h).data("bs." + this.type, this), this.options.container ? f.appendTo(this.options.container) : f.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type);
      var k = this.getPosition(),
          l = f[0].offsetWidth,
          m = f[0].offsetHeight;

      if (j) {
        var n = h,
            o = this.getPosition(this.$viewport);
        h = "bottom" == h && k.bottom + m > o.bottom ? "top" : "top" == h && k.top - m < o.top ? "bottom" : "right" == h && k.right + l > o.width ? "left" : "left" == h && k.left - l < o.left ? "right" : h, f.removeClass(n).addClass(h);
      }

      var p = this.getCalculatedOffset(h, k, l, m);
      this.applyPlacement(p, h);

      var q = function q() {
        var a = e.hoverState;
        e.$element.trigger("shown.bs." + e.type), e.hoverState = null, "out" == a && e.leave(e);
      };

      a.support.transition && this.$tip.hasClass("fade") ? f.one("bsTransitionEnd", q).emulateTransitionEnd(c.TRANSITION_DURATION) : q();
    }
  }, c.prototype.applyPlacement = function (b, c) {
    var d = this.tip(),
        e = d[0].offsetWidth,
        f = d[0].offsetHeight,
        g = parseInt(d.css("margin-top"), 10),
        h = parseInt(d.css("margin-left"), 10);
    isNaN(g) && (g = 0), isNaN(h) && (h = 0), b.top += g, b.left += h, a.offset.setOffset(d[0], a.extend({
      using: function using(a) {
        d.css({
          top: Math.round(a.top),
          left: Math.round(a.left)
        });
      }
    }, b), 0), d.addClass("in");
    var i = d[0].offsetWidth,
        j = d[0].offsetHeight;
    "top" == c && j != f && (b.top = b.top + f - j);
    var k = this.getViewportAdjustedDelta(c, b, i, j);
    k.left ? b.left += k.left : b.top += k.top;
    var l = /top|bottom/.test(c),
        m = l ? 2 * k.left - e + i : 2 * k.top - f + j,
        n = l ? "offsetWidth" : "offsetHeight";
    d.offset(b), this.replaceArrow(m, d[0][n], l);
  }, c.prototype.replaceArrow = function (a, b, c) {
    this.arrow().css(c ? "left" : "top", 50 * (1 - a / b) + "%").css(c ? "top" : "left", "");
  }, c.prototype.setContent = function () {
    var a = this.tip(),
        b = this.getTitle();
    a.find(".tooltip-inner")[this.options.html ? "html" : "text"](b), a.removeClass("fade in top bottom left right");
  }, c.prototype.hide = function (b) {
    function d() {
      "in" != e.hoverState && f.detach(), e.$element && e.$element.removeAttr("aria-describedby").trigger("hidden.bs." + e.type), b && b();
    }

    var e = this,
        f = a(this.$tip),
        g = a.Event("hide.bs." + this.type);
    if (this.$element.trigger(g), !g.isDefaultPrevented()) return f.removeClass("in"), a.support.transition && f.hasClass("fade") ? f.one("bsTransitionEnd", d).emulateTransitionEnd(c.TRANSITION_DURATION) : d(), this.hoverState = null, this;
  }, c.prototype.fixTitle = function () {
    var a = this.$element;
    (a.attr("title") || "string" != typeof a.attr("data-original-title")) && a.attr("data-original-title", a.attr("title") || "").attr("title", "");
  }, c.prototype.hasContent = function () {
    return this.getTitle();
  }, c.prototype.getPosition = function (b) {
    b = b || this.$element;
    var c = b[0],
        d = "BODY" == c.tagName,
        e = c.getBoundingClientRect();
    null == e.width && (e = a.extend({}, e, {
      width: e.right - e.left,
      height: e.bottom - e.top
    }));
    var f = window.SVGElement && c instanceof window.SVGElement,
        g = d ? {
      top: 0,
      left: 0
    } : f ? null : b.offset(),
        h = {
      scroll: d ? document.documentElement.scrollTop || document.body.scrollTop : b.scrollTop()
    },
        i = d ? {
      width: a(window).width(),
      height: a(window).height()
    } : null;
    return a.extend({}, e, h, i, g);
  }, c.prototype.getCalculatedOffset = function (a, b, c, d) {
    return "bottom" == a ? {
      top: b.top + b.height,
      left: b.left + b.width / 2 - c / 2
    } : "top" == a ? {
      top: b.top - d,
      left: b.left + b.width / 2 - c / 2
    } : "left" == a ? {
      top: b.top + b.height / 2 - d / 2,
      left: b.left - c
    } : {
      top: b.top + b.height / 2 - d / 2,
      left: b.left + b.width
    };
  }, c.prototype.getViewportAdjustedDelta = function (a, b, c, d) {
    var e = {
      top: 0,
      left: 0
    };
    if (!this.$viewport) return e;
    var f = this.options.viewport && this.options.viewport.padding || 0,
        g = this.getPosition(this.$viewport);

    if (/right|left/.test(a)) {
      var h = b.top - f - g.scroll,
          i = b.top + f - g.scroll + d;
      h < g.top ? e.top = g.top - h : i > g.top + g.height && (e.top = g.top + g.height - i);
    } else {
      var j = b.left - f,
          k = b.left + f + c;
      j < g.left ? e.left = g.left - j : k > g.right && (e.left = g.left + g.width - k);
    }

    return e;
  }, c.prototype.getTitle = function () {
    var a,
        b = this.$element,
        c = this.options;
    return a = b.attr("data-original-title") || ("function" == typeof c.title ? c.title.call(b[0]) : c.title);
  }, c.prototype.getUID = function (a) {
    do {
      a += ~~(1e6 * Math.random());
    } while (document.getElementById(a));

    return a;
  }, c.prototype.tip = function () {
    if (!this.$tip && (this.$tip = a(this.options.template), 1 != this.$tip.length)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
    return this.$tip;
  }, c.prototype.arrow = function () {
    return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow");
  }, c.prototype.enable = function () {
    this.enabled = !0;
  }, c.prototype.disable = function () {
    this.enabled = !1;
  }, c.prototype.toggleEnabled = function () {
    this.enabled = !this.enabled;
  }, c.prototype.toggle = function (b) {
    var c = this;
    b && (c = a(b.currentTarget).data("bs." + this.type), c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c))), b ? (c.inState.click = !c.inState.click, c.isInStateTrue() ? c.enter(c) : c.leave(c)) : c.tip().hasClass("in") ? c.leave(c) : c.enter(c);
  }, c.prototype.destroy = function () {
    var a = this;
    clearTimeout(this.timeout), this.hide(function () {
      a.$element.off("." + a.type).removeData("bs." + a.type), a.$tip && a.$tip.detach(), a.$tip = null, a.$arrow = null, a.$viewport = null, a.$element = null;
    });
  };
  var d = a.fn.tooltip;
  a.fn.tooltip = b, a.fn.tooltip.Constructor = c, a.fn.tooltip.noConflict = function () {
    return a.fn.tooltip = d, this;
  };
}(jQuery), +function (a) {
  "use strict";

  function b(b) {
    return this.each(function () {
      var d = a(this),
          e = d.data("bs.popover"),
          f = "object" == _typeof(b) && b;
      !e && /destroy|hide/.test(b) || (e || d.data("bs.popover", e = new c(this, f)), "string" == typeof b && e[b]());
    });
  }

  var c = function c(a, b) {
    this.init("popover", a, b);
  };

  if (!a.fn.tooltip) throw new Error("Popover requires tooltip.js");
  c.VERSION = "3.3.7", c.DEFAULTS = a.extend({}, a.fn.tooltip.Constructor.DEFAULTS, {
    placement: "right",
    trigger: "click",
    content: "",
    template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
  }), c.prototype = a.extend({}, a.fn.tooltip.Constructor.prototype), c.prototype.constructor = c, c.prototype.getDefaults = function () {
    return c.DEFAULTS;
  }, c.prototype.setContent = function () {
    var a = this.tip(),
        b = this.getTitle(),
        c = this.getContent();
    a.find(".popover-title")[this.options.html ? "html" : "text"](b), a.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof c ? "html" : "append" : "text"](c), a.removeClass("fade top bottom left right in"), a.find(".popover-title").html() || a.find(".popover-title").hide();
  }, c.prototype.hasContent = function () {
    return this.getTitle() || this.getContent();
  }, c.prototype.getContent = function () {
    var a = this.$element,
        b = this.options;
    return a.attr("data-content") || ("function" == typeof b.content ? b.content.call(a[0]) : b.content);
  }, c.prototype.arrow = function () {
    return this.$arrow = this.$arrow || this.tip().find(".arrow");
  };
  var d = a.fn.popover;
  a.fn.popover = b, a.fn.popover.Constructor = c, a.fn.popover.noConflict = function () {
    return a.fn.popover = d, this;
  };
}(jQuery), +function (a) {
  "use strict";

  function b(c, d) {
    this.$body = a(document.body), this.$scrollElement = a(a(c).is(document.body) ? window : c), this.options = a.extend({}, b.DEFAULTS, d), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", a.proxy(this.process, this)), this.refresh(), this.process();
  }

  function c(c) {
    return this.each(function () {
      var d = a(this),
          e = d.data("bs.scrollspy"),
          f = "object" == _typeof(c) && c;
      e || d.data("bs.scrollspy", e = new b(this, f)), "string" == typeof c && e[c]();
    });
  }

  b.VERSION = "3.3.7", b.DEFAULTS = {
    offset: 10
  }, b.prototype.getScrollHeight = function () {
    return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight);
  }, b.prototype.refresh = function () {
    var b = this,
        c = "offset",
        d = 0;
    this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), a.isWindow(this.$scrollElement[0]) || (c = "position", d = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function () {
      var b = a(this),
          e = b.data("target") || b.attr("href"),
          f = /^#./.test(e) && a(e);
      return f && f.length && f.is(":visible") && [[f[c]().top + d, e]] || null;
    }).sort(function (a, b) {
      return a[0] - b[0];
    }).each(function () {
      b.offsets.push(this[0]), b.targets.push(this[1]);
    });
  }, b.prototype.process = function () {
    var a,
        b = this.$scrollElement.scrollTop() + this.options.offset,
        c = this.getScrollHeight(),
        d = this.options.offset + c - this.$scrollElement.height(),
        e = this.offsets,
        f = this.targets,
        g = this.activeTarget;
    if (this.scrollHeight != c && this.refresh(), b >= d) return g != (a = f[f.length - 1]) && this.activate(a);
    if (g && b < e[0]) return this.activeTarget = null, this.clear();

    for (a = e.length; a--;) {
      g != f[a] && b >= e[a] && (void 0 === e[a + 1] || b < e[a + 1]) && this.activate(f[a]);
    }
  }, b.prototype.activate = function (b) {
    this.activeTarget = b, this.clear();
    var c = this.selector + '[data-target="' + b + '"],' + this.selector + '[href="' + b + '"]',
        d = a(c).parents("li").addClass("active");
    d.parent(".dropdown-menu").length && (d = d.closest("li.dropdown").addClass("active")), d.trigger("activate.bs.scrollspy");
  }, b.prototype.clear = function () {
    a(this.selector).parentsUntil(this.options.target, ".active").removeClass("active");
  };
  var d = a.fn.scrollspy;
  a.fn.scrollspy = c, a.fn.scrollspy.Constructor = b, a.fn.scrollspy.noConflict = function () {
    return a.fn.scrollspy = d, this;
  }, a(window).on("load.bs.scrollspy.data-api", function () {
    a('[data-spy="scroll"]').each(function () {
      var b = a(this);
      c.call(b, b.data());
    });
  });
}(jQuery), +function (a) {
  "use strict";

  function b(b) {
    return this.each(function () {
      var d = a(this),
          e = d.data("bs.tab");
      e || d.data("bs.tab", e = new c(this)), "string" == typeof b && e[b]();
    });
  }

  var c = function c(b) {
    this.element = a(b);
  };

  c.VERSION = "3.3.7", c.TRANSITION_DURATION = 150, c.prototype.show = function () {
    var b = this.element,
        c = b.closest("ul:not(.dropdown-menu)"),
        d = b.data("target");

    if (d || (d = b.attr("href"), d = d && d.replace(/.*(?=#[^\s]*$)/, "")), !b.parent("li").hasClass("active")) {
      var e = c.find(".active:last a"),
          f = a.Event("hide.bs.tab", {
        relatedTarget: b[0]
      }),
          g = a.Event("show.bs.tab", {
        relatedTarget: e[0]
      });

      if (e.trigger(f), b.trigger(g), !g.isDefaultPrevented() && !f.isDefaultPrevented()) {
        var h = a(d);
        this.activate(b.closest("li"), c), this.activate(h, h.parent(), function () {
          e.trigger({
            type: "hidden.bs.tab",
            relatedTarget: b[0]
          }), b.trigger({
            type: "shown.bs.tab",
            relatedTarget: e[0]
          });
        });
      }
    }
  }, c.prototype.activate = function (b, d, e) {
    function f() {
      g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), h ? (b[0].offsetWidth, b.addClass("in")) : b.removeClass("fade"), b.parent(".dropdown-menu").length && b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), e && e();
    }

    var g = d.find("> .active"),
        h = e && a.support.transition && (g.length && g.hasClass("fade") || !!d.find("> .fade").length);
    g.length && h ? g.one("bsTransitionEnd", f).emulateTransitionEnd(c.TRANSITION_DURATION) : f(), g.removeClass("in");
  };
  var d = a.fn.tab;
  a.fn.tab = b, a.fn.tab.Constructor = c, a.fn.tab.noConflict = function () {
    return a.fn.tab = d, this;
  };

  var e = function e(c) {
    c.preventDefault(), b.call(a(this), "show");
  };

  a(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', e).on("click.bs.tab.data-api", '[data-toggle="pill"]', e);
}(jQuery), +function (a) {
  "use strict";

  function b(b) {
    return this.each(function () {
      var d = a(this),
          e = d.data("bs.affix"),
          f = "object" == _typeof(b) && b;
      e || d.data("bs.affix", e = new c(this, f)), "string" == typeof b && e[b]();
    });
  }

  var c = function c(b, d) {
    this.options = a.extend({}, c.DEFAULTS, d), this.$target = a(this.options.target).on("scroll.bs.affix.data-api", a.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", a.proxy(this.checkPositionWithEventLoop, this)), this.$element = a(b), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition();
  };

  c.VERSION = "3.3.7", c.RESET = "affix affix-top affix-bottom", c.DEFAULTS = {
    offset: 0,
    target: window
  }, c.prototype.getState = function (a, b, c, d) {
    var e = this.$target.scrollTop(),
        f = this.$element.offset(),
        g = this.$target.height();
    if (null != c && "top" == this.affixed) return e < c && "top";
    if ("bottom" == this.affixed) return null != c ? !(e + this.unpin <= f.top) && "bottom" : !(e + g <= a - d) && "bottom";
    var h = null == this.affixed,
        i = h ? e : f.top,
        j = h ? g : b;
    return null != c && e <= c ? "top" : null != d && i + j >= a - d && "bottom";
  }, c.prototype.getPinnedOffset = function () {
    if (this.pinnedOffset) return this.pinnedOffset;
    this.$element.removeClass(c.RESET).addClass("affix");
    var a = this.$target.scrollTop(),
        b = this.$element.offset();
    return this.pinnedOffset = b.top - a;
  }, c.prototype.checkPositionWithEventLoop = function () {
    setTimeout(a.proxy(this.checkPosition, this), 1);
  }, c.prototype.checkPosition = function () {
    if (this.$element.is(":visible")) {
      var b = this.$element.height(),
          d = this.options.offset,
          e = d.top,
          f = d.bottom,
          g = Math.max(a(document).height(), a(document.body).height());
      "object" != _typeof(d) && (f = e = d), "function" == typeof e && (e = d.top(this.$element)), "function" == typeof f && (f = d.bottom(this.$element));
      var h = this.getState(g, b, e, f);

      if (this.affixed != h) {
        null != this.unpin && this.$element.css("top", "");
        var i = "affix" + (h ? "-" + h : ""),
            j = a.Event(i + ".bs.affix");
        if (this.$element.trigger(j), j.isDefaultPrevented()) return;
        this.affixed = h, this.unpin = "bottom" == h ? this.getPinnedOffset() : null, this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix", "affixed") + ".bs.affix");
      }

      "bottom" == h && this.$element.offset({
        top: g - b - f
      });
    }
  };
  var d = a.fn.affix;
  a.fn.affix = b, a.fn.affix.Constructor = c, a.fn.affix.noConflict = function () {
    return a.fn.affix = d, this;
  }, a(window).on("load", function () {
    a('[data-spy="affix"]').each(function () {
      var c = a(this),
          d = c.data();
      d.offset = d.offset || {}, null != d.offsetBottom && (d.offset.bottom = d.offsetBottom), null != d.offsetTop && (d.offset.top = d.offsetTop), b.call(c, d);
    });
  });
}(jQuery);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./assets/vendor/linearicons/style.css":
/*!*********************************************!*\
  !*** ./assets/vendor/linearicons/style.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[["./assets/js/main.js","runtime","vendors~main"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL21haW4uY3NzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9rbG9yb2ZpbC1jb21tb24uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL21haW4uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3ZlbmRvci9ib290c3RyYXAvY3NzL2Jvb3RzdHJhcC5taW4uY3NzIiwid2VicGFjazovLy8uL2Fzc2V0cy92ZW5kb3IvYm9vdHN0cmFwL2pzL2Jvb3RzdHJhcC5taW4uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3ZlbmRvci9saW5lYXJpY29ucy9zdHlsZS5jc3MiXSwibmFtZXMiOlsiJCIsImRvY3VtZW50IiwicmVhZHkiLCJvbiIsImhhc0NsYXNzIiwiYWRkQ2xhc3MiLCJyZW1vdmVDbGFzcyIsImZpbmQiLCJ0b2dnbGVDbGFzcyIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJjc3MiLCJpbm5lckhlaWdodCIsImxlbmd0aCIsImhlaWdodCIsInNsaW1TY3JvbGwiLCJ3aGVlbFN0ZXAiLCJjbGljayIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInBhcmVudHMiLCJmYWRlT3V0IiwicmVtb3ZlIiwiYWZmZWN0ZWRFbGVtZW50IiwiY2xpY2tUb2dnbGUiLCJzbGlkZVVwIiwic2xpZGVEb3duIiwiY2hhbmdlIiwicHJvcCIsInRvYXN0ciIsIm9wdGlvbnMiLCJ0aW1lT3V0IiwiY2xvc2VCdXR0b24iLCIkY29udGV4dCIsImRhdGEiLCIkbWVzc2FnZSIsIiRwb3NpdGlvbiIsIiRwb3NpdGlvbkNsYXNzIiwicG9zaXRpb25DbGFzcyIsImFsZXJ0IiwiZm4iLCJmMSIsImYyIiwiZWFjaCIsImNsaWNrZWQiLCJiaW5kIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJzZWxmIiwidGFyZ2V0IiwidHlwZSIsImF0dHIiLCJjaGlsZHJlbiIsInN1Ym1pdHRlZCIsIm1vZGFsIiwialF1ZXJ5IiwiRXJyb3IiLCJhIiwiYiIsImpxdWVyeSIsInNwbGl0IiwiY3JlYXRlRWxlbWVudCIsIldlYmtpdFRyYW5zaXRpb24iLCJNb3pUcmFuc2l0aW9uIiwiT1RyYW5zaXRpb24iLCJ0cmFuc2l0aW9uIiwiYyIsInN0eWxlIiwiZW5kIiwiZW11bGF0ZVRyYW5zaXRpb25FbmQiLCJkIiwib25lIiwidHJpZ2dlciIsInN1cHBvcnQiLCJzZXRUaW1lb3V0IiwiZXZlbnQiLCJzcGVjaWFsIiwiYnNUcmFuc2l0aW9uRW5kIiwiYmluZFR5cGUiLCJkZWxlZ2F0ZVR5cGUiLCJoYW5kbGUiLCJpcyIsImhhbmRsZU9iaiIsImhhbmRsZXIiLCJjYWxsIiwiY2xvc2UiLCJWRVJTSU9OIiwiVFJBTlNJVElPTl9EVVJBVElPTiIsInByb3RvdHlwZSIsImciLCJkZXRhY2giLCJmIiwicmVwbGFjZSIsImNsb3Nlc3QiLCJFdmVudCIsImlzRGVmYXVsdFByZXZlbnRlZCIsIkNvbnN0cnVjdG9yIiwibm9Db25mbGljdCIsInRvZ2dsZSIsInNldFN0YXRlIiwiJGVsZW1lbnQiLCJleHRlbmQiLCJERUZBVUxUUyIsImlzTG9hZGluZyIsImxvYWRpbmdUZXh0IiwicmVzZXRUZXh0IiwicHJveHkiLCJyZW1vdmVBdHRyIiwiYnV0dG9uIiwiZmlyc3QiLCJ0ZXN0Iiwic2xpZGUiLCJ0byIsImludGVydmFsIiwicGF1c2UiLCJjeWNsZSIsIiRpbmRpY2F0b3JzIiwicGF1c2VkIiwic2xpZGluZyIsIiRhY3RpdmUiLCIkaXRlbXMiLCJrZXlib2FyZCIsImtleWRvd24iLCJkb2N1bWVudEVsZW1lbnQiLCJ3cmFwIiwidGFnTmFtZSIsIndoaWNoIiwicHJldiIsIm5leHQiLCJjbGVhckludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJnZXRJdGVtSW5kZXgiLCJwYXJlbnQiLCJpbmRleCIsImdldEl0ZW1Gb3JEaXJlY3Rpb24iLCJlcSIsImgiLCJpIiwiaiIsImsiLCJyZWxhdGVkVGFyZ2V0IiwiZGlyZWN0aW9uIiwibCIsIm0iLCJvZmZzZXRXaWR0aCIsImpvaW4iLCJjYXJvdXNlbCIsIiR0cmlnZ2VyIiwiaWQiLCJ0cmFuc2l0aW9uaW5nIiwiJHBhcmVudCIsImdldFBhcmVudCIsImFkZEFyaWFBbmRDb2xsYXBzZWRDbGFzcyIsImRpbWVuc2lvbiIsInNob3ciLCJjYW1lbENhc2UiLCJoaWRlIiwib2Zmc2V0SGVpZ2h0IiwiY29sbGFwc2UiLCJjb250YWlucyIsImluc2VydEFmdGVyIiwic3RvcFByb3BhZ2F0aW9uIiwiZHJvcGRvd24iLCIkYm9keSIsImJvZHkiLCIkZGlhbG9nIiwiJGJhY2tkcm9wIiwiaXNTaG93biIsIm9yaWdpbmFsQm9keVBhZCIsInNjcm9sbGJhcldpZHRoIiwiaWdub3JlQmFja2Ryb3BDbGljayIsInJlbW90ZSIsImxvYWQiLCJCQUNLRFJPUF9UUkFOU0lUSU9OX0RVUkFUSU9OIiwiYmFja2Ryb3AiLCJjaGVja1Njcm9sbGJhciIsInNldFNjcm9sbGJhciIsImVzY2FwZSIsInJlc2l6ZSIsImFwcGVuZFRvIiwic2Nyb2xsVG9wIiwiYWRqdXN0RGlhbG9nIiwiZW5mb3JjZUZvY3VzIiwib2ZmIiwiaGlkZU1vZGFsIiwiaGFzIiwiaGFuZGxlVXBkYXRlIiwicmVzZXRBZGp1c3RtZW50cyIsInJlc2V0U2Nyb2xsYmFyIiwicmVtb3ZlQmFja2Ryb3AiLCJjdXJyZW50VGFyZ2V0IiwiZm9jdXMiLCJzY3JvbGxIZWlnaHQiLCJjbGllbnRIZWlnaHQiLCJwYWRkaW5nTGVmdCIsImJvZHlJc092ZXJmbG93aW5nIiwicGFkZGluZ1JpZ2h0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwicmlnaHQiLCJNYXRoIiwiYWJzIiwibGVmdCIsImNsaWVudFdpZHRoIiwibWVhc3VyZVNjcm9sbGJhciIsInBhcnNlSW50IiwiY2xhc3NOYW1lIiwiYXBwZW5kIiwicmVtb3ZlQ2hpbGQiLCJlbmFibGVkIiwidGltZW91dCIsImhvdmVyU3RhdGUiLCJpblN0YXRlIiwiaW5pdCIsImFuaW1hdGlvbiIsInBsYWNlbWVudCIsInNlbGVjdG9yIiwidGVtcGxhdGUiLCJ0aXRsZSIsImRlbGF5IiwiaHRtbCIsImNvbnRhaW5lciIsInZpZXdwb3J0IiwicGFkZGluZyIsImdldE9wdGlvbnMiLCIkdmlld3BvcnQiLCJpc0Z1bmN0aW9uIiwiaG92ZXIiLCJjb25zdHJ1Y3RvciIsImVudGVyIiwibGVhdmUiLCJfb3B0aW9ucyIsImZpeFRpdGxlIiwiZ2V0RGVmYXVsdHMiLCJnZXREZWxlZ2F0ZU9wdGlvbnMiLCJ0aXAiLCJjbGVhclRpbWVvdXQiLCJpc0luU3RhdGVUcnVlIiwiaGFzQ29udGVudCIsIm93bmVyRG9jdW1lbnQiLCJnZXRVSUQiLCJzZXRDb250ZW50IiwidG9wIiwiZGlzcGxheSIsImdldFBvc2l0aW9uIiwibiIsIm8iLCJib3R0b20iLCJ3aWR0aCIsInAiLCJnZXRDYWxjdWxhdGVkT2Zmc2V0IiwiYXBwbHlQbGFjZW1lbnQiLCJxIiwiJHRpcCIsImlzTmFOIiwib2Zmc2V0Iiwic2V0T2Zmc2V0IiwidXNpbmciLCJyb3VuZCIsImdldFZpZXdwb3J0QWRqdXN0ZWREZWx0YSIsInJlcGxhY2VBcnJvdyIsImFycm93IiwiZ2V0VGl0bGUiLCJTVkdFbGVtZW50Iiwic2Nyb2xsIiwicmFuZG9tIiwiZ2V0RWxlbWVudEJ5SWQiLCIkYXJyb3ciLCJlbmFibGUiLCJkaXNhYmxlIiwidG9nZ2xlRW5hYmxlZCIsImRlc3Ryb3kiLCJyZW1vdmVEYXRhIiwidG9vbHRpcCIsImNvbnRlbnQiLCJnZXRDb250ZW50IiwicG9wb3ZlciIsIiRzY3JvbGxFbGVtZW50Iiwib2Zmc2V0cyIsInRhcmdldHMiLCJhY3RpdmVUYXJnZXQiLCJwcm9jZXNzIiwicmVmcmVzaCIsImdldFNjcm9sbEhlaWdodCIsIm1heCIsImlzV2luZG93IiwibWFwIiwic29ydCIsInB1c2giLCJhY3RpdmF0ZSIsImNsZWFyIiwicGFyZW50c1VudGlsIiwic2Nyb2xsc3B5IiwiZWxlbWVudCIsInRhYiIsIiR0YXJnZXQiLCJjaGVja1Bvc2l0aW9uIiwiY2hlY2tQb3NpdGlvbldpdGhFdmVudExvb3AiLCJhZmZpeGVkIiwidW5waW4iLCJwaW5uZWRPZmZzZXQiLCJSRVNFVCIsImdldFN0YXRlIiwiZ2V0UGlubmVkT2Zmc2V0IiwiYWZmaXgiLCJvZmZzZXRCb3R0b20iLCJvZmZzZXRUb3AiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLHVDOzs7Ozs7Ozs7Ozs7Ozs7QUNBQUEsQ0FBQyxDQUFDQyxRQUFELENBQUQsQ0FBWUMsS0FBWixDQUFrQixZQUFXO0FBRTVCOzs7QUFJQUYsR0FBQyxDQUFDLHVCQUFELENBQUQsQ0FBMkJHLEVBQTNCLENBQThCLE9BQTlCLEVBQXVDLFlBQVc7QUFDakQsUUFBRyxDQUFDSCxDQUFDLENBQUMsTUFBRCxDQUFELENBQVVJLFFBQVYsQ0FBbUIsa0JBQW5CLENBQUosRUFBNEM7QUFDM0NKLE9BQUMsQ0FBQyxNQUFELENBQUQsQ0FBVUssUUFBVixDQUFtQixrQkFBbkI7QUFFQSxLQUhELE1BR087QUFDTkwsT0FBQyxDQUFDLE1BQUQsQ0FBRCxDQUFVTSxXQUFWLENBQXNCLGtCQUF0QjtBQUNBTixPQUFDLENBQUMsTUFBRCxDQUFELENBQVVNLFdBQVYsQ0FBc0IsZ0JBQXRCLEVBRk0sQ0FFbUM7QUFDekM7O0FBRUROLEtBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUU8sSUFBUixDQUFhLE1BQWIsRUFBcUJDLFdBQXJCLENBQWlDLDhDQUFqQzs7QUFFQSxRQUFHUixDQUFDLENBQUNTLE1BQUQsQ0FBRCxDQUFVQyxVQUFWLEtBQXlCLElBQTVCLEVBQWtDO0FBQ2pDLFVBQUcsQ0FBQ1YsQ0FBQyxDQUFDLE1BQUQsQ0FBRCxDQUFVSSxRQUFWLENBQW1CLGtCQUFuQixDQUFKLEVBQTRDO0FBQzNDSixTQUFDLENBQUMsTUFBRCxDQUFELENBQVVLLFFBQVYsQ0FBbUIsa0JBQW5CO0FBQ0EsT0FGRCxNQUVPO0FBQ05MLFNBQUMsQ0FBQyxNQUFELENBQUQsQ0FBVU0sV0FBVixDQUFzQixrQkFBdEI7QUFDQTtBQUNEO0FBQ0QsR0FsQkQ7QUFvQkFOLEdBQUMsQ0FBQ1MsTUFBRCxDQUFELENBQVVOLEVBQVYsQ0FBYSxNQUFiLEVBQXFCLFlBQVc7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Ozs7Ozs7O0FDTHhGLHVDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcblxuXHQvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tL1xuXHQvKlx0VE9QIE5BVklHQVRJT04gQU5EIExBWU9VVFxuXHQvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG5cdCQoJy5idG4tdG9nZ2xlLWZ1bGx3aWR0aCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuXHRcdGlmKCEkKCdib2R5JykuaGFzQ2xhc3MoJ2xheW91dC1mdWxsd2lkdGgnKSkge1xuXHRcdFx0JCgnYm9keScpLmFkZENsYXNzKCdsYXlvdXQtZnVsbHdpZHRoJyk7XG5cblx0XHR9IGVsc2Uge1xuXHRcdFx0JCgnYm9keScpLnJlbW92ZUNsYXNzKCdsYXlvdXQtZnVsbHdpZHRoJyk7XG5cdFx0XHQkKCdib2R5JykucmVtb3ZlQ2xhc3MoJ2xheW91dC1kZWZhdWx0Jyk7IC8vIGFsc28gcmVtb3ZlIGRlZmF1bHQgYmVoYXZpb3VyIGlmIHNldFxuXHRcdH1cblxuXHRcdCQodGhpcykuZmluZCgnLmxucicpLnRvZ2dsZUNsYXNzKCdsbnItYXJyb3ctbGVmdC1jaXJjbGUgbG5yLWFycm93LXJpZ2h0LWNpcmNsZScpO1xuXG5cdFx0aWYoJCh3aW5kb3cpLmlubmVyV2lkdGgoKSA8IDEwMjUpIHtcblx0XHRcdGlmKCEkKCdib2R5JykuaGFzQ2xhc3MoJ29mZmNhbnZhcy1hY3RpdmUnKSkge1xuXHRcdFx0XHQkKCdib2R5JykuYWRkQ2xhc3MoJ29mZmNhbnZhcy1hY3RpdmUnKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdCQoJ2JvZHknKS5yZW1vdmVDbGFzcygnb2ZmY2FudmFzLWFjdGl2ZScpO1xuXHRcdFx0fVxuXHRcdH1cblx0fSk7XG5cblx0JCh3aW5kb3cpLm9uKCdsb2FkJywgZnVuY3Rpb24oKSB7XG5cdFx0aWYoJCh3aW5kb3cpLmlubmVyV2lkdGgoKSA8IDEwMjUpIHtcblx0XHRcdCQoJy5idG4tdG9nZ2xlLWZ1bGx3aWR0aCcpLmZpbmQoJy5pY29uLWFycm93cycpXG5cdFx0XHQucmVtb3ZlQ2xhc3MoJ2ljb24tYXJyb3dzLW1vdmUtbGVmdCcpXG5cdFx0XHQuYWRkQ2xhc3MoJ2ljb24tYXJyb3dzLW1vdmUtcmlnaHQnKTtcblx0XHR9XG5cblx0XHQvLyBhZGp1c3QgcmlnaHQgc2lkZWJhciB0b3AgcG9zaXRpb25cblx0XHQkKCcucmlnaHQtc2lkZWJhcicpLmNzcygndG9wJywgJCgnLm5hdmJhcicpLmlubmVySGVpZ2h0KCkpO1xuXG5cdFx0Ly8gaWYgcGFnZSBoYXMgY29udGVudC1tZW51LCBzZXQgdG9wIHBhZGRpbmcgb2YgbWFpbi1jb250ZW50XG5cdFx0aWYoJCgnLmhhcy1jb250ZW50LW1lbnUnKS5sZW5ndGggPiAwKSB7XG5cdFx0XHQkKCcubmF2YmFyICsgLm1haW4tY29udGVudCcpLmNzcygncGFkZGluZy10b3AnLCAkKCcubmF2YmFyJykuaW5uZXJIZWlnaHQoKSk7XG5cdFx0fVxuXG5cdFx0Ly8gZm9yIHNob3J0ZXIgbWFpbiBjb250ZW50XG5cdFx0aWYoJCgnLm1haW4nKS5oZWlnaHQoKSA8ICQoJyNzaWRlYmFyLW5hdicpLmhlaWdodCgpKSB7XG5cdFx0XHQkKCcubWFpbicpLmNzcygnbWluLWhlaWdodCcsICQoJyNzaWRlYmFyLW5hdicpLmhlaWdodCgpKTtcblx0XHR9XG5cdH0pO1xuXG5cblx0LyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS9cblx0LypcdFNJREVCQVIgTkFWSUdBVElPTlxuXHQvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG5cdCQoJy5zaWRlYmFyIGFbZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiXScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuXHRcdGlmKCQodGhpcykuaGFzQ2xhc3MoJ2NvbGxhcHNlZCcpKSB7XG5cdFx0XHQkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUnKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0JCh0aGlzKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG5cdFx0fVxuXHR9KTtcblxuXHRpZiggJCgnLnNpZGViYXItc2Nyb2xsJykubGVuZ3RoID4gMCApIHtcblx0XHQkKCcuc2lkZWJhci1zY3JvbGwnKS5zbGltU2Nyb2xsKHtcblx0XHRcdGhlaWdodDogJzk1JScsXG5cdFx0XHR3aGVlbFN0ZXA6IDIsXG5cdFx0fSk7XG5cdH1cblxuXG5cdC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vXG5cdC8qXHRQQU5FTCBGVU5DVElPTlNcblx0LyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuXHQvLyBwYW5lbCByZW1vdmVcblx0JCgnLnBhbmVsIC5idG4tcmVtb3ZlJykuY2xpY2soZnVuY3Rpb24oZSl7XG5cblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0JCh0aGlzKS5wYXJlbnRzKCcucGFuZWwnKS5mYWRlT3V0KDMwMCwgZnVuY3Rpb24oKXtcblx0XHRcdCQodGhpcykucmVtb3ZlKCk7XG5cdFx0fSk7XG5cdH0pO1xuXG5cdC8vIHBhbmVsIGNvbGxhcHNlL2V4cGFuZFxuXHR2YXIgYWZmZWN0ZWRFbGVtZW50ID0gJCgnLnBhbmVsLWJvZHknKTtcblxuXHQkKCcucGFuZWwgLmJ0bi10b2dnbGUtY29sbGFwc2UnKS5jbGlja1RvZ2dsZShcblx0XHRmdW5jdGlvbihlKSB7XG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cblx0XHRcdC8vIGlmIGhhcyBzY3JvbGxcblx0XHRcdGlmKCAkKHRoaXMpLnBhcmVudHMoJy5wYW5lbCcpLmZpbmQoJy5zbGltU2Nyb2xsRGl2JykubGVuZ3RoID4gMCApIHtcblx0XHRcdFx0YWZmZWN0ZWRFbGVtZW50ID0gJCgnLnNsaW1TY3JvbGxEaXYnKTtcblx0XHRcdH1cblxuXHRcdFx0JCh0aGlzKS5wYXJlbnRzKCcucGFuZWwnKS5maW5kKGFmZmVjdGVkRWxlbWVudCkuc2xpZGVVcCgzMDApO1xuXHRcdFx0JCh0aGlzKS5maW5kKCdpLmxuci1jaGV2cm9uLXVwJykudG9nZ2xlQ2xhc3MoJ2xuci1jaGV2cm9uLWRvd24nKTtcblx0XHR9LFxuXHRcdGZ1bmN0aW9uKGUpIHtcblx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblxuXHRcdFx0Ly8gaWYgaGFzIHNjcm9sbFxuXHRcdFx0aWYoICQodGhpcykucGFyZW50cygnLnBhbmVsJykuZmluZCgnLnNsaW1TY3JvbGxEaXYnKS5sZW5ndGggPiAwICkge1xuXHRcdFx0XHRhZmZlY3RlZEVsZW1lbnQgPSAkKCcuc2xpbVNjcm9sbERpdicpO1xuXHRcdFx0fVxuXG5cdFx0XHQkKHRoaXMpLnBhcmVudHMoJy5wYW5lbCcpLmZpbmQoYWZmZWN0ZWRFbGVtZW50KS5zbGlkZURvd24oMzAwKTtcblx0XHRcdCQodGhpcykuZmluZCgnaS5sbnItY2hldnJvbi11cCcpLnRvZ2dsZUNsYXNzKCdsbnItY2hldnJvbi1kb3duJyk7XG5cdFx0fVxuXHQpO1xuXG5cblx0LyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS9cblx0LypcdFBBTkVMIFNDUk9MTElOR1xuXHQvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG5cdGlmKCAkKCcucGFuZWwtc2Nyb2xsaW5nJykubGVuZ3RoID4gMCkge1xuXHRcdCQoJy5wYW5lbC1zY3JvbGxpbmcgLnBhbmVsLWJvZHknKS5zbGltU2Nyb2xsKHtcblx0XHRcdGhlaWdodDogJzQzMHB4Jyxcblx0XHRcdHdoZWVsU3RlcDogMixcblx0XHR9KTtcblx0fVxuXG5cdGlmKCAkKCcjcGFuZWwtc2Nyb2xsaW5nLWRlbW8nKS5sZW5ndGggPiAwKSB7XG5cdFx0JCgnI3BhbmVsLXNjcm9sbGluZy1kZW1vIC5wYW5lbC1ib2R5Jykuc2xpbVNjcm9sbCh7XG5cdFx0XHRoZWlnaHQ6ICcxNzVweCcsXG5cdFx0XHR3aGVlbFN0ZXA6IDIsXG5cdFx0fSk7XG5cdH1cblxuXHQvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tL1xuXHQvKlx0VE9ETyBMSVNUXG5cdC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cblx0JCgnLnRvZG8tbGlzdCBpbnB1dCcpLmNoYW5nZSggZnVuY3Rpb24oKSB7XG5cdFx0aWYoICQodGhpcykucHJvcCgnY2hlY2tlZCcpICkge1xuXHRcdFx0JCh0aGlzKS5wYXJlbnRzKCdsaScpLmFkZENsYXNzKCdjb21wbGV0ZWQnKTtcblx0XHR9ZWxzZSB7XG5cdFx0XHQkKHRoaXMpLnBhcmVudHMoJ2xpJykucmVtb3ZlQ2xhc3MoJ2NvbXBsZXRlZCcpO1xuXHRcdH1cblx0fSk7XG5cblxuXHQvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tL1xuXHQvKiBUT0FTVFIgTk9USUZJQ0FUSU9OXG5cdC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cblx0aWYoJCgnI3RvYXN0ci1kZW1vJykubGVuZ3RoID4gMCkge1xuXHRcdHRvYXN0ci5vcHRpb25zLnRpbWVPdXQgPSBcImZhbHNlXCI7XG5cdFx0dG9hc3RyLm9wdGlvbnMuY2xvc2VCdXR0b24gPSB0cnVlO1xuXHRcdHRvYXN0clsnaW5mbyddKCdIaSB0aGVyZSwgdGhpcyBpcyBub3RpZmljYXRpb24gZGVtbyB3aXRoIEhUTUwgc3VwcG9ydC4gU28sIHlvdSBjYW4gYWRkIEhUTUwgZWxlbWVudHMgbGlrZSA8YSBocmVmPVwiI1wiPnRoaXMgbGluazwvYT4nKTtcblxuXHRcdCQoJy5idG4tdG9hc3RyJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG5cdFx0XHQkY29udGV4dCA9ICQodGhpcykuZGF0YSgnY29udGV4dCcpO1xuXHRcdFx0JG1lc3NhZ2UgPSAkKHRoaXMpLmRhdGEoJ21lc3NhZ2UnKTtcblx0XHRcdCRwb3NpdGlvbiA9ICQodGhpcykuZGF0YSgncG9zaXRpb24nKTtcblxuXHRcdFx0aWYoJGNvbnRleHQgPT0gJycpIHtcblx0XHRcdFx0JGNvbnRleHQgPSAnaW5mbyc7XG5cdFx0XHR9XG5cblx0XHRcdGlmKCRwb3NpdGlvbiA9PSAnJykge1xuXHRcdFx0XHQkcG9zaXRpb25DbGFzcyA9ICd0b2FzdC1sZWZ0LXRvcCc7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQkcG9zaXRpb25DbGFzcyA9ICd0b2FzdC0nICsgJHBvc2l0aW9uO1xuXHRcdFx0fVxuXG5cdFx0XHR0b2FzdHIucmVtb3ZlKCk7XG5cdFx0XHR0b2FzdHJbJGNvbnRleHRdKCRtZXNzYWdlLCAnJyAsIHsgcG9zaXRpb25DbGFzczogJHBvc2l0aW9uQ2xhc3MgfSk7XG5cdFx0fSk7XG5cblx0XHQkKCcjdG9hc3RyLWNhbGxiYWNrMScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuXHRcdFx0JG1lc3NhZ2UgPSAkKHRoaXMpLmRhdGEoJ21lc3NhZ2UnKTtcblxuXHRcdFx0dG9hc3RyLm9wdGlvbnMgPSB7XG5cdFx0XHRcdFwidGltZU91dFwiOiBcIjMwMFwiLFxuXHRcdFx0XHRcIm9uU2hvd25cIjogZnVuY3Rpb24oKSB7IGFsZXJ0KCdvblNob3duIGNhbGxiYWNrJyk7IH0sXG5cdFx0XHRcdFwib25IaWRkZW5cIjogZnVuY3Rpb24oKSB7IGFsZXJ0KCdvbkhpZGRlbiBjYWxsYmFjaycpOyB9XG5cdFx0XHR9XG5cblx0XHRcdHRvYXN0clsnaW5mbyddKCRtZXNzYWdlKTtcblx0XHR9KTtcblxuXHRcdCQoJyN0b2FzdHItY2FsbGJhY2syJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG5cdFx0XHQkbWVzc2FnZSA9ICQodGhpcykuZGF0YSgnbWVzc2FnZScpO1xuXG5cdFx0XHR0b2FzdHIub3B0aW9ucyA9IHtcblx0XHRcdFx0XCJ0aW1lT3V0XCI6IFwiMTAwMDBcIixcblx0XHRcdFx0XCJvbmNsaWNrXCI6IGZ1bmN0aW9uKCkgeyBhbGVydCgnb25jbGljayBjYWxsYmFjaycpOyB9LFxuXHRcdFx0fVxuXG5cdFx0XHR0b2FzdHJbJ2luZm8nXSgkbWVzc2FnZSk7XG5cblx0XHR9KTtcblxuXHRcdCQoJyN0b2FzdHItY2FsbGJhY2szJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG5cdFx0XHQkbWVzc2FnZSA9ICQodGhpcykuZGF0YSgnbWVzc2FnZScpO1xuXG5cdFx0XHR0b2FzdHIub3B0aW9ucyA9IHtcblx0XHRcdFx0XCJ0aW1lT3V0XCI6IFwiMTAwMDBcIixcblx0XHRcdFx0XCJjbG9zZUJ1dHRvblwiOiB0cnVlLFxuXHRcdFx0XHRcIm9uQ2xvc2VDbGlja1wiOiBmdW5jdGlvbigpIHsgYWxlcnQoJ29uQ2xvc2VDbGljayBjYWxsYmFjaycpOyB9XG5cdFx0XHR9XG5cblx0XHRcdHRvYXN0clsnaW5mbyddKCRtZXNzYWdlKTtcblx0XHR9KTtcblx0fVxufSk7XG5cbi8vIHRvZ2dsZSBmdW5jdGlvblxuJC5mbi5jbGlja1RvZ2dsZSA9IGZ1bmN0aW9uKCBmMSwgZjIgKSB7XG5cdHJldHVybiB0aGlzLmVhY2goIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBjbGlja2VkID0gZmFsc2U7XG5cdFx0JCh0aGlzKS5iaW5kKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuXHRcdFx0aWYoY2xpY2tlZCkge1xuXHRcdFx0XHRjbGlja2VkID0gZmFsc2U7XG5cdFx0XHRcdHJldHVybiBmMi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXHRcdFx0fVxuXG5cdFx0XHRjbGlja2VkID0gdHJ1ZTtcblx0XHRcdHJldHVybiBmMS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXHRcdH0pO1xuXHR9KTtcblxufVxuXG5cbiIsIi8qXG4gKiBXZWxjb21lIHRvIHlvdXIgYXBwJ3MgbWFpbiBKYXZhU2NyaXB0IGZpbGUhXG4gKlxuICogV2UgcmVjb21tZW5kIGluY2x1ZGluZyB0aGUgYnVpbHQgdmVyc2lvbiBvZiB0aGlzIEphdmFTY3JpcHQgZmlsZVxuICogKGFuZCBpdHMgQ1NTIGZpbGUpIGluIHlvdXIgYmFzZSBsYXlvdXQgKGJhc2UuaHRtbC50d2lnKS5cbiAqL1xuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCAnLi4vdmVuZG9yL2Jvb3RzdHJhcC9qcy9ib290c3RyYXAubWluJztcbmltcG9ydCAnanF1ZXJ5LXNsaW1zY3JvbGwnO1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCAnLi9rbG9yb2ZpbC1jb21tb24nO1xuXG5pbXBvcnQgJ2ZvbnQtYXdlc29tZS9jc3MvZm9udC1hd2Vzb21lLm1pbi5jc3MnO1xuLy8gYW55IENTUyB5b3UgcmVxdWlyZSB3aWxsIG91dHB1dCBpbnRvIGEgc2luZ2xlIGNzcyBmaWxlIChhcHAuY3NzIGluIHRoaXMgY2FzZSlcbmltcG9ydCAnLi4vdmVuZG9yL2Jvb3RzdHJhcC9jc3MvYm9vdHN0cmFwLm1pbi5jc3MnO1xuaW1wb3J0ICcuLi92ZW5kb3IvbGluZWFyaWNvbnMvc3R5bGUuY3NzJztcblxuaW1wb3J0ICcuLi9jc3MvbWFpbi5jc3MnO1xuXG5cbmlmKCQoJyNidG5Ub2dnbGVQYXNzd29yZCcpLmxlbmd0aCkge1xuICAgICQoJyNidG5Ub2dnbGVQYXNzd29yZCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbGV0IHNlbGYgPSAkKHRoaXMpLCB0YXJnZXQgPSAkKHNlbGYuZGF0YSgndGFyZ2V0JykpLCB0eXBlID0gdGFyZ2V0LmF0dHIoJ3R5cGUnKTtcblxuICAgICAgICBpZih0eXBlID09PSAndGV4dCcpIHtcbiAgICAgICAgICAgIHRhcmdldC5hdHRyKCd0eXBlJywgJ3Bhc3N3b3JkJyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0YXJnZXQuYXR0cigndHlwZScsICd0ZXh0Jyk7XG4gICAgICAgIH1cblxuICAgICAgICBzZWxmLmNoaWxkcmVuKCdpJykudG9nZ2xlQ2xhc3MoJ2ZhLWV5ZS1zbGFzaCcpLnRvZ2dsZUNsYXNzKCdmYS1leWUnKTtcbiAgICB9KTtcbn1cblxuaWYoJCgnI3Nlc3Npb25Nb2RhbCcpLmxlbmd0aCkge1xuICAgIGxldCBzZWxmID0gJCgnI3Nlc3Npb25Nb2RhbCcpLCBzdWJtaXR0ZWQgPSBzZWxmLmRhdGEoJ3N1Ym1pdHRlZCcpO1xuICAgIGlmKHN1Ym1pdHRlZCkge1xuICAgICAgICBzZWxmLm1vZGFsKCdzaG93Jyk7XG4gICAgfVxufSIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8qIVxuICogQm9vdHN0cmFwIHYzLjMuNyAoaHR0cDovL2dldGJvb3RzdHJhcC5jb20pXG4gKiBDb3B5cmlnaHQgMjAxMS0yMDE2IFR3aXR0ZXIsIEluYy5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZVxuICovXG5pZihcInVuZGVmaW5lZFwiPT10eXBlb2YgalF1ZXJ5KXRocm93IG5ldyBFcnJvcihcIkJvb3RzdHJhcCdzIEphdmFTY3JpcHQgcmVxdWlyZXMgalF1ZXJ5XCIpOytmdW5jdGlvbihhKXtcInVzZSBzdHJpY3RcIjt2YXIgYj1hLmZuLmpxdWVyeS5zcGxpdChcIiBcIilbMF0uc3BsaXQoXCIuXCIpO2lmKGJbMF08MiYmYlsxXTw5fHwxPT1iWzBdJiY5PT1iWzFdJiZiWzJdPDF8fGJbMF0+Myl0aHJvdyBuZXcgRXJyb3IoXCJCb290c3RyYXAncyBKYXZhU2NyaXB0IHJlcXVpcmVzIGpRdWVyeSB2ZXJzaW9uIDEuOS4xIG9yIGhpZ2hlciwgYnV0IGxvd2VyIHRoYW4gdmVyc2lvbiA0XCIpfShqUXVlcnkpLCtmdW5jdGlvbihhKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBiKCl7dmFyIGE9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJvb3RzdHJhcFwiKSxiPXtXZWJraXRUcmFuc2l0aW9uOlwid2Via2l0VHJhbnNpdGlvbkVuZFwiLE1velRyYW5zaXRpb246XCJ0cmFuc2l0aW9uZW5kXCIsT1RyYW5zaXRpb246XCJvVHJhbnNpdGlvbkVuZCBvdHJhbnNpdGlvbmVuZFwiLHRyYW5zaXRpb246XCJ0cmFuc2l0aW9uZW5kXCJ9O2Zvcih2YXIgYyBpbiBiKWlmKHZvaWQgMCE9PWEuc3R5bGVbY10pcmV0dXJue2VuZDpiW2NdfTtyZXR1cm4hMX1hLmZuLmVtdWxhdGVUcmFuc2l0aW9uRW5kPWZ1bmN0aW9uKGIpe3ZhciBjPSExLGQ9dGhpczthKHRoaXMpLm9uZShcImJzVHJhbnNpdGlvbkVuZFwiLGZ1bmN0aW9uKCl7Yz0hMH0pO3ZhciBlPWZ1bmN0aW9uKCl7Y3x8YShkKS50cmlnZ2VyKGEuc3VwcG9ydC50cmFuc2l0aW9uLmVuZCl9O3JldHVybiBzZXRUaW1lb3V0KGUsYiksdGhpc30sYShmdW5jdGlvbigpe2Euc3VwcG9ydC50cmFuc2l0aW9uPWIoKSxhLnN1cHBvcnQudHJhbnNpdGlvbiYmKGEuZXZlbnQuc3BlY2lhbC5ic1RyYW5zaXRpb25FbmQ9e2JpbmRUeXBlOmEuc3VwcG9ydC50cmFuc2l0aW9uLmVuZCxkZWxlZ2F0ZVR5cGU6YS5zdXBwb3J0LnRyYW5zaXRpb24uZW5kLGhhbmRsZTpmdW5jdGlvbihiKXtpZihhKGIudGFyZ2V0KS5pcyh0aGlzKSlyZXR1cm4gYi5oYW5kbGVPYmouaGFuZGxlci5hcHBseSh0aGlzLGFyZ3VtZW50cyl9fSl9KX0oalF1ZXJ5KSwrZnVuY3Rpb24oYSl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gYihiKXtyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCl7dmFyIGM9YSh0aGlzKSxlPWMuZGF0YShcImJzLmFsZXJ0XCIpO2V8fGMuZGF0YShcImJzLmFsZXJ0XCIsZT1uZXcgZCh0aGlzKSksXCJzdHJpbmdcIj09dHlwZW9mIGImJmVbYl0uY2FsbChjKX0pfXZhciBjPSdbZGF0YS1kaXNtaXNzPVwiYWxlcnRcIl0nLGQ9ZnVuY3Rpb24oYil7YShiKS5vbihcImNsaWNrXCIsYyx0aGlzLmNsb3NlKX07ZC5WRVJTSU9OPVwiMy4zLjdcIixkLlRSQU5TSVRJT05fRFVSQVRJT049MTUwLGQucHJvdG90eXBlLmNsb3NlPWZ1bmN0aW9uKGIpe2Z1bmN0aW9uIGMoKXtnLmRldGFjaCgpLnRyaWdnZXIoXCJjbG9zZWQuYnMuYWxlcnRcIikucmVtb3ZlKCl9dmFyIGU9YSh0aGlzKSxmPWUuYXR0cihcImRhdGEtdGFyZ2V0XCIpO2Z8fChmPWUuYXR0cihcImhyZWZcIiksZj1mJiZmLnJlcGxhY2UoLy4qKD89I1teXFxzXSokKS8sXCJcIikpO3ZhciBnPWEoXCIjXCI9PT1mP1tdOmYpO2ImJmIucHJldmVudERlZmF1bHQoKSxnLmxlbmd0aHx8KGc9ZS5jbG9zZXN0KFwiLmFsZXJ0XCIpKSxnLnRyaWdnZXIoYj1hLkV2ZW50KFwiY2xvc2UuYnMuYWxlcnRcIikpLGIuaXNEZWZhdWx0UHJldmVudGVkKCl8fChnLnJlbW92ZUNsYXNzKFwiaW5cIiksYS5zdXBwb3J0LnRyYW5zaXRpb24mJmcuaGFzQ2xhc3MoXCJmYWRlXCIpP2cub25lKFwiYnNUcmFuc2l0aW9uRW5kXCIsYykuZW11bGF0ZVRyYW5zaXRpb25FbmQoZC5UUkFOU0lUSU9OX0RVUkFUSU9OKTpjKCkpfTt2YXIgZT1hLmZuLmFsZXJ0O2EuZm4uYWxlcnQ9YixhLmZuLmFsZXJ0LkNvbnN0cnVjdG9yPWQsYS5mbi5hbGVydC5ub0NvbmZsaWN0PWZ1bmN0aW9uKCl7cmV0dXJuIGEuZm4uYWxlcnQ9ZSx0aGlzfSxhKGRvY3VtZW50KS5vbihcImNsaWNrLmJzLmFsZXJ0LmRhdGEtYXBpXCIsYyxkLnByb3RvdHlwZS5jbG9zZSl9KGpRdWVyeSksK2Z1bmN0aW9uKGEpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIGIoYil7cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpe3ZhciBkPWEodGhpcyksZT1kLmRhdGEoXCJicy5idXR0b25cIiksZj1cIm9iamVjdFwiPT10eXBlb2YgYiYmYjtlfHxkLmRhdGEoXCJicy5idXR0b25cIixlPW5ldyBjKHRoaXMsZikpLFwidG9nZ2xlXCI9PWI/ZS50b2dnbGUoKTpiJiZlLnNldFN0YXRlKGIpfSl9dmFyIGM9ZnVuY3Rpb24oYixkKXt0aGlzLiRlbGVtZW50PWEoYiksdGhpcy5vcHRpb25zPWEuZXh0ZW5kKHt9LGMuREVGQVVMVFMsZCksdGhpcy5pc0xvYWRpbmc9ITF9O2MuVkVSU0lPTj1cIjMuMy43XCIsYy5ERUZBVUxUUz17bG9hZGluZ1RleHQ6XCJsb2FkaW5nLi4uXCJ9LGMucHJvdG90eXBlLnNldFN0YXRlPWZ1bmN0aW9uKGIpe3ZhciBjPVwiZGlzYWJsZWRcIixkPXRoaXMuJGVsZW1lbnQsZT1kLmlzKFwiaW5wdXRcIik/XCJ2YWxcIjpcImh0bWxcIixmPWQuZGF0YSgpO2IrPVwiVGV4dFwiLG51bGw9PWYucmVzZXRUZXh0JiZkLmRhdGEoXCJyZXNldFRleHRcIixkW2VdKCkpLHNldFRpbWVvdXQoYS5wcm94eShmdW5jdGlvbigpe2RbZV0obnVsbD09ZltiXT90aGlzLm9wdGlvbnNbYl06ZltiXSksXCJsb2FkaW5nVGV4dFwiPT1iPyh0aGlzLmlzTG9hZGluZz0hMCxkLmFkZENsYXNzKGMpLmF0dHIoYyxjKS5wcm9wKGMsITApKTp0aGlzLmlzTG9hZGluZyYmKHRoaXMuaXNMb2FkaW5nPSExLGQucmVtb3ZlQ2xhc3MoYykucmVtb3ZlQXR0cihjKS5wcm9wKGMsITEpKX0sdGhpcyksMCl9LGMucHJvdG90eXBlLnRvZ2dsZT1mdW5jdGlvbigpe3ZhciBhPSEwLGI9dGhpcy4kZWxlbWVudC5jbG9zZXN0KCdbZGF0YS10b2dnbGU9XCJidXR0b25zXCJdJyk7aWYoYi5sZW5ndGgpe3ZhciBjPXRoaXMuJGVsZW1lbnQuZmluZChcImlucHV0XCIpO1wicmFkaW9cIj09Yy5wcm9wKFwidHlwZVwiKT8oYy5wcm9wKFwiY2hlY2tlZFwiKSYmKGE9ITEpLGIuZmluZChcIi5hY3RpdmVcIikucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIiksdGhpcy4kZWxlbWVudC5hZGRDbGFzcyhcImFjdGl2ZVwiKSk6XCJjaGVja2JveFwiPT1jLnByb3AoXCJ0eXBlXCIpJiYoYy5wcm9wKFwiY2hlY2tlZFwiKSE9PXRoaXMuJGVsZW1lbnQuaGFzQ2xhc3MoXCJhY3RpdmVcIikmJihhPSExKSx0aGlzLiRlbGVtZW50LnRvZ2dsZUNsYXNzKFwiYWN0aXZlXCIpKSxjLnByb3AoXCJjaGVja2VkXCIsdGhpcy4kZWxlbWVudC5oYXNDbGFzcyhcImFjdGl2ZVwiKSksYSYmYy50cmlnZ2VyKFwiY2hhbmdlXCIpfWVsc2UgdGhpcy4kZWxlbWVudC5hdHRyKFwiYXJpYS1wcmVzc2VkXCIsIXRoaXMuJGVsZW1lbnQuaGFzQ2xhc3MoXCJhY3RpdmVcIikpLHRoaXMuJGVsZW1lbnQudG9nZ2xlQ2xhc3MoXCJhY3RpdmVcIil9O3ZhciBkPWEuZm4uYnV0dG9uO2EuZm4uYnV0dG9uPWIsYS5mbi5idXR0b24uQ29uc3RydWN0b3I9YyxhLmZuLmJ1dHRvbi5ub0NvbmZsaWN0PWZ1bmN0aW9uKCl7cmV0dXJuIGEuZm4uYnV0dG9uPWQsdGhpc30sYShkb2N1bWVudCkub24oXCJjbGljay5icy5idXR0b24uZGF0YS1hcGlcIiwnW2RhdGEtdG9nZ2xlXj1cImJ1dHRvblwiXScsZnVuY3Rpb24oYyl7dmFyIGQ9YShjLnRhcmdldCkuY2xvc2VzdChcIi5idG5cIik7Yi5jYWxsKGQsXCJ0b2dnbGVcIiksYShjLnRhcmdldCkuaXMoJ2lucHV0W3R5cGU9XCJyYWRpb1wiXSwgaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdJyl8fChjLnByZXZlbnREZWZhdWx0KCksZC5pcyhcImlucHV0LGJ1dHRvblwiKT9kLnRyaWdnZXIoXCJmb2N1c1wiKTpkLmZpbmQoXCJpbnB1dDp2aXNpYmxlLGJ1dHRvbjp2aXNpYmxlXCIpLmZpcnN0KCkudHJpZ2dlcihcImZvY3VzXCIpKX0pLm9uKFwiZm9jdXMuYnMuYnV0dG9uLmRhdGEtYXBpIGJsdXIuYnMuYnV0dG9uLmRhdGEtYXBpXCIsJ1tkYXRhLXRvZ2dsZV49XCJidXR0b25cIl0nLGZ1bmN0aW9uKGIpe2EoYi50YXJnZXQpLmNsb3Nlc3QoXCIuYnRuXCIpLnRvZ2dsZUNsYXNzKFwiZm9jdXNcIiwvXmZvY3VzKGluKT8kLy50ZXN0KGIudHlwZSkpfSl9KGpRdWVyeSksK2Z1bmN0aW9uKGEpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIGIoYil7cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpe3ZhciBkPWEodGhpcyksZT1kLmRhdGEoXCJicy5jYXJvdXNlbFwiKSxmPWEuZXh0ZW5kKHt9LGMuREVGQVVMVFMsZC5kYXRhKCksXCJvYmplY3RcIj09dHlwZW9mIGImJmIpLGc9XCJzdHJpbmdcIj09dHlwZW9mIGI/YjpmLnNsaWRlO2V8fGQuZGF0YShcImJzLmNhcm91c2VsXCIsZT1uZXcgYyh0aGlzLGYpKSxcIm51bWJlclwiPT10eXBlb2YgYj9lLnRvKGIpOmc/ZVtnXSgpOmYuaW50ZXJ2YWwmJmUucGF1c2UoKS5jeWNsZSgpfSl9dmFyIGM9ZnVuY3Rpb24oYixjKXt0aGlzLiRlbGVtZW50PWEoYiksdGhpcy4kaW5kaWNhdG9ycz10aGlzLiRlbGVtZW50LmZpbmQoXCIuY2Fyb3VzZWwtaW5kaWNhdG9yc1wiKSx0aGlzLm9wdGlvbnM9Yyx0aGlzLnBhdXNlZD1udWxsLHRoaXMuc2xpZGluZz1udWxsLHRoaXMuaW50ZXJ2YWw9bnVsbCx0aGlzLiRhY3RpdmU9bnVsbCx0aGlzLiRpdGVtcz1udWxsLHRoaXMub3B0aW9ucy5rZXlib2FyZCYmdGhpcy4kZWxlbWVudC5vbihcImtleWRvd24uYnMuY2Fyb3VzZWxcIixhLnByb3h5KHRoaXMua2V5ZG93bix0aGlzKSksXCJob3ZlclwiPT10aGlzLm9wdGlvbnMucGF1c2UmJiEoXCJvbnRvdWNoc3RhcnRcImluIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkmJnRoaXMuJGVsZW1lbnQub24oXCJtb3VzZWVudGVyLmJzLmNhcm91c2VsXCIsYS5wcm94eSh0aGlzLnBhdXNlLHRoaXMpKS5vbihcIm1vdXNlbGVhdmUuYnMuY2Fyb3VzZWxcIixhLnByb3h5KHRoaXMuY3ljbGUsdGhpcykpfTtjLlZFUlNJT049XCIzLjMuN1wiLGMuVFJBTlNJVElPTl9EVVJBVElPTj02MDAsYy5ERUZBVUxUUz17aW50ZXJ2YWw6NWUzLHBhdXNlOlwiaG92ZXJcIix3cmFwOiEwLGtleWJvYXJkOiEwfSxjLnByb3RvdHlwZS5rZXlkb3duPWZ1bmN0aW9uKGEpe2lmKCEvaW5wdXR8dGV4dGFyZWEvaS50ZXN0KGEudGFyZ2V0LnRhZ05hbWUpKXtzd2l0Y2goYS53aGljaCl7Y2FzZSAzNzp0aGlzLnByZXYoKTticmVhaztjYXNlIDM5OnRoaXMubmV4dCgpO2JyZWFrO2RlZmF1bHQ6cmV0dXJufWEucHJldmVudERlZmF1bHQoKX19LGMucHJvdG90eXBlLmN5Y2xlPWZ1bmN0aW9uKGIpe3JldHVybiBifHwodGhpcy5wYXVzZWQ9ITEpLHRoaXMuaW50ZXJ2YWwmJmNsZWFySW50ZXJ2YWwodGhpcy5pbnRlcnZhbCksdGhpcy5vcHRpb25zLmludGVydmFsJiYhdGhpcy5wYXVzZWQmJih0aGlzLmludGVydmFsPXNldEludGVydmFsKGEucHJveHkodGhpcy5uZXh0LHRoaXMpLHRoaXMub3B0aW9ucy5pbnRlcnZhbCkpLHRoaXN9LGMucHJvdG90eXBlLmdldEl0ZW1JbmRleD1mdW5jdGlvbihhKXtyZXR1cm4gdGhpcy4kaXRlbXM9YS5wYXJlbnQoKS5jaGlsZHJlbihcIi5pdGVtXCIpLHRoaXMuJGl0ZW1zLmluZGV4KGF8fHRoaXMuJGFjdGl2ZSl9LGMucHJvdG90eXBlLmdldEl0ZW1Gb3JEaXJlY3Rpb249ZnVuY3Rpb24oYSxiKXt2YXIgYz10aGlzLmdldEl0ZW1JbmRleChiKSxkPVwicHJldlwiPT1hJiYwPT09Y3x8XCJuZXh0XCI9PWEmJmM9PXRoaXMuJGl0ZW1zLmxlbmd0aC0xO2lmKGQmJiF0aGlzLm9wdGlvbnMud3JhcClyZXR1cm4gYjt2YXIgZT1cInByZXZcIj09YT8tMToxLGY9KGMrZSkldGhpcy4kaXRlbXMubGVuZ3RoO3JldHVybiB0aGlzLiRpdGVtcy5lcShmKX0sYy5wcm90b3R5cGUudG89ZnVuY3Rpb24oYSl7dmFyIGI9dGhpcyxjPXRoaXMuZ2V0SXRlbUluZGV4KHRoaXMuJGFjdGl2ZT10aGlzLiRlbGVtZW50LmZpbmQoXCIuaXRlbS5hY3RpdmVcIikpO2lmKCEoYT50aGlzLiRpdGVtcy5sZW5ndGgtMXx8YTwwKSlyZXR1cm4gdGhpcy5zbGlkaW5nP3RoaXMuJGVsZW1lbnQub25lKFwic2xpZC5icy5jYXJvdXNlbFwiLGZ1bmN0aW9uKCl7Yi50byhhKX0pOmM9PWE/dGhpcy5wYXVzZSgpLmN5Y2xlKCk6dGhpcy5zbGlkZShhPmM/XCJuZXh0XCI6XCJwcmV2XCIsdGhpcy4kaXRlbXMuZXEoYSkpfSxjLnByb3RvdHlwZS5wYXVzZT1mdW5jdGlvbihiKXtyZXR1cm4gYnx8KHRoaXMucGF1c2VkPSEwKSx0aGlzLiRlbGVtZW50LmZpbmQoXCIubmV4dCwgLnByZXZcIikubGVuZ3RoJiZhLnN1cHBvcnQudHJhbnNpdGlvbiYmKHRoaXMuJGVsZW1lbnQudHJpZ2dlcihhLnN1cHBvcnQudHJhbnNpdGlvbi5lbmQpLHRoaXMuY3ljbGUoITApKSx0aGlzLmludGVydmFsPWNsZWFySW50ZXJ2YWwodGhpcy5pbnRlcnZhbCksdGhpc30sYy5wcm90b3R5cGUubmV4dD1mdW5jdGlvbigpe2lmKCF0aGlzLnNsaWRpbmcpcmV0dXJuIHRoaXMuc2xpZGUoXCJuZXh0XCIpfSxjLnByb3RvdHlwZS5wcmV2PWZ1bmN0aW9uKCl7aWYoIXRoaXMuc2xpZGluZylyZXR1cm4gdGhpcy5zbGlkZShcInByZXZcIil9LGMucHJvdG90eXBlLnNsaWRlPWZ1bmN0aW9uKGIsZCl7dmFyIGU9dGhpcy4kZWxlbWVudC5maW5kKFwiLml0ZW0uYWN0aXZlXCIpLGY9ZHx8dGhpcy5nZXRJdGVtRm9yRGlyZWN0aW9uKGIsZSksZz10aGlzLmludGVydmFsLGg9XCJuZXh0XCI9PWI/XCJsZWZ0XCI6XCJyaWdodFwiLGk9dGhpcztpZihmLmhhc0NsYXNzKFwiYWN0aXZlXCIpKXJldHVybiB0aGlzLnNsaWRpbmc9ITE7dmFyIGo9ZlswXSxrPWEuRXZlbnQoXCJzbGlkZS5icy5jYXJvdXNlbFwiLHtyZWxhdGVkVGFyZ2V0OmosZGlyZWN0aW9uOmh9KTtpZih0aGlzLiRlbGVtZW50LnRyaWdnZXIoayksIWsuaXNEZWZhdWx0UHJldmVudGVkKCkpe2lmKHRoaXMuc2xpZGluZz0hMCxnJiZ0aGlzLnBhdXNlKCksdGhpcy4kaW5kaWNhdG9ycy5sZW5ndGgpe3RoaXMuJGluZGljYXRvcnMuZmluZChcIi5hY3RpdmVcIikucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7dmFyIGw9YSh0aGlzLiRpbmRpY2F0b3JzLmNoaWxkcmVuKClbdGhpcy5nZXRJdGVtSW5kZXgoZildKTtsJiZsLmFkZENsYXNzKFwiYWN0aXZlXCIpfXZhciBtPWEuRXZlbnQoXCJzbGlkLmJzLmNhcm91c2VsXCIse3JlbGF0ZWRUYXJnZXQ6aixkaXJlY3Rpb246aH0pO3JldHVybiBhLnN1cHBvcnQudHJhbnNpdGlvbiYmdGhpcy4kZWxlbWVudC5oYXNDbGFzcyhcInNsaWRlXCIpPyhmLmFkZENsYXNzKGIpLGZbMF0ub2Zmc2V0V2lkdGgsZS5hZGRDbGFzcyhoKSxmLmFkZENsYXNzKGgpLGUub25lKFwiYnNUcmFuc2l0aW9uRW5kXCIsZnVuY3Rpb24oKXtmLnJlbW92ZUNsYXNzKFtiLGhdLmpvaW4oXCIgXCIpKS5hZGRDbGFzcyhcImFjdGl2ZVwiKSxlLnJlbW92ZUNsYXNzKFtcImFjdGl2ZVwiLGhdLmpvaW4oXCIgXCIpKSxpLnNsaWRpbmc9ITEsc2V0VGltZW91dChmdW5jdGlvbigpe2kuJGVsZW1lbnQudHJpZ2dlcihtKX0sMCl9KS5lbXVsYXRlVHJhbnNpdGlvbkVuZChjLlRSQU5TSVRJT05fRFVSQVRJT04pKTooZS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKSxmLmFkZENsYXNzKFwiYWN0aXZlXCIpLHRoaXMuc2xpZGluZz0hMSx0aGlzLiRlbGVtZW50LnRyaWdnZXIobSkpLGcmJnRoaXMuY3ljbGUoKSx0aGlzfX07dmFyIGQ9YS5mbi5jYXJvdXNlbDthLmZuLmNhcm91c2VsPWIsYS5mbi5jYXJvdXNlbC5Db25zdHJ1Y3Rvcj1jLGEuZm4uY2Fyb3VzZWwubm9Db25mbGljdD1mdW5jdGlvbigpe3JldHVybiBhLmZuLmNhcm91c2VsPWQsdGhpc307dmFyIGU9ZnVuY3Rpb24oYyl7dmFyIGQsZT1hKHRoaXMpLGY9YShlLmF0dHIoXCJkYXRhLXRhcmdldFwiKXx8KGQ9ZS5hdHRyKFwiaHJlZlwiKSkmJmQucmVwbGFjZSgvLiooPz0jW15cXHNdKyQpLyxcIlwiKSk7aWYoZi5oYXNDbGFzcyhcImNhcm91c2VsXCIpKXt2YXIgZz1hLmV4dGVuZCh7fSxmLmRhdGEoKSxlLmRhdGEoKSksaD1lLmF0dHIoXCJkYXRhLXNsaWRlLXRvXCIpO2gmJihnLmludGVydmFsPSExKSxiLmNhbGwoZixnKSxoJiZmLmRhdGEoXCJicy5jYXJvdXNlbFwiKS50byhoKSxjLnByZXZlbnREZWZhdWx0KCl9fTthKGRvY3VtZW50KS5vbihcImNsaWNrLmJzLmNhcm91c2VsLmRhdGEtYXBpXCIsXCJbZGF0YS1zbGlkZV1cIixlKS5vbihcImNsaWNrLmJzLmNhcm91c2VsLmRhdGEtYXBpXCIsXCJbZGF0YS1zbGlkZS10b11cIixlKSxhKHdpbmRvdykub24oXCJsb2FkXCIsZnVuY3Rpb24oKXthKCdbZGF0YS1yaWRlPVwiY2Fyb3VzZWxcIl0nKS5lYWNoKGZ1bmN0aW9uKCl7dmFyIGM9YSh0aGlzKTtiLmNhbGwoYyxjLmRhdGEoKSl9KX0pfShqUXVlcnkpLCtmdW5jdGlvbihhKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBiKGIpe3ZhciBjLGQ9Yi5hdHRyKFwiZGF0YS10YXJnZXRcIil8fChjPWIuYXR0cihcImhyZWZcIikpJiZjLnJlcGxhY2UoLy4qKD89I1teXFxzXSskKS8sXCJcIik7cmV0dXJuIGEoZCl9ZnVuY3Rpb24gYyhiKXtyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCl7dmFyIGM9YSh0aGlzKSxlPWMuZGF0YShcImJzLmNvbGxhcHNlXCIpLGY9YS5leHRlbmQoe30sZC5ERUZBVUxUUyxjLmRhdGEoKSxcIm9iamVjdFwiPT10eXBlb2YgYiYmYik7IWUmJmYudG9nZ2xlJiYvc2hvd3xoaWRlLy50ZXN0KGIpJiYoZi50b2dnbGU9ITEpLGV8fGMuZGF0YShcImJzLmNvbGxhcHNlXCIsZT1uZXcgZCh0aGlzLGYpKSxcInN0cmluZ1wiPT10eXBlb2YgYiYmZVtiXSgpfSl9dmFyIGQ9ZnVuY3Rpb24oYixjKXt0aGlzLiRlbGVtZW50PWEoYiksdGhpcy5vcHRpb25zPWEuZXh0ZW5kKHt9LGQuREVGQVVMVFMsYyksdGhpcy4kdHJpZ2dlcj1hKCdbZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiXVtocmVmPVwiIycrYi5pZCsnXCJdLFtkYXRhLXRvZ2dsZT1cImNvbGxhcHNlXCJdW2RhdGEtdGFyZ2V0PVwiIycrYi5pZCsnXCJdJyksdGhpcy50cmFuc2l0aW9uaW5nPW51bGwsdGhpcy5vcHRpb25zLnBhcmVudD90aGlzLiRwYXJlbnQ9dGhpcy5nZXRQYXJlbnQoKTp0aGlzLmFkZEFyaWFBbmRDb2xsYXBzZWRDbGFzcyh0aGlzLiRlbGVtZW50LHRoaXMuJHRyaWdnZXIpLHRoaXMub3B0aW9ucy50b2dnbGUmJnRoaXMudG9nZ2xlKCl9O2QuVkVSU0lPTj1cIjMuMy43XCIsZC5UUkFOU0lUSU9OX0RVUkFUSU9OPTM1MCxkLkRFRkFVTFRTPXt0b2dnbGU6ITB9LGQucHJvdG90eXBlLmRpbWVuc2lvbj1mdW5jdGlvbigpe3ZhciBhPXRoaXMuJGVsZW1lbnQuaGFzQ2xhc3MoXCJ3aWR0aFwiKTtyZXR1cm4gYT9cIndpZHRoXCI6XCJoZWlnaHRcIn0sZC5wcm90b3R5cGUuc2hvdz1mdW5jdGlvbigpe2lmKCF0aGlzLnRyYW5zaXRpb25pbmcmJiF0aGlzLiRlbGVtZW50Lmhhc0NsYXNzKFwiaW5cIikpe3ZhciBiLGU9dGhpcy4kcGFyZW50JiZ0aGlzLiRwYXJlbnQuY2hpbGRyZW4oXCIucGFuZWxcIikuY2hpbGRyZW4oXCIuaW4sIC5jb2xsYXBzaW5nXCIpO2lmKCEoZSYmZS5sZW5ndGgmJihiPWUuZGF0YShcImJzLmNvbGxhcHNlXCIpLGImJmIudHJhbnNpdGlvbmluZykpKXt2YXIgZj1hLkV2ZW50KFwic2hvdy5icy5jb2xsYXBzZVwiKTtpZih0aGlzLiRlbGVtZW50LnRyaWdnZXIoZiksIWYuaXNEZWZhdWx0UHJldmVudGVkKCkpe2UmJmUubGVuZ3RoJiYoYy5jYWxsKGUsXCJoaWRlXCIpLGJ8fGUuZGF0YShcImJzLmNvbGxhcHNlXCIsbnVsbCkpO3ZhciBnPXRoaXMuZGltZW5zaW9uKCk7dGhpcy4kZWxlbWVudC5yZW1vdmVDbGFzcyhcImNvbGxhcHNlXCIpLmFkZENsYXNzKFwiY29sbGFwc2luZ1wiKVtnXSgwKS5hdHRyKFwiYXJpYS1leHBhbmRlZFwiLCEwKSx0aGlzLiR0cmlnZ2VyLnJlbW92ZUNsYXNzKFwiY29sbGFwc2VkXCIpLmF0dHIoXCJhcmlhLWV4cGFuZGVkXCIsITApLHRoaXMudHJhbnNpdGlvbmluZz0xO3ZhciBoPWZ1bmN0aW9uKCl7dGhpcy4kZWxlbWVudC5yZW1vdmVDbGFzcyhcImNvbGxhcHNpbmdcIikuYWRkQ2xhc3MoXCJjb2xsYXBzZSBpblwiKVtnXShcIlwiKSx0aGlzLnRyYW5zaXRpb25pbmc9MCx0aGlzLiRlbGVtZW50LnRyaWdnZXIoXCJzaG93bi5icy5jb2xsYXBzZVwiKX07aWYoIWEuc3VwcG9ydC50cmFuc2l0aW9uKXJldHVybiBoLmNhbGwodGhpcyk7dmFyIGk9YS5jYW1lbENhc2UoW1wic2Nyb2xsXCIsZ10uam9pbihcIi1cIikpO3RoaXMuJGVsZW1lbnQub25lKFwiYnNUcmFuc2l0aW9uRW5kXCIsYS5wcm94eShoLHRoaXMpKS5lbXVsYXRlVHJhbnNpdGlvbkVuZChkLlRSQU5TSVRJT05fRFVSQVRJT04pW2ddKHRoaXMuJGVsZW1lbnRbMF1baV0pfX19fSxkLnByb3RvdHlwZS5oaWRlPWZ1bmN0aW9uKCl7aWYoIXRoaXMudHJhbnNpdGlvbmluZyYmdGhpcy4kZWxlbWVudC5oYXNDbGFzcyhcImluXCIpKXt2YXIgYj1hLkV2ZW50KFwiaGlkZS5icy5jb2xsYXBzZVwiKTtpZih0aGlzLiRlbGVtZW50LnRyaWdnZXIoYiksIWIuaXNEZWZhdWx0UHJldmVudGVkKCkpe3ZhciBjPXRoaXMuZGltZW5zaW9uKCk7dGhpcy4kZWxlbWVudFtjXSh0aGlzLiRlbGVtZW50W2NdKCkpWzBdLm9mZnNldEhlaWdodCx0aGlzLiRlbGVtZW50LmFkZENsYXNzKFwiY29sbGFwc2luZ1wiKS5yZW1vdmVDbGFzcyhcImNvbGxhcHNlIGluXCIpLmF0dHIoXCJhcmlhLWV4cGFuZGVkXCIsITEpLHRoaXMuJHRyaWdnZXIuYWRkQ2xhc3MoXCJjb2xsYXBzZWRcIikuYXR0cihcImFyaWEtZXhwYW5kZWRcIiwhMSksdGhpcy50cmFuc2l0aW9uaW5nPTE7dmFyIGU9ZnVuY3Rpb24oKXt0aGlzLnRyYW5zaXRpb25pbmc9MCx0aGlzLiRlbGVtZW50LnJlbW92ZUNsYXNzKFwiY29sbGFwc2luZ1wiKS5hZGRDbGFzcyhcImNvbGxhcHNlXCIpLnRyaWdnZXIoXCJoaWRkZW4uYnMuY29sbGFwc2VcIil9O3JldHVybiBhLnN1cHBvcnQudHJhbnNpdGlvbj92b2lkIHRoaXMuJGVsZW1lbnRbY10oMCkub25lKFwiYnNUcmFuc2l0aW9uRW5kXCIsYS5wcm94eShlLHRoaXMpKS5lbXVsYXRlVHJhbnNpdGlvbkVuZChkLlRSQU5TSVRJT05fRFVSQVRJT04pOmUuY2FsbCh0aGlzKX19fSxkLnByb3RvdHlwZS50b2dnbGU9ZnVuY3Rpb24oKXt0aGlzW3RoaXMuJGVsZW1lbnQuaGFzQ2xhc3MoXCJpblwiKT9cImhpZGVcIjpcInNob3dcIl0oKX0sZC5wcm90b3R5cGUuZ2V0UGFyZW50PWZ1bmN0aW9uKCl7cmV0dXJuIGEodGhpcy5vcHRpb25zLnBhcmVudCkuZmluZCgnW2RhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIl1bZGF0YS1wYXJlbnQ9XCInK3RoaXMub3B0aW9ucy5wYXJlbnQrJ1wiXScpLmVhY2goYS5wcm94eShmdW5jdGlvbihjLGQpe3ZhciBlPWEoZCk7dGhpcy5hZGRBcmlhQW5kQ29sbGFwc2VkQ2xhc3MoYihlKSxlKX0sdGhpcykpLmVuZCgpfSxkLnByb3RvdHlwZS5hZGRBcmlhQW5kQ29sbGFwc2VkQ2xhc3M9ZnVuY3Rpb24oYSxiKXt2YXIgYz1hLmhhc0NsYXNzKFwiaW5cIik7YS5hdHRyKFwiYXJpYS1leHBhbmRlZFwiLGMpLGIudG9nZ2xlQ2xhc3MoXCJjb2xsYXBzZWRcIiwhYykuYXR0cihcImFyaWEtZXhwYW5kZWRcIixjKX07dmFyIGU9YS5mbi5jb2xsYXBzZTthLmZuLmNvbGxhcHNlPWMsYS5mbi5jb2xsYXBzZS5Db25zdHJ1Y3Rvcj1kLGEuZm4uY29sbGFwc2Uubm9Db25mbGljdD1mdW5jdGlvbigpe3JldHVybiBhLmZuLmNvbGxhcHNlPWUsdGhpc30sYShkb2N1bWVudCkub24oXCJjbGljay5icy5jb2xsYXBzZS5kYXRhLWFwaVwiLCdbZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiXScsZnVuY3Rpb24oZCl7dmFyIGU9YSh0aGlzKTtlLmF0dHIoXCJkYXRhLXRhcmdldFwiKXx8ZC5wcmV2ZW50RGVmYXVsdCgpO3ZhciBmPWIoZSksZz1mLmRhdGEoXCJicy5jb2xsYXBzZVwiKSxoPWc/XCJ0b2dnbGVcIjplLmRhdGEoKTtjLmNhbGwoZixoKX0pfShqUXVlcnkpLCtmdW5jdGlvbihhKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBiKGIpe3ZhciBjPWIuYXR0cihcImRhdGEtdGFyZ2V0XCIpO2N8fChjPWIuYXR0cihcImhyZWZcIiksYz1jJiYvI1tBLVphLXpdLy50ZXN0KGMpJiZjLnJlcGxhY2UoLy4qKD89I1teXFxzXSokKS8sXCJcIikpO3ZhciBkPWMmJmEoYyk7cmV0dXJuIGQmJmQubGVuZ3RoP2Q6Yi5wYXJlbnQoKX1mdW5jdGlvbiBjKGMpe2MmJjM9PT1jLndoaWNofHwoYShlKS5yZW1vdmUoKSxhKGYpLmVhY2goZnVuY3Rpb24oKXt2YXIgZD1hKHRoaXMpLGU9YihkKSxmPXtyZWxhdGVkVGFyZ2V0OnRoaXN9O2UuaGFzQ2xhc3MoXCJvcGVuXCIpJiYoYyYmXCJjbGlja1wiPT1jLnR5cGUmJi9pbnB1dHx0ZXh0YXJlYS9pLnRlc3QoYy50YXJnZXQudGFnTmFtZSkmJmEuY29udGFpbnMoZVswXSxjLnRhcmdldCl8fChlLnRyaWdnZXIoYz1hLkV2ZW50KFwiaGlkZS5icy5kcm9wZG93blwiLGYpKSxjLmlzRGVmYXVsdFByZXZlbnRlZCgpfHwoZC5hdHRyKFwiYXJpYS1leHBhbmRlZFwiLFwiZmFsc2VcIiksZS5yZW1vdmVDbGFzcyhcIm9wZW5cIikudHJpZ2dlcihhLkV2ZW50KFwiaGlkZGVuLmJzLmRyb3Bkb3duXCIsZikpKSkpfSkpfWZ1bmN0aW9uIGQoYil7cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpe3ZhciBjPWEodGhpcyksZD1jLmRhdGEoXCJicy5kcm9wZG93blwiKTtkfHxjLmRhdGEoXCJicy5kcm9wZG93blwiLGQ9bmV3IGcodGhpcykpLFwic3RyaW5nXCI9PXR5cGVvZiBiJiZkW2JdLmNhbGwoYyl9KX12YXIgZT1cIi5kcm9wZG93bi1iYWNrZHJvcFwiLGY9J1tkYXRhLXRvZ2dsZT1cImRyb3Bkb3duXCJdJyxnPWZ1bmN0aW9uKGIpe2EoYikub24oXCJjbGljay5icy5kcm9wZG93blwiLHRoaXMudG9nZ2xlKX07Zy5WRVJTSU9OPVwiMy4zLjdcIixnLnByb3RvdHlwZS50b2dnbGU9ZnVuY3Rpb24oZCl7dmFyIGU9YSh0aGlzKTtpZighZS5pcyhcIi5kaXNhYmxlZCwgOmRpc2FibGVkXCIpKXt2YXIgZj1iKGUpLGc9Zi5oYXNDbGFzcyhcIm9wZW5cIik7aWYoYygpLCFnKXtcIm9udG91Y2hzdGFydFwiaW4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50JiYhZi5jbG9zZXN0KFwiLm5hdmJhci1uYXZcIikubGVuZ3RoJiZhKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikpLmFkZENsYXNzKFwiZHJvcGRvd24tYmFja2Ryb3BcIikuaW5zZXJ0QWZ0ZXIoYSh0aGlzKSkub24oXCJjbGlja1wiLGMpO3ZhciBoPXtyZWxhdGVkVGFyZ2V0OnRoaXN9O2lmKGYudHJpZ2dlcihkPWEuRXZlbnQoXCJzaG93LmJzLmRyb3Bkb3duXCIsaCkpLGQuaXNEZWZhdWx0UHJldmVudGVkKCkpcmV0dXJuO2UudHJpZ2dlcihcImZvY3VzXCIpLmF0dHIoXCJhcmlhLWV4cGFuZGVkXCIsXCJ0cnVlXCIpLGYudG9nZ2xlQ2xhc3MoXCJvcGVuXCIpLnRyaWdnZXIoYS5FdmVudChcInNob3duLmJzLmRyb3Bkb3duXCIsaCkpfXJldHVybiExfX0sZy5wcm90b3R5cGUua2V5ZG93bj1mdW5jdGlvbihjKXtpZigvKDM4fDQwfDI3fDMyKS8udGVzdChjLndoaWNoKSYmIS9pbnB1dHx0ZXh0YXJlYS9pLnRlc3QoYy50YXJnZXQudGFnTmFtZSkpe3ZhciBkPWEodGhpcyk7aWYoYy5wcmV2ZW50RGVmYXVsdCgpLGMuc3RvcFByb3BhZ2F0aW9uKCksIWQuaXMoXCIuZGlzYWJsZWQsIDpkaXNhYmxlZFwiKSl7dmFyIGU9YihkKSxnPWUuaGFzQ2xhc3MoXCJvcGVuXCIpO2lmKCFnJiYyNyE9Yy53aGljaHx8ZyYmMjc9PWMud2hpY2gpcmV0dXJuIDI3PT1jLndoaWNoJiZlLmZpbmQoZikudHJpZ2dlcihcImZvY3VzXCIpLGQudHJpZ2dlcihcImNsaWNrXCIpO3ZhciBoPVwiIGxpOm5vdCguZGlzYWJsZWQpOnZpc2libGUgYVwiLGk9ZS5maW5kKFwiLmRyb3Bkb3duLW1lbnVcIitoKTtpZihpLmxlbmd0aCl7dmFyIGo9aS5pbmRleChjLnRhcmdldCk7Mzg9PWMud2hpY2gmJmo+MCYmai0tLDQwPT1jLndoaWNoJiZqPGkubGVuZ3RoLTEmJmorKyx+anx8KGo9MCksaS5lcShqKS50cmlnZ2VyKFwiZm9jdXNcIil9fX19O3ZhciBoPWEuZm4uZHJvcGRvd247YS5mbi5kcm9wZG93bj1kLGEuZm4uZHJvcGRvd24uQ29uc3RydWN0b3I9ZyxhLmZuLmRyb3Bkb3duLm5vQ29uZmxpY3Q9ZnVuY3Rpb24oKXtyZXR1cm4gYS5mbi5kcm9wZG93bj1oLHRoaXN9LGEoZG9jdW1lbnQpLm9uKFwiY2xpY2suYnMuZHJvcGRvd24uZGF0YS1hcGlcIixjKS5vbihcImNsaWNrLmJzLmRyb3Bkb3duLmRhdGEtYXBpXCIsXCIuZHJvcGRvd24gZm9ybVwiLGZ1bmN0aW9uKGEpe2Euc3RvcFByb3BhZ2F0aW9uKCl9KS5vbihcImNsaWNrLmJzLmRyb3Bkb3duLmRhdGEtYXBpXCIsZixnLnByb3RvdHlwZS50b2dnbGUpLm9uKFwia2V5ZG93bi5icy5kcm9wZG93bi5kYXRhLWFwaVwiLGYsZy5wcm90b3R5cGUua2V5ZG93bikub24oXCJrZXlkb3duLmJzLmRyb3Bkb3duLmRhdGEtYXBpXCIsXCIuZHJvcGRvd24tbWVudVwiLGcucHJvdG90eXBlLmtleWRvd24pfShqUXVlcnkpLCtmdW5jdGlvbihhKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBiKGIsZCl7cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpe3ZhciBlPWEodGhpcyksZj1lLmRhdGEoXCJicy5tb2RhbFwiKSxnPWEuZXh0ZW5kKHt9LGMuREVGQVVMVFMsZS5kYXRhKCksXCJvYmplY3RcIj09dHlwZW9mIGImJmIpO2Z8fGUuZGF0YShcImJzLm1vZGFsXCIsZj1uZXcgYyh0aGlzLGcpKSxcInN0cmluZ1wiPT10eXBlb2YgYj9mW2JdKGQpOmcuc2hvdyYmZi5zaG93KGQpfSl9dmFyIGM9ZnVuY3Rpb24oYixjKXt0aGlzLm9wdGlvbnM9Yyx0aGlzLiRib2R5PWEoZG9jdW1lbnQuYm9keSksdGhpcy4kZWxlbWVudD1hKGIpLHRoaXMuJGRpYWxvZz10aGlzLiRlbGVtZW50LmZpbmQoXCIubW9kYWwtZGlhbG9nXCIpLHRoaXMuJGJhY2tkcm9wPW51bGwsdGhpcy5pc1Nob3duPW51bGwsdGhpcy5vcmlnaW5hbEJvZHlQYWQ9bnVsbCx0aGlzLnNjcm9sbGJhcldpZHRoPTAsdGhpcy5pZ25vcmVCYWNrZHJvcENsaWNrPSExLHRoaXMub3B0aW9ucy5yZW1vdGUmJnRoaXMuJGVsZW1lbnQuZmluZChcIi5tb2RhbC1jb250ZW50XCIpLmxvYWQodGhpcy5vcHRpb25zLnJlbW90ZSxhLnByb3h5KGZ1bmN0aW9uKCl7dGhpcy4kZWxlbWVudC50cmlnZ2VyKFwibG9hZGVkLmJzLm1vZGFsXCIpfSx0aGlzKSl9O2MuVkVSU0lPTj1cIjMuMy43XCIsYy5UUkFOU0lUSU9OX0RVUkFUSU9OPTMwMCxjLkJBQ0tEUk9QX1RSQU5TSVRJT05fRFVSQVRJT049MTUwLGMuREVGQVVMVFM9e2JhY2tkcm9wOiEwLGtleWJvYXJkOiEwLHNob3c6ITB9LGMucHJvdG90eXBlLnRvZ2dsZT1mdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5pc1Nob3duP3RoaXMuaGlkZSgpOnRoaXMuc2hvdyhhKX0sYy5wcm90b3R5cGUuc2hvdz1mdW5jdGlvbihiKXt2YXIgZD10aGlzLGU9YS5FdmVudChcInNob3cuYnMubW9kYWxcIix7cmVsYXRlZFRhcmdldDpifSk7dGhpcy4kZWxlbWVudC50cmlnZ2VyKGUpLHRoaXMuaXNTaG93bnx8ZS5pc0RlZmF1bHRQcmV2ZW50ZWQoKXx8KHRoaXMuaXNTaG93bj0hMCx0aGlzLmNoZWNrU2Nyb2xsYmFyKCksdGhpcy5zZXRTY3JvbGxiYXIoKSx0aGlzLiRib2R5LmFkZENsYXNzKFwibW9kYWwtb3BlblwiKSx0aGlzLmVzY2FwZSgpLHRoaXMucmVzaXplKCksdGhpcy4kZWxlbWVudC5vbihcImNsaWNrLmRpc21pc3MuYnMubW9kYWxcIiwnW2RhdGEtZGlzbWlzcz1cIm1vZGFsXCJdJyxhLnByb3h5KHRoaXMuaGlkZSx0aGlzKSksdGhpcy4kZGlhbG9nLm9uKFwibW91c2Vkb3duLmRpc21pc3MuYnMubW9kYWxcIixmdW5jdGlvbigpe2QuJGVsZW1lbnQub25lKFwibW91c2V1cC5kaXNtaXNzLmJzLm1vZGFsXCIsZnVuY3Rpb24oYil7YShiLnRhcmdldCkuaXMoZC4kZWxlbWVudCkmJihkLmlnbm9yZUJhY2tkcm9wQ2xpY2s9ITApfSl9KSx0aGlzLmJhY2tkcm9wKGZ1bmN0aW9uKCl7dmFyIGU9YS5zdXBwb3J0LnRyYW5zaXRpb24mJmQuJGVsZW1lbnQuaGFzQ2xhc3MoXCJmYWRlXCIpO2QuJGVsZW1lbnQucGFyZW50KCkubGVuZ3RofHxkLiRlbGVtZW50LmFwcGVuZFRvKGQuJGJvZHkpLGQuJGVsZW1lbnQuc2hvdygpLnNjcm9sbFRvcCgwKSxkLmFkanVzdERpYWxvZygpLGUmJmQuJGVsZW1lbnRbMF0ub2Zmc2V0V2lkdGgsZC4kZWxlbWVudC5hZGRDbGFzcyhcImluXCIpLGQuZW5mb3JjZUZvY3VzKCk7dmFyIGY9YS5FdmVudChcInNob3duLmJzLm1vZGFsXCIse3JlbGF0ZWRUYXJnZXQ6Yn0pO2U/ZC4kZGlhbG9nLm9uZShcImJzVHJhbnNpdGlvbkVuZFwiLGZ1bmN0aW9uKCl7ZC4kZWxlbWVudC50cmlnZ2VyKFwiZm9jdXNcIikudHJpZ2dlcihmKX0pLmVtdWxhdGVUcmFuc2l0aW9uRW5kKGMuVFJBTlNJVElPTl9EVVJBVElPTik6ZC4kZWxlbWVudC50cmlnZ2VyKFwiZm9jdXNcIikudHJpZ2dlcihmKX0pKX0sYy5wcm90b3R5cGUuaGlkZT1mdW5jdGlvbihiKXtiJiZiLnByZXZlbnREZWZhdWx0KCksYj1hLkV2ZW50KFwiaGlkZS5icy5tb2RhbFwiKSx0aGlzLiRlbGVtZW50LnRyaWdnZXIoYiksdGhpcy5pc1Nob3duJiYhYi5pc0RlZmF1bHRQcmV2ZW50ZWQoKSYmKHRoaXMuaXNTaG93bj0hMSx0aGlzLmVzY2FwZSgpLHRoaXMucmVzaXplKCksYShkb2N1bWVudCkub2ZmKFwiZm9jdXNpbi5icy5tb2RhbFwiKSx0aGlzLiRlbGVtZW50LnJlbW92ZUNsYXNzKFwiaW5cIikub2ZmKFwiY2xpY2suZGlzbWlzcy5icy5tb2RhbFwiKS5vZmYoXCJtb3VzZXVwLmRpc21pc3MuYnMubW9kYWxcIiksdGhpcy4kZGlhbG9nLm9mZihcIm1vdXNlZG93bi5kaXNtaXNzLmJzLm1vZGFsXCIpLGEuc3VwcG9ydC50cmFuc2l0aW9uJiZ0aGlzLiRlbGVtZW50Lmhhc0NsYXNzKFwiZmFkZVwiKT90aGlzLiRlbGVtZW50Lm9uZShcImJzVHJhbnNpdGlvbkVuZFwiLGEucHJveHkodGhpcy5oaWRlTW9kYWwsdGhpcykpLmVtdWxhdGVUcmFuc2l0aW9uRW5kKGMuVFJBTlNJVElPTl9EVVJBVElPTik6dGhpcy5oaWRlTW9kYWwoKSl9LGMucHJvdG90eXBlLmVuZm9yY2VGb2N1cz1mdW5jdGlvbigpe2EoZG9jdW1lbnQpLm9mZihcImZvY3VzaW4uYnMubW9kYWxcIikub24oXCJmb2N1c2luLmJzLm1vZGFsXCIsYS5wcm94eShmdW5jdGlvbihhKXtkb2N1bWVudD09PWEudGFyZ2V0fHx0aGlzLiRlbGVtZW50WzBdPT09YS50YXJnZXR8fHRoaXMuJGVsZW1lbnQuaGFzKGEudGFyZ2V0KS5sZW5ndGh8fHRoaXMuJGVsZW1lbnQudHJpZ2dlcihcImZvY3VzXCIpfSx0aGlzKSl9LGMucHJvdG90eXBlLmVzY2FwZT1mdW5jdGlvbigpe3RoaXMuaXNTaG93biYmdGhpcy5vcHRpb25zLmtleWJvYXJkP3RoaXMuJGVsZW1lbnQub24oXCJrZXlkb3duLmRpc21pc3MuYnMubW9kYWxcIixhLnByb3h5KGZ1bmN0aW9uKGEpezI3PT1hLndoaWNoJiZ0aGlzLmhpZGUoKX0sdGhpcykpOnRoaXMuaXNTaG93bnx8dGhpcy4kZWxlbWVudC5vZmYoXCJrZXlkb3duLmRpc21pc3MuYnMubW9kYWxcIil9LGMucHJvdG90eXBlLnJlc2l6ZT1mdW5jdGlvbigpe3RoaXMuaXNTaG93bj9hKHdpbmRvdykub24oXCJyZXNpemUuYnMubW9kYWxcIixhLnByb3h5KHRoaXMuaGFuZGxlVXBkYXRlLHRoaXMpKTphKHdpbmRvdykub2ZmKFwicmVzaXplLmJzLm1vZGFsXCIpfSxjLnByb3RvdHlwZS5oaWRlTW9kYWw9ZnVuY3Rpb24oKXt2YXIgYT10aGlzO3RoaXMuJGVsZW1lbnQuaGlkZSgpLHRoaXMuYmFja2Ryb3AoZnVuY3Rpb24oKXthLiRib2R5LnJlbW92ZUNsYXNzKFwibW9kYWwtb3BlblwiKSxhLnJlc2V0QWRqdXN0bWVudHMoKSxhLnJlc2V0U2Nyb2xsYmFyKCksYS4kZWxlbWVudC50cmlnZ2VyKFwiaGlkZGVuLmJzLm1vZGFsXCIpfSl9LGMucHJvdG90eXBlLnJlbW92ZUJhY2tkcm9wPWZ1bmN0aW9uKCl7dGhpcy4kYmFja2Ryb3AmJnRoaXMuJGJhY2tkcm9wLnJlbW92ZSgpLHRoaXMuJGJhY2tkcm9wPW51bGx9LGMucHJvdG90eXBlLmJhY2tkcm9wPWZ1bmN0aW9uKGIpe3ZhciBkPXRoaXMsZT10aGlzLiRlbGVtZW50Lmhhc0NsYXNzKFwiZmFkZVwiKT9cImZhZGVcIjpcIlwiO2lmKHRoaXMuaXNTaG93biYmdGhpcy5vcHRpb25zLmJhY2tkcm9wKXt2YXIgZj1hLnN1cHBvcnQudHJhbnNpdGlvbiYmZTtpZih0aGlzLiRiYWNrZHJvcD1hKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikpLmFkZENsYXNzKFwibW9kYWwtYmFja2Ryb3AgXCIrZSkuYXBwZW5kVG8odGhpcy4kYm9keSksdGhpcy4kZWxlbWVudC5vbihcImNsaWNrLmRpc21pc3MuYnMubW9kYWxcIixhLnByb3h5KGZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLmlnbm9yZUJhY2tkcm9wQ2xpY2s/dm9pZCh0aGlzLmlnbm9yZUJhY2tkcm9wQ2xpY2s9ITEpOnZvaWQoYS50YXJnZXQ9PT1hLmN1cnJlbnRUYXJnZXQmJihcInN0YXRpY1wiPT10aGlzLm9wdGlvbnMuYmFja2Ryb3A/dGhpcy4kZWxlbWVudFswXS5mb2N1cygpOnRoaXMuaGlkZSgpKSl9LHRoaXMpKSxmJiZ0aGlzLiRiYWNrZHJvcFswXS5vZmZzZXRXaWR0aCx0aGlzLiRiYWNrZHJvcC5hZGRDbGFzcyhcImluXCIpLCFiKXJldHVybjtmP3RoaXMuJGJhY2tkcm9wLm9uZShcImJzVHJhbnNpdGlvbkVuZFwiLGIpLmVtdWxhdGVUcmFuc2l0aW9uRW5kKGMuQkFDS0RST1BfVFJBTlNJVElPTl9EVVJBVElPTik6YigpfWVsc2UgaWYoIXRoaXMuaXNTaG93biYmdGhpcy4kYmFja2Ryb3Ape3RoaXMuJGJhY2tkcm9wLnJlbW92ZUNsYXNzKFwiaW5cIik7dmFyIGc9ZnVuY3Rpb24oKXtkLnJlbW92ZUJhY2tkcm9wKCksYiYmYigpfTthLnN1cHBvcnQudHJhbnNpdGlvbiYmdGhpcy4kZWxlbWVudC5oYXNDbGFzcyhcImZhZGVcIik/dGhpcy4kYmFja2Ryb3Aub25lKFwiYnNUcmFuc2l0aW9uRW5kXCIsZykuZW11bGF0ZVRyYW5zaXRpb25FbmQoYy5CQUNLRFJPUF9UUkFOU0lUSU9OX0RVUkFUSU9OKTpnKCl9ZWxzZSBiJiZiKCl9LGMucHJvdG90eXBlLmhhbmRsZVVwZGF0ZT1mdW5jdGlvbigpe3RoaXMuYWRqdXN0RGlhbG9nKCl9LGMucHJvdG90eXBlLmFkanVzdERpYWxvZz1mdW5jdGlvbigpe3ZhciBhPXRoaXMuJGVsZW1lbnRbMF0uc2Nyb2xsSGVpZ2h0PmRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQ7dGhpcy4kZWxlbWVudC5jc3Moe3BhZGRpbmdMZWZ0OiF0aGlzLmJvZHlJc092ZXJmbG93aW5nJiZhP3RoaXMuc2Nyb2xsYmFyV2lkdGg6XCJcIixwYWRkaW5nUmlnaHQ6dGhpcy5ib2R5SXNPdmVyZmxvd2luZyYmIWE/dGhpcy5zY3JvbGxiYXJXaWR0aDpcIlwifSl9LGMucHJvdG90eXBlLnJlc2V0QWRqdXN0bWVudHM9ZnVuY3Rpb24oKXt0aGlzLiRlbGVtZW50LmNzcyh7cGFkZGluZ0xlZnQ6XCJcIixwYWRkaW5nUmlnaHQ6XCJcIn0pfSxjLnByb3RvdHlwZS5jaGVja1Njcm9sbGJhcj1mdW5jdGlvbigpe3ZhciBhPXdpbmRvdy5pbm5lcldpZHRoO2lmKCFhKXt2YXIgYj1kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7YT1iLnJpZ2h0LU1hdGguYWJzKGIubGVmdCl9dGhpcy5ib2R5SXNPdmVyZmxvd2luZz1kb2N1bWVudC5ib2R5LmNsaWVudFdpZHRoPGEsdGhpcy5zY3JvbGxiYXJXaWR0aD10aGlzLm1lYXN1cmVTY3JvbGxiYXIoKX0sYy5wcm90b3R5cGUuc2V0U2Nyb2xsYmFyPWZ1bmN0aW9uKCl7dmFyIGE9cGFyc2VJbnQodGhpcy4kYm9keS5jc3MoXCJwYWRkaW5nLXJpZ2h0XCIpfHwwLDEwKTt0aGlzLm9yaWdpbmFsQm9keVBhZD1kb2N1bWVudC5ib2R5LnN0eWxlLnBhZGRpbmdSaWdodHx8XCJcIix0aGlzLmJvZHlJc092ZXJmbG93aW5nJiZ0aGlzLiRib2R5LmNzcyhcInBhZGRpbmctcmlnaHRcIixhK3RoaXMuc2Nyb2xsYmFyV2lkdGgpfSxjLnByb3RvdHlwZS5yZXNldFNjcm9sbGJhcj1mdW5jdGlvbigpe3RoaXMuJGJvZHkuY3NzKFwicGFkZGluZy1yaWdodFwiLHRoaXMub3JpZ2luYWxCb2R5UGFkKX0sYy5wcm90b3R5cGUubWVhc3VyZVNjcm9sbGJhcj1mdW5jdGlvbigpe3ZhciBhPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7YS5jbGFzc05hbWU9XCJtb2RhbC1zY3JvbGxiYXItbWVhc3VyZVwiLHRoaXMuJGJvZHkuYXBwZW5kKGEpO3ZhciBiPWEub2Zmc2V0V2lkdGgtYS5jbGllbnRXaWR0aDtyZXR1cm4gdGhpcy4kYm9keVswXS5yZW1vdmVDaGlsZChhKSxifTt2YXIgZD1hLmZuLm1vZGFsO2EuZm4ubW9kYWw9YixhLmZuLm1vZGFsLkNvbnN0cnVjdG9yPWMsYS5mbi5tb2RhbC5ub0NvbmZsaWN0PWZ1bmN0aW9uKCl7cmV0dXJuIGEuZm4ubW9kYWw9ZCx0aGlzfSxhKGRvY3VtZW50KS5vbihcImNsaWNrLmJzLm1vZGFsLmRhdGEtYXBpXCIsJ1tkYXRhLXRvZ2dsZT1cIm1vZGFsXCJdJyxmdW5jdGlvbihjKXt2YXIgZD1hKHRoaXMpLGU9ZC5hdHRyKFwiaHJlZlwiKSxmPWEoZC5hdHRyKFwiZGF0YS10YXJnZXRcIil8fGUmJmUucmVwbGFjZSgvLiooPz0jW15cXHNdKyQpLyxcIlwiKSksZz1mLmRhdGEoXCJicy5tb2RhbFwiKT9cInRvZ2dsZVwiOmEuZXh0ZW5kKHtyZW1vdGU6IS8jLy50ZXN0KGUpJiZlfSxmLmRhdGEoKSxkLmRhdGEoKSk7ZC5pcyhcImFcIikmJmMucHJldmVudERlZmF1bHQoKSxmLm9uZShcInNob3cuYnMubW9kYWxcIixmdW5jdGlvbihhKXthLmlzRGVmYXVsdFByZXZlbnRlZCgpfHxmLm9uZShcImhpZGRlbi5icy5tb2RhbFwiLGZ1bmN0aW9uKCl7ZC5pcyhcIjp2aXNpYmxlXCIpJiZkLnRyaWdnZXIoXCJmb2N1c1wiKX0pfSksYi5jYWxsKGYsZyx0aGlzKX0pfShqUXVlcnkpLCtmdW5jdGlvbihhKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBiKGIpe3JldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKXt2YXIgZD1hKHRoaXMpLGU9ZC5kYXRhKFwiYnMudG9vbHRpcFwiKSxmPVwib2JqZWN0XCI9PXR5cGVvZiBiJiZiOyFlJiYvZGVzdHJveXxoaWRlLy50ZXN0KGIpfHwoZXx8ZC5kYXRhKFwiYnMudG9vbHRpcFwiLGU9bmV3IGModGhpcyxmKSksXCJzdHJpbmdcIj09dHlwZW9mIGImJmVbYl0oKSl9KX12YXIgYz1mdW5jdGlvbihhLGIpe3RoaXMudHlwZT1udWxsLHRoaXMub3B0aW9ucz1udWxsLHRoaXMuZW5hYmxlZD1udWxsLHRoaXMudGltZW91dD1udWxsLHRoaXMuaG92ZXJTdGF0ZT1udWxsLHRoaXMuJGVsZW1lbnQ9bnVsbCx0aGlzLmluU3RhdGU9bnVsbCx0aGlzLmluaXQoXCJ0b29sdGlwXCIsYSxiKX07Yy5WRVJTSU9OPVwiMy4zLjdcIixjLlRSQU5TSVRJT05fRFVSQVRJT049MTUwLGMuREVGQVVMVFM9e2FuaW1hdGlvbjohMCxwbGFjZW1lbnQ6XCJ0b3BcIixzZWxlY3RvcjohMSx0ZW1wbGF0ZTonPGRpdiBjbGFzcz1cInRvb2x0aXBcIiByb2xlPVwidG9vbHRpcFwiPjxkaXYgY2xhc3M9XCJ0b29sdGlwLWFycm93XCI+PC9kaXY+PGRpdiBjbGFzcz1cInRvb2x0aXAtaW5uZXJcIj48L2Rpdj48L2Rpdj4nLHRyaWdnZXI6XCJob3ZlciBmb2N1c1wiLHRpdGxlOlwiXCIsZGVsYXk6MCxodG1sOiExLGNvbnRhaW5lcjohMSx2aWV3cG9ydDp7c2VsZWN0b3I6XCJib2R5XCIscGFkZGluZzowfX0sYy5wcm90b3R5cGUuaW5pdD1mdW5jdGlvbihiLGMsZCl7aWYodGhpcy5lbmFibGVkPSEwLHRoaXMudHlwZT1iLHRoaXMuJGVsZW1lbnQ9YShjKSx0aGlzLm9wdGlvbnM9dGhpcy5nZXRPcHRpb25zKGQpLHRoaXMuJHZpZXdwb3J0PXRoaXMub3B0aW9ucy52aWV3cG9ydCYmYShhLmlzRnVuY3Rpb24odGhpcy5vcHRpb25zLnZpZXdwb3J0KT90aGlzLm9wdGlvbnMudmlld3BvcnQuY2FsbCh0aGlzLHRoaXMuJGVsZW1lbnQpOnRoaXMub3B0aW9ucy52aWV3cG9ydC5zZWxlY3Rvcnx8dGhpcy5vcHRpb25zLnZpZXdwb3J0KSx0aGlzLmluU3RhdGU9e2NsaWNrOiExLGhvdmVyOiExLGZvY3VzOiExfSx0aGlzLiRlbGVtZW50WzBdaW5zdGFuY2VvZiBkb2N1bWVudC5jb25zdHJ1Y3RvciYmIXRoaXMub3B0aW9ucy5zZWxlY3Rvcil0aHJvdyBuZXcgRXJyb3IoXCJgc2VsZWN0b3JgIG9wdGlvbiBtdXN0IGJlIHNwZWNpZmllZCB3aGVuIGluaXRpYWxpemluZyBcIit0aGlzLnR5cGUrXCIgb24gdGhlIHdpbmRvdy5kb2N1bWVudCBvYmplY3QhXCIpO2Zvcih2YXIgZT10aGlzLm9wdGlvbnMudHJpZ2dlci5zcGxpdChcIiBcIiksZj1lLmxlbmd0aDtmLS07KXt2YXIgZz1lW2ZdO2lmKFwiY2xpY2tcIj09Zyl0aGlzLiRlbGVtZW50Lm9uKFwiY2xpY2suXCIrdGhpcy50eXBlLHRoaXMub3B0aW9ucy5zZWxlY3RvcixhLnByb3h5KHRoaXMudG9nZ2xlLHRoaXMpKTtlbHNlIGlmKFwibWFudWFsXCIhPWcpe3ZhciBoPVwiaG92ZXJcIj09Zz9cIm1vdXNlZW50ZXJcIjpcImZvY3VzaW5cIixpPVwiaG92ZXJcIj09Zz9cIm1vdXNlbGVhdmVcIjpcImZvY3Vzb3V0XCI7dGhpcy4kZWxlbWVudC5vbihoK1wiLlwiK3RoaXMudHlwZSx0aGlzLm9wdGlvbnMuc2VsZWN0b3IsYS5wcm94eSh0aGlzLmVudGVyLHRoaXMpKSx0aGlzLiRlbGVtZW50Lm9uKGkrXCIuXCIrdGhpcy50eXBlLHRoaXMub3B0aW9ucy5zZWxlY3RvcixhLnByb3h5KHRoaXMubGVhdmUsdGhpcykpfX10aGlzLm9wdGlvbnMuc2VsZWN0b3I/dGhpcy5fb3B0aW9ucz1hLmV4dGVuZCh7fSx0aGlzLm9wdGlvbnMse3RyaWdnZXI6XCJtYW51YWxcIixzZWxlY3RvcjpcIlwifSk6dGhpcy5maXhUaXRsZSgpfSxjLnByb3RvdHlwZS5nZXREZWZhdWx0cz1mdW5jdGlvbigpe3JldHVybiBjLkRFRkFVTFRTfSxjLnByb3RvdHlwZS5nZXRPcHRpb25zPWZ1bmN0aW9uKGIpe3JldHVybiBiPWEuZXh0ZW5kKHt9LHRoaXMuZ2V0RGVmYXVsdHMoKSx0aGlzLiRlbGVtZW50LmRhdGEoKSxiKSxiLmRlbGF5JiZcIm51bWJlclwiPT10eXBlb2YgYi5kZWxheSYmKGIuZGVsYXk9e3Nob3c6Yi5kZWxheSxoaWRlOmIuZGVsYXl9KSxifSxjLnByb3RvdHlwZS5nZXREZWxlZ2F0ZU9wdGlvbnM9ZnVuY3Rpb24oKXt2YXIgYj17fSxjPXRoaXMuZ2V0RGVmYXVsdHMoKTtyZXR1cm4gdGhpcy5fb3B0aW9ucyYmYS5lYWNoKHRoaXMuX29wdGlvbnMsZnVuY3Rpb24oYSxkKXtjW2FdIT1kJiYoYlthXT1kKX0pLGJ9LGMucHJvdG90eXBlLmVudGVyPWZ1bmN0aW9uKGIpe3ZhciBjPWIgaW5zdGFuY2VvZiB0aGlzLmNvbnN0cnVjdG9yP2I6YShiLmN1cnJlbnRUYXJnZXQpLmRhdGEoXCJicy5cIit0aGlzLnR5cGUpO3JldHVybiBjfHwoYz1uZXcgdGhpcy5jb25zdHJ1Y3RvcihiLmN1cnJlbnRUYXJnZXQsdGhpcy5nZXREZWxlZ2F0ZU9wdGlvbnMoKSksYShiLmN1cnJlbnRUYXJnZXQpLmRhdGEoXCJicy5cIit0aGlzLnR5cGUsYykpLGIgaW5zdGFuY2VvZiBhLkV2ZW50JiYoYy5pblN0YXRlW1wiZm9jdXNpblwiPT1iLnR5cGU/XCJmb2N1c1wiOlwiaG92ZXJcIl09ITApLGMudGlwKCkuaGFzQ2xhc3MoXCJpblwiKXx8XCJpblwiPT1jLmhvdmVyU3RhdGU/dm9pZChjLmhvdmVyU3RhdGU9XCJpblwiKTooY2xlYXJUaW1lb3V0KGMudGltZW91dCksYy5ob3ZlclN0YXRlPVwiaW5cIixjLm9wdGlvbnMuZGVsYXkmJmMub3B0aW9ucy5kZWxheS5zaG93P3ZvaWQoYy50aW1lb3V0PXNldFRpbWVvdXQoZnVuY3Rpb24oKXtcImluXCI9PWMuaG92ZXJTdGF0ZSYmYy5zaG93KCl9LGMub3B0aW9ucy5kZWxheS5zaG93KSk6Yy5zaG93KCkpfSxjLnByb3RvdHlwZS5pc0luU3RhdGVUcnVlPWZ1bmN0aW9uKCl7Zm9yKHZhciBhIGluIHRoaXMuaW5TdGF0ZSlpZih0aGlzLmluU3RhdGVbYV0pcmV0dXJuITA7cmV0dXJuITF9LGMucHJvdG90eXBlLmxlYXZlPWZ1bmN0aW9uKGIpe3ZhciBjPWIgaW5zdGFuY2VvZiB0aGlzLmNvbnN0cnVjdG9yP2I6YShiLmN1cnJlbnRUYXJnZXQpLmRhdGEoXCJicy5cIit0aGlzLnR5cGUpO2lmKGN8fChjPW5ldyB0aGlzLmNvbnN0cnVjdG9yKGIuY3VycmVudFRhcmdldCx0aGlzLmdldERlbGVnYXRlT3B0aW9ucygpKSxhKGIuY3VycmVudFRhcmdldCkuZGF0YShcImJzLlwiK3RoaXMudHlwZSxjKSksYiBpbnN0YW5jZW9mIGEuRXZlbnQmJihjLmluU3RhdGVbXCJmb2N1c291dFwiPT1iLnR5cGU/XCJmb2N1c1wiOlwiaG92ZXJcIl09ITEpLCFjLmlzSW5TdGF0ZVRydWUoKSlyZXR1cm4gY2xlYXJUaW1lb3V0KGMudGltZW91dCksYy5ob3ZlclN0YXRlPVwib3V0XCIsYy5vcHRpb25zLmRlbGF5JiZjLm9wdGlvbnMuZGVsYXkuaGlkZT92b2lkKGMudGltZW91dD1zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XCJvdXRcIj09Yy5ob3ZlclN0YXRlJiZjLmhpZGUoKX0sYy5vcHRpb25zLmRlbGF5LmhpZGUpKTpjLmhpZGUoKX0sYy5wcm90b3R5cGUuc2hvdz1mdW5jdGlvbigpe3ZhciBiPWEuRXZlbnQoXCJzaG93LmJzLlwiK3RoaXMudHlwZSk7aWYodGhpcy5oYXNDb250ZW50KCkmJnRoaXMuZW5hYmxlZCl7dGhpcy4kZWxlbWVudC50cmlnZ2VyKGIpO3ZhciBkPWEuY29udGFpbnModGhpcy4kZWxlbWVudFswXS5vd25lckRvY3VtZW50LmRvY3VtZW50RWxlbWVudCx0aGlzLiRlbGVtZW50WzBdKTtpZihiLmlzRGVmYXVsdFByZXZlbnRlZCgpfHwhZClyZXR1cm47dmFyIGU9dGhpcyxmPXRoaXMudGlwKCksZz10aGlzLmdldFVJRCh0aGlzLnR5cGUpO3RoaXMuc2V0Q29udGVudCgpLGYuYXR0cihcImlkXCIsZyksdGhpcy4kZWxlbWVudC5hdHRyKFwiYXJpYS1kZXNjcmliZWRieVwiLGcpLHRoaXMub3B0aW9ucy5hbmltYXRpb24mJmYuYWRkQ2xhc3MoXCJmYWRlXCIpO3ZhciBoPVwiZnVuY3Rpb25cIj09dHlwZW9mIHRoaXMub3B0aW9ucy5wbGFjZW1lbnQ/dGhpcy5vcHRpb25zLnBsYWNlbWVudC5jYWxsKHRoaXMsZlswXSx0aGlzLiRlbGVtZW50WzBdKTp0aGlzLm9wdGlvbnMucGxhY2VtZW50LGk9L1xccz9hdXRvP1xccz8vaSxqPWkudGVzdChoKTtqJiYoaD1oLnJlcGxhY2UoaSxcIlwiKXx8XCJ0b3BcIiksZi5kZXRhY2goKS5jc3Moe3RvcDowLGxlZnQ6MCxkaXNwbGF5OlwiYmxvY2tcIn0pLmFkZENsYXNzKGgpLmRhdGEoXCJicy5cIit0aGlzLnR5cGUsdGhpcyksdGhpcy5vcHRpb25zLmNvbnRhaW5lcj9mLmFwcGVuZFRvKHRoaXMub3B0aW9ucy5jb250YWluZXIpOmYuaW5zZXJ0QWZ0ZXIodGhpcy4kZWxlbWVudCksdGhpcy4kZWxlbWVudC50cmlnZ2VyKFwiaW5zZXJ0ZWQuYnMuXCIrdGhpcy50eXBlKTt2YXIgaz10aGlzLmdldFBvc2l0aW9uKCksbD1mWzBdLm9mZnNldFdpZHRoLG09ZlswXS5vZmZzZXRIZWlnaHQ7aWYoail7dmFyIG49aCxvPXRoaXMuZ2V0UG9zaXRpb24odGhpcy4kdmlld3BvcnQpO2g9XCJib3R0b21cIj09aCYmay5ib3R0b20rbT5vLmJvdHRvbT9cInRvcFwiOlwidG9wXCI9PWgmJmsudG9wLW08by50b3A/XCJib3R0b21cIjpcInJpZ2h0XCI9PWgmJmsucmlnaHQrbD5vLndpZHRoP1wibGVmdFwiOlwibGVmdFwiPT1oJiZrLmxlZnQtbDxvLmxlZnQ/XCJyaWdodFwiOmgsZi5yZW1vdmVDbGFzcyhuKS5hZGRDbGFzcyhoKX12YXIgcD10aGlzLmdldENhbGN1bGF0ZWRPZmZzZXQoaCxrLGwsbSk7dGhpcy5hcHBseVBsYWNlbWVudChwLGgpO3ZhciBxPWZ1bmN0aW9uKCl7dmFyIGE9ZS5ob3ZlclN0YXRlO2UuJGVsZW1lbnQudHJpZ2dlcihcInNob3duLmJzLlwiK2UudHlwZSksZS5ob3ZlclN0YXRlPW51bGwsXCJvdXRcIj09YSYmZS5sZWF2ZShlKX07YS5zdXBwb3J0LnRyYW5zaXRpb24mJnRoaXMuJHRpcC5oYXNDbGFzcyhcImZhZGVcIik/Zi5vbmUoXCJic1RyYW5zaXRpb25FbmRcIixxKS5lbXVsYXRlVHJhbnNpdGlvbkVuZChjLlRSQU5TSVRJT05fRFVSQVRJT04pOnEoKX19LGMucHJvdG90eXBlLmFwcGx5UGxhY2VtZW50PWZ1bmN0aW9uKGIsYyl7dmFyIGQ9dGhpcy50aXAoKSxlPWRbMF0ub2Zmc2V0V2lkdGgsZj1kWzBdLm9mZnNldEhlaWdodCxnPXBhcnNlSW50KGQuY3NzKFwibWFyZ2luLXRvcFwiKSwxMCksaD1wYXJzZUludChkLmNzcyhcIm1hcmdpbi1sZWZ0XCIpLDEwKTtpc05hTihnKSYmKGc9MCksaXNOYU4oaCkmJihoPTApLGIudG9wKz1nLGIubGVmdCs9aCxhLm9mZnNldC5zZXRPZmZzZXQoZFswXSxhLmV4dGVuZCh7dXNpbmc6ZnVuY3Rpb24oYSl7ZC5jc3Moe3RvcDpNYXRoLnJvdW5kKGEudG9wKSxsZWZ0Ok1hdGgucm91bmQoYS5sZWZ0KX0pfX0sYiksMCksZC5hZGRDbGFzcyhcImluXCIpO3ZhciBpPWRbMF0ub2Zmc2V0V2lkdGgsaj1kWzBdLm9mZnNldEhlaWdodDtcInRvcFwiPT1jJiZqIT1mJiYoYi50b3A9Yi50b3ArZi1qKTt2YXIgaz10aGlzLmdldFZpZXdwb3J0QWRqdXN0ZWREZWx0YShjLGIsaSxqKTtrLmxlZnQ/Yi5sZWZ0Kz1rLmxlZnQ6Yi50b3ArPWsudG9wO3ZhciBsPS90b3B8Ym90dG9tLy50ZXN0KGMpLG09bD8yKmsubGVmdC1lK2k6MiprLnRvcC1mK2osbj1sP1wib2Zmc2V0V2lkdGhcIjpcIm9mZnNldEhlaWdodFwiO2Qub2Zmc2V0KGIpLHRoaXMucmVwbGFjZUFycm93KG0sZFswXVtuXSxsKX0sYy5wcm90b3R5cGUucmVwbGFjZUFycm93PWZ1bmN0aW9uKGEsYixjKXt0aGlzLmFycm93KCkuY3NzKGM/XCJsZWZ0XCI6XCJ0b3BcIiw1MCooMS1hL2IpK1wiJVwiKS5jc3MoYz9cInRvcFwiOlwibGVmdFwiLFwiXCIpfSxjLnByb3RvdHlwZS5zZXRDb250ZW50PWZ1bmN0aW9uKCl7dmFyIGE9dGhpcy50aXAoKSxiPXRoaXMuZ2V0VGl0bGUoKTthLmZpbmQoXCIudG9vbHRpcC1pbm5lclwiKVt0aGlzLm9wdGlvbnMuaHRtbD9cImh0bWxcIjpcInRleHRcIl0oYiksYS5yZW1vdmVDbGFzcyhcImZhZGUgaW4gdG9wIGJvdHRvbSBsZWZ0IHJpZ2h0XCIpfSxjLnByb3RvdHlwZS5oaWRlPWZ1bmN0aW9uKGIpe2Z1bmN0aW9uIGQoKXtcImluXCIhPWUuaG92ZXJTdGF0ZSYmZi5kZXRhY2goKSxlLiRlbGVtZW50JiZlLiRlbGVtZW50LnJlbW92ZUF0dHIoXCJhcmlhLWRlc2NyaWJlZGJ5XCIpLnRyaWdnZXIoXCJoaWRkZW4uYnMuXCIrZS50eXBlKSxiJiZiKCl9dmFyIGU9dGhpcyxmPWEodGhpcy4kdGlwKSxnPWEuRXZlbnQoXCJoaWRlLmJzLlwiK3RoaXMudHlwZSk7aWYodGhpcy4kZWxlbWVudC50cmlnZ2VyKGcpLCFnLmlzRGVmYXVsdFByZXZlbnRlZCgpKXJldHVybiBmLnJlbW92ZUNsYXNzKFwiaW5cIiksYS5zdXBwb3J0LnRyYW5zaXRpb24mJmYuaGFzQ2xhc3MoXCJmYWRlXCIpP2Yub25lKFwiYnNUcmFuc2l0aW9uRW5kXCIsZCkuZW11bGF0ZVRyYW5zaXRpb25FbmQoYy5UUkFOU0lUSU9OX0RVUkFUSU9OKTpkKCksdGhpcy5ob3ZlclN0YXRlPW51bGwsdGhpc30sYy5wcm90b3R5cGUuZml4VGl0bGU9ZnVuY3Rpb24oKXt2YXIgYT10aGlzLiRlbGVtZW50OyhhLmF0dHIoXCJ0aXRsZVwiKXx8XCJzdHJpbmdcIiE9dHlwZW9mIGEuYXR0cihcImRhdGEtb3JpZ2luYWwtdGl0bGVcIikpJiZhLmF0dHIoXCJkYXRhLW9yaWdpbmFsLXRpdGxlXCIsYS5hdHRyKFwidGl0bGVcIil8fFwiXCIpLmF0dHIoXCJ0aXRsZVwiLFwiXCIpfSxjLnByb3RvdHlwZS5oYXNDb250ZW50PWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZ2V0VGl0bGUoKX0sYy5wcm90b3R5cGUuZ2V0UG9zaXRpb249ZnVuY3Rpb24oYil7Yj1ifHx0aGlzLiRlbGVtZW50O3ZhciBjPWJbMF0sZD1cIkJPRFlcIj09Yy50YWdOYW1lLGU9Yy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtudWxsPT1lLndpZHRoJiYoZT1hLmV4dGVuZCh7fSxlLHt3aWR0aDplLnJpZ2h0LWUubGVmdCxoZWlnaHQ6ZS5ib3R0b20tZS50b3B9KSk7dmFyIGY9d2luZG93LlNWR0VsZW1lbnQmJmMgaW5zdGFuY2VvZiB3aW5kb3cuU1ZHRWxlbWVudCxnPWQ/e3RvcDowLGxlZnQ6MH06Zj9udWxsOmIub2Zmc2V0KCksaD17c2Nyb2xsOmQ/ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcHx8ZG9jdW1lbnQuYm9keS5zY3JvbGxUb3A6Yi5zY3JvbGxUb3AoKX0saT1kP3t3aWR0aDphKHdpbmRvdykud2lkdGgoKSxoZWlnaHQ6YSh3aW5kb3cpLmhlaWdodCgpfTpudWxsO3JldHVybiBhLmV4dGVuZCh7fSxlLGgsaSxnKX0sYy5wcm90b3R5cGUuZ2V0Q2FsY3VsYXRlZE9mZnNldD1mdW5jdGlvbihhLGIsYyxkKXtyZXR1cm5cImJvdHRvbVwiPT1hP3t0b3A6Yi50b3ArYi5oZWlnaHQsbGVmdDpiLmxlZnQrYi53aWR0aC8yLWMvMn06XCJ0b3BcIj09YT97dG9wOmIudG9wLWQsbGVmdDpiLmxlZnQrYi53aWR0aC8yLWMvMn06XCJsZWZ0XCI9PWE/e3RvcDpiLnRvcCtiLmhlaWdodC8yLWQvMixsZWZ0OmIubGVmdC1jfTp7dG9wOmIudG9wK2IuaGVpZ2h0LzItZC8yLGxlZnQ6Yi5sZWZ0K2Iud2lkdGh9fSxjLnByb3RvdHlwZS5nZXRWaWV3cG9ydEFkanVzdGVkRGVsdGE9ZnVuY3Rpb24oYSxiLGMsZCl7dmFyIGU9e3RvcDowLGxlZnQ6MH07aWYoIXRoaXMuJHZpZXdwb3J0KXJldHVybiBlO3ZhciBmPXRoaXMub3B0aW9ucy52aWV3cG9ydCYmdGhpcy5vcHRpb25zLnZpZXdwb3J0LnBhZGRpbmd8fDAsZz10aGlzLmdldFBvc2l0aW9uKHRoaXMuJHZpZXdwb3J0KTtpZigvcmlnaHR8bGVmdC8udGVzdChhKSl7dmFyIGg9Yi50b3AtZi1nLnNjcm9sbCxpPWIudG9wK2YtZy5zY3JvbGwrZDtoPGcudG9wP2UudG9wPWcudG9wLWg6aT5nLnRvcCtnLmhlaWdodCYmKGUudG9wPWcudG9wK2cuaGVpZ2h0LWkpfWVsc2V7dmFyIGo9Yi5sZWZ0LWYsaz1iLmxlZnQrZitjO2o8Zy5sZWZ0P2UubGVmdD1nLmxlZnQtajprPmcucmlnaHQmJihlLmxlZnQ9Zy5sZWZ0K2cud2lkdGgtayl9cmV0dXJuIGV9LGMucHJvdG90eXBlLmdldFRpdGxlPWZ1bmN0aW9uKCl7dmFyIGEsYj10aGlzLiRlbGVtZW50LGM9dGhpcy5vcHRpb25zO3JldHVybiBhPWIuYXR0cihcImRhdGEtb3JpZ2luYWwtdGl0bGVcIil8fChcImZ1bmN0aW9uXCI9PXR5cGVvZiBjLnRpdGxlP2MudGl0bGUuY2FsbChiWzBdKTpjLnRpdGxlKX0sYy5wcm90b3R5cGUuZ2V0VUlEPWZ1bmN0aW9uKGEpe2RvIGErPX5+KDFlNipNYXRoLnJhbmRvbSgpKTt3aGlsZShkb2N1bWVudC5nZXRFbGVtZW50QnlJZChhKSk7cmV0dXJuIGF9LGMucHJvdG90eXBlLnRpcD1mdW5jdGlvbigpe2lmKCF0aGlzLiR0aXAmJih0aGlzLiR0aXA9YSh0aGlzLm9wdGlvbnMudGVtcGxhdGUpLDEhPXRoaXMuJHRpcC5sZW5ndGgpKXRocm93IG5ldyBFcnJvcih0aGlzLnR5cGUrXCIgYHRlbXBsYXRlYCBvcHRpb24gbXVzdCBjb25zaXN0IG9mIGV4YWN0bHkgMSB0b3AtbGV2ZWwgZWxlbWVudCFcIik7cmV0dXJuIHRoaXMuJHRpcH0sYy5wcm90b3R5cGUuYXJyb3c9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy4kYXJyb3c9dGhpcy4kYXJyb3d8fHRoaXMudGlwKCkuZmluZChcIi50b29sdGlwLWFycm93XCIpfSxjLnByb3RvdHlwZS5lbmFibGU9ZnVuY3Rpb24oKXt0aGlzLmVuYWJsZWQ9ITB9LGMucHJvdG90eXBlLmRpc2FibGU9ZnVuY3Rpb24oKXt0aGlzLmVuYWJsZWQ9ITF9LGMucHJvdG90eXBlLnRvZ2dsZUVuYWJsZWQ9ZnVuY3Rpb24oKXt0aGlzLmVuYWJsZWQ9IXRoaXMuZW5hYmxlZH0sYy5wcm90b3R5cGUudG9nZ2xlPWZ1bmN0aW9uKGIpe3ZhciBjPXRoaXM7YiYmKGM9YShiLmN1cnJlbnRUYXJnZXQpLmRhdGEoXCJicy5cIit0aGlzLnR5cGUpLGN8fChjPW5ldyB0aGlzLmNvbnN0cnVjdG9yKGIuY3VycmVudFRhcmdldCx0aGlzLmdldERlbGVnYXRlT3B0aW9ucygpKSxhKGIuY3VycmVudFRhcmdldCkuZGF0YShcImJzLlwiK3RoaXMudHlwZSxjKSkpLGI/KGMuaW5TdGF0ZS5jbGljaz0hYy5pblN0YXRlLmNsaWNrLGMuaXNJblN0YXRlVHJ1ZSgpP2MuZW50ZXIoYyk6Yy5sZWF2ZShjKSk6Yy50aXAoKS5oYXNDbGFzcyhcImluXCIpP2MubGVhdmUoYyk6Yy5lbnRlcihjKX0sYy5wcm90b3R5cGUuZGVzdHJveT1mdW5jdGlvbigpe3ZhciBhPXRoaXM7Y2xlYXJUaW1lb3V0KHRoaXMudGltZW91dCksdGhpcy5oaWRlKGZ1bmN0aW9uKCl7YS4kZWxlbWVudC5vZmYoXCIuXCIrYS50eXBlKS5yZW1vdmVEYXRhKFwiYnMuXCIrYS50eXBlKSxhLiR0aXAmJmEuJHRpcC5kZXRhY2goKSxhLiR0aXA9bnVsbCxhLiRhcnJvdz1udWxsLGEuJHZpZXdwb3J0PW51bGwsYS4kZWxlbWVudD1udWxsfSl9O3ZhciBkPWEuZm4udG9vbHRpcDthLmZuLnRvb2x0aXA9YixhLmZuLnRvb2x0aXAuQ29uc3RydWN0b3I9YyxhLmZuLnRvb2x0aXAubm9Db25mbGljdD1mdW5jdGlvbigpe3JldHVybiBhLmZuLnRvb2x0aXA9ZCx0aGlzfX0oalF1ZXJ5KSwrZnVuY3Rpb24oYSl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gYihiKXtyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCl7dmFyIGQ9YSh0aGlzKSxlPWQuZGF0YShcImJzLnBvcG92ZXJcIiksZj1cIm9iamVjdFwiPT10eXBlb2YgYiYmYjshZSYmL2Rlc3Ryb3l8aGlkZS8udGVzdChiKXx8KGV8fGQuZGF0YShcImJzLnBvcG92ZXJcIixlPW5ldyBjKHRoaXMsZikpLFwic3RyaW5nXCI9PXR5cGVvZiBiJiZlW2JdKCkpfSl9dmFyIGM9ZnVuY3Rpb24oYSxiKXt0aGlzLmluaXQoXCJwb3BvdmVyXCIsYSxiKX07aWYoIWEuZm4udG9vbHRpcCl0aHJvdyBuZXcgRXJyb3IoXCJQb3BvdmVyIHJlcXVpcmVzIHRvb2x0aXAuanNcIik7Yy5WRVJTSU9OPVwiMy4zLjdcIixjLkRFRkFVTFRTPWEuZXh0ZW5kKHt9LGEuZm4udG9vbHRpcC5Db25zdHJ1Y3Rvci5ERUZBVUxUUyx7cGxhY2VtZW50OlwicmlnaHRcIix0cmlnZ2VyOlwiY2xpY2tcIixjb250ZW50OlwiXCIsdGVtcGxhdGU6JzxkaXYgY2xhc3M9XCJwb3BvdmVyXCIgcm9sZT1cInRvb2x0aXBcIj48ZGl2IGNsYXNzPVwiYXJyb3dcIj48L2Rpdj48aDMgY2xhc3M9XCJwb3BvdmVyLXRpdGxlXCI+PC9oMz48ZGl2IGNsYXNzPVwicG9wb3Zlci1jb250ZW50XCI+PC9kaXY+PC9kaXY+J30pLGMucHJvdG90eXBlPWEuZXh0ZW5kKHt9LGEuZm4udG9vbHRpcC5Db25zdHJ1Y3Rvci5wcm90b3R5cGUpLGMucHJvdG90eXBlLmNvbnN0cnVjdG9yPWMsYy5wcm90b3R5cGUuZ2V0RGVmYXVsdHM9ZnVuY3Rpb24oKXtyZXR1cm4gYy5ERUZBVUxUU30sYy5wcm90b3R5cGUuc2V0Q29udGVudD1mdW5jdGlvbigpe3ZhciBhPXRoaXMudGlwKCksYj10aGlzLmdldFRpdGxlKCksYz10aGlzLmdldENvbnRlbnQoKTthLmZpbmQoXCIucG9wb3Zlci10aXRsZVwiKVt0aGlzLm9wdGlvbnMuaHRtbD9cImh0bWxcIjpcInRleHRcIl0oYiksYS5maW5kKFwiLnBvcG92ZXItY29udGVudFwiKS5jaGlsZHJlbigpLmRldGFjaCgpLmVuZCgpW3RoaXMub3B0aW9ucy5odG1sP1wic3RyaW5nXCI9PXR5cGVvZiBjP1wiaHRtbFwiOlwiYXBwZW5kXCI6XCJ0ZXh0XCJdKGMpLGEucmVtb3ZlQ2xhc3MoXCJmYWRlIHRvcCBib3R0b20gbGVmdCByaWdodCBpblwiKSxhLmZpbmQoXCIucG9wb3Zlci10aXRsZVwiKS5odG1sKCl8fGEuZmluZChcIi5wb3BvdmVyLXRpdGxlXCIpLmhpZGUoKX0sYy5wcm90b3R5cGUuaGFzQ29udGVudD1mdW5jdGlvbigpe3JldHVybiB0aGlzLmdldFRpdGxlKCl8fHRoaXMuZ2V0Q29udGVudCgpfSxjLnByb3RvdHlwZS5nZXRDb250ZW50PWZ1bmN0aW9uKCl7dmFyIGE9dGhpcy4kZWxlbWVudCxiPXRoaXMub3B0aW9ucztyZXR1cm4gYS5hdHRyKFwiZGF0YS1jb250ZW50XCIpfHwoXCJmdW5jdGlvblwiPT10eXBlb2YgYi5jb250ZW50P2IuY29udGVudC5jYWxsKGFbMF0pOmIuY29udGVudCl9LGMucHJvdG90eXBlLmFycm93PWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuJGFycm93PXRoaXMuJGFycm93fHx0aGlzLnRpcCgpLmZpbmQoXCIuYXJyb3dcIil9O3ZhciBkPWEuZm4ucG9wb3ZlcjthLmZuLnBvcG92ZXI9YixhLmZuLnBvcG92ZXIuQ29uc3RydWN0b3I9YyxhLmZuLnBvcG92ZXIubm9Db25mbGljdD1mdW5jdGlvbigpe3JldHVybiBhLmZuLnBvcG92ZXI9ZCx0aGlzfX0oalF1ZXJ5KSwrZnVuY3Rpb24oYSl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gYihjLGQpe3RoaXMuJGJvZHk9YShkb2N1bWVudC5ib2R5KSx0aGlzLiRzY3JvbGxFbGVtZW50PWEoYShjKS5pcyhkb2N1bWVudC5ib2R5KT93aW5kb3c6YyksdGhpcy5vcHRpb25zPWEuZXh0ZW5kKHt9LGIuREVGQVVMVFMsZCksdGhpcy5zZWxlY3Rvcj0odGhpcy5vcHRpb25zLnRhcmdldHx8XCJcIikrXCIgLm5hdiBsaSA+IGFcIix0aGlzLm9mZnNldHM9W10sdGhpcy50YXJnZXRzPVtdLHRoaXMuYWN0aXZlVGFyZ2V0PW51bGwsdGhpcy5zY3JvbGxIZWlnaHQ9MCx0aGlzLiRzY3JvbGxFbGVtZW50Lm9uKFwic2Nyb2xsLmJzLnNjcm9sbHNweVwiLGEucHJveHkodGhpcy5wcm9jZXNzLHRoaXMpKSx0aGlzLnJlZnJlc2goKSx0aGlzLnByb2Nlc3MoKX1mdW5jdGlvbiBjKGMpe3JldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKXt2YXIgZD1hKHRoaXMpLGU9ZC5kYXRhKFwiYnMuc2Nyb2xsc3B5XCIpLGY9XCJvYmplY3RcIj09dHlwZW9mIGMmJmM7ZXx8ZC5kYXRhKFwiYnMuc2Nyb2xsc3B5XCIsZT1uZXcgYih0aGlzLGYpKSxcInN0cmluZ1wiPT10eXBlb2YgYyYmZVtjXSgpfSl9Yi5WRVJTSU9OPVwiMy4zLjdcIixiLkRFRkFVTFRTPXtvZmZzZXQ6MTB9LGIucHJvdG90eXBlLmdldFNjcm9sbEhlaWdodD1mdW5jdGlvbigpe3JldHVybiB0aGlzLiRzY3JvbGxFbGVtZW50WzBdLnNjcm9sbEhlaWdodHx8TWF0aC5tYXgodGhpcy4kYm9keVswXS5zY3JvbGxIZWlnaHQsZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbEhlaWdodCl9LGIucHJvdG90eXBlLnJlZnJlc2g9ZnVuY3Rpb24oKXt2YXIgYj10aGlzLGM9XCJvZmZzZXRcIixkPTA7dGhpcy5vZmZzZXRzPVtdLHRoaXMudGFyZ2V0cz1bXSx0aGlzLnNjcm9sbEhlaWdodD10aGlzLmdldFNjcm9sbEhlaWdodCgpLGEuaXNXaW5kb3codGhpcy4kc2Nyb2xsRWxlbWVudFswXSl8fChjPVwicG9zaXRpb25cIixkPXRoaXMuJHNjcm9sbEVsZW1lbnQuc2Nyb2xsVG9wKCkpLHRoaXMuJGJvZHkuZmluZCh0aGlzLnNlbGVjdG9yKS5tYXAoZnVuY3Rpb24oKXt2YXIgYj1hKHRoaXMpLGU9Yi5kYXRhKFwidGFyZ2V0XCIpfHxiLmF0dHIoXCJocmVmXCIpLGY9L14jLi8udGVzdChlKSYmYShlKTtyZXR1cm4gZiYmZi5sZW5ndGgmJmYuaXMoXCI6dmlzaWJsZVwiKSYmW1tmW2NdKCkudG9wK2QsZV1dfHxudWxsfSkuc29ydChmdW5jdGlvbihhLGIpe3JldHVybiBhWzBdLWJbMF19KS5lYWNoKGZ1bmN0aW9uKCl7Yi5vZmZzZXRzLnB1c2godGhpc1swXSksYi50YXJnZXRzLnB1c2godGhpc1sxXSl9KX0sYi5wcm90b3R5cGUucHJvY2Vzcz1mdW5jdGlvbigpe3ZhciBhLGI9dGhpcy4kc2Nyb2xsRWxlbWVudC5zY3JvbGxUb3AoKSt0aGlzLm9wdGlvbnMub2Zmc2V0LGM9dGhpcy5nZXRTY3JvbGxIZWlnaHQoKSxkPXRoaXMub3B0aW9ucy5vZmZzZXQrYy10aGlzLiRzY3JvbGxFbGVtZW50LmhlaWdodCgpLGU9dGhpcy5vZmZzZXRzLGY9dGhpcy50YXJnZXRzLGc9dGhpcy5hY3RpdmVUYXJnZXQ7aWYodGhpcy5zY3JvbGxIZWlnaHQhPWMmJnRoaXMucmVmcmVzaCgpLGI+PWQpcmV0dXJuIGchPShhPWZbZi5sZW5ndGgtMV0pJiZ0aGlzLmFjdGl2YXRlKGEpO2lmKGcmJmI8ZVswXSlyZXR1cm4gdGhpcy5hY3RpdmVUYXJnZXQ9bnVsbCx0aGlzLmNsZWFyKCk7Zm9yKGE9ZS5sZW5ndGg7YS0tOylnIT1mW2FdJiZiPj1lW2FdJiYodm9pZCAwPT09ZVthKzFdfHxiPGVbYSsxXSkmJnRoaXMuYWN0aXZhdGUoZlthXSl9LGIucHJvdG90eXBlLmFjdGl2YXRlPWZ1bmN0aW9uKGIpe1xudGhpcy5hY3RpdmVUYXJnZXQ9Yix0aGlzLmNsZWFyKCk7dmFyIGM9dGhpcy5zZWxlY3RvcisnW2RhdGEtdGFyZ2V0PVwiJytiKydcIl0sJyt0aGlzLnNlbGVjdG9yKydbaHJlZj1cIicrYisnXCJdJyxkPWEoYykucGFyZW50cyhcImxpXCIpLmFkZENsYXNzKFwiYWN0aXZlXCIpO2QucGFyZW50KFwiLmRyb3Bkb3duLW1lbnVcIikubGVuZ3RoJiYoZD1kLmNsb3Nlc3QoXCJsaS5kcm9wZG93blwiKS5hZGRDbGFzcyhcImFjdGl2ZVwiKSksZC50cmlnZ2VyKFwiYWN0aXZhdGUuYnMuc2Nyb2xsc3B5XCIpfSxiLnByb3RvdHlwZS5jbGVhcj1mdW5jdGlvbigpe2EodGhpcy5zZWxlY3RvcikucGFyZW50c1VudGlsKHRoaXMub3B0aW9ucy50YXJnZXQsXCIuYWN0aXZlXCIpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpfTt2YXIgZD1hLmZuLnNjcm9sbHNweTthLmZuLnNjcm9sbHNweT1jLGEuZm4uc2Nyb2xsc3B5LkNvbnN0cnVjdG9yPWIsYS5mbi5zY3JvbGxzcHkubm9Db25mbGljdD1mdW5jdGlvbigpe3JldHVybiBhLmZuLnNjcm9sbHNweT1kLHRoaXN9LGEod2luZG93KS5vbihcImxvYWQuYnMuc2Nyb2xsc3B5LmRhdGEtYXBpXCIsZnVuY3Rpb24oKXthKCdbZGF0YS1zcHk9XCJzY3JvbGxcIl0nKS5lYWNoKGZ1bmN0aW9uKCl7dmFyIGI9YSh0aGlzKTtjLmNhbGwoYixiLmRhdGEoKSl9KX0pfShqUXVlcnkpLCtmdW5jdGlvbihhKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBiKGIpe3JldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKXt2YXIgZD1hKHRoaXMpLGU9ZC5kYXRhKFwiYnMudGFiXCIpO2V8fGQuZGF0YShcImJzLnRhYlwiLGU9bmV3IGModGhpcykpLFwic3RyaW5nXCI9PXR5cGVvZiBiJiZlW2JdKCl9KX12YXIgYz1mdW5jdGlvbihiKXt0aGlzLmVsZW1lbnQ9YShiKX07Yy5WRVJTSU9OPVwiMy4zLjdcIixjLlRSQU5TSVRJT05fRFVSQVRJT049MTUwLGMucHJvdG90eXBlLnNob3c9ZnVuY3Rpb24oKXt2YXIgYj10aGlzLmVsZW1lbnQsYz1iLmNsb3Nlc3QoXCJ1bDpub3QoLmRyb3Bkb3duLW1lbnUpXCIpLGQ9Yi5kYXRhKFwidGFyZ2V0XCIpO2lmKGR8fChkPWIuYXR0cihcImhyZWZcIiksZD1kJiZkLnJlcGxhY2UoLy4qKD89I1teXFxzXSokKS8sXCJcIikpLCFiLnBhcmVudChcImxpXCIpLmhhc0NsYXNzKFwiYWN0aXZlXCIpKXt2YXIgZT1jLmZpbmQoXCIuYWN0aXZlOmxhc3QgYVwiKSxmPWEuRXZlbnQoXCJoaWRlLmJzLnRhYlwiLHtyZWxhdGVkVGFyZ2V0OmJbMF19KSxnPWEuRXZlbnQoXCJzaG93LmJzLnRhYlwiLHtyZWxhdGVkVGFyZ2V0OmVbMF19KTtpZihlLnRyaWdnZXIoZiksYi50cmlnZ2VyKGcpLCFnLmlzRGVmYXVsdFByZXZlbnRlZCgpJiYhZi5pc0RlZmF1bHRQcmV2ZW50ZWQoKSl7dmFyIGg9YShkKTt0aGlzLmFjdGl2YXRlKGIuY2xvc2VzdChcImxpXCIpLGMpLHRoaXMuYWN0aXZhdGUoaCxoLnBhcmVudCgpLGZ1bmN0aW9uKCl7ZS50cmlnZ2VyKHt0eXBlOlwiaGlkZGVuLmJzLnRhYlwiLHJlbGF0ZWRUYXJnZXQ6YlswXX0pLGIudHJpZ2dlcih7dHlwZTpcInNob3duLmJzLnRhYlwiLHJlbGF0ZWRUYXJnZXQ6ZVswXX0pfSl9fX0sYy5wcm90b3R5cGUuYWN0aXZhdGU9ZnVuY3Rpb24oYixkLGUpe2Z1bmN0aW9uIGYoKXtnLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpLmZpbmQoXCI+IC5kcm9wZG93bi1tZW51ID4gLmFjdGl2ZVwiKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKS5lbmQoKS5maW5kKCdbZGF0YS10b2dnbGU9XCJ0YWJcIl0nKS5hdHRyKFwiYXJpYS1leHBhbmRlZFwiLCExKSxiLmFkZENsYXNzKFwiYWN0aXZlXCIpLmZpbmQoJ1tkYXRhLXRvZ2dsZT1cInRhYlwiXScpLmF0dHIoXCJhcmlhLWV4cGFuZGVkXCIsITApLGg/KGJbMF0ub2Zmc2V0V2lkdGgsYi5hZGRDbGFzcyhcImluXCIpKTpiLnJlbW92ZUNsYXNzKFwiZmFkZVwiKSxiLnBhcmVudChcIi5kcm9wZG93bi1tZW51XCIpLmxlbmd0aCYmYi5jbG9zZXN0KFwibGkuZHJvcGRvd25cIikuYWRkQ2xhc3MoXCJhY3RpdmVcIikuZW5kKCkuZmluZCgnW2RhdGEtdG9nZ2xlPVwidGFiXCJdJykuYXR0cihcImFyaWEtZXhwYW5kZWRcIiwhMCksZSYmZSgpfXZhciBnPWQuZmluZChcIj4gLmFjdGl2ZVwiKSxoPWUmJmEuc3VwcG9ydC50cmFuc2l0aW9uJiYoZy5sZW5ndGgmJmcuaGFzQ2xhc3MoXCJmYWRlXCIpfHwhIWQuZmluZChcIj4gLmZhZGVcIikubGVuZ3RoKTtnLmxlbmd0aCYmaD9nLm9uZShcImJzVHJhbnNpdGlvbkVuZFwiLGYpLmVtdWxhdGVUcmFuc2l0aW9uRW5kKGMuVFJBTlNJVElPTl9EVVJBVElPTik6ZigpLGcucmVtb3ZlQ2xhc3MoXCJpblwiKX07dmFyIGQ9YS5mbi50YWI7YS5mbi50YWI9YixhLmZuLnRhYi5Db25zdHJ1Y3Rvcj1jLGEuZm4udGFiLm5vQ29uZmxpY3Q9ZnVuY3Rpb24oKXtyZXR1cm4gYS5mbi50YWI9ZCx0aGlzfTt2YXIgZT1mdW5jdGlvbihjKXtjLnByZXZlbnREZWZhdWx0KCksYi5jYWxsKGEodGhpcyksXCJzaG93XCIpfTthKGRvY3VtZW50KS5vbihcImNsaWNrLmJzLnRhYi5kYXRhLWFwaVwiLCdbZGF0YS10b2dnbGU9XCJ0YWJcIl0nLGUpLm9uKFwiY2xpY2suYnMudGFiLmRhdGEtYXBpXCIsJ1tkYXRhLXRvZ2dsZT1cInBpbGxcIl0nLGUpfShqUXVlcnkpLCtmdW5jdGlvbihhKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBiKGIpe3JldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKXt2YXIgZD1hKHRoaXMpLGU9ZC5kYXRhKFwiYnMuYWZmaXhcIiksZj1cIm9iamVjdFwiPT10eXBlb2YgYiYmYjtlfHxkLmRhdGEoXCJicy5hZmZpeFwiLGU9bmV3IGModGhpcyxmKSksXCJzdHJpbmdcIj09dHlwZW9mIGImJmVbYl0oKX0pfXZhciBjPWZ1bmN0aW9uKGIsZCl7dGhpcy5vcHRpb25zPWEuZXh0ZW5kKHt9LGMuREVGQVVMVFMsZCksdGhpcy4kdGFyZ2V0PWEodGhpcy5vcHRpb25zLnRhcmdldCkub24oXCJzY3JvbGwuYnMuYWZmaXguZGF0YS1hcGlcIixhLnByb3h5KHRoaXMuY2hlY2tQb3NpdGlvbix0aGlzKSkub24oXCJjbGljay5icy5hZmZpeC5kYXRhLWFwaVwiLGEucHJveHkodGhpcy5jaGVja1Bvc2l0aW9uV2l0aEV2ZW50TG9vcCx0aGlzKSksdGhpcy4kZWxlbWVudD1hKGIpLHRoaXMuYWZmaXhlZD1udWxsLHRoaXMudW5waW49bnVsbCx0aGlzLnBpbm5lZE9mZnNldD1udWxsLHRoaXMuY2hlY2tQb3NpdGlvbigpfTtjLlZFUlNJT049XCIzLjMuN1wiLGMuUkVTRVQ9XCJhZmZpeCBhZmZpeC10b3AgYWZmaXgtYm90dG9tXCIsYy5ERUZBVUxUUz17b2Zmc2V0OjAsdGFyZ2V0OndpbmRvd30sYy5wcm90b3R5cGUuZ2V0U3RhdGU9ZnVuY3Rpb24oYSxiLGMsZCl7dmFyIGU9dGhpcy4kdGFyZ2V0LnNjcm9sbFRvcCgpLGY9dGhpcy4kZWxlbWVudC5vZmZzZXQoKSxnPXRoaXMuJHRhcmdldC5oZWlnaHQoKTtpZihudWxsIT1jJiZcInRvcFwiPT10aGlzLmFmZml4ZWQpcmV0dXJuIGU8YyYmXCJ0b3BcIjtpZihcImJvdHRvbVwiPT10aGlzLmFmZml4ZWQpcmV0dXJuIG51bGwhPWM/IShlK3RoaXMudW5waW48PWYudG9wKSYmXCJib3R0b21cIjohKGUrZzw9YS1kKSYmXCJib3R0b21cIjt2YXIgaD1udWxsPT10aGlzLmFmZml4ZWQsaT1oP2U6Zi50b3Asaj1oP2c6YjtyZXR1cm4gbnVsbCE9YyYmZTw9Yz9cInRvcFwiOm51bGwhPWQmJmkraj49YS1kJiZcImJvdHRvbVwifSxjLnByb3RvdHlwZS5nZXRQaW5uZWRPZmZzZXQ9ZnVuY3Rpb24oKXtpZih0aGlzLnBpbm5lZE9mZnNldClyZXR1cm4gdGhpcy5waW5uZWRPZmZzZXQ7dGhpcy4kZWxlbWVudC5yZW1vdmVDbGFzcyhjLlJFU0VUKS5hZGRDbGFzcyhcImFmZml4XCIpO3ZhciBhPXRoaXMuJHRhcmdldC5zY3JvbGxUb3AoKSxiPXRoaXMuJGVsZW1lbnQub2Zmc2V0KCk7cmV0dXJuIHRoaXMucGlubmVkT2Zmc2V0PWIudG9wLWF9LGMucHJvdG90eXBlLmNoZWNrUG9zaXRpb25XaXRoRXZlbnRMb29wPWZ1bmN0aW9uKCl7c2V0VGltZW91dChhLnByb3h5KHRoaXMuY2hlY2tQb3NpdGlvbix0aGlzKSwxKX0sYy5wcm90b3R5cGUuY2hlY2tQb3NpdGlvbj1mdW5jdGlvbigpe2lmKHRoaXMuJGVsZW1lbnQuaXMoXCI6dmlzaWJsZVwiKSl7dmFyIGI9dGhpcy4kZWxlbWVudC5oZWlnaHQoKSxkPXRoaXMub3B0aW9ucy5vZmZzZXQsZT1kLnRvcCxmPWQuYm90dG9tLGc9TWF0aC5tYXgoYShkb2N1bWVudCkuaGVpZ2h0KCksYShkb2N1bWVudC5ib2R5KS5oZWlnaHQoKSk7XCJvYmplY3RcIiE9dHlwZW9mIGQmJihmPWU9ZCksXCJmdW5jdGlvblwiPT10eXBlb2YgZSYmKGU9ZC50b3AodGhpcy4kZWxlbWVudCkpLFwiZnVuY3Rpb25cIj09dHlwZW9mIGYmJihmPWQuYm90dG9tKHRoaXMuJGVsZW1lbnQpKTt2YXIgaD10aGlzLmdldFN0YXRlKGcsYixlLGYpO2lmKHRoaXMuYWZmaXhlZCE9aCl7bnVsbCE9dGhpcy51bnBpbiYmdGhpcy4kZWxlbWVudC5jc3MoXCJ0b3BcIixcIlwiKTt2YXIgaT1cImFmZml4XCIrKGg/XCItXCIraDpcIlwiKSxqPWEuRXZlbnQoaStcIi5icy5hZmZpeFwiKTtpZih0aGlzLiRlbGVtZW50LnRyaWdnZXIoaiksai5pc0RlZmF1bHRQcmV2ZW50ZWQoKSlyZXR1cm47dGhpcy5hZmZpeGVkPWgsdGhpcy51bnBpbj1cImJvdHRvbVwiPT1oP3RoaXMuZ2V0UGlubmVkT2Zmc2V0KCk6bnVsbCx0aGlzLiRlbGVtZW50LnJlbW92ZUNsYXNzKGMuUkVTRVQpLmFkZENsYXNzKGkpLnRyaWdnZXIoaS5yZXBsYWNlKFwiYWZmaXhcIixcImFmZml4ZWRcIikrXCIuYnMuYWZmaXhcIil9XCJib3R0b21cIj09aCYmdGhpcy4kZWxlbWVudC5vZmZzZXQoe3RvcDpnLWItZn0pfX07dmFyIGQ9YS5mbi5hZmZpeDthLmZuLmFmZml4PWIsYS5mbi5hZmZpeC5Db25zdHJ1Y3Rvcj1jLGEuZm4uYWZmaXgubm9Db25mbGljdD1mdW5jdGlvbigpe3JldHVybiBhLmZuLmFmZml4PWQsdGhpc30sYSh3aW5kb3cpLm9uKFwibG9hZFwiLGZ1bmN0aW9uKCl7YSgnW2RhdGEtc3B5PVwiYWZmaXhcIl0nKS5lYWNoKGZ1bmN0aW9uKCl7dmFyIGM9YSh0aGlzKSxkPWMuZGF0YSgpO2Qub2Zmc2V0PWQub2Zmc2V0fHx7fSxudWxsIT1kLm9mZnNldEJvdHRvbSYmKGQub2Zmc2V0LmJvdHRvbT1kLm9mZnNldEJvdHRvbSksbnVsbCE9ZC5vZmZzZXRUb3AmJihkLm9mZnNldC50b3A9ZC5vZmZzZXRUb3ApLGIuY2FsbChjLGQpfSl9KX0oalF1ZXJ5KTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9