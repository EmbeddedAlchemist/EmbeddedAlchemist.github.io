
const loading_mask = document.getElementById('loading_mask');
const loading_tips = document.getElementById('loading_tips');
const tips_text = [
    { text: "Nice to see you!", timeout: 2500, next: 1 },
    { text: "Just a few seconds...", timeout: 4000, next: 2 },
    { text: "Resources are still loading...", timeout: 5000, next: 3 },
    { text: "It might take a while...", timeout: 5000, next: 4 },
    { text: "Still loading... You may ckeck your network.", timeout: 5000, next: 5 },
    { text: "在中国大陆，你可能需要使用VPN才能访问这个页面", timeout: 5000, next: 4 },
];
const text_set_func = (text) => {
    loading_tips.style.animation = "0.5s fade-out"
    animation_end_cb = loading_tips.addEventListener('animationend', e => {
        loading_tips.removeEventListener('animationend', loading_tips);
        loading_tips.innerHTML = text;
        loading_tips.style.animation = "0.5s fade-in"
    })
}
const text_switch_func = (text_arr, index) => {
    text_set_func(text_arr[index].text)
    timer_id = setTimeout(text_switch_func, text_arr[index].timeout, text_arr, text_arr[index].next);

}

let timer_id = setTimeout(text_switch_func, 1000, tips_text, 0);

window.addEventListener('load', (e) => {
    clearTimeout(timer_id);
    text_set_func("Let's GO!")
    setTimeout(() => {
        loading_mask.removeAttribute("display-flag");
    }, 850);
})
