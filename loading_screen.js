
const loading_mask = document.getElementById('loading_mask');
const loading_tips = document.getElementById('loading_tips');
const tips_text = [
    { text: "Nice to see you!", timeout: 2500, next: 1 },
    { text: "Resources are still loading...", timeout: 3000, next: 2 },
    { text: "Just a few seconds...", timeout: 4000, next: 3 },
    { text: "It might take a while...", timeout: 5000, next: 4 },
    { text: "You may ckeck your network.", timeout: 5000, next: 5 },
    { text: "在中国大陆，你可能需要使用VPN才能访问这个页面", timeout: 5000, next: 4 },
];
let inner_timer_id = 0;
const text_set_func = (text) => {
    loading_tips.style.filter = "blur(3px)";
    loading_tips.style.transform = "scale(0.95)";
    loading_tips.style.opacity = 0;
    inner_timer_id = setTimeout(() => {
        loading_tips.innerHTML = text;
        loading_tips.style.filter = "blur(0px)";
        loading_tips.style.transform = "scale(1)";
        loading_tips.style.opacity = 1;
    }, 500);
}
const text_switch_func = (text_arr, index) => {
    text_set_func(text_arr[index].text)
    timer_id = setTimeout(text_switch_func, text_arr[index].timeout, text_arr, text_arr[index].next);

}

let timer_id = setTimeout(text_switch_func, 1000, tips_text, 0);

window.addEventListener('load', (e) => {
    clearTimeout(timer_id);
    clearTimeout(inner_timer_id);
    text_set_func("Let's GO!")
    setTimeout(() => {
        loading_mask.removeAttribute("display-flag");
    }, 850);
})
