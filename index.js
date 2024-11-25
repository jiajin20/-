/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2024-06-02 14:39:08
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2024-06-03 15:50:06
 * @FilePath: \项目二答辩\project 7\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const slide = document.querySelector(".slider")
const texts = document.querySelectorAll('.text')
const items = document.querySelectorAll(".item")
let currentSlideIndex = 0;
function textslide(index) {
    texts.forEach((text, i) => {
        text.classList.toggle('active', i === index);
    })
}
function background() {  
    var items = document.querySelectorAll(".item:nth-child(1)");  
    for (var i = 0; i < items.length; i++) {  
        var itemStyle = window.getComputedStyle(items[i]);  
        var backgroundImage = itemStyle.getPropertyValue('background-image');   
    }  
    var img = document.querySelector(".slide_bg");  
    img.style.backgroundImage = backgroundImage;  
} 
document.getElementById("prev").addEventListener("click", () => {
    const items = document.querySelectorAll(".item")
    slide.prepend(items[items.length - 1])
    currentSlideIndex = (currentSlideIndex - 1 + texts.length) % texts.length;
    textslide(currentSlideIndex)
    background(currentSlideIndex)
})
document.getElementById("next").addEventListener("click", () => {
    const items = document.querySelectorAll(".item")
    slide.appendChild(items[0])
    currentSlideIndex = (currentSlideIndex + 1) % texts.length;
    textslide(currentSlideIndex)
    background(currentSlideIndex)
})