import {onMounted, ref} from "vue";
/**
 * 鼠标点击事件
 */
export default function () {
    const x = ref(-1)
    const y = ref(-1)
    const hook = (event: MouseEvent) => {
        x.value = event.pageX
        y.value = event.pageY
    }
    onMounted(() => {
        window.addEventListener('click', hook)
    })
    return {
        x, y
    }
}