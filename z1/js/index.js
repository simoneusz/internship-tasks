document.addEventListener("DOMContentLoaded", () => {
    const section1 = document.querySelector(".section1");
    const nav = document.querySelector(".nav");
    const animated_item = document.querySelectorAll(".poping-up");

    function get_bottom_position() {
        const window_height = window.innerHeight;
        const scroll_top =
            window.pageYOffset || document.documentElement.scrollTop;
        const bottom_position = window_height + scroll_top;
        return bottom_position;
    }

    function get_block_center_position(element) {
        const rect = element.getBoundingClientRect();
        const scrollY =
            window.pageYOffset || document.documentElement.scrollTop;
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + scrollY + rect.height / 2;
        return { x: centerX, y: centerY };
    }

    const nav_fixed = () => {
        let scroll_top = window.scrollY;
        let section1_center = section1.offsetHeight / 4;

        if (scroll_top >= section1_center && window.innerWidth > 767) {
            nav.classList.add("fixed");
            section1.style.marginTop = `${nav.offsetHeight}px`;
        } else {
            nav.classList.remove("fixed");
            section1.style.marginTop = `0px`;
        }
    };

    const scroll_anim = () => {
        let bottom_position = get_bottom_position() - 75;
        animated_item.forEach((e) => {
            const center_position = get_block_center_position(e);
            if (bottom_position >= center_position.y) {
                e.classList.add("animation");
            } else {
                e.classList.remove("animation");
            }
        });
    };

    nav_fixed();
    scroll_anim();
    window.addEventListener("scroll", () => {
        nav_fixed();
        scroll_anim();
    });
});
