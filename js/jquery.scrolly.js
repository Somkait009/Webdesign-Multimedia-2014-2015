/* jquery.scrolly v0.1 | (c) n33 | n33.co @n33co | MIT */
(function(e) {
    var t = "click.scrolly";
    e.fn.scrolly = function(r, i) {
        var s = e(this);
        return r || (r = 1e3), i || (i = 0), s.off(t).on(t, function(t) {
            var n, s, o, u = e(this),
                a = u.attr("href");
            a.charAt(0) == "#" && a.length > 1 && (n = e(a)).length > 0 && (s = n.offset().top, u.hasClass("scrolly-centered") ? o = s - (e(window).height() - n.outerHeight()) / 2 : (o = Math.max(s, 0), i && (typeof i == "function" ? o -= i() : o -= i)), t.preventDefault(), e("body,html").stop().animate({
                scrollTop: o
            }, r, "swing"))
        }), s
    }
})(jQuery);