(() => {
    "use strict";
    function e(e, t) {
        let s;
        return (...i) => {
            s && clearTimeout(s),
                (s = setTimeout(() => {
                    e(...i), (s = null);
                }, t));
        };
    }
    !(function () {
        const e = document.querySelectorAll('[data-demonstration="listWrapper"] > *'),
            t = document.querySelectorAll('[data-demonstration="demonstrationWrapper"]');
        let s;
        //const i = ["camuflagem.jpg", "rastreio.jpg", "facebook-auto-post.jpg", "metadados.jpg", "analise-criativo.jpg", "criptografia-russa.jpg", "templates-landingpage.jpg", "plr-find.jpg", "clonador.jpg", "relatorios.jpg"];
        const i = ["o2RWwFQIhKo", "tvKr6ROIZE4", "SF9HAp3K9Lo", "0zaC5RWipTw"];
        e.length,
            t.length &&
                e.forEach((e, n) => {
                    e.addEventListener("click", () =>
                        (function (e) {
                            s != e &&
                                ((s = e),
                                t.forEach((e) => {
                                    e.classList.add("hide");
                                }),
                                //(t[e].querySelector("img").src = `./img/tools/${i[e]}`),
                                (t[e].querySelector("iframe").src = `https://www.youtube.com/embed/${i[e]}`),
                                t[e].classList.remove("hide"));
                        })(n)
                    );
                });
    })(),
        (function () {
            const e = document.querySelectorAll('[data-demonstration="listWrapper"] > *'),
                t = document.querySelector('[data-demonstration="controlsScroll"]');
            function s(e) {
                t.scrollLeft = e.target.offsetLeft - t.offsetWidth / 4;
            }
            function i() {
                t.scrollLeft = 0;
            }
            e.length,
                t &&
                    e.forEach((e, t) => {
                        0 == t && e.addEventListener("click", i), 0 != t && e.addEventListener("click", s);
                    });
        })(),
        document.querySelector(".swiper"),
        document.querySelector(".swiper-depositions") &&
            (new Swiper(".swiper", {
                slidesPerView: 2,
                spaceBetween: 5,
                loop: !0,
                speed: 500,
                navigation: { nextEl: ".swiper-button-next-custom", prevEl: ".swiper-button-prev-custom" },
                autoplay: { delay: 1e3, disableOnInteraction: !1 },
                breakpoints: { 320: { slidesPerView: 3, spaceBetween: 5 }, 480: { slidesPerView: 3, spaceBetween: 20 }, 768: { slidesPerView: 5, spaceBetween: 30 } },
            }),
            new Swiper(".swiper-depositions", {
                slidesPerView: 1,
                spaceBetween: 40,
                loop: !0,
                speed: 500,
                navigation: { nextEl: ".swiper-button-next-custom", prevEl: ".swiper-button-prev-custom" },
                autoplay: { delay: 2e3, disableOnInteraction: !1 },
            })),
        (function () {
            const e = document.querySelectorAll("[data-openfaq]"),
                t = document.querySelectorAll('[data-anime="according"] dt'),
                s = "ativo";
            function i(e) {
                const i = document.querySelectorAll(`#${e.currentTarget.dataset.openfaq} dt`);
                t.forEach((e) => {
                    e.classList.remove(s), e.nextElementSibling.classList.remove(s);
                }),
                    i.forEach((e) => {
                        e.classList.add(s), e.nextElementSibling.classList.add(s);
                    });
            }
            e.length &&
                e.forEach((e) => {
                    e.addEventListener("click", i);
                });
        })(),
        new (class {
            constructor(e) {
                (this.accordionList = document.querySelectorAll(e)), (this.activeClass = "ativo");
            }
            toggleAccordion(e) {
                e.classList.toggle(this.activeClass), e.nextElementSibling.classList.toggle(this.activeClass);
            }
            addAccordionEvent() {
                this.accordionList.forEach((e) => {
                    e.addEventListener("click", () => this.toggleAccordion(e));
                });
            }
            init() {
                return this.accordionList.length && this.addAccordionEvent(), this;
            }
        })('[data-anime="according"] dt').init(),
        new (class {
            constructor(e, t) {
                (this.linksInternos = document.querySelectorAll(e)), (this.options = void 0 === t ? { behavior: "smooth", block: "start" } : t), (this.scrollToSection = this.scrollToSection.bind(this));
            }
            getScrollTopByHref(e) {
                const t = e.getAttribute("href");
                return document.querySelector(t).offsetTop;
            }
            scrollToSection(e) {
                e.preventDefault();
                const t = this.getScrollTopByHref(e.currentTarget) - 80;
                this.scrollToPosition(t);
            }
            scrollToPosition(e) {
                !(function (e, t, s) {
                    const i = window.scrollX || window.pageXOffset,
                        n = window.scrollY || window.pageYOffset,
                        o = 0 - i,
                        c = t - n,
                        l = new Date().getTime();
                    s = void 0 !== s ? s : 400;
                    const r = (e, t, s, i) => ((e /= i / 2) < 1 ? (s / 2) * e * e * e * e + t : (-s / 2) * ((e -= 2) * e * e * e - 2) + t),
                        a = setInterval(() => {
                            const e = new Date().getTime() - l,
                                t = r(e, i, o, s),
                                d = r(e, n, c, s);
                            e >= s && clearInterval(a), window.scroll(t, d);
                        }, 1e3 / 60);
                })(0, e);
            }
            addLinkEvent() {
                this.linksInternos.forEach((e) => {
                    e.addEventListener("click", this.scrollToSection);
                });
            }
            init() {
                return this.linksInternos.length && this.addLinkEvent(), this;
            }
        })('a[href^="#"]').init(),
        new (class {
            constructor(e) {
                (this.list = document.querySelectorAll(e)), (this.classSelected = "active"), (this.handleClick = this.handleClick.bind(this));
            }
            handleClick({ currentTarget: e }) {
                this.list.forEach((e) => e.classList.remove(this.classSelected)), e.classList.add(this.classSelected);
            }
            handleEvents() {
                this.list.forEach((e) => e.addEventListener("click", this.handleClick));
            }
            init() {
                this.handleEvents();
            }
        })('[data-demonstration="listWrapper"] > *').init(),
        new (class {
            constructor(t) {
                (this.header = document.querySelector(t)), (this.classSelected = "active"), (this.handleScroll = e(this.handleScroll.bind(this), 500));
            }
            handleScroll() {
                scrollY > 0 ? this.header.classList.add(this.classSelected) : this.header.classList.remove(this.classSelected);
            }
            init() {
                return this.header && window.addEventListener("scroll", this.handleScroll), this;
            }
            stop() {
                window.remove("scroll", this.handleScroll);
            }
        })('[data-animate="header"]').init(),
        new (class {
            constructor(t, s) {
                (this.sections = document.querySelectorAll(t)), (this.windowHeight = window.innerHeight - s), (this.checkDistance = e(this.checkDistance.bind(this), 50));
            }
            getDistance() {
                this.distance = [...this.sections].map((e) => {
                    const t = e.offsetTop;
                    return { element: e, offset: Math.floor(t - this.windowHeight) };
                });
            }
            checkDistance() {
                this.distance.forEach((e) => {
                    window.pageYOffset > e.offset && e.element.classList.add("active");
                });
            }
            init() {
                return this.sections.length && (this.getDistance(), this.checkDistance(), window.addEventListener("scroll", this.checkDistance)), this;
            }
            stop() {
                window.removeEventListener("scroll", this.checkDistance);
            }
        })("[data-lazyload]", 0).init();
})();
